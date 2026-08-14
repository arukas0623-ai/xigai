window.XIGAI = window.XIGAI || {};
window.XIGAI["汽车出行"] = [
  {
    "id": "bev",
    "name": "纯电",
    "aliases": [
      "纯电动汽车",
      "BEV",
      "Battery Electric Vehicle",
      "电动车"
    ],
    "field": "汽车出行",
    "tags": [
      "新能源",
      "动力形式",
      "三电"
    ],
    "difficulty": 1,
    "summary": "完全靠电池供电、电机驱动的汽车",
    "definition": "纯电动汽车（BEV，Battery Electric Vehicle）指动力100%来自动力电池储存的电能、由电机驱动行驶的车型：没有发动机、油箱和排气管，能量只能通过充电桩/换电补充。其核心是电池、电机、电控三电系统，电机效率普遍超过90%，远高于内燃机的30-40%，因此单位里程电费远低于油费。优点是零排放、结构简单、NVH表现好、加速平顺；短板是续航受电池能量密度限制、低温下续航衰减明显、补能时间仍长于加油。当前主流技术路线包括磷酸铁锂与三元锂电池、800V高压平台等。",
    "core": [
      "动力完全来自电池电能，无内燃机",
      "电机效率高、使用成本低、结构简单",
      "续航与补能速度是主要短板"
    ],
    "applications": [
      "城市通勤与家用代步的主力车型",
      "网约车、物流车等运营场景降本利器"
    ],
    "misconceptions": [
      "纯电只是新能源的一种，混动与增程也属于新能源，不能混为一谈"
    ],
    "references": [
      "EV、BEV、HEV、PHEV分别代表什么意思",
      "新能源汽车的各种常用术语解读"
    ],
    "sources": [
      "https://m.youcheyihou.com/news/42742",
      "https://news.yiche.com/hao/wenzhang/51610826"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "hybrid",
        "note": ""
      },
      {
        "type": "related",
        "target": "erev",
        "note": ""
      },
      {
        "type": "related",
        "target": "three-electric",
        "note": ""
      },
      {
        "type": "related",
        "target": "fast-charging",
        "note": ""
      },
      {
        "type": "related",
        "target": "energy-density",
        "note": ""
      },
      {
        "type": "related",
        "target": "0-100kmh",
        "note": ""
      },
      {
        "type": "related",
        "target": "drag-coefficient",
        "note": ""
      }
    ]
  },
  {
    "id": "hybrid",
    "name": "混动",
    "aliases": [
      "混合动力",
      "HEV",
      "PHEV",
      "插电混动",
      "油电混动",
      "Hybrid"
    ],
    "field": "汽车出行",
    "tags": [
      "新能源",
      "动力形式",
      "省油"
    ],
    "difficulty": 2,
    "summary": "内燃机+电机双动力源协同驱动的车型",
    "definition": "混动（Hybrid）指同时搭载内燃机和电机两套动力源的汽车，按能否外接充电分为HEV与PHEV两类。HEV（油电混动，如丰田THS）电池小、不能插枪充电，靠发动机发电与制动能量回收自充电，以降低油耗为目标；PHEV（插电混动）电池更大、可外接充电，短途纯电行驶、长途烧油，兼顾绿牌政策与无里程焦虑。按动力耦合方式分为串联、并联与混联（功率分流）三种构型，混联能让发动机和电机各自工作在高效区间，综合效率最高。",
    "core": [
      "双动力源协同，HEV不插电、PHEV可插电",
      "串联/并联/混联三种构型",
      "混联（功率分流）综合效率最高"
    ],
    "applications": [
      "PHEV适合有充电条件又想长途无焦虑的用户",
      "HEV适合无充电条件、想省油的燃油车替代"
    ],
    "misconceptions": [
      "混动不等于都能上绿牌免购置税，HEV通常不算新能源车"
    ],
    "references": [
      "插电混和增程分不清？一文给你来科普！",
      "插电混动和增程混动究竟区别在哪？"
    ],
    "sources": [
      "https://www.360che.com/tech/230314/179227_2.html",
      "https://aikahao.xcar.com.cn/item/1902420.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "erev",
        "note": ""
      },
      {
        "type": "related",
        "target": "bev",
        "note": ""
      },
      {
        "type": "related",
        "target": "three-electric",
        "note": ""
      },
      {
        "type": "related",
        "target": "transmission",
        "note": ""
      },
      {
        "type": "related",
        "target": "turbocharger",
        "note": ""
      }
    ]
  },
  {
    "id": "erev",
    "name": "增程式",
    "aliases": [
      "增程式电动车",
      "EREV",
      "增程",
      "增程混动",
      "Extended Range Electric Vehicle"
    ],
    "field": "汽车出行",
    "tags": [
      "新能源",
      "混动",
      "动力形式"
    ],
    "difficulty": 2,
    "summary": "发动机只发电、电机始终驱动的串联混动",
    "definition": "增程式电动汽车（EREV，Extended Range Electric Vehicle）本质是串联式混动：车轮始终由电机直接驱动，内燃机（称增程器）不参与驱动，只在电池电量低时启动发电，为电池充电或直接供电给电机。优点是机械结构简单、电机直驱平顺安静、市区工况效率高，且能加油补能、彻底消除里程焦虑，理想、问界等品牌主推此路线；缺点是高速巡航时能量经历“油→电→机械”多级转化，油耗偏高，且增程器占用空间与重量。",
    "core": [
      "增程器只发电、不驱动车轮",
      "电机全程直驱，市区效率高",
      "能加油补能、无里程焦虑，但高速油耗偏高"
    ],
    "applications": [
      "家庭长途出行与充电设施不完善地区的用户",
      "大空间家用SUV常见动力方案"
    ],
    "misconceptions": [
      "增程并非落后技术，而是串联混动构型，市区工况效率反而优于传统混动"
    ],
    "references": [
      "增程式与混动车型技术差异及适用场景全面解析",
      "插电混和增程分不清？一文给你来科普！"
    ],
    "sources": [
      "https://auto.zol.com.cn/1071/10715322.html",
      "https://www.360che.com/tech/230314/179227_2.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "hybrid",
        "note": ""
      },
      {
        "type": "related",
        "target": "bev",
        "note": ""
      },
      {
        "type": "related",
        "target": "three-electric",
        "note": ""
      }
    ]
  },
  {
    "id": "autonomy-levels",
    "name": "自动驾驶分级",
    "aliases": [
      "L0-L5",
      "驾驶自动化分级",
      "SAE分级",
      "智驾等级",
      "自动驾驶等级"
    ],
    "field": "汽车出行",
    "tags": [
      "自动驾驶",
      "智能驾驶",
      "行业标准"
    ],
    "difficulty": 3,
    "summary": "按系统承担驾驶责任划分的L0-L5等级标准",
    "definition": "自动驾驶分级是按“系统承担驾驶任务与责任的程度”划分的等级标准，国际主流采用美国SAE J3016标准（NHTSA亦采用），中国对应国标GB/T 40429-2021《汽车驾驶自动化分级》。L0-L2属于驾驶辅助：L2即组合驾驶辅助，系统同时控制横向与纵向，但驾驶员须全程监控并随时接管；L3为有条件自动驾驶，系统承担驾驶责任但驾驶员须响应接管请求；L4为高度自动驾驶，限定场景内无需人类干预；L5为完全自动驾驶。目前量产车普遍处于L2/L2+，L3与L4仍处于试点与验证阶段。",
    "core": [
      "L0-L2为驾驶辅助，需人全程监管",
      "L3起系统承担主要驾驶责任",
      "中国采用国标GB/T 40429-2021，与SAE对应"
    ],
    "applications": [
      "车企宣传的“L2+智驾”“城市NOA”功能",
      "Robotaxi与园区物流的L4级试点运营"
    ],
    "misconceptions": [
      "目前没有真正量产落地的L4级乘用车，“L4级能力”多指特定限定场景"
    ],
    "references": [
      "标准解读 | 三分钟看懂汽车驾驶自动化分级",
      "一篇文章看懂“L0-L5”"
    ],
    "sources": [
      "https://www.catarc.ac.cn/detail/4ec661f63d82415da36a65411049246b",
      "https://qichejingwei.com/article-12701.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "lidar",
        "note": ""
      },
      {
        "type": "related",
        "target": "mmwave-radar",
        "note": ""
      },
      {
        "type": "related",
        "target": "awd-4wd",
        "note": ""
      }
    ]
  },
  {
    "id": "lidar",
    "name": "激光雷达",
    "aliases": [
      "LiDAR",
      "激光探测与测距",
      "激光雷达传感器"
    ],
    "field": "汽车出行",
    "tags": [
      "自动驾驶",
      "传感器",
      "感知"
    ],
    "difficulty": 3,
    "summary": "发射激光生成3D点云的高精度测距传感器",
    "definition": "激光雷达（LiDAR，Light Detection and Ranging）通过发射激光束并测量回波时间或相位差，计算目标距离并扫描生成高精度三维点云，可重建周围环境的轮廓，是自动驾驶感知体系中精度最高的传感器。按扫描方式分为机械式、半固态（转镜/MEMS微振镜）与纯固态（OPA相控阵、Flash面阵）三类，前几年机械式价格高达数万元，如今半固态已下探至千元级。其优势是测距可达数百米、厘米级精度、不受环境光影响；劣势是雨雾天气衰减明显、点云数据量大需强算力处理。",
    "core": [
      "发射激光测距生成3D点云，精度厘米级",
      "机械式/半固态/纯固态三代技术",
      "成本已大幅下探但仍高于摄像头"
    ],
    "applications": [
      "城市NOA等高阶智驾的感知主力",
      "Robotaxi无人出租车的标配传感器"
    ],
    "misconceptions": [
      "激光雷达并非高阶智驾必需，纯视觉方案（如特斯拉）同样能实现智驾"
    ],
    "references": [
      "自动驾驶中超声波雷达、激光雷达、毫米波雷达有何区别？",
      "毫米波雷达VS激光雷达：谁是未来智能感知的主角"
    ],
    "sources": [
      "https://m.ofweek.com/auto/2025-09/ART-70109-8500-30669959.html",
      "https://rf.eefocus.com/article/id-338938"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "mmwave-radar",
        "note": ""
      },
      {
        "type": "related",
        "target": "autonomy-levels",
        "note": ""
      },
      {
        "type": "related",
        "target": "摄像头",
        "note": ""
      },
      {
        "type": "related",
        "target": "robotaxi",
        "note": ""
      }
    ]
  },
  {
    "id": "mmwave-radar",
    "name": "毫米波雷达",
    "aliases": [
      "毫米波雷达传感器",
      "MMW Radar",
      "Radar",
      "77GHz雷达"
    ],
    "field": "汽车出行",
    "tags": [
      "自动驾驶",
      "传感器",
      "ADAS"
    ],
    "difficulty": 3,
    "summary": "用毫米波电磁波测距测速的全天候传感器",
    "definition": "毫米波雷达工作在毫米波段（常用24GHz与77GHz，波长1-10mm），通过发射电磁波并利用多普勒效应测量目标的距离、相对速度与方位角，是ADAS（高级驾驶辅助系统）最核心的传感器。其最大优势是全天候工作：不受光线、雨雾、烟尘影响，且能直接测出径向速度、成本低，广泛用于ACC自适应巡航、AEB自动紧急制动、BSD盲区监测、变道辅助等功能。缺点是角分辨率低，难以识别静止物体和区分物体类别，因此常与摄像头、激光雷达融合；近年出现的4D成像雷达正通过俯仰维信息提升性能。",
    "core": [
      "毫米波电磁波测距测速，可直测径向速度",
      "全天候工作、成本低，ADAS标配",
      "分辨率低，需与摄像头/激光雷达融合"
    ],
    "applications": [
      "ACC、AEB、BSD等ADAS功能的传感器",
      "4D成像雷达用于提升目标识别与复杂场景能力"
    ],
    "misconceptions": [
      "毫米波雷达不是激光雷达的廉价替代品，两者原理互补、分工不同"
    ],
    "references": [
      "自动驾驶中超声波雷达、激光雷达、毫米波雷达有何区别？",
      "感知技术的“下一代革命”——4D成像雷达"
    ],
    "sources": [
      "https://m.ofweek.com/auto/2025-09/ART-70109-8500-30669959.html",
      "https://www.afdata.org.cn/CuttingEdge/37a0da13-386b-4116-a3a8-3d7bdafb8b18"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "lidar",
        "note": ""
      },
      {
        "type": "related",
        "target": "autonomy-levels",
        "note": ""
      },
      {
        "type": "related",
        "target": "超声波雷达",
        "note": ""
      }
    ]
  },
  {
    "id": "three-electric",
    "name": "三电系统",
    "aliases": [
      "三电",
      "电池+电机+电控",
      "电驱动系统"
    ],
    "field": "汽车出行",
    "tags": [
      "新能源",
      "核心技术",
      "三电"
    ],
    "difficulty": 2,
    "summary": "动力电池、驱动电机、电控的总称",
    "definition": "三电系统是新能源汽车最核心的技术总成，指动力电池、驱动电机和电控系统三大部分。动力电池（Pack）负责储能，主流路线为磷酸铁锂与三元锂；驱动电机将电能转化为机械能，量产主流为永磁同步电机；电控包括整车控制器（VCU）、电机控制器（MCU）和电池管理系统（BMS），负责能量分配、电机驱动与电池安全监控。三电的性能与可靠性直接决定续航、动力、安全与整车成本，占纯电动车成本的40%以上，是新能源车企与电池供应商的核心竞争壁垒。",
    "core": [
      "电池+电机+电控三大总成",
      "决定续航、动力、安全与整车成本",
      "BMS负责电池安全与寿命管理"
    ],
    "applications": [
      "车企“三电终身质保”的核心卖点",
      "电池/电机供应商掌握产业链话语权"
    ],
    "misconceptions": [
      "三电系统不包括车载充电机、空调等低压附件，仅指电池、电机、电控"
    ],
    "references": [
      "从堆电池到轻量化：新能源车三电系统能耗与车重参数全拆解",
      "新能源渗透率62.9%创新高，三电技术重构市场格局解读"
    ],
    "sources": [
      "https://siteapp.news18a.com/m/news/storys_262785.html",
      "http://m.news18a.com/news/storys_269070.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "energy-density",
        "note": ""
      },
      {
        "type": "related",
        "target": "bev",
        "note": ""
      },
      {
        "type": "related",
        "target": "fast-charging",
        "note": ""
      },
      {
        "type": "related",
        "target": "hybrid",
        "note": ""
      },
      {
        "type": "related",
        "target": "erev",
        "note": ""
      },
      {
        "type": "related",
        "target": "battery-swap",
        "note": ""
      }
    ]
  },
  {
    "id": "energy-density",
    "name": "电池能量密度",
    "aliases": [
      "能量密度",
      "Wh/kg",
      "质量能量密度",
      "体积能量密度"
    ],
    "field": "汽车出行",
    "tags": [
      "电池",
      "续航",
      "新能源"
    ],
    "difficulty": 3,
    "summary": "单位质量/体积电池储存电能的指标",
    "definition": "电池能量密度指单位质量或单位体积内储存的电能，常用Wh/kg（质量能量密度）与Wh/L（体积能量密度）表示，是决定电动车续航与轻量化的关键指标。目前量产磷酸铁锂电芯约160-200Wh/kg，三元锂电芯约200-300Wh/kg，宁德时代第三代麒麟电池已达280Wh/kg级并支持6分钟快充。能量密度越高，同等电池重量下续航越长，但高镍三元等高能量路线与热失控安全性存在权衡；车企通过CTP（电芯直接成组）、CTC（电芯到底盘）等结构创新，将电芯密度尽可能保留到整车层面。",
    "core": [
      "Wh/kg衡量储能水平，越高续航越长",
      "三元锂密度高于磷酸铁锂，但成本与安全有取舍",
      "CTP/CTC结构创新提升系统级密度"
    ],
    "applications": [
      "选车时对比电池类型与续航水平",
      "电池厂商以“能量密度”作为旗舰技术指标发布"
    ],
    "misconceptions": [
      "电芯能量密度≠整车可用密度，成组封装通常损失15%-30%"
    ],
    "references": [
      "宁德时代发布第三代麒麟三元电池，280Wh/kg高密快充",
      "三元锂和磷酸铁锂电池哪个能量密度高"
    ],
    "sources": [
      "https://auto.zol.com.cn/1169/11696626.html",
      "https://www.pconline.com.cn/ask/48396.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "three-electric",
        "note": ""
      },
      {
        "type": "related",
        "target": "bev",
        "note": ""
      },
      {
        "type": "related",
        "target": "fast-charging",
        "note": ""
      },
      {
        "type": "related",
        "target": "battery-swap",
        "note": ""
      }
    ]
  },
  {
    "id": "fast-charging",
    "name": "快充",
    "aliases": [
      "快速充电",
      "直流快充",
      "超充",
      "800V快充"
    ],
    "field": "汽车出行",
    "tags": [
      "新能源",
      "补能",
      "充电"
    ],
    "difficulty": 2,
    "summary": "以高功率直流电快速补充电池电量的方式",
    "definition": "快充指以较高功率的直流电为动力电池快速补充电量的补能方式，区别于家用的交流慢充（通常7kW左右）。充电功率越大速度越快：常见60-120kW快充桩约半小时可将电量补至80%；搭载800V高压平台配合超充桩可达350-600kW，实现“充电5分钟、续航200公里”。实际速度受电池充电倍率（C-rate）、热管理系统、充电桩功率与协议握手共同制约，行业普遍以20%-80%区间衡量充电时间，末端因恒流转恒压保护会明显降功率。",
    "core": [
      "直流高功率充电，功率越大越快",
      "800V平台+超充桩实现“5分钟200公里”",
      "20%-80%区间充电效率最高，末段自动降功率"
    ],
    "applications": [
      "高速公路服务区超充站布局",
      "800V车型的快充能力作为核心卖点宣传"
    ],
    "misconceptions": [
      "快充并非匀速，“充到100%”很慢，涓流保护使末段功率大幅下降"
    ],
    "references": [
      "宁德时代发布26号巧克力换电块 搭载800V高压架构",
      "宁德时代巧克力26#换电电池发布，99秒极速换电时代来临"
    ],
    "sources": [
      "https://finance.ifeng.com/c/8sVng8M36jk",
      "https://www.d1ev.com/newsflash/296191"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "battery-swap",
        "note": ""
      },
      {
        "type": "related",
        "target": "energy-density",
        "note": ""
      },
      {
        "type": "related",
        "target": "bev",
        "note": ""
      },
      {
        "type": "related",
        "target": "three-electric",
        "note": ""
      }
    ]
  },
  {
    "id": "battery-swap",
    "name": "换电",
    "aliases": [
      "换电模式",
      "换电站",
      "电池更换"
    ],
    "field": "汽车出行",
    "tags": [
      "新能源",
      "补能",
      "电池"
    ],
    "difficulty": 2,
    "summary": "直接更换整块电池包的极速补能方式",
    "definition": "换电指在换电站内将车辆亏电的电池包整体拆下、换上满电电池包的补能方式，全过程约1-5分钟，比快充更快且不加剧电池衰减。换电可支持“车电分离”（电池租赁BAAS）模式，大幅降低购车门槛，也便于电池集中管理、梯次利用与统一回收。国内以蔚来的换电网络和宁德时代“巧克力换电块”为代表，后者已实现99秒极速换电并搭载800V架构。主要短板是电池规格标准化困难、换电站重资产投入大、不同车型电池包难以通用。",
    "core": [
      "整包更换数分钟完成，比快充更快",
      "支持车电分离（BAAS），降低购车门槛",
      "标准化难与重资产投入是最大瓶颈"
    ],
    "applications": [
      "蔚来等品牌的换电站网络",
      "网约车、出租车等高频补能运营场景"
    ],
    "misconceptions": [
      "换电并非过时路线，它与超快充是互补关系，各有适用场景"
    ],
    "references": [
      "宁德时代巧克力26#换电电池发布，99秒极速换电时代来临",
      "宁德时代发布26号巧克力换电块 搭载800V高压架构"
    ],
    "sources": [
      "https://www.d1ev.com/newsflash/296191",
      "https://www.sohu.com/a/1012643463_115433"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "fast-charging",
        "note": ""
      },
      {
        "type": "related",
        "target": "energy-density",
        "note": ""
      },
      {
        "type": "related",
        "target": "three-electric",
        "note": ""
      }
    ]
  },
  {
    "id": "0-100kmh",
    "name": "百公里加速",
    "aliases": [
      "零百加速",
      "0-100km/h加速",
      "百公里加速时间"
    ],
    "field": "汽车出行",
    "tags": [
      "性能",
      "动力",
      "参数"
    ],
    "difficulty": 1,
    "summary": "从静止加速到100km/h所需的最短时间",
    "definition": "百公里加速指车辆从静止状态全力加速到100km/h（部分市场为60mph）所需的最短时间，单位秒，是衡量动力性能最直观的指标。燃油家用车通常在8-12秒，性能车5-7秒；电动车因电机可瞬间输出峰值扭矩，普遍能做到3-5秒，旗舰车型甚至进入“2秒级”（如Model S Plaid约2.1秒）。实际成绩受电机功率、车重、轮胎抓地力、路面条件及弹射起步模式等因素影响。需要提醒的是，零百快并不等于日常好开，中段再加速能力与操控性同样重要。",
    "core": [
      "0-100km/h最短时间，衡量起步动力",
      "电动车电机瞬时扭矩优势明显",
      "受轮胎抓地、路面、电量影响"
    ],
    "applications": [
      "性能车“2秒俱乐部”宣传话术",
      "购车时对比动力性能的核心参数"
    ],
    "misconceptions": [
      "零百快不代表操控好，且电池电量低时电驱加速性能会明显衰减"
    ],
    "references": [
      "汽车的零百加速时间是怎么测的？影响因素有哪些？",
      "0-100加速时间"
    ],
    "sources": [
      "https://chejiahao.autohome.com.cn/info/10641710",
      "https://yp.xcar.com.cn/wiki/detail_579.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "drag-coefficient",
        "note": ""
      },
      {
        "type": "related",
        "target": "chassis-tuning",
        "note": ""
      },
      {
        "type": "related",
        "target": "bev",
        "note": ""
      }
    ]
  },
  {
    "id": "drag-coefficient",
    "name": "风阻系数",
    "aliases": [
      "Cd值",
      "空气阻力系数",
      "风阻Cd",
      "Coefficient of Drag"
    ],
    "field": "汽车出行",
    "tags": [
      "空气动力学",
      "能耗",
      "参数"
    ],
    "difficulty": 2,
    "summary": "衡量车身空气阻力大小的无量纲系数",
    "definition": "风阻系数（Cd，Coefficient of Drag）是衡量车身空气动力学性能的无量纲参数，表示物体在空气中运动所受阻力的大小，数值越小风阻越低。一般轿车Cd值在0.26-0.30之间，优秀新能源车可达0.19-0.22（如小米SU7为0.195）。由于空气阻力与车速的平方成正比，高速行驶时风阻占总阻力的70%以上，直接决定高速续航与能耗水平。降低Cd的手段包括低趴流线造型、隐藏式门把手、低风阻轮毂、平整化底盘与主动进气格栅等细节设计。",
    "core": [
      "Cd值越小、空气阻力越低",
      "高速时风阻占总阻力大头，直接影响高速续航",
      "造型与细节设计（隐藏把手、低风阻轮毂）决定数值"
    ],
    "applications": [
      "新能源车企比拼“0.19x”级Cd值",
      "高速巡航场景下优化能耗与续航"
    ],
    "misconceptions": [
      "Cd低不等于外观好看，且低速行驶时风阻影响很小，主要影响高速工况"
    ],
    "references": [
      "钱是大风刮来的，好车是“吹”出来的",
      "运动型轿车开发全流程解析：从设计到性能调优"
    ],
    "sources": [
      "https://www.maiche.com/news/detail/2553244.html",
      "https://developer.baidu.com/article/detail.html?id=7551533"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "0-100kmh",
        "note": ""
      },
      {
        "type": "related",
        "target": "bev",
        "note": ""
      },
      {
        "type": "related",
        "target": "chassis-tuning",
        "note": ""
      }
    ]
  },
  {
    "id": "chassis-tuning",
    "name": "底盘调校",
    "aliases": [
      "底盘调教",
      "悬挂调校",
      "悬架标定",
      "底盘标定"
    ],
    "field": "汽车出行",
    "tags": [
      "操控",
      "底盘",
      "工程"
    ],
    "difficulty": 3,
    "summary": "对悬挂转向制动参数标定以平衡操控与舒适",
    "definition": "底盘调校指工程师对悬挂、转向、制动、轮胎等底盘部件的参数进行标定与匹配，使整车在操控性、舒适性与稳定性之间取得平衡的工程过程。调校内容涵盖弹簧刚度、减振器阻尼、防倾杆与衬套刚度、转向手感（助力曲线）、四轮定位参数、制动线性度等，需经多轮主观驾评与客观测试（麋鹿测试、绕桩、NVH、耐久测试）迭代优化。同样的硬件，不同调校风格可以带来天壤之别的驾驶感受，因此底盘调校被戏称为车企的“玄学”，是长期工程数据的积累。",
    "core": [
      "悬挂/转向/制动等参数的系统标定",
      "舒适性与操控性的权衡是核心",
      "需主观驾评与客观测试（麋鹿、绕桩）多轮迭代"
    ],
    "applications": [
      "同一平台推出运动版与舒适版差异化调校",
      "以麋鹿测试成绩衡量车辆的极限操控"
    ],
    "misconceptions": [
      "硬件好≠好开，调校软硬没有绝对优劣，只取决于车型定位与目标用户"
    ],
    "references": [
      "运动型轿车开发全流程解析：从设计到性能调优"
    ],
    "sources": [
      "https://developer.baidu.com/article/detail.html?id=7551533"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "0-100kmh",
        "note": ""
      },
      {
        "type": "related",
        "target": "awd-4wd",
        "note": ""
      },
      {
        "type": "related",
        "target": "drag-coefficient",
        "note": ""
      }
    ]
  },
  {
    "id": "turbocharger",
    "name": "涡轮增压",
    "aliases": [
      "Turbo",
      "涡轮",
      "T",
      "废气涡轮增压"
    ],
    "field": "汽车出行",
    "tags": [
      "发动机",
      "动力",
      "燃油车"
    ],
    "difficulty": 2,
    "summary": "利用废气驱动涡轮压缩进气提升动力的技术",
    "definition": "涡轮增压（Turbocharger）利用发动机排出的高温废气推动涡轮旋转，带动同轴压气机压缩进气，提高进入气缸的空气密度，使发动机在不增加排量的情况下大幅提升功率与扭矩，是燃油车“小排量大动力”的主流技术，型号常以字母T标注（如1.5T、2.0T）。其固有缺点是“涡轮迟滞”：低转速时废气能量不足、增压介入迟缓，需拉高转速才有明显推背感，现代技术通过小惯量涡轮、可变截面涡轮（VGT）和双涡管设计加以缓解。需要澄清的是，涡轮增压并非一定省油，它本质是压榨动力。",
    "core": [
      "废气驱动涡轮压缩进气，不增排量提升动力",
      "存在涡轮迟滞，靠VGT等新技术缓解",
      "涡轮本质是压榨动力，不一定省油"
    ],
    "applications": [
      "家用车“1.5T/2.0T”黄金排量普及",
      "德系品牌涡轮增压车型广泛搭载"
    ],
    "misconceptions": [
      "“带T省油”是常见误区，实际油耗取决于工况与驾驶习惯，涡轮主要换的是动力"
    ],
    "references": [
      "涡轮增压和机械增压讲解"
    ],
    "sources": [
      "https://chejiahao.autohome.com.cn/info/4556452"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "transmission",
        "note": ""
      },
      {
        "type": "related",
        "target": "hybrid",
        "note": ""
      },
      {
        "type": "related",
        "target": "awd-4wd",
        "note": ""
      }
    ]
  },
  {
    "id": "transmission",
    "name": "变速箱",
    "aliases": [
      "变速器",
      "AT",
      "DCT",
      "CVT",
      "手动变速箱"
    ],
    "field": "汽车出行",
    "tags": [
      "传动系统",
      "动力",
      "燃油车"
    ],
    "difficulty": 2,
    "summary": "调节发动机转速与车速匹配关系的装置",
    "definition": "变速箱（Transmission）是动力系统中调节发动机转速与车速匹配关系的装置，让发动机始终工作在高效、有力的转速区间。主要类型：手动MT、自动AT（液力变矩器+行星齿轮组）、双离合DCT（两套离合器预啮合，换挡快）、CVT无级变速（钢带/链条传动，平顺省油），以及电动车常用的固定齿比单速减速器——电机扭矩平台宽，无需换挡。挡位数（6AT/8AT/9AT）影响平顺性与油耗，但调校匹配比挡位数量更重要；DCT运动、CVT平顺、AT均衡是基本认知。",
    "core": [
      "匹配发动机转速与车速，保证高效区间",
      "MT/AT/DCT/CVT各有特性，电车用单速",
      "调校匹配比挡位数更重要"
    ],
    "applications": [
      "选燃油车时对比变速箱类型与挡位数",
      "DCT强调运动换挡、CVT强调平顺省油"
    ],
    "misconceptions": [
      "挡位越多并不等于越好，变速箱的调校匹配水平比挡位数量更关键"
    ],
    "references": [
      "汽车传动系统 (Powertrain / Drivetrain)",
      "机械式传动系"
    ],
    "sources": [
      "https://www.bitauto.my/zh/wiki/汽车传动系统%20(Powertrain%20%2F%20Drivetrain)/",
      "https://baike.baidu.com/item/机械式传动系/16766537"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "turbocharger",
        "note": ""
      },
      {
        "type": "related",
        "target": "awd-4wd",
        "note": ""
      },
      {
        "type": "related",
        "target": "hybrid",
        "note": ""
      }
    ]
  },
  {
    "id": "awd-4wd",
    "name": "四驱",
    "aliases": [
      "四轮驱动",
      "AWD",
      "4WD",
      "全时四驱",
      "适时四驱",
      "分时四驱"
    ],
    "field": "汽车出行",
    "tags": [
      "驱动形式",
      "越野",
      "操控"
    ],
    "difficulty": 2,
    "summary": "四个车轮都能获得驱动力的驱动形式",
    "definition": "四驱指四个车轮都能获得驱动力的驱动形式，按介入方式分为三类：全时四驱（AWD，任何时候四轮都有动力）、适时四驱（日常前驱或后驱，侦测到打滑时自动接通四驱）、分时四驱（驾驶员手动切换两驱/四驱，常见于硬派越野）。四驱能提升急加速时的抓地力、雨雪湿滑路面的稳定性和越野脱困能力，高端车型还配备扭矩矢量控制，可主动分配左右轮动力。电动车采用前后双电机实现“电动四驱”，响应更快且无需中央传动轴；代价是自重与能耗增加，且四驱不等于越野能力强。",
    "core": [
      "全时/适时/分时三类四驱形态",
      "提升加速抓地、湿滑稳定与脱困能力",
      "电车双电机四驱响应快、无传动轴"
    ],
    "applications": [
      "北方冰雪地区用户选四驱提升安全性",
      "硬派越野车采用分时四驱+差速锁"
    ],
    "misconceptions": [
      "四驱不等于越野能力强，脱困还需差速锁、离地间隙、轮胎等配合"
    ],
    "references": [
      "别以为四驱就能越野，适时、分时、全时四驱该怎么选？",
      "什么是分时、全时、适时四驱？别再弄混了"
    ],
    "sources": [
      "https://news.yiche.com/hao/wenzhang/57420339/",
      "https://chejiahao.autohome.com.cn/info/7020208"
    ],
    "searchedAt": "2026-08-14",
    "domain": "汽车出行",
    "relations": [
      {
        "type": "related",
        "target": "turbocharger",
        "note": ""
      },
      {
        "type": "related",
        "target": "transmission",
        "note": ""
      },
      {
        "type": "related",
        "target": "chassis-tuning",
        "note": ""
      },
      {
        "type": "related",
        "target": "autonomy-levels",
        "note": ""
      }
    ]
  }
];
