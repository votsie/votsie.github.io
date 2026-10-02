/* ============================================================
   VOTSI portfolio — behaviour
   ============================================================ */
(function () {
  "use strict";
  const S = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- language ---------- */
  const LANGS = ["ru", "en"];
  function detectLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(q)) return q;
    try {
      const saved = localStorage.getItem("lang");
      if (LANGS.includes(saved)) return saved;
    } catch (_) {}
    return (navigator.language || "ru").toLowerCase().startsWith("ru") ? "ru" : "en";
  }
  let lang = detectLang();
  const t = (key) => (S.i18n[lang] && S.i18n[lang][key]) || S.i18n.ru[key] || key;

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = t("meta.title");
    const md = $('meta[name="description"]');
    if (md) md.content = t("meta.desc");
    const search = $("#projectSearch");
    if (search) search.placeholder = t("search.placeholder");
    $$("[data-i18n]").forEach((el) => {
      const val = t(el.dataset.i18n);
      if (val !== undefined) el.textContent = val;
    });
    $$(".lang-btn").forEach((b) => b.classList.toggle("is-active", b.dataset.lang === lang));
    try { localStorage.setItem("lang", lang); } catch (_) {}
    renderProjects();
    renderStack();
    runTerminal();
  }
  $$(".lang-btn").forEach((b) =>
    b.addEventListener("click", () => {
      if (b.dataset.lang === lang) return;
      lang = b.dataset.lang;
      applyLang();
    })
  );

  /* ---------- projects ---------- */
  let activeFilter = "featured";
  const starCache = {};

  function projectArt(p) {
    if (p.image) return `<img src="${p.image}" alt="" loading="lazy">`;
    const name = p[lang].title.split(/[\s—]/)[0];
    const label = p.cat.includes("ai") ? "AI" : p.cat.includes("ops") ? "infra" : "web";
    return `<div class="project-art"><div class="glyph">${esc(name)}<small>${label}</small></div></div>`;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function projectCard(p) {
    const L = p[lang];
    const badge =
      p.kind === "oss" ? `<span class="badge badge-oss">${t("badge.oss")}</span>` :
      p.kind === "commercial" ? `<span class="badge badge-commercial">${t("badge.commercial")}</span>` :
      `<span class="badge">${t("badge.private")}</span>`;
    const stars = p.repo
      ? `<span class="stars" data-repo="${p.repo}"${starCache[p.repo] == null ? ' hidden' : ''}><svg viewBox="0 0 24 24"><path d="m12 17.3 6.2 3.7-1.6-7 5.4-4.7-7.2-.6L12 2 9.2 8.7 2 9.3l5.4 4.7-1.6 7z"/></svg>${starCache[p.repo] ?? ""}</span>`
      : "";
    const highlights = L.highlights
      ? `<ul class="project-highlights">${L.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>`
      : "";
    const links = [];
    const linkLabel = (url) => /frontend$/i.test(url) ? "Frontend" : /backend$/i.test(url) ? "Backend" : t("card.repo");
    if (p.url) links.push(`<a href="${p.url}" target="_blank" rel="noopener">${linkLabel(p.url)}</a>`);
    if (p.url2) links.push(`<a href="${p.url2}" target="_blank" rel="noopener">${linkLabel(p.url2)}</a>`);
    if (p.live) links.push(`<a href="${p.live}" target="_blank" rel="noopener">${t("card.live")}</a>`);
    const details = L.problem ? `<details class="project-case"><summary>${esc(t("case.title"))}</summary><p><strong>${esc(t("case.problem"))}</strong> ${esc(L.problem)}</p><p><strong>${esc(t("case.solution"))}</strong> ${esc(L.solution || L.text)}</p></details>` : "";
    return `
      <article class="card project reveal${p.featured ? " is-featured" : ""}" data-cat="${p.cat.join(" ")}" data-kind="${p.kind}" data-featured="${!!p.featured}" data-search="${esc([p.ru.title, p.en.title, p.ru.text, p.en.text, ...p.tags].join(' ').toLocaleLowerCase())}">
        <div class="project-media">${projectArt(p)}</div>
        <div class="project-body">
          <div class="project-top">${badge}${stars}</div>
          <h3>${esc(L.title)}</h3>
          <p class="project-tagline">${esc(L.tagline)}</p>
          <p class="project-text">${esc(L.text)}</p>
          ${highlights}
          ${details}
          <div class="tags">${p.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
          ${links.length ? `<div class="project-links">${links.join("")}</div>` : ""}
        </div>
      </article>`;
  }

  function renderProjects() {
    const root = $("#projects");
    if (!root) return;
    root.innerHTML = S.projects.map(projectCard).join("");
    applyFilter();
    observeReveal(root);
  }

  function applyFilter() {
    const query = ($("#projectSearch")?.value || "").trim().toLocaleLowerCase();
    let count = 0;
    $$(".project").forEach((el) => {
      const categoryMatch =
        activeFilter === "all" ||
        (activeFilter === "featured" ? el.dataset.featured === "true" : activeFilter === "oss" ? el.dataset.kind === "oss" : el.dataset.cat.split(" ").includes(activeFilter));
      const show = categoryMatch && (!query || el.dataset.search.includes(query));
      el.classList.toggle("is-hidden", !show);
      if (show) count++;
    });
    const status = $("#resultCount");
    if (status) status.textContent = lang === "ru" ? `Показано: ${count} из ${S.projects.length}` : `Showing ${count} of ${S.projects.length}`;
    const empty = $("#emptyResults");
    if (empty) empty.hidden = count > 0;
    $$(".chip[data-filter]").forEach((c) => {
      c.classList.toggle("is-active", c.dataset.filter === activeFilter);
      c.setAttribute("aria-pressed", String(c.dataset.filter === activeFilter));
    });
  }
  $$(".chip[data-filter]").forEach((chip) =>
    chip.addEventListener("click", () => {
      activeFilter = chip.dataset.filter;
      $$(".chip[data-filter]").forEach((c) => c.classList.toggle("is-active", c === chip));
      applyFilter();
    })
  );
  $("#projectSearch")?.addEventListener("input", () => {
    activeFilter = "all";
    applyFilter();
  });

  /* ---------- live GitHub data ---------- */
  async function loadGitHub() {
    const key = "gh:" + S.github;
    let repos = null;
    try {
      const cached = JSON.parse(sessionStorage.getItem(key) || "null");
      if (cached && Date.now() - cached.at < 30 * 60 * 1000) repos = cached.repos;
    } catch (_) {}
    if (!repos) {
      try {
        const r = await fetch(`https://api.github.com/users/${S.github}/repos?per_page=100&type=owner`, {
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!r.ok) return;
        repos = (await r.json()).map((x) => ({ n: x.full_name, s: x.stargazers_count }));
        try { sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), repos })); } catch (_) {}
      } catch (_) { return; }
    }
    repos.forEach((r) => (starCache[r.n] = r.s));
    $$(".stars[data-repo]").forEach((el) => {
      const n = starCache[el.dataset.repo];
      if (n == null) return;
      el.hidden = false;
      el.lastChild.nodeType === 3 ? (el.lastChild.textContent = n) : el.append(String(n));
    });
  }

  /* ---------- stack ---------- */
  function renderStack() {
    const root = $("#stackGrid");
    if (!root) return;
    root.innerHTML = Object.entries(S.stack)
      .map(
        ([k, items]) => `
        <div class="card stack-group reveal">
          <h3>${t("stack." + k)}</h3>
          <div class="stack-tags">${items.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
        </div>`
      )
      .join("");
    observeReveal(root);
  }

  /* ---------- terminal ---------- */
  let termTimer = null;
  function runTerminal() {
    const el = $("#terminal");
    if (!el) return;
    clearTimeout(termTimer);
    el.innerHTML = "";
    const lines = S.terminal[lang] || S.terminal.ru;
    if (reduced) {
      el.innerHTML = lines.map((l) => `<span class="l l-${l.t}">${esc(l.s)}</span>`).join("");
      return;
    }
    let i = 0;
    const caret = document.createElement("span");
    caret.className = "caret";
    el.append(caret);
    const step = () => {
      if (i >= lines.length) return;
      const l = lines[i++];
      const span = document.createElement("span");
      span.className = `l l-${l.t}`;
      span.textContent = l.s;
      el.insertBefore(span, caret);
      termTimer = setTimeout(step, l.t === "user" ? 900 : l.t === "ok" ? 400 : 650);
    };
    termTimer = setTimeout(step, 500);
  }

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  function observeReveal(root = document) {
    $$(".reveal", root).forEach((el) => io.observe(el));
  }

  /* ---------- nav ---------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const burger = $("#burger");
  const links = $("#navLinks");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    nav.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  $$("a", links).forEach((a) => a.addEventListener("click", () => { links.classList.remove("is-open"); nav.classList.remove("menu-open"); burger.setAttribute("aria-expanded", "false"); }));

  // highlight current section
  const sectionIds = $$("a[href^='#']", links).map((a) => a.getAttribute("href").slice(1));
  const secIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        $$("a", links).forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id));
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sectionIds.forEach((id) => { const s = document.getElementById(id); if (s) secIO.observe(s); });

  /* ---------- cursor glow + card spotlight ---------- */
  const glow = $("#bgCursor");
  if (glow && !reduced && window.matchMedia("(pointer: fine)").matches) {
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
    const tick = () => {
      cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12;
      glow.style.transform = `translate(${cx - 260}px, ${cy - 260}px)`;
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) raf = requestAnimationFrame(tick); else raf = null;
    };
    window.addEventListener("pointermove", (e) => {
      tx = e.clientX; ty = e.clientY; glow.style.opacity = "1";
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: true });
    document.addEventListener("pointermove", (e) => {
      const card = e.target.closest && e.target.closest(".card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    }, { passive: true });
  }

  /* ---------- copy email ---------- */
  const copyBtn = $("#copyMail");
  const toast = document.createElement("div");
  toast.className = "toast";
  document.body.append(toast);
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.mail);
      toast.textContent = t("contact.copied");
      toast.classList.add("is-on");
      setTimeout(() => toast.classList.remove("is-on"), 1600);
    } catch (_) {
      location.href = "mailto:" + copyBtn.dataset.mail;
    }
  });

  /* ---------- misc ---------- */
  $("#year").textContent = new Date().getFullYear();

  applyLang();
  observeReveal();
  loadGitHub().then(() => {
    // update repo count stat if we have a real number
    const n = Object.keys(starCache).length;
    const el = $("#statRepos");
    if (el && n > 0) el.textContent = String(n);
  });
})();
