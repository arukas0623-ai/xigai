window.XIGAI = window.XIGAI || {};
window.XIGAI["计算机科学"] = [
  {
    "id": "turing-machine",
    "name": "图灵机",
    "aliases": [
      "Turing Machine",
      "图灵机模型"
    ],
    "field": "计算机科学",
    "tags": [
      "计算理论",
      "可计算性",
      "计算模型"
    ],
    "difficulty": 3,
    "summary": "抽象计算模型，精确刻画了什么是可计算的",
    "definition": "图灵机是艾伦·图灵于1936年提出的抽象计算模型，由一条无限长的纸带、一个读写头、一个状态寄存器与一张状态转移规则表构成。纸带被划分为单元格，每格可书写有限符号；读写头每次读取当前格符号，依据当前状态与所读符号查表，决定改写该格、向左或向右移动一格并进入新状态。机器自初始状态运行，进入接受态或拒绝态即停机。图灵证明图灵机能够模拟任何算法过程，任何可在现实计算机上完成的计算都可用图灵机完成，从而给出“可计算”的精确定义（丘奇-图灵论题）。图灵机无法在现实中直接制造，却是可计算性理论的核心基石。",
    "background": "20世纪30年代，数学界围绕希尔伯特判定问题争论何种函数可被机械计算。1936年图灵发表《论可计算数及其在判定问题上的应用》，提出图灵机概念，与丘奇的同时期工作共同奠定了可计算性理论的基础，也催生了现代数字计算机的理论蓝图与图灵测试思想。",
    "core": [
      "图灵机由无限纸带、读写头、状态寄存器与转移规则四部分组成",
      "每一步操作由当前状态与读到的符号唯一决定，构成确定性图灵机",
      "图灵机可模拟任何算法，是“可计算”的精确数学定义",
      "确定性图灵机与非确定性图灵机在计算能力上等价，后者仅节省时间",
      "通用图灵机可模拟任意图灵机，是现代存储程序计算机的雏形，也是软件可移植性的理论依据"
    ],
    "applications": [
      "作为可计算性理论的分析工具，用以判定问题是否可解",
      "通用图灵机的思想直接启发了冯·诺依曼存储程序式计算机体系结构",
      "形式语言与自动机理论中证明语言可判定性的标准模型",
      "计算复杂性理论中以图灵机运行步数定义时间与空间复杂度"
    ],
    "misconceptions": [
      "图灵机是真实存在的机器，实为纯数学模型，无法也不必实际制造，其价值在于理论分析",
      "图灵机等于现代计算机，后者只是通用图灵机的有限存储物理近似"
    ],
    "references": [
      "圖靈機 - 维基百科",
      "Turing Machines - Stanford Encyclopedia of Philosophy",
      "计算理论 - 维基百科"
    ],
    "sources": [
      "https://zh.wikipedia.org/zh-hant/Turing機",
      "https://plato.stanford.edu/entries/turing-machine/",
      "https://zh.wikipedia.org/wiki/计算理论"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机科学",
    "relations": [
      {
        "type": "related",
        "target": "halting-problem",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "计算理论",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "丘奇-图灵论题",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "有限自动机",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "algorithm-complexity",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "godel-incompleteness",
        "note": "",
        "confidence": 0.75
      }
    ]
  },
  {
    "id": "halting-problem",
    "name": "停机问题",
    "aliases": [
      "Halting Problem",
      "图灵停机问题"
    ],
    "field": "计算机科学",
    "tags": [
      "计算理论",
      "不可判定性",
      "可计算性"
    ],
    "difficulty": 4,
    "summary": "判断任意程序是否终止的问题，已被证明不可判定",
    "definition": "停机问题是可计算性理论中的经典问题：给定任意程序（图灵机）及其输入，判定该程序会停机还是无限运行。1936年图灵证明停机问题不可判定，即不存在对任意程序-输入对都给出正确回答的通用算法。证明采用反证法：假设存在判定器H，构造程序D，使D在H判定D停机时陷入死循环、在H判定D不停机时立即停机，从而导出矛盾。停机问题的不可判定性表明算法的能力存在根本边界，它是首个被证明的不可判定问题，并可通过归约派生出大量其他不可判定问题。",
    "background": "该问题源于希尔伯特判定问题与哥德尔不完备定理的思想脉络。图灵在1936年的论文中首次证明其不可判定性，与丘奇同时证明的一阶谓词逻辑不可判定性相互呼应，深刻揭示了形式系统与算法的局限性，成为数学与计算机科学交汇的标志性结果，启发后续不可判定性研究。",
    "core": [
      "停机问题指给定任意程序及其输入，判定其运行是否终止，是最基本的程序分析问题",
      "图灵用对角线反证法证明不存在通用的停机判定算法，思路与康托尔对角线法一脉相承",
      "停机问题不可判定，但具体程序的终止性仍可被静态分析",
      "它是不可判定性理论的起点，归约技术由此推广到其他问题",
      "莱斯定理进一步表明：程序的任何非平凡语义性质都不可判定"
    ],
    "applications": [
      "静态分析工具与编译器优化中检测死循环的启发式方法",
      "形式化验证中借助良基关系、递减量证明程序终止性",
      "操作系统调度与并发系统的活锁、死锁检测",
      "程序分析领域启发对不变量与资源使用的近似推理"
    ],
    "misconceptions": [
      "“停机问题不可判定”并不意味着任何程序都无法判断是否停机，只是不存在对所有程序普遍有效的统一算法",
      "更强的计算机无法解决停机问题，计算能力上限不因硬件增强而改变，量子计算机亦然"
    ],
    "references": [
      "停机问题 - 维基百科",
      "Undecidable problem - Wikipedia",
      "判定器 - 维基百科"
    ],
    "sources": [
      "https://zh.wikipedia.org/zh-sg/停机问题",
      "https://en.wikipedia.org/wiki/Undecidable_problem",
      "https://zh.wikipedia.org/wiki?curid=259102"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机科学",
    "relations": [
      {
        "type": "related",
        "target": "turing-machine",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "不可判定问题",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "godel-incompleteness",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "归约",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "计算理论",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "algorithm-complexity",
    "name": "算法复杂度",
    "aliases": [
      "算法复杂性",
      "Algorithm Complexity",
      "时间复杂度"
    ],
    "field": "计算机科学",
    "tags": [
      "算法",
      "复杂度分析",
      "大O表示法"
    ],
    "difficulty": 2,
    "summary": "度量算法时间与空间开销随输入规模增长的规律",
    "definition": "算法复杂度用于定量刻画算法效率，主要分为时间复杂度和空间复杂度。它不关心具体运行秒数或内存字节数，而关注资源消耗随输入规模n增长的趋势，通常用渐近记号描述：大O记号给出最坏情况增长上界，Ω记号给出下界，Θ记号给出紧界。例如线性查找为O(n)，二分查找为O(log n)，冒泡排序最坏为O(n²)。复杂度分析忽略常数因子与低阶项，聚焦规模趋近无穷时的主导项，使算法比较不依赖具体机器与实现语言，是算法设计与选型的核心工具。",
    "background": "20世纪60年代，计算机普及后需要不依赖具体机器的效率度量。1965年哈特马尼斯与斯特恩斯提出复杂度类理论，奠基计算复杂性学科；大O记号则源自数学中的巴赫曼-兰道符号，被引入算法分析后广泛使用，并延伸出P、NP等复杂度类与千禧年难题研究，影响计算机科学理论走向。",
    "core": [
      "时间复杂度描述运行时间随输入规模增长的变化趋势",
      "空间复杂度描述内存占用随输入规模的增长趋势",
      "大O记号表示最坏情况渐近上界，是最常用的度量，平均与最好情况分析同样重要",
      "忽略常数因子与低阶项，聚焦规模趋近无穷时的主导增长项，使比较不依赖具体机器",
      "同一问题不同算法复杂度差异巨大，如排序可从O(n²)优化到O(n log n)"
    ],
    "applications": [
      "系统选型时预估算法的可扩展性、承载能力与响应延迟",
      "数据库查询优化器估算执行计划代价",
      "大数据场景判断算法能否承受千万级乃至亿级输入规模",
      "算法竞赛与在线判题系统中作为解法优劣的评价标准"
    ],
    "misconceptions": [
      "复杂度小的算法一定更快，复杂度分析给出的是趋势而非精确时间，小规模输入下常数因子与缓存局部性可能更关键",
      "O(n)一定比O(n²)好，n极小时常数主导，两者实际耗时差距并不明显"
    ],
    "references": [
      "算法复杂性分析 - 百度百科",
      "Time complexity - Wikipedia",
      "算法之旅：复杂度分析 - 腾讯云开发者社区"
    ],
    "sources": [
      "https://baike.baidu.com/item/算法复杂性分析",
      "https://en.wikipedia.org/wiki/Time_complexity",
      "https://cloud.tencent.com.cn/developer/article/1759929"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机科学",
    "relations": [
      {
        "type": "related",
        "target": "大O表示法",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "data-structure",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "NP完全问题",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "排序算法",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "算法",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "turing-machine",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "data-structure",
    "name": "数据结构",
    "aliases": [
      "Data Structure",
      "数据结构与算法"
    ],
    "field": "计算机科学",
    "tags": [
      "数据结构",
      "算法基础",
      "程序设计"
    ],
    "difficulty": 1,
    "summary": "组织与存储数据的方式，是算法效率的基石",
    "definition": "数据结构是计算机中组织和存储数据的方式，定义数据元素之间的逻辑关系以及可施加的操作集合。常见分类包括：线性结构如数组、链表、栈、队列；树形结构如二叉树、堆、B树；图形结构；以及散列结构如哈希表。逻辑结构与物理存储结构（顺序存储、链式存储）相互区分。选择合适的数据结构直接影响算法的时间与空间复杂度，例如哈希表平均O(1)查找而链表为O(n)。“程序=数据结构+算法”凸显其核心地位，数据结构是操作系统、数据库、编译器、网络等一切软件系统的基础构件。",
    "background": "1968年，高德纳在《计算机程序设计艺术》中系统化整理数据结构与算法理论，同年数据结构成为大学独立课程。此后数据结构始终是计算机科学教育的核心科目与面试考察重点，并随函数式语言与并发编程发展出持久化数据结构、无锁容器等新分支。",
    "core": [
      "数据结构决定数据的组织方式与基本操作集合",
      "数组、链表、栈、队列等线性结构按线性顺序组织元素",
      "树与图表达层级和网状关系，哈希表实现近似常数时间查找",
      "抽象数据类型ADT将逻辑接口与具体实现分离，便于复用与演化",
      "红黑树、跳表、并查集、Trie等高级结构支撑复杂场景需求，其选择与算法复杂度直接相关"
    ],
    "applications": [
      "操作系统用队列调度进程、用树状目录组织文件系统",
      "数据库用B+树与哈希索引加速海量数据查询",
      "编程语言运行时用栈管理函数调用、用堆管理动态内存分配",
      "图算法用邻接表与优先队列实现最短路径，搜索引擎用倒排索引组织文档"
    ],
    "misconceptions": [
      "数据结构只是编程技巧，实为算法设计与软件系统的理论基础，直接影响程序性能与正确性",
      "数组和链表总可互相替代，二者在随机访问与插入删除上的性能差异巨大，应据操作模式选择"
    ],
    "references": [
      "Data structure - Wikipedia",
      "什么是数据结构 - 腾讯云开发者社区",
      "数据结构 - 阿里云开发者社区"
    ],
    "sources": [
      "https://en.wikipedia.org/wiki/Data_structure",
      "https://developer.cloud.tencent.cn/techpedia/1914",
      "https://developer.aliyun.com/article/935171"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机科学",
    "relations": [
      {
        "type": "related",
        "target": "algorithm-complexity",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "算法",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "哈希表",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "二叉树",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "栈与队列",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "operating-system",
    "name": "操作系统",
    "aliases": [
      "OS",
      "Operating System",
      "系统软件"
    ],
    "field": "计算机科学",
    "tags": [
      "系统软件",
      "资源管理",
      "进程与内存管理"
    ],
    "difficulty": 2,
    "summary": "管理计算机软硬件资源、提供用户接口的系统软件",
    "definition": "操作系统是管理计算机硬件与软件资源、为应用程序提供公共服务并充当用户与硬件之间接口的系统软件。核心功能包括：进程管理（创建、调度与同步）、内存管理（地址空间、虚拟内存、分页）、文件系统（持久化存储组织）、设备管理与中断处理，并提供系统调用接口。操作系统通过虚拟化把有限物理资源抽象为多进程可共享的逻辑资源，以内核态与用户态隔离保证并发、安全与稳定。现代操作系统涵盖Windows、Linux、macOS、Android、iOS等，从单用户单任务演进到多用户多任务、实时与分布式形态。",
    "background": "20世纪50年代早期计算机靠人工操作，利用率低下；60年代出现批处理与分时系统，1965年Multics项目启动，1969年Unix诞生，奠定现代操作系统设计；80年代个人电脑普及推动Windows与macOS发展，Linux内核于1991年发布，开源模式使其成为服务器与云计算的绝对主力。",
    "core": [
      "操作系统的核心职责是资源管理：CPU、内存、磁盘、网络与外设",
      "进程与线程抽象实现并发执行，调度器决定运行顺序",
      "虚拟内存通过分页与换页为每个进程提供独立且受保护的地址空间",
      "内核态与用户态隔离，系统调用是用户程序访问内核服务的唯一通道",
      "互斥锁、信号量与管程等同步机制协调进程对共享资源的访问"
    ],
    "applications": [
      "Windows、Linux、macOS支撑桌面与服务器",
      "Android与iOS驱动数十亿移动设备",
      "实时操作系统RTOS用于汽车电子、航天器与工业控制",
      "云平台与超算集群的调度管理，Docker容器与KVM虚拟机基于操作系统虚拟化能力"
    ],
    "misconceptions": [
      "操作系统不只是开机界面与窗口系统，核心是资源管理与内核机制",
      "Linux只是命令行，其图形界面与桌面环境已经成熟，服务器端则因命令行效率高而广泛采用"
    ],
    "references": [
      "操作系统（1）概论 - 阿里云开发者社区",
      "操作系统架构原理 - 腾讯云开发者社区",
      "操作系统 - 国家教育研究院乐词网"
    ],
    "sources": [
      "https://developer.aliyun.com/article/1255434",
      "https://cloud.tencent.com.cn/developer/article/1919721",
      "https://terms.naer.edu.tw/detail/88e6b71653ab7f12bfbc58f420339d95/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机科学",
    "relations": [
      {
        "type": "related",
        "target": "进程与线程",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "虚拟内存",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "文件系统",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "系统调用",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "计算机体系结构",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "compiler",
    "name": "编译器",
    "aliases": [
      "Compiler",
      "编译程序",
      "编译系统"
    ],
    "field": "计算机科学",
    "tags": [
      "编译原理",
      "程序设计语言",
      "系统软件"
    ],
    "difficulty": 4,
    "summary": "将高级语言源程序整体翻译为机器可执行代码的程序",
    "definition": "编译器是一种系统软件，将用高级语言（如C、Java）编写的源程序整体翻译为等价的目标代码（机器码、字节码等）。经典编译器分为前端与后端：前端包括词法分析（把字符流切分为记号）、语法分析（按文法构造语法树）、语义分析与中间代码生成；后端包括代码优化与目标代码生成，符号表贯穿全程记录标识符信息。前后端以中间表示IR衔接，使同一前端可服务多种目标平台。与解释器逐句翻译执行不同，编译器先翻译后执行，典型代表有GCC、LLVM、javac。编译原理研究文法、自动机与翻译技术，是计算机科学的核心课程。",
    "background": "20世纪50年代程序员直接用机器码或汇编编程，效率极低；1952年出现第一个自动编码器，1957年IBM推出Fortran编译器，普及“编译”概念。此后编译器技术随语言演进迭代，2000年代的LLVM成为现代编译器基础设施的代表，以模块化与强优化著称，也为Rust、Swift等新语言提供统一后端。",
    "core": [
      "经典编译流程：词法分析、语法分析、语义分析、中间代码生成、优化与目标代码",
      "词法分析用有限自动机识别记号，语法分析基于上下文无关文法",
      "前端负责理解语言，后端负责适配目标机器",
      "中间表示IR使编译器可跨平台复用前后端",
      "优化阶段在不改变程序语义的前提下提升执行效率，符号表贯穿全程管理标识符"
    ],
    "applications": [
      "GCC、Clang/LLVM编译C/C++，javac把Java编译为字节码",
      "TypeScript编译器将TS转译为JavaScript",
      "数据库SQL引擎中的查询编译与执行计划生成",
      "Java虚拟机与JavaScript引擎中的即时编译JIT技术"
    ],
    "misconceptions": [
      "编译器与解释器完全对立，现代语言常二者混合，如JVM先编译为字节码再解释或JIT",
      "编译错误就是程序错误，很多编译错误只是语法或类型问题，IDE可自动提示并修复"
    ],
    "references": [
      "编译器 - 维基百科",
      "编译器结构 - 百度百科",
      "编译器的工作原理 - Baeldung中文"
    ],
    "sources": [
      "https://zh.wikipedia.org/zh-cn/编译器",
      "https://baike.baidu.com/item/编译器结构/21506708",
      "https://www.baeldung-cn.com/cs/how-compilers-work"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机科学",
    "relations": [
      {
        "type": "related",
        "target": "词法分析",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "语法分析",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "程序设计语言",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "解释器",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "形式语言与自动机",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "relational-database",
    "name": "关系数据库",
    "aliases": [
      "Relational Database",
      "关系型数据库",
      "SQL数据库"
    ],
    "field": "计算机科学",
    "tags": [
      "数据库",
      "关系模型",
      "SQL"
    ],
    "difficulty": 2,
    "summary": "基于关系模型、以二维表组织数据的数据库系统",
    "definition": "关系数据库是基于关系模型组织数据的数据库，由埃德加·科德于1970年提出。数据以二维表（关系）存储，行称元组、列称属性；每个表以主键唯一标识记录，表之间通过外键建立关联。关系数据库以结构化查询语言SQL进行定义、查询、更新与管理，并通过事务的ACID特性（原子性、一致性、隔离性、持久性）保证数据可靠。关系模型以集合论为基础，借助关系代数提供严谨的查询语义，查询优化器把声明式SQL转化为高效执行计划；典型产品有MySQL、PostgreSQL、Oracle、SQL Server。",
    "background": "20世纪60年代主流是层次与网状数据库，数据访问依赖导航式编程。1970年科德发表《大型共享数据银行的关系模型》，提出以数学关系组织数据；1974年IBM启动System R并发展出SQL，1979年Oracle推出首个商用关系数据库，此后关系数据库主导数据管理领域数十年，SQL成为数据界通用标准。",
    "core": [
      "数据以表（关系）组织，行是记录、列是属性，主键唯一标识记录",
      "外键建立表间关联，通过规范化分解减少数据冗余",
      "SQL提供声明式查询，用户无需关心底层存取路径",
      "事务的ACID特性保证并发下的数据一致性与可靠性",
      "视图、存储过程与触发器封装常用逻辑，B+树与哈希索引加速查询执行"
    ],
    "applications": [
      "银行、电商、ERP等核心业务系统的交易数据存储",
      "在线事务处理OLTP与后端API的可靠数据持久化",
      "数据仓库与BI报表以星型、雪花模型组织事实表与维度表",
      "MySQL、PostgreSQL、Oracle等支撑绝大多数Web应用的数据存取"
    ],
    "misconceptions": [
      "关系数据库正被NoSQL完全取代，二者适用场景不同，关系库在事务性与一致性上仍是业务系统的主流",
      "关系数据库等同于SQL，SQL只是其标准查询语言，底层模型基于关系代数与集合论"
    ],
    "references": [
      "关系数据库 - 维基百科",
      "关系模型 - 维基百科",
      "Relational model - Wikipedia"
    ],
    "sources": [
      "https://zh.wikipedia.org/zh-hans/关系数据库",
      "https://zh.wikipedia.org/wiki/关系模型",
      "https://en.wikipedia.org/wiki/Relational_model"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机科学",
    "relations": [
      {
        "type": "related",
        "target": "关系模型",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "SQL",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "事务与ACID",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "索引",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "NoSQL",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "distributed-system",
    "name": "分布式系统",
    "aliases": [
      "Distributed System",
      "分布式计算",
      "分布式架构"
    ],
    "field": "计算机科学",
    "tags": [
      "分布式系统",
      "网络",
      "一致性"
    ],
    "difficulty": 4,
    "summary": "多台自治计算机通过网络协作，对外呈现单一系统",
    "definition": "分布式系统是由多台通过网络互联的自治计算机组成、相互协作完成共同任务并对用户呈现为单一连贯系统的计算系统。其关键特征包括组件并发运行、没有全局时钟、组件故障相互独立。分布式系统面临的核心挑战是部分失效、网络分区与数据一致性，CAP定理指出一致性、可用性与分区容错性三者不可兼得。为解决一致性问题，出现了两阶段提交、Paxos、Raft等共识算法与最终一致性模型。典型形态包括分布式数据库、微服务架构、区块链与集群计算系统。",
    "background": "1970年代ARPA网兴起后多机互联需求出现，1978年莱斯利·兰波特提出逻辑时钟概念并奠定分布式系统理论基础；2000年代互联网规模扩张推动GFS、MapReduce等大规模分布式基础设施发展，2013年Raft共识算法论文发布，因易理解而成为业界标准。",
    "core": [
      "分布式系统无全局时钟，各节点并发运行且故障相互独立",
      "CAP定理：一致性、可用性、分区容错性三者最多同时满足其二",
      "Raft、Paxos等共识算法让多节点在消息可能丢失、可能延迟的网络中达成一致",
      "心跳、超时与重试等故障检测机制是保障系统健壮性的基本手段",
      "副本复制与故障转移实现高可用，分布式事务与补偿机制保证跨节点一致性"
    ],
    "applications": [
      "互联网后端的微服务架构与负载均衡集群",
      "TiDB、Spanner等分布式数据库与Amazon S3等对象存储",
      "区块链网络的共识机制与账本复制",
      "Hadoop、Spark等大数据平台与CDN内容分发网络"
    ],
    "misconceptions": [
      "分布式系统只是把多台机器连起来，关键是协同逻辑、数据分片与一致性协议的设计",
      "CAP三者可以同时满足，网络分区必然存在，实际只能在一致性与可用性之间权衡取舍"
    ],
    "references": [
      "分散式運算 - 维基百科",
      "CAP定理 - 维基百科",
      "AWS白皮书：CAP定理",
      "CAP定理与BASE理论 - 腾讯云开发者社区"
    ],
    "sources": [
      "https://zh.wikipedia.org/zh-hant/分布式系统",
      "https://zh.wikipedia.org/zh-tw/CAP定理",
      "https://docs.aws.amazon.com/zh_cn/whitepapers/latest/availability-and-beyond-improving-resilience/cap-theorem.md",
      "https://cloud.tencent.com.cn/developer/article/1992025"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机科学",
    "relations": [
      {
        "type": "related",
        "target": "CAP定理",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "共识算法",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "microservices",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "分布式数据库",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "一致性哈希",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "asymmetric-encryption",
    "name": "非对称加密",
    "aliases": [
      "公开密钥加密",
      "公钥密码学",
      "Asymmetric Encryption",
      "Public-key Cryptography"
    ],
    "field": "计算机科学",
    "tags": [
      "密码学",
      "信息安全",
      "公钥基础设施"
    ],
    "difficulty": 3,
    "summary": "公钥加密、私钥解密，密钥分离的加密密码体制",
    "definition": "非对称加密（公钥加密）是使用密钥对（公钥与私钥）的密码体制：公钥可公开分发，用于加密或验证签名；私钥由持有者秘密保管，用于解密或签名。二者在数学上关联，但从公钥推导私钥在计算上不可行。典型算法包括RSA（基于大整数分解难题）、椭圆曲线密码ECC（基于椭圆曲线离散对数难题）与Diffie-Hellman密钥交换。非对称加密解决了对称加密的密钥分发难题，是HTTPS、数字签名、SSL/TLS与区块链的技术基础。因计算开销大，实践中常与对称加密结合为混合加密：用公钥加密会话密钥，用对称算法加密数据。",
    "background": "1976年迪菲与赫尔曼发表《密码学的新方向》，首次提出公钥密码思想与密钥交换协议；1977年里维斯特、沙米尔与阿德尔曼提出RSA算法，公钥密码进入实用阶段，其安全性建立在数论难题之上，是现代网络安全的基石，ECC因密钥更短、性能更优而广泛部署于移动端与TLS。",
    "core": [
      "密钥对由公钥与私钥组成，公钥可公开分发、私钥必须严格保密",
      "公钥加密只能由对应私钥解密，私钥签名可由公钥验证，实现加密与认证的双重功能",
      "安全性依赖大整数分解、离散对数等计算难题",
      "数字信封与TLS握手等密钥协商协议是公钥体系的核心应用场景",
      "PKI通过证书颁发机构CA将公钥与实体身份绑定，支撑信任体系"
    ],
    "applications": [
      "HTTPS/TLS保护网页与移动应用传输安全",
      "数字签名与数字证书（PKI）验证身份与数据完整性",
      "PGP邮件加密、SSH登录认证与代码签名",
      "区块链中的地址生成、交易签名与智能合约验证"
    ],
    "misconceptions": [
      "非对称加密比对称加密绝对安全，二者安全性取决于密钥长度与算法成熟度，区别主要在密钥管理与性能，非对称密钥更长、运算更慢",
      "公钥加密后公钥自己也能解密，公钥与私钥功能不对称，加密必须用对应私钥解密"
    ],
    "references": [
      "RSA加密算法 - 维基百科",
      "公钥体系原理 - 百度百科",
      "RSA算法（非对称加密算法） - 科普中国",
      "Asymmetric Key Ciphers - Practical Cryptography for Developers"
    ],
    "sources": [
      "https://zh.wikipedia.org/wiki/RSA加密演算法",
      "https://baike.baidu.com/item/公钥体系原理",
      "https://cloud.kepuchina.cn/newSearch/imgText?id=7452926784337637376",
      "https://cryptobook.nakov.com/asymmetric-key-ciphers.md"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机科学",
    "relations": [
      {
        "type": "related",
        "target": "对称加密",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "RSA",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "数字签名",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "哈希函数",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "公钥基础设施PKI",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "neural-network",
    "name": "神经网络",
    "aliases": [
      "人工神经网络",
      "Neural Network",
      "ANN"
    ],
    "field": "计算机科学",
    "tags": [
      "机器学习",
      "深度学习",
      "人工智能"
    ],
    "difficulty": 3,
    "summary": "受生物神经元启发、由可学习参数连接的计算模型",
    "definition": "人工神经网络是受生物神经系统启发、由大量相互连接的神经元（计算单元）构成的机器学习模型。每个神经元对输入加权求和并施加非线性激活函数（如ReLU、Sigmoid），多层堆叠形成深度网络，通过反向传播算法依据损失函数梯度逐层更新权重，使模型从数据中自动学习特征与映射。神经网络涵盖前馈网络、卷积神经网络CNN、循环神经网络RNN与Transformer等结构，是监督、非监督与强化学习的通用工具。万能逼近定理表明足够宽的单隐层网络可逼近任意连续函数，现代深度学习依赖大规模数据、GPU并行与优化算法。",
    "background": "1943年麦克洛奇与皮茨提出首个神经元模型，1958年罗森布拉特发明感知机；1986年反向传播算法推动多层网络训练，2006年辛顿提出深度信念网络开启深度学习复兴；2012年AlexNet在ImageNet夺冠引爆深度学习浪潮；2017年Transformer问世，推动大模型与生成式AI时代到来。",
    "core": [
      "神经元对输入加权求和并施加ReLU、Sigmoid等非线性激活函数",
      "多层堆叠的深度网络可从海量数据自动学习层次化特征",
      "反向传播利用链式法则逐层计算损失梯度并更新权重",
      "损失函数衡量预测误差，SGD、Adam等优化器通过梯度驱动参数更新",
      "CNN擅长图像处理，RNN与Transformer擅长序列与语言建模，Transformer支撑大模型"
    ],
    "applications": [
      "计算机视觉、语音识别、自然语言处理等感知与理解任务",
      "GPT等大语言模型驱动智能对话、内容生成与代码编写",
      "推荐系统、金融风控、医疗影像辅助诊断与舆情分析",
      "自动驾驶感知、工业缺陷检测与蛋白质结构预测等科学领域"
    ],
    "misconceptions": [
      "神经网络并非生物大脑的精确复制，实为受其启发的高度简化的数学模型",
      "网络越深一定越好，存在过拟合、梯度消失等工程挑战，需要正则化与架构设计，大数据与算力同样不可或缺"
    ],
    "references": [
      "人工神经网络 - 维基百科",
      "人工神经网络课件 - 清华大学",
      "Artificial neural network - Wikipedia"
    ],
    "sources": [
      "https://zh.wikipedia.org/?curid=7663",
      "http://aigraph.cslt.org/courses/14/人工神经网络.pdf",
      "https://en.wikipedia.org/wiki/Artificial_neural_network"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机科学",
    "relations": [
      {
        "type": "related",
        "target": "machine-learning",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "deep-learning",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "反向传播",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "convolutional-neural-network",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "Transformer",
        "note": "",
        "confidence": 0.3
      }
    ]
  }
];
