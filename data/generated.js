window.XIGAI = window.XIGAI || {};
window.XIGAI["待分类"] = [
  {
    "name": "常规军事力量",
    "aliases": [
      "传统军事力量"
    ],
    "field": "军事领域",
    "tags": [
      "军事",
      "武装"
    ],
    "difficulty": 3,
    "summary": "国家或组织拥有的正规军队。",
    "definition": "指由国家或政府组建并用于执行防御和进攻任务的正规武装部队，包括陆军、海军、空军等。",
    "principle": "通过军事训练提高战斗力。",
    "core": [
      "人员编制",
      "武器装备"
    ],
    "applications": [
      "参与国际维和行动",
      "进行国防演习"
    ],
    "relations": [
      {
        "type": "related",
        "target": "非军事手段",
        "note": "",
        "confidence": 0.3
      }
    ],
    "sources": [
      "https://baike.baidu.com/item/%E5%B8%81%E6%94%BF%E6%8A%A5%E5%91%8A/273044",
      "https://www.globalsecurity.org/military/"
    ],
    "pros": [],
    "cons": [],
    "id": "常规军事力量",
    "provenance": {
      "discoveredBy": "batch",
      "discoveredAt": 1786705246687,
      "evidence": "candidate:batch"
    },
    "confidence": 0.9,
    "sourceConfidence": 0.85,
    "relationConfidence": 0.3,
    "status": "verified",
    "verification": {
      "by": "ollama",
      "score": 1,
      "issues": [],
      "note": "定义和原理准确，关系表述无误。",
      "at": 1786705258950
    },
    "searchedAt": "2026-08-14"
  },
  {
    "name": "非军事手段",
    "aliases": [
      "非战斗手段"
    ],
    "field": "国际关系与安全领域",
    "tags": [
      "外交",
      "经济"
    ],
    "difficulty": 3,
    "summary": "除军事行动外的其他应对措施。",
    "definition": "指在冲突或危机中，不采用武装力量而采取的政治、经济、文化等手段来达到目的的方法。",
    "principle": "通过非暴力方式解决争端。",
    "core": [
      "外交谈判",
      "经济制裁"
    ],
    "applications": [
      "签订和平协议",
      "实施国际援助"
    ],
    "relations": [
      {
        "type": "followup",
        "target": "常规军事力量",
        "note": "",
        "confidence": 0.3
      }
    ],
    "sources": [
      "https://www.state.gov/foreign-affairs/",
      "https://en.wikipedia.org/wiki/Economic_sanctions"
    ],
    "pros": [],
    "cons": [],
    "id": "非军事手段",
    "provenance": {
      "discoveredBy": "batch",
      "discoveredAt": 1786705246695,
      "evidence": "candidate:batch"
    },
    "confidence": 0.86,
    "sourceConfidence": 0.85,
    "relationConfidence": 0.3,
    "status": "verified",
    "verification": {
      "by": "ollama",
      "score": 0.8,
      "issues": [
        "常规军事力量与非军事手段的关系应为相反，不应互为followup"
      ],
      "note": "关系方向错误，应改为related→常规军事力量",
      "at": 1786705258950
    },
    "searchedAt": "2026-08-14"
  },
  {
    "name": "叙事学",
    "aliases": [
      "叙述理论"
    ],
    "field": "文学与传播学",
    "tags": [
      "文本分析",
      "故事结构"
    ],
    "difficulty": 3,
    "summary": "研究叙述方式和技巧的学科。",
    "definition": "叙事学是研究叙述过程、叙述结构及其对接受者影响的一门学科，探讨如何通过语言组织事件序列以产生特定效果。",
    "principle": "通过时间顺序、视角选择等手段构建故事。",
    "core": [
      "情节结构",
      "叙事视角"
    ],
    "applications": [
      "文学创作指导",
      "广告文案撰写"
    ],
    "relations": [
      {
        "type": "related",
        "target": "文本分析",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "followup",
        "target": "传播学",
        "note": "",
        "confidence": 0.3
      }
    ],
    "sources": [
      "https://en.wikipedia.org/wiki/Narrative_studies",
      "http://www.narrativestudies.net/"
    ],
    "pros": [],
    "cons": [],
    "id": "叙事学",
    "provenance": {
      "discoveredBy": "batch",
      "discoveredAt": 1786705322935,
      "evidence": "candidate:batch"
    },
    "confidence": 0.9,
    "sourceConfidence": 0.7,
    "relationConfidence": 0.3,
    "status": "verified",
    "verification": {
      "by": "ollama",
      "score": 1,
      "issues": [],
      "note": "定义和原理准确，关系合理。",
      "at": 1786705327250
    },
    "searchedAt": "2026-08-14"
  },
  {
    "name": "视频生成",
    "aliases": [
      "视频合成",
      "动态图像生成"
    ],
    "field": "计算机图形学",
    "tags": [
      "动画",
      "特效"
    ],
    "difficulty": 3,
    "summary": "通过软件创建视频内容的过程。",
    "definition": "视频生成是指利用计算机技术，通过算法和模型生成具有特定内容、风格和质量的动态图像序列。",
    "principle": "基于预设脚本或实时数据生成帧序列。",
    "core": [
      "关键帧动画",
      "深度合成"
    ],
    "applications": [
      "影视制作",
      "虚拟现实体验"
    ],
    "relations": [
      {
        "type": "related",
        "target": "计算机图形学",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "followup",
        "target": "图像处理",
        "note": "",
        "confidence": 0.3
      }
    ],
    "sources": [
      "https://en.wikipedia.org/wiki/Computer-generated_image",
      "http://cg.tamu.edu/"
    ],
    "pros": [],
    "cons": [],
    "id": "视频生成",
    "provenance": {
      "discoveredBy": "batch",
      "discoveredAt": 1786705322938,
      "evidence": "candidate:batch"
    },
    "confidence": 0.9,
    "sourceConfidence": 0.85,
    "relationConfidence": 0.3,
    "status": "verified",
    "verification": {
      "by": "ollama",
      "score": null,
      "issues": [],
      "note": "",
      "at": 1786705328677
    },
    "searchedAt": "2026-08-14"
  },
  {
    "name": "全息原理",
    "aliases": [],
    "field": "量子引力",
    "tags": [
      "理论",
      "假设"
    ],
    "difficulty": 4,
    "summary": "描述高维空间的二维编码",
    "definition": "全息原理是量子引力的一个重要概念，认为一个高维度的空间可以由其边界上的低维度系统完全描述。",
    "principle": "高维空间的信息可以通过其边界上的物理场来完整地表示。",
    "core": [
      "提供了一种理解黑洞熵的方法",
      "有助于量子引力理论的发展"
    ],
    "applications": [
      "解释黑洞的霍金辐射",
      "研究强相互作用力"
    ],
    "relations": [
      {
        "type": "prerequisite",
        "target": "霍金辐射",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "量子引力",
        "note": "",
        "confidence": 0.3
      }
    ],
    "sources": [
      "https://www.quantamagazine.org/holographic-principle-opens-a-window-on-black-holes-20190827/",
      "https://en.wikipedia.org/wiki/Holographic_principle"
    ],
    "pros": [],
    "cons": [],
    "id": "全息原理",
    "provenance": {
      "discoveredBy": "batch",
      "discoveredAt": 1786718605676,
      "evidence": "candidate:batch"
    },
    "confidence": 0.9,
    "sourceConfidence": 0.85,
    "relationConfidence": 0.3,
    "status": "verified",
    "verification": {
      "by": "ollama",
      "score": 1,
      "issues": [],
      "note": "定义和原理准确，关系合理。",
      "at": 1786718607361
    },
    "searchedAt": "2026-08-14"
  },
  {
    "name": "量子引力",
    "aliases": [],
    "field": "理论物理",
    "tags": [
      "统一",
      "假设"
    ],
    "difficulty": 5,
    "summary": "将量子力学与广义相对论结合的理论",
    "definition": "量子引力是试图将描述微观世界的量子力学和宏观宇宙的广义相对论结合起来，以解释极端条件下物理现象的一种理论。",
    "principle": "在极小尺度上，时空可能具有量子性质。",
    "core": [
      "解决黑洞信息悖论",
      "探索宇宙早期状态"
    ],
    "applications": [
      "研究霍金辐射和全息原理",
      "开发新的数学工具"
    ],
    "relations": [
      {
        "type": "related",
        "target": "霍金辐射",
        "note": "",
        "confidence": 0.3
      },
      {
        "type": "related",
        "target": "全息原理",
        "note": "",
        "confidence": 0.3
      }
    ],
    "sources": [
      "https://www.nature.com/scitable/knowledge-library/quantum-gravity-14586730/",
      "https://en.wikipedia.org/wiki/Quantum_gravity"
    ],
    "pros": [],
    "cons": [],
    "id": "量子引力",
    "provenance": {
      "discoveredBy": "batch",
      "discoveredAt": 1786718605677,
      "evidence": "candidate:batch"
    },
    "confidence": 0.9,
    "sourceConfidence": 0.85,
    "relationConfidence": 0.3,
    "status": "verified",
    "verification": {
      "by": "ollama",
      "score": 1,
      "issues": [],
      "note": "定义和原理准确，关系合理",
      "at": 1786718609135
    },
    "searchedAt": "2026-08-14"
  }
];
