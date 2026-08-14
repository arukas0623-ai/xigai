window.XIGAI = window.XIGAI || {};
window.XIGAI["网络安全"] = [
  {
    "id": "firewall",
    "name": "防火墙",
    "aliases": [
      "Firewall",
      "边界防护设备",
      "墙"
    ],
    "tags": [
      "边界防护",
      "访问控制",
      "基础设施"
    ],
    "difficulty": 1,
    "summary": "基于安全规则过滤流量的边界防护设备",
    "core": [
      "基于五元组或应用层规则过滤流量",
      "NGFW 增加 DPI 与应用识别能力",
      "主要防外部攻击，对内部威胁防护有限"
    ],
    "applications": [
      "企业出口部署 NGFW 做统一边界管控",
      "云安全组/安全网关实现虚拟化环境东西向隔离"
    ],
    "misconceptions": [
      "装了防火墙就安全了——它拦不住钓鱼、内鬼与绕过策略的加密隧道流量"
    ],
    "references": [
      "网络安全8个名词解释",
      "零信任作为安全策略"
    ],
    "sources": [
      "https://www.cloudbility.com/club/14433.html#respond",
      "https://learn.microsoft.com/zh-cn/training/modules/zero-trust-introduction/zero-trust-security-strategy"
    ],
    "definition": "防火墙是部署在可信与不可信网络（如内网与互联网）边界的安全设备或软件，依据预设安全策略对流经的流量进行过滤与阻断。传统防火墙基于五元组（源/目的 IP、源/目的端口、协议）做静态包过滤；下一代防火墙（NGFW）叠加深度包检测（DPI）、应用识别、入侵防御（IPS）等能力，可识别并管控具体应用行为。它防不住源于内网内部的横向移动，属于“纵深防御”的第一道关口。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "vpn",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "zero-trust",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ddos",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "siem",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "vpn",
    "name": "VPN",
    "aliases": [
      "虚拟专用网络",
      "Virtual Private Network",
      "隧道"
    ],
    "tags": [
      "远程接入",
      "加密隧道",
      "隐私保护"
    ],
    "difficulty": 2,
    "summary": "在公网上建立加密隧道的远程接入技术",
    "core": [
      "在公共网络上建立加密隧道传输数据",
      "常用协议：IPsec、OpenVPN、WireGuard",
      "保护传输链路而非端点安全"
    ],
    "applications": [
      "员工远程办公接入企业内网资源",
      "分支机构通过站点到站点 VPN 互联"
    ],
    "misconceptions": [
      "VPN 等于完全匿名——运营商仍能记录连接时间与流量特征"
    ],
    "references": [
      "探索虚拟专用网络",
      "VPN虚拟专用网络"
    ],
    "sources": [
      "https://learn.microsoft.com/zh-cn/training/modules/explore-remote-access/2-explore-virtual-private-networks",
      "https://developer.aliyun.com/article/1662653"
    ],
    "definition": "VPN 即虚拟专用网络（Virtual Private Network），通过在公共网络上建立加密隧道，让远程用户或分支机构安全接入企业内网，实现“公网私有化”传输。核心技术是隧道协议（IPsec、OpenVPN、WireGuard 等）与加密封装，保障机密性、完整性与来源可信。常见分远程访问 VPN 与站点到站点 VPN 两类。VPN 只保护传输链路，不保护端点；商业 VPN 也做不到匿名，运营商仍能看到流量元数据。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "firewall",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "zero-trust",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "two-factor-authentication",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "mitm",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "homomorphic-encryption",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "zero-trust",
    "name": "零信任",
    "aliases": [
      "Zero Trust",
      "零信任架构",
      "ZTA",
      "永不信任，始终验证"
    ],
    "tags": [
      "安全架构",
      "身份认证",
      "最小权限"
    ],
    "difficulty": 3,
    "summary": "默认不信任、始终验证的安全架构模型",
    "core": [
      "默认不信任任何主体，每次访问动态验证",
      "支柱：身份认证、最小权限、微分段",
      "落地参考 NIST SP 800-207 框架"
    ],
    "applications": [
      "远程办公场景用 ZTNA 替代传统 VPN",
      "多云与混合云环境下实施微隔离"
    ],
    "misconceptions": [
      "零信任是某个产品——它是一套架构原则，需多组件协同落地"
    ],
    "references": [
      "零信任作为安全策略",
      "网络安全等级保护2.0标准解读"
    ],
    "sources": [
      "https://learn.microsoft.com/zh-cn/training/modules/zero-trust-introduction/zero-trust-security-strategy",
      "https://met.muc.edu.cn/info/1021/2839.htm"
    ],
    "definition": "零信任（Zero Trust）是“永不信任、始终验证”的安全模型，核心假设是网络边界已被攻破、内网与外网同样危险，因此不对任何主体（人、设备、应用）默认授信，每次访问都基于身份、设备状态、环境与行为动态授权。三大支柱是身份与设备认证、最小权限、网络微分段，常结合 SDP、IAM、微隔离落地。它不是单一产品，而是一套架构原则（参考 NIST SP 800-207），落地依赖身份治理、设备管理与持续监控体系。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "vpn",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "two-factor-authentication",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "soc",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "data-breach",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "firewall",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "honeypot",
    "name": "蜜罐",
    "aliases": [
      "Honeypot",
      "诱捕系统",
      "蜜网",
      "Honeynet"
    ],
    "tags": [
      "主动防御",
      "威胁情报",
      "诱捕"
    ],
    "difficulty": 3,
    "summary": "伪装诱饵系统，诱捕并记录攻击行为",
    "core": [
      "以假目标诱捕并记录攻击行为",
      "蜜罐本身无真实数据，专供研究",
      "多个蜜罐组成蜜网欺骗防御体系"
    ],
    "applications": [
      "在 DMZ 区部署高交互蜜罐收集 0day 攻击样本",
      "金融行业用蜜罐系统溯源内网攻击者"
    ],
    "misconceptions": [
      "蜜罐能防住攻击——它主要作用是观测与拖延，防御仍靠其他手段"
    ],
    "references": [
      "蜜罐HoneyPot 轻松诱捕黑客",
      "关于蜜罐你不知道的事"
    ],
    "sources": [
      "https://safe.it168.com/a2009/0629/5968/000000596894_1.shtml",
      "https://www.anquanke.com/post/id/273209"
    ],
    "definition": "蜜罐（Honeypot）是安全团队故意部署的“诱饵”系统或服务——伪装成数据库、Web 应用、SSH 服务等有价值目标，本身不含真实业务数据，专门吸引攻击者触碰。攻击者一旦访问，其手法、工具、命令与攻击链会被完整记录，供分析威胁情报、研究攻击行为并拖延真实目标被攻击的时间。多个蜜罐组成蜜网（Honeynet），配以流量重定向与数据捕获形成欺骗防御体系；局限是只能捕获主动触碰诱饵的攻击者。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "penetration-testing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "red-team",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "soc",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "zero-day",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "blue-team",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "sandbox",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "ddos",
    "name": "DDoS",
    "aliases": [
      "分布式拒绝服务攻击",
      "Distributed Denial of Service",
      "流量攻击",
      "打瘫"
    ],
    "tags": [
      "可用性攻击",
      "僵尸网络",
      "流量洪峰"
    ],
    "difficulty": 3,
    "summary": "借僵尸网络发动海量请求打瘫目标服务",
    "core": [
      "借僵尸网络发动海量请求耗尽目标资源",
      "分流量型、应用层型、慢速型三类",
      "反射放大可把流量放大几十到几万倍"
    ],
    "applications": [
      "游戏、金融站点接入高防 IP/流量清洗服务",
      "用 CDN 与边缘节点分散攻击压力"
    ],
    "misconceptions": [
      "DDoS 是黑客入侵——它只是让服务不可用，未必入侵系统"
    ],
    "references": [
      "万字长文 | 从DVWA靶场到EdgeOne，探索SQL注入、XSS、DDoS的攻击原理和防护",
      "网络安全常见攻击与防御"
    ],
    "sources": [
      "https://cloud.tencent.cn/developer/article/2440531?from_column=20421&from=20421",
      "https://developer.aliyun.com/article/1728498"
    ],
    "definition": "DDoS（Distributed Denial of Service）指攻击者利用僵尸网络（Botnet）中大量被控“肉鸡”同时向目标发送请求，耗尽 CPU、内存或带宽资源，服务不可用。分流量型（SYN/UDP Flood）、应用层（HTTP Flood、CC）与慢速攻击（Slowloris）。防御靠流量清洗、CDN 分散压力与限速验证码；反射放大（如 NTP、Memcached）能把流量放大数十至数万倍。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "firewall",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "brute-force",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "soc",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "sandbox",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "sql-injection",
    "name": "SQL注入",
    "aliases": [
      "SQL Injection",
      "SQLi",
      "注入攻击"
    ],
    "tags": [
      "Web安全",
      "注入攻击",
      "OWASP"
    ],
    "difficulty": 3,
    "summary": "拼恶意SQL进参数操纵数据库执行",
    "core": [
      "把恶意 SQL 拼进输入参数使数据库执行非预期语句",
      "典型：Union 注入、布尔/时间盲注",
      "防护首选预编译参数化查询"
    ],
    "applications": [
      "渗透测试中手工验证注入点并利用",
      "研发规范强制 ORM/预编译语句防注入"
    ],
    "misconceptions": [
      "加了 WAF 就万无一失——绕过 WAF 的编码变种仍层出不穷，根除靠编码层修复"
    ],
    "references": [
      "万字长文 | 从DVWA靶场到EdgeOne，探索SQL注入、XSS、DDoS的攻击原理和防护",
      "深入理解CSRF、XSS、SQL注入、DDOS攻击及其预防"
    ],
    "sources": [
      "https://cloud.tencent.cn/developer/article/2440531?from_column=20421&from=20421",
      "https://developer.baidu.com/article/details/3003736"
    ],
    "definition": "SQL 注入（SQL Injection）是最经典的 Web 攻击手法之一：攻击者把恶意 SQL 语句拼进用户输入参数（URL、表单等），后端若直接拼接查询而不做参数化处理，数据库就会执行攻击者构造的语句，导致越权读取、篡改、删除数据，甚至可执行系统命令。常见类型有联合查询（Union）、布尔/时间盲注、报错注入与堆叠注入。防御核心是预编译参数化查询、输入白名单校验与最小数据库权限，WAF 只能补充拦截。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "xss",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "penetration-testing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "brute-force",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "data-breach",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "xss",
    "name": "XSS",
    "aliases": [
      "跨站脚本攻击",
      "Cross-Site Scripting",
      "XSS跨站"
    ],
    "tags": [
      "Web安全",
      "客户端攻击",
      "OWASP"
    ],
    "difficulty": 3,
    "summary": "向网页注入恶意脚本在浏览器中执行",
    "core": [
      "在受害者浏览器执行恶意脚本窃取会话",
      "三类：存储型、反射型、DOM 型",
      "防御靠输出编码、CSP、HttpOnly Cookie"
    ],
    "applications": [
      "Web 漏洞扫描与渗透测试必测项",
      "上线前用 CSP 与编码框架默认转义降低风险"
    ],
    "misconceptions": [
      "XSS 只影响用户浏览器、危害小——存储型 XSS 可批量劫持账号甚至形成蠕虫"
    ],
    "references": [
      "深入理解CSRF、XSS、SQL注入、DDOS攻击及其预防",
      "万字长文 | 从DVWA靶场到EdgeOne，探索SQL注入、XSS、DDoS的攻击原理和防护"
    ],
    "sources": [
      "https://developer.baidu.com/article/details/3003736",
      "https://cloud.tencent.cn/developer/article/2440531?from_column=20421&from=20421"
    ],
    "definition": "XSS（Cross-Site Scripting，跨站脚本攻击）指攻击者把恶意 JavaScript 注入网页，在受害者浏览器中执行，窃取会话或劫持账号。分三类：存储型 XSS（脚本持久化于服务器，所有访问者中招，危害最大）、反射型 XSS（经 URL 参数反射，需诱导点击）与 DOM 型 XSS（纯前端触发）。防御要点是输出编码（按上下文转义）、输入校验、内容安全策略（CSP）与 HttpOnly Cookie。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "sql-injection",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "phishing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "penetration-testing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "data-breach",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "mitm",
    "name": "中间人攻击",
    "aliases": [
      "Man-in-the-Middle",
      "MITM",
      "会话劫持",
      "ARP欺骗"
    ],
    "tags": [
      "网络攻击",
      "加密窃听",
      "传输安全"
    ],
    "difficulty": 3,
    "summary": "潜伏通信双方之间窃听篡改流量",
    "core": [
      "在通信双方间冒充彼此窃听/篡改流量",
      "常见手法：ARP欺骗、DNS欺骗、伪造热点",
      "防 TLS 证书校验、mTLS、避免公共Wi-Fi"
    ],
    "applications": [
      "渗透测试中抓包分析明文协议漏洞",
      "用 HTTPS 与 HSTS 强制加密通信防劫持"
    ],
    "misconceptions": [
      "只用 HTTPS 就安全——若客户端跳过证书校验或遭 SSL 剥离仍可被中间人"
    ],
    "references": [
      "网络安全的行业黑话 攻击篇",
      "网络安全常见攻击与防御"
    ],
    "sources": [
      "https://developer.aliyun.com/article/1430831",
      "https://developer.aliyun.com/article/1728498"
    ],
    "definition": "中间人攻击（MITM，Man-in-the-Middle）指攻击者潜伏于通信双方之间，分别冒充对方，对流量窃听、篡改甚至伪造转发，双方毫无察觉。常见有 ARP 欺骗（劫持网关流量）、DNS 欺骗（域名解析劫持）、伪造 Wi-Fi 热点与 SSL 剥离（HTTPS 降为 HTTP）。可窃取凭据、支付信息或篡改文件。核心防御是端到端加密与双向认证：校验 TLS 证书、双向 TLS（mTLS），并避免公共 Wi-Fi。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "vpn",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "phishing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "two-factor-authentication",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "data-breach",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "phishing",
    "name": "钓鱼攻击",
    "aliases": [
      "Phishing",
      "网络钓鱼",
      "鱼叉式钓鱼",
      "Spear Phishing"
    ],
    "tags": [
      "社会工程学",
      "邮件安全",
      "诈骗"
    ],
    "difficulty": 2,
    "summary": "伪装可信来源诱导泄露敏感信息",
    "core": [
      "伪装可信来源诱导受害者泄露信息",
      "鱼叉式钓鱼针对特定目标定制内容",
      "常作为勒索软件与数据泄露的初始入口"
    ],
    "applications": [
      "企业定期开展钓鱼演练测试员工警觉度",
      "部署邮件网关与 DMARC 等邮件认证拦截仿冒"
    ],
    "misconceptions": [
      "有安全软件就能防钓鱼——人的判断是第一道防线，演练比工具更关键"
    ],
    "references": [
      "借势间谍软件叙事的飞马钓鱼勒索邮件攻击机理与自动化防御检测研究",
      "網絡釣魚與惡意軟件"
    ],
    "sources": [
      "https://cloud.tencent.cn/developer/article/2712966?policyId=1003",
      "https://cybersecuritycampaign.com.hk/zh/%e7%b6%b2%e7%b5%a1%e9%87%a3%e9%ad%9a%e8%a9%90%e9%a8%99/%e7%b6%b2%e7%b5%a1%e9%87%a3%e9%ad%9a%e8%88%87%e6%83%a1%e6%84%8f%e8%bb%9f%e4%bb%b6%e6%af%94%e8%bc%83"
    ],
    "definition": "钓鱼攻击（Phishing）是社会工程学最常见的形态：攻击者伪装成银行、公司 IT、政府机构等可信来源，经伪造邮件、短信或网站诱导受害者点击恶意链接或交出账号密码、验证码等敏感信息。针对特定目标的鱼叉式钓鱼（Spear Phishing）定制内容。钓鱼是多数数据泄露事件的初始入口，常被用来投放勒索软件或窃取凭据。防御依赖安全意识培训、邮件网关过滤与 DMARC 等邮件认证，并由多因素认证兜底。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "ransomware",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "two-factor-authentication",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "mitm",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "data-breach",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "xss",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "ransomware",
    "name": "勒索软件",
    "aliases": [
      "勒索病毒",
      "Ransomware",
      "加密勒索",
      "双重勒索"
    ],
    "tags": [
      "恶意软件",
      "加密",
      "数据安全"
    ],
    "difficulty": 2,
    "summary": "加密数据勒索赎金的恶意程序",
    "core": [
      "加密文件/锁系统后勒索赎金",
      "双重勒索：先窃取数据再威胁公开",
      "多经钓鱼邮件、RDP爆破、漏洞传播"
    ],
    "applications": [
      "关基行业制定勒索演练与离线备份恢复预案",
      "SOC 监控勒索迹象（批量加密、异常 SMB 流量）"
    ],
    "misconceptions": [
      "支付赎金就能拿回数据——约三成受害者仍无法解密，且会助长攻击"
    ],
    "references": [
      "深入了解勒索軟體郵件威脅",
      "网络攻击1——网络安全基本概念与终端安全介绍"
    ],
    "sources": [
      "https://version-2.com/en/2025/12/%e6%b7%b1%e5%85%a5%e4%ba%86%e8%a7%a3%e5%8b%92%e7%b4%a2%e8%bb%9f%e9%ab%94%e9%83%b5%e4%bb%b6%e5%a8%81%e8%85%85/",
      "https://blog.csdn.net/m0_49864110/article/details/135023923"
    ],
    "definition": "勒索软件（Ransomware）是一类恶意程序，感染后加密受害者文件或锁定系统，再勒索赎金（通常要求加密货币）换取解密密钥；近年“双重勒索”还会在加密前窃取数据，威胁公开。典型传播途径是钓鱼邮件附件、漏洞利用（如 RDP 爆破）与供应链投毒，多瞄准医院、政府等高价值目标。防御重点是离线备份与恢复演练、及时打补丁、收敛暴露的 RDP 与最小权限；中招后不建议支付赎金，因为未必能拿回密钥且会助长犯罪。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "phishing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "backdoor",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "data-breach",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "brute-force",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "sandbox",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "backdoor",
    "name": "后门",
    "aliases": [
      "Backdoor",
      "木马后门",
      "webshell",
      "远控"
    ],
    "tags": [
      "恶意软件",
      "权限维持",
      "渗透"
    ],
    "difficulty": 3,
    "summary": "绕过认证保持长期访问的隐蔽通道",
    "core": [
      "绕过认证长期保持系统访问权限",
      "形态：木马、webshell、隐藏账号、固件后门",
      "检测靠 EDR、完整性监控与日志审计"
    ],
    "applications": [
      "红队演练模拟权限维持检验防御响应",
      "应急响应排查被植入的 webshell 与计划任务"
    ],
    "misconceptions": [
      "杀毒软件一定能查杀后门——免杀与内存马等技术可绕过静态查杀"
    ],
    "references": [
      "网络安全专业术语名词解释（三）",
      "小白应知的“黑客术语”"
    ],
    "sources": [
      "https://xxhb.nenu.edu.cn/info/1038/5432.htm",
      "https://cloud.tencent.com.cn/developer/article/1473543?policyId=1003"
    ],
    "definition": "后门（Backdoor）是攻击者植入目标系统、用于绕过认证与监控、保持长期访问权限的隐蔽通道。形态包括木马/远控类、Web 后门（webshell，藏在网站里执行命令）、硬件后门（固件级）、账号后门（隐藏管理员账号）与被滥用的合法运维通道。后门常与“权限维持”（Persistence）绑定——利用启动项、计划任务、注册表保证重启后仍能回来。检测靠 EDR、完整性监控与日志审计。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "penetration-testing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "zero-day",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ransomware",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "red-team",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "brute-force",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "zero-day",
    "name": "零日漏洞",
    "aliases": [
      "0day",
      "Zero-day Vulnerability",
      "零日利用",
      "0-day"
    ],
    "tags": [
      "漏洞",
      "APT",
      "应急响应"
    ],
    "difficulty": 4,
    "summary": "无补丁可打的未公开高危漏洞",
    "core": [
      "厂商不知情、无补丁可打的漏洞",
      "利用窗口期短，常被 APT 用于高价值攻击",
      "防御靠威胁情报、EDR 行为检测、攻击面收敛"
    ],
    "applications": [
      "APT 应急响应中研判在野 0day 利用",
      "漏洞赏金平台激励白帽提交新漏洞提前修复"
    ],
    "misconceptions": [
      "只有黑客才知道 0day——安全厂商与赏金猎人也在竞相发现"
    ],
    "references": [
      "什么是零日漏洞？定义与示例",
      "腾讯电脑管家发布安全预警：发现潜伏17年高龄0day漏洞"
    ],
    "sources": [
      "https://www.plexicus.ai/zh/glossary/zero-day-vulnerability/",
      "https://m.techweb.com.cn/article/2017-12-20/2620735.shtml"
    ],
    "definition": "零日漏洞（Zero-day）指厂商尚不知情、尚未发布补丁或修复方案的软件/硬件安全缺陷——在漏洞被发现到厂商出补丁的“第 0 天”窗口期内，攻击者可利用它对未打补丁的系统发起攻击（即零日利用 0day exploit）。这类漏洞价值极高，常被 APT 组织用于网络战或在黑市高价交易。防御上无补丁可打，只能靠威胁情报、EDR 行为检测、攻击面收敛与纵深防御降低被利用概率；补丁发布后须尽快全网修复。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "penetration-testing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "red-team",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "backdoor",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "honeypot",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "sandbox",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "penetration-testing",
    "name": "渗透测试",
    "aliases": [
      "Penetration Testing",
      "Pentest",
      "渗透",
      "安全测试"
    ],
    "tags": [
      "安全评估",
      "攻防",
      "合规"
    ],
    "difficulty": 4,
    "summary": "授权模拟攻击验证漏洞真实危害",
    "core": [
      "授权范围内模拟攻击验证漏洞可利用性",
      "分黑盒/灰盒/白盒三档信息深度",
      "必须书面授权与约定范围，否则违法"
    ],
    "applications": [
      "上线前对核心业务系统做年度渗透测试",
      "金融、等保合规要求定期渗透评估"
    ],
    "misconceptions": [
      "渗透测试等于漏洞扫描——扫描只发现疑似问题，渗透要验证并深挖利用链"
    ],
    "references": [
      "渗透测试的前置知识00",
      "什么是紫队？"
    ],
    "sources": [
      "https://developer.aliyun.com/article/1324328",
      "https://www.checkpoint.com/tw/cyber-hub/cyber-security/what-is-a-purple-team/"
    ],
    "definition": "渗透测试（Penetration Testing）是在授权范围内模拟真实攻击者的思路与手法，对 Web 应用、网络、主机等目标进行主动探测利用，验证漏洞可利用性并评估真实危害。流程含信息收集、漏洞分析、利用、提权、横向移动与报告输出；按信息深度分黑盒/灰盒/白盒三档。与漏洞扫描不同，它实际验证漏洞能否被利用。必须有书面授权与明确范围（Rules of Engagement），否则即属违法攻击。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "red-team",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "blue-team",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "sql-injection",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "zero-day",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "honeypot",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "xss",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "backdoor",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "dengbao",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "red-team",
    "name": "红队",
    "aliases": [
      "Red Team",
      "攻击方",
      "红队演练",
      "对抗演习"
    ],
    "tags": [
      "攻防对抗",
      "模拟攻击",
      "安全评估"
    ],
    "difficulty": 4,
    "summary": "模拟真实攻击检验防御体系的一方",
    "core": [
      "扮演攻击者模拟真实 TTPs 检验防御",
      "目标导向：钓鱼、社工、内网渗透组合出击",
      "侧重检验检测响应能力而非单一漏洞"
    ],
    "applications": [
      "年度红蓝对抗评估整体安全体系",
      "重保/护网行动中红队主动暴露防守短板"
    ],
    "misconceptions": [
      "红队就是更厉害的渗透测试——红队以检验检测与响应为目标，范围与打法更接近真实攻击"
    ],
    "references": [
      "“紫队”的崛起：网络攻防不仅仅是红蓝",
      "什么是紫队？"
    ],
    "sources": [
      "https://www.secrss.com/articles/11431",
      "https://www.checkpoint.com/tw/cyber-hub/cyber-security/what-is-a-purple-team/"
    ],
    "definition": "红队（Red Team）是攻防体系中扮演“攻击者”的一方，通过模拟真实威胁者的战术、技术与过程（TTPs）对企业发起对抗性评估，检验防御体系的真实有效性。与常规渗透测试相比，红队更强调目标导向、过程自由：不局限于单个系统，而是像真实攻击一样组合钓鱼、社工、0day、内网渗透与权限维持等手段，重点检验蓝队的检测与响应能力。红队产出高层级报告，指出投资缺口与响应短板；对应防守方蓝队，两者可配合紫队改进。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "blue-team",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "penetration-testing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "soc",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "zero-day",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "honeypot",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "backdoor",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "blue-team",
    "name": "蓝队",
    "aliases": [
      "Blue Team",
      "防守方",
      "蓝队值守",
      "防御组"
    ],
    "tags": [
      "攻防对抗",
      "防守响应",
      "应急"
    ],
    "difficulty": 3,
    "summary": "负责监测响应与恢复的防守方",
    "core": [
      "防守方：监测、检测、响应、恢复",
      "日常加固+战时实时监控与溯源",
      "以 MTTD/MTTR 衡量响应成熟度"
    ],
    "applications": [
      "护网行动中蓝队 7×24 值守监测攻击",
      "日常 SIEM 告警研判与事件处置"
    ],
    "misconceptions": [
      "蓝队只是被动挨打——现代蓝队主动狩猎（Threat Hunting）并反制红队"
    ],
    "references": [
      "“紫队”的崛起：网络攻防不仅仅是红蓝",
      "现代安全运营十问"
    ],
    "sources": [
      "https://www.secrss.com/articles/11431",
      "https://cloud.tencent.cn/developer/article/1826935?from=15425"
    ],
    "definition": "蓝队（Blue Team）是攻防对抗中的“防守方”，负责监测、检测、响应与恢复，确保红队模拟的攻击无法突破防线。日常要做好日志与流量监测、告警研判、补丁管理、基线加固与应急预案；对抗演练中实时监控红队动作、溯源攻击路径、阻断入侵并复盘改进。常用 SOC/SIEM、EDR、蜜罐等工具。蓝队成熟度以 MTTD（检测到攻击的平均时间）与 MTTR（响应恢复的平均时间）衡量，与红队配合可系统提升整体防御。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "red-team",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "soc",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "siem",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "honeypot",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "penetration-testing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "sandbox",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "soc",
    "name": "SOC",
    "aliases": [
      "安全运营中心",
      "Security Operations Center",
      "安全运营团队"
    ],
    "tags": [
      "安全运营",
      "监控响应",
      "组织能力"
    ],
    "difficulty": 3,
    "summary": "集中监测响应安全事件的运营组织",
    "core": [
      "集中监测、响应、运营企业安全态势",
      "依托 SIEM/EDR/SOAR，一二三线梯队分工",
      "以 MTTD/MTTR、误报率等度量成熟度"
    ],
    "applications": [
      "大型企业自建 SOC 或采购 MSSP 托管安全运营",
      "重保期间 SOC 统一指挥应急响应"
    ],
    "misconceptions": [
      "买了 SIEM 就等于建了 SOC——SOC 是组织与流程能力，工具只是其中一环"
    ],
    "references": [
      "十个问答解惑现代安全运营",
      "SIEM vs SOC了解它们各自的角色"
    ],
    "sources": [
      "https://www.cnetsec.com/dfaq_wordpress/?p=35335",
      "https://www.stellarcyber.ai/zh-CN/learn/siem-vs-soc/"
    ],
    "definition": "SOC（Security Operations Center，安全运营中心）是以人、流程、技术为核心的安全运营组织，7×24 集中监测企业安全态势，负责告警研判、事件响应、威胁狩猎与漏洞管理。SOC 依托 SIEM、EDR、SOAR 等平台汇聚日志与告警，通常设一线（监控分流）、二线（调查）、三线（专家支持）分级梯队；成熟度模型（如 SOC-CMM）以告警误报率、MTTD/MTTR、检测覆盖率等衡量运营水平。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "siem",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "blue-team",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "honeypot",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "data-breach",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "zero-trust",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ddos",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "red-team",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "dengbao",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "siem",
    "name": "SIEM",
    "aliases": [
      "安全信息和事件管理",
      "Security Information and Event Management",
      "日志审计平台"
    ],
    "tags": [
      "日志分析",
      "告警管理",
      "合规审计"
    ],
    "difficulty": 3,
    "summary": "多源日志关联分析与告警的平台",
    "core": [
      "统一采集多源日志做关联分析与告警",
      "融合 SIM+SEM，支持合规审计留存",
      "正演进为云化 SIEM 与 XDR"
    ],
    "applications": [
      "SOC 用 SIEM 汇聚全网告警做研判",
      "等保合规要求日志留存 6 个月以上由 SIEM 支撑"
    ],
    "misconceptions": [
      "SIEM 能自动发现一切攻击——它依赖日志质量与规则维护，漏报误报需运营调优"
    ],
    "references": [
      "SIEM vs SOC了解它们各自的角色",
      "十个问答解惑现代安全运营"
    ],
    "sources": [
      "https://www.stellarcyber.ai/zh-CN/learn/siem-vs-soc/",
      "https://www.cnetsec.com/dfaq_wordpress/?p=35335"
    ],
    "definition": "SIEM（Security Information and Event Management，安全信息和事件管理）是集日志收集、关联分析、告警与合规审计于一体的平台，由 SIM 与 SEM 融合而来。统一采集防火墙、服务器等日志，通过规则引擎与 UEBA（用户实体行为分析）关联分析，把分散噪音变成可处置告警，并满足合规留存要求。现代 SIEM 走向云端化与 XDR（扩展检测响应），局限是依赖日志质量与规则维护。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "soc",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "blue-team",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "firewall",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "data-breach",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "dengbao",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "sandbox",
    "name": "沙箱",
    "aliases": [
      "Sandbox",
      "隔离执行环境",
      "沙盒"
    ],
    "tags": [
      "恶意代码分析",
      "隔离",
      "动态检测"
    ],
    "difficulty": 2,
    "summary": "隔离环境运行可疑程序观察行为",
    "core": [
      "隔离环境中运行可疑程序观察行为",
      "用于恶意样本动态分析与附件检测",
      "需防反沙箱技术，常与静态分析结合"
    ],
    "applications": [
      "邮件网关把可疑附件丢进沙箱观察行为",
      "蓝队分析钓鱼样本提取 IOC 情报"
    ],
    "misconceptions": [
      "沙箱能百分百识别恶意软件——高级恶意软件会检测沙箱环境并伪装正常"
    ],
    "references": [
      "网安术语知道少",
      "网络安全的行业黑话 攻击篇"
    ],
    "sources": [
      "https://cloud.tencent.com.cn/developer/article/2548025?from=15425&frompage=seopage",
      "https://developer.aliyun.com/article/1430831"
    ],
    "definition": "沙箱（Sandbox）是一种受限的隔离执行环境：让可疑程序在受控虚拟空间内运行，观察其文件读写、注册表操作、网络外联等行为以判断是否恶意，同时保证恶意代码无法危害真实主机或网络。安全领域常用于恶意样本动态分析、邮件与附件预检测、浏览器隔离（RBI）等。沙箱存在被反沙箱技术（检测虚拟环境、延迟执行、要求特定触发条件）绕过的风险，因此常与静态分析结合并用多引擎提升检出率。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "honeypot",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ransomware",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "blue-team",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "zero-day",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ddos",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "homomorphic-encryption",
    "name": "同态加密",
    "aliases": [
      "Homomorphic Encryption",
      "HE",
      "全同态加密",
      "FHE"
    ],
    "tags": [
      "密码学",
      "隐私计算",
      "数据安全"
    ],
    "difficulty": 5,
    "summary": "密文上直接计算实现数据可用不可见",
    "core": [
      "密文上直接计算，结果解密等于明文计算",
      "分级：PHE 部分同态 → SWHE → FHE 全同态",
      "实现“数据可用不可见”的隐私计算"
    ],
    "applications": [
      "医疗/金融数据外包给云平台做密态统计",
      "隐私计算平台用同态加密支撑联合风控"
    ],
    "misconceptions": [
      "同态加密已能大规模商用——性能开销巨大，目前主要用于特定场景而非通用计算"
    ],
    "references": [
      "大数据隐私保护关键技术解析：数据脱敏、匿名化、差分隐私和同态加密",
      "“隐私计算”四大技术路径解析"
    ],
    "sources": [
      "https://www.secrss.com/articles/13856",
      "https://www.qianxin.com/news/detail?news_id=2981"
    ],
    "definition": "同态加密（Homomorphic Encryption）是特殊密码学技术，允许在密文上直接进行加、乘等运算，运算结果解密后与明文直接计算一致，即“加密状态下计算”——数据无需解密就能被第三方处理，实现“数据可用不可见”。按能力分部分同态（PHE，仅加法或乘法）、Somewhat 同态（SWHE）与全同态加密（FHE，任意计算）。FHE 计算开销比明文慢数个数量级，目前主要用于隐私计算与云数据外包计算。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "data-masking",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "data-breach",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "vpn",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "dengbao",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "data-masking",
    "name": "数据脱敏",
    "aliases": [
      "Data Masking",
      "数据模糊化",
      "数据去标识化",
      "脱敏处理"
    ],
    "tags": [
      "数据安全",
      "隐私保护",
      "合规"
    ],
    "difficulty": 2,
    "summary": "变形敏感字段保留可用性防泄露",
    "core": [
      "保留可用性前提下变形敏感字段",
      "手法：掩码、替换、泛化、FPE 等",
      "区分静态脱敏与动态脱敏"
    ],
    "applications": [
      "开发测试环境用脱敏数据替代生产数据",
      "对外数据分析共享前做字段级脱敏"
    ],
    "misconceptions": [
      "简单打码就是脱敏——可逆性、重识别风险与关联性仍需评估，否则可能被反推"
    ],
    "references": [
      "大数据隐私保护关键技术解析：数据脱敏、匿名化、差分隐私和同态加密",
      "“隐私计算”四大技术路径解析"
    ],
    "sources": [
      "https://www.secrss.com/articles/13856",
      "https://www.qianxin.com/news/detail?news_id=2981"
    ],
    "definition": "数据脱敏（Data Masking）指在保留数据统计特征与业务可用性的前提下，对身份证号、手机号、银行卡号等敏感信息做变形处理（掩码、替换、泛化、加密等），使数据在测试、外包、共享等非生产场景不泄露真实隐私。手法含固定替换、随机化、日期偏移、保留格式加密（FPE）。脱敏需结合数据分级分类，区分静态脱敏（批量处理后落地）与动态脱敏（按权限实时遮蔽）。它是个保法、数安法等合规落地的关键手段。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "homomorphic-encryption",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "data-breach",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "dengbao",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "two-factor-authentication",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "dengbao",
    "name": "等保",
    "aliases": [
      "网络安全等级保护",
      "等保2.0",
      "等级保护制度",
      "CII"
    ],
    "tags": [
      "合规",
      "国家标准",
      "安全建设"
    ],
    "difficulty": 3,
    "summary": "我国网络安全等级保护合规制度",
    "core": [
      "五级分级，三级以上需年度测评",
      "等保2.0覆盖云、大、物、工控等新业态",
      "框架：一个中心、三重防护"
    ],
    "applications": [
      "企业系统上线前定级备案并整改",
      "金融、政务系统按等保三级建设与测评"
    ],
    "misconceptions": [
      "过了等保就绝对安全——等保是合规底线，动态威胁仍需持续运营投入"
    ],
    "references": [
      "网络安全等级保护2.0标准解读",
      "等保2.0与商密应用产品相关的48个问题合集"
    ],
    "sources": [
      "https://met.muc.edu.cn/info/1021/2839.htm",
      "https://ssl.xcc.cn/m_tech/m_know07.html"
    ],
    "definition": "等保（网络安全等级保护）是中国依据《网络安全法》确立的国家基本安全制度，要求运营者按系统重要程度分级实施安全保护，分五级：一级自主保护、二级指导保护、三级监督保护、四级强制保护、五级专控保护，三级以上需每年测评。等保 2.0（2019 年实施）将保护对象扩展到云计算、大数据、物联网、工控等新业态，提出“一个中心、三重防护”（安全管理中心+计算环境、区域边界、通信网络）框架，并强化可信计算与密码要求。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "data-breach",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "soc",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "siem",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "penetration-testing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "homomorphic-encryption",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "data-masking",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "data-breach",
    "name": "数据泄露",
    "aliases": [
      "Data Breach",
      "数据泄漏",
      "信息泄露",
      "泄露事件"
    ],
    "tags": [
      "数据安全",
      "事件响应",
      "合规"
    ],
    "difficulty": 1,
    "summary": "敏感数据被未授权接触的安全事件",
    "core": [
      "未经授权接触、窃取或公开敏感数据",
      "成因：攻击、内鬼、配置错误、供应链",
      "触发强制报告义务与合规处罚"
    ],
    "applications": [
      "云存储桶默认私有化+访问审计防配置类泄露",
      "泄露事件应急：止损、溯源、上报、通知"
    ],
    "misconceptions": [
      "被攻击才叫泄露——配置错误与内部泄露占比同样惊人"
    ],
    "references": [
      "必须了解的17个网络安全概念",
      "十个问答解惑现代安全运营"
    ],
    "sources": [
      "https://hebbc.org/special/list/detail/id/81.html",
      "https://www.cnetsec.com/dfaq_wordpress/?p=35335"
    ],
    "definition": "数据泄露（Data Breach）指敏感数据被未授权接触、窃取、公开或破坏的安全事件，涵盖个人隐私、商业机密、凭据与支付信息等。常见成因有黑客攻击（SQL 注入、钓鱼、勒索）、内部人员泄露（内鬼或误操作）、配置错误（未认证云存储桶）与供应链风险。泄露往往触发监管义务：《数据安全法》《个人信息保护法》要求及时处置并按规定报告，GDPR 还设 72 小时通知时限。事后需权限收敛、日志溯源并通知受影响用户。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "data-masking",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ransomware",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "sql-injection",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "soc",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "zero-trust",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "xss",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "mitm",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "phishing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "siem",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "homomorphic-encryption",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "dengbao",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "brute-force",
    "name": "暴力破解",
    "aliases": [
      "Brute Force Attack",
      "爆破",
      "字典攻击",
      "撞库"
    ],
    "tags": [
      "口令攻击",
      "认证安全",
      "弱口令"
    ],
    "difficulty": 2,
    "summary": "穷举口令组合直到命中凭据",
    "core": [
      "穷举/猜测口令组合直到命中",
      "字典攻击与撞库是高效变体",
      "防：限速锁定、验证码、2FA 兜底"
    ],
    "applications": [
      "渗透测试中用 Hydra 等工具验证弱口令",
      "企业开启登录失败锁定与异地登录风控"
    ],
    "misconceptions": [
      "密码够长就防住爆破——泄露库撞库与社工组合仍可命中，2FA 才是关键"
    ],
    "references": [
      "网络安全入门必知的攻击方法",
      "网络安全的行业黑话 攻击篇 之攻击方法（2）"
    ],
    "sources": [
      "https://www.zpedu.com/it/xxaq/29094.html",
      "https://developer.aliyun.com/article/1430834"
    ],
    "definition": "暴力破解（Brute Force）指攻击者通过穷举或猜测批量尝试用户名/密码组合，直到命中合法凭据的攻击手法。纯暴力破解按字符集全排列穷举，效率低；实际更常用字典攻击（拿泄露密码库、弱口令字典批量尝试）与撞库（用他站泄露的账号密码批量登录），配合社工信息可大幅提高命中率，攻击目标常是 SSH、RDP、VPN、Web 登录等。防御措施包括强密码策略、登录限速与锁定、验证码、防撞库风控，以及双因素认证兜底。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "two-factor-authentication",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ransomware",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "backdoor",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ddos",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "sql-injection",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "two-factor-authentication",
    "name": "双因素认证",
    "aliases": [
      "2FA",
      "Two-Factor Authentication",
      "两步验证",
      "多因素认证",
      "MFA"
    ],
    "tags": [
      "身份认证",
      "账号安全",
      "密码学"
    ],
    "difficulty": 1,
    "summary": "双因素组合认证提升账号安全",
    "core": [
      "两个不同类别的因素组合认证",
      "三因素：所知/所有/所是",
      "防撞库、钓鱼与爆破的账号兜底"
    ],
    "applications": [
      "企业强制核心系统开启 MFA",
      "VPN、云控制台开启 TOTP 或硬件密钥"
    ],
    "misconceptions": [
      "短信验证码最安全——存在 SIM 卡劫持风险，高敏场景应换认证器/密钥"
    ],
    "references": [
      "什么是多因素身份验证（MFA）？",
      "2FA 與 MFA：兩者有何分別？"
    ],
    "sources": [
      "https://www.cloudflare.com/zh-cn/learning/access-management/what-is-multi-factor-authentication/",
      "https://cybersecuritycampaign.com.hk/zh/%e9%9b%99%e9%87%8d%e8%aa%8d%e8%ad%89/2fa-vs-mfa"
    ],
    "definition": "双因素认证（2FA，Two-Factor Authentication）要求登录时提供两个不同类别因素。认证因素分所知（密码/PIN）、所有（手机/硬件令牌）、所是（生物特征）三类，2FA 即任意两类组合，如“密码+短信验证码”。攻击者窃取密码后也无法提供第二因素，可阻断撞库、钓鱼与爆破导致的账号失陷。常见实现有短信 OTP、TOTP 认证器或硬件密钥；短信有 SIM 卡劫持风险，高敏宜用认证器或密钥。",
    "field": "网络安全",
    "searchedAt": "2026-08-14",
    "domain": "网络安全",
    "relations": [
      {
        "type": "related",
        "target": "brute-force",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "phishing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "vpn",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "zero-trust",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "mitm",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "data-masking",
        "note": "",
        "confidence": 0.85
      }
    ]
  }
];
