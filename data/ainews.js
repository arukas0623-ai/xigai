window.XIGAI = window.XIGAI || {};
window.XIGAI["AI 新进展"] = [
  {
    "id": "ai-agent",
    "name": "AI智能体",
    "aliases": [
      "AI Agent",
      "Agentic AI",
      "智能体",
      "自主代理"
    ],
    "field": "AI 新进展",
    "tags": [
      "Agentic AI",
      "自主决策",
      "工具调用",
      "多步任务"
    ],
    "difficulty": 3,
    "summary": "能自主规划、调用工具并完成多步任务的AI系统，2025年进入企业规模化落地阶段。",
    "definition": "AI智能体是基于大语言模型构建的自主系统，能够在目标约束下自主规划任务、调用外部工具（搜索、代码执行、API等）、观察反馈并迭代执行，直至完成任务。与传统聊天机器人的“一问一答”不同，智能体具备记忆、推理、行动与反思循环，能接手需要多步操作的真实工作。2025年被业界称为“智能体元年”：Gartner调查显示约15%的IT应用负责人已在考虑、试点或部署全自主智能体（2025年9月）；麦肯锡2026年报告称约10%的企业职能已规模使用AI智能体。各大厂商纷纷推出Agent平台与深度研究产品，智能体正从单轮问答走向跨系统、跨部门的长期任务执行，重构企业工作流。",
    "background": "智能体思想源于经典AI中的BDI模型与强化学习Agent，但长期受限于感知与推理能力。大语言模型赋予其常识推理与自然语言交互后，2023年出现AutoGPT等早期探索；2025年随MCP、A2A等互操作协议成熟，智能体从实验走向企业规模化落地，并形成可组合的智能体网络。",
    "core": [
      "自主规划与任务分解，将复杂目标拆解为可执行步骤",
      "工具调用与外部环境交互，观察结果并迭代执行",
      "基于反馈的反思与自我纠错机制",
      "记忆与长期上下文管理，维持多轮任务的连续性"
    ],
    "applications": [
      "客服与业务流程运营自动化",
      "软件工程智能体（自动修Bug、写测试、代码评审）",
      "深度研究助手（如OpenAI Deep Research）",
      "金融、供应链等行业的流程自动化"
    ],
    "misconceptions": [
      "智能体并非全自动无人监督：高价值任务仍需人在环路（human-in-the-loop）把关",
      "多Agent不等于更可靠：协调成本与错误放大可能抵消收益"
    ],
    "references": [
      "Gartner：15%的IT应用负责人考虑或部署自主AI智能体（2025-09）",
      "McKinsey：约10%企业职能使用AI智能体（Forbes报道，2026-03）",
      "Agentic AI Emerging as Enterprise Game-Changer（Nasdaq，2025-10）"
    ],
    "sources": [
      "https://www.gartner.com/en/newsroom/press-releases/2025-09-30-gartner-survey-finds-just-15-percent-of-it-application-leaders-are-considering-piloting-or-deploying-fully-autonomous-ai-agents",
      "https://www.forbes.com/sites/josipamajic/2026/03/22/10-of-enterprise-functions-use-ai-agents-mckinsey-finds/",
      "https://www.nasdaq.com/press-release/agentic-ai-emerging-enterprise-game-changer-2025-10-27"
    ],
    "searchedAt": "2026-08-14",
    "domain": "AI 新进展",
    "relations": [
      {
        "type": "related",
        "target": "MCP",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "A2A",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "large-language-model",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "context-engineering",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-coding-assistant",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "multimodal-llm",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "world-model",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "mcp",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "a2a",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-safety-alignment",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "multimodal-llm",
    "name": "多模态大模型",
    "aliases": [
      "多模态大语言模型",
      "Multimodal LLM",
      "原生多模态模型"
    ],
    "field": "AI 新进展",
    "tags": [
      "多模态",
      "视觉语言",
      "音视频理解",
      "跨模态推理"
    ],
    "difficulty": 3,
    "summary": "能同时处理文本、图像、音频、视频并跨模态推理的大模型，2025年起进入原生多模态时代。",
    "definition": "多模态大模型指能够同时理解与生成文本、图像、音频、视频等多种模态输入的大模型。2025—2026年，原生多模态成为前沿主流路线：Gemini 2.5 Pro在多项权威榜单登顶，GPT-4o引入引发广泛讨论的图像生成能力，GPT-5与Gemini 3进一步强化原生多模态与实时流式交互。相比“文本模型+独立视觉编码器”的早期拼接方案，原生多模态把视觉、听觉、语言统一进同一Transformer，实现真正的跨模态推理，例如“看懂屏幕并操作电脑”“听懂语气并实时回应”。MMMU-Pro等新基准被用于衡量其在专业领域的多模态理解水平；音频、视频输入成本显著下降，实时视频理解与生成产品（如Sora 2）走向落地。多模态大模型是AI从纯文本走向真实世界的关键一步。",
    "background": "早期多模态方案多为CLIP等视觉编码器与语言模型的拼接。2023年GPT-4V开启视觉对话时代；2024年GPT-4o实现原生音频实时对话；2025年起Gemini、GPT-5等原生多模态模型把图像、音视频统一进同一模型，多模态能力从“能看”进化到“看懂并行动”，成为前沿大模型的标配。",
    "core": [
      "多模态输入的联合分词与统一建模",
      "跨模态对齐与推理（文字↔图像↔音频↔视频）",
      "流式音频、视频的实时交互能力",
      "MMMU-Pro等专业多模态基准的持续升级"
    ],
    "applications": [
      "文档、图表与医学影像理解",
      "视频内容分析、摘要与生成",
      "实时语音助手与情感化对话",
      "多模态Agent（看屏幕操作电脑、驾驶辅助）"
    ],
    "misconceptions": [
      "多模态不等于简单拼接：原生统一建模的跨模态推理显著更强",
      "能“看图”不等于能“理解世界”：复杂空间与因果推理仍是短板"
    ],
    "references": [
      "Gemini 2.5 Pro takes the top spot on key benchmarks（DeepLearning.AI，2025）",
      "GPT-5 vs Gemini 3: 10 Benchmarks Head-to-Head（TokenMix，2026）",
      "MMMU-Pro Leaderboard & Scores（2026-08）"
    ],
    "sources": [
      "https://www.deeplearning.ai/the-batch/gemini-2-5-pro-takes-the-top-spot-on-key-benchmarks",
      "https://tokenmix.ai/blog/gpt-5-vs-gemini-3-10-benchmarks-2026",
      "https://benchlm.ai/benchmarks/mmmu-pro"
    ],
    "searchedAt": "2026-08-14",
    "domain": "AI 新进展",
    "relations": [
      {
        "type": "related",
        "target": "large-language-model",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "world-model",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-agent",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "inference-cost-decline",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-safety-alignment",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "embodied-ai",
        "note": "",
        "confidence": 0.75
      }
    ]
  },
  {
    "id": "world-model",
    "name": "世界模型",
    "aliases": [
      "World Model",
      "世界模拟器"
    ],
    "field": "AI 新进展",
    "tags": [
      "模拟仿真",
      "视频生成",
      "具身智能",
      "物理规律"
    ],
    "difficulty": 4,
    "summary": "让AI学习物理世界规律、在内部模拟环境状态与演化的模型，2025年Genie 3成为里程碑。",
    "definition": "世界模型指让AI学习物理世界运行规律、能够在内部模拟环境状态与演化的模型，被视为通向通用智能的关键能力之一。2025年8月，Google DeepMind发布Genie 3，在7.19亿个真实世界视频上训练，能根据文字或图片实时生成可交互的720p虚拟世界，成为世界模型领域的里程碑成果，并入选NeurIPS 2025主题演讲。世界模型让机器“先想象、再行动”：机器人在仿真世界中试错训练、自动驾驶在虚拟场景中推演危险情况、游戏场景即时生成。Yann LeCun等学者更主张世界模型是具身智能与自主决策的基础，能让AI在行动前先在内部模拟后果。它把“视频生成”升级为“交互式世界模拟”，被视作游戏、机器人、自动驾驶等领域的核心技术底座。",
    "background": "世界模型概念源于强化学习与认知科学中的“心智模型”，Yann LeCun等长期倡导用内部世界模型预测环境。2024年Genie 1、Genie 2展示从单张图生成可玩世界；2025年Genie 3改用真实世界视频并实现实时高质量生成，行业开始将其用于机器人数据增强与决策规划。",
    "core": [
      "从海量真实视频中学习物理与交互规律",
      "文本/图像条件生成可交互环境",
      "实时高质量渲染（Genie 3支持720p实时生成）",
      "为具身智能提供可控、可复现的仿真训练场"
    ],
    "applications": [
      "游戏场景即时生成与关卡设计",
      "机器人虚拟训练与仿真数据生成",
      "自动驾驶危险场景推演",
      "影视预演与视频内容生成"
    ],
    "misconceptions": [
      "世界模型不是简单的视频生成器，核心是学习因果与物理规律",
      "生成的世界不等于真实世界：长期一致性、幻觉与物理失真仍是难题"
    ],
    "references": [
      "Genie 3: A new frontier for world models（DeepMind官方博客，2025-08）",
      "Keynote: Genie 3（NeurIPS 2025）",
      "DeepMind独家访谈：Genie 3世界模型（36氪，2025）"
    ],
    "sources": [
      "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/",
      "https://nips.cc/virtual/2025/loc/san-diego/132816",
      "https://m.36kr.com/p/3410828075339393"
    ],
    "searchedAt": "2026-08-14",
    "domain": "AI 新进展",
    "relations": [
      {
        "type": "related",
        "target": "multimodal-llm",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-agent",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "视频生成",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "embodied-ai",
        "note": "",
        "confidence": 0.75
      }
    ]
  },
  {
    "id": "mcp",
    "name": "MCP（模型上下文协议）",
    "aliases": [
      "Model Context Protocol",
      "模型上下文协议",
      "MCP协议"
    ],
    "field": "AI 新进展",
    "tags": [
      "智能体",
      "工具互操作",
      "开放标准",
      "API"
    ],
    "difficulty": 3,
    "summary": "Anthropic提出的开放标准，让大模型以统一方式连接外部工具与数据，2025年被全行业采用。",
    "definition": "MCP（Model Context Protocol，模型上下文协议）是Anthropic于2024年11月提出的开放标准，通过统一的“客户端—服务器”架构，让大模型以标准化接口连接外部工具、数据与业务系统，被类比为“AI应用的USB-C接口”。2025年MCP被业界广泛采用：OpenAI、Google DeepMind、Microsoft、AWS等相继宣布支持或采用，GitHub、Databricks等将其融入开发者生态；2025年底，MCP与AGENTS.md被捐赠给Linux基金会新成立的Agentic AI Foundation，成为行业事实标准。到2026年，MCP已成为连接AI与外部世界的默认接口，开发者社区的服务器数量持续快速增长，数千个官方与社区服务器覆盖数据库、云服务、办公套件等场景。它大幅降低了模型接入工具的定制成本，是AI智能体生态最关键的基础设施之一。",
    "background": "此前每个AI应用接入工具都要为各厂商分别定制集成，成本高且不可移植。MCP类比“USB-C”：通过统一协议定义工具的发现、调用与认证，一次适配、处处可用。2025年随Agent浪潮爆发，MCP从Anthropic内部标准演变为行业事实标准并进入Linux基金会治理，安全规范与授权机制在2026年逐步成型。",
    "core": [
      "“客户端—服务器”统一架构，工具以标准化接口暴露",
      "统一的工具发现、调用与认证流程",
      "解决“工具碎片化”，一次适配、处处复用",
      "工具权限与数据安全治理成为生态重点"
    ],
    "applications": [
      "AI编程工具接入代码仓库与数据库",
      "企业SaaS智能体连接CRM、ERP等业务系统",
      "个人助手连接本地文件、浏览器与邮箱",
      "Agent之间共享工具与能力"
    ],
    "misconceptions": [
      "MCP不是模型或框架，而是一套连接协议",
      "有了MCP不代表安全：工具权限失控与数据泄露风险仍需治理"
    ],
    "references": [
      "MCP joins the Linux Foundation（GitHub官方博客）",
      "OpenAI and Anthropic Donate AGENTS.md and MCP to New Agentic AI Foundation（InfoQ，2025-12）",
      "Model Context Protocol in 2026: Standard for AI Tool Use（FutureAGI）"
    ],
    "sources": [
      "https://github.blog/open-source/maintainers/mcp-joins-the-linux-foundation-what-this-means-for-developers-building-the-next-era-of-ai-tools-and-agents/",
      "https://www.infoq.com/news/2025/12/agentic-ai-foundation/",
      "https://futureagi.com/blog/model-context-protocol-mcp-2025/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "AI 新进展",
    "relations": [
      {
        "type": "related",
        "target": "A2A",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "ai-agent",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "context-engineering",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "open-source-model-ecosystem",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "a2a",
    "name": "A2A（智能体间通信协议）",
    "aliases": [
      "Agent2Agent Protocol",
      "A2A协议",
      "智能体间通信协议"
    ],
    "field": "AI 新进展",
    "tags": [
      "多智能体",
      "互操作",
      "开放标准",
      "协作"
    ],
    "difficulty": 3,
    "summary": "Google提出的开放协议，让不同厂商的AI智能体相互发现、协商并协作，2025年6月捐给Linux基金会。",
    "definition": "A2A（Agent2Agent Protocol，智能体间通信协议）是Google于2025年4月提出的开放标准，旨在让不同厂商、不同框架的AI智能体相互发现、协商并协作完成任务，被视作“智能体的HTTP”。A2A与MCP互补：MCP解决“智能体如何调用工具”，A2A解决“智能体之间如何协作”。2025年6月Google将A2A捐赠给Linux基金会并启动A2A项目，微软、亚马逊、Salesforce、SAP等50多家企业加入；OpenAI于2025年底加入该项目并共同推动Agentic AI Foundation。A2A基于Agent Card进行能力发现、基于JSON-RPC进行任务协商与委派，支持智能体跨企业、跨防火墙协作，任务可分解、委派并跟踪状态，标志着AI从单智能体走向多智能体互操作网络。它与MCP分工明确：前者连接工具，后者连接智能体，共同构成Agent互操作的两大基石。",
    "background": "2025年Agent爆发后，LangGraph、AutoGen、CrewAI等框架各自为政，智能体无法跨系统协作，形成“孤岛”。A2A通过标准化的Agent Card、任务协商与消息传递打破框架壁垒，Linux基金会2025年6月宣布启动A2A项目；2026年A2A与MCP、AGENTS.md在Agentic AI Foundation下协同演进，多智能体编排成为企业架构新课题。",
    "core": [
      "Agent Card：智能体能力的标准化发现机制",
      "基于JSON-RPC的任务协商、委派与状态跟踪",
      "跨框架、跨厂商互操作",
      "安全认证与权限边界控制"
    ],
    "applications": [
      "跨企业供应链自动化协作",
      "多Agent工作流编排（研究—编码—测试接力）",
      "平台间Agent市场与任务调度",
      "客服、内部系统与外部伙伴系统协同"
    ],
    "misconceptions": [
      "A2A与MCP不是竞争关系，而是互补的两层协议",
      "A2A仍在快速演进，尚未完全标准化，生态兼容性需持续跟踪"
    ],
    "references": [
      "Announcing the Agent2Agent Protocol (A2A)（Google Developers Blog，2025-04）",
      "Linux Foundation Launches the Agent2Agent Protocol Project（2025-06）",
      "A2A donated to Linux Foundation（SD Times，2025-06）"
    ],
    "sources": [
      "https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/",
      "https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents",
      "https://sdtimes.com/ai/this-week-in-ai-dev-tools-a2a-donated-to-linux-foundation-openai-adds-deep-research-to-api-and-more-june-27-2025/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "AI 新进展",
    "relations": [
      {
        "type": "related",
        "target": "MCP",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "ai-agent",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "多智能体系统",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "mixture-of-experts",
    "name": "混合专家架构（MoE）",
    "aliases": [
      "Mixture of Experts",
      "MoE",
      "混合专家模型"
    ],
    "field": "AI 新进展",
    "tags": [
      "稀疏激活",
      "大模型架构",
      "降本",
      "路由"
    ],
    "difficulty": 4,
    "summary": "将模型拆为多个专家子网络、每次只激活一部分的架构，2025年成为万亿参数大模型主流。",
    "definition": "混合专家架构（Mixture of Experts，MoE）将模型拆分为多个“专家”子网络，由路由网络根据输入token只激活其中一部分专家（如Top-2），从而用远低于总参数量的计算量获得大模型能力，实现“参数规模×10、算力成本×1”的效果。2025年MoE成为大模型主流架构：DeepSeek-V3总参数6710亿、每个token仅激活370亿；Qwen3-MoE（2350亿/激活220亿）、Llama 4（4000亿/激活约1090亿）、Kimi K2（1万亿/激活320亿）等前沿与开源模型均采用MoE。路由机制、负载均衡与专家粒度直接决定模型质量，是MoE工程化的核心难点，业界还发展出MoE式模型合并与蒸馏等延伸技术。MoE把“模型做大”与“推理做便宜”同时满足，直接推动了开源模型的低成本服务，是推理成本下降最重要的架构引擎。",
    "background": "MoE思想源自1991年Jacobs等人的论文，但因训练不稳定长期边缘化。2023年Mistral 8x7B与GPT-4的MoE传闻使其复兴；2024年Mixtral、DeepSeek-V2验证规模化可行性；2025年DeepSeek-V3、Qwen3、Llama 4集体转向MoE；2026年MoE与稀疏注意力、长上下文结合，“超大参数、超低激活”成为新一代模型设计范式。",
    "core": [
      "路由网络按token动态选择专家（稀疏激活）",
      "总参数与激活参数解耦，训练能力、推理省钱",
      "细粒度专家与共享专家提升利用率",
      "负载均衡与训练稳定性是关键工程难题"
    ],
    "applications": [
      "低成本开源大模型服务与API推理",
      "超长上下文模型（常配合稀疏注意力）",
      "企业私有化部署与高并发推理",
      "端侧与中小算力场景的大模型应用"
    ],
    "misconceptions": [
      "MoE不是“多个模型拼在一起”，而是共享底座加稀疏激活",
      "MoE部署时所有专家仍需载入显存，显存成本不随激活参数下降"
    ],
    "references": [
      "Unpacking DeepSeek-V3: From Architectural Renovations to Technical Innovations（TechRxiv）",
      "Mixture of Experts Infrastructure: Scaling Sparse Models for Production AI（Introl）",
      "开源AI模型缩小差距：DeepSeek、Qwen3和Llama 4（Introl中文，2025-12）"
    ],
    "sources": [
      "https://www.techrxiv.org/doi/full/10.36227/techrxiv.175744930.06343205/v1",
      "https://introl.com/blog/mixture-of-experts-moe-infrastructure-scaling-sparse-models-guide",
      "https://introl.com/zh/blog/open-source-ai-models-december-2025"
    ],
    "searchedAt": "2026-08-14",
    "domain": "AI 新进展",
    "relations": [
      {
        "type": "related",
        "target": "sparse-attention",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "inference-cost-decline",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "open-source-model-ecosystem",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "large-language-model",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "scaling-law-debate",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "model-distillation-merging",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "sparse-attention",
    "name": "稀疏注意力",
    "aliases": [
      "Sparse Attention",
      "稀疏注意力机制"
    ],
    "field": "AI 新进展",
    "tags": [
      "长上下文",
      "效率优化",
      "Transformer",
      "降本"
    ],
    "difficulty": 4,
    "summary": "只计算注意力中关键位置得分、跳过无关token的技术，让超长上下文推理成为现实。",
    "definition": "稀疏注意力通过只计算注意力矩阵中“重要”位置的得分、跳过无关token，把标准注意力的O(n²)计算量降到近似线性，是大模型支撑超长上下文的关键技术。2025年该方向密集突破：DeepSeek-V3.2引入DeepSeekSparseAttention（DSA），配合轻量索引器实现长文本高效推理；NeurIPS 2025收录DuSA（双阶段稀疏注意力，同时加速训练与推理）、Delta Attention等新方法；硬件侧出现面向Tensor Core的稀疏注意力协同设计。稀疏注意力还被用于降低KV缓存占用与首token延迟，配合投机解码进一步提速。业界普遍认为，稀疏化是继并行化、量化之后降低大模型算力成本最重要的结构手段之一。它与MoE共同构成“稀疏化”降本的两大支柱，让百万级乃至千万级token上下文（如Llama 4 Scout的1000万token）成为现实。",
    "background": "Transformer的注意力计算随序列长度平方级增长，成为长上下文瓶颈。业界先后用FlashAttention（IO优化）、KV缓存压缩缓解；2025年转向“结构稀疏”：基于索引器或启发式只保留关键token的注意力，配合滑动窗口加全局锚点的混合模式；线性注意力与状态空间模型（如Mamba）等替代方案同步发展，形成并行局面。",
    "core": [
      "用索引器/启发式动态挑选关键token",
      "滑动窗口+全局锚点等混合稀疏模式",
      "与KV缓存压缩、量化等优化叠加使用",
      "同时加速训练与推理（如DuSA）"
    ],
    "applications": [
      "超长文档与代码库级理解",
      "长视频、长音频与多轮对话",
      "MoE大模型的低成本长上下文服务",
      "百万token级Agent记忆与上下文管理"
    ],
    "misconceptions": [
      "稀疏注意力不是简单“截断窗口”，而是动态选择重要内容",
      "稀疏化可能丢失关键信息，需与检索、压缩等手段配合"
    ],
    "references": [
      "DuSA: Dual-Stage Sparse Attention（NeurIPS 2025）",
      "Delta Attention: Fast and Accurate Sparse Attention Inference（NeurIPS 2025）",
      "Sparse Attention: A Co-Design Approach for Efficient Transformer Execution（IEEE）"
    ],
    "sources": [
      "https://neurips.cc/virtual/2025/loc/san-diego/poster/115603",
      "https://neurips.cc/virtual/2025/loc/san-diego/poster/118545",
      "https://ieeexplore.ieee.org/document/11235365"
    ],
    "searchedAt": "2026-08-14",
    "domain": "AI 新进展",
    "relations": [
      {
        "type": "related",
        "target": "mixture-of-experts",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "inference-cost-decline",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "context-engineering",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "large-language-model",
        "note": "",
        "confidence": 0.75
      }
    ]
  },
  {
    "id": "scaling-law-debate",
    "name": "Scaling Law 之争",
    "aliases": [
      "规模定律之争",
      "Scaling Law",
      "规模扩展规律"
    ],
    "field": "AI 新进展",
    "tags": [
      "预训练",
      "测试时计算",
      "行业争论",
      "数据瓶颈"
    ],
    "difficulty": 4,
    "summary": "关于“模型能力是否随规模持续提升”的争论，2025年因数据瓶颈与o3、DeepSeek-R1而爆发。",
    "definition": "Scaling Law之争是2025年AI行业最受关注的话题：模型能力是否还会随数据、参数、算力规模持续提升？传统观点认为“大力出奇迹”，堆算力即可持续升级；但2025年多个事件使争论爆发——OpenAI前首席科学家Ilya Sutskever在NeurIPS 2025上明确表示“预训练Scaling时代已经结束”，AI将重回研究驱动；与此同时，OpenAI o3与DeepSeek-R1证明“测试时计算（test-time compute）”是新的扩展维度，即让模型在推理时花更多算力思考，形成“预训练—后训练—测试时”三阶段Scaling的新共识。支持“规模继续有效”的一方则以GPT-5等持续增长为例，认为瓶颈在于数据与效率而非范式本身。这场争论重塑了行业对“堆算力”叙事的信心与投资逻辑。",
    "background": "2020年OpenAI《Scaling Laws for Neural Language Models》确立“越大越好”范式，支撑GPT系列万亿参数军备竞赛。2025年多个信号引发反思：高质量数据趋近上限（Ilya称“数据是AI的化石燃料”）、部分前沿模型收益递减、DeepSeek以极低成本逼近前沿性能，微软内部研究亦发现部分定律不再成立。行业共识从“唯规模论”转向多维度扩展。",
    "core": [
      "预训练Scaling收益递减与高质量数据瓶颈",
      "“测试时计算”成为新的扩展维度",
      "研究驱动（算法与架构创新）重新被重视",
      "不同机构对规模效应的判断明显分化"
    ],
    "applications": [
      "模型研发投入与算力采购决策",
      "推理时思考预算（reasoning budget）的动态分配",
      "低成本小模型的工程化应用",
      "投资叙事与行业预期管理"
    ],
    "misconceptions": [
      "“Scaling失效”不等于AI发展停滞，而是扩展维度切换",
      "测试时计算同样消耗算力，并非“免费午餐”"
    ],
    "references": [
      "Ilya Sutskever Says AI's 'Scaling Era' is Ending（钛媒体/TMTPost，2025）",
      "DeepSeek-R1 与 OpenAI o3 的启示：Test-Time Compute（阿里云开发者社区）",
      "大模型三阶段的Scaling Laws接力赛（腾讯云）"
    ],
    "sources": [
      "https://en.tmtpost.com/post/7782787",
      "https://developer.aliyun.com/article/1693067",
      "https://cloud.tencent.cn/developer/article/2501338"
    ],
    "searchedAt": "2026-08-14",
    "domain": "AI 新进展",
    "relations": [
      {
        "type": "related",
        "target": "inference-cost-decline",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "mixture-of-experts",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-coding-assistant",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "open-source-model-ecosystem",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-safety-alignment",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "ai-coding-assistant",
    "name": "AI编程助手",
    "aliases": [
      "AI Coding Assistant",
      "AI编程工具",
      "AI代码助手"
    ],
    "field": "AI 新进展",
    "tags": [
      "软件工程",
      "智能体",
      "开发者工具",
      "效率"
    ],
    "difficulty": 2,
    "summary": "用大模型辅助写代码、改代码、修Bug的工具，2025年用户破千万并全面“智能体化”。",
    "definition": "AI编程助手是基于大模型辅助开发人员编写、补全、修改与审查代码的工具。2025年该赛道全面爆发并进入“智能体化”阶段：GitHub Copilot用户突破2000万，成为企业级AI编程的领跑者；Anthropic发布Claude Code、OpenAI推出Codex，支持多文件修改、自动运行测试、自主修复，从“自动补全”升级为“自动化软件工程师”；Cursor等新锐凭借流畅体验迅速崛起并实现数亿美元年化收入。Stack Overflow等调查显示绝大多数开发者已在使用或计划使用AI编程工具。企业端，AI编程从个人效率工具升级为研发平台：代码托管、CI/CD与安全扫描全面接入AI。AI编程正演变为重构软件工程流程的核心生产力，是AI商业化最成熟的应用方向之一。",
    "background": "2018年GitHub Copilot等以“代码补全”开创先河，随后出现ChatGPT式对话编程。2024年AI编程进入IDE原生集成与Agent模式；2025年Claude Code、OpenAI Codex等自主智能体掀起“AI写代码”热潮，SWE-bench等真实软件工程基准成为评测主战场；2026年出现“AI工程师”岗位与Agent跑通端到端软件交付的实践。",
    "core": [
      "从自动补全到多文件自主修改的Agent化",
      "结合测试执行与错误反馈的闭环迭代",
      "代码库级上下文理解（索引+RAG）",
      "代码安全与质量审查成为企业落地关键"
    ],
    "applications": [
      "日常开发加速与项目脚手架生成",
      "自动化测试编写与Bug修复",
      "代码评审与安全漏洞扫描",
      "遗留系统现代化与跨语言迁移"
    ],
    "misconceptions": [
      "AI编程不会消灭程序员，而是把工作重心转移到审查、架构与产品",
      "AI生成的代码存在幻觉与安全隐患，必须建立人工审查与测试防线"
    ],
    "references": [
      "GitHub Copilot Hits 20 Million Users（Windows Report，2025）",
      "GitHub leads AI coding in enterprises（VentureBeat，2025）",
      "Which AI Coding Tools Do Developers Actually Use at Work?（JetBrains Research，2026）"
    ],
    "sources": [
      "https://windowsreport.com/github-copilot-hits-20-million-users-as-ai-coding-market-heats-up/",
      "https://venturebeat.com/technology/github-leads-the-enterprise-claude-leads-the-pack-cursors-speed-cant-close",
      "https://blog.jetbrains.com/research/2026/04/which-ai-coding-tools-do-developers-actually-use-at-work/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "AI 新进展",
    "relations": [
      {
        "type": "related",
        "target": "ai-agent",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "context-engineering",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "open-source-model-ecosystem",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "scaling-law-debate",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "model-distillation-merging",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "context-engineering",
    "name": "上下文工程",
    "aliases": [
      "Context Engineering",
      "上下文管理"
    ],
    "field": "AI 新进展",
    "tags": [
      "提示工程",
      "Agent记忆",
      "RAG",
      "成本优化"
    ],
    "difficulty": 3,
    "summary": "系统设计、组织、管理与优化大模型“上下文”的工程学科，2025年成为构建可靠Agent的核心技能。",
    "definition": "上下文工程是系统性地设计、组织、管理与优化输入给大模型“上下文”（系统提示、示例、检索文档、工具描述、记忆等）的工程学科。与传统“提示词工程”只关注单条指令不同，上下文工程把上下文当作需要持续维护的“系统状态”：如何写入、压缩、更新、检索与注入信息，直接决定Agent的长任务表现与成本。2025年Anthropic发布《为AI智能体做有效的上下文工程》工程实践，arXiv出现系统性综述（2507.13334），行业把上下文工程视为提示词工程的进化形态。核心洞察是：给模型“什么信息、怎么给”往往比“怎么问”更关键；上下文工程还涵盖工具调用结果的组织与格式约束，是降低幻觉、提升Agent稳定性的关键手段。",
    "background": "早期工程化聚焦提示词模板（prompt engineering）。随上下文窗口扩展至百万token与Agent长期任务兴起，业界发现“给什么、怎么给”比“怎么问”更重要。2025年长上下文、上下文缓存与记忆系统（如mem0）成熟，促使上下文工程成为独立学科，并成为AI工程师的必备技能。",
    "core": [
      "上下文写入与格式化的系统性策略",
      "动态检索与注入（RAG与工具结果整合）",
      "上下文压缩与缓存，直接降低推理成本",
      "Agent记忆的读写、更新与遗忘管理"
    ],
    "applications": [
      "Agent长期任务的状态管理",
      "企业知识问答与客服的提示体系搭建",
      "利用上下文缓存降低API成本",
      "多轮对话与工具调用的稳定输出"
    ],
    "misconceptions": [
      "上下文工程不等于写提示词，而是管理模型“看到什么”的完整系统",
      "长上下文不是越多越好：噪声注入会显著降低模型表现"
    ],
    "references": [
      "Effective context engineering for AI agents（Anthropic Engineering，2025）",
      "A Survey of Context Engineering for Large Language Models（arXiv:2507.13334）"
    ],
    "sources": [
      "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
      "https://ar5iv.labs.arxiv.org/html/2507.13334v2"
    ],
    "searchedAt": "2026-08-14",
    "domain": "AI 新进展",
    "relations": [
      {
        "type": "related",
        "target": "ai-agent",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "MCP",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "inference-cost-decline",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-coding-assistant",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "mcp",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "sparse-attention",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "model-distillation-merging",
    "name": "模型蒸馏与合并",
    "aliases": [
      "知识蒸馏",
      "模型合并",
      "Distillation & Merging"
    ],
    "field": "AI 新进展",
    "tags": [
      "小模型",
      "降本",
      "开源生态",
      "能力迁移"
    ],
    "difficulty": 4,
    "summary": "用大模型训练小而强的模型、或将多个专长模型融合的技术，2025年成为“低成本高性能”的主力。",
    "definition": "模型蒸馏指用大而强的“教师模型”的输出（含推理链）训练小而快的“学生模型”，让低成本模型继承前沿能力；模型合并则把多个专长模型（如代码、数学、中文）在参数或输出层面融合为更全面的模型。2025年这两类技术成为“以低成本获得高性能”的主力：DeepSeek-R1把推理能力蒸馏进1.5B—70B的小模型，部分在数学与代码推理上超过GPT-4o级别模型；阿里推出DistilQwen2.5等工业级蒸馏实践；学界同时揭示挑战——“小模型难以从强推理者身上学习”（ICML 2025）。蒸馏与合并显著降低了小模型获取前沿能力的门槛，使开源社区能快速产出接近旗舰水平的轻量模型，加速端侧与私有化部署。",
    "background": "蒸馏思想源于2015年Hinton的“暗知识”论文；模型合并随LoRA微调普及在2023—2024年兴起（TIES、DARE等算法）。2025年推理模型（如DeepSeek-R1）的蒸馏让小模型“学会思考”，合并技术（含MoE式融合）进一步降本；2026年出现面向推理链蒸馏的改进方法（思考过程筛选与长度控制），缓解小模型“学不会思考”的问题。",
    "core": [
      "以教师模型输出（含推理链）监督训练学生模型",
      "蒸馏常与LoRA等轻量微调技术结合",
      "合并算法处理权重/路由冲突（TIES、DARE等）",
      "能力蒸馏中的分布失配与规模鸿沟问题"
    ],
    "applications": [
      "手机与端侧AI助手",
      "企业低成本私有化部署",
      "开源社区的高质量合并模型",
      "垂直领域（代码、医学、金融）快速定制"
    ],
    "misconceptions": [
      "蒸馏不是简单“抄答案”：推理链蒸馏存在质量上限与分布失配",
      "合并模型并非总能“取其长”，可能引入冲突或性能回退"
    ],
    "references": [
      "DistilQwen2.5: Industrial Practices of Training Distilled Models（ACL 2025 Industry）",
      "Small Models Struggle to Learn from Strong Reasoners（ICML 2025）",
      "LLM Modules: Knowledge Transfer from Large to Small Model"
    ],
    "sources": [
      "https://aclanthology.org/2025.acl-industry.4/",
      "https://icml.cc/virtual/2025/52467",
      "https://www.semanticscholar.org/paper/ac754c319b7af5e96382ad583b3d0cb6d8abda55"
    ],
    "searchedAt": "2026-08-14",
    "domain": "AI 新进展",
    "relations": [
      {
        "type": "related",
        "target": "open-source-model-ecosystem",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "inference-cost-decline",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "mixture-of-experts",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-coding-assistant",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "ai-safety-alignment",
    "name": "AI安全对齐",
    "aliases": [
      "AI对齐",
      "AI Alignment",
      "安全对齐"
    ],
    "field": "AI 新进展",
    "tags": [
      "AI安全",
      "价值观对齐",
      "可解释性",
      "监管"
    ],
    "difficulty": 4,
    "summary": "让AI系统的目标与行为符合人类意图和价值观的研究与工程实践，2025年进入超大规模工程化阶段。",
    "definition": "AI安全对齐是让AI系统的目标、行为与人类意图和价值观保持一致的研究与工程实践，涵盖价值观对齐、鲁棒性、可解释性与治理。2025年对齐进入“超大规模模型”工程化阶段：Anthropic为Claude 4.5设计含200条原则的宪法与“元反馈”对齐方法；OpenAI与Anthropic联合开展对齐评估演练；美国、欧盟等监管框架（如EU AI Act）分阶段生效。可解释性方面，Anthropic等机构通过稀疏自编码器定位模型内部“特征”与“电路”，让对齐从“黑盒调优”走向“可观测”。推理模型（如DeepSeek-R1）的强化学习对齐也提供了新范式。对齐已成为AGI竞赛中最受关注的“安全基础设施”，也是企业AI合规的核心环节。",
    "background": "对齐源于2010年代的RLHF与AI安全运动（DeepMind、OpenAI、MIRI等）。2023—2024年“超级对齐”项目与各国AI安全研究所成立；2025年随能力快速提升，行业从理念走向工程化：安全评估框架（RSP）、红队测试、宪法式对齐、可解释性工具成为前沿实验室的常规流程；2026年多国AI安全研究所与前沿实验室展开联合评估与信息共享。",
    "core": [
      "RLHF/DPO等偏好对齐技术",
      "宪法式对齐与元反馈（meta-feedback）",
      "“负责任扩展”等安全评估框架（RSP）",
      "可解释性与内部状态监控"
    ],
    "applications": [
      "前沿模型发布前的安全评估",
      "企业AI应用的合规与内容安全",
      "大模型红队测试与越狱防护",
      "配合监管（EU AI Act等）落地"
    ],
    "misconceptions": [
      "对齐不是一次性“打补丁”，而是贯穿训练到部署的持续过程",
      "对齐不能消除所有风险：它降低而非根除误用与失控的可能"
    ],
    "references": [
      "Findings from a Pilot Anthropic–OpenAI Alignment Evaluation Exercise（2025）",
      "Claude 4.5 Expands to a 200-Principle Constitution（2025）",
      "Common Elements of Frontier AI Safety Policies（METR，2025-12）"
    ],
    "sources": [
      "https://alignment.anthropic.com/2025/openai-findings/",
      "https://etude.lu/article/claude-4-5-constitution-200-principles-meta-feedback",
      "https://metr.org/blog/2025-12-09-common-elements-of-frontier-ai-safety-policies/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "AI 新进展",
    "relations": [
      {
        "type": "related",
        "target": "ai-agent",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "open-source-model-ecosystem",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "scaling-law-debate",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "multimodal-llm",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "open-source-model-ecosystem",
    "name": "开源模型生态",
    "aliases": [
      "开源大模型",
      "Open Source AI",
      "开放权重模型"
    ],
    "field": "AI 新进展",
    "tags": [
      "开放权重",
      "社区",
      "私有化部署",
      "AI民主化"
    ],
    "difficulty": 2,
    "summary": "以开放权重模型及工具链、社区构成的生态，2025年开源模型大幅逼近闭源前沿。",
    "definition": "开源模型生态指以开放权重模型及其工具链、社区构成的体系。2025年生态迎来质变：DeepSeek-V3/R1以极低成本逼近前沿性能引发全球震动；阿里通义千问Qwen3系列（含MoE版）全部开源并采用Apache 2.0许可；Meta发布Llama 4（MoE架构，Scout版本支持千万级token上下文）；Mistral、Gemma等持续跟进。到2025年底，多家评测显示开源模型与GPT-5级闭源模型的差距大幅缩小。社区侧，微调、蒸馏与合并让开源模型快速适配垂直场景，Ollama、vLLM、LM Studio等工具推动本地与端侧部署普及。开放权重还降低了研究与审计门槛，使全球开发者能基于同一底座协作创新。开源生态成为“推理成本下降”与“AI民主化”的核心引擎，也催生了围绕开放权重与真开源的讨论。",
    "background": "开源LLM始于2022年的OPT、BLOOM，2023年Llama 1/2点燃社区，2024年Qwen、Mistral等百花齐放；2025年DeepSeek的“低成本高性能”路线与Llama 4、Qwen3的规模化开源，把开源推到与闭源正面竞争的位置；2026年开源模型在长上下文、多模态与Agent任务上与闭源差距进一步收窄，“开放权重”与“数据开放”的争论持续。",
    "core": [
      "开放权重模型快速逼近闭源前沿",
      "Apache等宽松许可推动商业采用",
      "vLLM、Ollama等部署工具链成熟",
      "社区微调、蒸馏与合并生态繁荣"
    ],
    "applications": [
      "企业私有化与本地部署",
      "端侧设备推理",
      "垂直行业定制微调",
      "教育与科研"
    ],
    "misconceptions": [
      "开源模型不等于“免费无限制”：许可条款（如Meta的商用限制、数据权利）需仔细甄别",
      "开源与闭源差距虽缩小，但在复杂推理与多模态前沿仍有代差"
    ],
    "references": [
      "Open Source AI Models Close the Gap（Introl，2025-12）",
      "The state of open source AI models in 2025（Red Hat Developer）",
      "Key Open-Source AI Models and Updates Shaping 2025（Index.dev）"
    ],
    "sources": [
      "https://introl.com/zh/blog/open-source-ai-models-december-2025",
      "https://developers.redhat.com/articles/2026/01/07/state-open-source-ai-models-2025",
      "https://www.index.dev/blog/open-source-ai-updates"
    ],
    "searchedAt": "2026-08-14",
    "domain": "AI 新进展",
    "relations": [
      {
        "type": "related",
        "target": "mixture-of-experts",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "model-distillation-merging",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "inference-cost-decline",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-safety-alignment",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "mcp",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "scaling-law-debate",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-coding-assistant",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "inference-cost-decline",
    "name": "推理成本下降",
    "aliases": [
      "Inference Cost Decline",
      "Token通缩",
      "推理降价"
    ],
    "field": "AI 新进展",
    "tags": [
      "降本",
      "MoE",
      "量化",
      "价格战"
    ],
    "difficulty": 2,
    "summary": "大模型推理单位成本持续大幅下降的趋势，2025—2026年token价格进入“通缩”时代。",
    "definition": "推理成本下降指大模型在推理（使用）环节的单位成本持续大幅走低的趋势。2025—2026年多因素叠加使token价格呈“通缩”态势：MoE与稀疏注意力等架构创新、量化与KV缓存压缩等工程优化、蒸馏小模型的普及，以及DeepSeek等厂商发起的激进定价，共同把每百万token价格从GPT-4时代的高位拉低数十倍（有统计称相对GPT-4发布时已便宜约300倍），Claude、Gemini等随后跟进降价。推理芯片与推理引擎（vLLM、TensorRT-LLM等）的竞争，以及模型本身的稀疏化，使单位算力产出持续提升。推理成本下降直接改变了AI应用的经济模型：高频调用、多步推理的Agent应用从“烧钱”变为“可负担”，使“默认调用模型”的Agent经济成为可能。",
    "background": "早期GPT-4等模型推理成本高昂，限制规模化应用。2024年起FlashAttention、量化（GPTQ/AWQ）等优化与开源模型竞争使价格开始下探；2025年1月DeepSeek以极低价格引发行业“价格战”，随后MoE架构普及、推理专用芯片（Groq、Cerebras）与规模化工程进一步压低成本，2026年行业进入“低价竞争+高端分层定价”并存的新格局。",
    "core": [
      "架构创新（MoE、稀疏注意力）从源头降低激活算力",
      "推理工程优化：量化、投机解码、KV缓存、上下文缓存",
      "开源模型与竞争性定价倒逼全线降价",
      "推理芯片与规模化部署红利"
    ],
    "applications": [
      "Agent高频调用与多步推理的商业模式",
      "大规模实时应用（客服、代码助手、翻译）",
      "端侧低成本部署",
      "AI应用的普惠化与创业门槛降低"
    ],
    "misconceptions": [
      "token变便宜不等于AI应用变便宜：上下文膨胀与Agent多轮调用可能抬高总成本",
      "降价主要惠及推理密集场景，训练与高端模型成本仍高企"
    ],
    "references": [
      "The AI Token Cost Deflation Curve: 300x Cheaper Since GPT-4（AgentMarketCap，2026-04）",
      "AI inference economics in 2026: the pricing war（Deluair）",
      "AI is becoming a bargain hunter's market（The Register，2026-07）"
    ],
    "sources": [
      "https://agentmarketcap.ai/blog/2026/04/12/ai-token-cost-deflation-curve-2026-agent-economy-unit-economics",
      "https://deluair.com/consultancy/insights/ai-inference-economics-2026",
      "https://www.theregister.com/ai-and-ml/2026/07/08/ai-is-becoming-a-bargain-hunters-market-with-a-few-luxury-models-on-top/5268050"
    ],
    "searchedAt": "2026-08-14",
    "domain": "AI 新进展",
    "relations": [
      {
        "type": "related",
        "target": "mixture-of-experts",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "sparse-attention",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "open-source-model-ecosystem",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "model-distillation-merging",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "multimodal-llm",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "scaling-law-debate",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "context-engineering",
        "note": "",
        "confidence": 0.85
      }
    ]
  }
];
