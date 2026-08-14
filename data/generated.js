window.XIGAI = window.XIGAI || {};
window.XIGAI["AI 生成"] = [
  {
    "id": "测试时计算",
    "name": "测试时计算",
    "field": "AI工程与模型",
    "aliases": [],
    "tags": [
      "AI工程与模型"
    ],
    "difficulty": 3,
    "summary": "测试时计算，又称推理时计算（Inference-Time C",
    "definition": "测试时计算，又称推理时计算（Inference-Time Compute），指模型训练完成后、在推理/测试阶段投入的额外计算资源，用于提升输出质量。它包含两个方向：一是**测试时扩展（Test-Time Scaling）**，通过更长的思维链、多次采样投票、树搜索等方式分配更多推理计算；二是**测试时训练（Test-Time Training，TTT）**，利用测试样本在推理时以自监督目标更新模型权重，使其适应新数据分布。",
    "background": "传统缩放定律（Kaplan 2020、Chinchilla 2022）只把模型性能视为训练参数量与数据量的函数。2020 年 Sun 等人提出 TTT，用自监督任务应对分布偏移。2024 年 OpenAI 发布 o1，通过长思维链把推理计算量大幅提升，使\"测试时扩展\"成为主流议题。随后 Snell 等人（ICLR 2025）证明：对数学推理类任务，**优化测试时计算的分配甚至比增大模型参数更有效**。2025 年 NeurIPS 涌现多篇相关论文（如可证明的测试时缩放定律、Kinetics 重思缩放、Thinking More 的幻象等），对该范式的收益边界展开讨论。",
    "core": [
      "新的扩展轴**：在训练算力之外，推理算力成为第三条 scaling 维度，可与参数量互补。",
      "主要手段**：长思维链、self-consistency 多数投票、best-of-N 采样，以及过程奖励模型（PRM）驱动的搜索（MCTS、beam search）。",
      "预算分配是关键**：测试时计算存在\"并行 vs 顺序\"等最优分配策略（compute-optimal scaling），盲目堆算力并不划算。",
      "收益有边界**：对简单问题过度思考反而降低准确率，需按难度自适应地分配推理预算。",
      "TTT 与 scaling 不同**：TTT 通过更新权重做测试时自适应（Test-Time Adaptation），应对分布偏移；scaling 则只增加推理过程的计算。"
    ],
    "applications": [
      "推理模型**：OpenAI o1/o3、DeepSeek-R1 等通过强化学习训练长思维链，推理时生成更长的思考过程，在数学、代码、科学推理上显著提升。",
      "测试时自适应**：视觉分类、分割等任务在天气、域偏移等分布变化下，用无标签测试样本微调模型。",
      "代码生成与智能体**：通过多次采样加验证/搜索，提高任务成功率。"
    ],
    "misconceptions": [
      "\"测试时计算＝让模型多想\"**：实际需要合理分配策略，否则只是浪费算力。",
      "\"推理计算越多越好\"**：简单任务上增加推理可能因\"过思考\"而变差。",
      "混淆 TTT 与 scaling**：前者改权重，后者只增加推理计算，机制完全不同。"
    ],
    "references": [
      "[Scaling LLM Test-Time Compute Optimally Can be More Effective than Scaling Parameters for Reasoning (ICLR 2025)](https://proceedings.iclr.cc/paper_files/paper/2025/hash/1b623663fd9b874366f3ce019fdfdd44-Abstract-Conference.html)",
      "[Provable Scaling Laws for the Test-Time Compute of Large Language Models (NeurIPS 2025)](https://proceedings.neurips.cc//paper_files/paper/2025/hash/f3f607e4c13bd1cb8885de44b4ec45b7-Abstract-Conference.html)",
      "[Kinetics: Rethinking Test-Time Scaling Law (NeurIPS 2025)](https://proceedings.neurips.cc//paper_files/paper/2025/hash/79ada0f9bc4e41192ad5a80d13c8ca7e-Abstract-Conference.html)",
      "[Does Thinking More Always Help? Mirage of Test-Time Scaling in Reasoning Models (NeurIPS 2025)](https://proceedings.neurips.cc/paper_files/paper/2025/hash/fc067ac218430c409d6f65403328f740-Abstract-Conference.html)"
    ],
    "sources": [
      "https://proceedings.iclr.cc/paper_files/paper/2025/hash/1b623663fd9b874366f3ce019fdfdd44-Abstract-Conference.html",
      "https://proceedings.neurips.cc//paper_files/paper/2025/hash/f3f607e4c13bd1cb8885de44b4ec45b7-Abstract-Conference.html",
      "https://proceedings.neurips.cc//paper_files/paper/2025/hash/79ada0f9bc4e41192ad5a80d13c8ca7e-Abstract-Conference.html",
      "https://proceedings.neurips.cc/paper_files/paper/2025/hash/fc067ac218430c409d6f65403328f740-Abstract-Conference.html",
      "https://icml.cc/virtual/2025/poster/44720"
    ],
    "searchedAt": "2026-08-14",
    "generated": true,
    "domain": "AI 生成",
    "relations": [
      {
        "type": "related",
        "target": "推理时扩展（Inference-Time Scaling）、思维链（Chain-of-Thought）、self-consistency、best-of-N、过程奖励模型（PRM）、蒙特卡洛树搜索（MCTS）、测试时自适应（TTA）、训练计算缩放定律（Training Compute Scaling Law）。",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "prerequisite",
        "target": "large-language-model",
        "note": "",
        "confidence": 0.8,
        "evidence": "学习路径补全（目标已收录）"
      }
    ]
  },
  {
    "name": "自身免疫性疾病",
    "aliases": [],
    "field": "医学/免疫学",
    "tags": [
      "疾病",
      "免疫"
    ],
    "difficulty": 3,
    "summary": "机体免疫系统攻击正常组织的疾病。",
    "definition": "自身免疫性疾病是指人体免疫系统错误地识别自身组织为外来物质，从而导致对自身组织进行攻击的一类疾病。常见的有风湿性关节炎、红斑狼疮等。",
    "principle": ",",
    "background": "自身免疫性疾病的发生与遗传因素、环境因素及激素水平有关。这类疾病的病因复杂，目前尚无根治方法。",
    "core": [
      "免疫系统错误识别",
      "攻击正常组织",
      "多种类型疾病",
      "病因复杂"
    ],
    "pros": [],
    "cons": [
      "难以治愈",
      "长期管理"
    ],
    "applications": [
      "临床诊断和治疗",
      "生物制剂的研发"
    ],
    "misconceptions": [
      "自身免疫性疾病可以完全治愈。",
      "所有自身免疫性疾病都是由单一因素引起的。"
    ],
    "related": [
      "过敏反应",
      "免疫缺陷病"
    ],
    "relations": [
      {
        "type": "related",
        "target": "过敏反应",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "免疫缺陷病",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "prerequisite",
        "target": "激素治疗",
        "note": "",
        "confidence": 0.9,
        "evidence": "学习路径补全（目标已收录）"
      },
      {
        "type": "prerequisite",
        "target": "糖皮质激素",
        "note": "",
        "confidence": 0.9,
        "evidence": "学习路径补全（目标已收录）"
      }
    ],
    "sources": [
      "https://www.niams.nih.gov/health_info/autoimmune",
      "https://www.cdc.gov/cadence/autoimmune-diseases.html",
      "https://medlineplus.gov/ency/article/009127.htm"
    ],
    "id": "自身免疫性疾病",
    "provenance": {
      "discoveredBy": "user",
      "discoveredAt": 1786694094108,
      "evidence": "user-request:自身免疫性疾病"
    },
    "confidence": 0.9,
    "sourceConfidence": 1,
    "relationConfidence": 0.3,
    "status": "verified",
    "searchedAt": "2026-08-14",
    "domain": "AI 生成"
  },
  {
    "name": "Cortis",
    "aliases": [],
    "field": "健康与医疗",
    "tags": [
      "药物",
      "激素"
    ],
    "difficulty": 2,
    "summary": "一种皮质醇类药物",
    "definition": "Cortis 是一种皮质醇类药物，用于治疗炎症和自身免疫性疾病。它通过模拟人体自然产生的皮质醇来发挥作用。",
    "principle": ",",
    "background": "Cortis 属于糖皮质激素类药物，广泛应用于临床治疗多种疾病，包括哮喘、过敏反应、关节炎等。其作用机制是抑制炎症反应和自身免疫过程。",
    "core": [
      "抗炎",
      "免疫抑制",
      "快速起效"
    ],
    "pros": [
      "疗效显著",
      "适用范围广"
    ],
    "cons": [
      "长期使用可能产生副作用",
      "依赖性"
    ],
    "applications": [
      "治疗哮喘",
      "缓解过敏反应"
    ],
    "misconceptions": [
      "Cortis 不是维生素，而是激素类药物。",
      "不应随意使用或滥用 Cortis。"
    ],
    "related": [
      "皮质醇",
      "糖皮质激素"
    ],
    "relations": [
      {
        "type": "dependsOn",
        "target": "皮质醇",
        "note": "",
        "confidence": 0.3
      }
    ],
    "sources": [
      "https://www.mayoclinic.org/drugs-supplements/cortis-full-dose-info",
      "https://medlineplus.gov/druginfo/meds/a68201.html"
    ],
    "id": "cortis",
    "provenance": {
      "discoveredBy": "user",
      "discoveredAt": 1786694101424,
      "evidence": "user-request:Cortis"
    },
    "confidence": 0.9,
    "sourceConfidence": 0.85,
    "relationConfidence": 0.3,
    "status": "verified",
    "searchedAt": "2026-08-14"
  },
  {
    "name": "糖皮质激素",
    "aliases": [],
    "field": "医学/内分泌学",
    "tags": [
      "激素",
      "免疫抑制剂"
    ],
    "difficulty": 3,
    "summary": "一类具有抗炎和免疫抑制作用的药物",
    "definition": "糖皮质激素是一类由肾上腺皮质分泌或人工合成的甾体激素，主要功能是调节炎症反应、免疫系统以及代谢过程。",
    "principle": ",",
    "background": "自20世纪40年代发现天然糖皮质激素以来，这类药物在临床上被广泛应用。它们通过影响细胞内的信号通路来发挥抗炎和免疫抑制作用。",
    "core": [
      "具有广泛的抗炎效果",
      "调节免疫系统功能",
      "影响代谢过程"
    ],
    "pros": [
      "有效控制炎症反应",
      "改善多种自身免疫性疾病症状"
    ],
    "cons": [
      "长期使用可能导致副作用如骨质疏松、高血压等"
    ],
    "applications": [
      "治疗过敏性鼻炎",
      "缓解哮喘症状"
    ],
    "misconceptions": [
      "不应将糖皮质激素与所有激素混淆，它们具有特定的功能。",
      "不应认为所有免疫抑制剂都是糖皮质激素，还有其他类型的免疫抑制药物。"
    ],
    "related": [
      "肾上腺素",
      "皮质醇"
    ],
    "relations": [
      {
        "type": "evolvedFrom",
        "target": "肾上腺皮质分泌的激素",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "dependsOn",
        "target": "免疫系统功能",
        "note": "",
        "confidence": 0.8
      }
    ],
    "sources": [
      "https://www.ncbi.nlm.nih.gov/books/NBK493625/",
      "https://www.sciencedirect.com/topics/pharmacology-toxicology-and-pharmaceutical-science/glucocorticoids",
      "https://medlineplus.gov/ency/article/000447.htm"
    ],
    "id": "糖皮质激素",
    "provenance": {
      "discoveredBy": "user",
      "discoveredAt": 1786694111211,
      "evidence": "user-request:糖皮质激素"
    },
    "confidence": 0.9,
    "sourceConfidence": 1,
    "relationConfidence": 0.55,
    "status": "verified",
    "searchedAt": "2026-08-14"
  },
  {
    "name": "激素治疗",
    "aliases": [],
    "field": "医学/内分泌学",
    "tags": [
      "药物治疗",
      "内分泌调节"
    ],
    "difficulty": 2,
    "summary": "利用激素进行疾病治疗的方法。",
    "definition": "通过使用外源性或调整体内固有激素水平来治疗各种疾病的医疗手段，常用于调节生理功能和治疗代谢性疾病、自身免疫病等。",
    "principle": ",",
    "background": "激素是人体内重要的信号分子，参与调控生长发育、代谢、生殖等功能。当内分泌系统失衡时，可通过补充或抑制特定激素进行干预。",
    "core": [
      "识别需要调节的激素类型",
      "确定治疗剂量和给药途径",
      "监测患者生理指标变化"
    ],
    "pros": [
      "针对性强，能精确调控特定生理过程",
      "改善多种慢性疾病症状"
    ],
    "cons": [
      "可能引起副作用或依赖性",
      "需长期监控以调整剂量"
    ],
    "applications": [
      "甲状腺功能减退症的治疗",
      "糖尿病患者的血糖控制"
    ],
    "misconceptions": [
      "激素治疗等同于增强体质或美容",
      "所有疾病都可通过激素治疗解决"
    ],
    "related": [
      "内分泌疗法",
      "激素替代疗法"
    ],
    "relations": [
      {
        "type": "followup",
        "target": "内分泌失调",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "dependsOn",
        "target": "激素水平检测",
        "note": "",
        "confidence": 0.3
      }
    ],
    "sources": [
      "https://www.ncbi.nlm.nih.gov/books/NBK493618/",
      "https://www.endocrine.org/conditions/hormone-therapy",
      "https://www.mayoclinic.org/diseases-conditions/endocrine-disorder/symptoms-causes/syc-20357537,"
    ],
    "id": "激素治疗",
    "provenance": {
      "discoveredBy": "user",
      "discoveredAt": 1786694120356,
      "evidence": "user-request:激素治疗"
    },
    "confidence": 0.9,
    "sourceConfidence": 1,
    "relationConfidence": 0.3,
    "status": "verified",
    "searchedAt": "2026-08-14"
  }
];