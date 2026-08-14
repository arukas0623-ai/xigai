window.XIGAI = window.XIGAI || {};
window.XIGAI["大数据与云计算"] = [
  {
    "id": "hadoop",
    "name": "Hadoop",
    "aliases": [
      "Apache Hadoop",
      "Hadoop框架",
      "HDFS生态"
    ],
    "field": "大数据与云计算",
    "tags": [
      "分布式存储",
      "批处理",
      "开源框架"
    ],
    "difficulty": 3,
    "summary": "Apache开源分布式计算框架。",
    "definition": "Apache开源的分布式计算框架，2006年由Doug Cutting基于Google的MapReduce与GFS论文实现，核心为HDFS（分布式文件系统）、MapReduce（批处理模型）与YARN（资源调度）。擅长海量数据离线批处理，吞吐高但任务级延迟达秒到分钟级，交互式与迭代计算较弱，如今核心计算多被Spark等内存引擎替代，但HDFS仍是数据湖底座的事实标准之一。",
    "core": [
      "HDFS负责分布式存储，MapReduce负责批计算，YARN负责资源调度",
      "面向海量离线数据，吞吐优先、延迟高，不适合实时场景",
      "生态庞大但组件整合成本高，正被Spark与云托管服务逐步替代"
    ],
    "applications": [
      "海量日志、交易数据的离线批处理与分析",
      "数据湖/HDFS底座上的历史数据归档与全量扫描"
    ],
    "misconceptions": [
      "Hadoop不等于大数据：它只是大数据技术栈中的一套开源实现"
    ],
    "references": [
      "Apache Hadoop 官网",
      "维基百科：Apache Hadoop"
    ],
    "sources": [
      "https://hadoop.apache.org/",
      "https://zh.wikipedia.org/wiki/Apache_Hadoop"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "mapreduce",
        "note": ""
      },
      {
        "type": "related",
        "target": "spark",
        "note": ""
      },
      {
        "type": "related",
        "target": "HDFS",
        "note": ""
      },
      {
        "type": "related",
        "target": "data-lake",
        "note": ""
      }
    ]
  },
  {
    "id": "spark",
    "name": "Spark",
    "aliases": [
      "Apache Spark",
      "大数据计算引擎",
      "内存计算"
    ],
    "field": "大数据与云计算",
    "tags": [
      "内存计算",
      "离线计算",
      "开源引擎"
    ],
    "difficulty": 3,
    "summary": "内存计算引擎，比MR快10-100倍。",
    "definition": "Apache顶级项目，伯克利AMPLab开源的通用内存计算引擎，以RDD（弹性分布式数据集）为抽象，数据切分为分区并行计算，中间结果尽量驻留内存，比MapReduce磁盘迭代快10~100倍。提供Spark SQL、Spark Streaming（微批）、MLlib与GraphX四大组件，支持Scala/Java/Python/SQL，统一批处理、交互式分析与机器学习负载，是离线计算的事实标准。",
    "core": [
      "RDD/DataFrame抽象，内存计算大幅提升迭代与交互式分析性能",
      "Spark Streaming为微批模型，秒级延迟，非真正逐条流处理",
      "四大组件统一批、SQL、ML、图计算负载"
    ],
    "applications": [
      "离线数仓的ETL与大规模SQL分析",
      "机器学习特征工程与模型训练前的数据准备"
    ],
    "misconceptions": [
      "Spark Streaming是'准实时'微批而非逐条实时流，毫秒级实时应选Flink"
    ],
    "references": [
      "Apache Spark 官网",
      "维基百科：Apache Spark"
    ],
    "sources": [
      "https://spark.apache.org/",
      "https://zh.wikipedia.org/wiki/Apache_Spark"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "flink",
        "note": ""
      },
      {
        "type": "related",
        "target": "hadoop",
        "note": ""
      },
      {
        "type": "related",
        "target": "mapreduce",
        "note": ""
      },
      {
        "type": "related",
        "target": "real-time-warehouse",
        "note": ""
      }
    ]
  },
  {
    "id": "flink",
    "name": "Flink",
    "aliases": [
      "Apache Flink",
      "流式计算引擎",
      "流处理框架"
    ],
    "field": "大数据与云计算",
    "tags": [
      "流式计算",
      "实时计算",
      "开源引擎"
    ],
    "difficulty": 3,
    "summary": "真正逐条的流计算引擎，毫秒级延迟。",
    "definition": "Apache顶级开源流式计算引擎，源自柏林工业大学，以真正的逐条事件流处理（而非微批）为核心，提供毫秒级延迟、Exactly-Once（精确一次）语义与基于checkpoint（Chandy-Lamport算法）的容错。统一批流API（DataStream/Table），支持事件时间与Watermark机制处理乱序数据。与Kafka组成实时计算黄金组合，广泛用于实时数仓、实时风控、实时大屏等场景。",
    "core": [
      "逐条事件驱动处理，毫秒级延迟，区别于Spark的微批",
      "Exactly-Once语义与checkpoint容错，结果不重不漏",
      "事件时间+Watermark机制天然应对乱序与迟到数据"
    ],
    "applications": [
      "实时数仓的流式ETL与实时指标计算",
      "实时风控、实时大屏、实时推荐等在线场景"
    ],
    "misconceptions": [
      "Flink也支持批处理（批视为有界流），不是纯流引擎"
    ],
    "references": [
      "Apache Flink 官网",
      "维基百科：Apache Flink"
    ],
    "sources": [
      "https://flink.apache.org/",
      "https://zh.wikipedia.org/wiki/Apache_Flink"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "kafka",
        "note": ""
      },
      {
        "type": "related",
        "target": "spark",
        "note": ""
      },
      {
        "type": "related",
        "target": "real-time-warehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "batch-stream-unified",
        "note": ""
      }
    ]
  },
  {
    "id": "kafka",
    "name": "Kafka",
    "aliases": [
      "Apache Kafka",
      "消息队列",
      "MQ"
    ],
    "field": "大数据与云计算",
    "tags": [
      "消息队列",
      "数据总线",
      "流式接入"
    ],
    "difficulty": 2,
    "summary": "高吞吐分布式消息队列，大数据数据总线。",
    "definition": "Apache顶级项目，LinkedIn开发后捐赠的分布式消息队列（MQ），采用发布-订阅模型：生产者写入topic分区，消费者按offset顺序消费，靠副本与ISR机制保证高可用，吞吐达每秒百万级消息。以append-only日志存储、批量顺序读写。常作为大数据管道的数据总线，统一采集日志与事件流，供给Flink/Spark实时计算，或下沉到数据湖、数仓作为统一数据入口。",
    "core": [
      "发布-订阅模型，topic分区+offset消费，支持多消费者组",
      "副本与ISR机制保证高可用，吞吐百万级消息/秒",
      "日志追加式存储，天然支持按offset回放历史数据"
    ],
    "applications": [
      "业务日志与埋点事件的统一采集管道",
      "实时计算链路的消息缓冲与解耦（Kafka+Flink）"
    ],
    "misconceptions": [
      "Kafka不只做转发：本身可持久化存储并支持按offset回放历史数据"
    ],
    "references": [
      "Apache Kafka 官网",
      "维基百科：Apache Kafka"
    ],
    "sources": [
      "https://kafka.apache.org/",
      "https://zh.wikipedia.org/wiki/Apache_Kafka"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "flink",
        "note": ""
      },
      {
        "type": "related",
        "target": "real-time-warehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "etl",
        "note": ""
      },
      {
        "type": "related",
        "target": "object-storage",
        "note": ""
      }
    ]
  },
  {
    "id": "data-warehouse",
    "name": "数据仓库",
    "aliases": [
      "DW",
      "Data Warehouse",
      "数仓"
    ],
    "field": "大数据与云计算",
    "tags": [
      "数据存储",
      "数据分析",
      "架构设计"
    ],
    "difficulty": 2,
    "summary": "面向主题集成的分析库，支撑决策与BI。",
    "definition": "数据仓库（DW）是面向主题、集成、非易失、随时间变化的数据库集合，用于支撑管理决策分析。数据从OLTP系统经ETL清洗加工后进入分层模型（ODS→DWD→DWS→ADS），建模常用Kimball维度建模或Inmon三范式。存储加工后的结构化数据，由OLAP引擎（ClickHouse、Doris等）对外提供BI报表与多维分析，与面向在线事务的OLTP系统在读写模式与建模目标上截然不同。",
    "core": [
      "四个特征：面向主题、集成、非易失、随时间变化",
      "分层建模（ODS→DWD→DWS→ADS），先ETL后分析",
      "服务决策分析，典型负载为OLAP查询与BI报表"
    ],
    "applications": [
      "企业BI报表与经营分析",
      "指标体系建设与跨业务线数据整合"
    ],
    "misconceptions": [
      "数据仓库不是数据库的简单堆叠，而是面向分析主题的专门架构"
    ],
    "references": [
      "维基百科：数据仓库",
      "帆软：数据仓库与数据湖详解"
    ],
    "sources": [
      "https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E4%BB%93%E5%BA%93",
      "https://www.fanruan.com/bw/article/173498"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "olap",
        "note": ""
      },
      {
        "type": "related",
        "target": "etl",
        "note": ""
      },
      {
        "type": "related",
        "target": "dimensional-modeling",
        "note": ""
      },
      {
        "type": "related",
        "target": "data-lake",
        "note": ""
      },
      {
        "type": "related",
        "target": "data-mid-platform",
        "note": ""
      },
      {
        "type": "related",
        "target": "hot-cold-tiering",
        "note": ""
      },
      {
        "type": "related",
        "target": "data-lineage",
        "note": ""
      },
      {
        "type": "related",
        "target": "lakehouse",
        "note": ""
      }
    ]
  },
  {
    "id": "data-lake",
    "name": "数据湖",
    "aliases": [
      "Data Lake",
      "湖",
      "原始数据存储"
    ],
    "field": "大数据与云计算",
    "tags": [
      "数据存储",
      "非结构化数据",
      "架构理念"
    ],
    "difficulty": 2,
    "summary": "低成本存海量原始数据的架构理念。",
    "definition": "数据湖（Data Lake）是低成本存储海量原始数据的架构，2009年由Pentaho创始人James Dixon提出：以Schema-on-Read（先存后算）方式将结构化、非结构化数据原样存入对象存储或HDFS，省去ETL前置转换，保留数据全量价值，供机器学习与探索分析取用。落地常用Delta Lake、Hudi、Iceberg等开放表格式。缺治理易退化为“数据沼泽”（Data Swamp）。",
    "core": [
      "Schema-on-Read：存时不定结构，读时再解析",
      "存原始数据全量价值，适合机器学习与探索分析",
      "需要元数据管理与权限治理，否则退化为数据沼泽"
    ],
    "applications": [
      "日志、音视频等非结构化数据的统一留存与挖掘",
      "机器学习样本与探索性分析的原始数据底座"
    ],
    "misconceptions": [
      "数据湖不等于HDFS：对象存储（S3/OSS）已是更主流的湖存储底座"
    ],
    "references": [
      "维基百科：数据湖",
      "袋鼠云：湖仓一体架构选型"
    ],
    "sources": [
      "https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E6%B9%96",
      "https://www.dtstack.com/zh-cn/blogs/lakehouse-architecture-selection/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "data-warehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "lakehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "object-storage",
        "note": ""
      },
      {
        "type": "related",
        "target": "hot-cold-tiering",
        "note": ""
      },
      {
        "type": "related",
        "target": "hadoop",
        "note": ""
      },
      {
        "type": "related",
        "target": "batch-stream-unified",
        "note": ""
      },
      {
        "type": "related",
        "target": "mapreduce",
        "note": ""
      }
    ]
  },
  {
    "id": "etl",
    "name": "ETL",
    "aliases": [
      "Extract-Transform-Load",
      "数据抽取转换加载",
      "数据管道"
    ],
    "field": "大数据与云计算",
    "tags": [
      "数据处理",
      "数据管道",
      "数据工程"
    ],
    "difficulty": 2,
    "summary": "抽取-转换-加载，数据入仓加工流水线。",
    "definition": "ETL指Extract（抽取）、Transform（转换）、Load（加载）：从业务源系统抽取数据，经清洗、去重、格式统一、业务规则加工后加载到数仓或数据湖，是大数据管道的基础环节。传统ETL为T+1批处理，工具如DataX、Kettle、Sqoop、Informatica；云时代演化出ELT（先加载再借助数仓算力转换）与基于Flink的流式ETL（实时加工）。ETL质量直接决定数据资产可用性。",
    "core": [
      "三环节：抽取→转换→加载，转换是质量关键",
      "传统为T+1批处理，演化出ELT与流式ETL形态",
      "ETL质量决定下游报表与指标的正确性"
    ],
    "applications": [
      "业务库数据同步入仓（Sqoop/DataX/CDC）",
      "实时数仓中Flink流式ETL加工"
    ],
    "misconceptions": [
      "ELT不是ETL的笔误：它把转换后置到数仓内执行，适合云数仓大算力场景"
    ],
    "references": [
      "维基百科：ETL",
      "Microsoft：Azure数据工厂简介"
    ],
    "sources": [
      "https://zh.wikipedia.org/wiki/ETL",
      "https://learn.microsoft.com/zh-cn/azure/data-factory/introduction"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "data-warehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "real-time-warehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "data-lineage",
        "note": ""
      },
      {
        "type": "related",
        "target": "kafka",
        "note": ""
      },
      {
        "type": "related",
        "target": "olap",
        "note": ""
      },
      {
        "type": "related",
        "target": "dimensional-modeling",
        "note": ""
      }
    ]
  },
  {
    "id": "olap",
    "name": "OLAP",
    "aliases": [
      "Online Analytical Processing",
      "联机分析处理",
      "多维分析"
    ],
    "field": "大数据与云计算",
    "tags": [
      "数据分析",
      "多维查询",
      "BI"
    ],
    "difficulty": 2,
    "summary": "面向分析的多维查询技术，支撑下钻旋转。",
    "definition": "OLAP（Online Analytical Processing，联机分析处理）是面向分析的多维数据查询技术，对海量历史数据支持上卷（Roll-up）、下钻（Drill-down）、切片、旋转等操作，回答“过去发生了什么”。按存储形态分ROLAP（如ClickHouse、Doris）与MOLAP（预聚合Cube，如Kylin）。典型场景是BI报表与即席查询，与面向事务的OLTP相对，常被混淆。",
    "core": [
      "面向历史数据的多维分析：上卷、下钻、切片、旋转",
      "ROLAP按需实时计算，MOLAP预聚合Cube换取查询速度",
      "典型负载：BI报表与即席查询"
    ],
    "applications": [
      "BI驾驶舱与经营报表的多维查询",
      "即席分析：分析师自助探索业务数据"
    ],
    "misconceptions": [
      "OLAP与OLTP一字之差：前者重读分析、后者重写事务，不能混用"
    ],
    "references": [
      "维基百科：OLAP",
      "帆软：OLAP详解"
    ],
    "sources": [
      "https://zh.wikipedia.org/wiki/OLAP",
      "https://www.fanruan.com/bw/article/173498"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "data-warehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "real-time-warehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "dimensional-modeling",
        "note": ""
      },
      {
        "type": "related",
        "target": "etl",
        "note": ""
      }
    ]
  },
  {
    "id": "real-time-warehouse",
    "name": "实时数仓",
    "aliases": [
      "流式数仓",
      "实时数据仓库",
      "Realtime DW"
    ],
    "field": "大数据与云计算",
    "tags": [
      "实时计算",
      "数据仓库",
      "流式计算"
    ],
    "difficulty": 3,
    "summary": "流式计算为核心，秒级到分钟级新鲜的数仓。",
    "definition": "实时数仓是以流式计算为核心、数据新鲜度从T+1缩短到秒级~分钟级的数仓架构，典型链路为Kafka（实时接入）→Flink（清洗与轻度汇总）→OLAP引擎（Doris/StarRocks/ClickHouse，秒级查询）。按时效分秒级实时（事件驱动）与准实时（微批分钟级）两类。用于实时大屏、实时风控、实时推荐、实时指标监控等场景，常与离线数仓并存，靠批流一体统一口径。",
    "core": [
      "标准链路：Kafka+Flink+OLAP引擎，端到端秒级~分钟级",
      "时效分秒级实时与准实时（微批）两档，按业务取舍",
      "与离线数仓并存，需批流一体保证口径一致"
    ],
    "applications": [
      "实时大屏与经营指标监控",
      "实时风控、实时推荐等在线决策场景"
    ],
    "misconceptions": [
      "实时数仓不是只做流计算：通常仍需离线链路补齐历史数据"
    ],
    "references": [
      "阿里云开发者社区：实时数仓实践",
      "易观：实时数仓详解"
    ],
    "sources": [
      "https://developer.aliyun.com/article/1344831",
      "https://www.esensoft.com/industry-news/dx-54099.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "flink",
        "note": ""
      },
      {
        "type": "related",
        "target": "kafka",
        "note": ""
      },
      {
        "type": "related",
        "target": "batch-stream-unified",
        "note": ""
      },
      {
        "type": "related",
        "target": "olap",
        "note": ""
      },
      {
        "type": "related",
        "target": "spark",
        "note": ""
      },
      {
        "type": "related",
        "target": "etl",
        "note": ""
      },
      {
        "type": "related",
        "target": "lakehouse",
        "note": ""
      }
    ]
  },
  {
    "id": "data-mid-platform",
    "name": "数据中台",
    "aliases": [
      "Data Middle Platform",
      "中台",
      "OneData"
    ],
    "field": "大数据与云计算",
    "tags": [
      "数据治理",
      "企业架构",
      "数据资产"
    ],
    "difficulty": 3,
    "summary": "阿里提出的一体化数据资产与服务架构。",
    "definition": "数据中台是阿里巴巴2015年提出的企业级数据架构理念，核心方法论“One Data、One Service”：通过统一数据标准、指标口径与模型，把分散在各业务线的数据集中治理、沉淀为可复用数据资产，再以统一数据服务API对外供给。它不是单纯技术平台，而是组织、机制与技术的结合，一般含数仓体系、数据资产管理、数据服务与治理四层。2019年后国内跟风建设众多，因投入大见效慢引发争议。",
    "core": [
      "One Data：统一标准、口径与模型，消灭数据孤岛",
      "One Service：沉淀可复用的数据服务与API",
      "组织+机制+技术三位一体，非单纯工具平台"
    ],
    "applications": [
      "大型企业跨业务线的指标口径统一与数据复用",
      "数据服务API化，支撑前端业务快速取数"
    ],
    "misconceptions": [
      "数据中台不是买套工具就能落地：缺组织与机制建设容易沦为“数据仓库改名”"
    ],
    "references": [
      "阿里云开发者社区：数据中台建设",
      "帆软：数据中台是什么"
    ],
    "sources": [
      "https://developer.aliyun.com/article/1526337",
      "https://www.fanruan.com/bw/article/173498"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "data-warehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "data-lineage",
        "note": ""
      },
      {
        "type": "related",
        "target": "数据治理",
        "note": ""
      },
      {
        "type": "related",
        "target": "lakehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "dimensional-modeling",
        "note": ""
      }
    ]
  },
  {
    "id": "cloud-native",
    "name": "云原生",
    "aliases": [
      "Cloud Native",
      "云原生化",
      "CNCF理念"
    ],
    "field": "大数据与云计算",
    "tags": [
      "容器",
      "微服务",
      "DevOps"
    ],
    "difficulty": 3,
    "summary": "面向云设计的技术理念集，容器微服务为纲。",
    "definition": "云原生（Cloud Native）是CNCF（云原生计算基金会）定义并推广的技术理念集合：以容器、微服务、服务网格、声明式API与DevOps为代表，让应用从设计之初就面向云环境，充分利用云的弹性、分布与自动化能力。核心特征包括容器化打包、编排调度、弹性伸缩、不可变基础设施、可观测性与持续交付，Kubernetes是其生态的事实标准。企业演进路径常为“上云→云化→云原生”。",
    "core": [
      "技术支柱：容器、微服务、服务网格、声明式API、DevOps",
      "强调弹性、自动化与可观测性，应用面向云设计",
      "Kubernetes是云原生生态的事实标准"
    ],
    "applications": [
      "互联网应用的容器化改造与微服务拆分",
      "基于K8s的弹性业务中台与统一发布体系"
    ],
    "misconceptions": [
      "云原生不等于上云：虚拟机托管不改造架构，不算云原生"
    ],
    "references": [
      "CNCF 云原生定义",
      "阿里云开发者社区：云原生解读"
    ],
    "sources": [
      "https://github.com/cncf/toc/blob/main/DEFINITION.md",
      "https://developer.aliyun.com/article/1526337"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "container-orchestration",
        "note": ""
      },
      {
        "type": "related",
        "target": "serverless",
        "note": ""
      },
      {
        "type": "related",
        "target": "auto-scaling",
        "note": ""
      },
      {
        "type": "related",
        "target": "microservices",
        "note": ""
      },
      {
        "type": "related",
        "target": "function-computing",
        "note": ""
      }
    ]
  },
  {
    "id": "container-orchestration",
    "name": "容器编排",
    "aliases": [
      "Container Orchestration",
      "K8s",
      "Kubernetes编排"
    ],
    "field": "大数据与云计算",
    "tags": [
      "容器",
      "自动化运维",
      "Kubernetes"
    ],
    "difficulty": 3,
    "summary": "大规模容器的自动部署调度与故障自愈。",
    "definition": "容器编排（Container Orchestration）指对大规模容器的部署、调度、扩缩容、服务发现、滚动升级与故障自愈进行自动化管理。事实标准是Kubernetes（K8s）：2014年Google开源、现由CNCF维护，以声明式API描述期望状态，控制面（API Server、Scheduler等）持续调谐使其收敛。云厂商普遍提供托管K8s（EKS、ACK、TKE）。",
    "core": [
      "自动化：部署、调度、扩缩容、滚动升级、故障自愈",
      "Kubernetes声明式API+控制面持续调谐，K8s是事实标准",
      "云厂商托管K8s（EKS/ACK/TKE）降低运维门槛"
    ],
    "applications": [
      "微服务集群的统一部署与灰度发布",
      "大数据/中间件容器化后的资源编排与弹性伸缩"
    ],
    "misconceptions": [
      "容器编排不等于容器本身：Docker负责打包运行，K8s负责规模化调度管理"
    ],
    "references": [
      "Kubernetes 官方文档",
      "维基百科：Kubernetes"
    ],
    "sources": [
      "https://kubernetes.io/zh-cn/docs/concepts/overview/",
      "https://zh.wikipedia.org/wiki/Kubernetes"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "cloud-native",
        "note": ""
      },
      {
        "type": "related",
        "target": "auto-scaling",
        "note": ""
      },
      {
        "type": "related",
        "target": "load-balancing",
        "note": ""
      },
      {
        "type": "related",
        "target": "microservices",
        "note": ""
      }
    ]
  },
  {
    "id": "serverless",
    "name": "无服务器计算",
    "aliases": [
      "Serverless",
      "无服务器架构",
      "函数即服务FaaS"
    ],
    "field": "大数据与云计算",
    "tags": [
      "云计算",
      "按量付费",
      "事件驱动"
    ],
    "difficulty": 2,
    "summary": "免运维按量计费的云执行模型，空闲零成本。",
    "definition": "无服务器计算（Serverless）是一种云执行模型：开发者无需预置或管理服务器，云平台按需分配资源并执行代码，按调用次数与执行时长（毫秒级计量）计费，空闲时零成本。广义Serverless包括FaaS（函数即服务）与BaaS（后端即服务：对象存储、托管数据库、API网关等），狭义常指FaaS。适合突发流量与事件驱动任务，但存在冷启动延迟与单函数超时限制（如Lambda默认15分钟）等局限。",
    "core": [
      "免运维：平台负责运行时、扩容与高可用",
      "按调用次数×执行时长毫秒级计费，空闲零成本",
      "广义含FaaS与BaaS，狭义常指FaaS"
    ],
    "applications": [
      "Webhook/API后端与事件驱动任务",
      "图片处理、定时任务等短时低频负载"
    ],
    "misconceptions": [
      "Serverless不是没有服务器，而是服务器对开发者不可见、由平台托管"
    ],
    "references": [
      "AWS 无服务器计算官网",
      "维基百科：无服务器计算"
    ],
    "sources": [
      "https://aws.amazon.com/cn/serverless/",
      "https://zh.wikipedia.org/wiki/%E6%97%A0%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%AE%A1%E7%AE%97"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "function-computing",
        "note": ""
      },
      {
        "type": "related",
        "target": "cloud-native",
        "note": ""
      },
      {
        "type": "related",
        "target": "object-storage",
        "note": ""
      },
      {
        "type": "related",
        "target": "auto-scaling",
        "note": ""
      }
    ]
  },
  {
    "id": "function-computing",
    "name": "函数计算",
    "aliases": [
      "FaaS",
      "Function as a Service",
      "函数即服务"
    ],
    "field": "大数据与云计算",
    "tags": [
      "FaaS",
      "事件驱动",
      "无服务器"
    ],
    "difficulty": 2,
    "summary": "FaaS落地产品，事件驱动、按量计费。",
    "definition": "函数计算是Serverless核心形态FaaS（Function as a Service，函数即服务）的落地产品：开发者把业务逻辑写成单一函数（响应事件或HTTP请求），平台负责运行时、弹性扩容、高可用与监控，按调用次数×执行时长计费。代表产品：AWS Lambda、阿里云FC、腾讯云SCF。典型场景为Webhook/API后端、对象存储事件处理、定时任务等；局限是无状态约束与冷启动延迟。",
    "core": [
      "以函数为最小部署单元，事件/HTTP触发",
      "平台托管运行时与弹性，按调用次数×GB-秒计费",
      "代表产品：AWS Lambda、阿里云FC、腾讯云SCF"
    ],
    "applications": [
      "对象存储文件上传后自动触发图片处理/转码",
      "API网关后端与定时任务的无服务器化"
    ],
    "misconceptions": [
      "函数计算适合短时任务：长时运行、有状态应用不适合函数模型"
    ],
    "references": [
      "阿里云函数计算官方文档",
      "AWS Lambda 官网"
    ],
    "sources": [
      "https://help.aliyun.com/zh/fc/",
      "https://aws.amazon.com/cn/lambda/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "serverless",
        "note": ""
      },
      {
        "type": "related",
        "target": "object-storage",
        "note": ""
      },
      {
        "type": "related",
        "target": "cloud-native",
        "note": ""
      },
      {
        "type": "related",
        "target": "auto-scaling",
        "note": ""
      }
    ]
  },
  {
    "id": "auto-scaling",
    "name": "弹性伸缩",
    "aliases": [
      "Auto Scaling",
      "弹性扩缩容",
      "自动伸缩"
    ],
    "field": "大数据与云计算",
    "tags": [
      "高可用",
      "成本优化",
      "自动化运维"
    ],
    "difficulty": 1,
    "summary": "按负载规则自动增减实例，兼顾可用性成本。",
    "definition": "弹性伸缩（Auto Scaling）指云平台按规则自动增减计算资源：负载上升（CPU/内存超阈值或定时策略）时自动扩容，负载下降时缩容以节省成本。IaaS层表现为自动创建/释放云服务器（AWS Auto Scaling、阿里云ESS）；容器层表现为K8s HPA与Cluster Autoscaler；Serverless层则完全自动。是云计算“按需付费”核心价值的体现，常与负载均衡配合。",
    "core": [
      "规则驱动：指标阈值、定时策略、预测性伸缩",
      "多层实现：IaaS实例、K8s HPA、Serverless自动伸缩",
      "与负载均衡、健康检查联动，保障可用性同时控成本"
    ],
    "applications": [
      "电商大促前定时扩容、活动后自动缩容",
      "业务高峰期按CPU/请求量指标自动加机器"
    ],
    "misconceptions": [
      "弹性伸缩不等于无限扩容：需设置上下限与配额，且受云厂商资源池约束"
    ],
    "references": [
      "阿里云弹性伸缩产品文档",
      "Kubernetes HPA 文档"
    ],
    "sources": [
      "https://www.alibabacloud.com/help/zh/auto-scaling/",
      "https://kubernetes.io/zh-cn/docs/tasks/run-application/horizontal-pod-autoscale/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "load-balancing",
        "note": ""
      },
      {
        "type": "related",
        "target": "container-orchestration",
        "note": ""
      },
      {
        "type": "related",
        "target": "availability-zone",
        "note": ""
      },
      {
        "type": "related",
        "target": "cloud-native",
        "note": ""
      },
      {
        "type": "related",
        "target": "serverless",
        "note": ""
      },
      {
        "type": "related",
        "target": "function-computing",
        "note": ""
      }
    ]
  },
  {
    "id": "load-balancing",
    "name": "负载均衡",
    "aliases": [
      "Load Balancer",
      "SLB",
      "负载均衡器"
    ],
    "field": "大数据与云计算",
    "tags": [
      "高可用",
      "流量分发",
      "网络架构"
    ],
    "difficulty": 1,
    "summary": "按算法分发请求到多台后端，支撑扩展。",
    "definition": "负载均衡（Load Balancing，LB）把进入的请求按轮询、加权、最小连接数、一致性哈希等算法分发到多台后端服务器，实现流量分摊、横向扩展与故障剔除。按层级分四层LB（基于IP+端口，如LVS、Nginx stream）与七层LB（基于HTTP URL/Host，支持会话保持与SSL卸载，如云SLB/CLB）。云厂商提供托管LB，与健康检查联动自动摘除异常节点，是高可用Web架构的标配。",
    "core": [
      "分发算法：轮询、加权、最小连接、一致性哈希",
      "四层LB转发IP+端口，七层LB按HTTP内容路由",
      "健康检查自动摘除故障节点，支撑横向扩展"
    ],
    "applications": [
      "Web集群入口的流量分发与故障转移",
      "微服务网关后端的服务发现与路由"
    ],
    "misconceptions": [
      "负载均衡不只做轮询：一致性哈希等算法还承担会话保持与缓存亲和职责"
    ],
    "references": [
      "维基百科：负载均衡",
      "阿里云SLB产品页"
    ],
    "sources": [
      "https://zh.wikipedia.org/wiki/%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1",
      "https://www.aliyun.com/product/slb"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "auto-scaling",
        "note": ""
      },
      {
        "type": "related",
        "target": "availability-zone",
        "note": ""
      },
      {
        "type": "related",
        "target": "container-orchestration",
        "note": ""
      },
      {
        "type": "related",
        "target": "microservices",
        "note": ""
      }
    ]
  },
  {
    "id": "availability-zone",
    "name": "可用区",
    "aliases": [
      "AZ",
      "Availability Zone",
      "可用域"
    ],
    "field": "大数据与云计算",
    "tags": [
      "高可用",
      "容灾",
      "数据中心"
    ],
    "difficulty": 1,
    "summary": "同地域内独立机房群体，多AZ同城容灾。",
    "definition": "可用区（Availability Zone，AZ）是云厂商在同一地域（Region）内划分的相互独立的数据中心群体，各自拥有独立电力、网络与制冷设施，物理隔离、故障域互不影响，AZ间以低延迟光纤互联。把应用部署在多个AZ可实现同城容灾：单AZ故障时流量自动切换，可用性从单AZ约99.9%提升到多AZ的99.99%以上。选择AZ需权衡容灾等级、跨AZ网络成本与数据合规要求。",
    "core": [
      "同地域内相互独立的机房群体，故障域隔离",
      "多AZ部署+流量自动切换，可用性从99.9%提升到99.99%+",
      "AZ间低延迟光纤互联，跨AZ流量通常单独计费"
    ],
    "applications": [
      "核心业务双AZ/多AZ部署实现同城容灾",
      "数据库主备跨AZ，主机房故障自动切换"
    ],
    "misconceptions": [
      "地域（Region）与可用区（AZ）不同：一个地域含多个AZ，地域间为异地灾备级别"
    ],
    "references": [
      "阿里云：地域和可用区",
      "AWS 全球基础设施：区域与可用区"
    ],
    "sources": [
      "https://help.aliyun.com/zh/ecs/user-guide/regions-and-zones",
      "https://aws.amazon.com/cn/about-aws/global-infrastructure/regions_az/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "load-balancing",
        "note": ""
      },
      {
        "type": "related",
        "target": "auto-scaling",
        "note": ""
      },
      {
        "type": "related",
        "target": "object-storage",
        "note": ""
      },
      {
        "type": "related",
        "target": "高可用",
        "note": ""
      }
    ]
  },
  {
    "id": "object-storage",
    "name": "对象存储",
    "aliases": [
      "OSS",
      "S3",
      "Object Storage",
      "对象存储服务"
    ],
    "field": "大数据与云计算",
    "tags": [
      "云存储",
      "非结构化数据",
      "数据湖底座"
    ],
    "difficulty": 1,
    "summary": "键值扁平海量存储，S3协议为事实标准。",
    "definition": "对象存储（Object Storage）以“对象=数据+元数据+唯一键”为单位、通过HTTP REST API读写数据的存储服务，命名空间扁平，分布式架构容量近乎无限、单价低（约0.1~0.2元/GB/月），适合海量非结构化数据（图片、视频、日志、备份）。S3协议是事实标准，代表产品有AWS S3、阿里云OSS、腾讯云COS、华为云OBS，是数据湖、静态网站与云备份的存储底座。",
    "core": [
      "对象=数据+元数据+唯一键，REST API读写",
      "扁平命名空间+分布式架构，容量近无限、成本低",
      "S3协议事实标准，是数据湖与备份的存储底座"
    ],
    "applications": [
      "图片音视频等非结构化数据的统一存储与CDN分发",
      "数据湖原始数据与数据库备份归档的存放地"
    ],
    "misconceptions": [
      "对象存储不支持随机写与文件锁：适合读多写少、一次写入多次读取"
    ],
    "references": [
      "阿里云对象存储OSS官方文档",
      "AWS S3 官网"
    ],
    "sources": [
      "https://help.aliyun.com/zh/oss/",
      "https://aws.amazon.com/cn/s3/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "data-lake",
        "note": ""
      },
      {
        "type": "related",
        "target": "hot-cold-tiering",
        "note": ""
      },
      {
        "type": "related",
        "target": "function-computing",
        "note": ""
      },
      {
        "type": "related",
        "target": "serverless",
        "note": ""
      },
      {
        "type": "related",
        "target": "kafka",
        "note": ""
      },
      {
        "type": "related",
        "target": "availability-zone",
        "note": ""
      }
    ]
  },
  {
    "id": "hot-cold-tiering",
    "name": "冷热分层",
    "aliases": [
      "冷热数据分层",
      "存储分层",
      "生命周期管理"
    ],
    "field": "大数据与云计算",
    "tags": [
      "成本优化",
      "存储架构",
      "数据生命周期"
    ],
    "difficulty": 2,
    "summary": "按访问频度分层存储，生命周期自动流转。",
    "definition": "冷热分层指按访问频度把数据放置在不同性能/成本的存储层：热数据（高频访问）放高性能层（内存、SSD、标准存储），温数据放标准层，冷数据（历史归档、极少访问）下沉到低成本归档层（冷存储/磁带），并通过生命周期策略自动流转。典型实现是对象存储Standard→低频IA→归档Archive分级。收益是大幅降低存储成本（冷层约为热层1/3~1/5）且不牺牲热数据性能。",
    "core": [
      "按访问频度分层：热/温/冷对应高/中/低成本存储",
      "生命周期策略（按时间/访问规则）自动流转数据",
      "典型：对象存储Standard→IA→Archive分级"
    ],
    "applications": [
      "日志与历史数据超过30天后自动转低频/归档存储",
      "数仓分区表按时间冷热归档，查询只扫热分区"
    ],
    "misconceptions": [
      "冷数据不是删除：仍可访问，只是取回有延迟或费用，需先解冻"
    ],
    "references": [
      "Microsoft Azure：访问层概览",
      "阿里云OSS：生命周期规则"
    ],
    "sources": [
      "https://learn.microsoft.com/zh-cn/azure/storage/blobs/access-tiers-overview",
      "https://help.aliyun.com/zh/oss/user-guide/lifecycle-rules"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "object-storage",
        "note": ""
      },
      {
        "type": "related",
        "target": "data-lake",
        "note": ""
      },
      {
        "type": "related",
        "target": "data-warehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "成本优化",
        "note": ""
      }
    ]
  },
  {
    "id": "batch-stream-unified",
    "name": "批流一体",
    "aliases": [
      "批流统一",
      "流批一体",
      "流批融合"
    ],
    "field": "大数据与云计算",
    "tags": [
      "实时计算",
      "架构设计",
      "数据工程"
    ],
    "difficulty": 3,
    "summary": "同一API与引擎统一处理批与流数据。",
    "definition": "批流一体指用同一套API与引擎处理批量（Batch）与流式（Streaming）数据，避免维护两套系统、两套口径。Flink将DataSet并入DataStream API（批视为有界流），Spark以Structured Streaming统一批流，底层借助Iceberg、Hudi等湖表格式实现流写批读。价值是开发一次、口径一致、结果可对账，是实时数仓与湖仓一体的核心技术主张。",
    "core": [
      "同一API/引擎处理批与流：批=有界流（Flink），流=微批（Spark）",
      "湖表格式（Iceberg/Hudi）支撑流写批读",
      "价值：开发一次、口径一致、资源复用、结果可对账"
    ],
    "applications": [
      "实时数仓与离线数仓共用一套加工逻辑",
      "同一张湖表同时服务实时报表与T+1批量分析"
    ],
    "misconceptions": [
      "批流一体不是只用一个引擎：更多是统一API与口径，存储与调度仍可分层"
    ],
    "references": [
      "Apache Flink 官网",
      "阿里云开发者社区：湖仓一体实践"
    ],
    "sources": [
      "https://flink.apache.org/",
      "https://developer.aliyun.com/article/1681874"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "flink",
        "note": ""
      },
      {
        "type": "related",
        "target": "real-time-warehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "lakehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "data-lake",
        "note": ""
      },
      {
        "type": "related",
        "target": "mapreduce",
        "note": ""
      }
    ]
  },
  {
    "id": "mapreduce",
    "name": "MapReduce",
    "aliases": [
      "MapReduce编程模型",
      "Hadoop MapReduce",
      "MR任务"
    ],
    "field": "大数据与云计算",
    "tags": [
      "分布式计算",
      "编程模型",
      "批处理"
    ],
    "difficulty": 3,
    "summary": "Google提出的分布式编程模型，两阶段。",
    "definition": "MapReduce是Google 2004年论文提出的分布式编程模型：把大规模计算拆分为Map（映射：分片并行处理，产出中间键值对）与Reduce（归约：按键聚合汇总）两阶段，框架自动处理分区、排序、Shuffle（洗牌）、容错与调度，开发者只需实现两个函数。Hadoop按此思想实现开源版，开启大数据时代。局限是中间结果落盘、任务延迟达分钟级，后被Spark等内存框架取代。",
    "core": [
      "Map映射+Reduce归约两阶段，框架负责调度容错",
      "Hadoop开源实现开启大数据时代",
      "磁盘迭代延迟高，已被Spark等内存计算取代"
    ],
    "applications": [
      "Hadoop生态中的历史全量批处理任务",
      "理解分布式计算思想的入门教材级案例"
    ],
    "misconceptions": [
      "MapReduce不是数据库：它是编程模型，不提供SQL与索引能力"
    ],
    "references": [
      "Hadoop MapReduce 官方教程",
      "维基百科：MapReduce"
    ],
    "sources": [
      "https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html",
      "https://zh.wikipedia.org/wiki/MapReduce"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "hadoop",
        "note": ""
      },
      {
        "type": "related",
        "target": "spark",
        "note": ""
      },
      {
        "type": "related",
        "target": "batch-stream-unified",
        "note": ""
      },
      {
        "type": "related",
        "target": "data-lake",
        "note": ""
      }
    ]
  },
  {
    "id": "data-lineage",
    "name": "数据血缘",
    "aliases": [
      "Data Lineage",
      "血缘关系",
      "血缘图谱"
    ],
    "field": "大数据与云计算",
    "tags": [
      "数据治理",
      "元数据",
      "数据资产"
    ],
    "difficulty": 3,
    "summary": "追踪数据全链路流向，支撑影响分析与溯源。",
    "definition": "数据血缘（Data Lineage）指追踪数据从源头系统经ETL/计算任务到最终报表、指标的全链路流向，记录表、字段、任务间的“上游→下游”依赖并形成血缘图谱，粒度可到字段级，以SQL解析自动识别为主。核心价值：影响分析（改表结构前评估下游影响）、指标异常溯源、资产盘点与合规审计。主流工具：Apache Atlas、DataHub、OpenMetadata与DataWorks等。",
    "core": [
      "记录表/字段/任务间的上下游依赖，可到字段级",
      "核心价值：影响分析、异常溯源、资产盘点、合规审计",
      "主流工具：Atlas、DataHub、DataWorks、OpenMetadata"
    ],
    "applications": [
      "数仓表结构变更前的下游影响评估",
      "指标异常时沿血缘快速定位故障链路"
    ],
    "misconceptions": [
      "血缘需区分表级/字段级与任务级粒度，字段级才能支撑精准影响分析"
    ],
    "references": [
      "Apache Atlas 官网",
      "易观：数据血缘详解"
    ],
    "sources": [
      "https://atlas.apache.org/",
      "https://www.esensoft.com/industry-news/dx-54099.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "data-mid-platform",
        "note": ""
      },
      {
        "type": "related",
        "target": "etl",
        "note": ""
      },
      {
        "type": "related",
        "target": "data-warehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "数据治理",
        "note": ""
      }
    ]
  },
  {
    "id": "dimensional-modeling",
    "name": "维度建模",
    "aliases": [
      "Dimensional Modeling",
      "Kimball建模",
      "星型模型"
    ],
    "field": "大数据与云计算",
    "tags": [
      "数据建模",
      "数据仓库",
      "BI"
    ],
    "difficulty": 3,
    "summary": "事实表+维度表建模，星型/雪花服务OLAP。",
    "definition": "维度建模是Ralph Kimball提出、数仓最主流的建模方法：把业务过程拆分为事实表（Fact Table，存度量与维度外键，如订单事实）与维度表（Dimension Table，存时间、用户、商品等描述属性），构成星型模型（事实表居中、维度直接相连）或雪花模型（维度继续规范化）。强调业务过程驱动、面向查询优化，以冗余换查询性能，便于OLAP上卷下钻，与Inmon三范式建模相对。",
    "core": [
      "事实表存度量，维度表存描述属性，外键关联",
      "星型模型查得快、雪花模型更规范，工程常折中",
      "面向查询优化，天然适配OLAP上卷下钻"
    ],
    "applications": [
      "数仓DWD/DWS层按业务过程建模",
      "BI多维分析的事实表+维度表设计"
    ],
    "misconceptions": [
      "维度建模不等于反范式：它是面向分析查询的专门建模方法，与OLTP范式建模目标不同"
    ],
    "references": [
      "Kimball Group 维度建模技术",
      "墨天轮：维度建模详解"
    ],
    "sources": [
      "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/",
      "https://www.modb.pro/db/2062687013795618816"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "data-warehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "olap",
        "note": ""
      },
      {
        "type": "related",
        "target": "data-mid-platform",
        "note": ""
      },
      {
        "type": "related",
        "target": "etl",
        "note": ""
      }
    ]
  },
  {
    "id": "lakehouse",
    "name": "湖仓一体",
    "aliases": [
      "Lakehouse",
      "湖仓一体架构",
      "数据湖仓"
    ],
    "field": "大数据与云计算",
    "tags": [
      "数据架构",
      "数据湖",
      "数据仓库"
    ],
    "difficulty": 3,
    "summary": "数据湖叠加数仓能力，一份数据两种用途。",
    "definition": "湖仓一体（Lakehouse）是Databricks 2019年前后提出的新一代数据架构：在低成本数据湖存储（对象存储/HDFS）上引入ACID事务、Schema强制、索引与元数据管理等数仓能力，实现“一份数据”既支持原始数据探索分析，又支持BI级数仓查询。核心技术是Delta Lake、Iceberg、Hudi等开放表格式，提供时间旅行与批流读写，解决“湖+仓”双系统冗余、口径不一的问题。",
    "core": [
      "湖的存储成本+仓的事务/治理能力合二为一",
      "核心技术：Delta Lake、Iceberg、Hudi开放表格式",
      "一份数据既做探索分析又做BI查询，消除双系统冗余"
    ],
    "applications": [
      "企业统一数据底座：一份数据服务批流分析、BI与机器学习",
      "替代传统“HDFS湖+MPP仓”双平台的高成本架构"
    ],
    "misconceptions": [
      "湖仓一体不是简单把数仓建在对象存储上：ACID事务、元数据与索引管理才是关键增量"
    ],
    "references": [
      "Databricks：What is a Lakehouse",
      "袋鼠云：湖仓一体架构选型"
    ],
    "sources": [
      "https://www.databricks.com/glossary/lakehouse",
      "https://www.dtstack.com/zh-cn/blogs/lakehouse-architecture-selection/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大数据与云计算",
    "relations": [
      {
        "type": "related",
        "target": "data-lake",
        "note": ""
      },
      {
        "type": "related",
        "target": "data-warehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "batch-stream-unified",
        "note": ""
      },
      {
        "type": "related",
        "target": "real-time-warehouse",
        "note": ""
      },
      {
        "type": "related",
        "target": "data-mid-platform",
        "note": ""
      }
    ]
  }
];
