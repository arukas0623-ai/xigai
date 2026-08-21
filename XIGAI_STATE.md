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
| 概念 / 领域 | 627 / 38（avg 16/领域） |
| 完整度（avgCompleteness） | 46%（纵向补全队列持续提升） |
| 知识债务 | 34 |
| 关系有效率（可解析∧可信） | 72%（**不以删除 pending 提升**） |
| 来源覆盖 / 多源率 | 100% / 90% |
| pending 概念 / 待补全关系 | 0 / 741 |
| 孤立节点 | 151 |
| 核心节点 / 覆盖 | 85 / 100% |
| 冲突 / 审核队列 | 0 / 1 |

## 3. AI 策略（成本硬约束）
- **系统自动任务**：本地命中(0) → 缓存 → Ollama → 仅低置信免费联网验证(百度百科,7天缓存)；**禁止 DeepSeek 付费兜底**（`autoPaidEnabled=false` 硬开关）
- **用户主动**（深度解析/问AI）：本地→缓存→Ollama→**用户明确确认**→付费+预算守卫（日 20 / 月 500，超限阻断）
- DeepSeek web_search：headless 每会话 maxUses=2（headless profile patch）
- 缓存：深度解析 7d、聊天 24h、quiz 24h、grow/verify 7d
- 自动任务上限：小时 6 / 日 40 / 队列 50（`autoOps` 计数）
- 防重复：QUEUE_DONE 冷却 5min、单飞 Map、队列去重
- 统计：`/api/stats`（localHits/cacheHits/ollamaCalls/paidCalls/webSearchCalls/ingests/updates/quizzes/graphragCalls/queue*/patrolRuns/reviews/candidatesFound/searchLog/feedback/moderationFixed/autoOps/costPanel/verifies/verifyCacheHits/subdomainProposals/conflictsDetected）

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

## 5b. 本轮新增（2026-08-14 知识可信度 + 领域体系）
- **AI 解析质量门（P0）**：AI解析→提取候选→去重/匹配→规范化别名→Ollama 独立校验（与生成分离，结果参与置信度：生成60%+校验40%，缓存7天）→必要时百科免费验证→conf/status→≥0.85 verified 入库 / 0.6~0.85 generated / <0.6 pending 不公开；校验 score<0.5 进人工审核队列（不直接入库）；已有概念优先更新合并（别名/来源/关系取并集），不重复创建
- **AI 答案可信度（P1）**：聊天/识别芯片显示 已收录/待验证/未公开 + 可信度 + 独立核验 + 来源数；详情页新增「收录依据」区块（独立核验%、结论、待核查项）
- **降 AI 味（P1）**：文案去营销化（概念答疑/深入解析/联网检索生成 替代 AI 解析员/深度解析/AI 生成）；视觉去聊天气泡渐变/发光/径向光晕；概念详情以知识内容为主
- **领域体系（P1/P2）**：/api/domain-analysis 覆盖分析（藏书量/债务/孤立/跨域×优先级）+ 子领域候选生成（Ollama，7天缓存）+ 严格校验（≥2 个同域真实概念才落盘，防伪造）+ openDomain 领域层级展示（无层级时回退 tags 分组）
## 5c. 本轮新增（2026-08-14 知识生长2.0 + 知识健康循环）
- **生长2.0 发现增强（P0）**：候选多源化（relations + 旧式 prerequisites/followUps + 跨域引用加权 + 子领域代表概念播种 + 学习路径断层前置提议[Ollama 7天缓存 + 短语过滤]）；/api/seed-candidates 触发播种；所有新概念仍走质量门，已有概念优先更新
- **自动健康检查（P0 #8）**：/api/health-check + pump 空闲 6h 节流自动检查（重复/自循环/垃圾目标/无来源/孤立/冲突，仅记录 healthlog.jsonl 不修改数据）
- **知识健康循环（P1）**：Health 新增 recentUpdateQuality（7天内新增/完善概念的完整度、核验通过率、关系效率）
- **最近动态（P1）**：/api/recent-activity + 个人中心「🌱 最近动态」页签（最近新增/最近完善/正在补全）；推荐已有理由说明
## 5d. 本轮新增（2026-08-14 自动维护 + 生长质量）
- **自动维护（P0）**：/api/maintenance —— 扫描自循环/明确垃圾目标（先判可解析性，数字名概念如"996"不误报）→ 自循环定义性确认清除 + 垃圾目标确认清除，全部留 version（maintain-remove-*）→ 自动重算 Health；pump 空闲 6h 节流自动健康检查
- **候选质量（P0）**：candidateScore = 引用频次 + 跨域引用 + 核心节点关联(×2/节点) + 子领域/路径缺口(×1.5) + 领域重要性 + 热度；低价值过滤（短语/泛概念如"XX问题/概述/入门"）；近似名/别名去重（编辑距离<0.15）；连续失败降权（fail≥1×0.5，fail≥2×0.2，fail≥3移除）；/api/discover 按评分入队
- **纵向生长（P1）**：/api/build-paths —— 为高难度概念（≥3 且无 prerequisite）补前置关系，提示词约束为知识库同域候选（防跨域污染），可解析则落 evidence+置信度，未解析保留 pending；实测 prerequisite 关系 3→35 条（77% 可解析），学习路径完整度 0→3%
- **关系质量（P1）**：reviewConceptTask 复查时清理自循环/重复关系（留 version），刷新置信度，pending 保留
- **学习价值（P1）**：Health 新增 learningCoverage（领域覆盖/核心概念覆盖/prerequisite 覆盖/路径完整度/孤立比例）；知识漫游与推荐优先 前置→核心→后续（路径概念 +5 权重）
## 5e. 本轮新增（2026-08-14 自增长效率优化）
- **队列优化**：失败指数退避（5m→10m→…→4h，QUEUE_DONE 记录 fail）；pump 改为 async+await（修复"任务结果恒为失败"的潜伏 bug）；**上限满自动暂停**（autoCapOK 不通过则每分钟重试，跨小时自动恢复）
- **自适应**：队列空闲 → 5 分钟节流主动发现补货（discoverCandidates）+ 6h 健康检查
- **批处理**：growBatch —— 一次 Ollama 生成 2 个候选概念（各自仍走独立校验质量门），pump 检测到 ≥2 个 concept 任务自动合并；batchCalls 计数
- **效率指标**：/api/efficiency —— 窗口候选→入库转化率 / 任务成功率 / Ollama-新增比 / 重复率 / 失败率 / 关系增长 / 完整度变化（delta 对比）
- **管线复用**：processGeneratedConcept 抽取（growTarget 与 growBatch 共用同一质量门管线）
## 5f. 本轮新增（2026-08-14 高价值自增长 + 成本极限优化）
- **批处理 2→8**：growBatch 一次 Ollama 最多 8 概念，输出长度硬控（definition+principle ≤200 字/词条，总 ≤2500 字）；pump 聚合队列中最多 8 个 concept 任务；**批量独立校验**（verifyConceptBatch 2 词条/次，省 50% 校验调用）——8 概念从 16 次调用降至 5 次（1 生成 + 4 校验）
- **classifyDomain 修复**：field 精确/包含 → **分段匹配**（"医学/免疫学"→医学健康）→ 动态领域索引（field/tags/name 多数投票，≥2 票采信，语料变更自动失效重建）→ 无法可靠分类返回**"待分类"**（不再强行归入 AI 生成）
- **Patrol 优先级重排**：核心概念缺字段(16) > 高热度缺字段(14) > 高价值 pending 关系(15) > 孤立节点(12) > 新概念（discover 兜底）
- **成长收益率**：每次入库统计 yieldVerified/yieldRelations；/api/efficiency 新增 effectiveGrowthRate（每次 Ollama 调用产出的 verified+有效关系）与窗口转化率
## 5g. 本轮新增（2026-08-14 自适应知识生长）
- **自适应候选权重**：candidateWeights（按候选来源键：relation/discover/patrol-pending/batch 等）——入库/更新成功 +0.1（封顶 2.0），拒绝/重复/校验失败 -0.2（下限 0.3）；scoreCandidate 按历史成功率加权，形成轻量反馈循环
- **生成前过滤增强**：lowValueCandidate 增加问句/泛化词（什么/如何/哪些/介绍）与"问题/方法/方式/方面/领域/体系/案例"结尾、短英文（<4）过滤
- **漏斗指标**：/api/efficiency 新增 candidate→generated→verified→入库 漏斗 + rejectRate + ollamaPerVerified（每个 verified 概念平均 Ollama 调用）+ effectiveGrowthRate
## 5h. 本轮新增（2026-08-14 免费自主增长效率）
- **动态批大小（2~8）**：stats.batchSize 自适应——批成功率 ≥60% +1（封顶 8），解析失败/全失败 -2（最低 2），单批部分成功 -1；pump 聚合数量跟随 batchSize
- **批内缺失降级重试**：批量解析缺失项 → 单概念 growTarget 降级重试（不浪费已生成部分）
- **enrich 优先**：pump 同优先级时纵向补全先于新概念
- **候选间近似去重**：编辑距离 <0.2 只留高分候选，避免同义候选重复进 Ollama
- 真实样本：yieldVerified=5（自统计上线），权重表 {system:1.5} 生效
## 5i. 本轮新增（2026-08-14 自主知识增长 3.0）
- **吞吐瓶颈修复**：discoverCandidates 空队列补货 2→batchSize（默认 6，可达 8）——每批从 2-3 概念提升到 6-8；batchSize 默认 4→6；批处理只占 1 次 autoOps 配额（生成+批量校验均算任务内），每小时上限内可多批并行产出
- **批量候选实测**：下一批 top-8 = 结构主义/机器智能/视频生成/霍金辐射/全息原理/量子引力/神经递质/自身免疫病（598/617 通过质量过滤）
- **效率指标**：/api/efficiency 新增 perHour（有效概念/小时、verified/小时、有效关系/小时、Ollama/小时）与 ollamaPerVerified
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
