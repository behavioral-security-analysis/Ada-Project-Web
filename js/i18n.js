(function () {
  const STORAGE_KEY = "ada_lang";
  const DEFAULT_LANG = "tr";

  function getInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && window.LOCALES[saved]) return saved;
    const browser = (navigator.language || "tr").slice(0, 2).toLowerCase();
    return window.LOCALES[browser] ? browser : DEFAULT_LANG;
  }

  let currentLang = getInitialLang();

  function t(key) {
    const parts = key.split(".");
    let node = window.LOCALES[currentLang];
    for (const p of parts) {
      if (node == null) return key;
      node = node[p];
    }
    return node == null ? key : node;
  }

  // Inline alarm-level pill in trigger text
  function badge(level) {
    return `<span class="lvl lvl--${level.toLowerCase()}">${level}</span>`;
  }

  function renderHeroBadges() {
    const el = document.getElementById("hero-badges");
    if (!el) return;
    el.innerHTML = t("hero.badges").map((b) => `<span class="hero__badge">${b}</span>`).join("");
  }

  function renderProblemPoints() {
    const el = document.getElementById("problem-points");
    if (!el) return;
    el.innerHTML = t("problem.points")
      .map(
        (p, i) => `
        <article class="card card--problem">
          <span class="card__num">0${i + 1}</span>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </article>`
      )
      .join("");
  }

  function renderArchStages() {
    const el = document.getElementById("arch-stages");
    if (!el) return;
    const stages = t("architecture.stages");
    el.innerHTML = stages
      .map(
        (s, i) => `
        <div class="pipeline__stage" data-stage="${i}">
          <div class="pipeline__node">
            <span class="pipeline__idx">${String(i + 1).padStart(2, "0")}</span>
            <h4>${s.name}</h4>
            <p class="pipeline__short">${s.short}</p>
            <p class="pipeline__long">${s.long}</p>
          </div>
          ${i < stages.length - 1 ? '<div class="pipeline__arrow" aria-hidden="true">▼</div>' : ""}
        </div>`
      )
      .join("");
  }

  function renderBehaviorCards() {
    const el = document.getElementById("behavior-cards");
    if (!el) return;
    el.innerHTML = t("behaviors.cards")
      .map(
        (b) => `
        <article class="card card--behavior lvl-bg--${b.level.toLowerCase()}">
          <header class="card__head">
            <h3>${b.name}</h3>
            ${badge(b.level)}
          </header>
          <p class="card__trigger"><strong>${b.trigger}</strong></p>
          <p>${b.desc}</p>
        </article>`
      )
      .join("");
  }

  function renderThreatFeatures() {
    const el = document.getElementById("threat-features");
    if (!el) return;
    el.innerHTML = t("threat.features")
      .map((f, i) => `<li><span class="feat__idx">${i}</span><span>${f}</span></li>`)
      .join("");
  }

  function renderMlpLayers() {
    const el = document.getElementById("threat-mlp-layers");
    if (!el) return;
    const layers = t("threat.mlpLayers");
    el.innerHTML = layers
      .map(
        (l, i) => `
        <div class="mlp__layer">${l}</div>
        ${i < layers.length - 1 ? '<div class="mlp__sep">→</div>' : ""}`
      )
      .join("");
  }

  function renderThreatOutputs() {
    const el = document.getElementById("threat-outputs");
    if (!el) return;
    el.innerHTML = t("threat.outputs")
      .map((o) => `<span class="lvl lvl--${o.toLowerCase()}">${o}</span>`)
      .join("");
  }

  function renderTechItems() {
    const el = document.getElementById("tech-items");
    if (!el) return;
    el.innerHTML = t("tech.items")
      .map(
        (it) => `
        <article class="card card--tech">
          <h3>${it.name}</h3>
          <span class="card__role">${it.role}</span>
          <p>${it.desc}</p>
        </article>`
      )
      .join("");
  }

  function renderMetrics() {
    const el = document.getElementById("performance-metrics");
    if (!el) return;
    el.innerHTML = t("performance.metrics")
      .map(
        (m) => `
        <div class="metric" data-target="${m.value}">
          <span class="metric__num">
            <span class="metric__val" data-count="${m.value}">0</span><span class="metric__suffix">${m.suffix}</span>
          </span>
          <span class="metric__label">${m.label}</span>
          <span class="metric__sub">${m.sub}</span>
        </div>`
      )
      .join("");
  }

  const ICONS = {
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3"/></svg>',
    id: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.5"/><path d="M14 10h5M14 13h5M14 16h3"/></svg>',
    balance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 4v16M4 8h16M6 8l-2 6a4 4 0 0 0 8 0L10 8M14 8l-2 6a4 4 0 0 0 8 0l-2-6"/></svg>'
  };

  function renderPrivacyPoints() {
    const el = document.getElementById("privacy-points");
    if (!el) return;
    el.innerHTML = t("privacy.points")
      .map(
        (p) => `
        <article class="card card--privacy">
          <span class="card__icon">${ICONS[p.icon] || ""}</span>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </article>`
      )
      .join("");
  }

  function renderScreenshots() {
    const el = document.getElementById("demo-screenshots");
    if (!el) return;
    el.innerHTML = t("demo.screenshots")
      .map(
        (s) => `
        <figure class="screenshot">
          <!-- DEMO_PLACEHOLDER: gerçek görsel hazır olunca <img src="assets/images/...png" alt="..." /> ekle -->
          <div class="screenshot__placeholder">
            <span>16:9</span>
          </div>
          <figcaption>
            <strong>${s.caption}</strong>
            <span>${s.note}</span>
          </figcaption>
        </figure>`
      )
      .join("");
  }

  function renderTeam() {
    const el = document.getElementById("team-members");
    if (!el) return;
    el.innerHTML = t("team.members")
      .map(
        (m) => {
          const initials = m.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
          return `
        <article class="card card--team">
          <div class="avatar">${initials}</div>
          <h3>${m.name}</h3>
          <span class="card__role">${m.role}</span>
          <p>${m.bio}</p>
          <a class="card__link" href="${m.github}" target="_blank" rel="noopener">GitHub →</a>
        </article>`;
        }
      )
      .join("");
  }

  function applyStaticI18n() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(key);
      if (typeof value === "string") {
        if (el.tagName === "META") {
          el.setAttribute("content", value);
        } else {
          el.textContent = value;
        }
      }
    });
    document.title = t("meta.title");
    document.documentElement.lang = currentLang;
  }

  function renderAll() {
    applyStaticI18n();
    renderHeroBadges();
    renderProblemPoints();
    renderArchStages();
    renderBehaviorCards();
    renderThreatFeatures();
    renderMlpLayers();
    renderThreatOutputs();
    renderTechItems();
    renderMetrics();
    renderPrivacyPoints();
    renderScreenshots();
    renderTeam();
    updateLangSwitchUI();
    document.dispatchEvent(new CustomEvent("i18n:rendered"));
  }

  function updateLangSwitchUI() {
    document.querySelectorAll(".lang-switch__opt").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.lang === currentLang);
    });
  }

  function setLang(lang) {
    if (!window.LOCALES[lang] || lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    renderAll();
  }

  // Public
  window.I18N = { t, setLang, getLang: () => currentLang };

  document.addEventListener("DOMContentLoaded", () => {
    renderAll();

    document.querySelectorAll(".lang-switch__opt").forEach((el) => {
      el.addEventListener("click", () => setLang(el.dataset.lang));
    });

    const switchBtn = document.getElementById("lang-switch");
    if (switchBtn) {
      switchBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("lang-switch__opt")) return;
        setLang(currentLang === "tr" ? "en" : "tr");
      });
    }
  });
})();
