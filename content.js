/* ============================================================
   content.js — весь текст портфолио в одном месте.
   Правьте здесь: тексты (RU/EN), проекты, стек, контакты.
   ============================================================ */

window.SITE = {
  github: "votsie",
  contacts: {
    telegram: "https://t.me/votsi_e",
    email: "aafeklisto@gmail.com",
    github: "https://github.com/votsie",
    habr: "https://career.habr.com/votsi",
    vk: "https://vk.com/votsi_e",
  },

  /* ---------- Переводы интерфейса ---------- */
  i18n: {
    ru: {
      "meta.title": "Алексей Феклистов — AI-инженер, Fullstack и DevOps",
      "meta.desc":
        "Строю продукты от идеи до продакшена: MCP-серверы для AI-агентов, веб-платформы, платёжные интеграции и инфраструктура. Открыт к проектам и офферам.",
      "nav.work": "Проекты",
      "nav.services": "Услуги",
      "nav.process": "Как работаю",
      "nav.stack": "Стек",
      "nav.contact": "Контакты",
      "nav.cta": "Написать",
      "hero.status": "Открыт к проектам и офферам",
      "hero.kicker": "AI-инженер · Fullstack · DevOps",
      "hero.title.a": "Строю продукты",
      "hero.title.b": "от идеи до прода",
      "hero.title.c": "с AI-агентами в цикле разработки.",
      "hero.lead":
        "Меня зовут Алексей Феклистов (VOTSI). Пишу MCP-серверы и инструменты для агентов, собираю веб-платформы и платёжные интеграции, держу инфраструктуру. Один человек — полный цикл: архитектура, код, деплой, поддержка.",
      "hero.cta.primary": "Обсудить задачу",
      "hero.cta.secondary": "Смотреть проекты",
      "hero.cta.github": "GitHub",
      "hero.terminal.title": "claude — ssh-mcp · prod-nl4",
      "stats.repos": "репозиториев на GitHub",
      "stats.mcp": "MCP-сервера для AI-агентов",
      "stats.sdk": "языков в одном SDK",
      "stats.cycle": "полный цикл: идея → прод",
      "services.kicker": "Что я делаю",
      "services.title": "Четыре роли, один человек",
      "services.lead":
        "Не передаю задачу между отделами: сам проектирую, пишу, разворачиваю и поддерживаю. Поэтому быстро и без потерь на стыках.",
      "svc.ai.title": "AI Engineering",
      "svc.ai.text":
        "MCP-серверы, скиллы и агентные пайплайны для Claude Code, Codex, Cursor. Интеграция LLM в продукт: RAG, tool use, автоматизация рутины и поддержки.",
      "svc.web.title": "Fullstack Web",
      "svc.web.text":
        "React / Vite / TypeScript на фронте, Python (Django, FastAPI, Flask) и Go на бэке, PostgreSQL и Redis. Маркетплейсы, личные кабинеты, Telegram Mini Apps, платежи.",
      "svc.ops.title": "DevOps & Infra",
      "svc.ops.text":
        "Docker, Nginx, CI/CD, Linux-серверы. Мониторинг на Zabbix и Grafana, VPN-инфраструктура (Xray, AmneziaWG, Marzban), бэкапы, безопасность и SLA.",
      "svc.vibe.title": "AI-native delivery",
      "svc.vibe.text":
        "Работаю в связке с агентами: спецификация → генерация → тесты → ревью. MVP за дни, а не недели, и код, который потом можно поддерживать.",
      "work.kicker": "Проекты",
      "work.title": "Избранные работы",
      "work.lead":
        "Открытый код лежит на GitHub — звёзды подтягиваются живьём. Коммерческие проекты описаны без закрытых деталей.",
      "filter.all": "Все",
      "filter.ai": "AI-агенты",
      "filter.web": "Web & продукты",
      "filter.ops": "DevOps & инфра",
      "filter.oss": "Open source",
      "work.more": "Ещё на GitHub",
      "badge.oss": "Open source",
      "badge.private": "Закрытый код",
      "badge.commercial": "Коммерческий",
      "card.repo": "Репозиторий",
      "card.live": "Открыть",
      "process.kicker": "Как работаю",
      "process.title": "Прозрачный процесс без сюрпризов",
      "process.lead": "Для заказчиков — чёткие этапы и понятная стоимость. Для команд — привычный инженерный ритм: PR, ревью, CI.",
      "step1.title": "Созвон и цель",
      "step1.text": "30 минут: что нужно бизнесу, какие ограничения, что уже есть. Говорю честно, если задача решается проще.",
      "step2.title": "Спецификация и оценка",
      "step2.text": "Короткий документ: архитектура, стек, этапы, сроки, цена. Фиксируем, что считаем результатом.",
      "step3.title": "Разработка с демо",
      "step3.text": "Работа в репозитории заказчика, регулярные демо, тесты и CI с первого дня. Никаких «покажу в конце».",
      "step4.title": "Деплой и поддержка",
      "step4.text": "Разворачиваю на вашей инфраструктуре или своей, передаю доступы и документацию, остаюсь на поддержке.",
      "stack.kicker": "Стек",
      "stack.title": "Инструменты, в которых я уверен",
      "stack.ai": "AI & агенты",
      "stack.backend": "Backend",
      "stack.frontend": "Frontend",
      "stack.data": "Данные",
      "stack.ops": "DevOps & инфра",
      "stack.other": "Ещё",
      "about.kicker": "О себе",
      "about.title": "От системного администратора до AI-инженера",
      "about.p1":
        "Начинал с администрирования Linux- и Windows-серверов, сетей и кассового ПО: настраивал мониторинг на Zabbix и Grafana, интегрировал Честный Знак, оптимизировал PostgreSQL и MySQL. Там же научился главному — держать прод живым и понимать, что ломается на самом деле.",
      "about.p2":
        "Потом ушёл в разработку: Flask и Django, затем React и TypeScript, Go для нативных приложений. С появлением агентов перестроил процесс целиком — теперь пишу инструменты для самих агентов (MCP-серверы, скиллы) и строю продукты в связке с ними в разы быстрее.",
      "about.p3":
        "Ищу: интересные заказы и позицию в сильной инженерной команде — AI engineering, platform или fullstack. Готов к релокации и удалёнке, работаю на русском и английском.",
      "about.now": "Сейчас",
      "about.now.text": "Открыт к проектам и full-time",
      "about.location": "Локация",
      "about.location.text": "Россия · удалённо · готов к релокации",
      "about.langs": "Языки",
      "about.langs.text": "Русский — родной, английский — рабочий",
      "contact.kicker": "Контакты",
      "contact.title": "Давайте сделаем что-то полезное",
      "contact.lead":
        "Быстрее всего — Telegram. Опишите задачу в двух предложениях, отвечу в тот же день.",
      "contact.tg": "Написать в Telegram",
      "contact.mail": "Написать на почту",
      "contact.copy": "Скопировать e-mail",
      "contact.copied": "Скопировано",
      "footer.text": "Сделано вручную и с агентами. Код сайта открыт на GitHub.",
      "footer.top": "Наверх",
    },
    en: {
      "meta.title": "Aleksei Feklistov — AI Engineer, Fullstack & DevOps",
      "meta.desc":
        "I build products from idea to production: MCP servers for AI agents, web platforms, payment integrations and infrastructure. Open to projects and offers.",
      "nav.work": "Work",
      "nav.services": "Services",
      "nav.process": "Process",
      "nav.stack": "Stack",
      "nav.contact": "Contact",
      "nav.cta": "Get in touch",
      "hero.status": "Open to projects and offers",
      "hero.kicker": "AI Engineer · Fullstack · DevOps",
      "hero.title.a": "I build products",
      "hero.title.b": "from idea to production",
      "hero.title.c": "with AI agents in the loop.",
      "hero.lead":
        "I'm Aleksei Feklistov (VOTSI). I write MCP servers and tooling for agents, ship web platforms and payment integrations, and run the infrastructure behind them. One engineer, full cycle: architecture, code, deploy, support.",
      "hero.cta.primary": "Discuss a project",
      "hero.cta.secondary": "See the work",
      "hero.cta.github": "GitHub",
      "hero.terminal.title": "claude — ssh-mcp · prod-nl4",
      "stats.repos": "repositories on GitHub",
      "stats.mcp": "MCP servers for AI agents",
      "stats.sdk": "languages, one SDK",
      "stats.cycle": "full cycle: idea → prod",
      "services.kicker": "What I do",
      "services.title": "Four roles, one engineer",
      "services.lead":
        "No hand-offs between departments: I design, build, deploy and support it myself. That's why it's fast and nothing gets lost at the seams.",
      "svc.ai.title": "AI Engineering",
      "svc.ai.text":
        "MCP servers, skills and agentic pipelines for Claude Code, Codex, Cursor. LLMs inside the product: RAG, tool use, automating routine work and support.",
      "svc.web.title": "Fullstack Web",
      "svc.web.text":
        "React / Vite / TypeScript on the front, Python (Django, FastAPI, Flask) and Go on the back, PostgreSQL and Redis. Marketplaces, dashboards, Telegram Mini Apps, payments.",
      "svc.ops.title": "DevOps & Infra",
      "svc.ops.text":
        "Docker, Nginx, CI/CD, Linux servers. Monitoring with Zabbix and Grafana, VPN infrastructure (Xray, AmneziaWG, Marzban), backups, security and SLAs.",
      "svc.vibe.title": "AI-native delivery",
      "svc.vibe.text":
        "I work with agents in the loop: spec → generate → test → review. MVPs in days, not weeks, and code you can actually maintain afterwards.",
      "work.kicker": "Work",
      "work.title": "Selected projects",
      "work.lead":
        "Open source lives on GitHub — star counts are fetched live. Commercial work is described without confidential details.",
      "filter.all": "All",
      "filter.ai": "AI agents",
      "filter.web": "Web & products",
      "filter.ops": "DevOps & infra",
      "filter.oss": "Open source",
      "work.more": "More on GitHub",
      "badge.oss": "Open source",
      "badge.private": "Closed source",
      "badge.commercial": "Commercial",
      "card.repo": "Repository",
      "card.live": "Open",
      "process.kicker": "Process",
      "process.title": "A transparent process, no surprises",
      "process.lead": "For clients: clear stages and a clear price. For teams: the usual engineering rhythm — PRs, reviews, CI.",
      "step1.title": "Call and goal",
      "step1.text": "30 minutes: what the business needs, the constraints, what already exists. I'll say so if there's a simpler way.",
      "step2.title": "Spec and estimate",
      "step2.text": "A short document: architecture, stack, milestones, timeline, price. We agree on what counts as done.",
      "step3.title": "Build with demos",
      "step3.text": "Work in your repository, regular demos, tests and CI from day one. No “I'll show you at the end”.",
      "step4.title": "Deploy and support",
      "step4.text": "Deployed on your infrastructure or mine, access and docs handed over, and I stay on for support.",
      "stack.kicker": "Stack",
      "stack.title": "Tools I'm confident in",
      "stack.ai": "AI & agents",
      "stack.backend": "Backend",
      "stack.frontend": "Frontend",
      "stack.data": "Data",
      "stack.ops": "DevOps & infra",
      "stack.other": "Also",
      "about.kicker": "About",
      "about.title": "From sysadmin to AI engineer",
      "about.p1":
        "I started by administering Linux and Windows servers, networks and point-of-sale software: monitoring with Zabbix and Grafana, integrations with the national product-labeling system, tuning PostgreSQL and MySQL. That's where I learned the essential skill — keeping production alive and understanding what actually breaks.",
      "about.p2":
        "Then I moved into development: Flask and Django, later React and TypeScript, Go for native apps. When agents arrived I rebuilt my whole process — now I write tooling for the agents themselves (MCP servers, skills) and build products with them several times faster.",
      "about.p3":
        "Looking for: interesting contracts and a role in a strong engineering team — AI engineering, platform or fullstack. Open to relocation and remote, working in Russian and English.",
      "about.now": "Now",
      "about.now.text": "Open to projects and full-time roles",
      "about.location": "Location",
      "about.location.text": "Russia · remote · open to relocation",
      "about.langs": "Languages",
      "about.langs.text": "Russian — native, English — working",
      "contact.kicker": "Contact",
      "contact.title": "Let's build something useful",
      "contact.lead": "Telegram is fastest. Describe the task in two sentences and I'll reply the same day.",
      "contact.tg": "Message on Telegram",
      "contact.mail": "Send an email",
      "contact.copy": "Copy e-mail",
      "contact.copied": "Copied",
      "footer.text": "Built by hand and with agents. The site's source is on GitHub.",
      "footer.top": "Back to top",
    },
  },

  /* ---------- Строки «терминала» в hero ---------- */
  terminal: {
    ru: [
      { t: "cmd", s: "claude" },
      { t: "user", s: "подключись к prod-nl4 и посмотри, почему nginx отдаёт 502" },
      { t: "tool", s: "ssh-mcp · connected · Debian 12 · uptime 41d" },
      { t: "tool", s: "systemctl status nginx → active; upstream app:8000 → down" },
      { t: "tool", s: "docker compose ps → app exited (137, OOM)" },
      { t: "tool", s: "raised mem limit 512m→1g · docker compose up -d app" },
      { t: "ok", s: "curl -I https://prod-nl4 → 200 OK · алерт в Grafana закрыт" },
    ],
    en: [
      { t: "cmd", s: "claude" },
      { t: "user", s: "connect to prod-nl4 and find out why nginx returns 502" },
      { t: "tool", s: "ssh-mcp · connected · Debian 12 · uptime 41d" },
      { t: "tool", s: "systemctl status nginx → active; upstream app:8000 → down" },
      { t: "tool", s: "docker compose ps → app exited (137, OOM)" },
      { t: "tool", s: "raised mem limit 512m→1g · docker compose up -d app" },
      { t: "ok", s: "curl -I https://prod-nl4 → 200 OK · Grafana alert resolved" },
    ],
  },

  /* ---------- Стек ---------- */
  stack: {
    ai: ["MCP", "Claude Code", "Codex CLI", "Anthropic API", "OpenAI API", "RAG", "Tool use", "Agent skills"],
    backend: ["Python", "FastAPI", "Django", "Flask", "Go", "Node.js", "TypeScript", "REST", "Webhooks"],
    frontend: ["React", "Vite", "TypeScript", "Tailwind", "Telegram Mini Apps", "HTML/CSS"],
    data: ["PostgreSQL", "MySQL", "Redis", "SQLite", "Elasticsearch"],
    ops: ["Docker", "Nginx", "Linux", "CI/CD (GitHub Actions)", "Zabbix", "Grafana", "Xray", "AmneziaWG", "Marzban", "Vercel"],
    other: ["Payments (WATA, SBP, Telegram Stars)", "Bitrix24 API", "Windows desktop (Go, PyInstaller, Inno Setup)", "Selenium"],
  },

  /* ---------- Проекты ----------
     cat: ai | web | ops   (можно несколько)
     kind: oss | private | commercial
     repo: "owner/name" — для живых звёзд
  ------------------------------- */
  projects: [
    {
      id: "ssh-mcp",
      featured: true,
      cat: ["ai", "ops"],
      kind: "oss",
      repo: "votsie/ssh-mcp",
      url: "https://github.com/votsie/ssh-mcp",
      tags: ["Python", "MCP", "SSH", "SFTP", "Claude Code plugin"],
      ru: {
        title: "ssh-mcp",
        tagline: "Серверы по SSH для любого AI-агента",
        text:
          "MCP-сервер, через который Claude Code, Codex, Cursor или Zed управляют серверами: интерактивная консоль с эмуляцией терминала (htop, nano, whiptail читаются как экран, а не как ESC-каша), обмен файлами, локальные, удалённые и SOCKS5-туннели, память о серверах между перезапусками. Ставится одной командой через uvx; для Claude Code — плагином с тремя скиллами.",
        highlights: ["Работа без конфига: агент подключается и сам предлагает имя серверу", "Одни и те же руководства раздаются всем клиентам тремя способами", "Нулевое загрязнение системы: uv ставит всё в изолированное окружение"],
      },
      en: {
        title: "ssh-mcp",
        tagline: "Servers over SSH for any AI agent",
        text:
          "An MCP server that lets Claude Code, Codex, Cursor or Zed manage servers: an interactive console with terminal emulation (htop, nano, whiptail render as a readable screen instead of escape-sequence soup), file transfer, local, remote and SOCKS5 tunnels, and server memory that survives restarts. Installs with one uvx command; for Claude Code, as a plugin with three skills.",
        highlights: ["Zero config: the agent connects first, then offers to name the server", "The same guides are delivered to every client in three ways", "Nothing leaks into the system: uv installs into an isolated environment"],
      },
    },
    {
      id: "wata-mcp",
      featured: true,
      cat: ["ai", "web"],
      kind: "oss",
      repo: "votsie/wata-mcp",
      url: "https://github.com/votsie/wata-mcp",
      tags: ["TypeScript", "Node 20", "MCP", "Payments", "2FA"],
      ru: {
        title: "wata-mcp",
        tagline: "Платёжная система в руках агента",
        text:
          "MCP-сервер и набор скиллов, дающие AI-агенту доступ к платёжной системе wata.pro: кабинет мерчанта (кошелёк, выплаты, терминалы, транзакции, чарджбеки, поддержка) и публичный API эквайринга и цифровых товаров. Работает в Claude Code, Codex CLI и Antigravity, установщик сам находит агентов и прописывает конфиги. Вход с 2FA по почте — в том числе неинтерактивно для CI.",
        highlights: ["Кабинет через сессию там, где публичного API нет", "Одна команда установки, `doctor` для диагностики", "Сессия живёт 60 дней и продлевается сама"],
      },
      en: {
        title: "wata-mcp",
        tagline: "A payment system in the agent's hands",
        text:
          "An MCP server and skill set giving an AI agent access to the wata.pro payment platform: the merchant dashboard (wallet, payouts, terminals, transactions, chargebacks, support) and the public acquiring and digital-goods API. Works in Claude Code, Codex CLI and Antigravity; the installer detects agents and writes their configs. Email 2FA login, including a non-interactive mode for CI.",
        highlights: ["Dashboard via session where no public API exists", "One-command install, `doctor` for diagnostics", "Sessions live 60 days and renew themselves"],
      },
    },
    {
      id: "otus",
      featured: true,
      cat: ["web", "ops"],
      kind: "commercial",
      image: "assets/img/otus.png",
      tags: ["Python", "Flask", "PostgreSQL", "Redis", "Docker", "Nginx", "Zabbix", "Grafana"],
      ru: {
        title: "OTUS — движок цифровых магазинов",
        tagline: "CMS для игровых маркетплейсов и доната",
        text:
          "Универсальная платформа для магазинов цифровых товаров: мультивендорный маркетплейс, магазин с единым продавцом и штатом сотрудников или встраиваемое решение для разработчиков игр. Безопасные транзакции, управление аккаунтами, автоматическое пополнение игровых балансов, аналитика продаж и активности. Поставляется как Docker-контейнер на выделенный сервер, мониторинг из коробки.",
        highlights: ["Три модели использования на одной кодовой базе", "Автоматизация пополнений через вебхуки", "Продовый мониторинг Zabbix + Grafana"],
      },
      en: {
        title: "OTUS — digital store engine",
        tagline: "CMS for game marketplaces and top-ups",
        text:
          "A universal platform for digital-goods stores: a multi-vendor marketplace, a single-seller shop with staff, or an embeddable solution for game developers. Secure transactions, account management, automated in-game balance top-ups, sales and activity analytics. Ships as a Docker container for a dedicated server with monitoring out of the box.",
        highlights: ["Three business models on one codebase", "Top-up automation via webhooks", "Production monitoring with Zabbix + Grafana"],
      },
    },
    {
      id: "wata-sdk",
      cat: ["web"],
      kind: "oss",
      repo: "votsie/wata-sdk",
      url: "https://github.com/votsie/wata-sdk",
      tags: ["TypeScript", "Python", "Go", "Java", ".NET"],
      ru: {
        title: "wata-sdk",
        tagline: "Один SDK, пять языков",
        text:
          "Клиентские библиотеки для wata.pro на Node/TypeScript, Python, Go, Java и .NET с одинаковой архитектурой. Полный API эквайринга (СБП, T-Pay, карты, возвраты) и цифровых товаров (Steam, Telegram Stars, ваучеры), проверка подписи вебхуков SHA512withRSA, типизированные ошибки, ретраи с экспоненциальной задержкой, курсорная пагинация. Подводные камни интеграции зашиты в поведение библиотек.",
      },
      en: {
        title: "wata-sdk",
        tagline: "One SDK, five languages",
        text:
          "Client libraries for wata.pro in Node/TypeScript, Python, Go, Java and .NET, all with the same architecture. Full acquiring API (SBP, T-Pay, cards, refunds) and digital goods (Steam, Telegram Stars, vouchers), SHA512withRSA webhook signature verification, typed errors, exponential-backoff retries, cursor pagination. Integration pitfalls are baked into library behaviour.",
      },
    },
    {
      id: "b24notify",
      cat: ["web"],
      kind: "oss",
      repo: "votsie/b24notify",
      url: "https://github.com/votsie/b24notify",
      tags: ["Go", "Windows", "Bitrix24", "OAuth", "DPAPI"],
      ru: {
        title: "b24notify",
        tagline: "Нативные уведомления Bitrix24 для Windows",
        text:
          "Десктопное приложение на Go для Windows 7–11: карточки сообщений и событий в углу экрана, клик открывает нужный диалог в Bitrix24 Desktop по deep-link. OAuth-вход через портал, зашифрованная история с поиском (DPAPI), трей-меню, тёмная и светлая темы, RU/EN. Интерфейс нарисован самой программой — один exe без зависимостей.",
      },
      en: {
        title: "b24notify",
        tagline: "Native Bitrix24 notifications for Windows",
        text:
          "A Go desktop app for Windows 7–11: message and event cards in the corner of the screen, a click opens the right dialog in Bitrix24 Desktop via deep link. OAuth login through the portal, encrypted searchable history (DPAPI), tray menu, dark and light themes, RU/EN. The UI is drawn by the app itself — a single exe with no dependencies.",
      },
    },
    {
      id: "vpn-platform",
      cat: ["ops"],
      kind: "private",
      tags: ["Xray", "Marzban", "AmneziaWG", "Go", "Python", "Linux"],
      ru: {
        title: "VPN-платформа",
        tagline: "Серверы, панели, клиенты, диагностика",
        text:
          "Инфраструктура VPN-сервиса под ключ: серверная часть на Xray, две независимые панели Marzban с выходом через AmneziaWG, SOCKS5-шлюз поверх нескольких туннелей с веб-интерфейсом и диагностикой, клиентские приложения и автоматизация деплоя. Закрытый код по договору.",
      },
      en: {
        title: "VPN platform",
        tagline: "Servers, panels, clients, diagnostics",
        text:
          "Turnkey VPN service infrastructure: an Xray server side, two independent Marzban panels egressing through AmneziaWG, a SOCKS5 gateway over multiple tunnels with a web UI and diagnostics, client apps and deployment automation. Closed source under contract.",
      },
    },
    {
      id: "eifa-market",
      cat: ["web"],
      kind: "commercial",
      tags: ["TypeScript", "React", "Python", "PostgreSQL", "Telegram", "Payments"],
      ru: {
        title: "Маркетплейс пополнения игр",
        tagline: "Каталог, оплата, автовыдача, боты",
        text:
          "Маркетплейс цифровых товаров и пополнений игр: каталог, оплата картами, СБП и Telegram Stars, автоматическая выдача, личный кабинет, админка и аналитика. Рядом — Telegram-бот, сервис рассылок и автоматизация закупок. React + TypeScript на фронте, Python-сервисы на бэке, деплой на Vercel и собственных серверах.",
      },
      en: {
        title: "Game top-up marketplace",
        tagline: "Catalog, payments, auto-delivery, bots",
        text:
          "A marketplace for digital goods and game top-ups: catalog, card, SBP and Telegram Stars payments, automatic delivery, user dashboard, admin panel and analytics. Alongside it: a Telegram bot, a broadcast service and purchasing automation. React + TypeScript front end, Python services on the back, deployed to Vercel and own servers.",
      },
    },
    {
      id: "ftp-sync",
      cat: ["ops"],
      kind: "oss",
      repo: "votsie/FTP_SYNC",
      url: "https://github.com/votsie/FTP_SYNC",
      tags: ["Python", "Windows service", "FTP", "REST API", "Inno Setup"],
      ru: {
        title: "FTP Sync Server",
        tagline: "Фоновая синхронизация файлов для Windows",
        text:
          "Локальный FTP-сервер, который автоматически зеркалирует принятые файлы на удалённый FTP. Три режима: мгновенный watchdog, периодическая выгрузка и полное зеркалирование с удалением orphan-файлов. REST API для мониторинга, отдельный процесс-сторож, трей-иконка, графический установщик.",
      },
      en: {
        title: "FTP Sync Server",
        tagline: "Background file sync for Windows",
        text:
          "A local FTP server that automatically mirrors received files to a remote FTP. Three modes: instant watchdog, periodic upload and full mirroring with orphan cleanup. REST API for monitoring, a separate watchdog process, tray icon, graphical installer.",
      },
    },
    {
      id: "eifavpn",
      cat: ["web"],
      kind: "oss",
      repo: "votsie/eifavpn-frontend",
      url: "https://github.com/votsie/eifavpn-frontend",
      url2: "https://github.com/votsie/eifavpn-backend",
      tags: ["Django", "React", "Vite", "REST"],
      ru: {
        title: "EIFAVPN — кабинет клиента",
        tagline: "Django REST + React",
        text:
          "Личный кабинет VPN-сервиса: бэкенд на Django с REST API, фронтенд на React и Vite. Подписки, выдача конфигов, история оплат. Открытый код обеих частей.",
      },
      en: {
        title: "EIFAVPN — customer dashboard",
        tagline: "Django REST + React",
        text:
          "A VPN service customer area: a Django REST back end and a React + Vite front end. Subscriptions, config delivery, payment history. Both halves are open source.",
      },
    },
    {
      id: "obgs",
      cat: ["web"],
      kind: "private",
      image: "assets/img/obgs.png",
      tags: ["Python", "Flask", "PostgreSQL", "Docker", "Nginx"],
      ru: {
        title: "OBGS — генератор бейджей",
        tagline: "QR-бейджи из базы продавцов",
        text:
          "Веб-система генерации и учёта бейджей с QR-кодами: данные берутся из базы, бейдж собирается автоматически, верификация по QR. Аутентификация, HTTPS, контейнеризация для развёртывания в одну команду.",
      },
      en: {
        title: "OBGS — badge generator",
        tagline: "QR badges from a seller database",
        text:
          "A web system for generating and tracking QR-code badges: data comes from the database, badges are assembled automatically, verification by QR. Authentication, HTTPS, containerised for one-command deployment.",
      },
    },
    {
      id: "orms",
      cat: ["ops"],
      kind: "private",
      tags: ["Python", "Monitoring", "Retail", "Auth"],
      ru: {
        title: "ORMS — мониторинг Честного Знака",
        tagline: "Контроль локальных модулей в сети магазинов",
        text:
          "Система мониторинга локального модуля Честного Знака для розничной сети: проверка статусов модулей, управление списком магазинов, интеграция с ЛМ ЧЗ, безопасная аутентификация. Плюс скрипт автоматической установки модуля на новые точки.",
      },
      en: {
        title: "ORMS — product-labeling monitor",
        tagline: "Watching local modules across a retail chain",
        text:
          "A monitoring system for the national product-labeling local module across a retail chain: module status checks, store list management, integration with the module's API, secure authentication. Plus an auto-install script for new locations.",
      },
    },
  ],
};
