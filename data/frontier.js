window.XIGAI = window.XIGAI || {};
window.XIGAI["前沿科技"] = [
  {
    "id": "quantum-computing",
    "name": "量子计算",
    "aliases": [
      "Quantum Computing",
      "量子计算机"
    ],
    "field": "前沿科技",
    "tags": [
      "量子比特",
      "量子纠错",
      "量子优越性"
    ],
    "difficulty": 5,
    "summary": "利用量子叠加与纠缠原理，实现远超经典计算机的特定运算能力。",
    "definition": "量子计算利用量子比特的叠加与纠缠特性进行计算，n个量子比特可同时处于2^n种状态的叠加，在特定问题上获得指数级加速。2024年12月谷歌发布105量子比特芯片Willow，首次实现“低于阈值”的量子纠错——扩大比特规模时错误率指数级下降，并在随机线路采样中5分钟内完成超算需10^25年的运算；2025年10月谷歌又以“量子回声”算法将量子优势扩大至超算的约1.3万倍且可验证。中国科大2025年3月发布“祖冲之三号”（105比特），随机线路采样比谷歌“悬铃木”快约6个数量级。业界预计容错量子计算仍需5—10年，量子纠错是最大瓶颈。",
    "background": "量子计算思想可追溯至1981年费曼的量子模拟设想，1994年Shor算法证明其可破解大数分解，引发全球热潮；2019年谷歌“悬铃木”首次宣称量子优越性。此后超导、离子阱、光量子、中性原子等路线并行推进，2020年代进入量子纠错与工程化攻坚阶段。",
    "core": [
      "以量子叠加与纠缠为算力之源，信息编码在量子比特上",
      "量子纠错是走向实用化的关键：用逻辑比特压制物理比特错误",
      "已知优势问题集中于随机线路采样、质因数分解与量子模拟",
      "主流技术路线：超导、离子阱、光量子、中性原子与拓扑量子计算",
      "正从含噪声中等规模量子（NISQ）向容错量子计算（FTQC）过渡"
    ],
    "applications": [
      "量子化学与材料模拟（催化剂、电池、新药研发）",
      "密码破解评估与后量子密码迁移",
      "组合优化（金融风控、物流调度）",
      "量子机器学习"
    ],
    "misconceptions": [
      "量子计算机并非在所有任务上都更快，只在特定问题上具备优势",
      "量子比特数多不等于性能强，纠错能力与错误率同样关键"
    ],
    "references": [
      "谷歌首次实现可验证的量子优势：比最快超算还快13000倍（芯智讯）",
      "谷歌Willow新量子芯片+Quantum Echoes算法（unwire.hk）",
      "让量子科技更好造福人类（新华网）"
    ],
    "sources": [
      "https://www.icsmart.cn/97845/",
      "https://unwire.hk/2025/10/23/quantum-willow-echo/fun-tech/",
      "http://www.news.cn/tech/20251229/c58ea0b6350f4e6c9ffa372a757b0d53/c.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "前沿科技",
    "relations": [
      {
        "type": "related",
        "target": "quantum-communication",
        "note": ""
      },
      {
        "type": "related",
        "target": "量子纠错",
        "note": ""
      },
      {
        "type": "related",
        "target": "量子优越性",
        "note": ""
      },
      {
        "type": "related",
        "target": "量子芯片",
        "note": ""
      },
      {
        "type": "related",
        "target": "后量子密码",
        "note": ""
      },
      {
        "type": "related",
        "target": "quantum-entanglement",
        "note": ""
      }
    ]
  },
  {
    "id": "quantum-communication",
    "name": "量子通信",
    "aliases": [
      "Quantum Communication",
      "量子保密通信"
    ],
    "field": "前沿科技",
    "tags": [
      "量子密钥分发",
      "量子纠缠",
      "信息安全"
    ],
    "difficulty": 4,
    "summary": "利用量子力学原理实现可探测窃听的无条件安全密钥分发。",
    "definition": "量子通信利用量子态不可克隆与测量坍缩特性实现安全通信，核心是量子密钥分发（QKD）：窃听者测量会扰动量子态而被察觉，从而保证密钥无条件安全。2016年中国发射世界首颗量子科学实验卫星“墨子号”，实现千公里级星地量子密钥分发；2025年3月中国科大团队首次实现量子微纳卫星与可移动地面站间的实时星地量子密钥分发，向星座化组网迈进。产业化同步提速：中电信量子集团推出“量子密话”等产品，合肥建成覆盖城区的量子城域网，2025年量子科技产业化明显加速，京沪干线等骨干网络与“济南一号”微纳卫星已投入示范应用。",
    "background": "1984年BB84协议奠定QKD理论基础；2007年中国实现百公里级光纤量子密钥分发，2016年“墨子号”把距离拓展至千公里级星地链路。量子通信与量子计算并列为量子科技两大支柱，中国在星地QKD方向保持国际领先。",
    "core": [
      "基于量子不可克隆定理与测量坍缩，实现窃听可探测",
      "主流协议：BB84协议与测量设备无关QKD（MDI-QKD）",
      "光纤信道、星地自由空间信道与量子中继是三大技术路线",
      "安全性依赖量子力学而非计算复杂度，可抵御量子计算攻击"
    ],
    "applications": [
      "政务、金融、能源等高敏感数据的加密传输",
      "星地一体化量子保密骨干网",
      "量子加密通话（量子密话）等消费级产品",
      "与经典密码融合的混合加密体系"
    ],
    "misconceptions": [
      "量子通信并不传输超光速信息，而是分发密钥，速率仍受光速限制",
      "量子通信不替代经典通信，而是为其提供更安全的密钥"
    ],
    "references": [
      "我国学者在星地量子通信领域取得进展（国家自然科学基金委）",
      "从实验室到百姓家：中国量子科技产业化提速（中国新闻网）",
      "中国科大首次实现量子微纳卫星与可移动地面站间的实时星地量子密钥分发（中科大）"
    ],
    "sources": [
      "https://www.nsfc.gov.cn/p1/3381/2825/77611.html",
      "http://www.bfse.cas.cn/wlyhx/kyjz_138199/202503/t20250320_5059357.html",
      "https://www.chinanews.com.cn/cj/2025/05-19/10418407.shtml"
    ],
    "searchedAt": "2026-08-14",
    "domain": "前沿科技",
    "relations": [
      {
        "type": "related",
        "target": "quantum-computing",
        "note": ""
      },
      {
        "type": "related",
        "target": "量子密钥分发",
        "note": ""
      },
      {
        "type": "related",
        "target": "quantum-entanglement",
        "note": ""
      },
      {
        "type": "related",
        "target": "后量子密码",
        "note": ""
      },
      {
        "type": "related",
        "target": "卫星通信",
        "note": ""
      }
    ]
  },
  {
    "id": "controlled-nuclear-fusion",
    "name": "可控核聚变",
    "aliases": [
      "Controlled Nuclear Fusion",
      "人造太阳"
    ],
    "field": "前沿科技",
    "tags": [
      "等离子体",
      "托卡马克",
      "净能量增益"
    ],
    "difficulty": 5,
    "summary": "模仿太阳以聚变反应释放能量，追求近乎无限的清洁能源。",
    "definition": "可控核聚变模拟太阳内部轻核聚变释放能量的过程，氘氚等离子体需被加热到上亿摄氏度并约束足够长时间，实现“点火”与净能量输出。2022年12月美国国家点火装置（NIF）首次实现点火：输出3.15兆焦耳、超过输入2.05兆焦耳；2025年单发输出纪录据公开报道刷新至约8.6兆焦耳、聚变增益Q值首破4。中国EAST（东方超环）2025年1月实现1亿摄氏度、1066秒的稳态高约束模式运行，刷新世界纪录并入选“2025中国科学十大进展”。全球最大实验堆ITER持续推进，能量奇点、星环聚能等中国企业2025年密集融资，商业聚变竞赛升温。材料、氚增殖与稳态运行仍是主要工程瓶颈。",
    "background": "1950年代托卡马克概念提出，1991年JET首次实现受控氘氚聚变，2006年ITER立项。中国EAST与环流系列装置长期保持等离子体参数世界纪录；2010年代以来CFS、能量奇点等私营企业大举进入，聚变从纯科研走向工程与商业探索。",
    "core": [
      "需要亿度级温度与足够长的约束时间（劳森判据）",
      "磁约束（托卡马克/仿星器）与惯性约束（激光）两大路线",
      "点火即聚变输出能量超过驱动输入能量（Q>1）",
      "氚自持、耐中子辐照材料、稳态运行是三大工程瓶颈",
      "2030—2040年建成商用示范堆是全球主流预期"
    ],
    "applications": [
      "提供近乎零碳、燃料近乎无限的基荷电力",
      "高温等离子体工业应用与聚变中子源",
      "氢能耦合与空间推进（远期）"
    ],
    "misconceptions": [
      "实现点火不等于商用发电，从点火到并网发电仍有很长的工程距离",
      "聚变堆没有堆芯熔毁风险，但氚管理与材料活化仍需严格防护"
    ],
    "references": [
      "“人造太阳”实现“亿度千秒”运行入选2025年“中国科学十大进展”（央广网）",
      "美国激光核聚变创下新的净正能量记录（CCNTA）",
      "可控核聚变商业化有多远（中国电力网）"
    ],
    "sources": [
      "https://cloud.kepuchina.cn/h5/detail?id=7405288367761944576",
      "https://www.cnr.cn/ah/ahtt/20260326/t20260326_527562910.shtml",
      "https://developer.cloud.tencent.cn/news/2591697"
    ],
    "searchedAt": "2026-08-14",
    "domain": "前沿科技",
    "relations": [
      {
        "type": "related",
        "target": "等离子体物理",
        "note": ""
      },
      {
        "type": "related",
        "target": "托卡马克",
        "note": ""
      },
      {
        "type": "related",
        "target": "ITER",
        "note": ""
      },
      {
        "type": "related",
        "target": "惯性约束聚变",
        "note": ""
      },
      {
        "type": "related",
        "target": "清洁能源",
        "note": ""
      }
    ]
  },
  {
    "id": "humanoid-robot",
    "name": "人形机器人",
    "aliases": [
      "Humanoid Robot",
      "仿人机器人"
    ],
    "field": "前沿科技",
    "tags": [
      "仿生",
      "具身智能",
      "量产"
    ],
    "difficulty": 3,
    "summary": "外形仿人、可在人类环境中工作的通用智能机器人。",
    "definition": "人形机器人是以双足行走、双手操作、类人形态为特征的通用机器人，设计初衷是直接适配人类环境与工具。2025年被业界视为“人形机器人量产元年”：特斯拉Optimus进入小批量生产并宣称2026年大规模量产；宇树科技G1以约9.9万元起售并大规模出货，与智元、优必选等中国企业共同拉低供应链成本；Figure 02在宝马工厂试运行，波士顿动力Atlas完成电动化迭代。机构预测2025年全球人形机器人出货量达万台级、2030年市场规模或超万亿元。运动控制、灵巧手、续航与大模型“大脑”仍是核心瓶颈，量产成本与良率是当前竞争焦点。",
    "background": "人形机器人研究始于1960—70年代（早稻田WABOT），本田ASIMO曾代表最高水平，但长期停留在实验室；2013年波士顿动力Atlas把运动能力推向极致。2020年代AI大模型赋予其“大脑”，叠加硬件成本下降，产业进入量产前夜。",
    "core": [
      "双足动态平衡与全身运动控制是基础门槛",
      "灵巧手与力觉控制决定精细操作能力",
      "大模型提供语义理解、任务规划与决策（大脑）",
      "量产关键在于成本、良率与场景验证（数据飞轮）",
      "电机、减速器、传感器供应链决定产业节奏"
    ],
    "applications": [
      "工业制造与物流搬运（汽车、3C工厂）",
      "家庭服务与养老陪伴",
      "特种作业（巡检、救援、危险环境）",
      "商业导览与教育科研"
    ],
    "misconceptions": [
      "人形不是目的而是手段，许多任务中轮式或专用机器人更经济",
      "能走会跳不等于智能，“大脑”能力决定实用价值"
    ],
    "references": [
      "人形机器人的2025，站在量产与国产的时代路口（36氪）",
      "万亿人形机器人赛道，哪个环节最可能爆发？（投资界）",
      "海内外人形机器人量产提速（证券时报）"
    ],
    "sources": [
      "https://m.36kr.com/p/3171774661002118",
      "https://m.pedaily.cn/news/559808",
      "https://www.sfccn.com/2026/7-6/wNMDE1MjBfMjE3NTMwNQ.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "前沿科技",
    "relations": [
      {
        "type": "related",
        "target": "embodied-ai",
        "note": ""
      },
      {
        "type": "related",
        "target": "仿生机器人",
        "note": ""
      },
      {
        "type": "related",
        "target": "灵巧手",
        "note": ""
      },
      {
        "type": "related",
        "target": "运动控制",
        "note": ""
      },
      {
        "type": "related",
        "target": "机器人操作系统",
        "note": ""
      }
    ]
  },
  {
    "id": "embodied-ai",
    "name": "具身智能",
    "aliases": [
      "Embodied AI",
      "具身人工智能"
    ],
    "field": "前沿科技",
    "tags": [
      "大模型",
      "机器人",
      "VLA模型"
    ],
    "difficulty": 4,
    "summary": "让智能体拥有身体，在与物理世界交互中感知、学习与行动。",
    "definition": "具身智能指智能体（机器人、自动驾驶车等）通过身体与物理环境持续交互，在感知—决策—执行闭环中学习并完成任务，与只能“看图说话”的离身智能相对。技术核心是视觉-语言-动作（VLA）大模型：2025年Figure发布Helix实现人机协作的连贯操作，宇树、智元等中国企业推出自研具身基座模型并接入量产机器人。2025年“具身智能”首次写入中国政府工作报告，成为国家未来产业重点；资本持续火爆，中科第五纪、无界动力、跨维智能等年内多轮融资，赛道全年融资额超百亿元。真实场景数据不足、泛化能力与安全仍是主要瓶颈。",
    "background": "具身智能思想源于认知科学“没有身体就没有智能”的主张；2016年起OpenAI等推动具身研究，2023—2024年多模态大模型与仿真平台（如英伟达Isaac）使其加速，2025年进入“大模型+机器人”的产业化验证期。",
    "core": [
      "强调身体、环境与智能三者的耦合，而非纯符号推理",
      "VLA模型直接对齐视觉输入与动作输出",
      "仿真训练（Sim2Real）与真实数据采集并重",
      "从单一技能到长程任务规划是能力跃迁关键",
      "数据飞轮：部署越多、数据越多、能力越强"
    ],
    "applications": [
      "人形与四足机器人的通用操作",
      "自动驾驶与智能工厂柔性产线",
      "家庭服务、医疗陪护与特种作业"
    ],
    "misconceptions": [
      "具身智能不等于机器人硬件，模型“大脑”与身体硬件同样关键",
      "仿真测试通过不等于落地，真实环境泛化才是门槛"
    ],
    "references": [
      "世界人工智能大会散场，具身智能淘汰赛才刚刚开始？（东方财富）",
      "中科第五纪完成数亿元A轮融资（投资界）",
      "起底大晓机器人：登顶全球具身测试（东方财富）"
    ],
    "sources": [
      "https://finance.eastmoney.com/a/202607233819267735.html",
      "https://m.pedaily.cn/news/564454",
      "https://finance.eastmoney.com/a/202607073795793569.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "前沿科技",
    "relations": [
      {
        "type": "related",
        "target": "humanoid-robot",
        "note": ""
      },
      {
        "type": "related",
        "target": "world-model",
        "note": ""
      },
      {
        "type": "related",
        "target": "VLA模型",
        "note": ""
      },
      {
        "type": "related",
        "target": "reinforcement-learning",
        "note": ""
      },
      {
        "type": "related",
        "target": "multimodal-llm",
        "note": ""
      },
      {
        "type": "related",
        "target": "robotaxi",
        "note": ""
      },
      {
        "type": "related",
        "target": "world-simulator",
        "note": ""
      }
    ]
  },
  {
    "id": "brain-computer-interface",
    "name": "脑机接口",
    "aliases": [
      "Brain-Computer Interface",
      "BCI"
    ],
    "field": "前沿科技",
    "tags": [
      "神经工程",
      "侵入式",
      "意念控制"
    ],
    "difficulty": 5,
    "summary": "在脑与外部设备间建立直接信息通道，实现意念控制与神经修复。",
    "definition": "脑机接口（BCI）在大脑与外部设备之间建立不依赖外周神经的直接通信通道，按植入程度分为侵入式、半侵入式与非侵入式三类。2024年1月Neuralink完成首例人体植入，患者凭“意念”操作电脑下棋，此后试验患者持续增加，马斯克2025年底宣布2026年将实现大规模生产。中国同步加速：清华团队无线微创半侵入方案2024年完成首例植入，2025年报道的32例截瘫患者临床试验100%实现脑控抓握；国内首个植入式脑机接口产品进入上市冲刺，并被纳入国家药监局加快创新医疗器械通道。应用正从运动康复、渐冻症打字向视觉重建（Blindsight）与神经调控扩展，长期安全性、信号稳定性与伦理是核心挑战。",
    "background": "1924年脑电图诞生，1970年代动物实验证明皮层信号可控制外部设备，2004年BrainGate开启人体植入研究；2010年代柔性电极与无线传输突破，2021年Neuralink获FDA突破性设备认定，脑机接口从实验室走向临床与商业。",
    "core": [
      "神经信号解码：从皮层场电位与锋电位中提取运动意图",
      "侵入程度决定信号质量与风险，非侵入更安全但精度低",
      "柔性电极与无线传输降低组织损伤、提高长期稳定性",
      "双向接口（读+写）可同时实现控制与感觉反馈",
      "医疗器械监管与伦理治理是产业化前提"
    ],
    "applications": [
      "瘫痪患者脑控外骨骼、机械臂与数字设备",
      "渐冻症等神经退行疾病患者的交流辅助",
      "视觉、听觉等感觉重建",
      "癫痫、帕金森等疾病的闭环神经调控"
    ],
    "misconceptions": [
      "脑机接口目前不能“读心”，只能解码有限的运动意图等神经信号",
      "非侵入式脑电帽不等于“安全版Neuralink”，两者精度差距巨大"
    ],
    "references": [
      "脑机接口商业化进程提速（国际在线）",
      "100%响应！中国脑机接口临床试验32例截瘫患者全部实现脑控抓握（IT之家）",
      "马斯克宣布Neuralink 2026年将实现大规模生产（新浪财经）"
    ],
    "sources": [
      "https://gr.cri.cn/20260106/b28f400c-eefb-40e4-a9ed-d15eb991a1cd.html",
      "https://m.ithome.com/html/903119.htm",
      "https://stock.finance.sina.com.cn/stock/view/paper.php?reportid=820982712436&symbol=sh000001&autocallup=no&isfromsina=no"
    ],
    "searchedAt": "2026-08-14",
    "domain": "前沿科技",
    "relations": [
      {
        "type": "related",
        "target": "神经工程",
        "note": ""
      },
      {
        "type": "related",
        "target": "神经假体",
        "note": ""
      },
      {
        "type": "related",
        "target": "侵入式电极",
        "note": ""
      },
      {
        "type": "related",
        "target": "神经调控",
        "note": ""
      },
      {
        "type": "related",
        "target": "人机融合",
        "note": ""
      }
    ]
  },
  {
    "id": "6g-communication",
    "name": "6G通信",
    "aliases": [
      "第六代移动通信",
      "6G"
    ],
    "field": "前沿科技",
    "tags": [
      "太赫兹",
      "通感一体化",
      "AI原生"
    ],
    "difficulty": 4,
    "summary": "面向2030年的第六代移动通信，追求性能百倍于5G的智能连接。",
    "definition": "6G是继5G之后的第六代移动通信系统，按ITU-R IMT-2030框架包含沉浸式通信、超大规模连接、极高可靠极低时延、AI与通信融合、通感一体化与泛在连接六大场景，峰值速率目标达Tbps级（约为5G的100倍）。2025年全球6G无线通信标准化工作正式启动，3GPP冻结5G-Advanced（Rel-19）后进入6G研究阶段；中国6G专利族数量全球领先，紫金山实验室2025年公开的太赫兹试验网实现1秒传输1TB的速率演示，南京举办全球6G技术与产业生态大会推动产业协同。业界普遍预期2028年前后完成标准、2030年前后商用。太赫兹覆盖、AI原生网络与空天地一体化是关键技术方向。",
    "background": "移动通信约每十年换代，6G研究于2019年前后启动；2023年ITU-R确定IMT-2030愿景，2024—2025年中、美、欧、日、韩密集布局标准与试验，中国以IMT-2030（6G）推进组统筹产学研，专利族数量全球领先。",
    "core": [
      "Tbps级峰值速率、亚毫秒时延与高精度定位感知",
      "太赫兹与毫米波频段提供超宽带，但覆盖与器件是难题",
      "AI原生：网络智能内生，AI与通信深度互融",
      "通感一体化：通信与雷达感知共用频谱与硬件",
      "空天地海一体化：低轨卫星与地面网络深度融合"
    ],
    "applications": [
      "全息通信与沉浸式XR（扩展现实）",
      "数字孪生与工业元宇宙",
      "通感一体的低空经济管控与自动驾驶",
      "AI智能体网络与泛在机器人协同"
    ],
    "misconceptions": [
      "6G不是“更快的5G”，而是通信、感知、计算、AI融合的新网络范式",
      "6G商用尚远（约2030年），当前处于标准研究与试验验证阶段"
    ],
    "references": [
      "全球6G无线通信标准化工作启动（中国电子网）",
      "6G标准化进入窗口期，中国专利数领跑全球（川观智库）",
      "央视探访6G实验室：1秒传输1TB（快科技）"
    ],
    "sources": [
      "http://chinaaet.cn/article/3000173542",
      "https://cbgc.scol.com.cn/news/7708078",
      "http://m.mydrivers.com/newsview/1089512.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "前沿科技",
    "relations": [
      {
        "type": "related",
        "target": "5G-Advanced",
        "note": ""
      },
      {
        "type": "related",
        "target": "太赫兹通信",
        "note": ""
      },
      {
        "type": "related",
        "target": "通感一体化",
        "note": ""
      },
      {
        "type": "related",
        "target": "leo-satellite-internet",
        "note": ""
      },
      {
        "type": "related",
        "target": "智能超表面",
        "note": ""
      },
      {
        "type": "related",
        "target": "5g-communication",
        "note": ""
      }
    ]
  },
  {
    "id": "leo-satellite-internet",
    "name": "低轨卫星互联网",
    "aliases": [
      "LEO Satellite Internet",
      "卫星互联网",
      "星链"
    ],
    "field": "前沿科技",
    "tags": [
      "低轨星座",
      "手机直连",
      "星间激光"
    ],
    "difficulty": 3,
    "summary": "由低轨卫星星座提供全球覆盖的宽带互联网接入服务。",
    "definition": "低轨卫星互联网通过部署在距地面约300—2000公里的卫星星座，为海洋、沙漠、极地、飞机高铁等地面网络难以覆盖的区域提供宽带接入，以低时延、星间激光组网为特征。SpaceX星链领先全球：2025年用户从约500万增至900万以上，截至2026年初在轨卫星超8000颗、用户突破1200万，并推出手机直连服务。中国加速追赶：千帆星座2024年8月首发、2025年高频组网（截至2026年初在轨约90颗），中国星网2024年12月首发（在轨约70颗），两大星座远期各规划1.3万—1.5万颗；2025年朱雀三号等民营可回收火箭取得关键突破，为低成本发射铺路。频轨资源争夺与批量制造能力是竞争焦点。",
    "background": "铱星1998年开创低轨通信但败于成本；2015年星链启动，以可回收火箭把发射成本降至约十分之一，2019年开启组网、2023年实现盈利，带动全球产业重估。中国2020年将卫星互联网纳入新基建，2021年成立中国星网。",
    "core": [
      "规模化低轨星座与星间激光链路构成太空骨干网",
      "可回收火箭把发射成本降至传统方式的十分之一",
      "手机直连（Direct-to-Cell）将颠覆终端形态",
      "频轨资源“先到先得”，抢占窗口期具有战略意义",
      "相控阵终端与批量卫星制造决定规模成本"
    ],
    "applications": [
      "偏远地区与海洋、航空、高铁宽带接入",
      "应急通信与灾害救援保底网络",
      "手机直连与物联网广域连接",
      "军事通信与全球高精度授时定位"
    ],
    "misconceptions": [
      "卫星互联网不是要替代地面5G/光纤，而是互补覆盖",
      "星座规模不等于服务能力，终端、频率与落地运营同样关键"
    ],
    "references": [
      "SpaceX's Starlink Surpasses 12M Customers Across 160 Countries（Yahoo Finance）",
      "星链与星网千帆对比：星链8000颗用户600万（国盛证券）",
      "卫星互联网专题四：手机直连与激光通信未来可期（新浪财经）"
    ],
    "sources": [
      "https://finance.yahoo.com/markets/stocks/articles/spacex-starlink-surpasses-12m-customers-000951284.html",
      "https://www.sgpjbg.com/labelsyh/xinglianyuxingwangqianfanduibi.html",
      "http://vip.stock.finance.sina.com.cn/q/go.php/vReport_Show/kind/lastest/rptid/805839173867/index.phtml"
    ],
    "searchedAt": "2026-08-14",
    "domain": "前沿科技",
    "relations": [
      {
        "type": "related",
        "target": "6g-communication",
        "note": ""
      },
      {
        "type": "related",
        "target": "星间激光通信",
        "note": ""
      },
      {
        "type": "related",
        "target": "可回收火箭",
        "note": ""
      },
      {
        "type": "related",
        "target": "手机直连卫星",
        "note": ""
      },
      {
        "type": "related",
        "target": "空天地一体化",
        "note": ""
      }
    ]
  },
  {
    "id": "synthetic-biology",
    "name": "合成生物学",
    "aliases": [
      "Synthetic Biology",
      "合成生物技术"
    ],
    "field": "前沿科技",
    "tags": [
      "基因工程",
      "生物制造",
      "基因组合成"
    ],
    "difficulty": 4,
    "summary": "用工程学方法设计、改造和合成生物系统，实现按需制造。",
    "definition": "合成生物学以工程学“设计—构建—测试—学习”（DBTL）循环改造生物系统，从改造单基因到从头合成整个基因组。2025年1月，国际Sc2.0项目完成酿酒酵母全部16条染色体的合成组装，发布世界首个合成真核生物基因组；此前2003年人类合成首个病毒基因组、2010年克雷格·文特尔团队合成首个“人造活细胞”。产业端，合成生物学正走向万吨级生物制造：用细胞工厂生产医药中间体、生物基材料、食品蛋白与香料。AI蛋白质设计（如AlphaFold）与自动化实验正在把设计周期从数年压缩到数月。生物安全与伦理监管同步演进。",
    "background": "2000年前后合成生物学作为学科确立，2004年iGEM国际基因工程机器大赛创办；2010年人造细胞引发伦理讨论，2016年Sc2.0启动合成酵母染色体；2020年代中国将合成生物学列入未来产业，凯赛生物、华恒生物等企业推动生物基材料产业化。",
    "core": [
      "以DBTL循环实现生物系统的理性设计与快速迭代",
      "基因组合成从病毒、细菌走向真核生物",
      "基因线路与代谢工程把细胞变成“微型工厂”",
      "AI蛋白设计加自动化实验大幅压缩研发周期",
      "生物安全、生物伦理与“编写”DNA的能力同步演进"
    ],
    "applications": [
      "生物基材料与绿色化工（尼龙、PLA、生物燃料）",
      "医药分子与疫苗原料的生物合成",
      "食品蛋白、香料与替代蛋白",
      "环境修复与生物传感"
    ],
    "misconceptions": [
      "合成生物学不只是基因编辑，而是“编写”与“重构”生命系统",
      "合成基因组不等于“人造生命”，仍需宿主细胞承载运行"
    ],
    "references": [
      "合成酵母基因组“拼图”完成（国家科技报告服务系统）",
      "最后一条染色体成功创建，合成酵母基因组拼图完成（科技日报）",
      "Nature子刊：首个合成真核生物基因组完成（生物通）"
    ],
    "sources": [
      "https://www.ncsti.gov.cn/kjdt/kjrd/yyjk_kjrd/202501/t20250126_194263.html",
      "https://www.stdaily.com/web/gdxw/2025-01/26/content_290689.html",
      "https://www.ebiotrade.com/newsf/2025-1/20250123062715567.htm"
    ],
    "searchedAt": "2026-08-14",
    "domain": "前沿科技",
    "relations": [
      {
        "type": "related",
        "target": "gene-therapy",
        "note": ""
      },
      {
        "type": "related",
        "target": "CRISPR基因编辑",
        "note": ""
      },
      {
        "type": "related",
        "target": "生物制造",
        "note": ""
      },
      {
        "type": "related",
        "target": "代谢工程",
        "note": ""
      },
      {
        "type": "related",
        "target": "蛋白质设计",
        "note": ""
      }
    ]
  },
  {
    "id": "gene-therapy",
    "name": "基因治疗",
    "aliases": [
      "Gene Therapy",
      "基因编辑治疗"
    ],
    "field": "前沿科技",
    "tags": [
      "基因编辑",
      "AAV载体",
      "遗传病"
    ],
    "difficulty": 5,
    "summary": "通过修复或替换缺陷基因，从根源治疗遗传病与肿瘤等疾病。",
    "definition": "基因治疗通过向细胞递送正常基因、敲除或修复缺陷基因来治疗疾病，分为体外（细胞编辑后回输）与体内（直接注射载体）两种方式。2023年11月英国批准全球首款CRISPR基因编辑疗法Casgevy（exa-cel），用于镰状细胞病与输血依赖型β地中海贫血，12月获美国FDA批准，定价约220万美元/次，标志基因编辑走向临床处方。2025年，LNP递送的体内基因编辑与碱基编辑、先导编辑等新一代技术进入临床加速期，中国企业（尧唐生物等）紧跟布局；AAV载体基因疗法已覆盖眼科、神经与血液疾病。脱靶风险、免疫反应与天价费用是普及的主要障碍，本土研发有望降低成本。",
    "background": "1990年首例人体基因治疗临床试验开启，1999年Gelsinger事件令行业陷入低潮；2012年CRISPR-Cas9问世，2017年首款AAV基因疗法Luxturna获批、2019年Zolgensma获批；2020年CRISPR获诺贝尔化学奖，2023年Casgevy开启CRISPR疗法元年。",
    "core": [
      "核心策略：基因替换、基因敲除、基因修复与基因增补",
      "递送载体决定成败：AAV、慢病毒与LNP各有所长",
      "CRISPR-Cas9剪切双链DNA，碱基编辑与先导编辑更精准",
      "体外编辑（CAR-T、ex-vivo）成熟度高，体内编辑正突破",
      "一次性治愈的潜力与高昂成本、长期安全性数据并存"
    ],
    "applications": [
      "镰状细胞病、β地中海贫血等血液遗传病",
      "血友病、杜氏肌营养不良等单基因病",
      "遗传性视网膜病变（Luxturna）",
      "肿瘤免疫治疗（CAR-T、体内编辑肿瘤疗法）"
    ],
    "misconceptions": [
      "基因治疗不是“万能疗法”，只适用于病因明确的特定疾病",
      "基因编辑不等于“定制婴儿”，生殖系编辑在绝大多数国家被禁止"
    ],
    "references": [
      "Exa-cel（Casgevy）：全球首款CRISPR基因编辑药（科普中国）",
      "新一代基因编辑技术到底突破了什么（科普中国）",
      "对话尧唐生物：体内基因编辑的中国解法（松禾对话）"
    ],
    "sources": [
      "https://cloud.kepuchina.cn/newSearch/imgText?id=7434709439989956608",
      "https://cloud.kepuchina.cn/h5/detail?id=7439058465483534336",
      "https://www.pharnexcloud.com/zixun/shiye/zjgd_310814"
    ],
    "searchedAt": "2026-08-14",
    "domain": "前沿科技",
    "relations": [
      {
        "type": "related",
        "target": "CRISPR基因编辑",
        "note": ""
      },
      {
        "type": "related",
        "target": "synthetic-biology",
        "note": ""
      },
      {
        "type": "related",
        "target": "mrna-vaccine-technology",
        "note": ""
      },
      {
        "type": "related",
        "target": "细胞治疗",
        "note": ""
      },
      {
        "type": "related",
        "target": "AAV载体",
        "note": ""
      },
      {
        "type": "related",
        "target": "gene-editing",
        "note": ""
      }
    ]
  },
  {
    "id": "mrna-vaccine-technology",
    "name": "mRNA疫苗技术",
    "aliases": [
      "信使RNA疫苗",
      "mRNA疫苗"
    ],
    "field": "前沿科技",
    "tags": [
      "核酸疫苗",
      "脂质纳米颗粒",
      "肿瘤免疫"
    ],
    "difficulty": 4,
    "summary": "以信使RNA指导人体细胞自行合成抗原蛋白的新型疫苗平台。",
    "definition": "mRNA疫苗将编码抗原蛋白的信使RNA装入脂质纳米颗粒（LNP）递送入细胞，由人体细胞自行“生产”抗原以激发免疫应答，设计周期短、可快速迭代。新冠期间mRNA疫苗全球累计接种数十亿剂，验证了平台的安全性与效率；2023年诺贝尔生理学或医学奖授予mRNA修饰技术奠基人考里科与韦斯曼。2024年5月FDA批准全球首款mRNA呼吸道合胞病毒（RSV）疫苗mRESVIA。肿瘤免疫是下一个主战场：Moderna个性化肿瘤疫苗mRNA-4157联合帕博利珠单抗治疗高危黑色素瘤，3年随访显示复发风险降低约49%，2026年ASCO年会披露的5年随访数据继续显示获益，III期试验全球推进。",
    "background": "mRNA疫苗概念始于1990年代，但mRNA易降解、免疫原性过强而长期停滞；2005年考里科与韦斯曼发现核苷修饰可规避免疫识别，2008年起Moderna、BioNTech创立；2020年新冠mRNA疫苗约10个月走完研发上市全程，开创“平台型疫苗”时代。",
    "core": [
      "以人体细胞为“工厂”表达抗原，无活病原体风险",
      "LNP递送与核苷修饰是两大底层技术支柱",
      "设计快、可编程：更换序列即可应对新病原与新抗原",
      "从传染病疫苗向肿瘤、罕见病治疗性疫苗扩展",
      "冷链要求高，稳定性与储存是产业化痛点"
    ],
    "applications": [
      "新冠、RSV、流感等传染病疫苗",
      "个性化肿瘤新抗原疫苗（黑色素瘤、胰腺癌等）",
      "mRNA编码抗体与蛋白替代疗法（罕见病）",
      "多联多价疫苗（流感+新冠+RSV组合）"
    ],
    "misconceptions": [
      "mRNA疫苗不会改变人体基因：mRNA不进入细胞核，会被自然降解",
      "mRNA疫苗不只是新冠疫苗，而是可快速扩展的通用技术平台"
    ],
    "references": [
      "A personalized vaccine for melanoma cut the risk of cancer returning（NBC News）",
      "ASCO：Moderna mRNA黑色素瘤疫苗5年生存数据令人鼓舞（BioSpace）",
      "全球首款“AI+个性化”肿瘤疫苗加速临床应用（大公文汇）"
    ],
    "sources": [
      "https://www.nbcnews.com/health/cancer/personalized-vaccine-melanoma-cut-risk-cancer-returning-five-years-rcna347424",
      "https://www.biospace.com/drug-development/asco-modernas-mrna-based-melanoma-vaccine-shows-encouraging-5-year-survival",
      "https://www.tkww.hk/a/202512/18/AP6943afb5e4b032040a1566a2.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "前沿科技",
    "relations": [
      {
        "type": "related",
        "target": "gene-therapy",
        "note": ""
      },
      {
        "type": "related",
        "target": "脂质纳米颗粒",
        "note": ""
      },
      {
        "type": "related",
        "target": "肿瘤免疫治疗",
        "note": ""
      },
      {
        "type": "related",
        "target": "免疫学",
        "note": ""
      },
      {
        "type": "related",
        "target": "生物制药",
        "note": ""
      }
    ]
  },
  {
    "id": "ai-chip",
    "name": "AI芯片",
    "aliases": [
      "AI Chip",
      "AI加速器",
      "AI处理器"
    ],
    "field": "前沿科技",
    "tags": [
      "GPU",
      "算力",
      "大模型"
    ],
    "difficulty": 4,
    "summary": "面向AI训练与推理专门设计的处理器，是大模型时代的算力基座。",
    "definition": "AI芯片是针对深度学习矩阵运算等负载专门优化的处理器，包括GPU、专用AI加速器（ASIC/TPU/NPU）与存算一体芯片。英伟达仍是龙头：2025年Blackwell架构（B200/GB200）全面放量，机构预计GB200年出货突破百万颗，B200/GB200订单已排至2026年年中、积压订单达数百万颗，2026年将过渡到Rubin架构。中国加速自主替代：华为昇腾910C量产并大规模部署，寒武纪、海光等国产芯片同步突破，2025年世界人工智能大会上国产算力明确“不拼单卡拼集群”。竞争焦点已转向集群互联、HBM高带宽内存与能效比，先进制程与CoWoS封装产能是行业瓶颈。",
    "background": "2006年CUDA让GPU走向通用计算，2012年AlexNet用GPU训练引爆深度学习；2016年谷歌发布TPU，2019年英伟达A100奠定训练霸主地位；2022年ChatGPT开启大模型军备竞赛，AI芯片成为战略资源，出口管制与国产替代并行演进。",
    "core": [
      "核心负载是矩阵乘法，张量核心与脉动阵列等专用单元提高效率",
      "HBM带宽与片上互联决定大模型训练吞吐",
      "集群互联（万卡规模）成为新的性能与成本战场",
      "能效比与单位美元算力决定部署经济性",
      "先进制程、CoWoS封装与HBM供应链是产能瓶颈"
    ],
    "applications": [
      "大模型训练与推理（数据中心、云服务）",
      "自动驾驶与机器人的端侧AI加速",
      "科学计算与数字孪生仿真",
      "AI手机、PC的端侧NPU推理"
    ],
    "misconceptions": [
      "AI芯片不只有GPU，TPU、NPU、存算一体等多种路线并存",
      "单卡算力不再是唯一指标，集群互联与软件生态同样决定胜负"
    ],
    "references": [
      "2025年英伟达Blackwell GPU将主导高端市场（CNTronics）",
      "Nvidia's Blackwell Dynasty：B200/GB200订单排至2026年中（Wedbush）",
      "集邦咨询：预估2025年GB200出货量突破百万颗（智通财经）"
    ],
    "sources": [
      "http://ep.cntronics.com/market/14792",
      "https://investor.wedbush.com/wedbush/article/tokenring-2025-12-29-nvidias-blackwell-dynasty-b200-and-gb200-sold-out-through-mid-2026-as-backlog-hits-36-million-units",
      "https://m.zhitongcaijing.com/article/share.html?content_id=1103252"
    ],
    "searchedAt": "2026-08-14",
    "domain": "前沿科技",
    "relations": [
      {
        "type": "related",
        "target": "edge-ai",
        "note": ""
      },
      {
        "type": "related",
        "target": "large-language-model",
        "note": ""
      },
      {
        "type": "related",
        "target": "hbm",
        "note": ""
      },
      {
        "type": "related",
        "target": "GPU",
        "note": ""
      },
      {
        "type": "related",
        "target": "算力网络",
        "note": ""
      },
      {
        "type": "related",
        "target": "advanced-node",
        "note": ""
      },
      {
        "type": "related",
        "target": "chiplet",
        "note": ""
      },
      {
        "type": "related",
        "target": "advanced-packaging",
        "note": ""
      },
      {
        "type": "related",
        "target": "risc-v",
        "note": ""
      },
      {
        "type": "related",
        "target": "npu",
        "note": ""
      },
      {
        "type": "related",
        "target": "memory-chip",
        "note": ""
      }
    ]
  },
  {
    "id": "robotaxi",
    "name": "自动驾驶出租车",
    "aliases": [
      "Robotaxi",
      "无人驾驶出租车"
    ],
    "field": "前沿科技",
    "tags": [
      "自动驾驶",
      "出行即服务",
      "L4"
    ],
    "difficulty": 3,
    "summary": "无需安全员的自动驾驶网约车，2025年进入规模化商业运营。",
    "definition": "自动驾驶出租车（Robotaxi）是达到L4级（限定场景下完全自动驾驶、无需安全员）的无人驾驶网约车，2025年被视为规模化运营元年。百度萝卜快跑在中国20余城运营，2025年11月每周订单超25万单、累计服务超1700万次，武汉率先实现单车盈利转正；Waymo在美国旧金山、洛杉矶、凤凰城、奥斯汀、迈阿密等地运营，2025年周付费订单量攀升至20万次量级；特斯拉Cybercab于2025年6月在奥斯汀启动试点，目标量产无方向盘车型。中国形成“单车智能+车路协同”与纯视觉/激光雷达多路线竞争，小马智行、文远知行加速出海。单车成本、安全性与政策准入是商业化的核心变量。",
    "background": "2009年谷歌启动自动驾驶项目（后独立为Waymo），2018年Waymo推出全球首个商业Robotaxi服务；2017年百度阿波罗开放平台推动中国产业，2022年萝卜快跑在武汉开启全无人商业化试点；2024—2025年政策（无人化试点、远程安全员）与成本下降共同催熟市场。",
    "core": [
      "L4级：限定区域与天气下无需安全员的完全自动驾驶",
      "感知路线之争：激光雷达多传感器融合对纯视觉",
      "“单车智能+车路协同”（V2X）是中国方案特色",
      "安全冗余（冗余计算、线控底盘）与远程监控缺一不可",
      "单车运营成本逼近并低于有人网约车时出现盈利拐点"
    ],
    "applications": [
      "城市网约车出行服务（武汉、北京、上海等）",
      "机场、园区、景区接驳与自动驾驶公交",
      "货运物流与同城配送（干线+末端）"
    ],
    "misconceptions": [
      "L2辅助驾驶不等于Robotaxi，L4对安全冗余与责任界定要求完全不同",
      "Robotaxi并非“无人值守”，远程接管与云端运维仍不可或缺"
    ],
    "references": [
      "萝卜快跑每周订单量超25万单 全球覆盖城市22个（东方财富）",
      "2025全球无人驾驶行业盘点：Robotaxi规模化运营驶入快车道（经济网）",
      "Robotaxi的2025：特斯拉入局，商业化全面提速（OFweek）"
    ],
    "sources": [
      "https://finance.eastmoney.com/a/202511033553356117.html",
      "https://www.ceweekly.cn/company/2025/1230/486852.html",
      "https://nev.ofweek.com/2025-12/ART-77015-8400-30677159.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "前沿科技",
    "relations": [
      {
        "type": "related",
        "target": "自动驾驶",
        "note": ""
      },
      {
        "type": "related",
        "target": "embodied-ai",
        "note": ""
      },
      {
        "type": "related",
        "target": "车路协同",
        "note": ""
      },
      {
        "type": "related",
        "target": "lidar",
        "note": ""
      },
      {
        "type": "related",
        "target": "出行即服务",
        "note": ""
      }
    ]
  },
  {
    "id": "world-simulator",
    "name": "世界模拟器",
    "aliases": [
      "世界模型",
      "World Model",
      "World Models"
    ],
    "field": "前沿科技",
    "tags": [
      "空间智能",
      "视频生成",
      "预测"
    ],
    "difficulty": 5,
    "summary": "在内部表征中模拟物理世界运行规律的AI模型，能预测与推演未来。",
    "definition": "世界模型指AI在内部建立对物理世界（空间、物体、因果关系、动力学）的可操作表征，能够预测未来状态、推演“如果……会怎样”，从而支撑规划、决策与仿真。2025年迎来集中爆发：DeepMind发布Genie 3，可从单张图片生成可交互的3D世界；李飞飞创办的World Labs发布首款商用空间智能产品MARBLE，可生成实时漫游的3D场景；Meta推出V-JEPA 2视频预测模型；Waymo、华为、小鹏等将世界模型用于自动驾驶仿真与长尾场景生成，Figure等具身机器人公司用它做操作预演。世界模型被视为通向AGI的关键拼图，也是游戏、影视内容生产的新范式。",
    "background": "世界模型思想源自认知科学“心智模型”，2018年Ha与Schmidhuber论文《World Models》将其引入机器学习；2020年代Dreamer等用于机器人控制；2024年视频生成模型（Sora）展现“视频即世界模拟器”潜力，2025年空间智能与可交互3D生成引爆产业与投资。",
    "core": [
      "核心能力：从观测学习环境动力学并预测未来状态",
      "在内部表征中“运行”世界，实现低成本试错与规划",
      "与生成式AI融合：文、图、视频生成即世界模拟",
      "空间智能：理解并生成三维场景是重要分支",
      "训练依赖海量视频与交互数据，评估与对齐仍是难题"
    ],
    "applications": [
      "自动驾驶仿真与长尾场景生成",
      "具身机器人操作预演与技能学习",
      "游戏、影视的可交互3D内容生产",
      "科学模拟与决策推演（气象、机器人、医疗）"
    ],
    "misconceptions": [
      "世界模型不是“更会生成视频”，而是要以世界规律进行因果推演",
      "视频生成不等于世界模型：能生成画面不等于理解物理规律"
    ],
    "references": [
      "首款商用世界模型MARBLE发布 空间智能再进一步（新浪财经）",
      "在世界模型分岔口 李飞飞与谷歌新模型给出了不同答案（东方财富）",
      "AI“世界模型”来袭：全球游戏产业或迎颠覆时刻（云南网）"
    ],
    "sources": [
      "http://stock.finance.sina.com.cn/stock/go.php/vReport_Show/kind/search/rptid/816722806579/index.phtml",
      "https://wap.eastmoney.com/a/202509193518837156.html",
      "http://m.yunnan.cn/system/2025/12/26/033801260.shtml"
    ],
    "searchedAt": "2026-08-14",
    "domain": "前沿科技",
    "relations": [
      {
        "type": "related",
        "target": "embodied-ai",
        "note": ""
      },
      {
        "type": "related",
        "target": "视频生成",
        "note": ""
      },
      {
        "type": "related",
        "target": "空间智能",
        "note": ""
      },
      {
        "type": "related",
        "target": "reinforcement-learning",
        "note": ""
      },
      {
        "type": "related",
        "target": "自动驾驶",
        "note": ""
      }
    ]
  },
  {
    "id": "edge-ai",
    "name": "边缘AI",
    "aliases": [
      "Edge AI",
      "端侧AI",
      "终端智能"
    ],
    "field": "前沿科技",
    "tags": [
      "NPU",
      "端侧大模型",
      "隐私"
    ],
    "difficulty": 3,
    "summary": "在手机、PC、汽车等终端本地运行AI模型，实现低时延、高隐私智能。",
    "definition": "边缘AI指在靠近数据源的终端设备（手机、PC、汽车、传感器、机器人）本地完成AI推理，而非全部上云，以降低时延、保护隐私、节省带宽并支持离线运行。2024—2025年端侧大模型成为主流：苹果Apple Intelligence、高通骁龙8 Elite（NPU算力约80 TOPS）、联发科天玑9400、华为麒麟等均支持端侧运行数十亿参数模型；2025年AI手机出货占比快速攀升，AI眼镜（Meta Ray-Ban累计销量超200万副，国产新品密集发布）与AI PC成为新入口。端侧应用从“跑得动”迈向“会思考”，智能体、多模态理解与个人记忆开始落地，端云协同成为主流范式。",
    "background": "2017年华为麒麟970首次集成NPU，边缘AI早期用于拍照、语音等单项功能；2023年大模型爆发后，受云成本、隐私与时延约束，“把模型装进终端”成为产业共识；2024年被称“端侧AI元年”，2025年全面进入手机、PC、眼镜、汽车与机器人。",
    "core": [
      "在终端本地推理，时延低至毫秒级、数据不出设备",
      "量化、剪枝、蒸馏让小模型逼近大模型效果",
      "NPU与异构计算提供高性能低功耗算力（数十TOPS）",
      "端云协同：简单任务端侧、复杂任务云端",
      "隐私计算与个性化（个人数据本地化）是核心价值"
    ],
    "applications": [
      "AI手机：端侧助手、通话摘要、多模态问答",
      "AI眼镜与可穿戴设备的实时感知交互",
      "智能汽车座舱与ADAS本地推理",
      "工业物联网与安防的实时检测"
    ],
    "misconceptions": [
      "端侧AI不等于离线AI，多数场景采用端云协同",
      "端侧模型不是“小而不强”，蒸馏与量化已大幅拉近与云端差距"
    ],
    "references": [
      "端侧AI下半场，从跑起来到会思考（投资界）",
      "电子行业研究：端侧AI产业链投资机遇可期（新浪财经）",
      "Arm高级副总裁：手机将成AI伴侣（财联社）"
    ],
    "sources": [
      "https://m.pedaily.cn/news/560197",
      "http://stockfinance.sina.cn/stock/go.php/paper/reportid/811335251214/index.phtml?vt=4",
      "https://www.chinastarmarket.cn/detail/2150880"
    ],
    "searchedAt": "2026-08-14",
    "domain": "前沿科技",
    "relations": [
      {
        "type": "related",
        "target": "ai-chip",
        "note": ""
      },
      {
        "type": "related",
        "target": "large-language-model",
        "note": ""
      },
      {
        "type": "related",
        "target": "npu",
        "note": ""
      },
      {
        "type": "related",
        "target": "物联网",
        "note": ""
      },
      {
        "type": "related",
        "target": "端云协同",
        "note": ""
      }
    ]
  },
  {
    "name": "数字孪生",
    "aliases": [],
    "field": "前沿科技",
    "tags": [
      "物联网",
      "虚拟现实"
    ],
    "difficulty": 3,
    "summary": "通过数据模型复制物理对象。",
    "definition": "数字孪生是指利用互联网、物联网等技术手段，将物理世界的实体或系统转化为一个虚拟的数字化模型，并在该模型中实时反映其状态和变化。这一概念广泛应用于工业制造、智慧城市等领域。",
    "principle": "基于传感器数据采集与分析，通过云计算进行模拟和预测。",
    "background": "数字孪生起源于航空航天领域，近年来随着物联网技术的发展逐渐普及到各个行业。",
    "core": [
      "实时监控物理对象的状态",
      "优化设计与维护流程",
      "提高生产效率和安全性"
    ],
    "pros": [
      "减少实际测试的成本和风险",
      "实现远程管理和控制"
    ],
    "cons": [
      "数据安全和隐私问题",
      "技术复杂度高，初期投入大"
    ],
    "applications": [
      "工业制造中的设备健康管理",
      "城市规划与管理"
    ],
    "misconceptions": [
      "数字孪生仅限于制造业",
      "所有物理对象都能完美转换为数字模型"
    ],
    "related": [
      "物联网",
      "智能制造"
    ],
    "relations": [
      {
        "type": "evolvedFrom",
        "target": "物联网",
        "note": ""
      },
      {
        "type": "appliesTo",
        "target": "智能制造",
        "note": ""
      }
    ],
    "sources": [
      "https://www.siemens.com.cn/corporate/en/innovation/digital-twin.html",
      "https://www.nature.com/articles/s41520-020-0398-7,",
      "https://ieeexplore.ieee.org/document/8658693,"
    ],
    "searchedAt": "2026-08-14",
    "status": "generated"
  }
];
