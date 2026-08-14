// 大模型横评 - 概念解析数据
// 生成日期：2026-08-14（数据来源：联网搜索 + AI综合分析）
window.XIGAI = window.XIGAI || {};
window.XIGAI["大模型横评"] = [
  {
    "id": "deepseek-v3",
    "name": "DeepSeek-V3",
    "aliases": [
      "深度求索V3",
      "DeepSeek V3"
    ],
    "field": "大模型横评",
    "tags": [
      "开源模型",
      "MoE架构",
      "国产大模型"
    ],
    "difficulty": 2,
    "summary": "深度求索开源MoE大模型，性能对标闭源旗舰，价格极低。",
    "definition": "DeepSeek-V3是深度求索（DeepSeek）2024年12月26日发布的开源大语言模型，采用混合专家（MoE）架构：总参数6710亿，每token推理仅激活约370亿参数。发布时多项基准接近或超越GPT-4o、Claude 3.5 Sonnet，训练成本据称仅约557万美元。权重以MIT许可证开源，支持128K上下文与函数调用。2025年相继推出V3.1（稀疏注意力）与V3.2系列，稳居开源第一梯队。",
    "background": "继2024年初DeepSeek-V2以低价API引发国内'价格战'后，V3以'低成本训练+极低API价格'震动全球，被视为中国开源大模型崛起的关键节点。",
    "core": [
      "671B总参数MoE，单次推理仅激活37B，兼顾性能与效率",
      "多项基准接近GPT-4o与Claude 3.5 Sonnet，数学、代码突出",
      "MIT许可证开源，权重可免费商用与二次开发",
      "API价格极低（约0.27美元/百万输入tokens），引发价格战"
    ],
    "applications": [
      "API构建聊天与代码助手",
      "开源权重私有化部署与行业微调",
      "Agent与函数调用底座"
    ],
    "misconceptions": [
      "误把'激活37B'当总大小：实际总参数671B，全量部署显存要求仍高",
      "价格低不等于能力弱，V3系列与顶级闭源模型互有胜负"
    ],
    "related": [
      "DeepSeek-R1",
      "Qwen系列",
      "Llama系列",
      "GPT-4o"
    ],
    "references": [
      "DeepSeek-V3 官方发布公告",
      "DeepSeek-V3.1 发布说明",
      "百度百科：DeepSeek-V3"
    ],
    "sources": [
      "https://api-docs.deepseek.com/zh-cn/news/news1226/",
      "https://api-docs.deepseek.com/zh-cn/news/news250325/",
      "https://baike.baidu.com/item/DeepSeek-V3/65348724"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "deepseek-r1",
    "name": "DeepSeek-R1",
    "aliases": [
      "深度求索R1",
      "DeepSeek R1"
    ],
    "field": "大模型横评",
    "tags": [
      "推理模型",
      "强化学习",
      "开源"
    ],
    "difficulty": 3,
    "summary": "深度求索开源推理大模型，数学代码推理对标OpenAI o1。",
    "definition": "DeepSeek-R1是深度求索2025年1月20日发布的推理大模型，通过大规模强化学习训练出显式'思考'过程——先生成推理链再作答，数学、编程、逻辑任务达到与OpenAI o1相当的水平。权重以MIT许可证开源可免费商用，关键技术包括纯强化学习冷启动与可验证奖励。官方同时发布基于Qwen、Llama蒸馏的R1-Distill系列（1.5B-70B），让小模型也具备部分推理能力。",
    "background": "R1以不到o1数十分之一的推理成本实现接近性能，叠加V3冲击，2025年1月底引发全球科技股（尤其英伟达）剧烈波动，是'低成本AI'路线的重要里程碑。",
    "core": [
      "671B MoE架构，推理能力对标OpenAI o1，多项基准超越",
      "MIT协议开源，可免费商用、蒸馏与二次开发",
      "推理API价格仅为同类闭源模型的数十分之一",
      "R1-Distill覆盖1.5B-70B，可部署于消费级硬件"
    ],
    "applications": [
      "数学解题与代码调试",
      "蒸馏版端侧/本地智能助手",
      "Agent规划与工具调用推理引擎"
    ],
    "misconceptions": [
      "高延迟来自显式推理链，可关闭思考模式提速",
      "R1并非只会数学题，代码、Agent等通用任务同样优秀"
    ],
    "related": [
      "DeepSeek-V3",
      "Qwen系列",
      "Llama系列",
      "GPT-4o"
    ],
    "references": [
      "DeepSeek-R1 官方发布公告",
      "36氪：DeepSeek-R1 发布报道",
      "百度百科：DeepSeek-R1"
    ],
    "sources": [
      "https://api-docs.deepseek.com/zh-cn/news/news250120/",
      "https://m.36kr.com/p/3131848450317056",
      "https://baike.baidu.com/item/DeepSeek-R1/65329552"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "gpt-4o",
    "name": "GPT-4o",
    "aliases": [
      "GPT-4 Omni",
      "GPT-4o"
    ],
    "field": "大模型横评",
    "tags": [
      "多模态",
      "OpenAI",
      "闭源模型"
    ],
    "difficulty": 1,
    "summary": "OpenAI多模态旗舰，文本图像音频实时交互，曾免费开放。",
    "definition": "GPT-4o（o即Omni'全能'）是OpenAI 2024年5月13日发布的原生多模态旗舰，统一处理文本、图像与音频，实现数百毫秒级实时语音对话与视觉理解。相比GPT-4 Turbo速度提升约2倍、API降价约50%（输入5美元/百万tokens），发布初期向ChatGPT用户免费开放，同年7月推出低成本GPT-4o mini。作为横评基准，它长期是衡量通用与多模态能力的'对照组'。",
    "background": "在Gemini等竞品压力下，OpenAI发布GPT-4o主打多模态实时交互与降价，后被GPT-5等新一代模型取代，但其原生多模态、端到端语音理念深刻影响后续模型设计。",
    "core": [
      "原生多模态：文本+图像+音频统一处理，支持实时语音对话",
      "速度约为GPT-4 Turbo的2倍，API价格下调约50%",
      "发布初期向ChatGPT免费用户开放，带动行业普及",
      "GPT-4o mini以极低成本提供接近能力，适合高频调用"
    ],
    "applications": [
      "多模态客服与语音助手",
      "图像理解与视频分析",
      "Agent与RAG通用底座"
    ],
    "misconceptions": [
      "'免费'仅限当时ChatGPT额度，API仍需付费，且其地位已被新模型取代",
      "'全能'不等于样样最强，复杂推理弱于o1、DeepSeek-R1等推理模型"
    ],
    "related": [
      "Claude系列",
      "Gemini系列",
      "DeepSeek-V3",
      "DeepSeek-R1"
    ],
    "references": [
      "OpenAI：Hello GPT-4o",
      "新浪财经：GPT-4o 发布报道",
      "OpenAI：GPT-4o mini 发布说明"
    ],
    "sources": [
      "https://openai.com/zh-Hans-CN/index/hello-gpt-4o/",
      "https://finance.sina.cn/tech/2024-05-14/detail-inavczvs1596042.d.html",
      "http://szb.xdplus.cn/xdkb/pc/content/202405/15/content_38016.html"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "claude-series",
    "name": "Claude系列",
    "aliases": [
      "Claude",
      "Anthropic Claude",
      "Claude 3/4/4.5"
    ],
    "field": "大模型横评",
    "tags": [
      "Anthropic",
      "编程能力",
      "长上下文"
    ],
    "difficulty": 2,
    "summary": "Anthropic旗舰模型家族，编程与长文本能力长期领先。",
    "definition": "Claude系列是Anthropic的大语言模型家族，以安全性、长上下文与编程能力著称。2024年3月发布Claude 3（Haiku/Sonnet/Opus三档），6月Claude 3.5 Sonnet以200K上下文和顶级编程成绩成为开发者热门选择；2025年5月发布Claude 4（Opus 4/Sonnet 4，支持100万token上下文并强化Agent能力），11月推出Claude 4.5家族。该系列闭源，通过API与Claude Code等产品提供服务，价格整体偏高，在SWE-bench等编码基准上长期居首。",
    "background": "Anthropic由前OpenAI高管2021年创立，主打'安全对齐'路线；从Claude 3到4.5两代完成能力跃迁，Claude Code成为AI编程重要竞争者，与OpenAI、Google三足鼎立。",
    "core": [
      "编程能力突出：SWE-bench等编码基准长期第一梯队",
      "Claude 4系列支持100万token上下文，适合长文档与代码库",
      "Claude Code与MCP协议推动Agent工具生态",
      "以'宪法式AI'安全框架著称，对齐研究领先"
    ],
    "applications": [
      "AI编程助手与代码审查",
      "长文档、法律与金融文本分析",
      "复杂Agent工作流"
    ],
    "misconceptions": [
      "Claude并非全面最强：多模态与部分中文能力较弱，价格明显偏高",
      "'Sonnet强于Opus'只是特定版本现象，不应泛化"
    ],
    "related": [
      "GPT-4o",
      "Gemini系列",
      "DeepSeek-R1",
      "Kimi系列"
    ],
    "references": [
      "Anthropic：Claude 4 官方公告",
      "TechRepublic：Claude 4 报道",
      "百度百科：Claude 4"
    ],
    "sources": [
      "https://www.anthropic.com/news/claude-4",
      "https://www.techrepublic.com/article/news-anthropic-claude-4-sonnet-opus/",
      "https://wapbaike.baidu.com/item/Claude%204/65713768"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "gemini-series",
    "name": "Gemini系列",
    "aliases": [
      "Gemini",
      "双子座",
      "Google Gemini"
    ],
    "field": "大模型横评",
    "tags": [
      "Google",
      "多模态",
      "超长上下文"
    ],
    "difficulty": 2,
    "summary": "谷歌多模态旗舰系列，原生多模态与百万级上下文。",
    "definition": "Gemini（双子座）是Google DeepMind的大模型系列，主打原生多模态与超长上下文。2023年12月发布1.0，2024年2月Gemini 1.5 Pro引入100万token上下文；2025年3月Gemini 2.5 Pro以'原生多模态+思考模式'登上多模态榜单前列，默认100万token（付费层可至200万），通过Gemini API、Google AI Studio及安卓、搜索等大规模分发。系列闭源，但2025年6月开源了Gemma 3分支。横评中Gemini长期是多模态与长上下文测试的头部选手。",
    "background": "谷歌为应对OpenAI整合DeepMind资源推出Gemini，两年内完成多模态与推理跃迁，并借搜索、安卓渠道实现最大规模用户触达。",
    "core": [
      "原生多模态：文本、图像、音视频统一建模，视频理解领先",
      "100万token默认上下文（可扩至200万），长文档处理标杆",
      "Gemini 2.5 Pro引入隐式思考模式，推理与编码大幅提升",
      "与搜索、Workspace、安卓生态深度集成"
    ],
    "applications": [
      "多模态内容与视频分析",
      "超长文档与代码库处理",
      "Gemini API构建Agent应用"
    ],
    "misconceptions": [
      "'免费'额度（AI Studio）与付费API是两回事，高额度需按量付费",
      "并非只在英文环境强，已覆盖中文等多语种，但个别中文细节或不如国产优化模型"
    ],
    "related": [
      "GPT-4o",
      "Claude系列",
      "DeepSeek-V3",
      "开源大模型生态"
    ],
    "references": [
      "Google：Gemini 2.5 Pro 官方文档",
      "谷歌中国博客：Gemini 2.5 发布",
      "百度百科：双子座2.5"
    ],
    "sources": [
      "https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro",
      "https://china.googleblog.com/2025/05/gemini-25.html",
      "https://baike.baidu.com/item/%E5%8F%8C%E5%AD%90%E5%BA%A72.5/65719772"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "qwen-series",
    "name": "Qwen系列",
    "aliases": [
      "通义千问",
      "Qwen",
      "阿里云千问"
    ],
    "field": "大模型横评",
    "tags": [
      "阿里",
      "开源模型",
      "多尺寸"
    ],
    "difficulty": 2,
    "summary": "阿里通义千问开源家族，尺寸齐全生态完善，全球下载量居前。",
    "definition": "Qwen（通义千问）是阿里巴巴的大模型系列，开源与闭源旗舰并行。开源线从Qwen1.5、Qwen2发展到2024年9月的Qwen2.5（0.5B-72B全覆盖），2025年4月发布Qwen3（0.6B-235B，含235B-A22B MoE与思考/非思考双模式），以Apache 2.0等宽松许可开源，是Hugging Face下载量最高的开源系列之一。闭源Qwen2.5-Max、Qwen3-Max对标顶级闭源模型。其中文能力强、多尺寸覆盖，多模态与Agent工具链完整，是国产开源生态的'扛旗者'。",
    "background": "阿里2023年推出通义千问并坚持开源，2025年随Qwen3发布，全球开源模型下载量与衍生模型数量多次登顶，成为开源社区事实上的标准底座之一。",
    "core": [
      "全尺寸覆盖：0.5B到235B（含MoE），适配手机到服务器",
      "Qwen3思考/非思考双模式，推理能力对标DeepSeek-R1",
      "Apache 2.0等宽松许可，商用友好，衍生模型全球领先",
      "中文与多语言均衡，多模态、代码、Agent工具链完整"
    ],
    "applications": [
      "企业私有化部署与行业微调",
      "Agent、RAG与代码助手",
      "端侧小模型（0.5B-3B）"
    ],
    "misconceptions": [
      "Qwen并非只有开源小模型：Max闭源旗舰同样对标顶级模型",
      "同参数下性能非恒定，量化或劣质微调会显著拉低效果"
    ],
    "related": [
      "DeepSeek-V3",
      "Kimi系列",
      "Llama系列",
      "开源大模型生态"
    ],
    "references": [
      "通义千问官方文档",
      "百度百科：Qwen2.5",
      "科技日报：Qwen3 发布报道"
    ],
    "sources": [
      "https://qwen.readthedocs.io/zh-cn/stable/getting_started/concepts.html",
      "https://baike.baidu.com/item/Qwen2.5/65355879",
      "https://www.stdaily.com/web/gdxw/2025-04/29/content_333250.html"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "kimi-series",
    "name": "Kimi系列",
    "aliases": [
      "月之暗面Kimi",
      "Kimi K2",
      "Moonshot AI"
    ],
    "field": "大模型横评",
    "tags": [
      "月之暗面",
      "长上下文",
      "开源"
    ],
    "difficulty": 2,
    "summary": "月之暗面出品，以长上下文起家，K2开源万亿参数MoE。",
    "definition": "Kimi系列是月之暗面（Moonshot AI）的大模型家族，以超长上下文与强代码能力著称。早期Kimi（2023年10月）以200万字上下文出圈，成为中文长文本应用的代名词；2025年1月推出Kimi K1.5强化推理，7月发布Kimi K2——总参数约1万亿的MoE模型（激活约320亿），代码、数学与Agent基准对标GPT-5、Claude 4级别，并以Modified MIT协议开源。后续K2 Thinking、K2.5继续强化深度推理。Kimi API价格低于多数同档闭源模型，是'闭源+开源'双线并举的国产代表。",
    "background": "月之暗面由清华系创业者杨植麟创办，2023年以超长上下文Kimi打响品牌，2025年K2开源引发全球关注，成为继DeepSeek之后又一家以开源冲击国际格局的中国AI公司。",
    "core": [
      "万亿参数MoE：K2总参数约1T、激活约32B，性能对标顶级闭源模型",
      "长上下文基因：早期200万字输入开创中文长文本市场",
      "K2以Modified MIT协议开源，可免费商用",
      "代码与Agent能力突出，工具调用基准排名靠前"
    ],
    "applications": [
      "超长文档、论文与合同分析",
      "编程助手与代码库Agent",
      "企业私有化部署与Agent工作流"
    ],
    "misconceptions": [
      "Kimi不只是'长文本聊天工具'：K2已具备顶级编码与推理能力",
      "'1万亿参数'是总参数，激活仅约320亿，部署成本远低于想象"
    ],
    "related": [
      "DeepSeek-V3",
      "Qwen系列",
      "Claude系列",
      "开源大模型生态"
    ],
    "references": [
      "百度百科：Kimi K2",
      "IT之家：Kimi K2 发布报道",
      "人民邮电报：Kimi K2 报道"
    ],
    "sources": [
      "https://baike.baidu.com/item/Kimi%20K2/66209805",
      "https://m.ithome.com/html/867572.htm",
      "https://www.cnii.com.cn/rmydb/202507/t20250717_672932.html"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "llama-series",
    "name": "Llama系列",
    "aliases": [
      "Llama",
      "Meta Llama",
      "羊驼模型"
    ],
    "field": "大模型横评",
    "tags": [
      "Meta",
      "开源模型",
      "开源生态基石"
    ],
    "difficulty": 2,
    "summary": "Meta开源大模型家族，开源生态基石，衍生模型最多。",
    "definition": "Llama（Large Language Model Meta AI）是Meta的开源大模型系列，被视为全球开源生态的'基石'。2023年2月Llama 1发布，7月Llama 2开放商用；2024年4月Llama 3发布，7月Llama 3.1带来首个405B开源旗舰并引入128K上下文；12月Llama 3.3-70B以小体积逼近405B；2025年4月Llama 4发布（Scout 109B支持1000万token上下文、Maverick 400B多模态）。该系列采用自定义社区许可（非严格OSI开源），衍生模型数量长期全球第一。",
    "background": "Meta 2023年以'免费开放'入局，Llama 2与3.1带动全球开源浪潮，催生海量衍生模型；2025年后Llama 4遭遇评测争议，与DeepSeek、Qwen等正面竞争。",
    "core": [
      "Llama 3.1-405B是当时最大开源旗舰，推动开源进入千亿参数时代",
      "Llama 4 Scout支持1000万token上下文，创开源纪录",
      "衍生生态庞大：数千微调/蒸馏模型基于Llama构建",
      "与AWS、微软、谷歌等云平台深度集成"
    ],
    "applications": [
      "行业微调与私有化部署",
      "学术研究与模型压缩实验",
      "云平台一键部署（Bedrock、Azure）"
    ],
    "misconceptions": [
      "Llama'开源'是自定义社区许可，商用有月活超10亿等限制，并非MIT式自由",
      "Llama 4发布时被指基准污染与质量滑坡，'Meta出品'不等于自动最强"
    ],
    "related": [
      "Qwen系列",
      "DeepSeek-V3",
      "开源大模型生态",
      "本地部署大模型"
    ],
    "references": [
      "Llama 3.1 官方发布",
      "Ultralytics：Llama 3.1 介绍",
      "百度百科：Llama 4"
    ],
    "sources": [
      "https://baike.baidu.com/item/Llama%203.1/64697430",
      "https://www.ultralytics.com/zh/blog/getting-to-know-llama-3-1-meta-latest-open-source-model-family",
      "https://baike.baidu.com/item/Llama%204/65351969"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "local-llm-deployment",
    "name": "本地部署大模型",
    "aliases": [
      "私有化部署",
      "本地大模型",
      "自托管LLM"
    ],
    "field": "大模型横评",
    "tags": [
      "部署",
      "Ollama",
      "数据安全"
    ],
    "difficulty": 3,
    "summary": "把大模型跑在自己服务器上，保障数据隐私与控制成本。",
    "definition": "本地部署大模型指将开源模型权重部署到自有服务器或个人电脑上推理，而非通过云端API调用，是'私有化部署'的核心实践。主流工具有Ollama（一键管理）、llama.cpp（CPU/边缘优化）、vLLM（高吞吐）、LM Studio（图形界面）等。显存（VRAM）是最大瓶颈，实践中普遍用GGUF、GPTQ、AWQ等量化把模型压缩至原体积1/4-1/2，使7B-32B级模型可在消费级显卡运行，70B以上需多卡或专业服务器。核心价值是数据不出域、无按量计费、可离线运行。",
    "background": "2023年Llama开源与llama.cpp普及使个人跑模型成为可能；2024-2025年Qwen、DeepSeek能力跃升叠加Ollama成熟，本地部署从极客玩法变为企业AI战略标配。",
    "core": [
      "数据隐私与合规：推理全程在本地，敏感数据不出内网",
      "硬件门槛：显存决定上限，量化可降4-8倍显存需求",
      "工具生态成熟：Ollama、llama.cpp、vLLM、LM Studio全覆盖",
      "7B-32B量化模型可跑消费级显卡，70B+需多卡集群"
    ],
    "applications": [
      "金融、医疗、政务敏感行业私有化助手",
      "离线内网与边缘设备应用",
      "本地RAG与Agent原型验证"
    ],
    "misconceptions": [
      "本地部署不等于免费：硬件与电力成本长期可能高于API",
      "跑得动不等于好用：小模型复杂推理明显弱于云端旗舰"
    ],
    "related": [
      "开源大模型生态",
      "Llama系列",
      "Qwen系列",
      "DeepSeek-V3"
    ],
    "references": [
      "华为云社区：本地大模型部署实践",
      "Qwen 本地部署指南",
      "awesome-skills：本地LLM专家技能"
    ],
    "sources": [
      "https://bbs.huaweicloud.com/blogs/471218",
      "https://qwen35.com/zh/blog/qwen3.5-local",
      "https://github.com/ranbot-ai/awesome-skills/blob/main/skills/local-llm-expert/SKILL.md"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "open-source-llm-ecosystem",
    "name": "开源大模型生态",
    "aliases": [
      "开源模型生态",
      "开放权重模型",
      "Open Source LLM"
    ],
    "field": "大模型横评",
    "tags": [
      "开源",
      "Hugging Face",
      "生态"
    ],
    "difficulty": 3,
    "summary": "开放权重模型与工具社区构成的生态，中国开源力量崛起。",
    "definition": "开源大模型生态指围绕开放权重模型形成的'模型-工具-社区-商业'体系，包含模型权重（Llama、Qwen、DeepSeek、Kimi K2等）、推理框架（llama.cpp、vLLM、Ollama）、微调评测工具（LLaMA-Factory、OpenCompass）、托管平台（Hugging Face、魔搭）及数千衍生模型。2025年起中国模型（DeepSeek、Qwen等）在Hugging Face下载量上反超美国，2026年初份额已超越美国。许可证（MIT/Apache 2.0/社区许可）决定商用自由度，是评估生态的重要维度。",
    "background": "从2023年Llama 2开放商用起步，开源生态从'追赶闭源'到'局部反超'；DeepSeek-V3/R1引爆全球，开源成为企业AI落地主流路径。",
    "core": [
      "中国开源崛起：DeepSeek、Qwen等在HF下载量反超美国模型",
      "模型-工具-社区闭环：HF/魔搭 + vLLM/Ollama + 海量衍生",
      "许可证分层：MIT/Apache 2.0自由商用，Llama社区许可有月活限制",
      "评测透明化：OpenCompass等榜单公开对比"
    ],
    "applications": [
      "企业私有化部署与微调标准底座",
      "学术研究与蒸馏对齐实验",
      "开发者构建垂直Agent与产品"
    ],
    "misconceptions": [
      "LLM'开源'通常指开放权重而非数据与代码，可复现性有限",
      "下载量/榜单排名不等于可用性，需结合许可、硬件与实测评估"
    ],
    "related": [
      "Llama系列",
      "Qwen系列",
      "DeepSeek-V3",
      "本地部署大模型"
    ],
    "references": [
      "2025中国开源发展报告",
      "澎湃新闻：中国开源模型下载量反超",
      "DigitalToday：中国AI模型下载份额超越美国"
    ],
    "sources": [
      "https://github.com/kaiyuanshe/2025-China-Open-Source-Report/blob/main/preface.md",
      "https://m.thepaper.cn/newsDetail_forward_32391069",
      "https://www.digitaltoday.co.kr/cn/view/49865"
    ],
    "searchedAt": "2026-08-14"
  }
];