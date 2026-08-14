window.XIGAI = window.XIGAI || {};
window.XIGAI["前端与开发工程"] = [
  {
    "id": "html",
    "name": "HTML",
    "aliases": [
      "HyperText Markup Language",
      "超文本标记语言",
      "H5"
    ],
    "field": "前端与开发工程",
    "tags": [
      "标记语言",
      "网页结构",
      "Web基础"
    ],
    "difficulty": 1,
    "summary": "描述网页内容与结构的超文本标记语言",
    "definition": "HTML（HyperText Markup Language，超文本标记语言）是构建网页结构与内容的基础标记语言，用标签组成元素树（DOM 树），以语义化标签描述标题、段落、表单、多媒体等内容层级。HTML 由 WHATWG 维护，现行标准为 Living Standard；HTML5 引入 video、canvas、语义标签与本地存储等 API，是 CSS 与 JS 的承载基础。",
    "core": [
      "由标签与属性构成，描述网页语义结构",
      "非编程语言，不含逻辑与变量",
      "HTML5 增加多媒体、语义化与存储能力"
    ],
    "applications": [
      "搭建页面骨架：导航、表单、文章排版",
      "与 CSS、JavaScript 配合构成完整网页"
    ],
    "misconceptions": [
      "HTML 是编程语言，实为无逻辑的标记语言"
    ],
    "related": [
      "CSS",
      "JavaScript",
      "DOM",
      "浏览器兼容"
    ],
    "references": [
      "MDN：HTML 教程",
      "WHATWG HTML Living Standard"
    ],
    "sources": [
      "https://developer.mozilla.org/zh-CN/docs/Web/HTML",
      "https://html.spec.whatwg.org/"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "css",
    "name": "CSS",
    "aliases": [
      "Cascading Style Sheets",
      "层叠样式表"
    ],
    "field": "前端与开发工程",
    "tags": [
      "样式表",
      "布局",
      "Web基础"
    ],
    "difficulty": 1,
    "summary": "控制网页视觉表现与布局的样式表语言",
    "definition": "CSS（Cascading Style Sheets，层叠样式表）描述 HTML 文档的呈现，控制颜色、字体、间距、布局与动画。核心机制是“层叠”：多个来源的样式按来源、特异性与顺序合并，级联决定最终生效规则。现代 CSS 提供 Flexbox、Grid、媒体查询与 CSS 变量，常配合 Sass/Less 提升可维护性；浏览器对新特性的支持差异是兼容性工作的主战场。",
    "core": [
      "选择器 + 属性声明描述元素视觉表现",
      "层叠、特异性与顺序决定样式优先级",
      "Flexbox/Grid/媒体查询支撑现代布局"
    ],
    "applications": [
      "响应式页面布局与多主题定制",
      "动画、过渡与交互动效实现"
    ],
    "misconceptions": [
      "CSS 是编程语言，实为声明式样式描述语言"
    ],
    "related": [
      "HTML",
      "响应式设计",
      "浏览器兼容",
      "前端框架"
    ],
    "references": [
      "MDN：CSS 教程",
      "CSS-Tricks"
    ],
    "sources": [
      "https://developer.mozilla.org/zh-CN/docs/Web/CSS",
      "https://css-tricks.com/"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "javascript",
    "name": "JavaScript",
    "aliases": [
      "JS",
      "ECMAScript",
      "脚本语言"
    ],
    "field": "前端与开发工程",
    "tags": [
      "编程语言",
      "ECMAScript",
      "Web基础"
    ],
    "difficulty": 2,
    "summary": "Web 三大核心技术中的动态脚本语言",
    "definition": "JavaScript（简称 JS）是动态、弱类型、基于原型的脚本语言，语法由 ECMAScript 标准规范，既运行在浏览器端，也能借助 Node.js 运行在服务端。JS 采用单线程事件循环模型，支持闭包与异步编程（async/await），能操作 DOM、发起网络请求。前端框架、打包工具与整个 Node 生态都建立在 JS 之上，是前端核心语言。",
    "core": [
      "单线程事件循环 + 异步编程模型",
      "基于原型继承、动态弱类型",
      "由 ECMAScript 标准规范语法"
    ],
    "applications": [
      "页面交互、表单校验、动画控制",
      "Node.js 服务端与工具链开发"
    ],
    "misconceptions": [
      "JavaScript 与 Java 有关，实为名字借势，两者无血缘"
    ],
    "related": [
      "HTML",
      "CSS",
      "npm",
      "前端框架",
      "WebAssembly"
    ],
    "references": [
      "MDN：JavaScript 教程",
      "ECMAScript 语言规范"
    ],
    "sources": [
      "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
      "https://tc39.es/ecma262/"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "frontend-framework",
    "name": "前端框架",
    "aliases": [
      "Frontend Framework",
      "MVVM 框架",
      "React/Vue/Angular"
    ],
    "field": "前端与开发工程",
    "tags": [
      "框架",
      "UI 构建",
      "响应式"
    ],
    "difficulty": 3,
    "summary": "以组件与响应式状态组织 UI 的库或框架",
    "definition": "前端框架是为构建用户界面提供结构化方案的库或框架，主流代表是 React、Vue、Angular 与 Svelte。它们以“组件 + 响应式状态”为核心：开发者声明式描述 UI 与数据的绑定关系，由框架负责渲染更新与 DOM 操作。框架普遍内置虚拟 DOM 或响应式系统、路由、状态管理及构建工具，解决了 jQuery 时代手动操作 DOM、代码难以维护的问题。选型需权衡生态、性能与团队经验。",
    "core": [
      "声明式 UI 与数据驱动视图更新",
      "组件化组织代码、提升复用",
      "内置响应式系统与成熟生态"
    ],
    "applications": [
      "单页应用（SPA）与中后台系统开发",
      "跨端方案（React Native、Taro 等）"
    ],
    "misconceptions": [
      "前端项目必须用框架，小型项目原生 JS 往往更轻"
    ],
    "related": [
      "组件化",
      "虚拟DOM",
      "SSR",
      "CSR"
    ],
    "references": [
      "React 官方文档",
      "Vue 官方文档"
    ],
    "sources": [
      "https://react.dev/",
      "https://vuejs.org/"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "component-based",
    "name": "组件化",
    "aliases": [
      "Component-based Development",
      "组件化开发",
      "组件"
    ],
    "field": "前端与开发工程",
    "tags": [
      "架构",
      "复用",
      "前端工程化"
    ],
    "difficulty": 2,
    "summary": "将界面拆分为高内聚可复用独立单元的范式",
    "definition": "组件化是把页面拆分为高内聚、低耦合、可复用独立单元（组件）的工程思想。每个组件封装自己的模板、样式与逻辑，通过 props 接收外部数据、通过事件向外通信。组件化解决了大型项目复用率低、耦合度高、难协作难测试的问题，是 React、Vue 等现代框架的基本组织单位；实践中还需按基础、业务、页面组件分层，配合组件库提升交付效率。",
    "core": [
      "高内聚低耦合，独立封装模板样式逻辑",
      "props 传参 + 事件通信的单向数据流",
      "按粒度分层组织组件树"
    ],
    "applications": [
      "搭建可复用 UI 组件库",
      "大型项目分模块并行开发"
    ],
    "misconceptions": [
      "组件拆得越多越好，过度拆分反而增加维护成本"
    ],
    "related": [
      "前端框架",
      "前端工程化",
      "虚拟DOM"
    ],
    "references": [
      "Vue 官方文档：组件基础",
      "React：组件与 Props"
    ],
    "sources": [
      "https://vuejs.org/guide/essentials/component-basics.html",
      "https://react.dev/learn/your-first-component"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "virtual-dom",
    "name": "虚拟DOM",
    "aliases": [
      "Virtual DOM",
      "VDOM",
      "vnode"
    ],
    "field": "前端与开发工程",
    "tags": [
      "渲染机制",
      "性能优化",
      "框架原理"
    ],
    "difficulty": 3,
    "summary": "内存中以 JS 对象模拟真实 DOM 的轻量树",
    "definition": "虚拟 DOM（Virtual DOM）是用 JS 对象在内存中模拟真实 DOM 节点树的技术，由 React 发扬光大。状态变化时，框架先构建新的虚拟 DOM 树，通过 diff 算法对比新旧树差异，算出最小变更集合，再批量更新真实 DOM。相比频繁直接操作 DOM，虚拟 DOM 把多次更新合并为一次，减少重排与重绘，实现“数据驱动视图”。Vue、Preact 也采用类似机制。",
    "core": [
      "内存中的 JS 对象树模拟 DOM 结构",
      "diff 算法对比新旧树计算最小更新",
      "数据驱动视图，减少手动 DOM 操作"
    ],
    "applications": [
      "React/Vue 等框架的渲染核心",
      "同构渲染与跨端渲染的基础"
    ],
    "misconceptions": [
      "虚拟 DOM 必然比直接操作 DOM 快，其核心价值在可维护性与批量更新"
    ],
    "related": [
      "前端框架",
      "组件化",
      "SSR",
      "CSR"
    ],
    "references": [
      "React 官方文档：渲染",
      "Vue 渲染机制"
    ],
    "sources": [
      "https://react.dev/learn/rendering",
      "https://vuejs.org/guide/extras/rendering-mechanism.html"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "ssr",
    "name": "SSR",
    "aliases": [
      "Server-Side Rendering",
      "服务端渲染",
      "服务器端渲染"
    ],
    "field": "前端与开发工程",
    "tags": [
      "渲染模式",
      "SEO",
      "性能优化"
    ],
    "difficulty": 3,
    "summary": "服务端生成完整 HTML 再返回浏览器的渲染方式",
    "definition": "SSR（Server-Side Rendering，服务端渲染）指页面 HTML 由服务器动态生成后返回浏览器：服务器执行组件逻辑、获取数据并拼装出完整 HTML，浏览器直接解析渲染，随后通过“水合”挂载交互逻辑。SSR 首屏立即可见、利于 SEO，但服务器承担渲染压力、TTFB 变长。Next.js、Nuxt 支持 SSR、静态生成与客户端渲染混合，按页面特性选择策略。",
    "core": [
      "服务器拼装完整 HTML，首屏直达浏览器",
      "利于 SEO 与首屏加载速度",
      "水合阶段恢复页面交互能力"
    ],
    "applications": [
      "内容型站点与电商详情页的 SEO 优化",
      "Next.js/Nuxt 同构应用"
    ],
    "misconceptions": [
      "SSR 就是传统模板渲染，现代 SSR 是组件在前后端两端运行的同构渲染"
    ],
    "related": [
      "CSR",
      "前端框架",
      "响应式设计"
    ],
    "references": [
      "web.dev：Rendering on the Web",
      "Next.js 渲染文档"
    ],
    "sources": [
      "https://web.developers.google.cn/articles/rendering-on-the-web?hl=en",
      "https://nextjs.org/docs/app/building-your-application/rendering"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "csr",
    "name": "CSR",
    "aliases": [
      "Client-Side Rendering",
      "客户端渲染",
      "浏览器端渲染"
    ],
    "field": "前端与开发工程",
    "tags": [
      "渲染模式",
      "SPA",
      "性能优化"
    ],
    "difficulty": 2,
    "summary": "浏览器端用 JavaScript 动态渲染页面内容",
    "definition": "CSR（Client-Side Rendering，客户端渲染）指页面主体由浏览器中的 JavaScript 渲染生成：服务器只返回含 JS 入口的空 HTML 外壳，浏览器下载执行 bundle 后，由框架挂载组件并渲染出完整界面。CSR 交互流畅、服务器压力小，适合后台管理等重交互应用；缺点是首屏白屏时间长、对 SEO 不友好。SPA 默认即 CSR，常与代码分割、懒加载结合优化首屏。",
    "core": [
      "服务器返回空壳 HTML，JS 在浏览器端渲染",
      "交互流畅、页面切换无刷新",
      "首屏依赖 JS 加载，SEO 较弱"
    ],
    "applications": [
      "SPA 应用与中后台管理系统",
      "配合代码分割与懒加载优化首屏"
    ],
    "misconceptions": [
      "CSR 一定比 SSR 慢，二次进入与重交互场景下 CSR 往往更流畅"
    ],
    "related": [
      "SSR",
      "前端框架",
      "代码分割",
      "懒加载"
    ],
    "references": [
      "web.dev：Rendering on the Web",
      "MDN：SPA"
    ],
    "sources": [
      "https://web.developers.google.cn/articles/rendering-on-the-web?hl=en",
      "https://developer.mozilla.org/zh-CN/docs/Glossary/SPA"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "responsive-design",
    "name": "响应式设计",
    "aliases": [
      "Responsive Design",
      "自适应布局",
      "RWD"
    ],
    "field": "前端与开发工程",
    "tags": [
      "布局",
      "多端适配",
      "CSS"
    ],
    "difficulty": 2,
    "summary": "一套页面自适应多种屏幕尺寸的设计方案",
    "definition": "响应式设计（RWD）让同一套网页在不同屏幕尺寸与设备上都能良好呈现，由 Ethan Marcotte 于 2010 年提出。核心三要素：流式网格布局、弹性媒体（图片视频自适应缩放）、媒体查询（@media 按视口宽度应用不同样式）。配合相对单位、断点与移动优先策略，实现从手机到大屏的无缝适配，避免为多端维护多套页面，是移动互联网时代前端开发的基本要求。",
    "core": [
      "流式网格 + 弹性媒体 + 媒体查询三要素",
      "按断点适配不同视口宽度",
      "移动优先、一套代码多端复用"
    ],
    "applications": [
      "官网、电商、内容站的多端适配",
      "Grid/Flexbox 构建自适应布局"
    ],
    "misconceptions": [
      "响应式等于单独开发移动端页面，实为同一套代码自适应"
    ],
    "related": [
      "CSS",
      "浏览器兼容",
      "前端框架"
    ],
    "references": [
      "MDN：响应式设计",
      "web.dev：响应式网页设计基础"
    ],
    "sources": [
      "https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
      "https://web.dev/articles/responsive-web-design-basics"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "browser-compatibility",
    "name": "浏览器兼容",
    "aliases": [
      "Browser Compatibility",
      "兼容性",
      "跨浏览器"
    ],
    "field": "前端与开发工程",
    "tags": [
      "兼容性",
      "工程化",
      "Web 标准"
    ],
    "difficulty": 3,
    "summary": "确保网站在不同浏览器及版本下表现一致",
    "definition": "浏览器兼容指网页在不同浏览器及其版本中正确显示、功能正常的能力。各浏览器对新特性与 API 的实现程度、时机不同，同一段代码可能出现样式错乱或功能缺失。常见手段：caniuse.com 查询支持、Babel 转译新语法、Autoprefixer 补前缀、polyfill 垫片与特性检测。browserslist 与兼容测试是工程化流程的一部分。",
    "core": [
      "不同浏览器对 Web 标准实现存在差异",
      "caniuse 查询 + Babel/Autoprefixer/polyfill 处理",
      "特性检测优于浏览器版本判断"
    ],
    "applications": [
      "Babel 转译 ES6+ 语法兼容旧浏览器",
      "按 browserslist 自动补前缀与垫片"
    ],
    "misconceptions": [
      "兼容等于支持所有旧浏览器，应基于用户数据设定支持范围"
    ],
    "related": [
      "CSS",
      "JavaScript",
      "前端工程化"
    ],
    "references": [
      "caniuse.com",
      "MDN：浏览器兼容性"
    ],
    "sources": [
      "https://caniuse.com/",
      "https://developer.mozilla.org/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "bundler",
    "name": "打包工具",
    "aliases": [
      "Bundler",
      "构建工具",
      "webpack/Vite/Rollup"
    ],
    "field": "前端与开发工程",
    "tags": [
      "构建",
      "工程化",
      "性能优化"
    ],
    "difficulty": 3,
    "summary": "把分散模块合并压缩为浏览器可用产物的工具",
    "definition": "打包工具负责前端工程化的“构建”环节：把 ES Module、CommonJS 等模块化源码以及样式、图片、字体等资源，经依赖图分析、转换、合并、压缩，产出浏览器可直接运行的静态文件（bundle），并处理 Tree Shaking、代码分割、资源哈希与开发期热更新。工具历经 webpack、Rollup、Parcel 到 Vite/esbuild 的演进，后者构建速度大幅提升。",
    "core": [
      "基于依赖图将模块与资源合并为 bundle",
      "支持 Tree Shaking、代码分割、压缩",
      "webpack 生态成熟，Vite 以速度见长"
    ],
    "applications": [
      "工程化项目的生产构建与部署产物生成",
      "开发环境 dev server 与热更新（HMR）"
    ],
    "misconceptions": [
      "打包工具只是压缩代码，实为模块解析、转译与优化的枢纽"
    ],
    "related": [
      "前端工程化",
      "代码分割",
      "npm",
      "懒加载"
    ],
    "references": [
      "webpack 官方文档",
      "Vite 官方文档"
    ],
    "sources": [
      "https://webpack.js.org/",
      "https://vitejs.dev/"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "npm",
    "name": "NPM",
    "aliases": [
      "Node Package Manager",
      "Node 包管理器",
      "包管理工具"
    ],
    "field": "前端与开发工程",
    "tags": [
      "包管理",
      "Node.js",
      "工程化"
    ],
    "difficulty": 2,
    "summary": "Node.js 生态的包管理与依赖分发工具",
    "definition": "npm（Node Package Manager，Node 包管理器）是随 Node.js 分发的官方包管理工具，也是全球最大的开源软件注册表（registry）。开发者通过 package.json 声明依赖，执行 npm install 安装、npm publish 发布包。版本号遵循 SemVer 语义化版本规范；npm scripts 也是工程化中编排构建、测试任务的常用入口。",
    "core": [
      "package.json 声明依赖 + npm install 安装",
      "registry 托管数百万开源包",
      "版本遵循 SemVer 语义化版本"
    ],
    "applications": [
      "安装与发布前端库、CLI 工具、类型定义",
      "npm scripts 编排构建测试任务"
    ],
    "misconceptions": [
      "npm 只装 JavaScript 库，一切可分发产物都能托管"
    ],
    "related": [
      "JavaScript",
      "前端工程化",
      "打包工具"
    ],
    "references": [
      "npm 官方文档",
      "Node.js 官方文档"
    ],
    "sources": [
      "https://docs.npmjs.com/",
      "https://nodejs.org/zh-cn"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "frontend-engineering",
    "name": "前端工程化",
    "aliases": [
      "Frontend Engineering",
      "前端基建",
      "工程化"
    ],
    "field": "前端与开发工程",
    "tags": [
      "工程化",
      "团队协作",
      "自动化"
    ],
    "difficulty": 3,
    "summary": "用工程方法治理前端开发全流程的实践体系",
    "definition": "前端工程化指借鉴软件工程方法，对前端开发进行规范化、模块化、组件化、自动化、可测试化的全面治理：涵盖脚手架、依赖管理（npm/pnpm）、构建打包（webpack/Vite）、代码规范（ESLint/Prettier）、测试、CI/CD、监控告警（Sentry）等环节。其目标是解决多人协作下的代码质量、交付效率与可维护性问题，把“写页面”升级为可持续迭代的工业化生产。",
    "core": [
      "覆盖规范、构建、测试、部署全链路",
      "自动化工具链替代手工重复操作",
      "提升协作效率与代码可维护性"
    ],
    "applications": [
      "搭建 monorepo 多包项目与 CI 流水线",
      "统一 ESLint/Prettier 与 Git 提交规范"
    ],
    "misconceptions": [
      "工程化等于用构建工具，规范与自动化同样关键"
    ],
    "related": [
      "打包工具",
      "npm",
      "组件化",
      "浏览器兼容"
    ],
    "references": [
      "阿里云开发者社区：前端工程化的理解",
      "webpack 官方文档"
    ],
    "sources": [
      "https://developer.aliyun.com/article/897996",
      "https://webpack.js.org/concepts/"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "code-splitting",
    "name": "代码分割",
    "aliases": [
      "Code Splitting",
      "分包",
      "按需加载"
    ],
    "field": "前端与开发工程",
    "tags": [
      "性能优化",
      "构建",
      "打包"
    ],
    "difficulty": 3,
    "summary": "把 bundle 拆成多块按需加载以加速首屏",
    "definition": "代码分割是性能优化技术：把打包后的单一 JS bundle 按路由、组件或第三方库拆分成多个较小的 chunk，浏览器只在需要时加载对应块，而非一次性下载全部代码。webpack/Rollup/Vite 通过动态 import() 或 splitChunks 配置自动实现，配合懒加载让首屏只加载必要代码，减少白屏时间与流量消耗，常配合 prefetch 与 HTTP/2 使用。",
    "core": [
      "按路由/组件/库拆分为多个 chunk",
      "动态 import() 触发按需加载",
      "减少首屏 JS 体积，加速加载"
    ],
    "applications": [
      "SPA 路由级拆包，首屏只加载当前页代码",
      "第三方大库单独分包并利用浏览器缓存"
    ],
    "misconceptions": [
      "代码分割等于懒加载，懒加载是加载时机策略，代码分割是产物拆分手段，二者常配合"
    ],
    "related": [
      "懒加载",
      "打包工具",
      "CSR",
      "前端工程化"
    ],
    "references": [
      "webpack：Code Splitting 指南",
      "web.dev：用代码分割减小 JS 体积"
    ],
    "sources": [
      "https://webpack.js.org/guides/code-splitting/",
      "https://web.dev/articles/reduce-javascript-payloads-with-code-splitting"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "lazy-loading",
    "name": "懒加载",
    "aliases": [
      "Lazy Loading",
      "延迟加载",
      "按需加载"
    ],
    "field": "前端与开发工程",
    "tags": [
      "性能优化",
      "加载策略",
      "首屏"
    ],
    "difficulty": 2,
    "summary": "资源进入视口或需要时才加载的优化策略",
    "definition": "懒加载是延迟加载策略：把图片、视频、组件或路由等资源的加载推迟到真正需要时（如滚动进入视口、点击触发）才发起请求。实现方式包括：图片使用原生 loading=\"lazy\" 属性或 IntersectionObserver 监听视口、路由组件配合动态 import() 按需分包、第三方库延迟初始化。价值在于减少首屏请求数与传输字节，降低加载时间与流量；副作用是滚动处可能短暂空白。",
    "core": [
      "资源等到进入视口或交互时才加载",
      "loading=\"lazy\" 与 IntersectionObserver 是常见实现",
      "减少首屏体积、节省带宽"
    ],
    "applications": [
      "长页面图片瀑布流的按需加载",
      "路由级组件按需分包（配合代码分割）"
    ],
    "misconceptions": [
      "懒加载只用于图片，组件、路由、脚本、字体均可懒加载"
    ],
    "related": [
      "代码分割",
      "CSR",
      "前端工程化"
    ],
    "references": [
      "MDN：Lazy loading",
      "web.dev：图片与视频懒加载"
    ],
    "sources": [
      "https://developer.mozilla.org/zh-CN/docs/Web/Performance/Lazy_loading",
      "https://web.dev/articles/lazy-loading-images"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "pwa",
    "name": "PWA",
    "aliases": [
      "Progressive Web App",
      "渐进式 Web 应用"
    ],
    "field": "前端与开发工程",
    "tags": [
      "Web 应用",
      "离线",
      "移动端"
    ],
    "difficulty": 3,
    "summary": "具备原生应用体验的现代 Web 应用形态",
    "definition": "PWA（Progressive Web App，渐进式 Web 应用）是利用现代 Web 能力、向原生应用体验看齐的应用形态。三大核心：Service Worker 实现离线缓存、Manifest 支持添加到主屏幕并全屏运行、以 HTTPS 为部署前提。PWA 具有“渐进增强”特性：能力越强的环境体验越接近原生。相比原生 App 无需商店审核、跨平台成本低，但受限于浏览器与 iOS 支持程度。",
    "core": [
      "Service Worker 负责离线与缓存策略",
      "Manifest 支持添加到主屏幕",
      "基于 HTTPS 的渐进增强应用"
    ],
    "applications": [
      "内容资讯类应用的离线阅读",
      "工具类应用安装到桌面、消息推送"
    ],
    "misconceptions": [
      "PWA 能完全替代原生 App，系统能力（如部分硬件 API）仍受限"
    ],
    "related": [
      "WebAssembly",
      "前端工程化",
      "CSR"
    ],
    "references": [
      "MDN：渐进式 Web 应用",
      "web.dev：PWA"
    ],
    "sources": [
      "https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps",
      "https://web.dev/explore/progressive-web-apps"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "webassembly",
    "name": "WEBASSEMBLY",
    "aliases": [
      "Wasm",
      "wasm"
    ],
    "field": "前端与开发工程",
    "tags": [
      "性能",
      "二进制格式",
      "W3C 标准"
    ],
    "difficulty": 4,
    "summary": "可在浏览器运行的高性能二进制字节码格式",
    "definition": "WebAssembly（简称 Wasm）是面向浏览器的低层二进制指令格式，2019 年成为 W3C 正式标准。它提供接近原生的执行性能，弥补 JavaScript 在计算密集型场景的短板：C/C++、Rust、Go 等语言可编译为 .wasm 模块，在浏览器沙箱中以接近机器码的速度运行。Wasm 与 JS 通过导入导出函数互操作，常用于音视频编解码、图像处理、3D 渲染、加密算法与游戏引擎。",
    "core": [
      "W3C 标准化的低层二进制字节码",
      "C/C++/Rust 等编译而来，性能接近原生",
      "与 JS 互操作，在沙箱中运行"
    ],
    "applications": [
      "浏览器端视频转码、图像处理、3D 渲染",
      "游戏引擎（Unity/Unreal Web 导出）"
    ],
    "misconceptions": [
      "Wasm 会取代 JavaScript，二者互补，DOM 操作与业务逻辑仍由 JS 主导"
    ],
    "related": [
      "JavaScript",
      "PWA",
      "前端框架"
    ],
    "references": [
      "MDN：WebAssembly",
      "WebAssembly 官网"
    ],
    "sources": [
      "https://developer.mozilla.org/zh-CN/docs/WebAssembly",
      "https://webassembly.org/"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "cross-origin",
    "name": "跨域",
    "aliases": [
      "Cross-Origin",
      "跨域请求",
      "CORS",
      "同源策略"
    ],
    "field": "前端与开发工程",
    "tags": [
      "网络安全",
      "同源策略",
      "HTTP"
    ],
    "difficulty": 3,
    "summary": "同源策略下跨源资源请求受浏览器限制的机制",
    "definition": "跨域指浏览器基于“同源策略”限制页面脚本跨协议、跨域名、跨端口发起资源请求的行为。同源要求协议、域名、端口三者完全一致；不同源请求默认被拦截。解决方案包括：CORS（Cross-Origin Resource Sharing，跨源资源共享，服务端返回 CORS 响应头授权）、JSONP（仅支持 GET）、反向代理与 WebSocket。CORS 拦截发生在浏览器端，服务端直连不受限。",
    "core": [
      "同源 = 协议 + 域名 + 端口全一致",
      "CORS 响应头是标准解决方案",
      "代理转发与 JSONP 是常见绕过手段"
    ],
    "applications": [
      "前后端分离项目开发期代理配置",
      "对接第三方开放平台 API 的 CORS 配置"
    ],
    "misconceptions": [
      "跨域是服务器限制，实为浏览器安全策略，服务端请求不受影响"
    ],
    "related": [
      "Cookie",
      "Token",
      "WebSocket",
      "前端工程化"
    ],
    "references": [
      "MDN：HTTP 跨源资源共享 CORS",
      "MDN：同源策略"
    ],
    "sources": [
      "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS",
      "https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "cookie",
    "name": "COOKIE",
    "aliases": [
      "HTTP Cookie",
      "浏览器 Cookie",
      "小饼干"
    ],
    "field": "前端与开发工程",
    "tags": [
      "HTTP",
      "会话",
      "Web 安全"
    ],
    "difficulty": 2,
    "summary": "浏览器保存的小段文本，用于维持会话与状态",
    "definition": "Cookie 是服务器通过 Set-Cookie 响应头下发给浏览器、按域名保存的小段文本，之后每次请求同域资源都会自动携带。它用于在无状态的 HTTP 协议上维持会话：登录凭证、偏好、购物车等。Cookie 具有过期时间、作用域与 Secure（仅 HTTPS）、HttpOnly（禁止 JS 读取）、SameSite（防 CSRF）等安全属性。单条约 4KB，现代应用倾向用 Token 做认证。",
    "core": [
      "由 Set-Cookie 下发、请求时自动携带",
      "HttpOnly/Secure/SameSite 等安全属性",
      "用于会话维持、偏好与追踪"
    ],
    "applications": [
      "登录态维持（Session ID 存于 Cookie）",
      "个性化偏好与广告追踪"
    ],
    "misconceptions": [
      "Cookie 可以跨域随意读取，受同源策略与 SameSite 限制"
    ],
    "related": [
      "Session",
      "Token",
      "跨域",
      "CSR"
    ],
    "references": [
      "MDN：HTTP Cookie",
      "MDN：Document.cookie"
    ],
    "sources": [
      "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies",
      "https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "session",
    "name": "SESSION",
    "aliases": [
      "会话",
      "会话机制",
      "Session ID"
    ],
    "field": "前端与开发工程",
    "tags": [
      "认证",
      "会话状态",
      "Web 安全"
    ],
    "difficulty": 3,
    "summary": "服务端保存的用户会话状态，以 Session ID 标识",
    "definition": "Session（会话）是服务端用于标识并保存特定用户在一段时间内连续交互状态（登录态、购物车等）的机制。用户登录后，服务端创建一条会话记录，生成唯一会话标识 Session ID 并通过 Set-Cookie 下发，浏览器后续请求携带该 ID，服务端据此找到对应会话数据。Session 依赖服务端存储，存在多实例共享问题（需 Redis 集中存储），这推动了无状态 Token 方案的流行。",
    "core": [
      "会话数据存服务端，客户端只持有 Session ID",
      "配合 Cookie 传递会话标识",
      "超时过期与集群共享是常见问题"
    ],
    "applications": [
      "传统服务端渲染应用的登录态管理",
      "Redis 集中存储实现多实例会话共享"
    ],
    "misconceptions": [
      "Session 就是 Cookie，Cookie 只是传递 Session ID 的载体，数据在服务端"
    ],
    "related": [
      "Cookie",
      "Token",
      "SSR"
    ],
    "references": [
      "MDN：Session",
      "MDN：HTTP Cookie"
    ],
    "sources": [
      "https://developer.mozilla.org/zh-CN/docs/Glossary/Session",
      "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "token",
    "name": "TOKEN",
    "aliases": [
      "令牌",
      "访问令牌",
      "JWT"
    ],
    "field": "前端与开发工程",
    "tags": [
      "认证",
      "无状态",
      "Web 安全"
    ],
    "difficulty": 3,
    "summary": "无状态认证凭据，客户端持有、服务端验证",
    "definition": "Token 是一种无状态认证凭据：客户端登录后获得服务端签发的令牌，之后每次请求在 Authorization 请求头中携带，服务端验证令牌即可识别用户，无需查询会话存储。最流行的实现是 JWT（JSON Web Token）：头部、载荷、签名三段构成，签名防篡改。相比 Session，Token 天然支持分布式与跨域场景，但难以主动吊销、可能被 XSS 窃取，需配合 HTTPS 与刷新机制。",
    "core": [
      "客户端持有、随 Authorization 头携带",
      "JWT 三段式结构 + 签名防篡改",
      "无状态、易水平扩展与跨域使用"
    ],
    "applications": [
      "前后端分离与 SPA 的登录鉴权",
      "OAuth2/OpenID Connect 授权码换取访问令牌"
    ],
    "misconceptions": [
      "Token 比 Session 更安全，安全性取决于有效期、存储方式与 HTTPS 等实现细节"
    ],
    "related": [
      "Session",
      "Cookie",
      "跨域",
      "RESTful"
    ],
    "references": [
      "jwt.io：JWT 介绍",
      "MDN：Authorization 请求头"
    ],
    "sources": [
      "https://jwt.io/introduction",
      "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Authorization"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "restful",
    "name": "RESTful",
    "aliases": [
      "REST",
      "Representational State Transfer",
      "表现层状态转移",
      "RESTful API"
    ],
    "field": "前端与开发工程",
    "tags": [
      "API 设计",
      "HTTP",
      "架构风格"
    ],
    "difficulty": 3,
    "summary": "基于资源与 HTTP 方法的 API 设计风格",
    "definition": "RESTful 指遵循 REST（Representational State Transfer，表现层状态转移）架构风格的 API 设计。核心思想：数据抽象为资源，用 URL 标识、HTTP 方法表达语义（GET/POST/PUT/DELETE）。RESTful 可读性高、易缓存，是 Web API 的主流风格；但复杂查询易“过度获取/不足获取”，催生了 GraphQL 等替代方案。",
    "core": [
      "资源通过 URL 唯一标识",
      "GET/POST/PUT/DELETE 映射操作语义",
      "无状态 + 状态码 + 可缓存"
    ],
    "applications": [
      "主流后端 Web API 设计规范",
      "前后端分离项目的数据接口"
    ],
    "misconceptions": [
      "RESTful 必须全用名词复数 URL，风格而非强制标准，合理即可"
    ],
    "related": [
      "GraphQL",
      "Token",
      "WebSocket",
      "跨域"
    ],
    "references": [
      "MDN：REST",
      "RESTful API 设计指南"
    ],
    "sources": [
      "https://developer.mozilla.org/zh-CN/docs/Glossary/REST",
      "https://restfulapi.net/"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "graphql",
    "name": "GRAPHQL",
    "aliases": [
      "GQL",
      "Graph Query Language",
      "查询语言"
    ],
    "field": "前端与开发工程",
    "tags": [
      "API",
      "查询语言",
      "数据获取"
    ],
    "difficulty": 4,
    "summary": "客户端按需声明数据结构的 API 查询语言",
    "definition": "GraphQL（Graph Query Language）是 Facebook 2015 年开源、GraphQL 基金会维护的 API 查询语言与运行时。与 REST 固定端点不同，GraphQL 提供单一端点，客户端用类型化语句精确声明字段，按声明返回，解决过度/不足获取。服务端用 Schema 定义数据契约，解析器实现字段级取数；常与 Apollo 配合，但缓存与学习成本高。",
    "core": [
      "单一端点 + 客户端声明式查询",
      "Schema 类型系统定义数据契约",
      "解决过度获取，支持订阅推送"
    ],
    "applications": [
      "聚合多数据源的中台 API（BFF）",
      "多客户端场景的按需取数"
    ],
    "misconceptions": [
      "GraphQL 一定比 REST 好，简单场景 REST 更直接，GraphQL 复杂度更高"
    ],
    "related": [
      "RESTful",
      "WebSocket",
      "前端框架"
    ],
    "references": [
      "GraphQL 官网",
      "Apollo 文档"
    ],
    "sources": [
      "https://graphql.org/",
      "https://www.apollographql.com/docs/"
    ],
    "searchedAt": "2026-08-14"
  },
  {
    "id": "websocket",
    "name": "WEBSOCKET",
    "aliases": [
      "WS",
      "长连接",
      "全双工通信"
    ],
    "field": "前端与开发工程",
    "tags": [
      "通信协议",
      "实时",
      "网络"
    ],
    "difficulty": 3,
    "summary": "浏览器与服务端间的全双工实时通信协议",
    "definition": "WebSocket 是基于 TCP 的全双工通信协议，2011 年成为 IETF 标准。它通过 HTTP 升级握手建立持久连接，之后浏览器与服务端可随时双向推送数据，无需一问一答，延迟极低、开销小。前端通过 WebSocket API 或 Socket.IO 等库使用，广泛用于在线聊天、实时协作、行情推送等场景。相比轮询与 SSE（仅服务端单向推送），WebSocket 是真正的双向通道。",
    "core": [
      "基于 TCP 的全双工持久连接",
      "HTTP 升级握手建立通道",
      "低延迟双向实时通信"
    ],
    "applications": [
      "在线聊天、客服系统与实时协作",
      "股票行情、直播弹幕等推送场景"
    ],
    "misconceptions": [
      "WebSocket 能替代 HTTP，二者互补，HTTP 仍是主要数据协议"
    ],
    "related": [
      "跨域",
      "RESTful",
      "GraphQL",
      "PWA"
    ],
    "references": [
      "MDN：WebSocket API",
      "RFC 6455：The WebSocket Protocol"
    ],
    "sources": [
      "https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket",
      "https://datatracker.ietf.org/doc/html/rfc6455"
    ],
    "searchedAt": "2026-08-14"
  }
];
