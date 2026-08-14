window.XIGAI = window.XIGAI || {};
window.XIGAI["建筑与设计"] = [
  {
    "id": "load-bearing-wall",
    "name": "承重墙",
    "aliases": [
      "结构墙",
      "承重墙体",
      "Load-Bearing Wall"
    ],
    "field": "建筑与设计",
    "tags": [
      "结构",
      "住宅",
      "安全"
    ],
    "difficulty": 2,
    "summary": "承担上部荷载的墙体，不可随意拆改",
    "definition": "承重墙指直接承担楼板、梁、屋盖等上部结构自重及使用荷载并将其传递给基础的墙体，是砌体或剪力墙结构住宅中的主要竖向受力构件，其厚度、材料与配筋由结构计算确定。与仅起分隔作用的非承重墙（隔墙）不同，承重墙一旦开洞或拆除，传力路径被切断，可能导致墙体开裂、楼板下垂甚至整体坍塌。装修识别主要看施工图、墙厚（一般≥240mm）或敲击声，拆改须经结构工程师评估并报审。",
    "core": [
      "承担自重与使用荷载并传至基础",
      "与隔墙不同，严禁随意开洞拆除",
      "识别依据：施工图、墙厚、敲击声"
    ],
    "applications": [
      "装修拆改前必须确认承重墙位置，避免砸墙事故",
      "确需开洞时采用碳纤维或粘钢加固并报审"
    ],
    "misconceptions": [
      "敲击声音沉闷的墙不一定是承重墙，须结合图纸确认"
    ],
    "references": [
      "人民网上海：结构大不同 教你识别多层、高层住宅中的承重墙",
      "贝壳楼盘百科：住宅的建筑结构有哪些"
    ],
    "sources": [
      "http://sh.people.com.cn/BIG5/n2/2023/0608/c176737-40449883.html",
      "https://m.ke.com/hz/loupan/zhuanti/8838.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "shear-wall",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "frame-structure",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "构造柱",
        "note": "",
        "confidence": 0.3
      }
    ],
    "principle": "承重墙的工作原理是通过其厚度和结构材料来承担上部建筑的重量，并将这些荷载传递给基础。在砌体或剪力墙结构中，承重墙通常具有较高的强度和稳定性，能够有效抵抗垂直方向上的压力和侧向风压等荷载。墙体的厚度、材料选择以及配筋设计都是根据详细的结构计算来确定的，以确保其承载能力和安全性。",
    "pros": [
      "提供足够的结构强度",
      "保证建筑的整体稳定性和安全性"
    ],
    "cons": [
      "增加建造成本",
      "限制室内空间布局灵活性"
    ],
    "confidence": 0.9,
    "status": "verified"
  },
  {
    "id": "shear-wall",
    "name": "剪力墙",
    "aliases": [
      "结构墙",
      "抗震墙",
      "抗风墙",
      "Shear Wall"
    ],
    "field": "建筑与设计",
    "tags": [
      "结构",
      "抗震",
      "高层"
    ],
    "difficulty": 3,
    "summary": "承受水平剪力的钢筋混凝土墙体，高层住宅主力",
    "definition": "剪力墙又称结构墙或抗震墙，是高层建筑中承担风荷载和地震作用产生的水平剪力、弯矩及竖向荷载的钢筋混凝土墙体。其平面内刚度很大，能显著控制结构侧向位移，广泛用于地震区的板式高层住宅；按布置分单片墙、短肢墙、框支墙等，墙肢尺寸与配筋由抗震计算确定。剪力墙住宅室内少有凸出梁柱、空间平整，但墙体位置固定、改造自由度低，装修时严禁凿槽、开洞破坏受力钢筋。",
    "core": [
      "抵抗水平剪力和倾覆弯矩，控制侧移",
      "常见于地震区高层住宅，空间平整",
      "墙体固定，二次改造自由度低"
    ],
    "applications": [
      "高层住宅、公寓首选结构体系",
      "与框架组合成框架-剪力墙结构用于中高层公共建筑"
    ],
    "misconceptions": [
      "剪力墙不是全楼每堵墙都承重，洞口周边连梁也属受力构件"
    ],
    "references": [
      "贝壳楼盘百科：住宅的建筑结构有哪些",
      "百度百家号：不同结构的住宅，如何识别承重墙"
    ],
    "sources": [
      "https://m.ke.com/hz/loupan/zhuanti/8838.html",
      "https://baijiahao.baidu.com/s?id=1768144931288546601&wfr=spider&for=pc"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "load-bearing-wall",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "frame-structure",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "框架-核心筒",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "cantilever",
        "note": "",
        "confidence": 0.85
      }
    ],
    "principle": "剪力墙通过其在结构平面内的高刚度来抵抗水平荷载，如风荷载和地震作用产生的水平剪力及弯矩。墙体内部配置有密集的钢筋，以增强其承载能力和抗变形能力。剪力墙的设计基于抗震计算，确保在极端情况下能够有效控制结构的侧向位移。",
    "pros": [
      "显著提高建筑的抗震性能",
      "减少建筑物的整体高度和重量",
      "提供稳定的室内空间布局"
    ],
    "cons": [
      "墙体位置固定，改造难度大",
      "装修时需特别注意保护受力钢筋"
    ],
    "confidence": 0.9,
    "status": "verified"
  },
  {
    "id": "frame-structure",
    "name": "框架结构",
    "aliases": [
      "框架体系",
      "钢筋混凝土框架",
      "Frame Structure"
    ],
    "field": "建筑与设计",
    "tags": [
      "结构",
      "公共建筑",
      "柱梁"
    ],
    "difficulty": 2,
    "summary": "梁柱刚接承重的结构体系，空间布置灵活",
    "definition": "框架结构是由钢筋混凝土梁与柱刚性连接形成承重骨架的结构体系，楼板荷载经梁传至柱、再由柱传至基础。因承重构件集中在梁柱，墙体仅起围护与分隔作用，室内空间开敞、可灵活划分，常用于商场、办公楼、教学楼等公共建筑及多层住宅。优点是平面布置灵活、开间大；缺点是侧向刚度较弱，层数过高时侧移明显，纯框架一般用于10层以下，更高建筑常采用框架-剪力墙或框架-核心筒组合。",
    "core": [
      "梁柱刚接形成承重骨架",
      "墙体不承重，空间划分灵活",
      "侧向刚度弱，多用于10层以下"
    ],
    "applications": [
      "商场、办公楼、教学楼等大开间公共建筑",
      "住宅底商加剪力墙的转换层设计"
    ],
    "references": [
      "贝壳楼盘百科：住宅的建筑结构有哪些",
      "人民网上海：教你识别多层、高层住宅中的承重墙"
    ],
    "sources": [
      "https://m.ke.com/hz/loupan/zhuanti/8838.html",
      "http://sh.people.com.cn/BIG5/n2/2023/0608/c176737-40449883.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "shear-wall",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "load-bearing-wall",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "框架-核心筒",
        "note": "",
        "confidence": 0.3
      }
    ],
    "principle": "框架结构的工作原理是通过钢筋混凝土梁和柱的刚性连接形成一个承重骨架，楼板荷载通过梁传递给柱，再由柱传至基础。这种结构体系使得墙体仅作为围护与分隔作用，从而可以灵活划分室内空间，提供更大的平面布置灵活性。",
    "pros": [
      "平面布置灵活",
      "开间大"
    ],
    "cons": [
      "侧向刚度较弱"
    ],
    "misconceptions": [
      "框架结构可以无限高，实际上10层以上就需要加入其他结构形式如剪力墙或核心筒来提高侧向刚度"
    ],
    "confidence": 0.9,
    "status": "verified"
  },
  {
    "id": "bim",
    "name": "BIM",
    "aliases": [
      "建筑信息模型",
      "Building Information Modeling",
      "BIM技术"
    ],
    "field": "建筑与设计",
    "tags": [
      "数字化",
      "协同",
      "全过程"
    ],
    "difficulty": 4,
    "summary": "三维数字模型贯穿建筑全生命周期的协同方法",
    "definition": "BIM是Building Information Modeling（建筑信息模型）的缩写，指以三维数字模型为载体，集成构件几何、材料、成本、进度、运维等全生命周期信息，供设计、施工、运维各阶段协同使用。与传统CAD图纸不同，BIM构件是带参数的智能对象，修改一处平立剖及工程量自动联动。典型应用：碰撞检查、4D施工模拟、5D算量、竣工运维移交，是智慧工地与数字孪生的底座。",
    "core": [
      "构件带参数，一处修改全线联动",
      "碰撞检查、施工模拟、算量等全过程应用",
      "图模一致，支撑智慧工地与数字孪生"
    ],
    "applications": [
      "机电管线综合与碰撞检查，减少现场返工",
      "设计-生产-施工一体化协同，配合装配式建筑深化"
    ],
    "misconceptions": [
      "BIM不是三维建模软件，而是信息协同管理方法"
    ],
    "references": [
      "深圳市政府在线：什么是BIM?",
      "安徽省住建厅：什么是BIM技术?"
    ],
    "sources": [
      "http://www.sz.gov.cn/hdjl/ywzsk/zwfwsjglj/sjgl/content/post_10500543.html",
      "https://dohurd.ah.gov.cn/zmhd/cjwt/jnkj/54606891.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "prefabricated-building",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "parametric-design",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "智慧工地",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "civil-engineering",
        "note": "",
        "confidence": 0.75
      }
    ],
    "principle": "BIM 的工作原理是通过三维数字模型集成建筑项目的各种信息，包括几何形状、材料属性、成本估算和施工进度等。这些信息以参数化的方式存储在模型中，使得任何一处修改都能自动影响整个项目的信息流，从而实现设计、施工、运维各阶段的协同作业。BIM 模型通过软件平台进行管理和操作，支持碰撞检测、4D 施工模拟、5D 算量等功能，提高了项目的可视化和可管理性。",
    "pros": [
      "提高项目可视性和可管理性",
      "减少设计错误和施工中的冲突",
      "优化资源利用和成本控制",
      "增强各参与方之间的沟通与协作"
    ],
    "cons": [
      "初期投资和培训成本较高",
      "对软件和技术要求较高，需要专业人员操作"
    ],
    "confidence": 0.9,
    "status": "verified"
  },
  {
    "id": "passive-house",
    "name": "被动式住宅",
    "aliases": [
      "被动房",
      "被动式超低能耗建筑",
      "Passivhaus"
    ],
    "field": "建筑与设计",
    "tags": [
      "节能",
      "超低能耗",
      "舒适"
    ],
    "difficulty": 3,
    "summary": "靠高保温密闭与新风热回收实现超低能耗的住宅",
    "definition": "被动式住宅（被动房，源于德国Passivhaus标准）指不依赖主动供暖制冷设备，仅通过极佳的外围护保温、高气密性、无热桥构造、高性能门窗及带热回收的机械新风系统，即可维持全年恒温恒湿舒适环境的建筑。核心指标：年供暖需求≤15 kWh/(m²·a)、气密性n50≤0.6次/h、一次能源需求≤120 kWh/(m²·a)，较普通建筑节能约75%-90%，是双碳背景下超低能耗住宅的主流方向。",
    "core": [
      "五要素：保温、气密、无热桥、高性能门窗、新风热回收",
      "年供暖需求≤15 kWh/(m²·a)",
      "较普通建筑节能75%-90%"
    ],
    "applications": [
      "严寒、寒冷地区超低能耗住宅建设",
      "既有建筑节能改造参照被动房标准实施"
    ],
    "references": [
      "被动式超低能耗建筑标准图集23J908-8",
      "被动房PHI中国认证信息"
    ],
    "sources": [
      "https://ebook.chinabuilding.com.cn/zbooklib/book/detail/show?bookID=155754&SiteID=1",
      "https://www.phichina.com/zh-hans/%e8%ae%a4%e8%af%81%e4%bf%a1%e6%81%af.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "energy-efficient-building",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "green-building",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "新风系统",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "daylighting",
        "note": "",
        "confidence": 0.85
      }
    ],
    "principle": "被动式住宅的原理主要在于通过优化建筑的外围护结构和细节设计，减少能量损失，并利用自然界的热能（如太阳辐射）来维持室内温度。具体来说，它依赖于极佳的保温性能、高气密性、无热桥构造以及高性能门窗等措施，确保热量不会轻易流失到外部环境。同时，通过带热回收的新风系统提供必要的通风和新鲜空气，保持室内空气质量的同时减少能耗。",
    "pros": [
      "节能高效",
      "舒适度高",
      "维护成本低"
    ],
    "cons": [
      "初期投资较高"
    ],
    "misconceptions": [
      "被动房不需要任何机械辅助设备"
    ],
    "confidence": 0.9,
    "status": "verified"
  },
  {
    "id": "circulation",
    "name": "动线",
    "aliases": [
      "流线",
      "交通流线",
      "行走路线",
      "Circulation"
    ],
    "field": "建筑与设计",
    "tags": [
      "空间",
      "设计方法",
      "功能"
    ],
    "difficulty": 2,
    "summary": "人在空间中的活动路径组织，决定效率与体验",
    "definition": "动线（流线）是设计术语，指人在建筑或空间内活动、穿行的路径组织，是平面布局的核心逻辑。室内设计按功能分为居住动线（起床-洗漱-更衣）、家务动线（做饭-洗衣-晾晒）、访客动线（会客-用餐-如厕），要求三条线互不交叉；商业与展陈空间则刻意设计回游式动线，引导客流经过更多商品面。动线设计讲究短、直、顺：通道宽度、开门位置、视线引导、无障碍衔接都影响通行效率，动线混乱的典型表现是开门见厕、厨房到餐厅绕远。",
    "core": [
      "居住、家务、访客三条动线互不交叉",
      "商业空间用回游式动线延长停留与消费",
      "短、直、顺是动线组织的基本原则"
    ],
    "applications": [
      "住宅户型设计评估动静分区是否合理",
      "商业综合体平面布局引导客流与租金价值"
    ],
    "references": [
      "知乎：建筑与空间设计行业黑话通用规范2026",
      "商业建筑设计名词扫盲"
    ],
    "sources": [
      "https://zhuanlan.zhihu.com/p/2054988561733231341",
      "http://www.chinalbgf.com/h-nd-361.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "ergonomics",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "accessible-design",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "户型设计",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "ventilation-shaft",
        "note": "",
        "confidence": 0.85
      }
    ],
    "principle": "[object Object]",
    "pros": [
      "优点1：提高通行效率，减少行走时间和距离。",
      "优点2：优化空间利用，提升整体设计的舒适度和实用性。",
      "优点3：增强用户体验，使用户在空间内的活动更加顺畅自然。",
      "优点4：促进无障碍设计，确保所有用户的安全与便利。"
    ],
    "cons": [
      "缺点1：动线设计需要综合考虑多种因素，可能导致初期成本增加。"
    ],
    "misconceptions": [
      "误解1：认为动线设计仅适用于大型商业空间，实际上它广泛应用于各种类型的建筑和空间中。",
      "误解2：误以为动线设计只关注行走路径的物理布局，而忽视了人的心理感受和行为习惯。"
    ],
    "confidence": 0.9,
    "status": "verified"
  },
  {
    "id": "ergonomics",
    "name": "人体工学",
    "aliases": [
      "人体工程学",
      "人机工学",
      "Ergonomics"
    ],
    "field": "建筑与设计",
    "tags": [
      "尺度",
      "家具",
      "健康"
    ],
    "difficulty": 2,
    "summary": "依据人体尺度与行为习惯优化空间家具尺寸",
    "definition": "人体工学（人体工程学）研究人体尺寸、活动范围、视线、姿态与环境的匹配关系，是建筑与室内设计确定尺度的科学依据。典型应用：依据《中国成年人人体尺寸》定家具高度（坐面400-450mm）、楼梯踏步（高150-175mm、宽260-300mm）、厨房操作台高度（850-900mm），并按视线与手臂范围布置开关与储物。合理的人体工学设计能减少劳损、提升效率与舒适；它与无障碍设计不同，面向健康人而非障碍者。",
    "core": [
      "以人体测量数据为设计依据",
      "确定家具、楼梯、操作台等关键尺寸",
      "减少劳损，提升效率与舒适"
    ],
    "applications": [
      "定制家具与厨房台面高度按使用者身高定制",
      "办公空间工位尺寸与屏幕高度调节设计"
    ],
    "references": [
      "商业建筑设计名词扫盲",
      "建筑与空间设计行业黑话通用规范2026"
    ],
    "sources": [
      "http://www.chinalbgf.com/h-nd-361.html",
      "https://zhuanlan.zhihu.com/p/2054988561733231341"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "circulation",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "accessible-design",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "家具设计",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "bauhaus",
    "name": "包豪斯",
    "aliases": [
      "Bauhaus",
      "魏玛包豪斯",
      "包豪斯学派"
    ],
    "field": "建筑与设计",
    "tags": [
      "设计史",
      "现代主义",
      "风格"
    ],
    "difficulty": 3,
    "summary": "1919年创立的德国设计学校，现代主义设计源头",
    "definition": "包豪斯（Bauhaus）是1919年格罗皮乌斯在德国魏玛创立的国立设计学校，1933年被纳粹关闭，历时仅14年却奠定现代主义设计的基础。核心理念是形式追随功能、艺术与技术的新统一：反对繁琐装饰，强调几何造型、原色与黑白灰、钢玻璃混凝土等新材料的诚实表达，并首创作坊制教学，使设计与工业制造结合。德绍校舍是功能主义建筑典范，其理念经师生流亡全球传播，深刻影响现代建筑、家具与平面设计。",
    "core": [
      "形式追随功能，艺术与技术统一",
      "反对装饰，强调几何与新材料表达",
      "影响现代建筑、家具与平面设计至今"
    ],
    "applications": [
      "现代主义建筑设计教学的基础理论",
      "极简与功能主义家具（如包豪斯钢管椅）设计"
    ],
    "references": [
      "同济大学新闻网：从包豪斯到零豪斯——德国建筑创新的三次浪潮",
      "海外网：包豪斯到底是什么？"
    ],
    "sources": [
      "https://news.tongji.edu.cn/info/1007/11388.htm",
      "https://m.haiwainet.cn/middle/456991/2016/0905/content_30292215_1.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "parametric-design",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "现代主义",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "密斯·凡·德·罗",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "minimalism",
        "note": "",
        "confidence": 0.75
      }
    ]
  },
  {
    "id": "parametric-design",
    "name": "参数化设计",
    "aliases": [
      "参数主义",
      "Parametric Design",
      "算法设计",
      "生成式设计"
    ],
    "field": "建筑与设计",
    "tags": [
      "数字设计",
      "算法",
      "曲面"
    ],
    "difficulty": 4,
    "summary": "以参数与算法驱动生成复杂形态的设计方法",
    "definition": "参数化设计指将设计对象的关键特征抽象为参数（曲率、跨度、单元数量、日照角度等）与规则（函数与算法），通过调整参数自动生成并联动更新形态的设计方法，常用工具为Grasshopper、Dynamo等可视化编程平台。其价值在于快速比选大量方案、精确控制复杂曲面（如扎哈·哈迪德事务所的流动形态），并直接输出构件数据对接数控加工。注意参数化不等于异形，也可作为优化采光、结构性能的理性算法过程。",
    "core": [
      "形态由参数与算法驱动，改参即改形",
      "联动模拟与生产数据，支持数控加工",
      "参数化≠异形，也可用于性能优化"
    ],
    "applications": [
      "异形曲面建筑与幕墙单元化设计",
      "日照、能耗、结构性能联动优化比选方案"
    ],
    "references": [
      "百度百科：建筑参数化设计",
      "台湾建筑师杂志：参数化设计——建筑设计中的演算思维"
    ],
    "sources": [
      "https://baike.baidu.com/item/%E5%BB%BA%E7%AD%91%E5%8F%82%E6%95%B0%E5%8C%96%E8%AE%BE%E8%AE%A1/3268400",
      "https://www.twarchitect.org.tw/special/%e5%8f%83%e6%95%b8%e5%8c%96%e8%a8%ad%e8%a8%88%ef%bc%9a%e5%bb%ba%e7%af%89%e8%a8%ad%e8%a8%88%e4%b8%ad%e7%9a%84%e6%bc%94%e7%ae%97%e6%80%9d%e7%b6%ad/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "bim",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "curtain-wall",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "数字建造",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "bauhaus",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "long-span-structure",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "energy-efficient-building",
    "name": "节能建筑",
    "aliases": [
      "低能耗建筑",
      "节能住宅",
      "Energy-Efficient Building"
    ],
    "field": "建筑与设计",
    "tags": [
      "节能",
      "围护结构",
      "双碳"
    ],
    "difficulty": 2,
    "summary": "通过围护结构与设备优化降低运行能耗的建筑",
    "definition": "节能建筑指在保证室内热舒适的前提下，通过提高围护结构保温隔热性能与门窗气密性，采用高效暖通设备、节能灯具及可再生能源等措施，显著降低采暖、制冷、照明等运行能耗的建筑。我国按气候区执行《建筑节能与可再生能源利用通用规范》GB 55015，节能率当前普遍迈向75%以上并衔接近零能耗建筑。常见措施：外墙外保温、三玻两腔中空玻璃、外遮阳、新风热回收、太阳能光伏光热，是双碳目标下建筑降碳的主战场。",
    "core": [
      "围护结构保温隔热是节能基础",
      "高效设备与可再生能源并行",
      "节能率75%+，衔接近零能耗标准"
    ],
    "applications": [
      "新建居住建筑按75%节能标准设计",
      "既有建筑外墙与门窗节能改造"
    ],
    "references": [
      "中国工程建设标准知识服务网：被动式超低能耗建筑图集",
      "被动房PHI中国：被动房技术应用"
    ],
    "sources": [
      "https://ebook.chinabuilding.com.cn/zbooklib/book/detail/show?bookID=155754&SiteID=1",
      "http://passivehouse.kcpc.com.cn/zixun/ljbdf/1647.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "passive-house",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "green-building",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "curtain-wall",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "daylighting",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "prefabricated-building",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "curtain-wall",
    "name": "幕墙",
    "aliases": [
      "建筑幕墙",
      "玻璃幕墙",
      "Curtain Wall",
      "石材幕墙"
    ],
    "field": "建筑与设计",
    "tags": [
      "立面",
      "材料",
      "构造"
    ],
    "difficulty": 3,
    "summary": "悬挂于主体外侧不承重的围护立面体系",
    "definition": "幕墙是由面板（玻璃、金属板、石材等）与支承结构（铝型材、钢龙骨、点支承爪件）组成的悬挂于主体结构外侧的围护结构，按《建筑幕墙》GB/T 21086定义，其不承担主体结构荷载，仅承受自重、风荷载与地震作用并传递给主体。按面板分玻璃、金属板、石材及组合幕墙，按支承方式分构件式、单元式、点支承、全玻幕墙等，单元式工厂预制、现场挂装，是超高层主流。幕墙须通过抗风压、水密性、气密性、平面内变形四大性能检测。",
    "core": [
      "只围护不承重，荷载传至主体结构",
      "单元式幕墙工厂预制现场挂装",
      "四大性能检测：抗风压、水密、气密、变形"
    ],
    "applications": [
      "超高层写字楼的玻璃幕墙立面",
      "机场、高铁站大空间金属板幕墙"
    ],
    "references": [
      "建筑幕墙术语（国家建筑工程质量检验检测中心）",
      "玻璃幕墙工程技术规范JGJ102-2003术语"
    ],
    "sources": [
      "https://www.glass.com.cn/glassnews/newsinfo_210977.html",
      "https://gf.cabr-fire.com/m/article-30464.htm"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "cantilever",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "parametric-design",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "energy-efficient-building",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "cantilever",
    "name": "悬挑",
    "aliases": [
      "悬臂",
      "挑出",
      "Cantilever",
      "悬挑结构"
    ],
    "field": "建筑与设计",
    "tags": [
      "结构",
      "造型",
      "力学"
    ],
    "difficulty": 3,
    "summary": "构件一端固定另一端自由悬伸的受力与造型手法",
    "definition": "悬挑（悬臂）指结构构件一端固定（锚固于支座）、另一端向外自由悬伸的受力状态，如阳台板、雨棚、屋檐、看台罩棚、悬挑楼梯等。悬挑结构以固定端承受弯矩与剪力，根部弯矩最大，挠度随悬挑长度立方增长，因此需要足够的截面高度与锚固长度，并控制挠度与裂缝。著名案例包括赖特流水别墅的悬挑平台、超高层顶部的悬挑观光廊。悬挑既是结构技术也是造型语言，须同时验算强度、挠度、舒适度与倾覆稳定。",
    "core": [
      "固定端承受弯矩，根部内力最大",
      "挠度随悬挑长度立方增长",
      "强度、挠度、舒适度、倾覆四方面验算"
    ],
    "applications": [
      "阳台、雨棚、看台罩棚等悬挑构件",
      "高层顶部悬挑观光平台与立面造型"
    ],
    "references": [
      "建筑与空间设计行业黑话通用规范2026",
      "150个建筑高阶词汇（ArchDaily中文版）"
    ],
    "sources": [
      "https://zhuanlan.zhihu.com/p/2054988561733231341",
      "https://www.archdaily.cn/cn/871283/ding-yi-150ge-guai-ci-jian-zhu-yu-yan-xiang-dao"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "long-span-structure",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "shear-wall",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "curtain-wall",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "long-span-structure",
    "name": "大跨度结构",
    "aliases": [
      "大跨结构",
      "空间结构",
      "大跨度屋盖"
    ],
    "field": "建筑与设计",
    "tags": [
      "结构",
      "公共建筑",
      "空间"
    ],
    "difficulty": 4,
    "summary": "无中间柱支撑的大空间屋盖，覆盖场馆航站楼",
    "definition": "大跨度结构指跨度较大（一般40m以上）、中部无竖向柱支撑、用于覆盖大型无柱空间的屋盖结构，常见类型有网架与网壳、桁架、张弦梁（弦支穹顶）、索膜结构与充气膜结构等。其力学原理是让钢材、索或膜材以拉、压、弯组合传递荷载，实现轻质大跨。典型应用：体育场馆（国家体育场鸟巢的编织钢桁架）、会展中心、机场航站楼与高铁站房。选型由跨度、荷载、造价与造型共同决定，需进行整体稳定、屈曲分析及施工过程仿真。",
    "core": [
      "跨度40m以上无中间柱支撑",
      "网架、桁架、索膜等结构类型",
      "需整体稳定与施工过程仿真分析"
    ],
    "applications": [
      "体育场、会展中心无柱大空间屋盖",
      "机场航站楼、高铁站房曲面网架"
    ],
    "references": [
      "ArchDaily中文：150个建筑高阶词汇",
      "中国工程建设标准知识服务网"
    ],
    "sources": [
      "https://www.archdaily.cn/cn/871283/ding-yi-150ge-guai-ci-jian-zhu-yu-yan-xiang-dao",
      "http://kscecs.com/expert/searchTrainingTopicDetail.action?topicId=1"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "cantilever",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "parametric-design",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "钢结构",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "daylighting",
    "name": "采光",
    "aliases": [
      "自然采光",
      "采光设计",
      "Daylighting"
    ],
    "field": "建筑与设计",
    "tags": [
      "光环境",
      "节能",
      "舒适"
    ],
    "difficulty": 2,
    "summary": "利用自然光照明室内，兼顾照度与眩光控制",
    "definition": "采光指建筑设计中利用自然光为室内提供照明的技术与方法，评价指标包括采光系数（室内照度与室外照度之比）、采光均匀度与眩光控制。规范按房间功能规定窗地比（如住宅起居室≥1/7）与最小采光系数。设计手段：加大开窗、设置高窗与天窗、采用反光板与导光管、控制窗台高度并配合遮阳避免眩光与过热。好的采光设计可减少人工照明能耗、改善健康节律，但需与保温、隐私平衡——大窗带来采光的同时也带来热损失与光污染。",
    "core": [
      "采光系数与窗地比是核心指标",
      "侧窗、天窗、中庭、导光管等手法",
      "采光与保温、隐私需平衡"
    ],
    "applications": [
      "住宅起居室、书房按窗地比设计开窗",
      "大进深办公空间用中庭与导光管补光"
    ],
    "references": [
      "建筑与空间设计行业黑话通用规范2026",
      "商业建筑设计名词扫盲"
    ],
    "sources": [
      "https://zhuanlan.zhihu.com/p/2054988561733231341",
      "http://www.chinalbgf.com/h-nd-361.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "energy-efficient-building",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "passive-house",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ventilation-shaft",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "ventilation-shaft",
    "name": "通风井",
    "aliases": [
      "风井",
      "竖向风道",
      "烟囱效应"
    ],
    "field": "建筑与设计",
    "tags": [
      "设备",
      "地下空间",
      "空气"
    ],
    "difficulty": 2,
    "summary": "贯通楼层进排风的竖向井道，地下室与厨卫呼吸通道",
    "definition": "通风井（风井）是建筑中贯穿若干楼层的竖向井道，用于输送新风、排除污浊空气或辅助自然通风，常见于地下室、车库、厨房排烟道、卫生间排风道及核心筒内。其原理多利用烟囱效应：井内热空气上升形成负压，带动室内空气流动。设计须按风量计算井道截面、内壁光滑减小阻力，并落实防火要求（设防火阀、按防火分区分隔）。超高层核心筒内的机电风井合并布置可节约面积；注意与烟道的区别：烟道专排烟气，风井兼做进排风。",
    "core": [
      "贯通楼层的竖向进排风通道",
      "烟囱效应辅助自然通风",
      "须满足防火阀与防火分隔要求"
    ],
    "applications": [
      "地下室与地下车库机械排风",
      "高层住宅厨卫集中排烟排气道"
    ],
    "references": [
      "商业建筑设计名词扫盲",
      "建筑工程设计施工常用术语"
    ],
    "sources": [
      "http://www.chinalbgf.com/h-nd-361.html",
      "https://www.ahjzu.edu.cn/jsxh/2026/0513/c12894a269852/page.htm"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "daylighting",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "circulation",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "核心筒",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "accessible-design",
    "name": "无障碍设计",
    "aliases": [
      "无障碍设施",
      "Accessibility",
      "通用设计",
      "适老化"
    ],
    "field": "建筑与设计",
    "tags": [
      "规范",
      "关怀",
      "可达性"
    ],
    "difficulty": 2,
    "summary": "消除环境障碍、保障所有人平等使用的设计",
    "definition": "无障碍设计指消除环境中对残障人士、老年人、儿童等人群构成障碍的设计方法，我国执行《无障碍设计规范》GB 50763，涵盖坡道（坡度≤1:12）、无障碍电梯与卫生间、盲道、低位服务台及语音提示等设施。其理念正从专用设施走向通用设计（Universal Design）：设计不额外标识也能被所有人使用，如无高差入口、防滑地面、宽门洞。规范要求新建公共建筑与住宅必须配置无障碍设施并纳入验收。",
    "core": [
      "坡道坡度≤1:12、宽门洞、低位设施",
      "从专用设施走向通用设计",
      "新建建筑无障碍设施纳入规划验收"
    ],
    "applications": [
      "公共建筑出入口、卫生间无障碍配置",
      "老旧小区加装电梯与适老化改造"
    ],
    "references": [
      "Fitwel中文：为所有人设计——无障碍设计如何提升所有空间",
      "平机会：创造通达环境"
    ],
    "sources": [
      "https://zh-cn.fitwel.org/blog/designing-for-everyone-how-accessibility-elevates-all-spaces",
      "https://www.eoc.org.hk/zh-hk/udas/about-the-scheme/creating-accessible-environment"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "ergonomics",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "circulation",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "green-building",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "green-building",
    "name": "绿色建筑",
    "aliases": [
      "可持续建筑",
      "低碳建筑",
      "Sustainable Building"
    ],
    "field": "建筑与设计",
    "tags": [
      "可持续",
      "评价标准",
      "双碳"
    ],
    "difficulty": 3,
    "summary": "全生命周期节能节水节材环保的高性能建筑",
    "definition": "绿色建筑指在全寿命期内节约资源（节能、节水、节材、节地）、保护环境、减少污染，提供健康适用高效的空间，与自然和谐共生的建筑，评价依据《绿色建筑评价标准》GB/T 50378分星级，维度涵盖安全耐久、健康舒适、生活便利、资源节约、环境宜居。国际主流体系还有美国LEED、英国BREEAM、德国DGNB。注意绿色建筑不等于多种树绿化，而是涵盖围护结构、可再生能源、水循环、空气品质与智慧运营的系统工程。",
    "core": [
      "四节一环保：节能节水节材节地",
      "国内按GB/T 50378评星级",
      "是系统工程，非单纯绿化"
    ],
    "applications": [
      "新建项目申报绿色建筑星级认证",
      "商业项目采用LEED认证提升资产价值"
    ],
    "references": [
      "知乎：从0到1了解LEED",
      "Archiposition：绿色建筑评估标准LEED"
    ],
    "sources": [
      "https://zhuanlan.zhihu.com/p/139200581",
      "https://www.archiposition.com/video?20180620111222"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "energy-efficient-building",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "passive-house",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "prefabricated-building",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "accessible-design",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "skyline",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "floor-area-ratio",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "prefabricated-building",
    "name": "装配式建筑",
    "aliases": [
      "预制装配式建筑",
      "工业化建筑",
      "装配化建筑"
    ],
    "field": "建筑与设计",
    "tags": [
      "工业化",
      "预制",
      "施工"
    ],
    "difficulty": 3,
    "summary": "构件工厂预制、现场装配成型的建造方式",
    "definition": "装配式建筑指将主要结构构件（预制墙板、叠合楼板、预制楼梯、阳台板）与部品在工厂标准化生产，运至现场通过机械连接、套筒灌浆或后浇带装配成整体，实现像造汽车一样造房子。我国以《装配式混凝土建筑技术标准》GB/T 51231等为支撑，装配式建筑占比是住建部考核指标。优点是质量可控、减少湿作业与扬尘、缩短工期、省人力；难点是连接节点（套筒灌浆）质量管控与设计-生产-施工一体化协同，需配合BIM深化设计。",
    "core": [
      "构件工厂预制，现场装配成型",
      "套筒灌浆等连接节点质量是关键",
      "需BIM深化设计与全流程数字化协同"
    ],
    "applications": [
      "保障房与商品房采用预制叠合楼板、楼梯",
      "结合BIM实现构件生产与安装进度管理"
    ],
    "references": [
      "中国工程建设标准化协会：到底什么叫装配式建筑？",
      "漳州市住建局：预制装配式建筑的概述"
    ],
    "sources": [
      "http://www.cecs.org.cn/zixun/sxdt/8327.html",
      "http://jsj.zhangzhou.gov.cn/cms/html/zzszfhcxjsj/2021-12-24/380974862.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "bim",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "green-building",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "energy-efficient-building",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "skyline",
    "name": "城市天际线",
    "aliases": [
      "城市轮廓线",
      "Skyline",
      "天际轮廓"
    ],
    "field": "建筑与设计",
    "tags": [
      "规划",
      "城市设计",
      "景观"
    ],
    "difficulty": 2,
    "summary": "城市建筑群在天际形成的轮廓景观与形象名片",
    "definition": "城市天际线（天际轮廓线）指城市建筑群、构筑物与自然地形在地平线或天空背景上投影形成的轮廓景观，是城市空间形态与形象的直观表达，与山体、水系、地标建筑共同构成城市名片。规划中常通过高度分区、视线通廊（保证从重要观景点望见山体或地标）与天际线韵律控制（高低错落、疏密有致）来塑造。著名案例：纽约曼哈顿、上海陆家嘴三件套、香港维多利亚港。超高层扎堆会破坏轮廓层次，是城市设计审查的重点。",
    "core": [
      "建筑轮廓与山体水系共同构成城市形象",
      "高度分区与视线通廊是塑造手段",
      "超高层扎堆破坏轮廓层次"
    ],
    "applications": [
      "城市设计高度分区与天际线专项规划",
      "滨水观景点视线通廊控制"
    ],
    "references": [
      "燕赵都市报：城市规划应充分考虑城市天际线容积率等方面的辩证关系",
      "台湾博硕士论文：都市天际线建构之研究"
    ],
    "sources": [
      "http://yzwb.sjzdaily.com.cn/yzwbpaper/pc/content/202107/15/content_50320.html",
      "https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi?o=dnclcdr&s=id=%22088NCKU0222047%22.&searchmode=basic"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "floor-area-ratio",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "green-building",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "城市设计",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "floor-area-ratio",
    "name": "容积率",
    "aliases": [
      "容积率FAR",
      "Floor Area Ratio",
      "建筑容积率"
    ],
    "field": "建筑与设计",
    "tags": [
      "规划",
      "指标",
      "开发强度"
    ],
    "difficulty": 2,
    "summary": "地块总建筑面积与用地面积之比，决定开发强度",
    "definition": "容积率指一定地块内地上总建筑面积与用地面积的比值（FAR，Floor Area Ratio），是控规衡量土地开发强度的核心指标。例如用地1公顷、容积率2.0，最多可建2万㎡建筑面积。容积率越高，建筑越密集、人口容量越大、配套压力越大：商业高密度区（CBD）可达5-10，住宅通常1.0-3.5，直接影响居住密度与舒适度。它与建筑密度、绿地率、建筑限高共同构成规划管控体系，报规阶段是多方博弈的焦点。",
    "core": [
      "总建筑面积÷用地面积",
      "决定开发强度与人口容量",
      "与建筑密度、绿地率、限高协同管控"
    ],
    "applications": [
      "控规编制确定地块开发强度上限",
      "房地产开发测算可售面积与货值"
    ],
    "references": [
      "燕赵都市报：城市规划应充分考虑城市天际线容积率等方面的辩证关系",
      "城市规划管理术语（国家建筑工程质量检验检测中心）"
    ],
    "sources": [
      "http://yzwb.sjzdaily.com.cn/yzwbpaper/pc/content/202107/15/content_50320.html",
      "https://gf.cabr-fire.com/m/article-9768.htm"
    ],
    "searchedAt": "2026-08-14",
    "domain": "建筑与设计",
    "relations": [
      {
        "type": "related",
        "target": "skyline",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "green-building",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "城市规划",
        "note": "",
        "confidence": 0.3
      }
    ]
  }
];
