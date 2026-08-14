window.XIGAI = window.XIGAI || {};
window.XIGAI["大模型横评"] = [
  {
    "id": "deepseek-v4",
    "name": "DeepSeek-V4",
    "aliases": [
      "DeepSeek-V4 系列",
      "深度求索 V4"
    ],
    "field": "大模型横评",
    "tags": [
      "国产开源",
      "通用对话",
      "MoE"
    ],
    "difficulty": 3,
    "summary": "深度求索 2026 年旗舰开源大模型，性能与成本兼顾",
    "definition": "DeepSeek-V4 是深度求索（DeepSeek）于 2026 年推出的旗舰开源大模型系列，采用混合专家（MoE）架构，延续 V3 时代的高性价比路线。相比 V3，V4 在数学推理、代码生成与长文本理解上显著提升，同时保持极低的使用价格，被誉为「开源模型性价比之王」。其 Flash 版本主打轻量与低延迟，Pro 版本则面向高难度任务开放更强算力配置。V4 系列上线后迅速占据全球开源模型调用量前列，成为国产大模型全球化的标志性产品。",
    "background": "DeepSeek 自 2023 年发布 DeepSeek LLM 以来，历经 V2、V3 与 R1（推理增强）数代迭代，V3 凭借 MoE 架构与超低训练成本震动业界。2026 年 V4 系列发布，进一步优化稀疏激活效率与推理速度，并伴随 Flash/Pro 分层定价策略，开启「价格战」式竞争。",
    "core": [
      "MoE 稀疏激活架构：单次推理仅激活部分专家，成本优势明显",
      "Flash 版以极低 token 价格主打高吞吐场景，Pro 版支持 100 万上下文与 38.4 万最大输出",
      "数学/代码基准较 V3 大幅提升，接近同期闭源旗舰",
      "开源权重可本地部署，生态（Ollama/vLLM 等）支持完善"
    ],
    "applications": [
      "企业 API 接入与私有化部署",
      "高并发聊天/客服系统",
      "代码生成与重构",
      "科研辅助与数学推理"
    ],
    "misconceptions": [
      "V4 并非完全免费——开源权重免费，云端 API 按 token 计费",
      "Flash 与 Pro 能力差异明显，不能混为一谈"
    ],
    "references": [
      "DeepSeek API Docs",
      "DeepSeek V4 Pro正式版上线：100万上下文、38.4万最大输出"
    ],
    "sources": [
      "https://api-docs.deepseek.com/",
      "https://news.pconline.com.cn/2180/21802839.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大模型横评",
    "relations": [
      {
        "type": "related",
        "target": "deepseek-v4-pro",
        "note": ""
      },
      {
        "type": "related",
        "target": "kimi-k3",
        "note": ""
      },
      {
        "type": "related",
        "target": "qwen3-8-max",
        "note": ""
      },
      {
        "type": "related",
        "target": "llama-3-3",
        "note": ""
      },
      {
        "type": "related",
        "target": "xiaomi-mimo",
        "note": ""
      },
      {
        "type": "related",
        "target": "zhipu-glm",
        "note": ""
      },
      {
        "type": "related",
        "target": "open-weights-2026",
        "note": ""
      }
    ]
  },
  {
    "id": "deepseek-v4-pro",
    "name": "DeepSeek-V4-Pro",
    "aliases": [
      "V4 Pro 正式版"
    ],
    "field": "大模型横评",
    "tags": [
      "国产",
      "旗舰",
      "长上下文"
    ],
    "difficulty": 3,
    "summary": "V4 系列旗舰版：100 万上下文、38.4 万最大输出",
    "definition": "DeepSeek-V4-Pro 是深度求索 2026 年 8 月推出的 V4 系列旗舰版本，定位对标 Anthropic Claude Fable 5 等国际前沿闭源模型。其核心卖点是超长上下文能力：支持 100 万 token 上下文窗口与 38.4 万 token 最大输出，可一次性处理长篇小说级材料并生成超长结构化内容。Pro 版在数学、代码、长文本综合任务上表现接近顶级闭源模型，同时价格约为自家 Flash 版的三倍，凭借「临时价格战」策略以远低于竞品的价格争夺企业市场。",
    "background": "2026 年 8 月 13 日前后，DeepSeek-V4-Pro 正式版上线，官方同步宣布限时价格优惠，媒体称之为「发动临时价格战」。此前 V4 Flash 版已先行铺开市场，Pro 版补足高端场景，形成 Flash/Pro 高低搭配的产品矩阵。",
    "core": [
      "100 万 token 上下文 + 38.4 万 token 最大输出，行业领先",
      "对标 Claude Fable 5 的旗舰级综合能力，价格显著更低",
      "「临时价格战」限时优惠进一步拉低企业接入成本",
      "支持结构化输出与长文档深度处理"
    ],
    "applications": [
      "超长文档智能分析",
      "代码库级重构与生成",
      "金融/法律专业报告",
      "Agent 长链路任务执行"
    ],
    "misconceptions": [
      "百万上下文不等于无限——超长输入仍受算力与延迟约束",
      "Pro 版价格是 Flash 三倍，非高吞吐场景用 Flash 更划算"
    ],
    "references": [
      "DeepSeek V4 Pro正式版上线：100万上下文、38.4万最大输出",
      "Deepseek V4 Pro正式版上线，发动临时价格战"
    ],
    "sources": [
      "https://news.pconline.com.cn/2180/21802839.html",
      "https://news.qq.com/rain/a/20260813A052FR00",
      "https://www.tmtpost.com/8101755.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大模型横评",
    "relations": [
      {
        "type": "related",
        "target": "deepseek-v4",
        "note": ""
      },
      {
        "type": "related",
        "target": "claude-fable-5",
        "note": ""
      },
      {
        "type": "related",
        "target": "gpt-5-4",
        "note": ""
      },
      {
        "type": "related",
        "target": "kimi-k3",
        "note": ""
      }
    ]
  },
  {
    "id": "gpt-5-4",
    "name": "GPT-5.4",
    "aliases": [
      "GPT-5.4 系列",
      "OpenAI 旗舰"
    ],
    "field": "大模型横评",
    "tags": [
      "闭源",
      "智能体",
      "专业工作"
    ],
    "difficulty": 3,
    "summary": "OpenAI 2026 年最新旗舰，强化专业工作与智能体能力",
    "definition": "GPT-5.4 是 OpenAI 于 2026 年发布的最新旗舰大模型系列，在 GPT-5.x 基础上重点强化「专业工作」与「智能体（Agent）」能力。它能够自动操作电脑、调用插件（如直接操作 Excel、金融分析工具），把模型从「对话问答」推向「端到端任务执行」。GPT-5.4 系列同时提供多个规模档位（含轻量版），在复杂多步推理、工具调用稳定性与长程任务一致性上较前代显著提升，是闭源商用大模型的代表。",
    "background": "OpenAI 自 GPT-5 起全面转向「推理 + Agentic」范式，o 系列与 GPT 系列逐步融合。2026 年 GPT-5.4 发布时，官方强调其对企业生产力场景的优化：自动操作电脑、插件生态、Excel/金融分析等专业工作流成为核心卖点，反映行业从「聊天」到「干活」的转型。",
    "core": [
      "自动操作电脑：可驱动桌面/浏览器完成端到端任务",
      "插件体系成熟：Excel、金融分析、代码环境等专业工具接入",
      "多档位部署，兼顾成本与性能",
      "长程多步任务稳定执行，适合 Agent 工作流"
    ],
    "applications": [
      "企业办公自动化",
      "金融数据分析与报表",
      "软件开发全流程",
      "复杂业务流程代理"
    ],
    "misconceptions": [
      "GPT-5.4 并非「自动驾驶」——复杂任务仍需人工监督",
      "自动操作电脑能力受权限与环境限制，并非万能"
    ],
    "references": [
      "GPT-5.4 Model - OpenAI API",
      "OpenAI发布GPT-5.4系列模型，强化专业工作与智能体能力"
    ],
    "sources": [
      "https://developers.openai.com/api/docs/models/gpt-5.4",
      "https://www.pingwest.com/w/311850",
      "https://awtmt.com/articles/3766836"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大模型横评",
    "relations": [
      {
        "type": "related",
        "target": "claude-fable-5",
        "note": ""
      },
      {
        "type": "related",
        "target": "gemini-3-7-flash",
        "note": ""
      },
      {
        "type": "related",
        "target": "deepseek-v4-pro",
        "note": ""
      },
      {
        "type": "related",
        "target": "claude-mythos-5",
        "note": ""
      }
    ]
  },
  {
    "id": "claude-fable-5",
    "name": "Claude Fable 5",
    "aliases": [
      "Fable 5",
      "Anthropic 最强模型"
    ],
    "field": "大模型横评",
    "tags": [
      "闭源",
      "编码",
      "旗舰"
    ],
    "difficulty": 3,
    "summary": "Anthropic 最强通用模型，SWE-Bench Pro 得分 80.3%",
    "definition": "Claude Fable 5 是 Anthropic 于 2026 年推出的新一代旗舰通用大模型，发布即被媒体称为「全球最强 AI 模型」，综合能力全面碾压上一代。其最大亮点是编码能力：在 SWE-Bench Pro 基准上得分 80.3%，创下当时 SOTA 纪录，大幅领先竞品。定价约为 Opus 4.8 的两倍，定位高端企业级市场，官方在发布初期提供限时免费试用（如 6 月 22 日前免费）。Fable 5 同时强化了推理深度、诚实性与长文档处理，被视为通用智能新标杆。",
    "background": "Anthropic 继 Opus 4.8 后仅间隔约 11 天便发布 Fable 5，节奏之快引发热议；随后又推出专注安全攻防的 Mythos 5，形成通用 + 安全的双旗舰格局。Fable 5 的 SWE-Bench Pro 80.3% 与定价翻倍策略，标志着前沿模型进入「能力天花板竞赛」阶段。",
    "core": [
      "SWE-Bench Pro 80.3%，编码能力 SOTA",
      "推理深度与多步任务能力全面领先",
      "强化诚实性，减少幻觉与编造",
      "支持动态工作流与算力调节"
    ],
    "applications": [
      "复杂软件工程",
      "高难度代码审查与重构",
      "深度研究分析",
      "Agent 长链路编排"
    ],
    "misconceptions": [
      "80.3% 是基准分而非真实工程能力——实际项目仍需验证",
      "定价为 Opus 4.8 两倍，成本敏感场景需评估 ROI"
    ],
    "references": [
      "Claude Fable 5 正式发布：SWE-Bench Pro 得分 80.3%",
      "Claude Fable 5 API - 价格与基准"
    ],
    "sources": [
      "https://wavespeed.ai/blog/zh-CN/posts/claude-fable-5-launch-benchmarks-pricing/",
      "https://www.orcarouter.ai/zh-CN/models/anthropic/claude-fable-5",
      "https://llm-stats.com/blog/research/claude-fable-5-review"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大模型横评",
    "relations": [
      {
        "type": "related",
        "target": "claude-mythos-5",
        "note": ""
      },
      {
        "type": "related",
        "target": "gpt-5-4",
        "note": ""
      },
      {
        "type": "related",
        "target": "deepseek-v4-pro",
        "note": ""
      },
      {
        "type": "related",
        "target": "gemini-3-7-flash",
        "note": ""
      }
    ]
  },
  {
    "id": "claude-mythos-5",
    "name": "Claude Mythos 5",
    "aliases": [
      "Mythos 5",
      "Anthropic 安全模型"
    ],
    "field": "大模型横评",
    "tags": [
      "闭源",
      "安全",
      "攻防"
    ],
    "difficulty": 4,
    "summary": "Anthropic 安全攻防旗舰，号称颠覆全球攻防格局",
    "definition": "Claude Mythos 5 是 Anthropic 与 Fable 5 同期推出的安全特化旗舰模型，专注于网络安全攻防、漏洞分析与对抗场景，被安全媒体称为「颠覆全球攻防格局」的模型。它在漏洞挖掘、渗透测试、恶意代码识别等任务上具备专业级能力，同时强化了安全对齐与有害内容拒答。Mythos 5 的发布标志着前沿大模型从「通用助手」向「行业垂直专家」分化，也引发了对 AI 武器化风险的讨论。",
    "background": "2026 年 Anthropic 采取「双旗舰」策略：Fable 5 主打通用能力，Mythos 5 主打安全攻防，二者共用底层技术栈但针对不同场景优化。安全圈普遍认为 Mythos 5 的出现将显著改变攻防不对等的现状。",
    "core": [
      "专业级漏洞挖掘与渗透测试能力",
      "恶意代码与攻击链识别",
      "强化安全对齐，降低滥用风险",
      "与 Fable 5 构成通用 + 安全双旗舰"
    ],
    "applications": [
      "企业安全审计",
      "红蓝队对抗演练",
      "漏洞情报分析",
      "安全培训与教育"
    ],
    "misconceptions": [
      "Mythos 5 的能力是「双刃剑」——官方与监管对其滥用风险保持高度警惕",
      "安全模型不等于绝对安全，仍需人机协同"
    ],
    "references": [
      "Claude Mythos 5正式发布，颠覆全球攻防格局",
      "Anthropic 同时推出 Claude Fable 5 和 Mythos 5"
    ],
    "sources": [
      "https://www.secrss.com/articles/91160",
      "https://www.aitop100.cn/infomation/details/34018.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大模型横评",
    "relations": [
      {
        "type": "related",
        "target": "claude-fable-5",
        "note": ""
      },
      {
        "type": "related",
        "target": "gpt-5-4",
        "note": ""
      }
    ]
  },
  {
    "id": "gemini-3-7-flash",
    "name": "Gemini 3.7 Flash",
    "aliases": [
      "Gemini 3.7 Flash",
      "Google Gemini"
    ],
    "field": "大模型横评",
    "tags": [
      "闭源",
      "编程",
      "Agent"
    ],
    "difficulty": 3,
    "summary": "谷歌专为编程与 Agent 打造的轻量旗舰，首发半价",
    "definition": "Gemini 3.7 Flash 是谷歌 DeepMind 于 2026 年推出的 Flash 系列最新模型，专为「编程与 Agents」场景设计，在代码生成、工具调用与多步任务执行上针对性地优化。发布时以 3.6 Flash 一半的价格促销，主打高性价比的开发者与智能体市场。Flash 系列定位低于旗舰（Pro/Ultra），但 3.7 版本在编程基准与 Agent 稳定性上大幅追近旗舰，成为开源替代之外的「闭源性价比之选」。",
    "background": "谷歌 2026 年密集更新 Gemini Flash 系列，先后发布 3.6 Flash 与 3.7 Flash，主打价格腰斩与编程/Agent 能力提升；旗舰 Pro 版本发布时间一度推迟，Flash 成为谷歌对抗竞品的主力武器。",
    "core": [
      "专为编程与 Agents 优化，工具调用稳定",
      "首发价仅为 3.6 Flash 一半，性价比突出",
      "低延迟高吞吐，适合生产级调用",
      "与谷歌生态（Vertex AI/Android）深度集成"
    ],
    "applications": [
      "代码生成与辅助编程",
      "Agent 工作流",
      "高并发 API 服务",
      "移动端智能应用"
    ],
    "misconceptions": [
      "Flash 定位轻量——复杂推理仍不及旗舰 Pro",
      "半价是首发促销，长期价格以官方为准"
    ],
    "references": [
      "谷歌推出 Gemini 3.7 Flash 模型，专为编程与 Agents 打造",
      "Gemini 3.7 Flash 发布，谷歌半价促销"
    ],
    "sources": [
      "https://www.donews.com/news/detail/1/6670816.html",
      "https://m.163.com/news/article/L49HEPIL00097U7T.html",
      "https://tech.ifeng.com/c/8vYGCajr2EL"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大模型横评",
    "relations": [
      {
        "type": "related",
        "target": "claude-fable-5",
        "note": ""
      },
      {
        "type": "related",
        "target": "gpt-5-4",
        "note": ""
      },
      {
        "type": "related",
        "target": "qwen3-8-max",
        "note": ""
      }
    ]
  },
  {
    "id": "qwen3-8-max",
    "name": "Qwen3.8-Max",
    "aliases": [
      "Qwen3.8",
      "通义千问 3.8"
    ],
    "field": "大模型横评",
    "tags": [
      "国产开源",
      "超大参数",
      "2.4T"
    ],
    "difficulty": 3,
    "summary": "阿里 2.4 万亿参数旗舰，开源权重",
    "definition": "Qwen3.8-Max 是阿里通义千问团队于 2026 年发布的超大规模旗舰模型，总参数达 2.4 万亿（2.4T），采用 MoE 架构，官方随后开放开源权重。它是 Qwen 系列「从 3.5 到 3.8」大版本迭代的顶配产品，编程与办公场景被重点优化，推理速度与稳定性较前代明显提升。Qwen3.8 系列还包括不同规模的 Flash/Nano 档位，构成完整的开源产品矩阵，是全球开源生态中与 Kimi K3、DeepSeek-V4 并列的头部玩家。",
    "background": "阿里 Qwen 系列持续保持「旗舰超大参数 + 开源」路线，Qwen3.8-Max 发布后官方宣布下周开源权重；同期媒体指出国产超大模型架构「走向趋同」（均转向 MoE + 超长上下文），Qwen3.8 成为该趋势的代表作。",
    "core": [
      "2.4 万亿总参数，MoE 稀疏激活",
      "编程与办公场景专项优化",
      "开源权重，支持本地化部署",
      "推理更快更稳定"
    ],
    "applications": [
      "企业私有化大模型",
      "编程助手",
      "办公智能化",
      "科研与多语言任务"
    ],
    "misconceptions": [
      "2.4T 是总参数——实际激活参数远小于此，别被数字误导",
      "开源权重仍需合规评估（许可协议）"
    ],
    "references": [
      "阿里正式发布 Qwen3.8-Max，2.4万亿参数",
      "2.4T参数，Qwen 3.8模型开源"
    ],
    "sources": [
      "https://news.iresearch.cn/content/202608/562334.shtml",
      "https://news.qq.com/rain/a/20260813A09YCS00",
      "https://www.qbitai.com/2026/08/465215.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大模型横评",
    "relations": [
      {
        "type": "related",
        "target": "kimi-k3",
        "note": ""
      },
      {
        "type": "related",
        "target": "deepseek-v4",
        "note": ""
      },
      {
        "type": "related",
        "target": "zhipu-glm",
        "note": ""
      },
      {
        "type": "related",
        "target": "gemini-3-7-flash",
        "note": ""
      },
      {
        "type": "related",
        "target": "xiaomi-mimo",
        "note": ""
      },
      {
        "type": "related",
        "target": "llama-3-3",
        "note": ""
      },
      {
        "type": "related",
        "target": "open-weights-2026",
        "note": ""
      }
    ]
  },
  {
    "id": "kimi-k3",
    "name": "Kimi K3",
    "aliases": [
      "Kimi K3",
      "月之暗面"
    ],
    "field": "大模型横评",
    "tags": [
      "国产开源",
      "3万亿参数",
      "MoE"
    ],
    "difficulty": 3,
    "summary": "全球首个 3 万亿级参数开源模型",
    "definition": "Kimi K3 是月之暗面（Moonshot AI）于 2026 年推出的旗舰大模型，总参数规模达 3 万亿（3T），是**全球首个公开开放权重（开源）的 3 万亿级参数模型**，其开放力度震惊业界，直接冲击了 Anthropic 等闭源厂商的估值叙事。K3 采用大规模 MoE 架构，在数学、代码、长上下文与多语言任务上达到世界顶级水平，同时通过稀疏激活控制推理成本。Kimi 品牌自 K2 起便以「超长上下文 + 强推理」著称，K3 将规模推向新量级。",
    "background": "月之暗面 2025 年发布 Kimi K2（1 万亿级开源）后引发轰动；2026 年 K3 将参数规模推至 3 万亿并保持开源路线，媒体以「3万亿模型权重全球开放」「冲击 Anthropic 估值」报道，被视为中国开源大模型从追赶转向引领的标志。",
    "core": [
      "3 万亿总参数，全球首个同规模开源模型",
      "数学/代码/长文本综合能力顶级",
      "MoE 稀疏激活控制推理成本",
      "开源路线冲击闭源厂商商业模式"
    ],
    "applications": [
      "前沿科研",
      "超长文档处理",
      "复杂推理与代码",
      "开源生态共建"
    ],
    "misconceptions": [
      "3T 总参数≠推理成本高——实际激活参数约数百亿",
      "开源权重对硬件要求极高，普通设备无法本地运行"
    ],
    "references": [
      "全球首个3万亿级参数开源模型落地，月之暗面Kimi",
      "刚刚，Kimi K3开源！3万亿模型权重全球开放"
    ],
    "sources": [
      "https://hub.baai.ac.cn/view/56714",
      "https://tidenews.com.cn/news.html?id=3514572",
      "https://platform.kimi.com/docs/guide/kimi-k3-quickstart"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大模型横评",
    "relations": [
      {
        "type": "related",
        "target": "qwen3-8-max",
        "note": ""
      },
      {
        "type": "related",
        "target": "deepseek-v4",
        "note": ""
      },
      {
        "type": "related",
        "target": "llama-3-3",
        "note": ""
      },
      {
        "type": "related",
        "target": "deepseek-v4-pro",
        "note": ""
      },
      {
        "type": "related",
        "target": "open-weights-2026",
        "note": ""
      }
    ]
  },
  {
    "id": "xiaomi-mimo",
    "name": "小米 MiMo",
    "aliases": [
      "MiMo-V2.5",
      "MiMo-V2-Flash"
    ],
    "field": "大模型横评",
    "tags": [
      "国产开源",
      "调用量第一",
      "效率"
    ],
    "difficulty": 3,
    "summary": "全球大模型调用量第一，MiMo-V2.5 登顶",
    "definition": "小米 MiMo 是小米集团推出的开源大模型系列，2026 年以 **MiMo-V2.5 登顶全球大模型调用量第一**，前五名全部为中国产品，成为国产大模型规模化落地的标志。MiMo-V2-Flash 则主打「重新定义开源大模型的性能与效率」，在保持高能力的同时大幅降低推理成本，适合端侧与高并发场景。MiMo 依托小米庞大的设备与生态（手机、IoT、汽车），走「高效 + 普惠」路线，与追求超大参数的 Kimi K3、Qwen3.8 形成差异化。",
    "background": "小米自研大模型从端侧小模型起家，逐步扩展至云端旗舰；2026 年 7-8 月多家媒体与数据平台显示 MiMo 系列在全球大模型调用量榜单登顶，前六名均为中国模型，国产模型生态完成对全球的「霸榜」。",
    "core": [
      "全球大模型调用量第一（MiMo-V2.5）",
      "性能与效率并重，推理成本低",
      "端云协同，覆盖手机/IoT/汽车场景",
      "开源生态完善"
    ],
    "applications": [
      "智能设备端侧 AI",
      "高并发 ToC 服务",
      "车机助手",
      "开源社区"
    ],
    "misconceptions": [
      "调用量第一≠能力最强——榜单反映的是落地规模而非基准",
      "登顶与促销/免费策略相关，需理性看待"
    ],
    "references": [
      "全球大模型调用量前五均为中国产品，小米MiMo-V2.5登顶",
      "小米发布MiMo-V2-Flash"
    ],
    "sources": [
      "https://www.jiemian.com/article/14837166.html",
      "https://www.toutiao.com/article/7667465248891077154/",
      "https://aistudio.baidu.com/blog/detail/753182597068869"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大模型横评",
    "relations": [
      {
        "type": "related",
        "target": "zhipu-glm",
        "note": ""
      },
      {
        "type": "related",
        "target": "deepseek-v4",
        "note": ""
      },
      {
        "type": "related",
        "target": "qwen3-8-max",
        "note": ""
      },
      {
        "type": "related",
        "target": "open-weights-2026",
        "note": ""
      }
    ]
  },
  {
    "id": "zhipu-glm",
    "name": "智谱 GLM",
    "aliases": [
      "GLM-5.2",
      "GLM-4.7-Flash",
      "智谱清言"
    ],
    "field": "大模型横评",
    "tags": [
      "国产开源",
      "旗舰",
      "混合模型"
    ],
    "difficulty": 3,
    "summary": "智谱新旗舰 GLM-5.2，另推 GLM-4.7-Flash 轻量模型",
    "definition": "智谱 AI 的 GLM 系列是国产开源大模型的代表性产品线。2026 年智谱发布新旗舰 **GLM-5.2**，在综合能力上对标国际第一梯队；同时推出 **GLM-4.7-Flash**（约 300 亿参数的混合模型），主打轻量与高性价比，覆盖高并发与端侧场景。GLM 系列以其「开源 + 大模型+Agent 平台」生态著称，GLM-4.5 时代便以「卷飞所有开源模型」著称，5.x 系列进一步巩固其在国产模型第一梯队的位置，并入选全球调用量前六。",
    "background": "智谱自 GLM-4 起确立开源路线，GLM-4.5 引发开源模型性能竞赛，GLM-5.2 成为新一代旗舰；GLM-4.7-Flash 则回应市场对轻量模型的旺盛需求，形成「旗舰 + Flash」双轨产品矩阵。",
    "core": [
      "GLM-5.2 旗舰综合能力对标国际第一梯队",
      "GLM-4.7-Flash：300 亿参数混合模型，轻量高效",
      "开源 + Agent 平台生态完整",
      "全球调用量前六（国产霸榜）"
    ],
    "applications": [
      "企业 Agent 平台",
      "对话与客服",
      "端侧轻量部署",
      "开源研究"
    ],
    "misconceptions": [
      "GLM 系列版本众多（4.5/4.7/5.2）——选购时按场景而非版本号",
      "Flash 轻量模型能力有限，复杂任务需旗舰版"
    ],
    "references": [
      "智谱发布新旗舰模型GLM-5.2",
      "智谱开源GLM-4.7-Flash：300亿参数混合模型"
    ],
    "sources": [
      "http://www.iheima.com/article-398536.html",
      "https://ai.zol.com.cn/1121/11213395.html",
      "https://cloud.tencent.com.cn/developer/article/2686753"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大模型横评",
    "relations": [
      {
        "type": "related",
        "target": "xiaomi-mimo",
        "note": ""
      },
      {
        "type": "related",
        "target": "deepseek-v4",
        "note": ""
      },
      {
        "type": "related",
        "target": "qwen3-8-max",
        "note": ""
      }
    ]
  },
  {
    "id": "llama-3-3",
    "name": "Llama 3.3",
    "aliases": [
      "Llama 3.3 70B",
      "Meta Llama"
    ],
    "field": "大模型横评",
    "tags": [
      "开源",
      "Meta",
      "英语生态"
    ],
    "difficulty": 2,
    "summary": "Meta 开源旗舰，海外开源生态基石",
    "definition": "Llama 3.3（70B）是 Meta 于 2024 年底发布的 Llama 3 系列增强版，以 70B 稠密模型提供接近 Llama 3.1 405B 的能力，显著降低部署门槛。作为海外开源生态的基石模型，Llama 3.3 在英语、工具调用与基础 Agent 任务上表现扎实，被大量企业用于私有化部署与微调。进入 2026 年，Meta 面对 DeepSeek-V4、Kimi K3、Qwen3.8 等国产超大参数开源模型的冲击，Llama 系列的参数规模与中文能力相对落后，市场号召力被分流，但其庞大的社区与工具链（Ollama/LlamaStack/llama.cpp）仍是优势。",
    "background": "Llama 系列开创「开源大模型民主化」浪潮，Llama 3.3 是该路线 2024-2026 年的主力出货型号；2026 年面对国产开源模型在参数规模与性价比上的双重压制，Meta 亟需新一代模型重振生态。",
    "core": [
      "70B 稠密架构，部署门槛低",
      "英语/工具调用扎实，海外生态完善",
      "社区工具链丰富，微调资料多",
      "许可证相对宽松（Llama 3.3 Community License）"
    ],
    "applications": [
      "海外企业私有化部署",
      "英语场景助手",
      "开源研究",
      "微调基座"
    ],
    "misconceptions": [
      "Llama 3.3 已非最新旗舰——2026 年国内开源模型在规模与中文能力上全面超越",
      "70B 参数仍需较高硬件，并非「小模型」"
    ],
    "references": [
      "Meta Llama 3.3 (70B)",
      "2026 开源大模型生态报告"
    ],
    "sources": [
      "https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct",
      "https://llama.com/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大模型横评",
    "relations": [
      {
        "type": "related",
        "target": "kimi-k3",
        "note": ""
      },
      {
        "type": "related",
        "target": "deepseek-v4",
        "note": ""
      },
      {
        "type": "related",
        "target": "qwen3-8-max",
        "note": ""
      }
    ]
  },
  {
    "id": "open-weights-2026",
    "name": "2026 开源大模型生态",
    "aliases": [
      "开源模型格局",
      "中国开源霸榜"
    ],
    "field": "大模型横评",
    "tags": [
      "开源",
      "生态",
      "中国主导"
    ],
    "difficulty": 2,
    "summary": "全球开源模型调用量前六被中国包揽，生态全面重构",
    "definition": "2026 年全球开源大模型生态发生结构性剧变：**全球大模型调用量榜单前六名全部被中国模型包揽**（小米 MiMo-V2.5 登顶，智谱 GLM、DeepSeek、Qwen、Kimi 等上榜），中国从「追赶者」变为开源生态的主导者。特征包括：超大参数开源（Kimi K3 三万亿、Qwen3.8-Max 2.4 万亿）、价格战（DeepSeek-V4 系列限时降价）、端云协同（小米/字节等依托硬件生态）、以及「总参数膨胀 + 稀疏激活」的架构趋同。开源与闭源的边界也日益模糊——开源模型能力逼近闭源旗舰，倒逼 OpenAI、Anthropic 加速迭代。",
    "background": "2025 年 DeepSeek-V3 以低成本训练震撼业界，开启中国开源模型崛起；2026 年调用量霸榜与万亿参数开源（Kimi K3）成为标志性事件，Meta Llama 等老牌开源阵营受到全面冲击，全球开源生态中心向中国转移。",
    "core": [
      "全球调用量前六全为中国模型，国产霸榜",
      "万亿级参数开源成为新常态（Kimi K3 3T / Qwen3.8 2.4T）",
      "价格战与端云协同加速普惠",
      "开源能力逼近闭源旗舰，倒逼海外厂商加速"
    ],
    "applications": [
      "企业选型参考",
      "开源社区共建",
      "本地化部署",
      "政策与投资研究"
    ],
    "misconceptions": [
      "「开源」不等于「免费」——权重免费但算力/商用需成本",
      "调用量第一反映落地规模，不直接等于综合能力第一"
    ],
    "references": [
      "全球开源模型调用量前六，国产大模型包揽",
      "2026中国AI大模型竞争力TOP20"
    ],
    "sources": [
      "https://m.thepaper.cn/newsDetail_forward_33691487",
      "https://finance.sina.com.cn/jjxw/2026-08-01/doc-inikuwea8922",
      "http://dongshihui.net/news/china/2026-07-28/23532.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "大模型横评",
    "relations": [
      {
        "type": "related",
        "target": "xiaomi-mimo",
        "note": ""
      },
      {
        "type": "related",
        "target": "kimi-k3",
        "note": ""
      },
      {
        "type": "related",
        "target": "qwen3-8-max",
        "note": ""
      },
      {
        "type": "related",
        "target": "deepseek-v4",
        "note": ""
      }
    ]
  }
];
