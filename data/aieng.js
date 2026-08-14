// 析概知识库 · AI工程与模型领域概念数据
// 生成日期: 2026-08-14（searchedAt 为搜索日期）
// 共 14 个概念
window.XIGAI = window.XIGAI || {};
window.XIGAI["AI工程与模型"] = [
  {
    "id": "deepseek-harness",
    "name": "DeepSeek Harness",
    "aliases": [
      "DeepSeek智能体框架",
      "deepseek-harness",
      "DeepSeek Agent Harness"
    ],
    "field": "AI工程与模型",
    "tags": [
      "智能体框架",
      "开源工具",
      "插件生态",
      "AI工程"
    ],
    "difficulty": 4,
    "summary": "DeepSeek 官方开源的智能体开发框架，主打“一切皆插件”。",
    "definition": "DeepSeek Harness 是 DeepSeek 官方开源的智能体（Agent）开发框架与工具链，核心理念是“一切皆插件”（Everything is a Plugin）。它把浏览器控制、终端执行、文件读写、代码运行、网络搜索等能力封装为可插拔插件，开发者通过配置即可组装出能自主规划、调用工具、多轮交互的智能体。框架内置工具调用编排、任务并发调度、上下文与记忆管理、RAG 检索、提示词缓存等工程化机制，并提供 Web UI 与开放插件生态，形态上对标 Claude Cowork 等桌面智能体产品。它解决的正是从“调用模型 API”到“交付可用的智能体应用”之间的大量工程问题，被定位为面向开发者的智能体开发基础设施。",
    "background": "2025 年起智能体成为大模型落地的主要形态，各厂商竞相推出 Agent 框架。DeepSeek 于 2026 年公开测试 DeepSeek Harness，同步开放插件生态与架构文档，其“插件化”设计让社区可低成本扩展能力，是 DeepSeek 在模型之外布局工程工具链的关键一步。",
    "core": [
      "插件化架构：浏览器、终端、文件等能力均以插件形式接入，按需自由组合",
      "工程化机制：内置工具调用编排、任务并发调度、上下文与记忆管理",
      "知识增强：支持 RAG 检索与提示词缓存，降低幻觉与调用成本",
      "开箱即用：提供 Web UI 与配置化组装，大幅降低智能体开发门槛"
    ],
    "applications": [
      "构建可自主上网、操作软件完成任务的个人智能体助理",
      "作为团队自动化 Agent 的基座，统一工具、模型与记忆接入",
      "基于插件生态快速定制垂直场景智能体"
    ],
    "misconceptions": [
      "误以为它是又一个聊天应用——实际是面向开发者的智能体开发框架/工具链"
    ],
    "related": [
      "智能体",
      "工具调用",
      "RAG检索增强",
      "缓存命中"
    ],
    "references": [
      "DeepSeek Harness: Everything is a Plugin（GitHub 官方仓库）",
      "对标 Claude Cowork：DeepSeek Harness 公测，同步开放插件生态（IT之家）",
      "实测 DeepSeek Harness（智东西）"
    ],
    "sources": [
      "https://github.com/deepseek-ai/deepseek-harness",
      "https://www.ithome.com/0/989/446.htm",
      "https://www.appinn.com/deepseek-harness/",
      "https://www.zhidx.com/p/584897.html"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "agent",
    "name": "智能体",
    "aliases": [
      "Agent",
      "AI Agent",
      "AI代理",
      "智能代理"
    ],
    "field": "AI工程与模型",
    "tags": [
      "智能体",
      "自主决策",
      "工具调用",
      "AI应用"
    ],
    "difficulty": 3,
    "summary": "以大模型为大脑、能自主感知决策并调用工具的智能系统。",
    "definition": "智能体（Agent）是以大语言模型为核心“大脑”的软件系统，能够在目标指引下自主完成感知环境、规划行动、调用工具、评估结果、迭代执行的任务循环。与传统聊天机器人不同，智能体具备工具调用、长期记忆、多步推理与自主决策能力，可以代表用户执行浏览器操作、读写文件、调用 API、操作软件等真实动作。工程上通常由模型、工具集、记忆模块、编排器（Orchestrator）与反馈机制组成，是工具调用、RAG、提示工程、思维链等多项技术的集成体，也是当前大模型应用最主流的落地形态。",
    "background": "智能体概念源自人工智能研究的 Agent 范式。2023 年 ChatGPT 插件与 2024 年各厂商 Agent 框架将其产品化；2025 年起进入“Agent 元年”，多步骤自主执行成为大模型应用的主流形态，并出现专用 Agent 框架与开发工具链。",
    "core": [
      "感知-决策-行动循环：观察环境结果、规划下一步并执行",
      "工具调用：通过 Function Calling 使用外部系统能力",
      "记忆管理：区分短期对话上下文与长期持久化记忆",
      "编排与反思：任务拆解、自我纠错与结果校验"
    ],
    "applications": [
      "自动完成信息搜集与报告撰写的办公助理",
      "软件研发智能体：读代码、跑测试、修 Bug",
      "客服、运维、数据分析等业务自动化场景"
    ],
    "misconceptions": [
      "智能体不是简单的“聊天+联网”，其核心是自主决策与多步任务执行"
    ],
    "related": [
      "工具调用",
      "提示工程",
      "思维链",
      "DeepSeek Harness"
    ],
    "references": [
      "什么是 AI 代理（Microsoft Learn）",
      "利用人工智能代理自动执行任务（IBM Docs）"
    ],
    "sources": [
      "https://learn.microsoft.com/zh-cn/training/modules/develop-ai-enabled-apps-using-github-copilot-sdk/2-what-ai-agent",
      "https://eu-de.dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-agents-overview.html?context=wx&audience=wdp&locale=zh"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "prompt-engineering",
    "name": "提示工程",
    "aliases": [
      "Prompt Engineering",
      "提示词工程",
      "提示设计"
    ],
    "field": "AI工程与模型",
    "tags": [
      "提示词",
      "模型交互",
      "应用开发"
    ],
    "difficulty": 2,
    "summary": "通过设计和优化提示词来引导大模型输出的方法论。",
    "definition": "提示工程（Prompt Engineering）是设计、优化输入给大模型的指令（Prompt）以获得预期输出的工程方法，研究如何用角色设定、任务描述、示例与格式约束等要素，把用户意图清晰地传达给模型，从而提升回答质量、稳定性与可控性。常见技术包括角色扮演与指令细化、少样本示例（Few-shot）、思维链引导、结构化输出约束（如指定 JSON 格式）等。在工程实践中，提示词被视为应用的“第一层代码”，需要模板化、版本管理与评测迭代，并与 RAG、工具调用等机制配合使用。",
    "background": "2021-2022 年大模型能力涌现后，研究者发现提示方式显著影响输出质量，提示工程随之成为热门方向；2023 年起随着 Agent 与 RAG 普及，提示工程从“写提示”演变为包含评估、版本化、模板化的系统化工程学科。",
    "core": [
      "清晰指令：明确任务、输入、输出格式与边界条件",
      "少样本示例：给模型范例以锚定期望的输出风格",
      "角色与上下文设定：为模型设定专业视角与立场",
      "约束与评估：限定输出格式并建立提示词评测闭环"
    ],
    "applications": [
      "客服机器人的话术与回复格式设计",
      "代码生成、翻译、写作等场景的提示模板",
      "配合思维链与结构化输出搭建复杂应用"
    ],
    "misconceptions": [
      "提示工程不只是“会写几句好话”，而是需要迭代、评测的系统工程"
    ],
    "related": [
      "思维链",
      "智能体",
      "输入输出处理",
      "AI幻觉"
    ],
    "references": [
      "提示词工程 - Prompt engineering（systems-analysis.ru）",
      "利用提示工程优化模型输出（Microsoft Learn）"
    ],
    "sources": [
      "https://systems-analysis.ru/int/index.php?title=Prompt_engineering_%E2%80%94_%E6%8F%90%E7%A4%BA%E8%AF%8D%E5%B7%A5%E7%A8%8B&variant=zh-hans",
      "https://learn.microsoft.com/zh-hk/training/modules/optimize-generative-ai-model-performance/2-prompt-engineering"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "chain-of-thought",
    "name": "思维链",
    "aliases": [
      "Chain of Thought",
      "CoT",
      "思维链提示",
      "链式推理"
    ],
    "field": "AI工程与模型",
    "tags": [
      "推理",
      "提示工程",
      "可解释性"
    ],
    "difficulty": 3,
    "summary": "引导模型逐步推理并展示中间步骤，提升复杂问题求解能力。",
    "definition": "思维链（Chain of Thought，CoT）是一种提示技术：在提示中要求模型把复杂问题拆解为中间推理步骤，先“想清楚”再给出结论，从而显著提升数学、逻辑、多步规划等任务的正确率。主要形式包括少样本 CoT（给出带推理过程的示例）、零样本 CoT（如“让我们一步步思考”）与思维链自洽性（CoT-SC，多次采样投票）等。思维链也是推理模型（如 DeepSeek-R1）内部“思考过程”的工程基础，其展示的推理轨迹还增强了输出的可解释性，便于人工审查与调试。",
    "background": "2022 年 Wei 等人发表《Chain-of-Thought Prompting Elicits Reasoning in Large Language Models》提出思维链；此后延伸出自洽性、树状思维（ToT）等方法，并推动“推理时计算”研究（如 OpenAI o1、DeepSeek-R1 系列）。思维链由此成为提升大模型复杂推理能力的关键发现，被后续大量研究沿用与改进。",
    "core": [
      "中间步骤：把一步到位的答案改为分步推导",
      "两种触发：少样本 CoT 与零样本 CoT，后者更省成本",
      "自洽性采样：多次推理投票降低单次错误率",
      "推理模型基础：思维链是深度推理模型的核心机制"
    ],
    "applications": [
      "数学与逻辑题求解、代码调试分析",
      "复杂决策与多步规划任务的稳定输出",
      "让模型输出推理过程以便人工审查"
    ],
    "misconceptions": [
      "思维链不是模型“真的有意识思考”，而是通过显式推理步骤提升准确率的提示机制"
    ],
    "related": [
      "提示工程",
      "智能体",
      "上下文窗口"
    ],
    "references": [
      "什么是思维链 (CoT) 提示？（Ultralytics）",
      "大模型与思维链 (Chain of Thoughts) 技术解析（百度智能云）"
    ],
    "sources": [
      "https://www.ultralytics.com/zh/glossary/chain-of-thought-prompting",
      "https://cloud.baidu.com/article/5312247"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "context-window",
    "name": "上下文窗口",
    "aliases": [
      "Context Window",
      "上下文长度",
      "上下文容量",
      "窗口大小"
    ],
    "field": "AI工程与模型",
    "tags": [
      "上下文",
      "模型能力",
      "KV缓存"
    ],
    "difficulty": 2,
    "summary": "模型单次推理所能处理的输入与输出 token 总量上限。",
    "definition": "上下文窗口（Context Window）指大语言模型在一次推理中能够同时“看到”的 token 数量上限，包括用户输入、历史对话、检索资料以及模型输出。受注意力机制计算复杂度与 KV 缓存显存限制，窗口越大计算与存储开销越高。工程上，超出窗口的内容会被截断或压缩，因此长文档问答、多轮 Agent 任务通常结合 RAG 检索、摘要压缩、滑动窗口等策略管理上下文。近年来模型窗口从几千 token 扩展到百万级，但“窗口大”不等于“都用得好”，长距离信息利用质量仍是研究热点。",
    "background": "早期 GPT 系模型窗口仅 2K-8K token；2023 年起 Claude、Gemini、通义等将窗口提升至 100K-1M token，国产模型如 DeepSeek 也持续扩展上下文并配套长文本评测与基础设施优化，长上下文成为模型竞争的重要指标，行业还推出“大海捞针”等基准检验窗口的真实利用能力。",
    "core": [
      "衡量单位：窗口按 token 计，中英文换算比例不同",
      "成本约束：窗口越大，注意力计算与显存开销越高",
      "溢出处理：截断、摘要压缩、RAG 检索等策略",
      "长上下文质量：窗口大不代表长距离信息利用得好"
    ],
    "applications": [
      "整本书、长文档的问答与摘要",
      "多轮对话与长会话的 Agent 任务",
      "结合 RAG 在有限窗口内装入高价值信息"
    ],
    "misconceptions": [
      "上下文窗口不等于模型记忆——超窗内容默认被遗忘，需靠工程手段管理"
    ],
    "related": [
      "Token计费",
      "缓存命中",
      "RAG检索增强",
      "输入输出处理"
    ],
    "references": [
      "上下文理解极限：Context Window 与注意力跨度的数学边界（阿里云开发者）",
      "大型语言模型的五大基本上下文窗口概念（美光 Micron）"
    ],
    "sources": [
      "https://developer.aliyun.com/article/1717753",
      "https://tw.micron.com/about/blog/applications/ai/top-five-essential-context-window-concepts-in-large-language-models"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "token-billing",
    "name": "Token计费",
    "aliases": [
      "Token定价",
      "Token费用",
      "Token计价",
      "按量计费"
    ],
    "field": "AI工程与模型",
    "tags": [
      "成本",
      "API",
      "计费"
    ],
    "difficulty": 2,
    "summary": "大模型 API 按 token 数量计费的定价与成本管理方式。",
    "definition": "Token 是模型处理文本的最小单元（可为词、子词或字符），Token 计费指云厂商与模型服务商按输入、输出 token 数量分别计价的收费模式。通常输入 token 单价低于输出 token，缓存命中的部分按更低折扣计费；计费量由 Tokenizer 切分规则决定，中文一般 1 个汉字约对应 1-2 个 token。工程上，Token 成本直接影响应用毛利，开发者通过精简提示、启用上下文缓存、模型路由与预算告警等手段优化成本；Token 用量也是模型网关可观测性与成本核算的核心指标。",
    "background": "OpenAI 早期按 token 计费确立了行业惯例；随着多厂商竞争，出现按量付费、包月、缓存优惠等多元计价；企业级应用开始把 Token 成本纳入架构设计，缓存与路由降级成为标准成本优化手段，Token 用量也常作为衡量模型能力与工程效率的可量化指标。",
    "core": [
      "双向计费：输入与输出分开计价，输出通常更贵",
      "切分规则：Tokenizer 决定计费，中文换算需按模型实测",
      "缓存折扣：命中提示词缓存可显著降低输入成本",
      "成本优化：提示精简、缓存、路由与预算控制"
    ],
    "applications": [
      "API 调用成本核算与产品定价",
      "模型网关的用量统计与预算告警",
      "RAG 等长提示场景的成本优化"
    ],
    "misconceptions": [
      "Token 不是“字数”——与字符数无固定换算关系，需按具体模型的 Tokenizer 实测"
    ],
    "related": [
      "上下文窗口",
      "缓存命中",
      "模型网关",
      "输入输出处理"
    ],
    "references": [
      "模型调用价格（阿里云百炼 Model Studio）",
      "模型API服务计费说明（金山云）"
    ],
    "sources": [
      "https://www.alibabacloud.com/help/zh/model-studio/model-pricing",
      "https://docs.ksyun.com/documents/44741"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "cache-hit",
    "name": "缓存命中",
    "aliases": [
      "Cache Hit",
      "缓存复用",
      "提示词缓存",
      "语义缓存",
      "KV Cache"
    ],
    "field": "AI工程与模型",
    "tags": [
      "缓存",
      "性能优化",
      "成本优化"
    ],
    "difficulty": 3,
    "summary": "复用已计算的模型结果或中间状态，降低延迟与成本的优化机制。",
    "definition": "在 AI 工程中，缓存命中指请求的输入或其前缀、语义相近内容命中已有缓存，直接复用计算结果而无需重新推理。常见形态有三类：一是提示词缓存（Prompt Caching），相同前缀的对话复用已计算的 KV 状态，多轮对话与批量任务可大幅降低成本；二是语义缓存（Semantic Cache），对语义相似的查询复用先前答案，适用于客服等高频场景；三是 KV Cache 复用，在多轮生成与并发请求间共享键值缓存以加速推理。缓存命中率是衡量推理系统性能与成本效率的关键指标，DeepSeek Harness 等智能体框架也内置提示词缓存以优化成本。",
    "background": "早期缓存主要用于相似问题去重；2023-2024 年 OpenAI、Anthropic、DeepSeek 等厂商推出自动提示缓存，把缓存从应用层下沉到推理框架；KV Cache 管理成为长上下文推理优化的核心技术，缓存层级设计成为推理服务的标配。",
    "core": [
      "前缀缓存：相同对话前缀复用 KV 状态，命中即降价",
      "语义缓存：按向量相似度复用答案，适合高频问答",
      "KV Cache 复用：加速多轮与并发推理的关键",
      "命中率：成本与延迟优化的核心度量指标"
    ],
    "applications": [
      "多轮对话与长系统提示的成本优化",
      "客服 FAQ 等高频相似问题的秒级响应",
      "推理服务集群的吞吐优化"
    ],
    "misconceptions": [
      "缓存命中不等于答案一定正确——语义缓存可能误命中相似但不同的查询"
    ],
    "related": [
      "Token计费",
      "上下文窗口",
      "模型网关",
      "DeepSeek Harness"
    ],
    "references": [
      "推理服务的缓存层级设计：前缀缓存、语义缓存与 KV Cache（天翼云）",
      "Prompt Caching（OpenAI 开发者文档）"
    ],
    "sources": [
      "https://www.ctyun.cn/developer/article/832816808140869",
      "https://developers.openai.com/api/docs/guides/prompt-caching.md"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "io-processing",
    "name": "输入输出处理",
    "aliases": [
      "输入输出工程",
      "结构化输出",
      "流式输出",
      "I/O处理"
    ],
    "field": "AI工程与模型",
    "tags": [
      "结构化输出",
      "流式输出",
      "API设计"
    ],
    "difficulty": 3,
    "summary": "对模型输入预处理、输出解析与传输的工程化处理环节。",
    "definition": "输入输出处理指在模型调用前后进行的工程化处理：输入端包括文本清洗、格式转换、截断与压缩、敏感信息过滤、系统提示拼装等；输出端包括结构化输出（通过 JSON Schema 等约束模型生成合法 JSON，便于程序消费）、流式输出（基于 SSE 逐 token 推送，改善首字延迟体验）、输出解析与校验、重试与兜底等。它是把“模型能力”接入“业务系统”的适配层，直接决定应用的稳定性、可解析性与交互体验，也是智能体工具调用参数可靠解析的基础保障。",
    "background": "早期应用多把模型输出当纯文本处理；随着 Agent 与工具调用普及，结构化、可机器解析的输出成为刚需，各模型厂商纷纷原生支持 JSON Schema 输出与流式接口，输入输出处理逐步标准化并进入各框架的通用组件库。",
    "core": [
      "结构化输出：用 JSON Schema 约束格式，便于程序消费",
      "流式输出：SSE 逐 token 推送，改善用户等待体验",
      "输入预处理：清洗、截断、脱敏、拼装系统提示",
      "输出校验：解析失败重试、格式校验与降级兜底"
    ],
    "applications": [
      "将模型输出接入数据库与业务系统",
      "聊天应用的打字机式流式回复",
      "Agent 工具调用参数的可靠解析"
    ],
    "misconceptions": [
      "结构化输出不是“让模型保证输出 JSON”——仍需校验与重试机制保障可靠性"
    ],
    "related": [
      "工具调用",
      "提示工程",
      "模型网关",
      "RAG检索增强"
    ],
    "references": [
      "结构化输出（--json-schema）（Qwen Code 官方文档）",
      "输出解析器（LangChain 中文文档）"
    ],
    "sources": [
      "https://qwenlm.github.io/qwen-code-docs/zh/users/features/structured-output/",
      "https://reference.langchain.org.cn/python/langchain_core/output_parsers/"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "rag",
    "name": "RAG检索增强",
    "aliases": [
      "RAG",
      "Retrieval-Augmented Generation",
      "检索增强生成"
    ],
    "field": "AI工程与模型",
    "tags": [
      "检索",
      "知识库",
      "幻觉缓解"
    ],
    "difficulty": 3,
    "summary": "先从外部知识库检索相关内容，再让模型基于检索结果生成答案。",
    "definition": "检索增强生成（Retrieval-Augmented Generation，RAG）是一种把“检索”与“生成”结合的架构：系统先把文档切块并向量化，用户提问时通过向量相似度检索出最相关片段，连同问题一起交给大模型，让模型基于检索到的资料作答。相比纯参数化记忆，RAG 能接入实时与私有知识、显著缓解幻觉、让答案可溯源。工程上包含索引构建（切块、Embedding、向量库）、检索（相似度计算、重排序）与生成三个环节，并衍生出 GraphRAG、Agentic RAG 等进阶形态，是企业知识问答的主流方案。",
    "background": "2020 年 Lewis 等人在《Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks》中提出 RAG；2023 年大模型落地热潮中，RAG 成为企业私有知识问答的主流方案，向量数据库与检索框架随之爆发，并持续演化出多路召回、重排、混合检索等优化。",
    "core": [
      "三环节：索引、检索、生成，形成“先查后答”闭环",
      "向量化：Embedding 将文本映射为向量用于相似度检索",
      "幻觉缓解：答案基于检索证据，可溯源可核查",
      "进阶形态：重排序、混合检索、Agentic RAG 提升准确率"
    ],
    "applications": [
      "企业知识库与私有文档问答",
      "客服系统引用产品手册回答用户问题",
      "结合 Agent 的多步检索问答"
    ],
    "misconceptions": [
      "RAG 不是“把文档全塞进提示词”——需要切块、索引与检索才能控制成本与质量"
    ],
    "related": [
      "AI幻觉",
      "上下文窗口",
      "微调与对齐",
      "输入输出处理"
    ],
    "references": [
      "检索增强生成（RAG）和索引（Microsoft Foundry）",
      "使用检索增强生成将数据集成到 AI 应用中（.NET）"
    ],
    "sources": [
      "https://learn.microsoft.com/zh-cn/azure/foundry/concepts/retrieval-augmented-generation",
      "https://learn.microsoft.com/zh-cn/dotnet/ai/conceptual/rag"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "fine-tuning-alignment",
    "name": "微调与对齐",
    "aliases": [
      "Fine-tuning & Alignment",
      "微调",
      "对齐",
      "SFT",
      "RLHF"
    ],
    "field": "AI工程与模型",
    "tags": [
      "模型训练",
      "RLHF",
      "对齐"
    ],
    "difficulty": 4,
    "summary": "通过监督微调与偏好对齐，让模型适配任务并符合人类意图。",
    "definition": "微调（Fine-tuning）指在预训练模型基础上，用特定领域数据继续训练以适配任务，常用方式为监督微调（SFT），其成本与数据需求远低于全量预训练；对齐（Alignment）指通过人类反馈强化学习（RLHF）、直接偏好优化（DPO）等方法，让模型输出符合人类偏好与价值观（如有用、无害、诚实）。工程上二者常构成“预训练→SFT→对齐”的后训练流水线：先用 SFT 学会任务格式与领域知识，再用偏好优化提升质量与安全性。LoRA、QLoRA 等参数高效微调技术大幅降低了微调门槛。",
    "background": "2019-2020 年 GPT-3 时代微调仍是主流；2022 年 InstructGPT 引入 RLHF 开启对齐范式；2023 年 DPO 等轻量对齐方法流行；LoRA/QLoRA 使普通开发者也能微调大模型，后训练成为模型工程的标准环节；对齐研究也从有用性扩展到安全性、诚实度与拒绝能力。",
    "core": [
      "SFT：用标注数据让模型学会任务格式与领域知识",
      "RLHF/DPO：基于人类偏好优化有用性、安全性与诚实度",
      "参数高效微调：LoRA 等只更新少量参数，成本可控",
      "与 RAG 分工：知识靠检索，风格与行为靠微调"
    ],
    "applications": [
      "法律、医疗等垂直领域模型定制",
      "企业私有模型的风格与安全对齐",
      "开源模型在本地硬件上的轻量适配"
    ],
    "misconceptions": [
      "微调不能“注入新知识”——新知识主要靠 RAG 或预训练，微调侧重行为与格式"
    ],
    "related": [
      "RAG检索增强",
      "模型量化",
      "AI幻觉",
      "提示工程"
    ],
    "references": [
      "LLM 技术深度解析：SFT、RLHF 等关键概念（百度智能云）",
      "Aligning large language models across the lifecycle（ScienceDirect）"
    ],
    "sources": [
      "https://cloud.baidu.com/article/3361189",
      "https://www.sciencedirect.com/science/article/abs/pii/S0893608026004570"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "tool-calling",
    "name": "工具调用",
    "aliases": [
      "Tool Calling",
      "Function Calling",
      "函数调用",
      "工具使用"
    ],
    "field": "AI工程与模型",
    "tags": [
      "工具",
      "智能体",
      "API集成"
    ],
    "difficulty": 3,
    "summary": "模型按声明格式输出调用参数，由外部系统执行并回传结果。",
    "definition": "工具调用（Tool Calling / Function Calling）指让大模型根据对话内容，从开发者声明的工具列表中选择一个并输出结构化调用参数（函数名与参数 JSON），由外部程序执行后把真实结果返回给模型继续推理的能力。它把模型的“语言能力”与外部系统的“执行能力”连接起来：查数据库、调 API、操作软件、运行代码等皆可。工程上通常配合严格模式（只输出合法调用参数）、结果校验与错误重试，是智能体自主完成真实任务的核心机制，也是 DeepSeek Harness 等 Agent 框架的基础能力。",
    "background": "2023 年 OpenAI 发布 Function Calling 接口后成为行业标准，各模型厂商跟进提供兼容的 Tool Calling API；随后演进为并行工具调用、多步工具编排，并推动 Agent 框架与插件生态的爆发；工具调用已成为模型能力评测与应用框架的基础功能。",
    "core": [
      "声明式接口：开发者提供工具名称、描述与参数 Schema",
      "结构化输出：模型返回可机器解析的调用参数",
      "执行-回传循环：外部执行结果反馈给模型继续推理",
      "严格模式：约束模型只输出合法调用，降低解析失败率"
    ],
    "applications": [
      "智能体查天气、订票、操作数据库",
      "代码智能体运行测试并修复缺陷",
      "客服系统调用工单与订单 API"
    ],
    "misconceptions": [
      "工具调用不是模型“自己执行”工具——执行发生在外部系统，模型只负责决策与生成参数"
    ],
    "related": [
      "智能体",
      "输入输出处理",
      "DeepSeek Harness",
      "模型网关"
    ],
    "references": [
      "Tool Calling（华为云 ModelArts 最佳实践）",
      "Function Calling：让大模型调用真实程序能力（阿里云开发者）"
    ],
    "sources": [
      "https://support.huaweicloud.com/bestpractice-modelarts/modelarts_llm_infer_5906028.html",
      "https://developer.aliyun.com/article/1753887"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "model-quantization",
    "name": "模型量化",
    "aliases": [
      "Quantization",
      "量化",
      "模型压缩",
      "GPTQ",
      "AWQ",
      "GGUF"
    ],
    "field": "AI工程与模型",
    "tags": [
      "推理优化",
      "模型压缩",
      "部署"
    ],
    "difficulty": 4,
    "summary": "降低模型权重数值精度，以减小体积、降低显存并加速推理。",
    "definition": "模型量化（Quantization）指把模型权重与激活值的数值精度从 FP16/BF16 降低到 INT8、INT4 甚至更低，用更低比特表示参数，从而显著减小模型体积、降低显存占用并提升推理速度，代价是精度损失。主要方法包括训练后量化（PTQ，如 GPTQ、AWQ）与量化感知训练（QAT）；GGUF 格式配合 llama.cpp 让大模型可在消费级硬件上运行。量化级别、校准数据质量与推理框架支持共同决定实际效果：通常 INT8 精度损失很小，INT4 需结合 AWQ 等算法控制误差，部署前需按任务实测取舍。",
    "background": "早期量化用于嵌入式与端侧模型；2023 年开源大模型爆发后，GPTQ、AWQ 与 GGUF 推动 4-bit 量化流行，使 7B-70B 模型可部署到单卡甚至消费级设备，量化成为模型部署的标准步骤，并与稀疏化、蒸馏等技术共同构成模型压缩工具箱。",
    "core": [
      "精度降低：FP16→INT8/INT4，体积与显存大幅下降",
      "两类方法：PTQ 训练后量化与 QAT 量化感知训练",
      "代表技术：GPTQ、AWQ 与 GGUF（配合 llama.cpp）",
      "权衡取舍：量化越低速度越快，但精度损失越大"
    ],
    "applications": [
      "本地部署 7B-70B 开源模型到消费级 GPU",
      "边缘设备与移动端模型推理",
      "大规模推理集群的吞吐与成本优化"
    ],
    "misconceptions": [
      "量化不等于“无损压缩”——存在精度损失，需按任务实测决定量化级别"
    ],
    "related": [
      "微调与对齐",
      "模型网关",
      "上下文窗口"
    ],
    "references": [
      "大语言模型量化技术探析：GPTQ GGUF AWQ（百度智能云）",
      "大语言模型量化方法深度对比（百度智能云）"
    ],
    "sources": [
      "https://cloud.baidu.com/article/3368896",
      "https://cloud.baidu.com/article/3386670"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "hallucination",
    "name": "AI幻觉",
    "aliases": [
      "Hallucination",
      "模型幻觉",
      "幻觉问题",
      "事实性错误"
    ],
    "field": "AI工程与模型",
    "tags": [
      "可靠性",
      "风险",
      "幻觉"
    ],
    "difficulty": 2,
    "summary": "模型生成看似合理但事实错误或无依据内容的现象。",
    "definition": "AI 幻觉（Hallucination）指大语言模型生成流畅、看似可信但事实上错误、虚构或无依据的内容，如编造人名、文献、数据与事件。其根源在于模型本质上是概率性的“下一个词预测器”，所谓“知识”来自训练数据的统计模式，无法区分事实与虚构，也不具备对外部真实世界的核查能力。工程上通过 RAG 检索增强、要求输出引用来源、事实校验、降低解码温度、设置“不知道”兜底话术等策略缓解幻觉，但无法完全消除，因此在医疗、金融等高危场景必须辅以人工审查与证据链设计。",
    "background": "“幻觉”一词源自机器翻译研究的 hallucination，2022-2023 年大模型爆火后成为最受关注的可靠性问题；学界持续研究其成因（训练数据、解码策略、注意力机制等），OpenAI 等机构也发表了相关论文，评测与红队测试中幻觉检测成为标配。",
    "core": [
      "成因：概率生成 + 训练数据局限 + 缺乏事实核查",
      "表现：虚构事实、张冠李戴、编造引用与数据",
      "缓解：RAG 检索、引用溯源、温度控制、兜底话术",
      "无法根除：需在应用层设计人机审核与容错机制"
    ],
    "applications": [
      "知识问答系统强制引用来源以降低幻觉",
      "金融、医疗场景的人工审核流程设计",
      "评测基准与红队测试中的幻觉检测"
    ],
    "misconceptions": [
      "模型“自信”不等于“正确”——幻觉输出往往语气笃定，必须靠外部证据校验"
    ],
    "related": [
      "RAG检索增强",
      "微调与对齐",
      "提示工程",
      "输入输出处理"
    ],
    "references": [
      "AI 不懂，但 AI 真敢乱编？（科普中国）",
      "OpenAI 罕见发论文：我们找到了 AI 幻觉的罪魁祸首（36氪）"
    ],
    "sources": [
      "https://www.kepuchina.cn/article/articleinfo?business_type=100&classify=0&ar_id=713465",
      "https://36kr.com/p/3454673562769025"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "model-gateway",
    "name": "模型网关",
    "aliases": [
      "LLM Gateway",
      "AI Gateway",
      "大模型网关",
      "LLM 代理层"
    ],
    "field": "AI工程与模型",
    "tags": [
      "网关",
      "路由",
      "可观测性"
    ],
    "difficulty": 3,
    "summary": "统一接入多模型服务，提供路由、限流、缓存与观测的中间层。",
    "definition": "模型网关（LLM Gateway / AI Gateway）是位于应用与各类模型服务商之间的统一接入层，屏蔽不同厂商 API 的差异，对外提供统一接口，对内实现模型路由、负载均衡、限流配额、提示词与响应缓存、密钥管理、成本统计、可观测性与安全审计等能力。它让企业可按成本、质量、延迟动态选择或降级模型（如主用高配模型、流量高峰降级到低成本模型），是生产级 AI 应用的标准基础设施，代表产品有 LiteLLM、Portkey、Kong AI Gateway、APISIX AI Gateway 等。",
    "background": "2023 年起多模型并行成为常态，直接调用各家 API 导致代码耦合与成本失控；2024 年 LLM 网关作为独立基础设施快速兴起，并与 API 网关、可观测性平台融合，成为平台工程与 AI 基础设施的重要组成部分。",
    "core": [
      "统一接入：屏蔽厂商差异，一套接口对接多家模型",
      "智能路由：按成本、质量、延迟选择或降级模型",
      "治理能力：限流、配额、密钥管理、安全与审计",
      "成本可观测：Token 用量、费用与缓存命中统计"
    ],
    "applications": [
      "企业统一管理多厂商模型调用与预算",
      "高可用降级：主模型故障时自动切换备用模型",
      "统一记录与审计 AI 请求以满足合规要求"
    ],
    "misconceptions": [
      "模型网关不只是“API 代理”——路由策略、缓存、成本与安全治理才是核心价值"
    ],
    "related": [
      "Token计费",
      "缓存命中",
      "工具调用",
      "输入输出处理"
    ],
    "references": [
      "一个 LLM 网关需要做哪些事？（腾讯云开发者）",
      "大模型网关实践：路由、限流、预算、安全（腾讯云开发者）",
      "APISIX 的 AI Gateway 功能一览（Apache APISIX）"
    ],
    "sources": [
      "https://cloud.tencent.com.cn/developer/article/2645074",
      "https://cloud.tencent.com.cn/developer/article/2685506",
      "https://apisix.incubator.apache.org/zh/blog/2025/02/24/apisix-ai-gateway-features/"
    ],
    "searchedAt": "2026-08-14"
  }
];
