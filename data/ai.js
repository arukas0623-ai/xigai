window.XIGAI = window.XIGAI || {};
window.XIGAI["人工智能"] = [
  {
    "id": "machine-learning",
    "name": "机器学习",
    "aliases": [
      "Machine Learning",
      "ML"
    ],
    "field": "人工智能",
    "tags": [
      "监督学习",
      "无监督学习",
      "模型训练",
      "数据驱动"
    ],
    "difficulty": 2,
    "summary": "让计算机从数据中自动学习规律并做出预测或决策的技术。",
    "definition": "机器学习是人工智能的核心分支，指计算机系统通过算法从数据中自动学习规律，并在未见过的数据上做出预测或决策，而无须为每个场景显式编写规则。1959年阿瑟·塞缪尔将其定义为“无需明确编程即可让计算机获得学习能力的研究领域”。按学习方式可分为监督学习（用带标签数据训练，如分类、回归）、无监督学习（从无标签数据中发现结构，如聚类、降维）和强化学习（通过与环境的奖励交互学习策略）。其核心在于模型选择、损失函数设计与优化算法（如梯度下降）的配合，最终目标是提升模型在训练集之外的泛化能力。机器学习已广泛用于推荐系统、图像识别、语音识别、信用评估等领域，是大数据与人工智能应用的基础技术。",
    "background": "机器学习思想可追溯至20世纪40—50年代：图灵1950年提出“学习机器”设想，1957年感知机问世。1980年代决策树与神经网络兴起，1990年代支持向量机等统计方法成熟。21世纪大数据与算力提升使机器学习进入产业化阶段，成为各行业智能化的通用底座。",
    "core": [
      "以数据为燃料，从样本中归纳规律而非人工编写规则",
      "监督学习依赖带标签样本，无监督学习挖掘无标签数据的结构",
      "核心矛盾是拟合训练数据与保持泛化之间的权衡（欠拟合与过拟合）",
      "训练过程本质上是沿梯度方向优化损失函数的参数搜索"
    ],
    "applications": [
      "电商与短视频平台的个性化推荐",
      "银行信贷风控与欺诈检测",
      "医疗影像辅助诊断",
      "垃圾邮件过滤与搜索引擎排序"
    ],
    "misconceptions": [
      "机器学习并非“万能预测机”，数据质量与分布变化会显著影响效果",
      "机器学习不等于深度学习，深度学习只是其中一类基于多层神经网络的方法"
    ],
    "references": [
      "机器学习（机器之心技术图谱）",
      "机器学习基础概括（腾讯云开发者社区）",
      "机器学习入门系列（腾讯云开发者社区）"
    ],
    "sources": [
      "https://www.jiqizhixin.com/graph/technologies/1a0e9c5e-6502-4cd7-8683-6b5ca6c48be2",
      "https://cloud.tencent.com.cn/developer/article/2509491",
      "https://cloud.tencent.com.cn/developer/article/1488219"
    ],
    "searchedAt": "2026-08-14",
    "domain": "人工智能",
    "relations": [
      {
        "type": "related",
        "target": "deep-learning",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "监督学习",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "无监督学习",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "数据挖掘",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "人工智能",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "reinforcement-learning",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "neural-network",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "algorithmic-recommendation",
        "note": "",
        "confidence": 0.75
      }
    ],
    "principle": "机器学习的原理在于通过算法从大量数据中自动提取特征和模式，从而实现对未知数据的预测或决策。在监督学习中，模型通过带标签的数据进行训练，学会将输入映射到正确的输出；无监督学习则侧重于发现数据中的内在结构和关系，而强化学习则是通过与环境互动来优化行为策略以获得最大奖励。机器学习的核心在于选择合适的模型、设计损失函数以及利用高效的优化算法来提升模型的泛化能力。",
    "pros": [
      "能够处理大规模复杂问题",
      "提高决策效率和准确性",
      "减少人工干预"
    ],
    "cons": [
      "需要大量高质量的数据进行训练",
      "可能产生过度拟合或欠拟合的问题"
    ],
    "confidence": 0.9,
    "status": "verified"
  },
  {
    "id": "deep-learning",
    "name": "深度学习",
    "aliases": [
      "Deep Learning",
      "深度神经网络"
    ],
    "field": "人工智能",
    "tags": [
      "神经网络",
      "表征学习",
      "多层结构",
      "自动特征提取"
    ],
    "difficulty": 3,
    "summary": "通过多层神经网络自动学习数据分层特征表示的核心AI技术。",
    "definition": "深度学习是机器学习的一个子领域，通过构建含多个隐层的人工神经网络，对数据进行逐层非线性变换，自动从原始输入中学习由低级到高级的分层特征表示，无需人工设计特征。其核心组件包括神经元、激活函数、卷积或循环等结构单元以及反向传播算法。2006年辛顿等人提出深度信念网络的逐层预训练方法，缓解了深层网络训练难题；2012年AlexNet在ImageNet竞赛中以远超传统方法的准确率夺冠，拉开深度学习复兴序幕。深度学习依赖大规模数据与GPU并行算力，依托TensorFlow、PyTorch等框架，在图像、语音、自然语言等领域全面超越传统方法，成为当代人工智能的主流技术路线。",
    "background": "深度学习源自1943年麦卡洛克-皮茨神经元模型与1958年感知机；1986年反向传播算法使多层网络训练成为可能，但因数据算力不足陷入低谷。2006年Hinton提出深度信念网络，2012年AlexNet在ImageNet夺冠，2016年AlphaGo战胜李世石，深度学习进入黄金时代；2024年Hinton与Hopfield因人工神经网络研究获诺贝尔物理学奖。",
    "core": [
      "以多层非线性变换自动提取分层特征，替代人工特征工程",
      "反向传播算法借助链式法则逐层更新网络参数",
      "依赖大数据与GPU算力，数据规模决定能力上限",
      "常见架构包括卷积网络、循环网络与Transformer"
    ],
    "applications": [
      "人脸识别与自动驾驶视觉感知",
      "语音识别与实时机器翻译",
      "AlphaGo等棋类博弈系统",
      "医学影像病灶自动检测"
    ],
    "misconceptions": [
      "深度学习并非模拟真实大脑，只是受其结构启发的数学函数近似",
      "深度学习并非“端到端万能”，仍可能因数据偏差产生错误或幻觉"
    ],
    "references": [
      "深度学习理论系列——基本理论方法与训练过程（腾讯云）",
      "灵感来自人类大脑结构的人工神经网络（中国高新网）",
      "Neural Networks and Deep Learning（UBC AI教材）"
    ],
    "sources": [
      "https://cloud.tencent.cn/developer/article/1030106",
      "http://www.chinahightech.com/yaowen/2024-10/10/content_240641.html",
      "https://www.cs.ubc.ca/~poole/aibook/3e/html/ArtInt3e.Ch8.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "人工智能",
    "relations": [
      {
        "type": "related",
        "target": "machine-learning",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "convolutional-neural-network",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "反向传播",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "neural-network",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "large-language-model",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "reinforcement-learning",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "attention-mechanism",
        "note": "",
        "confidence": 0.85
      }
    ],
    "principle": "深度学习的原理在于通过构建多层的人工神经网络，利用逐层非线性变换从原始输入数据中自动提取出由低级到高级的分层特征表示。这一过程依赖于大量的训练样本和高效的计算资源（如GPU），并通过反向传播算法优化权重参数。深层网络能够捕捉复杂的数据模式，并通过深度信念网络等方法进行逐层预训练，从而缓解了深层网络的训练难题。",
    "pros": [
      "强大的特征提取能力",
      "适用于大规模数据集",
      "在图像、语音和自然语言处理等领域表现优异"
    ],
    "cons": [
      "需要大量计算资源和训练时间",
      "对数据质量和标注要求较高"
    ],
    "confidence": 0.9,
    "status": "verified"
  },
  {
    "id": "large-language-model",
    "name": "大语言模型",
    "aliases": [
      "LLM",
      "大型语言模型",
      "大模型"
    ],
    "field": "人工智能",
    "tags": [
      "Transformer",
      "预训练",
      "文本生成",
      "通用人工智能"
    ],
    "difficulty": 3,
    "summary": "在海量文本上预训练、能理解和生成自然语言的超大规模神经网络。",
    "definition": "大语言模型（LLM）指在海量互联网文本上通过自监督学习预训练的深度神经网络模型，参数量通常达数十亿乃至数万亿，核心架构为Transformer。它通过预测文本序列中的下一个词（语言建模任务）学习语言的统计规律，再经指令微调、人类反馈强化学习（RLHF）等对齐技术，获得理解指令、回答问题、生成文章与代码、进行推理和多轮对话的能力，代表模型包括GPT系列、LLaMA、DeepSeek等。LLM具有涌现能力（模型规模增大后出现小模型不具备的能力）与上下文学习能力，被视为通向通用人工智能的重要路径，同时也面临幻觉、偏见、算力消耗与安全对齐等挑战。",
    "background": "2017年Transformer架构问世，2018年GPT与BERT开启预训练语言模型时代；2020年GPT-3以1750亿参数展现涌现能力，2022年底ChatGPT发布引爆全球生成式AI浪潮；此后国内外大模型快速迭代，开源模型与推理模型（如DeepSeek-R1）推动能力持续跃升。",
    "core": [
      "以自回归语言建模为核心预训练任务，即预测下一个词",
      "参数量与训练数据规模决定能力，涌现能力随规模出现",
      "通过指令微调与RLHF实现指令遵循和人类偏好对齐",
      "上下文窗口长度决定模型单次处理的信息量"
    ],
    "applications": [
      "智能对话助手与客服机器人（ChatGPT、文心一言等）",
      "代码生成与编程辅助工具",
      "内容创作、机器翻译与自动摘要",
      "搜索引擎与知识问答的重构"
    ],
    "misconceptions": [
      "大模型并非真正“理解”世界，其知识来自训练数据的统计关联，会一本正经地编造（幻觉）",
      "大模型能力不单由参数量决定，数据质量与训练方法同样重要"
    ],
    "references": [
      "LLM：什么是大语言模型？（Google Developers）",
      "大型语言模型综述（北京智源人工智能研究院）",
      "一文讲透AI大模型（科普中国）"
    ],
    "sources": [
      "https://developers.google.com/machine-learning/crash-course/llm/transformers",
      "https://hub.baai.ac.cn/view/25240",
      "https://cloud.kepuchina.cn/h5/detail?id=7463608412279476224"
    ],
    "searchedAt": "2026-08-14",
    "domain": "人工智能",
    "relations": [
      {
        "type": "related",
        "target": "generative-ai",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "Transformer",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "attention-mechanism",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "natural-language-processing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "reinforcement-learning",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "deep-learning",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "turing-test",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "ai-agent",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "multimodal-llm",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "mixture-of-experts",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "sparse-attention",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "ai-chip",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "edge-ai",
        "note": "",
        "confidence": 0.75
      }
    ],
    "principle": "大语言模型（LLM）的工作机制基于深度学习中的Transformer架构，通过自监督学习在海量文本数据上进行预训练。模型通过预测下一个词来学习语言的统计规律，并利用大规模并行计算能力处理复杂的语言任务。经过指令微调和人类反馈强化学习等对齐技术后，大语言模型能够理解自然语言指令、回答问题、生成文本内容、进行推理和多轮对话。这些模型通过增加参数量来提升性能，从而展现出涌现能力和上下文学习能力。",
    "pros": [
      "强大的语言理解和生成能力",
      "广泛的应用场景",
      "能够处理复杂的语言任务"
    ],
    "cons": [
      "存在幻觉和偏见问题",
      "需要大量算力资源",
      "安全对齐挑战"
    ],
    "confidence": 0.9,
    "status": "verified"
  },
  {
    "id": "reinforcement-learning",
    "name": "强化学习",
    "aliases": [
      "Reinforcement Learning",
      "RL",
      "增强学习"
    ],
    "field": "人工智能",
    "tags": [
      "智能体",
      "奖励信号",
      "马尔可夫决策过程",
      "试错学习"
    ],
    "difficulty": 4,
    "summary": "智能体与环境试错交互、依据奖励信号学习最优决策策略的方法。",
    "definition": "强化学习是机器学习的重要范式：智能体（Agent）在环境（Environment）中通过不断试错采取动作、获得奖励或惩罚信号，学习选择动作的策略，以最大化长期累积回报。其数学框架是马尔可夫决策过程（MDP），核心要素包括状态、动作、奖励、状态转移概率与折扣因子；经典算法有Q-learning、深度Q网络（DQN）、策略梯度与近端策略优化（PPO）等。强化学习与深度学习结合形成深度强化学习，2016年AlphaGo击败人类顶级棋手成为标志性事件，AlphaGo Zero更在完全不依赖人类棋谱的情况下通过自我对弈超越前人。强化学习还广泛应用于机器人控制、自动驾驶、推荐系统与游戏AI等领域。",
    "background": "强化学习思想源于20世纪50年代桑代克的动物“试错学习”心理学实验；1989年Watkins提出Q-learning，1992年TD-Gammon在西洋双陆棋取得突破；2013年DeepMind的DQN实现雅达利游戏智能，2016年AlphaGo战胜李世石，2017年AlphaGo Zero完全自学掌握围棋，标志深度强化学习走向成熟。",
    "core": [
      "学习信号是延迟的奖励而非即时标签，需平衡探索与利用",
      "以马尔可夫决策过程为数学框架，目标是累积回报最大化",
      "深度强化学习用神经网络近似价值函数或策略",
      "自我对弈与环境模拟可无限生成训练数据"
    ],
    "applications": [
      "围棋、星际争霸等游戏AI",
      "机器人运动控制与机械臂操作",
      "推荐系统与广告竞价策略优化",
      "芯片布局优化与数据中心能效调度"
    ],
    "misconceptions": [
      "强化学习不等于“机器学习加奖励”，其样本效率低、训练不稳定，对奖励设计极为敏感",
      "强化学习并非只在游戏中有效，但真实环境落地需面对安全与成本约束"
    ],
    "references": [
      "什么是强化学习？核心概念（Ultralytics）",
      "强化学习的主流方法概述（腾讯云）",
      "强化学习基本概念（OpenDILab）",
      "AlphaGo Zero Nature论文解读（阿里云）"
    ],
    "sources": [
      "https://www.ultralytics.com/zh/glossary/reinforcement-learning",
      "https://cloud.tencent.cn/developer/article/2672604",
      "https://opendilab.github.io/DI-engine/10_concepts/basic_rl_zh.html",
      "https://developer.aliyun.com/article/225670"
    ],
    "searchedAt": "2026-08-14",
    "domain": "人工智能",
    "relations": [
      {
        "type": "related",
        "target": "machine-learning",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "deep-learning",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "马尔可夫决策过程",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "AlphaGo",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "large-language-model",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "embodied-ai",
        "note": "",
        "confidence": 0.75
      },
      {
        "type": "related",
        "target": "world-simulator",
        "note": "",
        "confidence": 0.75
      }
    ]
  },
  {
    "id": "convolutional-neural-network",
    "name": "卷积神经网络",
    "aliases": [
      "CNN",
      "Convolutional Neural Network",
      "卷积网络"
    ],
    "field": "人工智能",
    "tags": [
      "图像识别",
      "卷积",
      "池化",
      "计算机视觉"
    ],
    "difficulty": 4,
    "summary": "利用卷积操作提取局部特征的深度神经网络，图像识别基石模型。",
    "definition": "卷积神经网络（CNN）是一类专门处理网格结构数据（如图像）的深度神经网络。其核心思想是用卷积核（滤波器）在输入上滑动，通过局部感受野与权重共享提取平移不变的局部特征，再用池化层下采样降低分辨率、增强鲁棒性，最后经全连接层完成分类或回归。典型结构包含卷积层、激活层（ReLU）、池化层与全连接层，经典模型有LeNet-5、AlexNet、VGG、ResNet等。CNN通过端到端训练自动获得从边缘、纹理到物体部件的分层特征，相比全连接网络大幅减少参数量，是计算机视觉领域图像分类、目标检测、语义分割的主流基础架构。",
    "background": "受猫视觉皮层感受野研究启发，1989年LeCun提出用于手写数字识别的LeNet，1998年LeNet-5定型；因数据与算力限制一度沉寂。2012年AlexNet在ImageNet竞赛中以巨大优势夺冠，引爆深度学习复兴；此后VGG、ResNet等不断刷新纪录，CNN成为视觉领域标准工具。",
    "core": [
      "卷积通过局部连接与权重共享大幅减少参数量",
      "浅层卷积核提取边缘纹理，深层组合出语义特征",
      "池化层降采样增强平移不变性与计算效率",
      "残差连接（ResNet）解决深层网络退化问题"
    ],
    "applications": [
      "人脸识别与安防监控",
      "自动驾驶目标检测与车道识别",
      "CT、X光等医学影像辅助诊断",
      "电商以图搜图与图像内容审核"
    ],
    "misconceptions": [
      "CNN并非唯一的图像模型，ViT等基于注意力的架构在部分任务上已超越CNN",
      "卷积核并非人工设计，而是在训练中自动学习得到"
    ],
    "references": [
      "什么是卷积神经网络（CNN）？（Google Cloud）",
      "什么是卷积神经网络？（Milvus）",
      "卷积神经网络工作原理直观解释（腾讯云）"
    ],
    "sources": [
      "https://cloud.google.com/discover/what-are-convolutional-neural-networks",
      "https://milvus.org.cn/ai-quick-reference/what-is-a-convolutional-neural-network",
      "https://cloud.tencent.com.cn/developer/article/1160429"
    ],
    "searchedAt": "2026-08-14",
    "domain": "人工智能",
    "relations": [
      {
        "type": "related",
        "target": "deep-learning",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "计算机视觉",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "图像识别",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "attention-mechanism",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "neural-network",
        "note": "",
        "confidence": 0.75
      }
    ]
  },
  {
    "id": "attention-mechanism",
    "name": "注意力机制",
    "aliases": [
      "Attention Mechanism",
      "Attention",
      "自注意力"
    ],
    "field": "人工智能",
    "tags": [
      "Transformer",
      "序列建模",
      "加权求和",
      "机器翻译"
    ],
    "difficulty": 4,
    "summary": "让模型动态聚焦输入中重要部分、按相关性加权信息的建模技术。",
    "definition": "注意力机制是一种让神经网络在处理序列或图像时动态为不同位置信息分配权重的技术：查询（Query）与键（Key）计算相关性得分，经Softmax归一化后对值（Value）加权求和，从而聚焦对当前任务最重要的信息。2014年Bahdanau等将其引入神经机器翻译，解决了循环网络的长距离依赖与信息瓶颈问题；2017年Vaswani等提出Transformer，以自注意力（Self-Attention）与多头注意力（Multi-Head Attention）取代循环结构，实现并行计算与全局依赖建模。如今注意力机制已成为大语言模型、视觉Transformer（ViT）等现代架构的基石，也是多模态模型连接文本、图像、音频的通用接口。",
    "background": "注意力概念受人类视觉选择性注意启发。2014年Bahdanau等在机器翻译中首次引入软注意力对齐机制，2015年Xu等将其用于图像描述生成；2017年论文《Attention Is All You Need》提出完全基于注意力构建的Transformer，开创现代大模型时代。",
    "core": [
      "注意力权重按输入内容动态计算，实现自适应信息聚焦",
      "自注意力使序列中任意两个位置直接交互，建模全局依赖",
      "多头注意力从不同子空间并行捕捉多种关系",
      "QKV机制取代递归结构，支持并行训练与超长序列建模"
    ],
    "applications": [
      "机器翻译与文本摘要",
      "大语言模型的上下文理解与生成",
      "图像描述生成与视觉-语言模型",
      "语音识别中的声学对齐建模"
    ],
    "misconceptions": [
      "注意力机制并不提供真正的“可解释性”，注意力权重高不代表因果重要性",
      "注意力不是大模型的唯一组件，位置编码与前馈网络同样关键"
    ],
    "references": [
      "深入解析Transformer模型中的注意力与自注意力机制（百度）",
      "深度解析Transformer架构的三大注意力机制（百度）",
      "Chapter 37: Attention — Looking Back（AMU课程）"
    ],
    "sources": [
      "https://cloud.baidu.com/article/3187396",
      "https://cloud.baidu.com/article/3323917",
      "https://bnaskrecki.faculty.wmi.amu.edu.pl/nnets/_build/html/part11_transformers/ch37_bahdanau_attention.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "人工智能",
    "relations": [
      {
        "type": "related",
        "target": "Transformer",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "large-language-model",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "机器翻译",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "natural-language-processing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "deep-learning",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "convolutional-neural-network",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "generative-ai",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "natural-language-processing",
    "name": "自然语言处理",
    "aliases": [
      "NLP",
      "Natural Language Processing"
    ],
    "field": "人工智能",
    "tags": [
      "语言理解",
      "机器翻译",
      "文本分析",
      "人机交互"
    ],
    "difficulty": 2,
    "summary": "让计算机理解、分析和生成人类自然语言的人工智能技术领域。",
    "definition": "自然语言处理（NLP）是人工智能与语言学交叉的学科，研究如何让计算机理解、解析与生成人类语言，实现人机自然交互。其任务覆盖词法（分词、词性标注）、句法（依存句法分析）、语义（命名实体识别、关系抽取）与语用层面，典型应用包括机器翻译、文本分类、情感分析、问答系统、对话系统与信息抽取。早期NLP依赖人工规则与统计方法（n-gram、隐马尔可夫模型）；2013年word2vec等词向量技术引入分布式语义表示，2018年BERT、GPT等预训练模型确立“预训练+微调”范式，使各项任务性能大幅跃升；大语言模型进一步推动NLP向通用语言智能演进，成为人机交互的核心通道。",
    "background": "NLP研究始于20世纪50年代的机器翻译实验，先后经历规则方法、统计方法、深度学习三个阶段；1966年ELIZA实现简单对话，1990年代统计机器翻译兴起；2010年代深度学习使性能跃升，2018年BERT开启预训练时代，2022年ChatGPT使语言智能接近通用水平。",
    "core": [
      "语言歧义性是NLP的根本挑战（一词多义、句法歧义）",
      "文本需先转换为词向量等数值表示才能被模型处理",
      "预训练语言模型大幅提升各类下游任务效果",
      "理解与生成并重，二者构成完整人机对话闭环"
    ],
    "applications": [
      "机器翻译（Google翻译、DeepL等）",
      "智能客服与语音助手",
      "舆情监测与情感分析",
      "搜索引擎与知识问答系统"
    ],
    "misconceptions": [
      "NLP不等于聊天机器人，它覆盖从分词到信息抽取的庞大任务谱系",
      "让模型“读懂”语言不等于真正理解语义，仍存在常识缺失与幻觉"
    ],
    "references": [
      "自然语言处理（阿里云开发者社区）",
      "自然语言处理技术全景（百度）",
      "NLP基础知识（阿里云开发者社区）"
    ],
    "sources": [
      "https://developer.aliyun.com/article/1539859",
      "https://cloud.baidu.com/article/5309641",
      "https://developer.aliyun.com/article/1530343"
    ],
    "searchedAt": "2026-08-14",
    "domain": "人工智能",
    "relations": [
      {
        "type": "related",
        "target": "large-language-model",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "attention-mechanism",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "机器翻译",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "词向量",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "人工智能",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "knowledge-graph",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "id": "turing-test",
    "name": "图灵测试",
    "aliases": [
      "Turing Test",
      "模仿游戏",
      "图灵检验"
    ],
    "field": "人工智能",
    "tags": [
      "人工智能",
      "图灵",
      "思想实验",
      "智能判据"
    ],
    "difficulty": 1,
    "summary": "图灵1950年提出的检验机器能否思考的经典思想实验。",
    "definition": "图灵测试是阿兰·图灵1950年在论文《计算机器与智能》中提出的判定机器是否具有智能的思想实验：人类裁判通过纯文本方式分别与另一人和一台机器对话，若裁判无法可靠区分机器与人，则认为机器通过测试、具有智能。图灵以“模仿游戏”替代“机器能否思考”这一哲学问题，将智能操作化为可观察的行为判据，奠定了人工智能领域的评价基础。2014年聊天机器人尤金·古斯特曼宣称“首次通过”测试（33%裁判误判），但该结果争议较大；2023年更严格的对照测试显示GPT-4等大模型已接近或超过通过阈值。哲学家塞尔批评指出，通过测试只能证明行为模仿，不能证明真正的理解（中文房间论证）。",
    "background": "1950年图灵发表《计算机器与智能》，提出图灵测试并预言2000年前机器能通过；1966年ELIZA让部分用户误以为其具备智能；2014年尤金事件引发广泛争议；当前大语言模型促使学界重新审视测试局限，并发展出反向图灵测试等变体。",
    "core": [
      "以行为作为智能判据，回避“思考”的哲学定义",
      "采用裁判、人类参与者与机器的三方盲测对话",
      "通过标准是裁判无法可靠区分人机，经验误判线为30%",
      "大模型时代测试意义受质疑，理解能力无法被行为完全证明"
    ],
    "applications": [
      "作为AI能力评估的参照基准",
      "聊天机器人与对话系统的人性化评测",
      "CAPTCHA验证码的人机区分（反向图灵测试）"
    ],
    "misconceptions": [
      "通过图灵测试不等于机器真正拥有意识或理解能力（中文房间反驳）",
      "图灵测试并非一次性的统一考试，其形式与标准有多种变体"
    ],
    "references": [
      "图灵测试（维基百科）",
      "什么是图灵测试（CSLT·AI100）",
      "科普两个著名人工智能思想实验（百家号）"
    ],
    "sources": [
      "https://zh.wikipedia.org/wiki/%E5%9B%BE%E7%81%B5%E6%B5%8B%E8%AF%95",
      "http://aigraph.cslt.org/ai100/pdf/AI-100-07-%E4%BB%80%E4%B9%88%E6%98%AF%E5%9B%BE%E7%81%B5%E6%B5%8B%E8%AF%95.pdf",
      "https://baijiahao.baidu.com/s?id=1717600424479584027"
    ],
    "searchedAt": "2026-08-14",
    "domain": "人工智能",
    "relations": [
      {
        "type": "related",
        "target": "人工智能",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "中文房间",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "聊天机器人",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "large-language-model",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "机器智能",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "machine-learning",
        "evidence": "图灵测试与机器学习都涉及对智能的评估和模拟，两者在人工智能领域相互关联。",
        "confidence": 0.85
      },
      {
        "type": "prerequisite",
        "target": "algorithm-complexity",
        "evidence": "理解图灵测试的前提之一是对计算能力和算法复杂性的基本认识。",
        "confidence": 0.8
      }
    ],
    "pros": [
      "优点1：提供了评估机器智能的一个具体方法。",
      "优点2：促进了对智能概念的理解和讨论。"
    ],
    "cons": [
      "缺点1：仅能证明行为模仿，无法证明真正的理解或意识。"
    ],
    "confidence": 0.9,
    "status": "needs_update",
    "principle": "图灵测试的核心在于通过文本对话来判断机器是否具有智能，具体机制是让人类裁判与一台机器和一个真人进行纯文本交流，如果裁判无法可靠地区分两者，则认为该机器通过了测试。这一思想实验将智能操作化为可观察的行为判据，即能否在行为上达到与人类相当的水平。"
  },
  {
    "id": "knowledge-graph",
    "name": "知识图谱",
    "aliases": [
      "Knowledge Graph",
      "KG",
      "知识图谱技术"
    ],
    "field": "人工智能",
    "tags": [
      "语义网络",
      "三元组",
      "信息检索",
      "图结构"
    ],
    "difficulty": 3,
    "summary": "以图结构组织实体及其关系、支撑智能语义查询的知识库技术。",
    "definition": "知识图谱是以图（Graph）为数据结构组织知识的技术：节点表示实体（人、地点、概念等），边表示实体间的关系，基本单元是“实体—关系—实体”三元组（如“北京—是首都—中国”），并辅以属性描述。2012年Google正式提出“Knowledge Graph”概念并用于搜索引擎，显著提升搜索结果的知识性与问答能力。知识图谱的构建流程包括知识抽取（实体识别、关系抽取）、知识融合（实体对齐与消歧）、知识存储（图数据库）与知识推理。它弥补了深度学习缺乏结构化常识的不足，广泛用于搜索引擎、智能问答、推荐系统、金融风控与医疗辅助决策等领域，并常与大模型结合以提升事实准确性与可解释性。",
    "background": "知识图谱思想源于20世纪60—70年代的语义网络与知识表示研究，1980年代专家系统使用规则化知识库；2007年Freebase启动，2012年Google发布知识图谱并整合维基数据等来源；此后Facebook、微软等相继构建社交与通用知识图谱，国内百度“知心”、阿里等平台也陆续落地应用。",
    "core": [
      "以“实体—关系—实体”三元组为基本表示单元，构成有向图",
      "本体（Ontology）定义概念层次与关系约束",
      "知识抽取、融合、存储与推理构成构建闭环",
      "图数据库与图算法支撑高效查询与推理"
    ],
    "applications": [
      "搜索引擎知识卡片与实体推荐",
      "智能问答与语音助手（如“北京的面积是多少”）",
      "金融反欺诈与关联风险分析",
      "医疗知识库与辅助临床决策"
    ],
    "misconceptions": [
      "知识图谱不是标签云或文档库，而是结构化的语义网络",
      "知识图谱与向量数据库互补：前者提供可解释的确定知识，后者擅长语义相似检索"
    ],
    "references": [
      "知识图谱简介（阿里云天池）",
      "知识图谱简介（阿里云开发者社区）",
      "Google知识图谱（维基百科）"
    ],
    "sources": [
      "https://tianchi.aliyun.com/forum/post/75019",
      "https://developer.aliyun.com/article/623592",
      "https://zh.wikipedia.org/wiki/Google%E7%9F%A5%E8%AF%86%E5%9B%BE%E8%B0%B1"
    ],
    "searchedAt": "2026-08-14",
    "domain": "人工智能",
    "relations": [
      {
        "type": "related",
        "target": "语义网络",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "natural-language-processing",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "本体",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "信息抽取",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "图数据库",
        "note": "",
        "confidence": 0.3
      }
    ]
  },
  {
    "id": "generative-ai",
    "name": "生成式人工智能",
    "aliases": [
      "Generative AI",
      "生成式AI",
      "AIGC"
    ],
    "field": "人工智能",
    "tags": [
      "内容生成",
      "大模型",
      "扩散模型",
      "多模态"
    ],
    "difficulty": 2,
    "summary": "能够自主生成文本、图像、音频等全新内容的人工智能技术体系。",
    "definition": "生成式人工智能（Generative AI）指一类从训练数据中学习数据分布、并据此生成全新内容（文本、图像、音频、视频、代码、3D模型等）的人工智能技术，与只做分类预测的判别式AI相对。核心技术包括用于文本的大语言模型（GPT、DeepSeek等）、用于图像视频的扩散模型与生成对抗网络（GAN）、多模态生成模型（DALL·E、Sora、可灵等）以及语音合成（TTS）。2022年底ChatGPT发布使生成式AI进入大众视野，掀起AIGC（人工智能生成内容）浪潮。生成式AI在内容创作、办公效率、编程、教育医疗等领域广泛应用，同时也带来内容真实性、版权归属、深度伪造与安全对齐等治理挑战。",
    "background": "生成式模型研究始于20世纪80年代的马尔可夫链与受限玻尔兹曼机；2014年GAN诞生，2017年Transformer奠定文本生成基础；2020年GPT-3展示强大生成能力，2022年ChatGPT与Stable Diffusion引爆应用浪潮；2023年以来文生视频等多模态生成与开源模型快速推进。",
    "core": [
      "核心是学习数据概率分布并从中采样生成新样本",
      "文本生成以大语言模型为主，图像视频以扩散模型为主",
      "AIGC将AI从“识别判断”推向“自主创造”",
      "可控性与安全对齐（防幻觉、防滥用）是落地关键"
    ],
    "applications": [
      "智能写作、翻译与会话纪要",
      "文生图、文生视频创作（Midjourney、Sora等）",
      "代码生成与软件研发提效",
      "数字人与个性化营销内容生产"
    ],
    "misconceptions": [
      "生成式AI输出并非“无中生有”，而是基于训练数据统计规律的再组合，可能出错（幻觉）",
      "生成式AI不等于大语言模型，图像、音频、视频生成属于同一范畴的不同技术路线"
    ],
    "references": [
      "专家详解：AIGC的现在与未来（中国电子信息产业发展研究院）",
      "什么是生成式AI？概念与应用（Ultralytics）",
      "生成式人工智能技术——从识别判断到自主创造（科普中国）"
    ],
    "sources": [
      "https://www.ccidgroup.com/info/1286/43090.htm",
      "https://www.ultralytics.com/zh/glossary/generative-ai",
      "https://cloud.kepuchina.cn/newSearch/imgText?id=7466891939770441728"
    ],
    "searchedAt": "2026-08-14",
    "domain": "人工智能",
    "relations": [
      {
        "type": "related",
        "target": "large-language-model",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "related",
        "target": "扩散模型",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "多模态学习",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "attention-mechanism",
        "note": "",
        "confidence": 0.85
      }
    ]
  },
  {
    "name": "大模型幻觉",
    "aliases": [],
    "field": "人工智能/计算机术语",
    "tags": [
      "大模型",
      "AI"
    ],
    "difficulty": 3,
    "summary": "大型语言模型生成错误信息的现象。",
    "definition": "大型预训练语言模型在生成文本时偶尔会提供与事实不符或不准确的信息，这种现象被称为‘大模型幻觉’。",
    "background": "随着深度学习和自然语言处理技术的发展，大型语言模型如GPT、BERT等因其强大的语义理解和生成能力而受到广泛关注。然而，在训练过程中，这些模型可能会学到一些错误的关联或偏见，并在生成文本时表现出不准确的信息。",
    "core": [
      "大模型在训练数据中学习到的错误信息",
      "模型生成与事实不符的内容",
      "对抗性样本和输入可能引发幻觉"
    ],
    "pros": [],
    "cons": [
      "降低了模型输出的可靠性",
      "可能导致误解或误导用户"
    ],
    "applications": [
      "文本生成",
      "智能问答系统"
    ],
    "misconceptions": [
      "大模型总是提供准确信息"
    ],
    "related": [
      "预训练模型",
      "语言模型"
    ],
    "relations": [
      {
        "type": "followup",
        "target": "预训练模型",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "语言模型",
        "note": "",
        "confidence": 0.8
      }
    ],
    "sources": [
      "https://arxiv.org/abs/2104.09708,",
      "https://aclanthology.org/2023.findings-emnlp.56/"
    ],
    "principle": "",
    "id": "大模型幻觉",
    "confidence": 0.9,
    "sourceConfidence": 0.85,
    "relationConfidence": 0.55,
    "status": "generated",
    "searchedAt": "2026-08-14"
  },
  {
    "name": "语义路由",
    "aliases": [],
    "field": "人工智能",
    "tags": [
      "自然语言处理",
      "信息检索"
    ],
    "difficulty": 3,
    "summary": "基于语义理解的路径选择机制",
    "definition": "一种通过分析文本语义来决定信息流动方向或路径的技术，常用于智能问答系统和聊天机器人中。",
    "principle": ",",
    "background": "随着自然语言处理技术的发展，传统的基于关键词匹配的信息检索方法已难以满足用户对复杂查询的需求。因此，研究人员开始探索如何利用语义理解来实现更精准的信息路由。",
    "core": [
      "基于深度学习的语义分析模型",
      "多模态信息融合技术",
      "上下文感知路径选择算法"
    ],
    "pros": [
      "提高检索结果的相关性与准确性",
      "增强系统的智能化水平"
    ],
    "cons": [
      "对大规模数据集的需求较高，训练成本大",
      "模型复杂度高，解释性较差"
    ],
    "applications": [
      "智能客服系统",
      "在线教育平台的知识图谱导航"
    ],
    "misconceptions": [
      "语义路由等同于传统的关键词匹配技术"
    ],
    "related": [
      "自然语言处理",
      "信息检索"
    ],
    "relations": [
      {
        "type": "followup",
        "target": "深度学习",
        "note": "",
        "confidence": 0.85
      },
      {
        "type": "dependsOn",
        "target": "知识图谱",
        "note": "",
        "confidence": 0.8
      }
    ],
    "sources": [
      "https://www.semanticscholar.org/",
      "https://arxiv.org/abs/1705.03489,",
      "https://nlp.stanford.edu/"
    ],
    "id": "语义路由",
    "confidence": 0.9,
    "sourceConfidence": 1,
    "relationConfidence": 0.83,
    "status": "verified",
    "searchedAt": "2026-08-14"
  },
  {
    "name": "步态识别",
    "aliases": [],
    "field": "人工智能/计算机视觉",
    "tags": [
      "生物特征识别",
      "安全认证"
    ],
    "difficulty": 3,
    "summary": "通过分析人的行走姿态进行身份验证。",
    "definition": "步态识别是一种基于人体行走时的姿态和运动模式来进行身份识别的技术，属于生物特征识别的一种。它利用了人类在行走过程中特有的动态轮廓和动作特点来实现个体的唯一性识别。",
    "principle": "通过对步态视频或图像序列进行分析，提取出描述步态特性的参数，并与数据库中的模板进行匹配。",
    "background": "步态识别技术起源于20世纪80年代，近年来随着计算机视觉和机器学习的发展而得到迅速发展。它具有非接触、不易伪装等优点，在安防监控、身份验证等领域有广泛应用。",
    "core": [
      "基于动态图像的特征提取",
      "模式识别算法的应用",
      "步态数据库的构建"
    ],
    "pros": [
      "非接触式，易于实现",
      "不易被模仿或伪装"
    ],
    "cons": [
      "受环境因素影响较大",
      "识别精度有待提高"
    ],
    "applications": [
      "安防监控系统",
      "机场、车站等重要场所的身份验证"
    ],
    "misconceptions": [
      "步态识别可以完全替代其他生物特征识别方法",
      "步态识别不受光照和角度影响"
    ],
    "related": [
      "面部识别",
      "指纹识别"
    ],
    "relations": [
      {
        "type": "followup",
        "target": "计算机视觉",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "dependsOn",
        "target": "机器学习算法",
        "note": "",
        "confidence": 0.8
      }
    ],
    "sources": [
      "https://www.sciencedirect.com/topics/computer-science/gait-recognition",
      "https://ieeexplore.ieee.org/document/8354902,"
    ],
    "id": "步态识别",
    "provenance": {
      "discoveredBy": "system",
      "discoveredAt": 1786692942908,
      "evidence": "candidate:system"
    },
    "confidence": 0.9,
    "sourceConfidence": 0.85,
    "relationConfidence": 0.55,
    "status": "verified",
    "searchedAt": "2026-08-14"
  },
  {
    "name": "贝叶斯定理",
    "aliases": [
      "Bayes' theorem"
    ],
    "field": "人工智能/统计学",
    "tags": [
      "概率论",
      "统计推断"
    ],
    "difficulty": 3,
    "summary": "用于计算条件概率的公式。",
    "definition": "贝叶斯定理是一种用于计算在已知某些条件下，某个假设成立的概率的方法。具体来说，它是根据先验概率和似然度来更新后验概率的公式。",
    "background": "1763年，托马斯·贝叶斯提出了一种关于条件概率的理论，后来由理查德·皮尔逊进一步发展。该定理由贝叶斯的论文《论机会游戏中的一些问题》中推导而来。",
    "core": [
      "先验概率：在获得新信息之前对假设的概率估计。",
      "似然度：给定假设为真时，观察到数据的概率。",
      "后验概率：结合先验概率和似然度后的最终概率。",
      "贝叶斯更新：通过调整先验概率来反映新的证据或数据。"
    ],
    "pros": [
      "能够利用新数据不断修正概率估计，提高预测准确性。",
      "适用于不确定性分析和决策制定。"
    ],
    "cons": [
      "需要准确的先验概率，否则可能导致偏差。",
      "计算复杂度可能较高，特别是在处理大量数据时。"
    ],
    "applications": [
      "机器学习中的模型训练",
      "医学诊断",
      "推荐系统"
    ],
    "misconceptions": [
      "贝叶斯定理仅适用于数学问题，而不涉及实际决策。",
      "先验概率总是客观的，不需要主观判断。"
    ],
    "related": [
      "先验概率",
      "后验概率"
    ],
    "relations": [
      {
        "type": "followup",
        "target": "贝叶斯网络",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "dependsOn",
        "target": "条件概率",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "dependsOn",
        "target": "先验概率",
        "note": "",
        "confidence": 0.3
      }
    ],
    "sources": [
      "https://en.wikipedia.org/wiki/Bayes%27_theorem",
      "https://www.statlect.com/fundamentals-of-statistics/bayes-theorem",
      "https://machinelearningmastery.com/a-gentle-introduction-to-bayesian-probability-for-machine-learning/",
      "https://mathworld.wolfram.com/BayessTheorem.html"
    ],
    "principle": "",
    "id": "贝叶斯定理",
    "provenance": {
      "discoveredBy": "user",
      "discoveredAt": 1786696405936,
      "evidence": "user-request:贝叶斯定理"
    },
    "confidence": 0.9,
    "sourceConfidence": 0.7,
    "relationConfidence": 0.3,
    "status": "verified",
    "verification": {
      "by": "ollama",
      "score": 1,
      "issues": [],
      "note": "贝叶斯定理的定义和原理准确无误，关系描述也符合实际情况。",
      "at": 1786696383349
    },
    "searchedAt": "2026-08-14",
    "domain": "人工智能"
  }
];
