window.XIGAI = window.XIGAI || {};
window.XIGAI["计算机术语"] = [
  {
    "id": "cli",
    "name": "CLI",
    "aliases": [
      "命令行界面",
      "Command Line Interface",
      "终端操作"
    ],
    "field": "计算机术语",
    "tags": [
      "开发工具",
      "交互方式"
    ],
    "difficulty": 2,
    "summary": "通过文本命令与计算机交互的界面",
    "definition": "CLI 是 Command Line Interface（命令行界面）的缩写，指用户通过键入文本命令与操作系统或程序交互的界面，与图形界面（GUI）相对。CLI 程序通常以「命令+参数+选项」形式调用，支持管道（|）串联多个命令。在服务器管理、自动化脚本、CI/CD 流水线中，CLI 轻量、可脚本化、可远程执行，是不可或缺的交互方式，常见工具如 Git、Docker、npm、kubectl。",
    "core": [
      "通过键入命令而非点击图形元素操作",
      "易于脚本化、自动化与远程执行",
      "常见工具：Git、Docker、kubectl、npm"
    ],
    "applications": [
      "在无图形界面的服务器上管理服务与进程",
      "在 CI/CD 流水线中串联构建、测试、部署命令"
    ],
    "misconceptions": [
      "CLI 并非过时技术，在自动化与运维场景中效率远高于 GUI"
    ],
    "references": [
      "什么是命令行界面 - Microsoft PowerShell 文档"
    ],
    "sources": [
      "https://learn.microsoft.com/zh-cn/powershell/utility-modules/aishell/concepts/what-is-a-command-shell?view=ps-modules"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "repl",
        "note": ""
      },
      {
        "type": "related",
        "target": "ide",
        "note": ""
      },
      {
        "type": "related",
        "target": "Shell",
        "note": ""
      }
    ]
  },
  {
    "id": "repl",
    "name": "REPL",
    "aliases": [
      "Read-Eval-Print Loop",
      "交互式解释器",
      "交互式编程环境"
    ],
    "field": "计算机术语",
    "tags": [
      "开发工具",
      "脚本语言"
    ],
    "difficulty": 2,
    "summary": "读取-求值-打印循环的交互式编程环境",
    "definition": "REPL 是 Read-Eval-Print Loop（读取-求值-打印循环）的缩写，是交互式编程环境：读取一行表达式，立即求值并打印结果，再循环等待下一行。适合快速验证代码、调试算法、探索 API，无需创建完整文件。Python 交互式解释器、node 命令、浏览器控制台都是典型 REPL，Jupyter Notebook 将其扩展为可持久化代码单元。",
    "core": [
      "读取输入→求值→打印结果→循环",
      "适合快速实验与调试，无需完整工程",
      "常见于 Python、Node.js、浏览器控制台"
    ],
    "applications": [
      "用 node 命令临时验证一段 JS 逻辑",
      "在 Python 交互环境中调试算法"
    ],
    "misconceptions": [
      "REPL 适合快速验证，复杂逻辑仍应写成文件以复用与测试"
    ],
    "references": [
      "什么是命令行界面 - Microsoft PowerShell 文档"
    ],
    "sources": [
      "https://learn.microsoft.com/zh-cn/powershell/utility-modules/aishell/concepts/what-is-a-command-shell?view=ps-modules"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "cli",
        "note": ""
      },
      {
        "type": "related",
        "target": "ide",
        "note": ""
      },
      {
        "type": "related",
        "target": "解释器",
        "note": ""
      }
    ]
  },
  {
    "id": "ide",
    "name": "IDE",
    "aliases": [
      "集成开发环境",
      "Integrated Development Environment"
    ],
    "field": "计算机术语",
    "tags": [
      "开发工具",
      "编辑器"
    ],
    "difficulty": 2,
    "summary": "集编辑、调试、构建于一体的开发工具",
    "definition": "IDE 是 Integrated Development Environment（集成开发环境）的缩写，把编辑器、编译器/解释器、调试器、构建工具、版本控制、代码补全与静态检查集成在同一界面。代表有 IntelliJ IDEA、Eclipse、Visual Studio；VS Code 通过插件实现接近 IDE 的能力。IDE 以断点调试、自动重构、智能补全显著提升开发效率，特别适合大型工程。",
    "core": [
      "集成编辑、编译、调试、构建等能力",
      "通过断点调试、自动补全提升效率",
      "代表：IntelliJ IDEA、VS Code、Eclipse"
    ],
    "applications": [
      "在 IDE 中设置断点逐行调试 Java 服务",
      "利用重命名、提取方法等安全重构功能维护大型代码库"
    ],
    "misconceptions": [
      "IDE 与编辑器的界限已模糊，VS Code 通过插件常被视为准 IDE"
    ],
    "references": [
      "计算机专业术语对照 - 腾讯云开发者社区"
    ],
    "sources": [
      "https://cloud.tencent.cn/developer/article/2098655"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "cli",
        "note": ""
      },
      {
        "type": "related",
        "target": "repl",
        "note": ""
      },
      {
        "type": "related",
        "target": "调试器",
        "note": ""
      },
      {
        "type": "related",
        "target": "sdk",
        "note": ""
      }
    ]
  },
  {
    "id": "api",
    "name": "API",
    "aliases": [
      "Application Programming Interface",
      "应用程序编程接口",
      "接口"
    ],
    "field": "计算机术语",
    "tags": [
      "网络",
      "软件架构"
    ],
    "difficulty": 2,
    "summary": "程序之间约定的通信接口",
    "definition": "API 是 Application Programming Interface（应用程序编程接口）的缩写，是系统对外暴露的明确调用约定，让其他程序按约定请求功能或数据，无需了解内部实现。Web 领域最常见的是 RESTful API（HTTP + JSON），另有 RPC、GraphQL、WebSocket 等形态。API 是现代软件解耦的基石：前后端、微服务互调、第三方集成均依赖稳定契约。",
    "core": [
      "定义调用约定，屏蔽内部实现细节",
      "REST、RPC、GraphQL 是常见形态",
      "是前后端与微服务间通信的契约"
    ],
    "applications": [
      "前端通过 REST API 获取后端数据",
      "开放平台提供 API 供第三方应用接入"
    ],
    "misconceptions": [
      "API 不只是 HTTP 接口，还包括库函数、系统调用等一切调用约定"
    ],
    "references": [
      "计算机专业术语对照 - 腾讯云开发者社区"
    ],
    "sources": [
      "https://cloud.tencent.cn/developer/article/2098655"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "sdk",
        "note": ""
      },
      {
        "type": "related",
        "target": "json",
        "note": ""
      },
      {
        "type": "related",
        "target": "microservices",
        "note": ""
      },
      {
        "type": "related",
        "target": "mock",
        "note": ""
      }
    ]
  },
  {
    "id": "sdk",
    "name": "SDK",
    "aliases": [
      "Software Development Kit",
      "软件开发工具包"
    ],
    "field": "计算机术语",
    "tags": [
      "开发工具",
      "软件架构"
    ],
    "difficulty": 2,
    "summary": "封装了 API 的软件开发工具包",
    "definition": "SDK 是 Software Development Kit（软件开发工具包）的缩写，是厂商提供的一整套工具、库、文档与示例，用于在其平台或服务上快速开发应用。SDK 通常封装底层 API，提供语言友好封装、错误处理、重试、鉴权等能力，开发者无需手动拼 HTTP 请求。典型如微信支付 SDK、阿里云 SDK、Android SDK。区别：API 是「接口约定」，SDK 是「开箱即用的工具箱」。",
    "core": [
      "包含库、文档、示例与调试工具",
      "封装 API 细节，提供语言级友好接口",
      "典型如微信支付 SDK、云厂商 SDK"
    ],
    "applications": [
      "接入微信支付：集成官方 SDK 即可完成下单与回调处理",
      "用云厂商 SDK 程序化创建与销毁云资源"
    ],
    "misconceptions": [
      "SDK 和 API 不是一回事：SDK 是围绕 API 的完整工具包"
    ],
    "references": [
      "Claude Code 源码剖析：REPL 与 SDK 模式"
    ],
    "sources": [
      "https://blog.csdn.net/tianbaolc/article/details/159795714"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "api",
        "note": ""
      },
      {
        "type": "related",
        "target": "ide",
        "note": ""
      },
      {
        "type": "related",
        "target": "microservices",
        "note": ""
      }
    ]
  },
  {
    "id": "json",
    "name": "JSON",
    "aliases": [
      "JavaScript Object Notation",
      "JavaScript 对象表示法"
    ],
    "field": "计算机术语",
    "tags": [
      "数据格式",
      "序列化"
    ],
    "difficulty": 1,
    "summary": "基于 JavaScript 语法的轻量数据交换格式",
    "definition": "JSON 是 JavaScript Object Notation（JavaScript 对象表示法）的缩写，是基于文本的轻量级数据交换格式，用键值对、数组、嵌套对象描述结构化数据。它源于 JavaScript 对象字面量语法，但已成语言无关标准，几乎所有语言都内置解析与生成支持。JSON 是 Web API、日志传输、配置文件的事实标准：接口请求响应体、package.json 都采用它。",
    "core": [
      "以键值对与数组表示结构化数据",
      "语言无关，主流语言均有内置支持",
      "是 Web API 与配置文件的事实标准"
    ],
    "applications": [
      "前后端接口以 JSON 作为请求/响应体",
      "package.json 管理项目依赖与脚本"
    ],
    "misconceptions": [
      "JSON 虽源自 JavaScript，但与 JavaScript 对象并不完全等价（如不支持 undefined、函数）"
    ],
    "references": [
      "JSON - MDN Web Docs"
    ],
    "sources": [
      "https://developer.mozilla.org/zh-CN/docs/Glossary/JSON"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "yaml",
        "note": ""
      },
      {
        "type": "related",
        "target": "api",
        "note": ""
      },
      {
        "type": "related",
        "target": "序列化",
        "note": ""
      }
    ]
  },
  {
    "id": "yaml",
    "name": "YAML",
    "aliases": [
      "YAML Ain't Markup Language",
      "YAML 不是标记语言"
    ],
    "field": "计算机术语",
    "tags": [
      "数据格式",
      "配置文件"
    ],
    "difficulty": 2,
    "summary": "以缩进表达层级的人类可读配置格式",
    "definition": "YAML 是 YAML Ain't Markup Language 的递归缩写，是强调人类可读性的数据序列化格式，通过缩进表达层级，支持列表、字典、标量与锚点引用。相比 JSON，YAML 更简洁、支持注释，适合人工编写；但缩进敏感、类型推断隐含。它广泛用于配置：Docker Compose、Kubernetes 清单、GitHub Actions、CI/CD 流水线都以 YAML 书写。",
    "core": [
      "用缩进表达嵌套层级，支持注释",
      "适合人工编写与审阅的配置场景",
      "广泛用于 K8s、Docker Compose、CI 流水线"
    ],
    "applications": [
      "用 deployment.yaml 声明 Kubernetes 工作负载",
      "在 GitHub Actions 工作流文件中定义流水线步骤"
    ],
    "misconceptions": [
      "YAML 对缩进与特殊字符敏感，字符串含冒号等字符时需注意引号"
    ],
    "references": [
      "构建高效稳定的云基础设施：DevOps与容器化技术"
    ],
    "sources": [
      "https://developer.aliyun.com/article/1493940"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "json",
        "note": ""
      },
      {
        "type": "related",
        "target": "kubernetes",
        "note": ""
      },
      {
        "type": "related",
        "target": "cicd",
        "note": ""
      }
    ]
  },
  {
    "id": "middleware",
    "name": "中间件",
    "aliases": [
      "Middleware",
      "消息中间件"
    ],
    "field": "计算机术语",
    "tags": [
      "软件架构",
      "分布式系统"
    ],
    "difficulty": 3,
    "summary": "位于应用与基础设施之间的通用服务层",
    "definition": "中间件（Middleware）指位于操作系统/网络与业务应用之间、提供通用能力的软件层，屏蔽底层异构性。广义上包括消息队列（RabbitMQ、Kafka）、缓存（Redis）、RPC 框架（Dubbo、gRPC）、网关等；在 Web 框架中（Express、Koa、Spring），中间件特指请求处理链上的可插拔组件，如日志、鉴权、限流中间件按顺序处理请求并可决定是否继续传递。",
    "core": [
      "介于基础设施与应用之间，提供通用能力",
      "包括消息队列、缓存、RPC 框架等",
      "Web 框架中是可插拔的请求处理链组件"
    ],
    "applications": [
      "在 Express 中注册鉴权中间件拦截未登录请求",
      "用 Kafka 作为系统间异步通信的中间件"
    ],
    "misconceptions": [
      "中间件不只是消息队列，缓存、网关、RPC 框架等广义上都是中间件"
    ],
    "references": [
      "后端开发黑话大全 - 腾讯云开发者社区"
    ],
    "sources": [
      "https://cloud.tencent.cn/developer/article/2444048"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "microservices",
        "note": ""
      },
      {
        "type": "related",
        "target": "message-queue",
        "note": ""
      },
      {
        "type": "related",
        "target": "distributed-transaction",
        "note": ""
      }
    ]
  },
  {
    "id": "microservices",
    "name": "微服务",
    "aliases": [
      "Microservices",
      "微服务架构"
    ],
    "field": "计算机术语",
    "tags": [
      "软件架构",
      "分布式系统"
    ],
    "difficulty": 4,
    "summary": "按业务边界拆分的独立部署服务架构",
    "definition": "微服务（Microservices）是将单一应用拆分为一组小服务的架构风格：每个服务围绕特定业务能力独立开发、独立部署、独立扩容，服务间通过 HTTP/REST、gRPC 或消息队列等轻量机制通信。相比单体，微服务带来团队自治、技术栈灵活与故障隔离，也引入服务发现、链路追踪、分布式事务等复杂度。是否采用需权衡业务规模，多数团队从「模块化单体」起步更稳妥。",
    "core": [
      "按业务能力拆分，独立开发部署与扩容",
      "服务间通过轻量协议通信",
      "带来分布式复杂度：治理、追踪、事务"
    ],
    "applications": [
      "电商系统拆分为订单、库存、支付等服务独立发布",
      "按团队边界拆分服务，各自选择合适技术栈"
    ],
    "misconceptions": [
      "微服务不是银弹，规模小时单体架构反而更简单高效"
    ],
    "references": [
      "构建未来：云原生架构在现代应用开发中的角色"
    ],
    "sources": [
      "https://developer.aliyun.com/article/1513810"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "container",
        "note": ""
      },
      {
        "type": "related",
        "target": "kubernetes",
        "note": ""
      },
      {
        "type": "related",
        "target": "distributed-transaction",
        "note": ""
      },
      {
        "type": "related",
        "target": "message-queue",
        "note": ""
      },
      {
        "type": "related",
        "target": "cloud-native",
        "note": ""
      },
      {
        "type": "related",
        "target": "container-orchestration",
        "note": ""
      },
      {
        "type": "related",
        "target": "load-balancing",
        "note": ""
      },
      {
        "type": "related",
        "target": "distributed-system",
        "note": ""
      },
      {
        "type": "related",
        "target": "api",
        "note": ""
      },
      {
        "type": "related",
        "target": "sdk",
        "note": ""
      },
      {
        "type": "related",
        "target": "middleware",
        "note": ""
      },
      {
        "type": "related",
        "target": "event-driven",
        "note": ""
      }
    ]
  },
  {
    "id": "container",
    "name": "容器",
    "aliases": [
      "Container",
      "Docker 容器"
    ],
    "field": "计算机术语",
    "tags": [
      "虚拟化",
      "云原生"
    ],
    "difficulty": 3,
    "summary": "隔离进程与依赖的轻量虚拟化技术",
    "definition": "容器（Container）是操作系统级虚拟化技术，利用 Linux 命名空间（Namespace）与 cgroups 将进程及其依赖（代码、运行时、库、配置）打包进独立隔离环境，共享宿主内核，比虚拟机更轻量、启动更快。Docker 是容器技术的代名词，通过镜像实现「构建一次，随处运行」。容器保证开发、测试、生产环境一致性，是微服务与云原生架构的基石，通常由 Kubernetes 统一编排。",
    "core": [
      "共享宿主内核，通过 Namespace 与 cgroups 隔离",
      "镜像保证环境一致性，启动毫秒级",
      "是微服务部署与云原生的基石"
    ],
    "applications": [
      "用 Dockerfile 构建镜像并在多环境一致运行",
      "作为 Kubernetes 调度的最小部署单元"
    ],
    "misconceptions": [
      "容器不是轻量虚拟机，二者隔离级别与资源开销不同"
    ],
    "references": [
      "构建高效稳定的云基础设施：DevOps与容器化技术"
    ],
    "sources": [
      "https://developer.aliyun.com/article/1493940"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "kubernetes",
        "note": ""
      },
      {
        "type": "related",
        "target": "microservices",
        "note": ""
      },
      {
        "type": "related",
        "target": "Docker",
        "note": ""
      },
      {
        "type": "related",
        "target": "devops",
        "note": ""
      }
    ]
  },
  {
    "id": "kubernetes",
    "name": "Kubernetes",
    "aliases": [
      "K8s",
      "kube",
      "容器编排平台"
    ],
    "field": "计算机术语",
    "tags": [
      "云原生",
      "容器编排"
    ],
    "difficulty": 4,
    "summary": "自动化部署、扩缩容与运维容器的平台",
    "definition": "Kubernetes（缩写 K8s，K 与 s 之间有 8 个字母）是 Google 开源、CNCF 维护的容器编排平台，用于自动部署、扩缩容、调度与运维容器化应用。它以声明式 API 为核心：用户用 YAML 描述期望状态（副本数、镜像、配额），控制平面（apiserver、etcd、scheduler、kubelet）持续将实际状态收敛到期望状态，并提供服务发现、滚动更新、自愈等能力。",
    "core": [
      "声明式 API：声明期望状态，系统持续收敛",
      "提供调度、自愈、滚动更新、服务发现",
      "是云原生应用编排的事实标准"
    ],
    "applications": [
      "用 Deployment + Service 声明微服务并自动扩缩容",
      "通过滚动更新无中断发布新版本"
    ],
    "misconceptions": [
      "K8s 不直接运行容器，而是调度与管理运行容器的节点"
    ],
    "references": [
      "Kubernetes 官方文档：概念总览",
      "Kubernetes微服务自动化发布系统"
    ],
    "sources": [
      "https://kubernetes.io/zh-cn/docs/concepts/overview/",
      "https://cloud.tencent.com.cn/developer/article/1691978"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "container",
        "note": ""
      },
      {
        "type": "related",
        "target": "microservices",
        "note": ""
      },
      {
        "type": "related",
        "target": "cicd",
        "note": ""
      },
      {
        "type": "related",
        "target": "yaml",
        "note": ""
      },
      {
        "type": "related",
        "target": "canary-release",
        "note": ""
      },
      {
        "type": "related",
        "target": "rollback",
        "note": ""
      }
    ]
  },
  {
    "id": "cicd",
    "name": "CI/CD",
    "aliases": [
      "持续集成/持续交付",
      "Continuous Integration/Continuous Delivery",
      "持续集成持续部署"
    ],
    "field": "计算机术语",
    "tags": [
      "研发流程",
      "自动化"
    ],
    "difficulty": 3,
    "summary": "自动化的持续集成与持续交付流水线",
    "definition": "CI/CD 是持续集成（Continuous Integration）与持续交付/持续部署的合称，指把代码变更自动完成构建、测试、打包并交付到目标环境的流水线实践。CI 强调频繁合并代码并自动跑测试与静态检查，尽早暴露集成问题；CD 把验证通过的产物自动部署到测试乃至生产环境。常见工具链为 Git + GitLab CI/GitHub Actions + 镜像仓库。",
    "core": [
      "CI：频繁集成并自动构建测试，尽早发现问题",
      "CD：验证通过后自动部署到目标环境",
      "以流水线串起构建-测试-发布环节"
    ],
    "applications": [
      "每次 push 触发 GitLab CI 运行测试并构建镜像",
      "流水线自动将镜像滚动发布到 Kubernetes 集群"
    ],
    "misconceptions": [
      "CI 与 CD 是两件事，很多团队只做了 CI 未做 CD"
    ],
    "references": [
      "构建高效自动化运维体系：DevOps与容器技术融合实践"
    ],
    "sources": [
      "https://developer.aliyun.com/article/1482380"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "git",
        "note": ""
      },
      {
        "type": "related",
        "target": "devops",
        "note": ""
      },
      {
        "type": "related",
        "target": "kubernetes",
        "note": ""
      },
      {
        "type": "related",
        "target": "release",
        "note": ""
      },
      {
        "type": "related",
        "target": "yaml",
        "note": ""
      },
      {
        "type": "related",
        "target": "unit-testing",
        "note": ""
      }
    ]
  },
  {
    "id": "devops",
    "name": "DevOps",
    "aliases": [
      "Development Operations",
      "开发运维一体化"
    ],
    "field": "计算机术语",
    "tags": [
      "研发流程",
      "工程文化"
    ],
    "difficulty": 3,
    "summary": "打通开发与运维的工程文化与实践",
    "definition": "DevOps 是 Development（开发）与 Operations（运维）的合成词，既是工程文化也是实践集合，核心是打破开发与运维的部门墙，让同一团队端到端负责交付、部署与运行，以自动化与度量缩短交付周期。落地手段包括 CI/CD 流水线、基础设施即代码（Terraform、Ansible）、监控告警等。目标是高频、低风险发布，本质是「让写代码的人对运行负责」。",
    "core": [
      "消除开发与运维边界，端到端负责",
      "以自动化与度量缩短交付周期",
      "落地依赖 CI/CD、IaC、监控等实践"
    ],
    "applications": [
      "开发团队自建 CI/CD 并负责线上告警响应",
      "用 Terraform 以代码管理云上基础设施"
    ],
    "misconceptions": [
      "DevOps 不是某个工具或岗位，而是文化与流程变革"
    ],
    "references": [
      "构建高效稳定的云基础设施：DevOps与容器化技术"
    ],
    "sources": [
      "https://developer.aliyun.com/article/1493940"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "cicd",
        "note": ""
      },
      {
        "type": "related",
        "target": "monitoring",
        "note": ""
      },
      {
        "type": "related",
        "target": "container",
        "note": ""
      },
      {
        "type": "related",
        "target": "release",
        "note": ""
      }
    ]
  },
  {
    "id": "git",
    "name": "Git",
    "aliases": [
      "分布式版本控制系统",
      "VCS"
    ],
    "field": "计算机术语",
    "tags": [
      "开发工具",
      "版本管理"
    ],
    "difficulty": 2,
    "summary": "分布式版本控制与协作的事实标准",
    "definition": "Git 是 Linus Torvalds 于 2005 年为管理 Linux 内核创建的分布式版本控制系统：每个开发者本地持有完整仓库历史，可离线提交、自由分支，再通过推送/拉取同步。相比集中式 SVN，Git 分支与合并极轻量，配合 GitHub/GitLab 形成「分支开发 + PR/MR 评审」的主流协作模式，是代码评审、CI/CD 与团队协作的底层基础设施。",
    "core": [
      "分布式：本地持有完整历史，支持离线工作",
      "分支轻量，PR/MR 评审是主流协作模式",
      "是 CI/CD 与团队协作的基石"
    ],
    "applications": [
      "用 feature 分支开发，经合并请求评审后合入主干",
      "用 git rebase 整理提交历史保持主干线性"
    ],
    "misconceptions": [
      "rebase 与 merge 各有适用场景，rebase 会改写提交历史"
    ],
    "references": [
      "Pro Git 中文版 - Git 官方文档"
    ],
    "sources": [
      "https://git-scm.com/book/zh/v2"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "cicd",
        "note": ""
      },
      {
        "type": "related",
        "target": "refactoring",
        "note": ""
      },
      {
        "type": "related",
        "target": "代码评审",
        "note": ""
      }
    ]
  },
  {
    "id": "technical-debt",
    "name": "技术债",
    "aliases": [
      "Technical Debt",
      "技术负债",
      "技术欠账"
    ],
    "field": "计算机术语",
    "tags": [
      "工程管理",
      "代码质量"
    ],
    "difficulty": 2,
    "summary": "为短期速度牺牲长期质量的隐性代价",
    "definition": "技术债（Technical Debt）由 Ward Cunningham 提出，指为赶进度采取的「先凑合、后偿还」捷径（跳过测试、复制粘贴、不做抽象）所积累的隐性代价。它像金融债务一样产生「利息」：后续每次改动更慢、更易引入缺陷，直到不得不重构偿还本金。技术债分有意的与无意的、代码级与架构级。管理关键是记录在案、评估优先级、定期偿还，而非放任积累。",
    "core": [
      "为短期交付速度牺牲长期可维护性",
      "产生利息：后续改动变慢、缺陷变多",
      "需要记录、评估并定期偿还"
    ],
    "applications": [
      "在技术债清单中登记遗留模块并安排重构迭代",
      "新功能开发前评估历史代码的改动成本"
    ],
    "misconceptions": [
      "技术债不全是坏事，关键是有意为之且有明确的偿还计划"
    ],
    "references": [
      "代码迷宫的破局者：开发者如何摆脱技术债？"
    ],
    "sources": [
      "https://cloud.tencent.cn/developer/article/2536728"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "legacy-code",
        "note": ""
      },
      {
        "type": "related",
        "target": "refactoring",
        "note": ""
      },
      {
        "type": "related",
        "target": "unit-testing",
        "note": ""
      }
    ]
  },
  {
    "id": "legacy-code",
    "name": "屎山代码",
    "aliases": [
      "屎山",
      "祖传代码",
      "Big Ball of Mud",
      "面条式代码"
    ],
    "field": "计算机术语",
    "tags": [
      "代码质量",
      "工程管理"
    ],
    "difficulty": 2,
    "summary": "结构混乱、无人敢动的历史遗留代码",
    "definition": "屎山代码是对结构混乱、耦合严重、缺乏测试与文档的历史遗留代码的戏称，常见于长期迭代、人员频繁更替的项目。典型特征：函数巨长、命名随意、复制粘贴成风、隐藏全局状态、改一处崩多处，导致无人愿意修改——「代码在，人不在」。治理手段包括先补特征测试锁定行为、小步重构、逐步隔离依赖，切忌大爆炸式重写。",
    "core": [
      "结构混乱、耦合深、缺测试缺文档",
      "改动风险高，无人愿意触碰",
      "治理需先测试覆盖再小步重构"
    ],
    "applications": [
      "对祖传模块先写特征测试锁定行为再重构",
      "通过网关隔离将屎山服务逐步拆分迁移"
    ],
    "misconceptions": [
      "稳定运行的屎山不代表质量好，只是风险尚未被触发"
    ],
    "references": [
      "“屎山”代码混乱不堪，凭啥却异常稳定？",
      "代码重构的独孤九剑：如何优雅改造祖传屎山代码"
    ],
    "sources": [
      "https://cloud.tencent.com.cn/developer/article/2519598",
      "https://cloud.tencent.com.cn/developer/article/2516937"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "technical-debt",
        "note": ""
      },
      {
        "type": "related",
        "target": "refactoring",
        "note": ""
      },
      {
        "type": "related",
        "target": "unit-testing",
        "note": ""
      }
    ]
  },
  {
    "id": "refactoring",
    "name": "重构",
    "aliases": [
      "Refactoring",
      "代码重构"
    ],
    "field": "计算机术语",
    "tags": [
      "代码质量",
      "工程实践"
    ],
    "difficulty": 2,
    "summary": "不改变外部行为地改善代码内部结构",
    "definition": "重构（Refactoring）由 Martin Fowler 系统化提出，指在不改变软件可观察外部行为的前提下，通过一系列小而安全的手法（提取函数、重命名、消除重复、拆分模块）改善代码内部结构，提升可读性与可维护性。其前提是有充分的自动化测试作为安全网，每步小改后立即跑测试验证。重构不是重写，忌讳大爆炸式推倒重来；理想状态是「随时重构」——在添加功能前先重构让改动变简单。",
    "core": [
      "外部行为不变，内部结构改善",
      "依赖自动化测试提供安全网",
      "小步高频进行，避免大爆炸重写"
    ],
    "applications": [
      "新增功能前先提取公共逻辑，降低改动成本",
      "用 IDE 的重命名、提取方法等安全重构手法"
    ],
    "misconceptions": [
      "重构不是重写，也不是修 bug，三者目标不同"
    ],
    "references": [
      "重构的艺术：从‘屎山’恐惧到优雅掌控",
      "Refactoring.com - Martin Fowler"
    ],
    "sources": [
      "https://cloud.tencent.cn/developer/article/2569885",
      "https://refactoring.com/"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "technical-debt",
        "note": ""
      },
      {
        "type": "related",
        "target": "legacy-code",
        "note": ""
      },
      {
        "type": "related",
        "target": "unit-testing",
        "note": ""
      },
      {
        "type": "related",
        "target": "git",
        "note": ""
      }
    ]
  },
  {
    "id": "release",
    "name": "上线",
    "aliases": [
      "发布",
      "Deployment",
      "Release",
      "投产"
    ],
    "field": "计算机术语",
    "tags": [
      "研发流程",
      "运维"
    ],
    "difficulty": 1,
    "summary": "将新版本功能发布到生产环境",
    "definition": "上线（Release/Deployment）指将经过开发、测试验证的新版本部署到生产环境、向真实用户开放使用的过程，是研发流程的关键节点。上线前需完成代码评审、自动化测试、预发验证、数据库变更评审与回滚预案；常见发布策略包括停机发布、滚动发布、蓝绿发布与灰度发布以控制风险。上线后需持续观察监控告警确认服务健康。「上线」也泛指功能对用户开放，是最常用的行业黑话之一。",
    "core": [
      "把验证通过的新版本部署到生产环境",
      "前置：评审、测试、预发验证、回滚预案",
      "发布策略影响风险：滚动/蓝绿/灰度"
    ],
    "applications": [
      "重大版本避开周五与节假日前夕，降低风险暴露窗口",
      "通过 CI/CD 流水线一键发布并支持自动回滚"
    ],
    "misconceptions": [
      "上线不等于结束，仍需持续监控与快速响应"
    ],
    "references": [
      "稳定性方法论：可灰度 & 可监控 & 可回滚"
    ],
    "sources": [
      "https://developer.jdcloud.com/article/3669"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "canary-release",
        "note": ""
      },
      {
        "type": "related",
        "target": "rollback",
        "note": ""
      },
      {
        "type": "related",
        "target": "cicd",
        "note": ""
      },
      {
        "type": "related",
        "target": "devops",
        "note": ""
      },
      {
        "type": "related",
        "target": "stress-testing",
        "note": ""
      }
    ]
  },
  {
    "id": "canary-release",
    "name": "灰度发布",
    "aliases": [
      "灰度",
      "金丝雀发布",
      "Canary Release",
      "渐进式发布"
    ],
    "field": "计算机术语",
    "tags": [
      "发布策略",
      "稳定性"
    ],
    "difficulty": 3,
    "summary": "让新版本逐步覆盖用户的小流量发布",
    "definition": "灰度发布（Canary Release，金丝雀发布）是渐进式发布策略：先把新版本部署到一小部分实例或流量上（如 5% 用户），在真实流量下观察监控指标与反馈，确认无异常后再逐步扩大比例直至全量，异常则立即回滚。名称源于矿工带金丝雀下井探测毒气的做法。实现上靠网关/负载均衡按比例或按用户维度（userId 哈希）分流，是「可灰度、可监控、可回滚」稳定性方法论的第一环。",
    "core": [
      "新版本先承接小比例真实流量",
      "按指标验证无异常后逐步放量",
      "异常时可快速回滚，风险可控"
    ],
    "applications": [
      "网关按 userId 哈希将 10% 用户导向新版本",
      "K8s 中按副本数比例灰度并观测错误率"
    ],
    "misconceptions": [
      "灰度不止是部署技巧，配合监控与回滚才构成完整机制"
    ],
    "references": [
      "稳定性方法论：可灰度 & 可监控 & 可回滚"
    ],
    "sources": [
      "https://developer.jdcloud.com/article/3669"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "release",
        "note": ""
      },
      {
        "type": "related",
        "target": "rollback",
        "note": ""
      },
      {
        "type": "related",
        "target": "kubernetes",
        "note": ""
      },
      {
        "type": "related",
        "target": "monitoring",
        "note": ""
      }
    ]
  },
  {
    "id": "rollback",
    "name": "回滚",
    "aliases": [
      "Rollback",
      "版本回退",
      "回退"
    ],
    "field": "计算机术语",
    "tags": [
      "发布策略",
      "稳定性"
    ],
    "difficulty": 2,
    "summary": "发布异常时将系统恢复到上一稳定版本",
    "definition": "回滚（Rollback）指新版本上线后出现异常（错误率飙升、接口报错、数据异常）时，将系统恢复到上一个稳定版本或状态的应急操作，是发布安全的最后一道防线，与灰度发布、监控告警构成稳定性三要素。实现方式：蓝绿发布直接切换流量回旧版本、Kubernetes 的 rollout undo、数据库 schema 逆向迁移等。注意代码回滚不等于数据回滚，涉及库表变更的发布需提前设计回滚方案。",
    "core": [
      "发布异常时的兜底恢复手段",
      "与灰度、监控配合构成稳定性体系",
      "代码回滚与数据回滚需分别设计预案"
    ],
    "applications": [
      "K8s 用 kubectl rollout undo 回退 Deployment",
      "蓝绿部署异常时一键把流量切回旧环境"
    ],
    "misconceptions": [
      "回滚不等于修 bug，只是快速止血，问题仍需根因分析"
    ],
    "references": [
      "稳定性方法论：可灰度 & 可监控 & 可回滚"
    ],
    "sources": [
      "https://developer.jdcloud.com/article/3669"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "canary-release",
        "note": ""
      },
      {
        "type": "related",
        "target": "release",
        "note": ""
      },
      {
        "type": "related",
        "target": "kubernetes",
        "note": ""
      }
    ]
  },
  {
    "id": "stress-testing",
    "name": "压测",
    "aliases": [
      "压力测试",
      "性能测试",
      "Load Testing",
      "Stress Testing"
    ],
    "field": "计算机术语",
    "tags": [
      "测试",
      "性能"
    ],
    "difficulty": 3,
    "summary": "模拟高并发验证系统性能与稳定性",
    "definition": "压测（压力/负载测试）指通过工具模拟大量并发用户或请求，验证系统在高负载下的吞吐量（TPS/QPS）、响应时间、资源占用与稳定性，找出性能瓶颈与容量上限。常见工具有 JMeter、wrk、ab、Locust、k6。压测分负载测试（预期负载）、压力测试（加压至崩溃）与容量测试（确定上限）。上线前的压测报告是容量评估与限流阈值设定的依据，应在隔离环境进行。",
    "core": [
      "模拟高并发验证吞吐、延迟与稳定性",
      "常用工具：JMeter、wrk、k6、Locust",
      "为容量规划与限流配置提供依据"
    ],
    "applications": [
      "大促前对核心接口压测确定 TPS 上限",
      "用 k6 在 CI 中做轻量回归性能测试"
    ],
    "misconceptions": [
      "压测不只是测极限，更重在瓶颈定位与资源分析"
    ],
    "references": [
      "软件测试必须了解的一些话术 - 51Testing"
    ],
    "sources": [
      "http://www.51testing.net/study/basis/70367.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "monitoring",
        "note": ""
      },
      {
        "type": "related",
        "target": "unit-testing",
        "note": ""
      },
      {
        "type": "related",
        "target": "release",
        "note": ""
      },
      {
        "type": "related",
        "target": "mock",
        "note": ""
      },
      {
        "type": "related",
        "target": "memory-leak",
        "note": ""
      },
      {
        "type": "related",
        "target": "garbage-collection",
        "note": ""
      }
    ]
  },
  {
    "id": "monitoring",
    "name": "监控告警",
    "aliases": [
      "监控",
      "可观测性",
      "Monitoring",
      "Alerting",
      "告警"
    ],
    "field": "计算机术语",
    "tags": [
      "运维",
      "稳定性"
    ],
    "difficulty": 3,
    "summary": "持续观测系统状态并在异常时自动通知",
    "definition": "监控告警指对系统的指标（Metrics）、日志（Logs）、链路（Traces）持续采集观测，并在指标越界或异常时按规则自动触发通知（短信、电话、IM、邮件），便于运维快速介入。核心工具：Prometheus + Grafana（指标）、ELK/Loki（日志）、SkyWalking/Jaeger（链路），合称可观测性三支柱。好告警应可路由、可行动、分级收敛，避免告警风暴。",
    "core": [
      "覆盖指标、日志、链路三类数据",
      "规则触发告警并通知到责任人",
      "是可观测性与稳定性体系的核心"
    ],
    "applications": [
      "Prometheus 采集 QPS/错误率，Grafana 展示大盘",
      "CPU 超过 90% 持续 5 分钟触发电话告警"
    ],
    "misconceptions": [
      "监控不等于告警堆积，告警需收敛、分级并减少噪声"
    ],
    "references": [
      "稳定性方法论：可灰度 & 可监控 & 可回滚"
    ],
    "sources": [
      "https://developer.jdcloud.com/article/3669"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "stress-testing",
        "note": ""
      },
      {
        "type": "related",
        "target": "canary-release",
        "note": ""
      },
      {
        "type": "related",
        "target": "devops",
        "note": ""
      },
      {
        "type": "related",
        "target": "cache-penetration",
        "note": ""
      },
      {
        "type": "related",
        "target": "cache-avalanche",
        "note": ""
      }
    ]
  },
  {
    "id": "unit-testing",
    "name": "单元测试",
    "aliases": [
      "UT",
      "Unit Test",
      "单测"
    ],
    "field": "计算机术语",
    "tags": [
      "测试",
      "代码质量"
    ],
    "difficulty": 2,
    "summary": "对最小代码单元进行自动化验证",
    "definition": "单元测试（Unit Test）指对软件中最小可测试单元（通常是函数、方法、类）编写自动化测试，验证给定输入下行为是否符合预期，快速发现逻辑缺陷、支撑安全重构。优秀单测遵循「快速、独立、可重复」：不依赖网络、数据库等外部资源（用 Mock 隔离），一次只验证一个行为。配合覆盖率工具与 CI 流水线，每次提交自动执行，是重构与持续集成的安全网。",
    "core": [
      "针对函数/方法级最小单元自动化验证",
      "独立快速，外部依赖用 Mock 隔离",
      "是重构与 CI 的安全网"
    ],
    "applications": [
      "对工具函数写参数化测试覆盖边界值",
      "在 CI 中运行单测，覆盖率不达标则门禁失败"
    ],
    "misconceptions": [
      "覆盖率数字不等于质量，断言有效性与用例设计更重要"
    ],
    "references": [
      "软件测试必须了解的一些话术 - 51Testing"
    ],
    "sources": [
      "http://www.51testing.net/study/basis/70367.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "mock",
        "note": ""
      },
      {
        "type": "related",
        "target": "refactoring",
        "note": ""
      },
      {
        "type": "related",
        "target": "cicd",
        "note": ""
      },
      {
        "type": "related",
        "target": "stress-testing",
        "note": ""
      },
      {
        "type": "related",
        "target": "technical-debt",
        "note": ""
      },
      {
        "type": "related",
        "target": "legacy-code",
        "note": ""
      }
    ]
  },
  {
    "id": "mock",
    "name": "Mock",
    "aliases": [
      "模拟对象",
      "桩",
      "Stub",
      "测试替身"
    ],
    "field": "计算机术语",
    "tags": [
      "测试",
      "开发工具"
    ],
    "difficulty": 3,
    "summary": "用模拟对象替身隔离被测单元依赖",
    "definition": "Mock（模拟/测试替身）指在测试中用可控假对象替换真实依赖（数据库、HTTP 服务、消息队列），隔离被测单元、稳定测试结果、加速执行。广义包含 Stub（预设返回值）、Spy（记录调用）、Fake（简化实现）等变体；工具如 Mockito（Java）、unittest.mock（Python）、vi.fn（Jest/Vitest）。Mock 也用于接口未就绪时并行联调与压测中模拟第三方依赖。",
    "core": [
      "用可控替身替换外部依赖，隔离被测单元",
      "可预设返回值、断言调用行为",
      "工具：Mockito、unittest.mock、Jest/Vitest"
    ],
    "applications": [
      "单测中用 Mock 数据库返回固定数据",
      "后端接口未完成时用 Mock Server 供前端联调"
    ],
    "misconceptions": [
      "Mock 不是伪造业务，而是隔离依赖保证测试确定性"
    ],
    "references": [
      "软件测试必须了解的一些话术 - 51Testing"
    ],
    "sources": [
      "http://www.51testing.net/study/basis/70367.html"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "unit-testing",
        "note": ""
      },
      {
        "type": "related",
        "target": "stress-testing",
        "note": ""
      },
      {
        "type": "related",
        "target": "api",
        "note": ""
      }
    ]
  },
  {
    "id": "closure",
    "name": "闭包",
    "aliases": [
      "Closure",
      "词法闭包"
    ],
    "field": "计算机术语",
    "tags": [
      "编程语言",
      "函数式编程"
    ],
    "difficulty": 4,
    "summary": "函数与其定义时词法环境的绑定",
    "definition": "闭包（Closure）指一个函数连同其定义时所在词法作用域（可访问的外部变量）一起打包形成的组合。即使外层函数已经返回，闭包仍能记住并访问这些被捕获的变量，从而「捕获」状态。它是 JavaScript、Python、Go 等语言的重要特性，常用于数据封装（模拟私有变量）、回调与事件处理器、柯里化与函数工厂。需注意闭包持有的引用可能阻碍垃圾回收，造成内存泄漏。",
    "core": [
      "函数 + 定义时的词法环境绑定",
      "外层返回后仍可访问捕获的变量",
      "用于封装私有状态、回调、柯里化"
    ],
    "applications": [
      "用闭包实现模块私有变量的数据封装",
      "事件监听回调中捕获上下文变量"
    ],
    "misconceptions": [
      "闭包捕获的是变量引用而非值快照，循环中声明函数易踩坑"
    ],
    "references": [
      "闭包 - MDN Web Docs"
    ],
    "sources": [
      "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "functional-programming",
        "note": ""
      },
      {
        "type": "related",
        "target": "memory-leak",
        "note": ""
      },
      {
        "type": "related",
        "target": "garbage-collection",
        "note": ""
      },
      {
        "type": "related",
        "target": "generics",
        "note": ""
      }
    ]
  },
  {
    "id": "generics",
    "name": "泛型",
    "aliases": [
      "Generics",
      "参数化类型"
    ],
    "field": "计算机术语",
    "tags": [
      "编程语言",
      "类型系统"
    ],
    "difficulty": 4,
    "summary": "类型参数化的编程机制，兼顾复用与类型安全",
    "definition": "泛型（Generics）是编程语言机制：定义函数、类或接口时不指定具体类型，用类型参数（如 T、K、V）占位，使用时传入具体类型。它让同一份代码复用于多种类型，同时在编译期保留类型检查，兼顾复用与安全。典型场景：List<T>、Map<K,V> 容器、类型安全的数据访问层、TypeScript 泛型约束（extends 限定类型范围）。注意 Java 泛型运行期会类型擦除，与 TS 机制不同。",
    "core": [
      "类型参数化，使用时传入具体类型",
      "一份代码复用多种类型且保持类型安全",
      "常见于容器、工具函数、TS/Java"
    ],
    "applications": [
      "编写可比较大小的 max<T> 通用工具函数",
      "用 TS 泛型约束让接口返回类型自动推导"
    ],
    "misconceptions": [
      "Java 泛型运行期擦除，与 TS 的结构化泛型机制不同"
    ],
    "references": [
      "计算机专业术语对照 - 腾讯云开发者社区"
    ],
    "sources": [
      "https://cloud.tencent.cn/developer/article/2098655"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "functional-programming",
        "note": ""
      },
      {
        "type": "related",
        "target": "类型系统",
        "note": ""
      },
      {
        "type": "related",
        "target": "closure",
        "note": ""
      }
    ]
  },
  {
    "id": "thread-process",
    "name": "线程与进程",
    "aliases": [
      "进程",
      "线程",
      "Process",
      "Thread"
    ],
    "field": "计算机术语",
    "tags": [
      "操作系统",
      "并发"
    ],
    "difficulty": 3,
    "summary": "操作系统任务调度的两个基本执行单位",
    "definition": "进程（Process）是操作系统资源分配的基本单位，拥有独立地址空间与文件描述符，进程间互不干扰，通信需通过 IPC（管道、消息队列、共享内存）；线程（Thread）是 CPU 调度的基本单位，一个进程可包含多个线程，共享进程地址空间与资源，创建/切换开销小，但访问共享数据需用锁同步。多进程适合强隔离容错，多线程适合高并发 I/O 密集任务；Go 的 goroutine 等协程是更轻量的调度单位。",
    "core": [
      "进程：资源分配单位，独立地址空间，IPC 通信",
      "线程：调度单位，共享进程资源，需同步",
      "多进程隔离强、多线程开销低"
    ],
    "applications": [
      "浏览器每个 Tab 是一个进程，页面崩溃互不影响",
      "Java 用线程池处理并发请求"
    ],
    "misconceptions": [
      "多线程不必然提升性能，还引入竞态、死锁等风险"
    ],
    "references": [
      "计算机专业术语对照 - 腾讯云开发者社区"
    ],
    "sources": [
      "https://cloud.tencent.cn/developer/article/2098655"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "coroutine",
        "note": ""
      },
      {
        "type": "related",
        "target": "并发",
        "note": ""
      },
      {
        "type": "related",
        "target": "garbage-collection",
        "note": ""
      }
    ]
  },
  {
    "id": "coroutine",
    "name": "协程",
    "aliases": [
      "Coroutine",
      "goroutine",
      "绿色线程"
    ],
    "field": "计算机术语",
    "tags": [
      "并发",
      "编程语言"
    ],
    "difficulty": 4,
    "summary": "用户态可暂停恢复的轻量级并发单元",
    "definition": "协程（Coroutine）是运行在用户态、可主动挂起（yield/await）并恢复执行的轻量级并发单元，由运行时或语言自身调度，而非操作系统线程。相比线程，协程创建与切换开销极低，可轻松创建数十万个。语言形态各异：Python async/await、Go goroutine、Kotlin 协程。协程适合 I/O 密集高并发，配合事件循环实现单线程高吞吐；但它是并发而非并行。",
    "core": [
      "用户态调度，挂起/恢复由程序控制",
      "创建与切换开销远低于线程",
      "适合 I/O 密集型高并发场景"
    ],
    "applications": [
      "Go 中用 goroutine + channel 处理海量并发请求",
      "Python asyncio 并发执行网络 I/O 任务"
    ],
    "misconceptions": [
      "协程解决并发不解决并行，CPU 密集任务仍需多线程/多进程"
    ],
    "references": [
      "计算机专业术语对照 - 腾讯云开发者社区"
    ],
    "sources": [
      "https://cloud.tencent.cn/developer/article/2098655"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "thread-process",
        "note": ""
      },
      {
        "type": "related",
        "target": "event-driven",
        "note": ""
      },
      {
        "type": "related",
        "target": "garbage-collection",
        "note": ""
      }
    ]
  },
  {
    "id": "memory-leak",
    "name": "内存泄漏",
    "aliases": [
      "Memory Leak",
      "内存泄露"
    ],
    "field": "计算机术语",
    "tags": [
      "性能",
      "调试"
    ],
    "difficulty": 3,
    "summary": "不再使用的内存未被释放持续增长",
    "definition": "内存泄漏（Memory Leak）指程序分配的内存（或对象）在不再需要后仍被引用、无法回收，导致可用内存持续减少。长期运行的服务持续泄漏，最终会触发内存耗尽（OOM）、频繁 GC、性能骤降甚至崩溃。常见成因：C/C++ 忘记 free；Java/JS 等带 GC 语言中，被全局容器、闭包、事件监听器长期持有的引用；无过期策略的无界缓存。排查工具有 valgrind、MAT、堆快照、jmap。",
    "core": [
      "无用对象仍被引用，GC 无法回收",
      "长期运行导致 OOM 与性能劣化",
      "常见于全局引用、闭包、无界缓存"
    ],
    "applications": [
      "用 Chrome DevTools 抓取堆快照对比定位泄漏对象",
      "用 MAT 分析 Java 堆查找大对象持有链"
    ],
    "misconceptions": [
      "有 GC 的语言也会泄漏——泄漏的是「引用」而非「指针」"
    ],
    "references": [
      "内存泄漏 - MDN Web Docs"
    ],
    "sources": [
      "https://developer.mozilla.org/zh-CN/docs/Glossary/Memory_leak"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "garbage-collection",
        "note": ""
      },
      {
        "type": "related",
        "target": "closure",
        "note": ""
      },
      {
        "type": "related",
        "target": "stress-testing",
        "note": ""
      }
    ]
  },
  {
    "id": "garbage-collection",
    "name": "垃圾回收",
    "aliases": [
      "GC",
      "Garbage Collection"
    ],
    "field": "计算机术语",
    "tags": [
      "编程语言",
      "内存管理"
    ],
    "difficulty": 4,
    "summary": "自动回收不再使用内存的运行时机制",
    "definition": "垃圾回收（Garbage Collection，GC）是运行时自动识别并回收不再使用内存的机制，Java、Go、JavaScript、Python 等语言均内置。主流算法：引用计数（Python 主要采用）、标记-清除、标记-复制、分代收集（JVM 按存活时长分代）。GC 常以 Stop-The-World 暂停或并发方式回收，带来吞吐与延迟权衡；理解 GC 对排查卡顿与调优至关重要。",
    "core": [
      "自动识别并回收不可达对象",
      "算法：引用计数、标记-清除、分代收集",
      "STW 暂停与并发回收是性能权衡点"
    ],
    "applications": [
      "用 JVM 参数调整堆大小与 GC 器（G1/ZGC）",
      "分析 GC 日志定位停顿与内存增长"
    ],
    "misconceptions": [
      "GC 不等于无内存问题，泄漏与频繁 GC 仍需排查调优"
    ],
    "references": [
      "垃圾回收 - 维基百科"
    ],
    "sources": [
      "https://zh.wikipedia.org/wiki/垃圾回收_(計算機科學)"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "memory-leak",
        "note": ""
      },
      {
        "type": "related",
        "target": "thread-process",
        "note": ""
      },
      {
        "type": "related",
        "target": "stress-testing",
        "note": ""
      },
      {
        "type": "related",
        "target": "closure",
        "note": ""
      },
      {
        "type": "related",
        "target": "coroutine",
        "note": ""
      }
    ]
  },
  {
    "id": "cache-penetration",
    "name": "缓存穿透",
    "aliases": [
      "Cache Penetration"
    ],
    "field": "计算机术语",
    "tags": [
      "缓存",
      "性能优化"
    ],
    "difficulty": 4,
    "summary": "查询不存在的数据导致请求直击数据库",
    "definition": "缓存穿透指查询缓存和数据库中都不存在的数据（如不存在的商品 ID），缓存无法命中，请求每次都穿透到数据库；若被恶意遍历刷接口，会打爆数据库。解决方案：对结果为 null 的数据做短时缓存（空值缓存）、用布隆过滤器（Bloom Filter）在缓存前拦截不存在的 key、接口层参数校验与限流。穿透的本质是「不存在的数据无法被缓存」，需从源头减少无效查询。",
    "core": [
      "查不到的数据无法缓存，请求直达数据库",
      "恶意遍历不存在的 ID 可拖垮数据库",
      "解法：空值缓存、布隆过滤器、参数校验"
    ],
    "applications": [
      "热点查询接口加布隆过滤器拦截不存在 ID",
      "对 null 结果缓存 30 秒防止重复穿透"
    ],
    "misconceptions": [
      "穿透、击穿、雪崩成因不同：穿透查不到，击穿是热点过期，雪崩是大面积失效"
    ],
    "references": [
      "缓存穿透，缓存击穿，缓存雪崩详解 - 阿里云"
    ],
    "sources": [
      "https://developer.aliyun.com/article/1295594"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "cache-breakdown",
        "note": ""
      },
      {
        "type": "related",
        "target": "cache-avalanche",
        "note": ""
      },
      {
        "type": "related",
        "target": "monitoring",
        "note": ""
      }
    ]
  },
  {
    "id": "cache-breakdown",
    "name": "缓存击穿",
    "aliases": [
      "Cache Breakdown",
      "热点缓存失效"
    ],
    "field": "计算机术语",
    "tags": [
      "缓存",
      "性能优化"
    ],
    "difficulty": 4,
    "summary": "热点 key 过期瞬间大量请求打向数据库",
    "definition": "缓存击穿指被高频访问的热点 key 在过期瞬间，大量并发请求同时发现缓存未命中，一起涌向数据库，导致数据库压力骤增甚至被打挂。与穿透不同，击穿针对「存在但恰好过期」的热点数据。解决方案：热点数据不过期或设长 TTL 并异步续期；互斥锁（Mutex）让同一时刻只有一个请求回源查库，其余等待；逻辑过期加后台刷新。核心是避免热点 key 过期时无保护地集体回源。",
    "core": [
      "热点 key 过期瞬间并发请求集体回源",
      "与穿透不同：数据存在，只是缓存刚好失效",
      "解法：互斥锁、逻辑过期、热点不过期"
    ],
    "applications": [
      "对秒杀商品缓存加分布式锁防击穿",
      "热点数据设置逻辑过期并后台线程续期"
    ],
    "misconceptions": [
      "击穿是「单个热点过期」，雪崩是「大面积同时失效」"
    ],
    "references": [
      "详解缓存穿透击穿雪崩三大问题及解决方案 - 阿里云"
    ],
    "sources": [
      "https://developer.aliyun.com/article/1671861"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "cache-penetration",
        "note": ""
      },
      {
        "type": "related",
        "target": "cache-avalanche",
        "note": ""
      },
      {
        "type": "related",
        "target": "idempotency",
        "note": ""
      }
    ]
  },
  {
    "id": "cache-avalanche",
    "name": "缓存雪崩",
    "aliases": [
      "Cache Avalanche",
      "缓存集体失效"
    ],
    "field": "计算机术语",
    "tags": [
      "缓存",
      "稳定性"
    ],
    "difficulty": 4,
    "summary": "大量缓存同时失效导致数据库被打垮",
    "definition": "缓存雪崩指缓存中大量 key 在同一时间段集中失效（统一设置相同过期时间、缓存节点宕机或重启清空），大量请求同时穿透到数据库，数据库承受远超负荷的流量而崩溃，进而引发连锁故障。防范：过期时间加随机抖动避免集中失效；缓存集群高可用（主从、哨兵、Cluster）防单点宕机；多级缓存（本地缓存 + Redis）；限流、降级与熔断保护数据库。雪崩是典型的「缓存层故障放大」问题。",
    "core": [
      "大量 key 同时失效或缓存层宕机引发请求风暴",
      "后果：数据库被打垮并引发连锁故障",
      "解法：过期时间加抖动、高可用集群、多级缓存"
    ],
    "applications": [
      "缓存 TTL 加随机 0~5 分钟偏移分散失效时间",
      "Redis 集群主从切换保障缓存层可用性"
    ],
    "misconceptions": [
      "雪崩未必由过期导致，缓存节点宕机同样引发雪崩"
    ],
    "references": [
      "什么是缓存雪崩、缓存击穿、缓存穿透 - 阿里云"
    ],
    "sources": [
      "https://developer.aliyun.com/article/781428"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "cache-penetration",
        "note": ""
      },
      {
        "type": "related",
        "target": "cache-breakdown",
        "note": ""
      },
      {
        "type": "related",
        "target": "monitoring",
        "note": ""
      }
    ]
  },
  {
    "id": "idempotency",
    "name": "幂等",
    "aliases": [
      "Idempotent",
      "幂等性"
    ],
    "field": "计算机术语",
    "tags": [
      "分布式系统",
      "接口设计"
    ],
    "difficulty": 4,
    "summary": "同一操作重复执行结果与执行一次相同",
    "definition": "幂等（Idempotent）指一个操作无论执行一次还是多次，产生的结果都相同。HTTP 语义中 GET、PUT、DELETE 应为幂等，POST 不保证；支付、下单、退款等关键接口必须幂等，否则网络重试、消息重复投递会导致重复扣款、重复下单。实现方式：业务唯一键 + 去重表、数据库唯一索引、Redis setNX、状态机校验。幂等是分布式系统可靠性的基石，常与 MQ「至少一次投递」配合。",
    "core": [
      "多次执行与一次执行结果等价",
      "支付、下单等关键接口必须幂等",
      "实现：唯一键去重、唯一索引、状态机"
    ],
    "applications": [
      "支付回调用订单号 + 幂等表防止重复入账",
      "MQ 消费者按消息 ID 去重防止重复处理"
    ],
    "misconceptions": [
      "幂等必须显式设计——重试与重复投递必然发生，不能靠运气"
    ],
    "references": [
      "基于CAP组件实现补偿事务与消息幂等性"
    ],
    "sources": [
      "https://cloud.tencent.cn/developer/article/2112121"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "distributed-transaction",
        "note": ""
      },
      {
        "type": "related",
        "target": "message-queue",
        "note": ""
      },
      {
        "type": "related",
        "target": "cache-breakdown",
        "note": ""
      },
      {
        "type": "related",
        "target": "event-driven",
        "note": ""
      }
    ]
  },
  {
    "id": "distributed-transaction",
    "name": "分布式事务",
    "aliases": [
      "Distributed Transaction",
      "分布式一致性"
    ],
    "field": "计算机术语",
    "tags": [
      "分布式系统",
      "数据一致性"
    ],
    "difficulty": 5,
    "summary": "跨多个服务/数据库保证数据一致性的机制",
    "definition": "分布式事务指一次业务操作跨多个服务或数据库，需保证各节点数据变更要么全部成功、要么全部回滚。单库 ACID 无法覆盖跨节点场景，常见方案：两阶段提交（2PC，强一致但性能差、有协调者单点）；补偿事务（Saga 编排 / TCC 的 Try-Confirm-Cancel，最终一致、业界主流）；本地消息表/事务发件箱（Outbox）+ 消息队列。设计原则：能不用就不用。",
    "core": [
      "跨服务/跨库操作的原子性保证难题",
      "方案：2PC 强一致，Saga/TCC 最终一致",
      "业界主流是最终一致性 + 补偿机制"
    ],
    "applications": [
      "下单 + 扣库存跨服务用 Saga 编排与补偿",
      "事务发件箱模式保证业务写入与消息原子发布"
    ],
    "misconceptions": [
      "分布式事务没有银弹，强一致与高性能不可兼得"
    ],
    "references": [
      "事件驱动微服务中的分布式事务模式 - 腾讯云",
      "微服务分布式事务-可靠性事件模式"
    ],
    "sources": [
      "https://cloud.tencent.cn/developer/article/2486214",
      "https://blog.csdn.net/weixin_33883178/article/details/91815367"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "microservices",
        "note": ""
      },
      {
        "type": "related",
        "target": "message-queue",
        "note": ""
      },
      {
        "type": "related",
        "target": "idempotency",
        "note": ""
      },
      {
        "type": "related",
        "target": "middleware",
        "note": ""
      },
      {
        "type": "related",
        "target": "event-driven",
        "note": ""
      }
    ]
  },
  {
    "id": "message-queue",
    "name": "消息队列",
    "aliases": [
      "MQ",
      "Message Queue",
      "消息中间件"
    ],
    "field": "计算机术语",
    "tags": [
      "中间件",
      "异步通信"
    ],
    "difficulty": 3,
    "summary": "异步解耦的分布式消息传输组件",
    "definition": "消息队列（Message Queue，MQ）是异步通信中间件：生产者把消息投递到队列/主题，消费者按需拉取或订阅处理，双方无需同时在线、互不感知。核心价值是解耦（削峰填谷、故障隔离）、异步化与可靠投递（持久化、重试、死信队列）。主流产品：RabbitMQ（路由灵活）、Kafka（高吞吐）、RocketMQ（事务消息）。需处理消息丢失、重复消费（配合幂等）、顺序与积压问题。",
    "core": [
      "生产者与消费者异步解耦，互不阻塞",
      "削峰填谷、故障隔离、可靠投递",
      "主流：Kafka、RabbitMQ、RocketMQ"
    ],
    "applications": [
      "秒杀系统用 MQ 削峰，异步写入订单",
      "订单支付后发消息驱动积分、短信等服务"
    ],
    "misconceptions": [
      "MQ 不保证不重复，消费端需配合幂等设计"
    ],
    "references": [
      "在微服务（集成事件）之间实现基于事件的通信 - Microsoft"
    ],
    "sources": [
      "https://learn.microsoft.com/zh-cn/dotnet/architecture/microservices/multi-container-microservice-net-applications/integration-event-based-microservice-communications"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "idempotency",
        "note": ""
      },
      {
        "type": "related",
        "target": "distributed-transaction",
        "note": ""
      },
      {
        "type": "related",
        "target": "microservices",
        "note": ""
      },
      {
        "type": "related",
        "target": "event-driven",
        "note": ""
      },
      {
        "type": "related",
        "target": "middleware",
        "note": ""
      }
    ]
  },
  {
    "id": "event-driven",
    "name": "事件驱动",
    "aliases": [
      "Event-Driven Architecture",
      "EDA",
      "事件驱动架构"
    ],
    "field": "计算机术语",
    "tags": [
      "软件架构",
      "异步"
    ],
    "difficulty": 4,
    "summary": "以事件为核心触发与传递信息的架构风格",
    "definition": "事件驱动（Event-Driven Architecture，EDA）是以「事件」（系统中发生的事实，如「订单已支付」）为核心的设计风格：生产者发布事件，经消息中间件分发给订阅者，各自响应，彼此解耦。相比请求-响应式调用，它天然支持异步、削峰与解耦，适合跨服务集成与实时数据流；事件溯源（Event Sourcing）与 CQRS 是其高级形态。代价是流程隐式化，需配合事件规范、链路追踪与幂等消费。",
    "core": [
      "事件发布-订阅，生产消费双方解耦",
      "适合跨服务异步集成与实时流处理",
      "代价：流程隐式，需事件规范与追踪"
    ],
    "applications": [
      "支付服务发布「支付成功」事件，通知/积分服务订阅响应",
      "用 Kafka 流式处理用户行为埋点数据"
    ],
    "misconceptions": [
      "事件驱动不等于消息队列：MQ 是实现手段，EDA 是架构思想"
    ],
    "references": [
      "在微服务（集成事件）之间实现基于事件的通信 - Microsoft"
    ],
    "sources": [
      "https://learn.microsoft.com/zh-cn/dotnet/architecture/microservices/multi-container-microservice-net-applications/integration-event-based-microservice-communications"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "message-queue",
        "note": ""
      },
      {
        "type": "related",
        "target": "microservices",
        "note": ""
      },
      {
        "type": "related",
        "target": "distributed-transaction",
        "note": ""
      },
      {
        "type": "related",
        "target": "idempotency",
        "note": ""
      },
      {
        "type": "related",
        "target": "coroutine",
        "note": ""
      },
      {
        "type": "related",
        "target": "functional-programming",
        "note": ""
      }
    ]
  },
  {
    "id": "functional-programming",
    "name": "函数式编程",
    "aliases": [
      "FP",
      "Functional Programming",
      "函数式"
    ],
    "field": "计算机术语",
    "tags": [
      "编程范式",
      "编程语言"
    ],
    "difficulty": 4,
    "summary": "以纯函数与不可变数据为核心的编程范式",
    "definition": "函数式编程（Functional Programming，FP）是以「函数」为第一等公民的编程范式，强调纯函数（无副作用、输入输出确定）、不可变数据、高阶函数与函数组合。代表语言有 Haskell、Erlang、Clojure；JavaScript、Python、Java 也引入 map/filter/reduce、Lambda、Stream 等特性。优点是易测试、可预测、利于并行。",
    "core": [
      "纯函数：无副作用，输入输出确定",
      "不可变数据与高阶函数、组合",
      "逻辑可预测、易测试、利于并行"
    ],
    "applications": [
      "用 map/filter/reduce 链式处理集合数据",
      "React 的纯组件与不可变状态管理"
    ],
    "misconceptions": [
      "函数式不是「不用变量」，而是避免可变状态与副作用"
    ],
    "references": [
      "函数式编程 - 维基百科"
    ],
    "sources": [
      "https://zh.wikipedia.org/wiki/函数式编程"
    ],
    "searchedAt": "2026-08-14",
    "domain": "计算机术语",
    "relations": [
      {
        "type": "related",
        "target": "closure",
        "note": ""
      },
      {
        "type": "related",
        "target": "generics",
        "note": ""
      },
      {
        "type": "related",
        "target": "event-driven",
        "note": ""
      }
    ]
  }
];
