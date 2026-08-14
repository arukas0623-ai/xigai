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
    "related": [
      "推理时扩展（Inference-Time Scaling）、思维链（Chain-of-Thought）、self-consistency、best-of-N、过程奖励模型（PRM）、蒙特卡洛树搜索（MCTS）、测试时自适应（TTA）、训练计算缩放定律（Training Compute Scaling Law）。"
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
    "generated": true
  }
];
