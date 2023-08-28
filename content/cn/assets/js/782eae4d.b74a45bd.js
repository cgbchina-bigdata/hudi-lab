"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[23674],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(a),c=i,h=p["".concat(d,".").concat(c)]||p[c]||u[c]||l;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},29435:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const l={title:"Metadata Table",keywords:["hudi","metadata","S3 file listings"]},r=void 0,o={unversionedId:"metadata",id:"metadata",title:"Metadata Table",description:"Metadata Table",source:"@site/docs/metadata.md",sourceDirName:".",slug:"/metadata",permalink:"/cn/docs/next/metadata",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/metadata.md",tags:[],version:"current",frontMatter:{title:"Metadata Table",keywords:["hudi","metadata","S3 file listings"]},sidebar:"docs",previous:{title:"File Layouts",permalink:"/cn/docs/next/file_layouts"},next:{title:"Write Operations",permalink:"/cn/docs/next/write_operations"}},d=[{value:"Metadata Table",id:"metadata-table",children:[],level:2},{value:"Supporting Multi-Modal Index in Hudi",id:"supporting-multi-modal-index-in-hudi",children:[{value:"Metadata table indices",id:"metadata-table-indices",children:[],level:3}],level:2},{value:"Enable Hudi Metadata Table and Multi-Modal Index in write side",id:"enable-hudi-metadata-table-and-multi-modal-index-in-write-side",children:[],level:2},{value:"Use metadata indices for query side improvements",id:"use-metadata-indices-for-query-side-improvements",children:[{value:"files index",id:"files-index",children:[],level:3},{value:"column_stats index and data skipping",id:"column_stats-index-and-data-skipping",children:[],level:3}],level:2},{value:"Deployment considerations for metadata Table",id:"deployment-considerations-for-metadata-table",children:[{value:"Deployment Model A: Single writer with inline table services",id:"deployment-model-a-single-writer-with-inline-table-services",children:[],level:3},{value:"Deployment Model B: Single writer with async table services",id:"deployment-model-b-single-writer-with-async-table-services",children:[],level:3},{value:"Deployment Model C: Multi-writer",id:"deployment-model-c-multi-writer",children:[],level:3}],level:2}],s={toc:d},m="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"metadata-table"},"Metadata Table"),(0,i.kt)("p",null,"Database indices contain auxiliary data structures to quickly locate records needed, without reading unnecessary data\nfrom storage. Given that Hudi\u2019s design has been heavily optimized for handling mutable change streams, with different\nwrite patterns, Hudi considers ",(0,i.kt)("a",{parentName:"p",href:"#indexing"},"indexing")," as an integral part of its design and has uniquely supported\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/blog/2020/11/11/hudi-indexing-mechanisms/"},"indexing capabilities")," from its inception, to speed\nup upserts on the Data Lakehouse. While Hudi's indices has benefited writers for fast upserts and deletes, Hudi's metadata table\naims to tap these benefits more generally for both the readers and writers. The metadata table implemented as a single\ninternal Hudi Merge-On-Read table hosts different types of indices containing table metadata and is designed to be\nserverless and independent of compute and query engines. This is similar to common practices in databases where metadata\nis stored as internal views."),(0,i.kt)("p",null,"The metadata table aims to significantly improve read/write performance of the queries by addressing the following key challenges:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Eliminate the requirement of ",(0,i.kt)("inlineCode",{parentName:"strong"},"list files")," operation"),":",(0,i.kt)("br",null),"\nWhen reading and writing data, file listing operations are performed to get the current view of the file system.\nWhen data sets are large, listing all the files may be a performance bottleneck, but more importantly in the case of cloud storage systems\nlike AWS S3, the large number of file listing requests sometimes causes throttling due to certain request limits.\nThe metadata table will instead proactively maintain the list of files and remove the need for recursive file listing operations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Expose columns stats through indices for better query planning and faster lookups by readers"),":",(0,i.kt)("br",null),"\nQuery engines rely on techniques such as partitioning and file pruning to cut down on the amount of irrelevant data\nscanned for query planning and execution. During query planning phase all data files are read for metadata on range\ninformation of columns for further pruning data files based on query predicates and available range information. This\napproach is expensive and does not scale if there are large number of partitions and data files to be scanned. In\naddition to storage optimizations such as automatic file sizing, clustering, etc that helps data organization in a query\noptimized way, Hudi's metadata table improves query planning further by supporting multiple types of indices that aid\nin efficiently looking up data files based on relevant query predicates instead of reading the column stats from every\nindividual data file and then pruning.\n")),(0,i.kt)("h2",{id:"supporting-multi-modal-index-in-hudi"},"Supporting Multi-Modal Index in Hudi"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.onehouse.ai/blog/introducing-multi-modal-index-for-the-lakehouse-in-apache-hudi"},"Multi-modal indexing"),",\nintroduced in ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.11.0/#multi-modal-index"},"0.11.0 Hudi release"),",\nis a re-imagination of what a general purpose indexing subsystem should look like for the lake. Multi-modal indexing is\nimplemented by enhancing Hudi's metadata table with the flexibility to extend to new index types as new partitions,\nalong with an ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/metadata_indexing/#setup-async-indexing"},"asynchronous index")," building\nmechanism and is built on the following core principles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scalable metadata"),": The table metadata, i.e., the auxiliary data about the table, must be scalable to extremely\nlarge size, e.g., Terabytes (TB).  Different types of indices should be easily integrated to support various use cases\nwithout having to worry about managing the same. To realize this, all indices in Hudi's metadata table are stored as\npartitions in a single internal MOR table. The MOR table layout enables lightning-fast writes by avoiding synchronous\nmerge of data with reduced write amplification. This is extremely important for large datasets as the size of updates to the\nmetadata table can grow to be unmanageable otherwise. This helps Hudi to scale metadata to TBs of sizes. The\nfoundational framework for multi-modal indexing is built to enable and disable new indices as needed. The\n",(0,i.kt)("a",{parentName:"li",href:"https://www.onehouse.ai/blog/asynchronous-indexing-using-hudi"},"async indexing")," supports index building alongside\nregular writers without impacting the write latency."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ACID transactional updates"),": The index and table metadata must be always up-to-date and in sync with the data table.\nThis is designed via multi-table transaction within Hudi and ensures atomicity of writes and resiliency to failures so that\npartial writes to either the data or metadata table are never exposed to other read or write transactions. The metadata\ntable is built to be self-managed so users don\u2019t need to spend operational cycles on any table services including\ncompaction and cleaning    "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fast lookup"),": The needle-in-a-haystack type of lookups must be fast and efficient without having to scan the entire\nindex, as index size can be TBs for large datasets. Since most access to the metadata table are point and range lookups,\nthe HFile format is chosen as the base file format for the internal metadata table. Since the metadata table stores\nthe auxiliary data at the partition level (files index) or the file level (column_stats index), the lookup based on a\nsingle partition path and a file group is going to be very efficient with the HFile format. Both the base and log files\nin Hudi\u2019s metadata table uses the HFile format and are meticulously designed to reduce remote GET calls on cloud storages.\nFurther, these metadata table indices are served via a centralized timeline server which caches the metadata, further\nreducing the latency of the lookup from executors.")),(0,i.kt)("h3",{id:"metadata-table-indices"},"Metadata table indices"),(0,i.kt)("p",null,"Following are the different indices currently available under the metadata table."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},(0,i.kt)("a",{parentName:"em",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+15%3A+HUDI+File+Listing+Improvements"},"files index"))),":\nStored as ",(0,i.kt)("em",{parentName:"p"},"files")," partition in the metadata table. Contains file information such as file name, size, and active state\nfor each partition in the data table. Improves the files listing performance by avoiding direct file system calls such\nas ",(0,i.kt)("em",{parentName:"p"},"exists, listStatus")," and ",(0,i.kt)("em",{parentName:"p"},"listFiles")," on the data table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},(0,i.kt)("a",{parentName:"em",href:"https://github.com/apache/hudi/blob/master/rfc/rfc-27/rfc-27.md"},"column_stats index"))),": Stored as ",(0,i.kt)("em",{parentName:"p"},"column_stats"),"\npartition in the metadata table. Contains the statistics of interested columns, such as min and max values, total values,\nnull counts, size, etc., for all data files and are used while serving queries with predicates matching interested\ncolumns. This index is used along with the ",(0,i.kt)("a",{parentName:"p",href:"https://www.onehouse.ai/blog/hudis-column-stats-index-and-data-skipping-feature-help-speed-up-queries-by-an-orders-of-magnitude"},"data skipping"),"\nto speed up queries by orders of magnitude. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},(0,i.kt)("a",{parentName:"em",href:"https://github.com/apache/hudi/blob/46f41d186c6c84a6af2c54a907ff2736b6013e15/rfc/rfc-37/rfc-37.md"},"bloom_filter index"))),":\nStored as ",(0,i.kt)("em",{parentName:"p"},"bloom_filter")," partition in the metadata table. This index employs range-based pruning on the minimum and\nmaximum values of the record keys and bloom-filter-based lookups to tag incoming records. For large tables, this\ninvolves reading the footers of all matching data files for bloom filters, which can be expensive in the case of random\nupdates across the entire dataset. This index stores bloom filters of all data files centrally to avoid scanning the\nfooters directly from all data files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},(0,i.kt)("a",{parentName:"em",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC-08++Record+level+indexing+mechanisms+for+Hudi+datasets"},"record_index"))),":\nStored as ",(0,i.kt)("em",{parentName:"p"},"record_index")," partition in the metadata table. Contains the mapping of the record key to location. Record\nindex is a global index, enforcing key uniqueness across all partitions in the table. Most recently added in 0.14.0\nHudi release, this index aids in locating records faster than other existing indices and can provide a speedup orders of magnitude\nfaster in large deployments where index lookup dominates write latencies."))),(0,i.kt)("h2",{id:"enable-hudi-metadata-table-and-multi-modal-index-in-write-side"},"Enable Hudi Metadata Table and Multi-Modal Index in write side"),(0,i.kt)("p",null,"Following are the Spark based basic configs that are needed to enable metadata and multi-modal indices. For advanced configs please refer\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#Metadata-Configs-advanced-configs"},"here"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Config Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.metadata.enable"),(0,i.kt)("td",{parentName:"tr",align:null},"true (Optional) Enabled on the write side"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable the internal metadata table which serves table metadata like level file listings. For 0.10.1 and prior releases, metadata table is disabled by default and needs to be explicitly enabled.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Config Param: ENABLE"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Since Version: 0.7.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.metadata.index.bloom.filter.enable"),(0,i.kt)("td",{parentName:"tr",align:null},"false (Optional)"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable indexing bloom filters of user data files under metadata table. When enabled, metadata table will have a partition to store the bloom filter index and will be used during the index lookups.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Config Param: ENABLE_METADATA_INDEX_BLOOM_FILTER"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Since Version: 0.11.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.metadata.index.column.stats.enable"),(0,i.kt)("td",{parentName:"tr",align:null},"false (Optional)"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable indexing column ranges of user data files under metadata table key lookups. When enabled, metadata table will have a partition to store the column ranges and will be used for pruning files during the index lookups.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Config Param: ENABLE_METADATA_INDEX_COLUMN_STATS"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Since Version: 0.11.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.metadata.record.index.enable"),(0,i.kt)("td",{parentName:"tr",align:null},"false (Optional)"),(0,i.kt)("td",{parentName:"tr",align:null},"Create the HUDI Record Index within the Metadata Table",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Config Param: RECORD_INDEX_ENABLE_PROP"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Since Version: 0.14.0"))))),(0,i.kt)("p",null,"The metadata table with synchronous updates and metadata-table-based file listing are enabled by default.\nThere are prerequisite configurations and steps in ",(0,i.kt)("a",{parentName:"p",href:"#deployment-considerations-for-metadata-table"},"Deployment considerations")," to\nsafely use this feature.  The metadata table and related file listing functionality can still be turned off by setting\n",(0,i.kt)("a",{parentName:"p",href:"/docs/configurations#hoodiemetadataenable"},(0,i.kt)("inlineCode",{parentName:"a"},"hoodie.metadata.enable"))," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". The\n",(0,i.kt)("a",{parentName:"p",href:"https://www.onehouse.ai/blog/introducing-multi-modal-index-for-the-lakehouse-in-apache-hudi"},"multi-modal index")," are\ndisabled by default and can be enabled in write side explicitly using the above configs."),(0,i.kt)("p",null,"For flink, following are the basic configs of interest to enable metadata based indices. Please refer\n",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#Flink-Options"},"here")," for advanced configs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Config Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metadata.enabled"),(0,i.kt)("td",{parentName:"tr",align:null},"true (Optional)"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable the internal metadata table which serves table metadata like level file listings, default enabled",(0,i.kt)("br",null),(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"td"},"Config Param: METADATA_ENABLED"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.metadata.index.column.stats.enable"),(0,i.kt)("td",{parentName:"tr",align:null},"false (Optional)"),(0,i.kt)("td",{parentName:"tr",align:null},"Enable indexing column ranges of user data files under metadata table key lookups. When enabled, metadata table will have a partition to store the column ranges and will be used for pruning files during the index lookups.",(0,i.kt)("br",null))))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you turn off the metadata table after enabling, be sure to wait for a few commits so that the metadata table is fully\ncleaned up, before re-enabling the metadata table again."))),(0,i.kt)("h2",{id:"use-metadata-indices-for-query-side-improvements"},"Use metadata indices for query side improvements"),(0,i.kt)("h3",{id:"files-index"},"files index"),(0,i.kt)("p",null,"Metadata based listing using ",(0,i.kt)("em",{parentName:"p"},"files_index")," can be leveraged on the read side by setting appropriate configs/session properties\nfrom different engines as shown below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Readers"),(0,i.kt)("th",{parentName:"tr",align:null},"Config"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,"Spark DataSource"),(0,i.kt)("li",null,"Spark SQL"),(0,i.kt)("li",null,"Strucured Streaming"))),(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.metadata.enable"),(0,i.kt)("td",{parentName:"tr",align:null},"When set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," enables use of the spark file index implementation for Hudi, that speeds up listing of large tables.",(0,i.kt)("br",null))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Presto"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://prestodb.io/docs/current/connector/hudi.html"},"hudi.metadata-table-enabled")),(0,i.kt)("td",{parentName:"tr",align:null},"When set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," fetches the list of file names and sizes from Hudi\u2019s metadata table rather than storage.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Trino"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://trino.io/docs/current/connector/hudi.html#general-configuration"},"hudi.metadata-enabled")),(0,i.kt)("td",{parentName:"tr",align:null},"When set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," fetches the list of file names and sizes from metadata rather than storage.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Athena"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/athena/latest/ug/querying-hudi.html"},"hudi.metadata-listing-enabled")),(0,i.kt)("td",{parentName:"tr",align:null},"When this table property is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"TRUE")," enables the Hudi metadata table and the related file listing functionality")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,"Flink DataStream"),(0,i.kt)("li",null,"Flink SQL"))),(0,i.kt)("td",{parentName:"tr",align:null},"metadata.enabled"),(0,i.kt)("td",{parentName:"tr",align:null},"When set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," from DDL uses the internal metadata table to serves table metadata like level file listings")))),(0,i.kt)("h3",{id:"column_stats-index-and-data-skipping"},"column_stats index and data skipping"),(0,i.kt)("p",null,"Enabling metadata table and column stats index is a prerequisite to enabling data skipping capabilities. Following are the\ncorresponding configs across Spark adn Flink readers."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Readers"),(0,i.kt)("th",{parentName:"tr",align:null},"Config"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,"Spark DataSource"),(0,i.kt)("li",null,"Spark SQL"),(0,i.kt)("li",null,"Strucured Streaming"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"hoodie.metadata.enable")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"hoodie.enable.data.skipping")))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,"When set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," enables use of the spark file index implementation for Hudi, that speeds up listing of large tables."),(0,i.kt)("li",null,"When set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," enables data-skipping allowing queries to leverage indices to reduce the search space by skipping over files ",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Config Param: ENABLE_DATA_SKIPPING"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Since Version: 0.10.0")," ",(0,i.kt)("br",null))))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,"Flink DataStream"),(0,i.kt)("li",null,"Flink SQL"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"metadata.enabled")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"read.data.skipping.enabled")))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null," When set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," from DDL uses the internal metadata table to serves table metadata like level file listings"),(0,i.kt)("li",null,"When set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," enables data-skipping allowing queries to leverage indices to reduce the search space byskipping over files")))))),(0,i.kt)("h2",{id:"deployment-considerations-for-metadata-table"},"Deployment considerations for metadata Table"),(0,i.kt)("p",null,"To ensure that metadata table stays up to date, all write operations on the same Hudi table need additional configurations\nbesides the above in different deployment models.  Before enabling metadata table, all writers on the same table must\nbe stopped. Please refer to the different ",(0,i.kt)("a",{parentName:"p",href:"/docs/concurrency_control#deployment-models-with-supported-concurrency-controls"},"deployment models"),"\nfor more details on each model. This section only highlights how to safely enable metadata table in different deployment models. "),(0,i.kt)("h3",{id:"deployment-model-a-single-writer-with-inline-table-services"},"Deployment Model A: Single writer with inline table services"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/docs/concurrency_control#model-a-single-writer-with-inline-table-services"},"Model A"),", after setting ",(0,i.kt)("a",{parentName:"p",href:"/docs/configurations#hoodiemetadataenable"},(0,i.kt)("inlineCode",{parentName:"a"},"hoodie.metadata.enable"))," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", restarting\nthe single writer is sufficient to safely enable metadata table."),(0,i.kt)("h3",{id:"deployment-model-b-single-writer-with-async-table-services"},"Deployment Model B: Single writer with async table services"),(0,i.kt)("p",null,"If your current deployment model is ",(0,i.kt)("a",{parentName:"p",href:"/docs/concurrency_control#model-b-single-writer-with-async-table-services"},"Model B"),", enabling metadata\ntable requires adding optimistic concurrency control along with suggested lock provider like below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.InProcessLockProvider\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"These configurations are required only if metadata table is enabled in this deployment model."))),(0,i.kt)("p",null,"If multiple writers in different processes are present, including one writer with async table services, please refer to\n",(0,i.kt)("a",{parentName:"p",href:"#deployment-model-c-multi-writer"},"Deployment Model C: Multi-writer")," for configs, with the difference of using a\ndistributed lock provider.  Note that running a separate compaction (",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieCompactor"),") or clustering (",(0,i.kt)("inlineCode",{parentName:"p"},"HoodieClusteringJob"),")\njob apart from the ingestion writer is considered as multi-writer deployment, as they are not running in the same\nprocess which cannot rely on the in-process lock provider."),(0,i.kt)("h3",{id:"deployment-model-c-multi-writer"},"Deployment Model C: Multi-writer"),(0,i.kt)("p",null,"If your current deployment model is ",(0,i.kt)("a",{parentName:"p",href:"/docs/concurrency_control#model-c-multi-writer"},"multi-writer")," along with a lock\nprovider and other required configs set for every writer as follows, there is no additional configuration required. You\ncan bring up the writers sequentially after stopping the writers for enabling metadata table. Applying the proper\nconfigurations to only partial writers leads to loss of data from the inconsistent writer. So, ensure you enable\nmetadata table across all writers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=<distributed-lock-provider-classname>\n")),(0,i.kt)("p",null,"Note that there are different external ",(0,i.kt)("a",{parentName:"p",href:"/docs/concurrency_control#external-locking-and-lock-providers"},"lock providers available"),"\nto choose from."))}p.isMDXComponent=!0}}]);