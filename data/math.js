window.XIGAI = window.XIGAI || {};
window.XIGAI["数学"] = [
  {
    "id": "calculus",
    "name": "微积分",
    "aliases": [
      "Calculus",
      "微积分学"
    ],
    "field": "数学",
    "tags": [
      "分析学",
      "极限",
      "导数",
      "积分"
    ],
    "difficulty": 3,
    "summary": "研究变化率与累积量的数学分支，是现代科学的数学基石。",
    "definition": "微积分（Calculus）是研究函数的变化与累积规律的数学分支，核心概念包括极限、导数、积分与微积分基本定理。极限刻画变量趋近某值时的行为；导数描述函数在某点的瞬时变化率，即切线斜率；定积分给出函数在区间上的累积量（如面积）；微积分基本定理揭示导数与积分互为逆运算，将微分与积分两大问题统一起来。严格地说，现代微积分建立在极限的ε-δ定义与实数完备性之上，经柯西、魏尔斯特拉斯严密化，并推广到多元函数（偏导数、多重积分）与无穷级数等领域。",
    "background": "微积分萌芽于古希腊的穷竭法，17世纪牛顿与莱布尼茨分别独立创立微积分并用于力学与几何问题，引发关于优先权的著名争论。19世纪柯西与魏尔斯特拉斯以极限理论将其严格化，黎曼与勒贝格随后完善积分理论。此后微积分成为物理学、工程学与经济学的通用语言。",
    "core": [
      "极限是微积分的基石，导数与积分都通过极限过程定义",
      "微积分基本定理揭示微分与积分互为逆运算，连接变化与累积",
      "导数表示瞬时变化率，用于求极值、切线、速率与优化问题",
      "定积分表示累积量，可计算面积、体积、弧长与物理量",
      "多元微积分将方法推广到偏导数、梯度、多重积分与向量场"
    ],
    "applications": [
      "物理学的运动学、力学与电磁学方程都建立在微积分之上",
      "机器学习中的梯度下降算法依赖导数计算损失函数的极值",
      "工程与经济学中用积分计算总量、收益与最优决策"
    ],
    "misconceptions": [
      "认为微积分只是'求导和积分'的机械运算，忽略了极限的严格性基础",
      "误以为牛顿独自发明微积分，实际上莱布尼茨独立创立并贡献了现代记号"
    ],
    "references": [
      "Mathematics - Newton, Leibniz, Calculus | Britannica",
      "微积分A（北京理工大学）| 中国大学MOOC",
      "Mathematics - Calculus, Derivatives, Integrals | Britannica"
    ],
    "sources": [
      "https://www.britannica.com/science/mathematics/Newton-and-Leibniz",
      "https://www.icourse163.org/spoc/course/BIT-1002602008?tid=1002784020",
      "https://www.britannica.com/science/mathematics/The-calculus"
    ],
    "searchedAt": "2026-08-14",
    "domain": "数学",
    "relations": [
      {
        "type": "related",
        "target": "数学分析",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "微分方程",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "linear-algebra",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "实变函数",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "数值分析",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "linear-algebra",
    "name": "线性代数",
    "aliases": [
      "Linear Algebra",
      "线性代数（数学分支学科）"
    ],
    "field": "数学",
    "tags": [
      "向量空间",
      "矩阵",
      "线性变换",
      "特征值"
    ],
    "difficulty": 3,
    "summary": "研究向量空间与线性变换的代数分支，是现代数学与计算的基石。",
    "definition": "线性代数研究向量空间及其上的线性映射（线性变换）的结构与性质。向量空间是满足加法与数乘封闭性及八条公理的集合，矩阵则是线性变换在选定基下的具体表示。核心内容包括：线性方程组求解（高斯消元、秩）、行列式、特征值与特征向量、对角化与若尔当标准形、内积与正交化（格拉姆-施密特）、奇异值分解等。线性代数还建立了维数、零空间、像空间等结构概念，其理论统一了平面与高维空间中的几何直观，是抽象代数与现代数学各分支共同的基础语言。",
    "background": "线性方程组的求解可追溯到中国古代《九章算术》的方程术，但现代线性代数成型于19至20世纪：格拉斯曼与哈密顿建立向量与超复数概念，凯莱发展矩阵论，希尔伯特与抽象代数运动将其公理化。20世纪计算机兴起后，数值线性代数成为科学与工程计算的核心引擎。",
    "core": [
      "向量空间是线性代数的基本对象，矩阵是线性变换的数值表示",
      "秩、零空间与行列式刻画线性方程组解的结构",
      "特征值与特征向量揭示线性变换的固有方向与伸缩因子",
      "奇异值分解与对角化是数据降维和矩阵分解的核心工具",
      "内积空间赋予向量长度与夹角，支撑正交化与最小二乘"
    ],
    "applications": [
      "搜索引擎PageRank算法本质是计算随机矩阵的主特征向量",
      "图像处理与压缩（如JPEG）大量使用矩阵分解技术",
      "机器学习中神经网络与主成分分析（PCA）都以线性代数为计算内核",
      "工程结构分析与电路仿真需求解大规模线性方程组"
    ],
    "misconceptions": [
      "认为线性代数只是矩阵运算技巧，忽视了其几何与结构意义",
      "误以为特征值概念仅存在于对称矩阵，实际上一般方阵也有特征值（可能为复数）"
    ],
    "references": [
      "线性代数（数学分支学科）| 百度百科",
      "M1: Linear Algebra I | University of Oxford",
      "第一章 线性代数和矩阵基本知识 | 高等教育出版社"
    ],
    "sources": [
      "https://wapbaike.baidu.com/item/%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0/800",
      "https://courses.maths.ox.ac.uk/course/section.php?id=12059",
      "https://academic.hep.com.cn/laf/CN/chapter/978-7-04-037240-3/chapter01"
    ],
    "searchedAt": "2026-08-14",
    "domain": "数学",
    "relations": [
      {
        "type": "related",
        "target": "矩阵论",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "抽象代数",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "泛函分析",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "数值分析",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "解析几何",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "calculus",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "probability-theory",
    "name": "概率论",
    "aliases": [
      "Probability Theory",
      "概率"
    ],
    "field": "数学",
    "tags": [
      "随机性",
      "统计学",
      "公理化",
      "随机变量"
    ],
    "difficulty": 3,
    "summary": "研究随机现象数量规律的数学分支，以公理化为严密基础。",
    "definition": "概率论是研究随机现象规律的数学分支。现代概率论以柯尔莫哥洛夫1933年提出的公理化体系为基础：概率是定义在样本空间σ-代数上的测度，满足非负性、规范性（全空间概率为1）与可列可加性三条公理，从而将概率纳入测度论框架。在此基础上可严格定义随机变量、概率分布（离散与连续）、期望、方差、条件概率与独立性，并推导出大数定律、中心极限定理等深刻结论。概率论既处理古典等可能模型，也涵盖随机过程（如马尔可夫链、布朗运动），是连接数学与不确定性的桥梁。",
    "background": "概率源于16-17世纪赌徒对赌博问题的求解：帕斯卡与费马通过书信探讨掷骰子问题奠定古典概率，惠更斯、雅各布·伯努利随后将其系统化。拉普拉斯给出古典定义并发展分析概率论，频率学派于19世纪后期兴起。1933年柯尔莫哥洛夫以测度论完成公理化，概率论从此成为严格的数学学科。",
    "core": [
      "柯尔莫哥洛夫公理将概率定义为满足三条公理的测度",
      "随机变量与分布函数刻画随机现象的数量特征",
      "大数定律说明频率在大量重复下趋于概率",
      "中心极限定理表明大量独立随机变量之和近似服从正态分布",
      "条件概率与贝叶斯公式支撑统计推断与机器学习"
    ],
    "applications": [
      "保险精算依据概率模型计算保费与赔付风险",
      "现代密码学与量子计算依赖概率与随机性分析",
      "金融工程用随机过程（如布朗运动）为期权定价",
      "机器学习的贝叶斯推断与生成模型以概率论为基础"
    ],
    "misconceptions": [
      "把'概率为0'等同于'不可能发生'：连续分布中单点概率为0但仍可能发生",
      "误以为事件独立等同于互斥，二者是完全不同的概念"
    ],
    "references": [
      "概率公理 - 维基百科",
      "Kolmogorov's axioms | Oxford Reference",
      "概率公理_百度百科"
    ],
    "sources": [
      "https://zh.wikipedia.org/zh-cn/%E6%A9%9F%E7%8E%87%E5%85%AC%E8%A8%AD",
      "https://www.oxfordreference.com/display/10.1093/oi/authority.20110803100041841?rskey=auGWRR&result=3",
      "https://wapbaike.baidu.com/item/%E6%A6%82%E7%8E%87%E5%85%AC%E7%90%86"
    ],
    "searchedAt": "2026-08-14",
    "domain": "数学",
    "relations": [
      {
        "type": "related",
        "target": "统计学",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "测度论",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "随机过程",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "数理统计",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "信息论",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "number-theory",
    "name": "数论",
    "aliases": [
      "Number Theory",
      "整数论"
    ],
    "field": "数学",
    "tags": [
      "素数",
      "整数",
      "解析数论",
      "密码学"
    ],
    "difficulty": 4,
    "summary": "研究整数性质的数学分支，被誉为'数学的皇后'。",
    "definition": "数论是研究整数性质与整数方程解的数学分支，研究对象包括整除性、素数、同余、丢番图方程等。其核心问题围绕素数的分布（如素数定理、黎曼猜想）、算术基本定理（每个整数可唯一分解为素数之积）以及模运算下的同余理论展开。按方法分为初等数论（欧几里得、欧拉、高斯的工作）、解析数论（以ζ函数与复分析研究素数分布）、代数数论（研究代数整数与理想）与组合数论。尽管问题表述简单，许多数论问题（如哥德巴赫猜想）难度极高，其成果深刻而优雅，被高斯称为'数学的皇后'。",
    "background": "数论起源于古代文明对整数与勾股数的探索，欧几里得《几何原本》已证明素数无限多。费马、欧拉、高斯奠定近代数论基石，高斯《算术研究》（1801）是同余理论的开端。19世纪黎曼引入ζ函数研究素数分布，20世纪怀尔斯证明费马大定理，数论在密码学中获得巨大现实价值。",
    "core": [
      "算术基本定理：每个大于1的整数可唯一分解为素数幂之积",
      "素数在整数中无限多，但其分布规律（素数定理、黎曼猜想）极为深刻",
      "同余与模运算构成公钥密码学（RSA）的数学基础",
      "丢番图方程研究整数解，费马大定理是其最著名难题",
      "解析数论通过ζ函数将素数分布与分析学联系起来"
    ],
    "applications": [
      "RSA等公钥密码体制的安全性依赖大整数分解的困难性",
      "区块链与数字签名的椭圆曲线算法基于数论",
      "ISBN与身份证等校验码使用模运算设计",
      "伪随机数生成与纠错编码运用数论构造"
    ],
    "misconceptions": [
      "认为数论是'无用'的纯理论，实际上它是现代密码学与信息安全的地基",
      "误以为素数分布无规律可循，素数定理精确描述了其渐近密度"
    ],
    "references": [
      "數論 - 維基百科",
      "Lecture 2: An Introduction to Number Theory | Cornell University",
      "哥德巴赫猜想的证明：解决难题的新进展 | 科普中国"
    ],
    "sources": [
      "https://zh.wikipedia.org/zh-hant/%E6%95%B8%E8%AB%96",
      "https://pi.math.cornell.edu/~mec/Summer2008/lundell/lecture2.html",
      "https://cloud.kepuchina.cn/newSearch/imgText?id=6969207140975366144"
    ],
    "searchedAt": "2026-08-14",
    "domain": "数学",
    "relations": [
      {
        "type": "related",
        "target": "解析数论",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "代数数论",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "密码学",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "riemann-hypothesis",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "抽象代数",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "topology",
    "name": "拓扑学",
    "aliases": [
      "Topology",
      "位置分析"
    ],
    "field": "数学",
    "tags": [
      "几何",
      "连续映射",
      "同胚",
      "不动点"
    ],
    "difficulty": 4,
    "summary": "研究连续变形下不变性质的数学分支，即'橡皮膜几何学'。",
    "definition": "拓扑学是研究几何对象在连续变形（拉伸、弯曲但不撕裂、不粘连）下保持不变性质的数学分支。它不关心长度、角度等度量性质，而关注连通性、紧致性、可分离性等拓扑性质，其基本概念是拓扑空间与连续映射：一个集合配备一族满足公理的开集即构成拓扑空间，两个空间同胚当且仅当存在双向连续的映射。经典成果包括欧拉公式（V-E+F=2）、布劳威尔不动点定理、约当曲线定理等，庞加莱猜想（已由佩雷尔曼证明）曾是拓扑学最著名的难题。拓扑学已成为现代数学各分支共用的基础语言。",
    "background": "拓扑学思想萌芽于欧拉1736年解决的柯尼斯堡七桥问题，它完全不依赖度量。黎曼的曲面理论与'位置分析'概念、庞加莱1895年《位置分析》奠定组合拓扑基础，20世纪发展出代数拓扑（同调、同伦）与微分拓扑。庞加莱猜想（1904年提出）经百年努力，于2002-2003年由佩雷尔曼借助里奇流证明。",
    "core": [
      "拓扑空间与开集公理是拓扑学的出发点，连续映射定义其态射",
      "同胚是拓扑等价概念：咖啡杯与甜甜圈因都只有一个洞而拓扑等价",
      "欧拉公式V-E+F=2刻画多面体与曲面的拓扑不变量",
      "代数拓扑用同调群、基本群把几何问题转化为代数问题",
      "不动点定理（布劳威尔、巴拿赫）在方程求解与经济学均衡中广泛应用"
    ],
    "applications": [
      "大数据分析中的拓扑数据分析（TDA）用持续同调识别数据结构",
      "机器人路径规划中的拓扑避障与构型空间分析",
      "物理学中拓扑绝缘体等物质相的研究使用拓扑概念",
      "计算机图形学中的网格处理与曲面重建依赖拓扑结构"
    ],
    "misconceptions": [
      "误以为拓扑学只是'橡皮膜变形'的趣味几何，其实它是现代数学的严格基础理论",
      "混淆拓扑等价与几何全等：拓扑等价不考虑长度、角度等度量"
    ],
    "references": [
      "拓扑学 | 科普中国",
      "拓扑 - 百度百科",
      "Topology | University of Tennessee Mathematics"
    ],
    "sources": [
      "https://www.kepuchina.cn/article/articleinfo?ar_id=286164&business_type=100&classify=0",
      "https://baike.baidu.com/item/%E6%8B%93%E6%92%B2/573536",
      "https://math.utk.edu/research/topology/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "数学",
    "relations": [
      {
        "type": "related",
        "target": "点集拓扑",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "代数拓扑",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "微分拓扑",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "微分几何",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "泛函分析",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "group-theory",
    "name": "群论",
    "aliases": [
      "Group Theory",
      "群"
    ],
    "field": "数学",
    "tags": [
      "抽象代数",
      "对称性",
      "伽罗瓦理论",
      "置换"
    ],
    "difficulty": 4,
    "summary": "研究对称性的代数理论，是现代数学与物理学的通用语言。",
    "definition": "群论是研究群的代数理论。群是配备一个满足封闭性、结合律、单位元与逆元四条公理的二元运算的集合，群论刻画对称性：一个对象的对称操作全体构成群。核心内容包括子群、陪集与拉格朗日定理、正规子群与商群、同态与同构定理、群的分类（如有限单群分类）以及置换群、循环群、李群等具体类型。群论源于伽罗瓦对多项式方程可解性的研究：方程的根式可解当且仅当其伽罗瓦群可解，由此证明五次及以上一般方程无根式解。群论统一了代数、几何与物理中的对称性描述。",
    "background": "群论起源于18-19世纪方程求解研究：拉格朗日、鲁菲尼、阿贝尔与伽罗瓦的工作揭示置换与可解性的联系。凯莱给出抽象群定义，克莱因用群论统一几何（埃尔朗根纲领），20世纪李群进入物理学。有限单群分类（1980年代完成）被誉为20世纪数学的重大成就之一。",
    "core": [
      "群的四条公理（封闭、结合、单位元、逆元）统一了各种对称性",
      "伽罗瓦理论用群论判定多项式方程是否根式可解",
      "拉格朗日定理说明子群阶整除群阶，奠定有限群结构理论",
      "同态与同构揭示不同群之间的结构对应关系",
      "李群与表示论成为粒子物理与量子力学的基本工具"
    ],
    "applications": [
      "晶体学中32种点群与230种空间群描述晶体对称性",
      "粒子物理标准模型建立在李群SU(3)×SU(2)×U(1)之上",
      "密码学与纠错码（如线性码）大量使用有限群结构",
      "化学中分子对称群用于分析光谱与分子轨道"
    ],
    "misconceptions": [
      "误以为群论仅研究数字运算，其实它刻画一切对称结构",
      "把'可交换（阿贝尔）群'当作群的普遍形态，忽略了非交换群的丰富性"
    ],
    "references": [
      "群论 | 科普中国",
      "群 | 上海交通大学数学科学学院",
      "Galois Theory | Socratica"
    ],
    "sources": [
      "https://cloud.kepuchina.cn/newSearch/imgText?id=6972628089840300032",
      "https://math.sjtu.edu.cn/course/gdds/group.htm",
      "https://learn.socratica.com/en/topic/mathematics/abstract-algebra/galois-theory"
    ],
    "searchedAt": "2026-08-14",
    "domain": "数学",
    "relations": [
      {
        "type": "related",
        "target": "抽象代数",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "伽罗瓦理论",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "环论",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "域论",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "表示论",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "godel-incompleteness",
    "name": "哥德尔不完备定理",
    "aliases": [
      "哥德尔不完全性定理",
      "Gödel's Incompleteness Theorems"
    ],
    "field": "数学",
    "tags": [
      "数理逻辑",
      "可计算性",
      "公理化",
      "元数学"
    ],
    "difficulty": 5,
    "summary": "证明任何一致的算术系统都存在无法判定命题的里程碑定理。",
    "definition": "哥德尔不完备定理是库尔特·哥德尔1931年证明的两条数理逻辑定理。第一不完备定理：任何包含皮亚诺算术且一致（无矛盾）的公理化形式系统，都存在既不能证明也不能否证的真命题——该系统不完备；第二不完备定理：若系统能自证一致，则它必不一致。证明的核心是哥德尔配数法：把公式与证明编码为自然数，使系统能'谈论自身'，构造出等价于'本命题不可证明'的自指命题。该定理终结了希尔伯特纲领中'一切数学真理都可形式证明'的设想，深刻影响了可计算性理论与人工智能哲学。",
    "background": "1900年希尔伯特提出纲领，希望为全部数学建立一致且完备的公理系统。哥德尔1931年在论文《论〈数学原理〉及相关系统的形式不可判定命题》中证明完备性不可能，罗素与怀特海《数学原理》形式化数学的工程因此受挫。图灵随后用停机问题给出等价的可计算性刻画，进一步巩固了这一结论。",
    "core": [
      "第一不完备定理：一致的算术系统中存在不可判定的真命题",
      "第二不完备定理：系统无法在自身内部证明自身的一致性",
      "哥德尔配数法把命题与证明编码成算术陈述，实现自我指涉",
      "希尔伯特形式主义纲领因不完备定理而终结",
      "图灵停机问题是不完备定理的可计算性等价表述"
    ],
    "applications": [
      "编译器与类型系统的设计须考虑表达力的不可判定性边界",
      "人工智能中'机器能否自我理解'的争论以不完备定理为理论坐标",
      "证明论与元数学中刻画各种形式系统的局限",
      "对不可判定问题只能追求近似或受限求解，启发算法设计边界"
    ],
    "misconceptions": [
      "误以为哥德尔定理证明'人脑优于计算机'，该结论超出定理的适用范围",
      "把'不完备'误解为'数学有错误'，实为公理化方法的固有局限"
    ],
    "references": [
      "Gödel's Incompleteness Theorems | Stanford Encyclopedia of Philosophy",
      "哥德尔不完备定理 - 维基百科",
      "哥德尔不完全性定理_百度百科"
    ],
    "sources": [
      "https://plato.stanford.edu/ENTRiES/goedel-incompleteness/",
      "https://zh.wikipedia.org/zh-hant/%E5%93%A5%E5%BE%B7%E5%B0%94%E4%B8%8D%E5%AE%8C%E5%A4%87%E5%AE%9A%E7%90%86",
      "https://baike.baidu.com/item/%E5%93%A5%E5%BE%B7%E5%B0%94%E4%B8%8D%E5%AE%8C%E5%85%A8%E6%80%A7%E5%AE%9A%E7%90%86/4116640"
    ],
    "searchedAt": "2026-08-14",
    "domain": "数学",
    "relations": [
      {
        "type": "related",
        "target": "数理逻辑",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "可计算性理论",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "集合论",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "希尔伯特纲领",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "turing-machine",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "halting-problem",
        "note": "",
        "confidence": 0.75
      }
    ]
  },
  {
    "id": "chaos-theory",
    "name": "混沌理论",
    "aliases": [
      "Chaos Theory",
      "混沌学"
    ],
    "field": "数学",
    "tags": [
      "非线性",
      "动力系统",
      "蝴蝶效应",
      "分形"
    ],
    "difficulty": 4,
    "summary": "研究确定性系统中对初值敏感的非线性行为的理论。",
    "definition": "混沌理论是研究确定性非线性动力系统中貌似随机、实则确定的行为的数学分支。混沌系统满足三个特征：对初值的极端敏感依赖性（'蝴蝶效应'）、拓扑传递性与周期轨道稠密性。1963年洛伦兹在简化大气对流模型（洛伦兹方程组）中发现，初始条件的微小差异会被迅速放大，长期行为无法预测——尽管系统本身完全确定。混沌并非'混乱'，而是隐藏在随机表象下的新秩序：其相空间呈现分形结构（奇异吸引子），如洛伦兹吸引子。李雅普诺夫指数量化轨道分离速度，是判定混沌的主要工具。",
    "background": "庞加莱在19世纪末研究三体问题时已发现轨道对初值的敏感依赖，但混沌成为独立学科始于1963年洛伦兹发表《确定性的非周期流》。1975年李天岩与约克提出'chaos'术语，费根鲍姆发现通向混沌的普适常数，曼德博系统化分形几何。混沌理论由此从气象学扩散到众多学科。",
    "core": [
      "对初值的敏感依赖：微小差异经迭代被指数放大，导致长期不可预测",
      "混沌产生于确定性系统，不依赖随机外力",
      "奇异吸引子是相空间中具有分形结构的长期行为集合",
      "李雅普诺夫指数为正刻画轨道指数分离，是混沌的量化判据",
      "费根鲍姆常数揭示倍周期分岔通向混沌的普适规律"
    ],
    "applications": [
      "气象预报本质受混沌限制，长期天气无法精确预测",
      "混沌保密通信利用混沌信号作为密钥载体",
      "心脏节律、神经元放电等生物系统的动力学分析",
      "金融市场时间序列的非线性分析与风险建模"
    ],
    "misconceptions": [
      "把混沌等同于随机：混沌是确定性的，只是初值敏感导致不可预测",
      "误以为'蝴蝶效应'意味着小干预可随意控制大结果，它强调的是预测极限"
    ],
    "references": [
      "“混沌理论”之父罗伦兹逝世 | 科学网",
      "从混沌中把握规律 | 人民网理论",
      "每日科技名词|混沌 | 学习强国"
    ],
    "sources": [
      "https://paper.sciencenet.cn/htmlnews/200841813641336205514.html",
      "http://theory.people.com.cn/n/2013/0323/c49157-20891975.html",
      "https://article.xuexi.cn/articles/index.html?art_id=13920672789984132573&item_id=13920672789984132573&ptype=-1&reco_id=101a6401f99ec0a822c80000&ref_read_id=a3033aac-727f-446c-b36c-f89d7919cd1d&related_id=15615456903620830748&related_type=1&share_to=weibo&source=share&study_style_id=feeds_default"
    ],
    "searchedAt": "2026-08-14",
    "domain": "数学",
    "relations": [
      {
        "type": "related",
        "target": "动力系统",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "分形几何",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "非线性科学",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "洛伦兹方程",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "微分方程",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "fourier-transform",
    "name": "傅里叶变换",
    "aliases": [
      "Fourier Transform",
      "傅里叶分析"
    ],
    "field": "数学",
    "tags": [
      "调和分析",
      "信号处理",
      "频谱",
      "积分变换"
    ],
    "difficulty": 4,
    "summary": "将信号分解为不同频率正弦波的数学工具，现代科技的支柱。",
    "definition": "傅里叶变换是将时域（或空间域）函数分解为不同频率成分的积分变换。对函数f(t)，其傅里叶变换F(ω)=∫f(t)e^(-iωt)dt，将信号从时间域映射到频率域，刻画各频率分量的幅度与相位；逆变换则从频谱重构原信号。傅里叶级数表明周期函数可展开为三角函数无穷和，傅里叶变换是其非周期推广。离散傅里叶变换（DFT）及其快速算法FFT（库利-图基，1965）使变换在计算机上高效可行。傅里叶变换是线性、可逆且保内积（帕塞瓦尔定理）的酉变换，构成调和分析的基础工具。",
    "background": "1807年傅里叶在热传导研究中提出'任意函数可由三角级数表示'，虽遭拉格朗日等质疑，其思想深刻影响了数学分析。19世纪黎曼、狄利克雷奠定收敛理论，20世纪勒贝格积分与施瓦茨分布论使变换理论完善。1965年FFT算法使傅里叶变换进入工程应用，催生数字信号处理学科。",
    "core": [
      "傅里叶级数把周期函数展开为正弦与余弦的叠加",
      "傅里叶变换将信号从时域映射到频域，揭示频率成分",
      "FFT算法把DFT的计算复杂度从O(N²)降到O(N log N)",
      "帕塞瓦尔定理保证变换前后能量守恒，变换是酉的",
      "短时傅里叶变换与小波变换是对非平稳信号的改进"
    ],
    "applications": [
      "JPEG、MP3等图像与音频压缩编码依赖DCT/FFT",
      "医学成像中MRI与CT的图像重建使用傅里叶变换",
      "4G/5G无线通信的OFDM调制以FFT为物理层核心",
      "地震勘探、语音识别与降噪都运用频谱分析"
    ],
    "misconceptions": [
      "误以为傅里叶变换只适用于周期信号，非周期与离散信号同样适用",
      "把时域与频域看作相互独立的描述，其实二者通过变换互为对偶"
    ],
    "references": [
      "傅里叶变换 | 科普中国",
      "F is for Fourier Transform | University of Oxford Mathematics",
      "Overview of Fourier Series and Fourier Transforms and Their Applications | HAL"
    ],
    "sources": [
      "https://www.kepuchina.cn/article/articleinfo?ar_id=360581&business_type=100&classify=0",
      "https://www.maths.ox.ac.uk/outreach/oxford-mathematics-alphabet/f-fourier-transform?redirected=1",
      "https://hal.science/hal-05100269v1"
    ],
    "searchedAt": "2026-08-14",
    "domain": "数学",
    "relations": [
      {
        "type": "related",
        "target": "调和分析",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "小波变换",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "信号处理",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "复变函数",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "积分变换",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "riemann-hypothesis",
    "name": "黎曼猜想",
    "aliases": [
      "Riemann Hypothesis",
      "黎曼假设"
    ],
    "field": "数学",
    "tags": [
      "素数分布",
      "解析数论",
      "ζ函数",
      "千禧年问题"
    ],
    "difficulty": 5,
    "summary": "断言黎曼ζ函数非平凡零点全部位于临界线上的未解猜想。",
    "definition": "黎曼猜想断言：黎曼ζ函数的非平凡零点全部落在复平面上实部为1/2的临界线上。ζ函数定义为ζ(s)=Σ(1/n^s)（Re(s)>1），可解析延拓到整个复平面（s=1为极点），并满足函数方程ζ(s)与ζ(1-s)对称。1859年黎曼在论文《论小于给定值的素数个数》中提出该猜想，并揭示ζ函数零点与素数分布密切相关：素数定理等价于'零点实部小于1'，黎曼猜想则等价于更精确的误差估计。该猜想是克莱数学研究所2000年公布的千禧年大奖难题之一，悬赏一百万美元，至今未解，被视为数学最重大的开放问题之一。",
    "background": "素数分布问题贯穿数论史：欧几里得证素数无限，勒让德与高斯猜想素数定理，切比雪夫给出部分结果。1859年黎曼引入ζ函数的研究纲领，把素数问题化为复分析问题。1896年阿达马与德·拉·瓦莱-普森独立证明素数定理。此后黎曼猜想成为数论核心，无数证明尝试均告失败。",
    "core": [
      "ζ函数解析延拓后，其非平凡零点与素数分布一一对应",
      "素数定理已被证明，但黎曼猜想要求的误差精度尚未攻克",
      "黎曼猜想成立等价于一系列数论与分析的精确估计",
      "它是千禧年七大难题之一，悬赏一百万美元",
      "广义黎曼猜想（对L函数）在数论与密码学中同样关键"
    ],
    "applications": [
      "RSA密码学中素数生成的可靠性分析部分依赖素数分布精度",
      "黎曼猜想为真的前提下可证明许多数论定理（条件性结果）",
      "素数生成算法与随机数质量的数论分析"
    ],
    "misconceptions": [
      "误以为黎曼猜想已被证明，实际上至今未解（相关'证明'多为误传或错误）",
      "把ζ函数的平凡零点（负偶数）与非平凡零点混淆，猜想只针对后者"
    ],
    "references": [
      "卢昌海：老树发新枝——黎曼猜想的新进展 | 北京大学数学科学学院",
      "黎曼猜想_百度百科",
      "The Riemann Hypothesis | Clay Mathematics Institute"
    ],
    "sources": [
      "https://math.pku.edu.cn/puremath/wsgwz/98566.htm",
      "https://baike.baidu.com/item/%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3/1490284",
      "https://www.claymath.org/library/annual_report/xSarnak_RH.pdf"
    ],
    "searchedAt": "2026-08-14",
    "domain": "数学",
    "relations": [
      {
        "type": "related",
        "target": "解析数论",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "素数定理",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "ζ函数",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "L函数",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "number-theory",
        "note": "",
        "confidence": 0.85
      }
    ]
  }
];
