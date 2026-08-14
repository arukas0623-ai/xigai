# XIGAI 项目状态（多对话协作事实来源）

> 所有新对话开始前**必须**读取本文件 + XIGAI_CHANGELOG.md，以当前代码与 STATE 为准，不依赖历史聊天。
> 最后更新：2026-08-14（由 MASTER 维护）

## 1. 架构（禁止大规模重构）
- **纯前端**：`index.html` + `assets/js/{core,ui,chat,kgraph,personal,app}.js`（无框架）
- **本地服务**：`server.js`（Node，静态文件 + REST API，唯一公共数据写入口）
- **数据**：`data/*.js`（`window.XIGAI["领域"] = [概念对象]`，38 个文件）；`data/manifest.js` 为加载清单
- **缓存/状态**：`.cache/{ai,grow,verify,versions,heat,searchlog,candidates,relpool,moderation,stats}.json|md`
- **脚本**：`scripts/{normalize-data,cleanup-legacy,mobile-cdp,probe-buttons}.js`
- 部署：本机 http://127.0.0.1:8765 · GitHub Pages https://arukas0623-ai.github.io/xigai/ · 隧道（临时）· xigai.js.org（PR #12272 审核中）
- 本地免费 AI：Ollama（qwen2.5:7b，端口 11434）；付费：dsh headless（DeepSeek API）

## 2. 数据指标（实时以 /api/health、/api/stats 为准）
| 指标 | 值 |
|---|---|
| 概念 / 领域 | 606 / 38（avg 16/领域） |
| 完整度（avgCompleteness） | 45%（纵向补全队列持续提升） |
| 知识债务 | 34 |
| 关系有效率（可解析∧可信） | 73%（**不以删除 pending 提升**） |
| 来源覆盖 / 多源率 | 100% / 90% |
| pending 概念 / 待补全关系 | 0 / 744 |
| 孤立节点 | 131 |
| 核心节点 / 覆盖 | 85 / 100% |
| 冲突 / 审核队列 | 0 / 1 |

## 3. AI 策略（成本硬约束）
- **系统自动任务**：本地命中(0) → 缓存 → Ollama → 仅低置信免费联网验证(百度百科,7天缓存)；**禁止 DeepSeek 付费兜底**（`autoPaidEnabled=false` 硬开关）
- **用户主动**（深度解析/问AI）：本地→缓存→Ollama→**用户明确确认**→付费+预算守卫（日 20 / 月 500，超限阻断）
- DeepSeek web_search：headless 每会话 maxUses=2（headless profile patch）
- 缓存：深度解析 7d、聊天 24h、quiz 24h、grow/verify 7d
- 自动任务上限：小时 6 / 日 40 / 队列 50（`autoOps` 计数）
- 防重复：QUEUE_DONE 冷却 5min、单飞 Map、队列去重
- 统计：`/api/stats`（localHits/cacheHits/ollamaCalls/paidCalls/webSearchCalls/ingests/updates/quizzes/graphragCalls/queue*/patrolRuns/reviews/candidatesFound/searchLog/feedback/moderationFixed/autoOps/costPanel）

## 4. 已完成系统（按时间）
1. 基础：图书馆书架 UI、模糊+拼音搜索、详情、主题换肤、拖拽、收藏/历史、AI 聊天（Ollama 免费 + 付费兜底）、AI 深度解析、回填书库
2. 数据质量：relations 归一化（去自循环/重复/统一 id/反向补全）、confidence 拆分（concept/source/relation）、status（verified≥0.85/generated≥0.6/pending<0.6）、pending 不公开
3. 自增长：/api/grow 闭环（本地→缓存→Ollama→结构化→去重→可信度→分类→入库）、关系自动补全（状态芯片⌛⏳⏸✓、无刷新）、单飞并发
4. 学习系统：知识图谱（2跳/缩放拖拽/关系可解释）、学习路线（难度兜底）、苏格拉底导师、AI测试/掌握度
5. 个性化：个人学习中心（图谱/掌握度/盲区/推荐）、学习足迹/版本时间线、GraphRAG-lite、纠错反馈（moderation）、知识漫游
6. 自维护：Knowledge Patrol（优先级=债务×热度×中心度×领域）、Health Score、孤立检测、关系预算（普通24/核心40）、版本快照回滚、知识缺口视图、自检报告
7. 主动采集：候选概念池（关系/搜索词/别名）、学习队列优先级、自动复查、溯源（discoveredBy/At/evidence）、自动任务上限、搜索驱动增长（search-log）
8. 移动端：mobile.css（五档断点/输入对比度硬化/触控/底部弹层/安全区）、图谱 touch、移动自检（?mobilecheck=1）、CDP 仿真测试

### 收尾修复记录（2026-08-14）
- extractJSON 尾逗号正则修复：`,([\s}\]])` → `,(\s*[}\])`，此前会误删元素间 `,\n` 导致 JSON 解析失败（enrich 关系生成长期无法入库）
- principle 规范化：嵌套对象取首个字符串值/数组 join，消除 `"[object Object]"` 污染（修复 5 处：图灵测试/动线/包豪斯/混合战争/流行音乐，均经修复后管线重新生成真实文本）
- relations 新增必带 evidence+confidence+可解析目标（禁止无依据建边）

## 5. 当前任务（本轮优先级）
- **强化「自主发现→学习→验证→收录→建立关系→复查」**：
  - [x] 候选池（关系/搜索/别名）已建
  - [x] 学习队列优先级已建
  - [x] 自动复查已建（Ollama 确认 + conflict→moderation）
  - [x] 纵向补全加入「关系生成（仅可解析目标、带 evidence）」——已完成并实盘验证（relationsAdded 生效）
  - [x] 复查扩展：低置信关系复查/关系置信度刷新——已完成（reviewConceptTask 刷新关系置信度）
  - [x] 候选失败降级（fail≥3 移除候选，防死循环）——已完成（demoteCandidate）
  - [ ] 同义词/缩写候选规范化
- 后续候选：GraphRAG 升级向量检索、UI 持续精修、xigai.js.org 上线（PR 合并后加 CNAME）

## 6. 禁止事项
- 大规模重构；删除/降级 pending 关系；无依据制造关系；自动任务启用付费（autoPaidEnabled 恒 false）；追求概念数量；破坏现有 API/数据/Ollama 策略；移动端输入对比度回退

## 7. 对话分工（专项只改职责范围，跨模块先写 STATE/CHANGELOG）
- **MASTER**：总控/架构/优先级/协调，不碰细节
- **KNOWLEDGE**：概念/领域/relations/Patrol/发现/收录/Health/知识质量
- **DATA**：confidence/source/pending/conflict/duplicate/version/rollback
- **AI-COST**：Ollama/缓存/web_search/DeepSeek/token/预算
- **UI**：PC/Mobile/CSS/交互/视觉
- **QA**：回归/API/DOM/移动端/性能/安全/成本测试

## 8. API 速查（server.js）
/api/health · /api/stats · /api/grow · /api/grow-target · /api/completion-status · /api/enqueue · /api/discover · /api/patrol · /api/maintain · /api/rollback · /api/feedback · /api/moderation · /api/version · /api/quiz · /api/graphrag · /api/extract-concepts · /api/free-ai · /api/free-tools · /api/launch-tool · /api/ask · /api/ai · /api/add-concept · /api/search-log · /api/heat
