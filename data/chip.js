window.XIGAI = window.XIGAI || {};
window.XIGAI["半导体与芯片"] = [
  {
    "id": "euv",
    "name": "EUV光刻",
    "aliases": [
      "极紫外光刻",
      "EUV Lithography"
    ],
    "field": "半导体与芯片",
    "tags": [
      "光刻设备",
      "先进制程",
      "制造设备"
    ],
    "difficulty": 4,
    "summary": "波长13.5nm的极紫外光刻，先进制程核心设备",
    "definition": "EUV光刻（极紫外光刻）利用波长13.5纳米的极紫外光对晶圆曝光，是目前7nm以下先进制程不可或缺的光刻技术，通过锡等离子体产生光源，采用多层钼/硅反射镜的反射式光学系统成像。ASML是全球唯一量产EUV光刻机的厂商，新一代High-NA（高数值孔径，数值孔径从0.33提升至0.55）EUV光刻机单台售价约4亿美元，已开始向英特尔交付，英特尔率先实现High-NA EUV芯片量产。据2025-2026年报道，ASML新一代High-NA EUV光刻机已具备量产能力，可支撑2nm以下节点。但设备成本高昂、全球年产能有限，国产EUV仍处攻关阶段。",
    "background": "光刻机被誉为半导体制造“皇冠上的明珠”。从深紫外（DUV）到极紫外（EUV），波长缩短推动分辨率大幅提升，是制程持续微缩的关键。荷兰ASML自2019年起独家供应EUV设备，单台重达180吨、零件超10万个，交付周期以年计；EUV的光源功率、反射镜镀膜与真空环境均属尖端工程。",
    "core": [
      "波长13.5nm，由锡等离子体产生光源",
      "反射式光学系统，多层钼/硅反射镜",
      "High-NA（0.55）支撑2nm以下节点",
      "单台约4亿美元，全球仅ASML量产"
    ],
    "applications": [
      "7nm以下逻辑芯片制造",
      "先进制程晶圆代工产线"
    ],
    "misconceptions": [
      "EUV光刻机并非单一机器，而是光源、光学、真空等庞大系统集成",
      "国产EUV尚未量产，国产光刻主流仍是DUV浸没式"
    ],
    "references": [
      "ASML：新一代High-NA EUV光刻机已具备量产能力",
      "英特尔率先量产High-NA EUV芯片，加速晶圆代工业务突围"
    ],
    "sources": [
      "https://www.esmchina.com/marketnews/57162.html",
      "https://www.seccw.com/Document/detail/id/47661.html",
      "https://www.digitaltoday.co.kr/cn/view/74436/intel-buys-asml-high-na-euv-lithography-tool-china-ban-ai-chip-race"
    ],
    "searchedAt": "2026-08-14",
    "domain": "半导体与芯片",
    "relations": [
      {
        "type": "related",
        "target": "advanced-node",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "lithography-machine",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "foundry",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "advanced-node",
    "name": "先进制程",
    "aliases": [
      "先进工艺",
      "Advanced Node",
      "亚10nm制程"
    ],
    "field": "半导体与芯片",
    "tags": [
      "制程工艺",
      "晶圆制造"
    ],
    "difficulty": 3,
    "summary": "7nm以下微缩工艺，2nm量产、1.4nm挺进中",
    "definition": "先进制程指采用EUV光刻与FinFET/GAA晶体管技术的7nm及以下逻辑芯片制造工艺。2025年台积电2nm（N2）工艺下半年量产，采用全环绕栅极（GAA）纳米片晶体管，苹果A20芯片（iPhone 18系列）首发搭载，良率远超预期；三星、英特尔同步推进2nm，行业已向1.4nm（台积电A14）挺进。台积电2025年营收突破3.8兆新台币，2026年增速预期超30%，先进制程贡献主要收入。每微缩一代，晶体管密度提升、单位成本下降、性能功耗比改善，但单节点研发与建厂投入动辄数百亿美元，全球仅少数厂商具备量产能力。",
    "background": "摩尔定律推动晶体管尺寸持续微缩，从14nm到7nm、5nm、3nm，2025年起进入2nm时代。GAA结构取代FinFET成为关键转折；苹果、英伟达等头部客户为争夺产能提前锁定订单，先进制程成为晶圆代工厂竞争的核心壁垒；中国大陆受设备出口管制制约，成熟制程仍为主力。",
    "core": [
      "2nm采用GAA纳米片晶体管",
      "台积电N2于2025下半年量产，A20首发",
      "行业向1.4nm（A14）挺进",
      "单节点研发投入超百亿美元"
    ],
    "applications": [
      "智能手机旗舰SoC",
      "AI加速器与服务器CPU",
      "消费电子高性能芯片"
    ],
    "misconceptions": [
      "“2nm”并非物理栅极长度，而是等效工艺命名",
      "良率爬坡节奏决定实际量产进度"
    ],
    "references": [
      "台积电2nm工艺下半年量产，iPhone 18全系列将首发搭载",
      "破局2nm，挺进1.4nm：半导体工艺极限竞赛全解析"
    ],
    "sources": [
      "http://www.c114.net.cn/chip/171837.html",
      "https://www.techweb.com.cn/it/2025-03-24/2958622.shtml",
      "https://m.toutiao.com/article/7641223686695780918/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "半导体与芯片",
    "relations": [
      {
        "type": "related",
        "target": "euv",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "foundry",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-chip",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "chiplet",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "lithography-machine",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "chiplet",
    "name": "Chiplet小芯片",
    "aliases": [
      "芯粒",
      "小芯片",
      "Chiplet"
    ],
    "field": "半导体与芯片",
    "tags": [
      "异构集成",
      "先进封装"
    ],
    "difficulty": 3,
    "summary": "把大芯片拆成多个小芯粒，用先进封装高速互联",
    "definition": "Chiplet（小芯片/芯粒）将传统单片SoC拆解为多个功能独立、工艺各异的裸片，再通过先进封装与高速互联组装成完整系统，以突破单芯片面积增大带来的良率与成本瓶颈。UCIe（通用芯粒互联标准）已成为行业互连协议主流，2025-2026年生态加速扩展：YorChip与Sofics将UCIe物理层IP扩展至台积电多个节点，Ayar Labs推出首款基于UCIe标准的光互联小芯片，带宽高达8Tbps。AI芯片广泛采用Chiplet设计，实现“用成熟工艺拼出高性能”，并支持混合不同制程与供应商芯粒，成为后摩尔时代延续算力增长的重要路径。",
    "background": "单芯片面积越大良率越低、成本越高，先进制程又仅少数厂商可用。Chiplet将大芯片“化整为零”，复用成熟工艺、降低研发与流片成本，推动开放式硬件生态与IP复用。AMD、英特尔与英伟达均在旗舰产品中采用Chiplet路线，芯粒市场规模预计持续高速增长。",
    "core": [
      "大芯片拆分为多芯粒，异质集成",
      "UCIe统一芯粒间互连标准",
      "光互联Chiplet带宽达8Tbps",
      "缓解单芯片良率与成本压力"
    ],
    "applications": [
      "AI加速卡与数据中心CPU/GPU",
      "高性能计算系统",
      "异构SoC设计"
    ],
    "misconceptions": [
      "Chiplet不是简单“拼接”，需要统一互连协议与协同设计",
      "Chiplet不等于所有芯片都更便宜"
    ],
    "references": [
      "Ayar Labs推出首款基于UCIe标准的光互联小芯片，带宽高达8Tbps",
      "YorChip and Sofics Expand UCIe PHY Across TSMC Nodes"
    ],
    "sources": [
      "https://cloud.tencent.cn/developer/article/2641424",
      "https://chiplet-marketplace.com/insights/news/yorchip-sofics-ucie-phy-tsmc",
      "https://www.uciexpress.org/webinars"
    ],
    "searchedAt": "2026-08-14",
    "domain": "半导体与芯片",
    "relations": [
      {
        "type": "related",
        "target": "advanced-packaging",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-chip",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "advanced-node",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "advanced-packaging",
    "name": "先进封装",
    "aliases": [
      "Advanced Packaging",
      "2.5D/3D封装",
      "CoWoS"
    ],
    "field": "半导体与芯片",
    "tags": [
      "封装测试",
      "异构集成"
    ],
    "difficulty": 3,
    "summary": "2.5D/3D封装与CoWoS，AI芯片算力的关键支撑",
    "definition": "先进封装指在传统封装基础上，通过硅中介层、硅通孔（TSV）、再布线（RDL）等技术实现多芯片高密度互联的封装方式，典型代表为台积电CoWoS、InFO及各类2.5D/3D方案。AI大模型训练需求爆发使CoWoS产能持续紧张，台积电大幅扩产，2025-2026年先进封装成为半导体投资最热赛道之一：长电科技宣布78亿元投资先进封装项目，大陆封测厂加速追赶。先进封装与先进制程并称“双轮驱动”，可部分弥补制程受限，支撑HBM与逻辑芯片的堆叠集成，是AI芯片算力、带宽与功耗优化的关键环节。",
    "background": "摩尔定律放缓后，封装从“后道工序”升级为提升系统性能的核心环节：2.5D封装将HBM与GPU并排于硅中介层，3D封装进一步垂直堆叠，缩短互连距离、提升带宽。台积电CoWoS产能一度成为AI芯片出货的瓶颈，先进封装产值增速显著高于行业整体。",
    "core": [
      "CoWoS为AI芯片主流封装方案",
      "TSV与硅中介层实现高密度互连",
      "台积电CoWoS产能紧张、持续扩产",
      "大陆封测厂加速投资布局"
    ],
    "applications": [
      "AI GPU与HBM集成",
      "高性能计算",
      "手机SoC封装"
    ],
    "misconceptions": [
      "先进封装不能替代先进制程，但可显著弥补制程差距",
      "CoWoS只是先进封装的一种，并非全部"
    ],
    "references": [
      "长电科技78亿投资先进封装",
      "半导体群雄逐鹿：先进制程与先进封装“杀疯”了！"
    ],
    "sources": [
      "https://finance.eastmoney.com/a/202606253782910413.html",
      "https://m.x-techcon.com/article/149939.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "半导体与芯片",
    "relations": [
      {
        "type": "related",
        "target": "chiplet",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "hbm",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-chip",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "ai-accelerator",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "semiconductor-chip",
        "note": "",
        "confidence": 0.75
      }
    ]
  },
  {
    "id": "hbm",
    "name": "HBM高带宽内存",
    "aliases": [
      "HBM",
      "高带宽存储器",
      "High Bandwidth Memory"
    ],
    "field": "半导体与芯片",
    "tags": [
      "存储芯片",
      "AI算力"
    ],
    "difficulty": 3,
    "summary": "AI芯片标配高带宽存储，HBM4进入量产放量期",
    "definition": "HBM（High Bandwidth Memory，高带宽内存）通过硅通孔（TSV）将多层DRAM垂直堆叠，并与逻辑芯片封装在一起，以超宽接口提供远超传统DDR的带宽，解决AI算力的“内存墙”瓶颈。HBM3E已成AI训练芯片标配，2025-2026年HBM4进入量产放量阶段：SK海力士率先实现HBM4量产，三星HBM4量产四个月销售额突破10亿美元，并率先交付首批12层HBM4E样品，性能较前代提升超20%；三星与SK海力士正推进16层HBM4量产。HBM4采用2048位接口、支持更高堆叠层数，是英伟达Rubin等下一代AI芯片的核心配套，AI需求正推动存储超级周期延续。",
    "background": "传统DRAM带宽成为AI算力瓶颈，HBM通过垂直堆叠与超宽位宽（HBM3E带宽超1.2TB/s）破解之。市场由SK海力士、三星、美光三巨头垄断，英伟达等AI芯片客户提前锁定数年HBM产能，供不应求直接推升存储原厂业绩，HBM成为最重要的高附加值增长点。",
    "core": [
      "TSV垂直堆叠DRAM，超宽位宽",
      "HBM4于2025-2026年量产，12层/16层推进",
      "三星HBM4量产四个月销售额破10亿美元",
      "AI GPU算力扩展的关键配套"
    ],
    "applications": [
      "AI训练/推理加速卡",
      "超级计算机",
      "数据中心服务器"
    ],
    "misconceptions": [
      "HBM价格昂贵且产能集中，并非所有服务器都适用",
      "HBM4E是HBM4的增强版本而非换代产品"
    ],
    "references": [
      "三星HBM4量产四月销售额破10亿美元",
      "三星率先交付首批12层HBM4E样品 性能提升超20%"
    ],
    "sources": [
      "https://www.dramx.com/News/Memory/20260624-40657.html",
      "https://www.dramx.com/News/Memory/20260529-40517.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "半导体与芯片",
    "relations": [
      {
        "type": "related",
        "target": "memory-chip",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-chip",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "advanced-packaging",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-accelerator",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "risc-v",
    "name": "RISC-V",
    "aliases": [
      "RISC-V架构",
      "开源指令集",
      "开源处理器架构"
    ],
    "field": "半导体与芯片",
    "tags": [
      "处理器架构",
      "开源生态"
    ],
    "difficulty": 3,
    "summary": "开源指令集架构，累计出货360亿颗、市占超30%",
    "definition": "RISC-V是基于精简指令集（RISC）原则的开源指令集架构（ISA），由RISC-V基金会维护，指令集免费开放、可自由扩展，被视为ARM与x86之外的“第三极”。据第五届滴水湖中国RISC-V产业论坛（2025-2026年）数据，RISC-V累计出货量达360亿颗，市场份额突破30%，在汽车、AI、物联网等场景的渗透率达25%，论坛上另有10款国产RISC-V芯片首发。中国企业在RISC-V生态中扮演重要角色，阿里平头哥、算能等相继推出服务器与AI芯片。RISC-V的优势在于开放、精简、可定制，正从嵌入式走向高性能计算与AI推理，但软件生态与ARM/x86仍有差距。",
    "background": "全球芯片架构长期由x86（PC/服务器）与ARM（手机/嵌入式）主导。RISC-V于2010年源于加州大学伯克利分校，2019年起中国产业大规模投入，成为芯片自主可控的重要路径。多家大厂已将其作为AI、汽车等新品的候选架构，开放指令集正重塑处理器产业格局。",
    "core": [
      "开源免费、可扩展的指令集",
      "累计出货360亿颗、市占超30%",
      "渗透率25%，汽车/AI/物联网多点开花",
      "中国厂商深度参与生态建设"
    ],
    "applications": [
      "物联网与嵌入式MCU",
      "汽车电子",
      "AI推理与服务器芯片"
    ],
    "misconceptions": [
      "RISC-V“免费”指指令集免费，芯片设计仍需大量投入",
      "RISC-V并非天生更省电，功耗取决于具体实现"
    ],
    "references": [
      "出货360亿颗、市占突破30%、渗透率达25%，第五届滴水湖中国RISC-V产业论坛传递这些信号",
      "中国RISC-V，百花齐放"
    ],
    "sources": [
      "https://www.esmchina.com/news/14474.html",
      "https://m.jiemian.com/article/14594197.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "半导体与芯片",
    "relations": [
      {
        "type": "related",
        "target": "ai-chip",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "automotive-chip",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "npu",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "third-gen-semi",
    "name": "第三代半导体",
    "aliases": [
      "宽禁带半导体",
      "化合物半导体"
    ],
    "field": "半导体与芯片",
    "tags": [
      "新材料",
      "功率器件"
    ],
    "difficulty": 3,
    "summary": "SiC/GaN等宽禁带材料，推动能源效率革命",
    "definition": "第三代半导体以碳化硅（SiC）、氮化镓（GaN）等宽禁带化合物为代表，禁带宽度显著大于硅，具有耐高压、耐高温、高频高效等优势，正从“导入期”迈入“放量期”。据《第三代半导体产业发展报告（2025）》发布的信息，中国在该领域技术迭代与产业规模增长迅速，未来5至10年有望引领全球发展。SiC主导新能源汽车主驱逆变器与800V高压平台，GaN主导快充、服务器电源与射频应用。2025-2026年市场进入供需两旺阶段：6英寸SiC衬底价格触底回升、8英寸衬底供不应求，多家厂商毛利率改善，被视为“双碳”战略下提升能源利用效率的关键材料。",
    "background": "第一代半导体以硅（Si）为主，第二代以砷化镓（GaAs）为代表；第三代宽禁带材料性能极限更高，适用于高电压、高频率场景。中国起步较早、产业链较完整，政策与资本持续加码，衬底、外延、器件各环节国产化率快速提升，具备后发优势。",
    "core": [
      "宽禁带、耐高压耐高温",
      "代表材料为SiC与GaN",
      "中国有望未来5-10年引领全球",
      "8英寸衬底供不应求"
    ],
    "applications": [
      "新能源汽车",
      "光伏与储能",
      "快充与数据中心电源"
    ],
    "misconceptions": [
      "第三代半导体不会完全取代硅，而是互补共存",
      "“第三代”指材料代际，并非性能全面碾压"
    ],
    "references": [
      "《第三代半导体产业发展报告（2025）》在汉发布",
      "从电力管家到散热高手 碳化硅全产业链供需两旺"
    ],
    "sources": [
      "http://m.cnhubei.com/content/2026-04/24/content_19943110.html",
      "https://www.cnfin.com/dz-lb/detail/20260609/4423777_1.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "半导体与芯片",
    "relations": [
      {
        "type": "related",
        "target": "sic",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "gan",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "automotive-chip",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "sic",
    "name": "碳化硅",
    "aliases": [
      "SiC",
      "Silicon Carbide"
    ],
    "field": "半导体与芯片",
    "tags": [
      "功率半导体",
      "新能源"
    ],
    "difficulty": 3,
    "summary": "宽禁带功率材料，新能源车800V平台核心器件",
    "definition": "碳化硅（SiC）是第三代半导体代表性材料，禁带宽度约3.26eV，击穿电场强度约为硅的10倍，适合制造高压大功率器件（MOSFET、肖特基二极管）。SiC器件使新能源汽车主驱逆变器效率提升、体积缩小，是800V高压平台与超快充的关键支撑。2025年底起市场景气回升：据露笑科技披露，6英寸SiC衬底价格自2025年底快速触底回升，8英寸衬底供不应求；天岳先进2026年一季度毛利率环比改善25个百分点，车规与工业场景加速拓展。全球厂商向8英寸衬底切换以降本，中国SiC产业链（衬底—外延—器件）快速成熟，价格下降推动SiC向光伏、储能、数据中心渗透。",
    "background": "SiC衬底生长难度极高（长晶慢、缺陷控制难），长期由美国Wolfspeed等垄断。近年中国厂商产能释放、价格下降，SiC器件加速放量。车规级器件认证与上车验证周期长，头部厂商先发优势显著，行业并购整合加速，国产替代进程明显加快。",
    "core": [
      "禁带宽度3.26eV，耐高压耐高温",
      "800V新能源车平台核心器件",
      "6英寸价格触底回升，8英寸供不应求",
      "中国产业链快速成熟、国产替代加速"
    ],
    "applications": [
      "新能源车主驱逆变器",
      "光伏逆变器",
      "充电桩与储能"
    ],
    "misconceptions": [
      "SiC并非只用于汽车，工业电源与光伏同样是重要场景",
      "SiC成本高于硅，需在系统层面体现收益"
    ],
    "references": [
      "露笑科技：6英寸衬底价格自2025年底起已快速触底回升，8英寸衬底供不应求",
      "天岳先进：一季度毛利率环比改善25个百分点 碳化硅场景拓展加速"
    ],
    "sources": [
      "https://m.sohu.com/a/1027392421_122014422",
      "https://www.cnstock.com/commonDetail/717361"
    ],
    "searchedAt": "2026-08-14",
    "domain": "半导体与芯片",
    "relations": [
      {
        "type": "related",
        "target": "third-gen-semi",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "gan",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "automotive-chip",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "gan",
    "name": "氮化镓",
    "aliases": [
      "GaN",
      "Gallium Nitride"
    ],
    "field": "半导体与芯片",
    "tags": [
      "功率器件",
      "快充"
    ],
    "difficulty": 3,
    "summary": "高频高效功率器件，快充与射频领域明星材料",
    "definition": "氮化镓（GaN）是第三代半导体材料，禁带宽度约3.4eV，电子迁移率高、饱和漂移速度快，特别适合高频、高效率功率转换与射频放大。消费电子快充是GaN最成熟的应用，同等功率下充电器体积可缩小一半以上；2025-2026年GaN加速向服务器电源、数据中心、汽车电子渗透。ST（意法半导体）旗下VIPERGAN系列器件功率最高达100W，持续推动GaN普及；Cyient借力Navitas协议推出7款功率IC进军GaN市场；德国Fraunhofer IAF研发出面向单相双向直流电动汽车充电的GaN功率器件。GaN功率市场高速增长，成本下降与8英寸产线扩张是规模化量产的关键。",
    "background": "硅基功率器件在高频场景效率衰减严重，GaN凭借高频低损耗特性在快充市场率先爆发，随后向更高功率应用延伸。氮化镓可外延生长于硅衬底上，成本远低于碳化硅，适合大规模普及；产业正从6英寸向8英寸晶圆切换以进一步降本。",
    "core": [
      "禁带宽度3.4eV，高频高效",
      "快充市场成熟，向服务器/汽车渗透",
      "VIPERGAN器件功率最高达100W",
      "8英寸产线扩张推动降本"
    ],
    "applications": [
      "手机/笔记本快充",
      "服务器与数据中心电源",
      "电动汽车车载充电"
    ],
    "misconceptions": [
      "GaN与SiC同属第三代半导体但侧重不同：GaN偏高频中小功率，SiC偏高压大功率"
    ],
    "references": [
      "VIPERGAN器件上新！功率最高100W，持续推动氮化镓技术普及",
      "Fraunhofer IAF研发出面向单相双向直流电动汽车充电的氮化镓功率电子器件"
    ],
    "sources": [
      "https://www.xcc.com/news/detail/5575037",
      "https://i.gasgoo.com/news/70461498.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "半导体与芯片",
    "relations": [
      {
        "type": "related",
        "target": "third-gen-semi",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "sic",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "automotive-chip",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "kejin",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "ouhuang",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "feiqiu",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "guaji",
        "note": "",
        "confidence": 0.75
      }
    ]
  },
  {
    "id": "ai-accelerator",
    "name": "AI加速芯片",
    "aliases": [
      "AI芯片",
      "AI加速器",
      "人工智能芯片"
    ],
    "field": "半导体与芯片",
    "tags": [
      "算力",
      "GPU"
    ],
    "difficulty": 3,
    "summary": "大模型算力引擎，Rubin平台每瓦性能提升10倍",
    "definition": "AI芯片指面向深度学习训练与推理加速的专用处理器，包括GPU、NPU/TPU、AI ASIC及存算一体芯片等。英伟达凭借GPU垄断AI训练市场，2025-2026年进入Rubin平台时代：Vera Rubin下一代AI系统每瓦性能较前代提升10倍，配套HBM4与液冷散热，2026年量产放量；AI数据中心同步掀起液冷与电源革命。国产AI芯片（华为昇腾、寒武纪等）在算力、互联与软件栈上快速追赶。大模型参数规模持续扩大，AI芯片竞争焦点从单纯算力转向“算力—带宽—功耗”三角平衡，先进制程、HBM、先进封装与高速互联缺一不可。",
    "background": "2012年深度学习兴起后GPU成为AI训练主力；2022年ChatGPT引爆大模型浪潮，AI芯片需求爆发，全球算力军备竞赛开启，单卡功耗从数百瓦升至千瓦级。英伟达市占率超八成，AMD、谷歌及华为、寒武纪等国产厂商加速追赶，云端与端侧需求同步爆发。",
    "core": [
      "GPU/NPU/ASIC多元技术路线",
      "Vera Rubin每瓦性能提升10倍",
      "液冷与电源配套革命",
      "算力—带宽—功耗三角平衡"
    ],
    "applications": [
      "大模型训练与推理",
      "智算中心",
      "端侧AI"
    ],
    "misconceptions": [
      "AI芯片不只是GPU，NPU与ASIC在推理场景可能更高效",
      "算力数值不等于实际性能，软件生态同样关键"
    ],
    "references": [
      "英伟达推出下一代AI系统Vera Rubin，每瓦性能较前代提升10倍",
      "Vera Rubin量产：AI数据中心的液冷与电源革命"
    ],
    "sources": [
      "https://www.sohu.com/a/990227043_99900743",
      "https://wap.9fzt.com/article/b3ec4fb36aa3dc2e455ef48279b28b1d-9fztgw_1_top.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "半导体与芯片",
    "relations": [
      {
        "type": "related",
        "target": "npu",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "hbm",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "advanced-packaging",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "npu",
    "name": "NPU",
    "aliases": [
      "神经网络处理器",
      "Neural Processing Unit"
    ],
    "field": "半导体与芯片",
    "tags": [
      "端侧AI",
      "处理器"
    ],
    "difficulty": 2,
    "summary": "端侧神经网络加速器，AI PC算力迈向80 TOPS",
    "definition": "NPU（神经网络处理器）是专门为神经网络推理/训练设计的加速单元，通过矩阵乘加阵列与低精度量化（INT8/FP16）实现高能效AI计算。手机SoC早已集成NPU，2024年起AI PC普及使NPU成为标配：微软Copilot+ PC要求NPU算力40 TOPS以上，2025-2026年旗舰平台大幅跃升——高通骁龙X2 Elite集成80 TOPS NPU并配5GHz CPU，重塑Windows PC性能标杆；CES 2026上“50+ TOPS”成为AI PC新基准。NPU与CPU、GPU分工协作：CPU跑逻辑、GPU跑图形与并行计算、NPU专职AI，端侧部署降低云端依赖与延迟、保护隐私，是AI普及的关键硬件。端侧大模型应用（如AI助手、实时翻译、会议纪要）依赖NPU在本地完成推理，兼顾响应速度与隐私安全，同时降低云端依赖。",
    "background": "端侧AI对功耗敏感，通用处理器算力不足。NPU以专用架构和低精度计算实现“每瓦算力”数倍于GPU，推动AI从云端走向手机、PC、汽车等终端。英特尔、AMD、高通与苹果均在最新平台集成更强NPU，NPU规格已成为新品发布的核心卖点之一。",
    "core": [
      "专为神经网络设计，能效比高",
      "Copilot+ PC门槛为40 TOPS",
      "骁龙X2 Elite NPU达80 TOPS",
      "CPU+GPU+NPU异构协同"
    ],
    "applications": [
      "AI PC与智能手机",
      "智能驾驶座舱",
      "端侧大模型部署"
    ],
    "misconceptions": [
      "NPU的TOPS数值高不等于体验好，需结合内存带宽与软件优化",
      "NPU不会取代GPU，两者定位不同"
    ],
    "references": [
      "80TOPS NPU+5GHz CPU！高通骁龙X2 Elite发布，重塑Windows PC性能标杆",
      "The 50+ TOPS Era Arrives at CES 2026"
    ],
    "sources": [
      "https://www.donews.com/news/detail/4/6143198.html",
      "https://investor.wedbush.com/wedbush/article/tokenring-2026-1-14-the-50-tops-era-arrives-at-ces-2026-the-ai-pc-evolution-faces-a-consumer-reality-check"
    ],
    "searchedAt": "2026-08-14",
    "domain": "半导体与芯片",
    "relations": [
      {
        "type": "related",
        "target": "ai-chip",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "risc-v",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "automotive-chip",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-accelerator",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "edge-ai",
        "note": "",
        "confidence": 0.75
      }
    ]
  },
  {
    "id": "foundry",
    "name": "晶圆代工",
    "aliases": [
      "Foundry",
      "半导体代工"
    ],
    "field": "半导体与芯片",
    "tags": [
      "制造",
      "产业链"
    ],
    "difficulty": 2,
    "summary": "芯片制造代工模式，台积电2025营收破3.8兆",
    "definition": "晶圆代工（Foundry）指专门为芯片设计公司（Fabless）制造晶圆、自身不设计芯片的商业模式，与IDM（垂直整合制造）相对。台积电是绝对龙头：据2025-2026年报道，其2025年营收突破3.8兆新台币，2026年增速预期超30%，并大幅上调资本开支；先进制程（7nm及以下）贡献过半收入。三星、英特尔及中国大陆的中芯国际、华虹等为重要玩家。代工是典型资本与技术密集型产业，单座先进晶圆厂投资超200亿美元，设备与材料高度依赖全球供应链。地缘政治推动各国本土建厂，美国、日本、德国纷纷以补贴吸引台积电设厂。",
    "background": "1987年台积电开创专业代工模式，让高通、英伟达等无晶圆厂设计公司成为可能，形成“Fabless+Foundry”分工体系，是半导体产业链专业化分工的基石。AI需求推高先进制程与CoWoS产能价格，代工行业景气度与资本开支同步上行。",
    "core": [
      "Fabless+Foundry分工模式",
      "台积电2025营收破3.8兆新台币",
      "先进制程贡献过半收入",
      "单座先进晶圆厂投资超200亿美元"
    ],
    "applications": [
      "全球逻辑芯片制造",
      "先进制程量产",
      "功率/模拟特种工艺"
    ],
    "misconceptions": [
      "代工厂不设计芯片，但提供设计规则与PDK协同设计",
      "“代工”并非低端制造，先进制程代工是顶级技术活"
    ],
    "references": [
      "台积电2025年营收破3.8兆元 2026年增速预期超30%",
      "日挣10亿，台积电凭啥？"
    ],
    "sources": [
      "https://www.mscbsc.com/viewnews-2333514.html",
      "https://m.36kr.com/p/3808468863163912"
    ],
    "searchedAt": "2026-08-14",
    "domain": "半导体与芯片",
    "relations": [
      {
        "type": "related",
        "target": "advanced-node",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "euv",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "lithography-machine",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "memory-chip",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "lithography-machine",
    "name": "光刻机",
    "aliases": [
      "光刻设备",
      "Lithography Equipment"
    ],
    "field": "半导体与芯片",
    "tags": [
      "半导体设备",
      "制造设备"
    ],
    "difficulty": 3,
    "summary": "芯片制造核心设备，国产28nm光刻机批量交付",
    "definition": "光刻机是芯片制造最核心、最昂贵的设备，通过光学系统将电路图形曝光到晶圆上，其分辨率决定制程极限。按光源分为紫外（UV）、深紫外（DUV，含浸没式ArF）与极紫外（EUV）三档，ASML垄断高端市场。中国正全力攻关：2025-2026年国产光刻机取得重大突破，被业内称为“中国光刻机爆发元年”——上海微电子（SMEE）SSA800浸没式DUV光刻机实现批量交付，可支撑28nm级制程；EUV核心专利落地，大基金持续加仓，自主替代逻辑强化。但EUV光刻机涉及数万零部件与顶级光源、光学系统，国产化仍处攻关阶段，与ASML差距显著。",
    "background": "光刻机被称为“半导体皇冠上的明珠”，荷兰ASML凭借EUV垄断卡住全球先进制程咽喉，美国亦限制对华出口。光刻机由数万个精密零部件组成，单台DUV光刻机售价亦达数千万美元，供应链壁垒极高；中国从90nm到28nm逐步突破，但高端仍受制于人。",
    "core": [
      "分辨率决定制程极限",
      "分为DUV、浸没式与EUV三档",
      "SSA800批量交付，支撑28nm制程",
      "EUV核心专利落地、仍处攻关"
    ],
    "applications": [
      "晶圆制造前道光刻",
      "先进制程与成熟制程产线"
    ],
    "misconceptions": [
      "光刻机厂商不止ASML一家，但EUV仅ASML能量产",
      "国产突破28nm不等于突破EUV"
    ],
    "references": [
      "国产光刻机SSA800实现批量交付",
      "破局了！28纳米光刻机中国造，日美工程师连夜改方案"
    ],
    "sources": [
      "https://www.c114.net.cn/industry/80958.html",
      "https://m.sohu.com/a/991727155_100085330/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "半导体与芯片",
    "relations": [
      {
        "type": "related",
        "target": "euv",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "foundry",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "advanced-node",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "semiconductor-chip",
        "note": "",
        "confidence": 0.75
      }
    ]
  },
  {
    "id": "memory-chip",
    "name": "存储芯片",
    "aliases": [
      "存储器",
      "DRAM",
      "NAND Flash"
    ],
    "field": "半导体与芯片",
    "tags": [
      "存储",
      "周期行业"
    ],
    "difficulty": 2,
    "summary": "DRAM/NAND周期反转，超级周期延续至2026年底",
    "definition": "存储芯片是保存数据与程序的半导体器件，主要包括DRAM（动态随机存取存储器，用于内存）与NAND Flash（闪存，用于SSD与手机存储）。存储行业呈明显周期性：2023年低谷后，AI需求推动2024-2026年进入“存储超级周期”。2025年底存储现货与合约价持续上涨，闪迪预披露80%毛利率指引，美股存储板块集体大涨；中信证券预计行业供不应求至少持续至2026年底，2026上半年合约价仍有望快速上涨。HBM等高附加值产品成为增长主引擎，DDR5渗透率提升，NAND向300层以上堆叠演进。三星、SK海力士、美光三巨头主导市场，中国长鑫存储、长江存储在成熟制程快速追赶。",
    "background": "存储芯片标准化程度高、价格波动剧烈，是半导体周期性的典型代表。AI数据中心对内存容量与带宽的饥渴式需求，叠加原厂控产，是本轮涨价的核心驱动。2025年存储原厂资本开支与利润大幅修复，行业向HBM等高附加值产品结构升级。",
    "core": [
      "DRAM与NAND两大品类",
      "AI需求驱动存储超级周期",
      "供不应求至少持续至2026年底",
      "HBM成为高附加值增长点"
    ],
    "applications": [
      "服务器与PC内存",
      "手机与SSD存储",
      "AI加速器HBM"
    ],
    "misconceptions": [
      "存储涨价不等于全行业普涨，HBM与利基存储走势分化",
      "“超级周期”存在不确定性，需关注供给端恢复"
    ],
    "references": [
      "存储超级周期再发酵，闪迪预披露80%毛利率指引",
      "中信证券：预计存储行业供不应求至少持续至2026年底"
    ],
    "sources": [
      "https://data.jfinfo.com/news/4076053",
      "https://finance.eastmoney.com/a/202512043582086492.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "半导体与芯片",
    "relations": [
      {
        "type": "related",
        "target": "hbm",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-chip",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "foundry",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "automotive-chip",
    "name": "汽车芯片",
    "aliases": [
      "车规芯片",
      "Automotive Chip"
    ],
    "field": "半导体与芯片",
    "tags": [
      "汽车电子",
      "智能驾驶"
    ],
    "difficulty": 2,
    "summary": "电动化智能化驱动，国产车规芯片量产放量",
    "definition": "汽车芯片指用于汽车电子系统的半导体器件，涵盖主控SoC（智能驾驶/座舱）、MCU、功率器件（IGBT/SiC）、传感器与模拟芯片等，车规级要求高可靠、宽温域与长供货周期。2025-2026年，电动化与智能化推动单车芯片用量持续攀升，行业进入新一轮周期：多家国产汽车芯片企业晒出“量产成绩单”，上车放量加速；车企被芯片涨价“惊醒”，掀起自研芯片潮，被视为一场“工业自卫战”。RISC-V与国产替代在车规领域同步推进。智能驾驶SoC（地平线、黑芝麻、英伟达Thor等）算力向千TOPS级迈进，SiC功率器件随800V平台放量。",
    "background": "传统汽车芯片以MCU为主、价值量低；新能源车芯片价值量是燃油车的数倍，智能驾驶进一步推高算力需求。2021年全球缺芯暴露供应链脆弱性，中国加快车规芯片自主布局；车规认证（如AEC-Q100）周期长达数年，建立稳定供应体系是车企核心课题。",
    "core": [
      "车规级高可靠、长供货周期要求",
      "单车芯片用量随电动化智能化攀升",
      "国产车规芯片量产放量",
      "车企自研芯片潮兴起"
    ],
    "applications": [
      "智能驾驶域控制器",
      "智能座舱SoC",
      "三电系统功率器件"
    ],
    "misconceptions": [
      "车规认证周期长、要求严，“上车”不等于“放量”",
      "国产替代在MCU/功率领域较快，高端智驾SoC仍有差距"
    ],
    "references": [
      "国产汽车芯片企业晒出“量产成绩单”",
      "被涨价惊醒的车企：自研芯片是一场自卫战"
    ],
    "sources": [
      "https://epaper.cena.com.cn/pc/content/202604/24/content_16990.html",
      "https://m.12365auto.com/news/20260701/571109.shtml"
    ],
    "searchedAt": "2026-08-14",
    "domain": "半导体与芯片",
    "relations": [
      {
        "type": "related",
        "target": "sic",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "risc-v",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "npu",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "third-gen-semi",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "gan",
        "note": "",
        "confidence": 0.85
      }
    ]
  }
];
