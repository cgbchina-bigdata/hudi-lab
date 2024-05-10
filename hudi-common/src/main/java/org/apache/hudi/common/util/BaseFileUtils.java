/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.hudi.common.util;

import org.apache.hudi.avro.HoodieAvroWriteSupport;
import org.apache.hudi.avro.HoodieBloomFilterWriteSupport;
import org.apache.hudi.common.bloom.BloomFilter;
import org.apache.hudi.common.bloom.BloomFilterFactory;
import org.apache.hudi.common.bloom.BloomFilterTypeCode;
import org.apache.hudi.common.model.HoodieColumnRangeMetadata;
import org.apache.hudi.common.model.HoodieFileFormat;
import org.apache.hudi.common.model.HoodieKey;
import org.apache.hudi.common.table.HoodieTableMetaClient;
import org.apache.hudi.common.util.collection.ClosableIterator;
import org.apache.hudi.exception.HoodieException;
import org.apache.hudi.keygen.BaseKeyGenerator;
import org.apache.hudi.storage.HoodieStorage;
import org.apache.hudi.storage.StorageConfiguration;
import org.apache.hudi.storage.StoragePath;

import org.apache.avro.Schema;
import org.apache.avro.generic.GenericRecord;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

/**
 * Utils for Hudi base file.
 */
public abstract class BaseFileUtils {
  public static final String PARQUET_UTILS = "org.apache.hudi.common.util.ParquetUtils";
  public static final String ORC_UTILS = "org.apache.hudi.common.util.OrcUtils";
  public static final String HFILE_UTILS = "org.apache.hudi.common.util.HFileUtils";

  public static BaseFileUtils getInstance(StoragePath path) {
    if (path.getFileExtension().equals(HoodieFileFormat.PARQUET.getFileExtension())) {
      return ReflectionUtils.loadClass(PARQUET_UTILS);
    } else if (path.getFileExtension().equals(HoodieFileFormat.ORC.getFileExtension())) {
      return ReflectionUtils.loadClass(ORC_UTILS);
    } else if (path.getFileExtension().equals(HoodieFileFormat.HFILE.getFileExtension())) {
      return ReflectionUtils.loadClass(HFILE_UTILS);
    }
    throw new UnsupportedOperationException("The format for file " + path + " is not supported yet.");
  }

  public static BaseFileUtils getInstance(HoodieFileFormat fileFormat) {
    if (HoodieFileFormat.PARQUET.equals(fileFormat)) {
      return ReflectionUtils.loadClass(PARQUET_UTILS);
    } else if (HoodieFileFormat.ORC.equals(fileFormat)) {
      return ReflectionUtils.loadClass(ORC_UTILS);
    } else if (HoodieFileFormat.HFILE.equals(fileFormat)) {
      return ReflectionUtils.loadClass(HFILE_UTILS);
    }
    throw new UnsupportedOperationException(fileFormat.name() + " format not supported yet.");
  }

  public static BaseFileUtils getInstance(HoodieTableMetaClient metaClient) {
    return getInstance(metaClient.getTableConfig().getBaseFileFormat());
  }

  /**
   * Read the rowKey list from the given data file.
   *
   * @param configuration configuration to build storage object.
   * @param filePath      the data file path.
   * @return set of row keys
   */
  public Set<String> readRowKeys(StorageConfiguration<?> configuration, StoragePath filePath) {
    return filterRowKeys(configuration, filePath, new HashSet<>());
  }

  /**
   * Read the bloom filter from the metadata of the given data file.
   *
   * @param configuration configuration.
   * @param filePath      the data file path.
   * @return a BloomFilter object.
   */
  public BloomFilter readBloomFilterFromMetadata(StorageConfiguration<?> configuration, StoragePath filePath) {
    Map<String, String> footerVals =
        readFooter(configuration, false, filePath,
            HoodieAvroWriteSupport.HOODIE_AVRO_BLOOM_FILTER_METADATA_KEY,
            HoodieAvroWriteSupport.OLD_HOODIE_AVRO_BLOOM_FILTER_METADATA_KEY,
            HoodieBloomFilterWriteSupport.HOODIE_BLOOM_FILTER_TYPE_CODE);
    String footerVal = footerVals.get(HoodieAvroWriteSupport.HOODIE_AVRO_BLOOM_FILTER_METADATA_KEY);
    if (null == footerVal) {
      // We use old style key "com.uber.hoodie.bloomfilter"
      footerVal = footerVals.get(HoodieAvroWriteSupport.OLD_HOODIE_AVRO_BLOOM_FILTER_METADATA_KEY);
    }
    BloomFilter toReturn = null;
    if (footerVal != null) {
      if (footerVals.containsKey(HoodieBloomFilterWriteSupport.HOODIE_BLOOM_FILTER_TYPE_CODE)) {
        toReturn = BloomFilterFactory.fromString(footerVal,
            footerVals.get(HoodieBloomFilterWriteSupport.HOODIE_BLOOM_FILTER_TYPE_CODE));
      } else {
        toReturn = BloomFilterFactory.fromString(footerVal, BloomFilterTypeCode.SIMPLE.name());
      }
    }
    return toReturn;
  }

  /**
   * Read the min and max record key from the metadata of the given data file.
   *
   * @param configuration configuration.
   * @param filePath      the data file path.
   * @return a array of two string where the first is min record key and the second is max record key.
   */
  public String[] readMinMaxRecordKeys(StorageConfiguration<?> configuration, StoragePath filePath) {
    Map<String, String> minMaxKeys = readFooter(configuration, true, filePath,
        HoodieBloomFilterWriteSupport.HOODIE_MIN_RECORD_KEY_FOOTER, HoodieBloomFilterWriteSupport.HOODIE_MAX_RECORD_KEY_FOOTER);
    if (minMaxKeys.size() != 2) {
      throw new HoodieException(
          String.format("Could not read min/max record key out of footer correctly from %s. read) : %s",
              filePath, minMaxKeys));
    }
    return new String[] {minMaxKeys.get(HoodieBloomFilterWriteSupport.HOODIE_MIN_RECORD_KEY_FOOTER),
        minMaxKeys.get(HoodieBloomFilterWriteSupport.HOODIE_MAX_RECORD_KEY_FOOTER)};
  }

  /**
   * Read the data file
   * NOTE: This literally reads the entire file contents, thus should be used with caution.
   *
   * @param configuration configuration.
   * @param filePath      the data file path.
   * @return a list of GenericRecord.
   */
  public abstract List<GenericRecord> readAvroRecords(StorageConfiguration<?> configuration, StoragePath filePath);

  /**
   * Read the data file using the given schema
   * NOTE: This literally reads the entire file contents, thus should be used with caution.
   *
   * @param configuration configuration.
   * @param filePath      the data file path.
   * @return a list of GenericRecord.
   */
  public abstract List<GenericRecord> readAvroRecords(StorageConfiguration<?> configuration, StoragePath filePath, Schema schema);

  /**
   * Read the footer data of the given data file.
   *
   * @param configuration configuration.
   * @param required      require the footer data to be in data file.
   * @param filePath      the data file path.
   * @param footerNames   the footer names to read.
   * @return a map where the key is the footer name and the value is the footer value.
   */
  public abstract Map<String, String> readFooter(StorageConfiguration<?> configuration, boolean required, StoragePath filePath,
                                                 String... footerNames);

  /**
   * Returns the number of records in the data file.
   *
   * @param configuration configuration.
   * @param filePath      the data file path.
   */
  public abstract long getRowCount(StorageConfiguration<?> configuration, StoragePath filePath);

  /**
   * Read the rowKey list matching the given filter, from the given data file.
   * If the filter is empty, then this will return all the row keys.
   *
   * @param configuration configuration to build storage object.
   * @param filePath      the data file path.
   * @param filter        record keys filter.
   * @return set of row keys matching candidateRecordKeys.
   */
  public abstract Set<String> filterRowKeys(StorageConfiguration<?> configuration, StoragePath filePath, Set<String> filter);

  /**
   * Fetch {@link HoodieKey}s from the given data file.
   *
   * @param configuration configuration to build storage object.
   * @param filePath      the data file path.
   * @return {@link List} of {@link HoodieKey}s fetched from the data file.
   */
  public abstract List<HoodieKey> fetchHoodieKeys(StorageConfiguration<?> configuration, StoragePath filePath);

  /**
   * Provides a closable iterator for reading the given data file.
   *
   * @param configuration   configuration to build storage object.
   * @param filePath        the data file path.
   * @param keyGeneratorOpt instance of KeyGenerator.
   * @return {@link ClosableIterator} of {@link HoodieKey}s for reading the file.
   */
  public abstract ClosableIterator<HoodieKey> getHoodieKeyIterator(StorageConfiguration<?> configuration,
                                                                   StoragePath filePath,
                                                                   Option<BaseKeyGenerator> keyGeneratorOpt);

  /**
   * Provides a closable iterator for reading the given data file.
   *
   * @param configuration configuration to build storage object.
   * @param filePath      the data file path.
   * @return {@link ClosableIterator} of {@link HoodieKey}s for reading the file.
   */
  public abstract ClosableIterator<HoodieKey> getHoodieKeyIterator(StorageConfiguration<?> configuration, StoragePath filePath);

  /**
   * Fetch {@link HoodieKey}s from the given data file.
   *
   * @param configuration   configuration to build storage object.
   * @param filePath        the data file path.
   * @param keyGeneratorOpt instance of KeyGenerator.
   * @return {@link List} of{@link HoodieKey}s fetched from the data file.
   */
  public abstract List<HoodieKey> fetchHoodieKeys(StorageConfiguration<?> configuration,
                                                                           StoragePath filePath,
                                                                           Option<BaseKeyGenerator> keyGeneratorOpt);

  /**
   * Read the Avro schema of the data file.
   *
   * @param configuration configuration.
   * @param filePath      the data file path.
   * @return the Avro schema of the data file.
   */
  public abstract Schema readAvroSchema(StorageConfiguration<?> configuration, StoragePath filePath);

  /**
   * Reads column statistics stored in the metadata.
   *
   * @param storageConf storage configuration.
   * @param filePath    the data file path.
   * @param columnList  List of columns to get column statistics.
   * @return {@link List} of {@link HoodieColumnRangeMetadata}.
   */
  @SuppressWarnings("rawtype")
  public abstract List<HoodieColumnRangeMetadata<Comparable>> readColumnStatsFromMetadata(StorageConfiguration<?> storageConf,
                                                                                          StoragePath filePath,
                                                                                          List<String> columnList);

  /**
   * @return The subclass's {@link HoodieFileFormat}.
   */
  public abstract HoodieFileFormat getFormat();

  /**
   * Writes properties to the meta file.
   *
   * @param storage  {@link HoodieStorage} instance.
   * @param filePath file path to write to.
   * @param props    properties to write.
   * @throws IOException upon write error.
   */
  public abstract void writeMetaFile(HoodieStorage storage,
                                     StoragePath filePath,
                                     Properties props) throws IOException;
}
