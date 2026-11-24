/* ==========================================================================
   MOTEUR TACTILE-ATELIER — PORTFOLIO MOÏSE ONIKOYAMOU (L2 TWIN · ESATIC)
   Dépendances externes : 0 · DPR cap <= 2 · Pause hors-écran & visibility
   ========================================================================== */
(() => {
  "use strict";

  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const isReducedMotion = () => reducedMotionQuery.matches;

  /* ------------------------------------------------------------------------
     1. DONNÉES FACTUELLES (7 DÉPÔTS PUBLICS RÉELS DE grayhawk225-pixel)
     ------------------------------------------------------------------------ */
  const PROFILE = {
    handle: "grayhawk225-pixel",
    displayName: "MOÏSE ONIKOYAMOU",
    role: "Étudiant L2 TWIN (ESATIC) • Développeur Web & Mobile",
    location: "Abidjan, Côte d’Ivoire",
    school: "ESATIC — Abidjan",
    statusText: "ÉTUDIANT L2 TWIN • ESATIC • OUVERT AUX STAGES",
    bio: "Étudiant en Licence 2 filière TWIN (Technologies Web et Image Numérique) à l'ESATIC, rigoureux et passionné par les technologies du numérique. Je combine théorie académique et réalisation de projets concrets (développement web, conception d'interfaces, traitement de l'image numérique). À la recherche d'opportunités académiques et professionnelles (stage, projets collaboratifs) pour appliquer mon savoir-faire technique.",
    githubUrl: "https://github.com/grayhawk225-pixel",
    email: "onikoyamou9@gmail.com",
    phone: "+225 0545086784",
    availability: "Stage / Projets collaboratifs"
  };

  const REGISTER_META = {
    claire: {
      themeColor: "#eef1f5",
      tokenReadout: "OKLCH · L 0.962 · C 0.006 · COBALT/VERMILLON"
    },
    alu: {
      themeColor: "#dfe6e3",
      tokenReadout: "OKLCH · L 0.918 · C 0.007 · ÉMERAUDE/LAITON"
    },
    noire: {
      themeColor: "#141820",
      tokenReadout: "OKLCH · L 0.175 · C 0.012 · AMBRE/CYAN"
    }
  };

  let repositories = [
    {
      id: "atelier-web-skill",
      name: "atelier-web-skill",
      title: "Atelier Web Skill",
      description:
        "Universal Agent Skill for building tactile, anti-slop, interactive websites with native Web APIs, oklch() color semiotics, and zero CDN dependencies.",
      language: "Web & Skill",
      rawLanguage: "HTML / CSS / JS",
      topics: ["tactile-atelier-web", "oklch", "Canvas 2D", "Web APIs", "GitHub Pages"],
      stars: 0,
      forks: 0,
      fork: false,
      updatedAt: "2026-11-24",
      htmlUrl: "https://github.com/grayhawk225-pixel/atelier-web-skill",
      demoUrl: "https://grayhawk225-pixel.github.io/atelier-web-skill/",
      lead: true,
      nodes: ["Brief & Audit Anti-Slop", "Architecture oklch()", "Moteurs Canvas & SVG", "Vitrine GitHub Pages"]
    },
    {
      id: "PixR",
      name: "PixR",
      title: "PixR — Super-résolution photo locale",
      description:
        "Application Android PixR — Super-résolution photo 100 % locale sans IA générative.",
      language: "Kotlin",
      rawLanguage: "Kotlin",
      topics: ["Android", "Kotlin", "Image Numérique", "100 % Local"],
      stars: 0,
      forks: 0,
      fork: false,
      updatedAt: "2026-11-21",
      htmlUrl: "https://github.com/grayhawk225-pixel/PixR",
      demoUrl: "",
      lead: false,
      nodes: ["Capture / Import Image", "Traitement local Kotlin", "Super-résolution déterministe", "Export haute netteté"]
    },
    {
      id: "TaskLab-Django-Groupe1",
      name: "TaskLab-Django-Groupe1",
      title: "TaskLab Django — Groupe 1",
      description: "TP fil rouge Génie Logiciel TWIN2 - TaskLab Django - Groupe 1.",
      language: "Python",
      rawLanguage: "Python",
      topics: ["Python", "Django", "Génie Logiciel", "TWIN2", "Travail en équipe"],
      stars: 0,
      forks: 2,
      fork: false,
      updatedAt: "2026-11-24",
      htmlUrl: "https://github.com/grayhawk225-pixel/TaskLab-Django-Groupe1",
      demoUrl: "",
      lead: false,
      nodes: ["Modèles Django", "Logique métier & vues", "Workflow Git collectif", "Gestion de tâches TWIN2"]
    },
    {
      id: "TikTask",
      name: "TikTask",
      title: "TikTask — Todo List intelligente",
      description:
        "Todo List intelligente avec alarmes sonores et deadlines. Projet d'apprentissage React (hooks, context, reducer) conçu pour ceux qui veulent rester concentrés et maîtriser leur temps.",
      language: "TypeScript",
      rawLanguage: "TypeScript",
      topics: ["React", "TypeScript", "Hooks", "Context", "Reducer"],
      stars: 0,
      forks: 0,
      fork: false,
      updatedAt: "2026-08-10",
      htmlUrl: "https://github.com/grayhawk225-pixel/TikTask",
      demoUrl: "https://tik-task.vercel.app",
      lead: false,
      nodes: ["Interface React", "Context API", "Reducer d’état", "Alarmes sonores & deadlines"]
    },
    {
      id: "Ivoire-Bio-AXE",
      name: "Ivoire-Bio-AXE",
      title: "Ivoire Bio-AXE — Économie circulaire",
      description:
        "Plateforme de mise en relation au sein d'une économie circulaire. Elle connecte trois types d'acteurs : les producteurs, les collecteurs et les transformateurs pour répondre au problème de l'empreinte environnementale en Côte d'Ivoire.",
      language: "Dart",
      rawLanguage: "Dart",
      topics: ["Dart", "Flutter", "Économie circulaire", "Côte d’Ivoire"],
      stars: 0,
      forks: 0,
      fork: false,
      updatedAt: "2026-05-10",
      htmlUrl: "https://github.com/grayhawk225-pixel/Ivoire-Bio-AXE",
      demoUrl: "",
      lead: false,
      nodes: ["Producteurs", "Collecteurs", "Transformateurs", "Mise en relation Flutter"]
    },
    {
      id: "Mon_Portfolio",
      name: "Mon_Portfolio",
      title: "Mon_Portfolio",
      description:
        "Dépôt public du portfolio personnel de Moïse Onikoyamou, déployé sur GitHub Pages en TypeScript / React.",
      language: "TypeScript",
      rawLanguage: "TypeScript",
      topics: ["TypeScript", "React", "GitHub Pages", "Portfolio"],
      stars: 0,
      forks: 0,
      fork: false,
      updatedAt: "2026-11-24",
      htmlUrl: "https://github.com/grayhawk225-pixel/Mon_Portfolio",
      demoUrl: "https://grayhawk225-pixel.github.io/Mon_Portfolio/",
      lead: false,
      nodes: ["Vitrine React/TS", "Intégration API GitHub", "Build Vite", "Déploiement GitHub Pages"]
    },
    {
      id: "TP_Groupe_GitHub_Deploiement_Django",
      name: "TP_Groupe_GitHub_Deploiement_Django",
      title: "TP Groupe — Déploiement Django",
      description:
        "Dépôt collaboratif (fork) dédié au déploiement d'une application Python / Django sur Vercel dans le cadre des travaux pratiques GitHub.",
      language: "Python",
      rawLanguage: "Python",
      topics: ["Python", "Django", "Vercel", "Fork collaboratif"],
      stars: 0,
      forks: 0,
      fork: true,
      updatedAt: "2026-11-13",
      htmlUrl: "https://github.com/grayhawk225-pixel/TP_Groupe_GitHub_Deploiement_Django",
      demoUrl: "https://tp-groupe-git-hub-deploiement-djang.vercel.app",
      lead: false,
      nodes: ["Codebase Django", "Configuration Vercel", "Synchronisation GitHub", "Déploiement Web"]
    }
  ];

  /* ------------------------------------------------------------------------
     2. MICRO-AUDIO TACTILE WEBAUDIO (OFF PAR DÉFAUT)
     ------------------------------------------------------------------------ */
  class TactileAudio {
    constructor() {
      this.enabled = false;
      this.ctx = null;
    }

    ensureContext() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume().catch(() => {});
      }
      return this.ctx;
    }

    toggle() {
      this.enabled = !this.enabled;
      if (this.enabled) {
        this.ensureContext();
        this.playDetent(960);
      } else if (this.ctx && this.ctx.state === "running") {
        this.ctx.suspend().catch(() => {});
      }
      return this.enabled;
    }

    playDetent(freq = 780) {
      if (!this.enabled) return;
      const ctx = this.ensureContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const len = Math.floor(ctx.sampleRate * 0.014);
      const buf = ctx.createBuffer(1, len, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < len; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (len * 0.28));
      }
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(freq, now);
      filter.Q.setValueAtTime(2.6, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.018);

      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start(now);
    }

    playPluck(freq = 210) {
      if (!this.enabled) return;
      const ctx = this.ensureContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const duration = 0.28;
      const sampleRate = ctx.sampleRate;
      const length = Math.floor(sampleRate * duration);
      const period = Math.max(12, Math.floor(sampleRate / freq));
      const buf = ctx.createBuffer(1, length, sampleRate);
      const out = buf.getChannelData(0);

      const ring = new Float32Array(period);
      for (let i = 0; i < period; i++) {
        ring[i] = Math.random() * 2 - 1;
      }
      let idx = 0;
      for (let i = 0; i < length; i++) {
        const next = (idx + 1) % period;
        const val = 0.992 * 0.5 * (ring[idx] + ring[next]);
        ring[idx] = val;
        out[i] = val * 0.6;
        idx = next;
      }

      const src = ctx.createBufferSource();
      src.buffer = buf;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      src.connect(gain);
      gain.connect(ctx.destination);
      src.start(now);
    }
  }

  const audio = new TactileAudio();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && audio.ctx && audio.ctx.state === "running") {
      audio.ctx.suspend().catch(() => {});
    }
  });

  const audioToggleBtn = document.getElementById("audio-toggle");
  const audioLabel = document.getElementById("audio-label");
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener("click", () => {
      const on = audio.toggle();
      audioToggleBtn.setAttribute("aria-pressed", String(on));
      if (audioLabel) audioLabel.textContent = on ? "Audio ON" : "Audio OFF";
    });
  }

  /* ------------------------------------------------------------------------
     3. COMMUTATEUR DES 3 REGISTRES OKLCH + VIEW TRANSITIONS API
     ------------------------------------------------------------------------ */
  const regButtons = Array.from(document.querySelectorAll("[data-set-register]"));
  const metaThemeColor = document.getElementById("meta-theme-color");
  const bpRegisterToken = document.getElementById("bp-register-token");
  const themeCallbacks = [];

  function applyRegister(reg, withTransition = true) {
    const valid = REGISTER_META[reg] ? reg : "claire";
    const commit = () => {
      document.documentElement.dataset.register = valid;
      regButtons.forEach((btn) => {
        btn.setAttribute("aria-pressed", String(btn.dataset.setRegister === valid));
      });
      if (metaThemeColor) metaThemeColor.setAttribute("content", REGISTER_META[valid].themeColor);
      if (bpRegisterToken) bpRegisterToken.textContent = REGISTER_META[valid].tokenReadout;
      try {
        localStorage.setItem("moise_tactile_register", valid);
      } catch (_) {}
      themeCallbacks.forEach((fn) => fn(valid));
    };

    if (withTransition && !isReducedMotion() && typeof document.startViewTransition === "function") {
      document.startViewTransition(commit);
    } else {
      commit();
    }
  }

  regButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      audio.playDetent(880);
      applyRegister(btn.dataset.setRegister, true);
    });
  });

  try {
    const saved = localStorage.getItem("moise_tactile_register");
    if (saved && REGISTER_META[saved]) {
      applyRegister(saved, false);
    }
  } catch (_) {}

  /* ------------------------------------------------------------------------
     4. BANC OPTIQUE HERO : CHAMP INTERFÉROMÉTRIQUE + LOUPE X-RAY
     ------------------------------------------------------------------------ */
  const xrayStage = document.getElementById("xray-stage");
  const fieldCanvas = document.getElementById("field-canvas");
  const loupeCoords = document.getElementById("loupe-coords");
  const loupeRadiusInput = document.getElementById("loupe-radius");
  const loupeRadiusVal = document.getElementById("loupe-radius-val");
  const xrayFullToggle = document.getElementById("xray-full-toggle");
  const focusButtons = Array.from(document.querySelectorAll("[data-focus]"));
  const heroDisplayName = document.getElementById("hero-display-name");

  if (xrayStage && fieldCanvas) {
    const fCtx = fieldCanvas.getContext("2d");
    let stageRect = { width: 560, height: 420, left: 0, top: 0 };
    let fieldVisible = true;
    let rafField = 0;

    // Ressort 2D pour la loupe optique (positionnée à droite par défaut pour laisser le portrait 100 % dégagé)
    const loupe = {
      x: 420,
      y: 205,
      tx: 420,
      ty: 205,
      vx: 0,
      vy: 0,
      radius: window.innerWidth <= 560 ? 78 : 96,
      fullXray: false,
      moving: false
    };
    if (loupeRadiusInput) {
      loupeRadiusInput.value = String(loupe.radius);
      if (loupeRadiusVal) loupeRadiusVal.textContent = `${loupe.radius}px`;
    }

    // Ondes interférométriques locales (décroissance exponentielle 2s)
    const ripples = [];
    let lastRippleTime = 0;

    function measureStage() {
      const r = xrayStage.getBoundingClientRect();
      stageRect = { width: Math.max(1, r.width), height: Math.max(1, r.height), left: r.left, top: r.top };
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      fieldCanvas.width = Math.round(stageRect.width * dpr);
      fieldCanvas.height = Math.round(stageRect.height * dpr);
      fCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawStaticOrFrame(performance.now());
    }

    function setLoupeTarget(nx, ny, instant = false) {
      loupe.tx = Math.max(24, Math.min(stageRect.width - 24, nx));
      loupe.ty = Math.max(24, Math.min(stageRect.height - 24, ny));
      if (instant || isReducedMotion()) {
        loupe.x = loupe.tx;
        loupe.y = loupe.ty;
        loupe.vx = 0;
        loupe.vy = 0;
        writeLoupeCSS();
      } else {
        loupe.moving = true;
        startFieldLoop();
      }
    }

    function writeLoupeCSS() {
      xrayStage.style.setProperty("--lx", `${loupe.x.toFixed(1)}px`);
      xrayStage.style.setProperty("--ly", `${loupe.y.toFixed(1)}px`);
      xrayStage.style.setProperty("--lr", `${loupe.radius}px`);
      if (loupeCoords) {
        const mmX = Math.round((loupe.x / Math.max(1, stageRect.width)) * 320);
        const mmY = Math.round((loupe.y / Math.max(1, stageRect.height)) * 220);
        loupeCoords.textContent = `X ${String(mmX).padStart(3, "0")} mm · Y ${String(mmY).padStart(3, "0")} mm`;
      }
      if (heroDisplayName && !isReducedMotion()) {
        const ratio = loupe.x / Math.max(1, stageRect.width);
        const wdth = (94 + ratio * 16).toFixed(1);
        heroDisplayName.style.setProperty("--title-wdth", wdth);
      }
    }

    function getCanvasColors() {
      const style = getComputedStyle(document.documentElement);
      return {
        border: style.getPropertyValue("--border").trim() || "#999",
        primary: style.getPropertyValue("--primary").trim() || "#1d3aa8",
        signal: style.getPropertyValue("--signal").trim() || "#d94620"
      };
    }

    function drawStaticOrFrame(now) {
      const w = stageRect.width;
      const h = stageRect.height;
      const colors = getCanvasColors();
      fCtx.clearRect(0, 0, w, h);

      // Lignes topographiques vectorielles légères
      fCtx.strokeStyle = colors.border;
      fCtx.globalAlpha = 0.42;
      fCtx.lineWidth = 1;
      const stepY = 28;
      for (let y = 18; y < h; y += stepY) {
        fCtx.beginPath();
        for (let x = 0; x <= w; x += 18) {
          const dx = x - loupe.x;
          const dy = y - loupe.y;
          const dist = Math.hypot(dx, dy);
          const pull = dist < 170 ? Math.sin((1 - dist / 170) * Math.PI) * 9 : 0;
          const py = y + Math.sin(x * 0.015 + y * 0.04) * 3 - pull;
          if (x === 0) fCtx.moveTo(x, py);
          else fCtx.lineTo(x, py);
        }
        fCtx.stroke();
      }

      // Ondes de contact au pointeur (décroissance sur 1.8s)
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        const age = (now - rp.t0) / 1800;
        if (age >= 1) {
          ripples.splice(i, 1);
          continue;
        }
        fCtx.beginPath();
        fCtx.strokeStyle = i % 2 === 0 ? colors.primary : colors.signal;
        fCtx.globalAlpha = (1 - age) * 0.34;
        fCtx.lineWidth = 1.2;
        fCtx.arc(rp.x, rp.y, 14 + age * 95, 0, Math.PI * 2);
        fCtx.stroke();
      }
      fCtx.globalAlpha = 1;
    }

    function tickField(now) {
      rafField = 0;
      if (document.hidden || !fieldVisible) return;

      // Ressort 2D amorti (zéro lerp mou)
      const stiffness = 0.24;
      const damping = 0.72;
      loupe.vx = (loupe.vx + (loupe.tx - loupe.x) * stiffness) * damping;
      loupe.vy = (loupe.vy + (loupe.ty - loupe.y) * stiffness) * damping;
      loupe.x += loupe.vx;
      loupe.y += loupe.vy;

      const settled =
        Math.abs(loupe.vx) < 0.06 &&
        Math.abs(loupe.vy) < 0.06 &&
        Math.abs(loupe.tx - loupe.x) < 0.2 &&
        Math.abs(loupe.ty - loupe.y) < 0.2;

      if (settled) {
        loupe.x = loupe.tx;
        loupe.y = loupe.ty;
        loupe.vx = 0;
        loupe.vy = 0;
        loupe.moving = false;
      }

      writeLoupeCSS();
      drawStaticOrFrame(now);

      if (loupe.moving || ripples.length > 0) {
        rafField = requestAnimationFrame(tickField);
      }
    }

    function startFieldLoop() {
      if (!rafField && !document.hidden && fieldVisible && !isReducedMotion()) {
        rafField = requestAnimationFrame(tickField);
      }
    }

    function handleStagePointer(e) {
      const x = e.clientX - stageRect.left;
      const y = e.clientY - stageRect.top;
      setLoupeTarget(x, y, false);
      const now = performance.now();
      if (!isReducedMotion() && now - lastRippleTime > 170) {
        ripples.push({ x, y, t0: now });
        if (ripples.length > 6) ripples.shift();
        lastRippleTime = now;
        startFieldLoop();
      }
    }

    xrayStage.addEventListener("pointerenter", () => {
      const r = xrayStage.getBoundingClientRect();
      stageRect.left = r.left;
      stageRect.top = r.top;
    });
    xrayStage.addEventListener("pointerdown", (e) => {
      const r = xrayStage.getBoundingClientRect();
      stageRect.left = r.left;
      stageRect.top = r.top;
      audio.playDetent(720);
      handleStagePointer(e);
    });
    xrayStage.addEventListener("pointermove", (e) => {
      if (e.pointerType === "mouse" || e.buttons > 0) {
        handleStagePointer(e);
      }
    });

    xrayStage.addEventListener("keydown", (e) => {
      const step = 24;
      if (e.key === "ArrowRight") { e.preventDefault(); setLoupeTarget(loupe.tx + step, loupe.ty); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); setLoupeTarget(loupe.tx - step, loupe.ty); }
      else if (e.key === "ArrowDown") { e.preventDefault(); setLoupeTarget(loupe.tx, loupe.ty + step); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setLoupeTarget(loupe.tx, loupe.ty - step); }
    });

    const FOCUS_PRESETS = {
      portrait: [0.24, 0.45],
      stack: [0.76, 0.44],
      github: [0.34, 0.80]
    };

    focusButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        audio.playDetent(840);
        focusButtons.forEach((b) => b.classList.toggle("is-active", b === btn));
        const pair = FOCUS_PRESETS[btn.dataset.focus] || [0.5, 0.5];
        if (loupe.fullXray) {
          loupe.fullXray = false;
          xrayStage.classList.remove("is-full-xray");
          if (xrayFullToggle) xrayFullToggle.setAttribute("aria-pressed", "false");
        }
        setLoupeTarget(stageRect.width * pair[0], stageRect.height * pair[1], false);
      });
    });

    if (loupeRadiusInput) {
      loupeRadiusInput.addEventListener("input", () => {
        loupe.radius = Number(loupeRadiusInput.value);
        if (loupeRadiusVal) loupeRadiusVal.textContent = `${loupe.radius}px`;
        writeLoupeCSS();
      });
    }

    if (xrayFullToggle) {
      xrayFullToggle.addEventListener("click", () => {
        audio.playDetent(960);
        loupe.fullXray = !loupe.fullXray;
        xrayStage.classList.toggle("is-full-xray", loupe.fullXray);
        xrayFullToggle.setAttribute("aria-pressed", String(loupe.fullXray));
      });
    }

    const fieldObserver = new IntersectionObserver(
      (entries) => {
        fieldVisible = entries[0].isIntersecting;
        if (fieldVisible && (loupe.moving || ripples.length > 0)) startFieldLoop();
      },
      { threshold: 0.05 }
    );
    fieldObserver.observe(xrayStage);

    window.addEventListener("resize", () => {
      measureStage();
      setLoupeTarget(Math.min(loupe.tx, stageRect.width - 24), Math.min(loupe.ty, stageRect.height - 24), true);
    });

    themeCallbacks.push(() => drawStaticOrFrame(performance.now()));
    measureStage();
    setLoupeTarget(stageRect.width * 0.76, stageRect.height * 0.56, true);
  }

  /* ------------------------------------------------------------------------
     5. RÈGLE CHRONOLOGIQUE DU PARCOURS ACADÉMIQUE
     ------------------------------------------------------------------------ */
  const rulerTicks = Array.from(document.querySelectorAll("[data-edu]"));
  const eduItems = Array.from(document.querySelectorAll("[data-edu-item]"));

  function selectEducation(idx) {
    rulerTicks.forEach((btn) => {
      const active = btn.dataset.edu === String(idx);
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", String(active));
    });
    eduItems.forEach((item) => {
      item.classList.toggle("is-active", item.dataset.eduItem === String(idx));
    });
  }

  rulerTicks.forEach((btn) => {
    btn.addEventListener("click", () => {
      audio.playDetent(740);
      selectEducation(btn.dataset.edu);
    });
  });

  eduItems.forEach((item) => {
    item.addEventListener("click", () => {
      audio.playDetent(740);
      selectEducation(item.dataset.eduItem);
    });
  });

  /* ------------------------------------------------------------------------
     6. PROJETS GITHUB + INSPECTEUR D'ARCHITECTURE RISOGRAPHIQUE
     ------------------------------------------------------------------------ */
  const projectsGrid = document.getElementById("projects-grid");
  const projectSearch = document.getElementById("project-search");
  const filterPills = Array.from(document.querySelectorAll("[data-filter]"));
  const githubSyncBtn = document.getElementById("github-sync-btn");
  const githubSyncStatus = document.getElementById("github-sync-status");
  const metricReposCount = document.getElementById("metric-repos-count");
  const bpGhSummary = document.getElementById("bp-gh-summary");

  let activeFilter = "Tous";
  let searchQuery = "";

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderProjects() {
    if (!projectsGrid) return;
    const q = searchQuery.trim().toLowerCase();
    const list = repositories.filter((repo) => {
      const matchesFilter = activeFilter === "Tous" || repo.language === activeFilter;
      const matchesQuery =
        !q ||
        repo.name.toLowerCase().includes(q) ||
        repo.title.toLowerCase().includes(q) ||
        repo.description.toLowerCase().includes(q) ||
        repo.language.toLowerCase().includes(q) ||
        repo.topics.some((t) => t.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });

    if (list.length === 0) {
      projectsGrid.innerHTML = `<div class="projects-empty">Aucun dépôt ne correspond au filtre « ${escapeHtml(searchQuery || activeFilter)} ».</div>`;
      return;
    }

    projectsGrid.innerHTML = list
      .map((repo, idx) => {
        const leadClass = activeFilter === "Tous" && !q && idx === 0 ? " is-lead" : "";
        const demoBadge = repo.demoUrl ? `<span class="repo-badge-live">EN LIGNE</span>` : "";
        const forkBadge = repo.fork ? `<span class="topic-chip">Fork</span>` : "";
        return `
          <article class="project-card${leadClass}">
            <div>
              <div class="project-top">
                <span class="lang-badge">${escapeHtml(repo.rawLanguage || repo.language)}</span>
                <div class="repo-meta">
                  ${demoBadge}
                  <span>★ ${repo.stars}</span>
                  <span>⑂ ${repo.forks}</span>
                  <span>${escapeHtml(repo.updatedAt)}</span>
                </div>
              </div>
              <h3 class="project-title">${escapeHtml(repo.title)}</h3>
              <p class="project-desc">${escapeHtml(repo.description)}</p>
              <div class="project-topics">
                ${forkBadge}
                ${repo.topics.map((t) => `<span class="topic-chip">#${escapeHtml(t)}</span>`).join("")}
              </div>
            </div>
            <div class="project-actions">
              <button type="button" class="btn btn-secondary btn-compact" data-inspect-repo="${escapeHtml(repo.id)}">
                Inspecter le plan
              </button>
              <a
                href="${escapeHtml(repo.htmlUrl)}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost btn-compact"
              >
                Dépôt GitHub
              </a>
            </div>
          </article>
        `;
      })
      .join("");

    projectsGrid.querySelectorAll("[data-inspect-repo]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const repo = repositories.find((r) => r.id === btn.dataset.inspectRepo);
        if (repo) openArchitectureModal(repo, btn);
      });
    });
  }

  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      audio.playDetent(820);
      activeFilter = pill.dataset.filter;
      filterPills.forEach((p) => {
        const active = p === pill;
        p.classList.toggle("is-active", active);
        p.setAttribute("aria-pressed", String(active));
      });
      renderProjects();
    });
  });

  if (projectSearch) {
    projectSearch.addEventListener("input", () => {
      searchQuery = projectSearch.value;
      renderProjects();
    });
  }

  async function syncGithubLive() {
    if (!githubSyncBtn || !githubSyncStatus) return;
    audio.playDetent(900);
    githubSyncBtn.disabled = true;
    githubSyncStatus.textContent = "Synchronisation API GitHub...";
    try {
      const res = await fetch(
        "https://api.github.com/users/grayhawk225-pixel/repos?per_page=100&sort=updated",
        { headers: { Accept: "application/vnd.github+json" } }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const live = await res.json();
      if (!Array.isArray(live) || live.length === 0) throw new Error("Vide");

      const knownByName = new Map(repositories.map((r) => [r.name.toLowerCase(), r]));
      repositories = live.map((item, i) => {
        const prev = knownByName.get(String(item.name || "").toLowerCase());
        const inferredLang = item.language || (prev ? prev.language : "Web & Skill");
        const demoUrl =
          item.homepage ||
          (item.has_pages ? `https://grayhawk225-pixel.github.io/${item.name}/` : "") ||
          (prev ? prev.demoUrl : "");
        return {
          id: item.name,
          name: item.name,
          title: prev ? prev.title : item.name.replace(/[-_]/g, " "),
          description:
            item.description ||
            (prev ? prev.description : `Dépôt public sur GitHub (${inferredLang}).`),
          language: ["TypeScript", "Python", "Kotlin", "Dart"].includes(inferredLang)
            ? inferredLang
            : "Web & Skill",
          rawLanguage: item.language || (prev ? prev.rawLanguage : "Web"),
          topics:
            Array.isArray(item.topics) && item.topics.length > 0
              ? item.topics
              : prev
                ? prev.topics
                : [inferredLang, "GitHub"],
          stars: item.stargazers_count || 0,
          forks: item.forks_count || 0,
          fork: Boolean(item.fork),
          updatedAt: String(item.pushed_at || item.updated_at || "").slice(0, 10) || "2026",
          htmlUrl: item.html_url,
          demoUrl,
          lead: i === 0,
          nodes: prev
            ? prev.nodes
            : ["Code source GitHub", "Structure modulaire", "Vérification locale", "Publication"]
        };
      });

      if (metricReposCount) metricReposCount.textContent = String(repositories.length);
      if (bpGhSummary) bpGhSummary.textContent = `${repositories.length} DÉPÔTS PUBLICS · SYNCHRO LIVE`;
      const allBtn = filterPills.find((p) => p.dataset.filter === "Tous");
      if (allBtn) allBtn.textContent = `Tous (${repositories.length})`;
      githubSyncStatus.textContent = `API GitHub live : ${repositories.length} dépôts synchronisés`;
      renderProjects();
    } catch (_) {
      githubSyncStatus.textContent = `Cache local vérifié (${repositories.length} dépôts publics)`;
    } finally {
      githubSyncBtn.disabled = false;
    }
  }

  if (githubSyncBtn) {
    githubSyncBtn.addEventListener("click", syncGithubLive);
  }

  /* Modale d'Architecture Risographique */
  const archModal = document.getElementById("arch-modal");
  const archModalClose = document.getElementById("arch-modal-close");
  const archModalTitle = document.getElementById("arch-modal-title");
  const archModalLang = document.getElementById("arch-modal-lang");
  const archModalDesc = document.getElementById("arch-modal-desc");
  const archModalNodes = document.getElementById("arch-modal-nodes");
  const archModalSnippet = document.getElementById("arch-modal-snippet");
  const archModalMeta = document.getElementById("arch-modal-meta");
  const archModalGithub = document.getElementById("arch-modal-github");
  const archModalDemo = document.getElementById("arch-modal-demo");
  const risoOffsetInput = document.getElementById("riso-offset");
  const risoOffsetVal = document.getElementById("riso-offset-val");
  const risoViewport = document.getElementById("riso-viewport");

  let lastTriggerEl = null;

  function applyRisoOffset(val) {
    if (!risoViewport) return;
    const n = Number(val);
    risoViewport.style.setProperty("--riso-ax", `${-n}px`);
    risoViewport.style.setProperty("--riso-ay", `${-Math.round(n * 0.55)}px`);
    risoViewport.style.setProperty("--riso-bx", `${n}px`);
    risoViewport.style.setProperty("--riso-by", `${Math.round(n * 0.55)}px`);
    if (risoOffsetVal) risoOffsetVal.textContent = `${n >= 0 ? "+" : ""}${n}px`;
  }

  if (risoOffsetInput) {
    risoOffsetInput.addEventListener("input", () => applyRisoOffset(risoOffsetInput.value));
    applyRisoOffset(risoOffsetInput.value);
  }

  function openArchitectureModal(repo, triggerEl) {
    if (!archModal) return;
    audio.playDetent(940);
    lastTriggerEl = triggerEl || document.activeElement;
    archModalTitle.textContent = repo.title;
    archModalLang.textContent = `PLAN D’ARCHITECTURE // ${repo.rawLanguage || repo.language}`;
    archModalDesc.textContent = repo.description;
    archModalNodes.innerHTML = repo.nodes
      .map(
        (node, i) => `
        <li class="pipeline-step">
          <span>ÉTAPE 0${i + 1}</span>
          <strong>${escapeHtml(node)}</strong>
        </li>
      `
      )
      .join("");
    archModalMeta.textContent = `MÀJ ${repo.updatedAt} · ★ ${repo.stars} · ⑂ ${repo.forks}`;
    archModalSnippet.textContent =
      `// Dépôt public GitHub : grayhawk225-pixel/${repo.name}\n` +
      `// URL : ${repo.htmlUrl}\n` +
      (repo.demoUrl ? `// Démo : ${repo.demoUrl}\n` : "") +
      `export const depot = {\n` +
      `  auteur: "Moïse Onikoyamou",\n` +
      `  compte: "grayhawk225-pixel",\n` +
      `  projet: "${repo.name}",\n` +
      `  langage: "${repo.rawLanguage || repo.language}"\n` +
      `};`;

    archModalGithub.href = repo.htmlUrl;
    if (repo.demoUrl) {
      archModalDemo.href = repo.demoUrl;
      archModalDemo.hidden = false;
    } else {
      archModalDemo.hidden = true;
    }

    archModal.hidden = false;
    archModalClose.focus();
  }

  function closeArchitectureModal() {
    if (!archModal || archModal.hidden) return;
    audio.playDetent(640);
    archModal.hidden = true;
    if (lastTriggerEl && typeof lastTriggerEl.focus === "function") {
      lastTriggerEl.focus();
    }
  }

  if (archModalClose) archModalClose.addEventListener("click", closeArchitectureModal);
  if (archModal) {
    archModal.addEventListener("click", (e) => {
      if (e.target === archModal) closeArchitectureModal();
    });
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeArchitectureModal();
  });

  renderProjects();

  /* ------------------------------------------------------------------------
     7. PATCHBAY VERLET 2D (CÂBLES PHYSIQUES RELIANT DOMAINES <-> PILIERS)
     ------------------------------------------------------------------------ */
  const verletCanvas = document.getElementById("verlet-canvas");
  const patchTelemetry = document.getElementById("patchbay-telemetry");
  const domainNodes = Array.from(document.querySelectorAll("[data-domain-idx]"));
  const pillarCards = Array.from(document.querySelectorAll("[data-pillar-idx]"));
  const skillSheets = Array.from(document.querySelectorAll("[data-skill-domain]"));
  const pluckButtons = Array.from(document.querySelectorAll("[data-pluck]"));

  if (verletCanvas) {
    const vCtx = verletCanvas.getContext("2d");
    let vw = 260;
    let vh = 300;
    let patchVisible = true;
    let rafVerlet = 0;
    let selectedCable = 0;
    let draggingCable = -1;
    const PLUCK_FREQS = [196, 246.94, 293.66];
    const DOMAIN_LABELS = ["WEB & MOBILE -> GRAYHAWK", "SYSTÈMES -> CODE #225", "SÉCURITÉ & UI -> PIXEL"];

    const cables = [0, 1, 2].map((i) => ({
      id: i,
      yRatio: 0.2 + i * 0.3,
      midY: 0,
      midVy: 0,
      midXRatio: 0.5
    }));

    function selectDomain(idx) {
      selectedCable = idx;
      domainNodes.forEach((n) => n.classList.toggle("is-selected", Number(n.dataset.domainIdx) === idx));
      pillarCards.forEach((p) => p.classList.toggle("is-selected", Number(p.dataset.pillarIdx) === idx));
      skillSheets.forEach((s) => s.classList.toggle("is-highlighted", Number(s.dataset.skillDomain) === idx));
      if (patchTelemetry) {
        patchTelemetry.textContent = `TENSION : 0.00 N · ${DOMAIN_LABELS[idx]}`;
      }
    }

    function resizeVerlet() {
      const r = verletCanvas.getBoundingClientRect();
      vw = Math.max(120, r.width);
      vh = Math.max(120, r.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      verletCanvas.width = Math.round(vw * dpr);
      verletCanvas.height = Math.round(vh * dpr);
      vCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawCables();
    }

    function drawCables() {
      const style = getComputedStyle(document.documentElement);
      const primary = style.getPropertyValue("--primary").trim() || "#1d3aa8";
      const signal = style.getPropertyValue("--signal").trim() || "#d94620";
      const border = style.getPropertyValue("--border-strong").trim() || "#666";
      const bg = style.getPropertyValue("--surface-raised").trim() || "#fff";

      vCtx.clearRect(0, 0, vw, vh);

      // Repères gradués horizontaux discrets
      vCtx.strokeStyle = border;
      vCtx.globalAlpha = 0.22;
      vCtx.lineWidth = 1;
      for (let x = 24; x < vw; x += 24) {
        vCtx.beginPath();
        vCtx.moveTo(x, 0);
        vCtx.lineTo(x, vh);
        vCtx.stroke();
      }
      vCtx.globalAlpha = 1;

      cables.forEach((c, idx) => {
        const y0 = vh * c.yRatio;
        const sag = 16;
        const cx = vw * c.midXRatio;
        const cy = y0 + sag + c.midY;
        const active = idx === selectedCable;

        // Corde caténaire quadratique
        vCtx.beginPath();
        vCtx.moveTo(10, y0);
        vCtx.quadraticCurveTo(cx, cy, vw - 10, y0);
        vCtx.strokeStyle = active ? (idx === 1 ? signal : primary) : border;
        vCtx.lineWidth = active ? 3 : 2;
        vCtx.stroke();

        // Connecteurs gauche / droite
        [10, vw - 10].forEach((px) => {
          vCtx.beginPath();
          vCtx.arc(px, y0, 5.5, 0, Math.PI * 2);
          vCtx.fillStyle = bg;
          vCtx.fill();
          vCtx.lineWidth = 2;
          vCtx.strokeStyle = active ? signal : border;
          vCtx.stroke();
        });

        // Noeud de pincement central
        vCtx.beginPath();
        vCtx.arc(cx, y0 + (sag + c.midY) * 0.5, active ? 5 : 3.5, 0, Math.PI * 2);
        vCtx.fillStyle = active ? signal : border;
        vCtx.fill();
      });
    }

    function stepVerlet() {
      rafVerlet = 0;
      if (document.hidden || !patchVisible) return;

      let activeMotion = false;
      let maxEnergy = 0;

      cables.forEach((c, idx) => {
        if (idx === draggingCable) {
          activeMotion = true;
          maxEnergy = Math.max(maxEnergy, Math.abs(c.midY));
          return;
        }
        const stiffness = 0.22;
        const damping = 0.86;
        c.midVy = (c.midVy + -c.midY * stiffness) * damping;
        c.midY += c.midVy;
        c.midXRatio += (0.5 - c.midXRatio) * 0.16;

        if (Math.abs(c.midY) > 0.12 || Math.abs(c.midVy) > 0.08) {
          activeMotion = true;
          maxEnergy = Math.max(maxEnergy, Math.abs(c.midY));
        } else {
          c.midY = 0;
          c.midVy = 0;
          c.midXRatio = 0.5;
        }
      });

      if (patchTelemetry) {
        const newton = (maxEnergy * 0.08).toFixed(2);
        patchTelemetry.textContent = `TENSION : ${newton} N · ${DOMAIN_LABELS[selectedCable]}`;
      }

      drawCables();
      if (activeMotion && !isReducedMotion()) {
        rafVerlet = requestAnimationFrame(stepVerlet);
      }
    }

    function pluckCable(idx, impulse = 36) {
      selectDomain(idx);
      audio.playPluck(PLUCK_FREQS[idx] || 220);
      if (patchTelemetry) {
        const newton = (Math.abs(impulse) * 0.08).toFixed(2);
        patchTelemetry.textContent = `TENSION : ${newton} N · ${DOMAIN_LABELS[idx]}`;
      }
      if (isReducedMotion()) {
        drawCables();
        return;
      }
      cables[idx].midY = impulse;
      cables[idx].midVy = impulse * 0.18;
      drawCables();
      if (!rafVerlet) rafVerlet = requestAnimationFrame(stepVerlet);
    }

    verletCanvas.addEventListener("pointerdown", (e) => {
      const r = verletCanvas.getBoundingClientRect();
      const px = e.clientX - r.left;
      const py = e.clientY - r.top;
      let best = 0;
      let bestDist = Infinity;
      cables.forEach((c, idx) => {
        const d = Math.abs(py - vh * c.yRatio);
        if (d < bestDist) {
          bestDist = d;
          best = idx;
        }
      });
      draggingCable = best;
      selectDomain(best);
      verletCanvas.setPointerCapture(e.pointerId);
      cables[best].midXRatio = Math.max(0.2, Math.min(0.8, px / vw));
      cables[best].midY = Math.max(-55, Math.min(55, (py - vh * cables[best].yRatio) * 1.4));
      if (!rafVerlet && !isReducedMotion()) rafVerlet = requestAnimationFrame(stepVerlet);
      else drawCables();
    });

    verletCanvas.addEventListener("pointermove", (e) => {
      if (draggingCable < 0) return;
      const r = verletCanvas.getBoundingClientRect();
      const px = e.clientX - r.left;
      const py = e.clientY - r.top;
      const c = cables[draggingCable];
      c.midXRatio = Math.max(0.2, Math.min(0.8, px / vw));
      c.midY = Math.max(-58, Math.min(58, (py - vh * c.yRatio) * 1.45));
      drawCables();
    });

    function releaseCable() {
      if (draggingCable < 0) return;
      const idx = draggingCable;
      draggingCable = -1;
      audio.playPluck(PLUCK_FREQS[idx] || 220);
      if (!rafVerlet && !isReducedMotion()) rafVerlet = requestAnimationFrame(stepVerlet);
    }

    verletCanvas.addEventListener("pointerup", releaseCable);
    verletCanvas.addEventListener("pointercancel", releaseCable);

    pluckButtons.forEach((btn) => {
      btn.addEventListener("click", () => pluckCable(Number(btn.dataset.pluck), 38));
    });
    domainNodes.forEach((node) => {
      node.addEventListener("click", () => pluckCable(Number(node.dataset.domainIdx), 30));
    });

    const patchObserver = new IntersectionObserver(
      (entries) => {
        patchVisible = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    patchObserver.observe(verletCanvas);

    window.addEventListener("resize", resizeVerlet);
    themeCallbacks.push(drawCables);
    selectDomain(0);
    resizeVerlet();
  }

  /* ------------------------------------------------------------------------
     8. TERMINAL INTERACTIF HAWK-SH
     ------------------------------------------------------------------------ */
  const terminalOutput = document.getElementById("terminal-output");
  const terminalForm = document.getElementById("terminal-form");
  const terminalInput = document.getElementById("terminal-input");
  const quickCmdButtons = Array.from(document.querySelectorAll("[data-cmd]"));

  function appendTerminal(type, text) {
    if (!terminalOutput) return;
    const div = document.createElement("div");
    div.className = `term-line ${type}`;
    div.textContent = text;
    terminalOutput.appendChild(div);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function initTerminal() {
    if (!terminalOutput) return;
    terminalOutput.innerHTML = "";
    appendTerminal(
      "system",
      'HAWK-SH // Atelier Optique TWIN initialisé. Tapez "help" ou cliquez sur une commande rapide.'
    );
    appendTerminal("output", "Identité : Moïse Onikoyamou (@grayhawk225-pixel) · ESATIC Abidjan [OK]");
  }

  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    audio.playDetent(760);

    if (cmd === "clear") {
      initTerminal();
      return;
    }

    appendTerminal("command", `hawk@225:~$ ${raw.trim()}`);

    switch (cmd) {
      case "help":
        appendTerminal(
          "output",
          [
            "Commandes disponibles :",
            "  whoami    : Identité & parcours de Moïse Onikoyamou",
            "  github    : État du compte et des dépôts publics",
            "  skills    : Stack technique & niveaux déclarés",
            "  projects  : Lister les 7 dépôts publics",
            "  225       : Signature GrayHawk // 225-Pixel",
            "  contact   : Coordonnées directes",
            "  theme     : Basculer au registre chromatique suivant",
            "  clear     : Réinitialiser la console"
          ].join("\n")
        );
        break;
      case "whoami":
        appendTerminal("output", `${PROFILE.displayName} — ${PROFILE.role}\n${PROFILE.bio}`);
        break;
      case "github":
        appendTerminal(
          "output",
          `Profil GitHub : ${PROFILE.githubUrl}\nDépôts publics : ${repositories.length} · Membre depuis février 2026\nUtilisez le bouton « Actualiser depuis GitHub » dans la section Projets pour une requête live.`
        );
        break;
      case "skills":
        appendTerminal(
          "output",
          [
            "STACK DÉCLARÉE :",
            "  [Web/Mobile] TypeScript, JavaScript, Python, HTML (Avancé), React, Tailwind CSS, Flutter, Dart, C++, Django",
            "  [Données]    MySQL, PostgreSQL, MongoDB",
            "  [Systèmes]   Linux (Ubuntu, Kali), Windows, Multi-boot (Avancé), Git & GitHub (Avancé)",
            "  [Création]   Fondamentaux réseaux, audit de sécurité, Canva, Photoshop, Illustrator, Com digitale (Avancé)"
          ].join("\n")
        );
        break;
      case "projects":
        appendTerminal(
          "output",
          repositories
            .map((r, i) => `  ${i + 1}. [${r.rawLanguage || r.language}] ${r.name} — ★ ${r.stars} · ⑂ ${r.forks}`)
            .join("\n")
        );
        break;
      case "225":
        appendTerminal(
          "highlight",
          "CODE #225 ACTIVÉ — Depuis Abidjan : alliance de l’audace créative ivoirienne, de la rigueur TWIN et d’une ingénierie concrète."
        );
        break;
      case "contact":
        appendTerminal(
          "output",
          `Email  : ${PROFILE.email}\nTél    : ${PROFILE.phone}\nGitHub : ${PROFILE.githubUrl}\nStatut : ${PROFILE.availability}`
        );
        break;
      case "theme": {
        const order = ["claire", "alu", "noire"];
        const cur = document.documentElement.dataset.register || "claire";
        const next = order[(order.indexOf(cur) + 1) % order.length];
        applyRegister(next, true);
        appendTerminal("highlight", `Registre chromatique basculé sur : ${next.toUpperCase()}`);
        break;
      }
      default:
        appendTerminal("error", `Commande inconnue : "${cmd}". Tapez "help" pour la liste complète.`);
    }
  }

  if (terminalForm && terminalInput) {
    terminalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      runCommand(terminalInput.value);
      terminalInput.value = "";
    });
  }

  quickCmdButtons.forEach((btn) => {
    btn.addEventListener("click", () => runCommand(btn.dataset.cmd));
  });

  initTerminal();

  /* ------------------------------------------------------------------------
     9. LABO MATRICE 225-PIXEL (AUTOMATE DE CONWAY CANVAS 2D + TRAME RISO)
     ------------------------------------------------------------------------ */
  const pixelCanvas = document.getElementById("pixel-canvas");
  const pixelPlayBtn = document.getElementById("pixel-play-btn");
  const pixelStepBtn = document.getElementById("pixel-step-btn");
  const pixelChaosBtn = document.getElementById("pixel-chaos-btn");
  const pixelClearBtn = document.getElementById("pixel-clear-btn");
  const pixelPresetBtns = Array.from(document.querySelectorAll("[data-pixel-preset]"));
  const pixelRenderModeBtn = document.getElementById("pixel-render-mode");
  const pixelActiveCount = document.getElementById("pixel-active-count");
  const pixelGenCount = document.getElementById("pixel-gen-count");
  const pixelHzInput = document.getElementById("pixel-hz");
  const pixelHzVal = document.getElementById("pixel-hz-val");

  if (pixelCanvas) {
    const pCtx = pixelCanvas.getContext("2d");
    const ROWS = 14;
    const COLS = 28;
    let grid = Array.from({ length: ROWS }, () => new Uint8Array(COLS));
    let running = false;
    let risoHalftone = false;
    let generation = 0;
    let hz = 6;
    let timerId = 0;
    let painting = false;
    let paintValue = 1;
    let cursorR = 6;
    let cursorC = 13;
    let hasKeyboardCursor = false;

    const PRESETS = {
      hawk: [
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0]
      ],
      code225: [
        [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1]
      ]
    };

    function resizePixelCanvas() {
      const r = pixelCanvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      pixelCanvas.width = Math.max(280, Math.round(r.width * dpr));
      pixelCanvas.height = Math.max(140, Math.round(r.height * dpr));
      pCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawGrid();
    }

    function updatePixelStats() {
      let count = 0;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) count += grid[r][c];
      }
      if (pixelActiveCount) pixelActiveCount.textContent = String(count);
      if (pixelGenCount) pixelGenCount.textContent = `#${generation}`;
    }

    function drawGrid() {
      const rect = pixelCanvas.getBoundingClientRect();
      const w = Math.max(280, rect.width);
      const h = Math.max(140, rect.height);
      const cellW = w / COLS;
      const cellH = h / ROWS;
      const style = getComputedStyle(document.documentElement);
      const bg = style.getPropertyValue("--surface-raised").trim() || "#fff";
      const cellOff = style.getPropertyValue("--surface-1").trim() || "#e5e7eb";
      const primary = style.getPropertyValue("--primary").trim() || "#1d3aa8";
      const signal = style.getPropertyValue("--signal").trim() || "#d94620";

      pCtx.fillStyle = bg;
      pCtx.fillRect(0, 0, w, h);

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const x = c * cellW + 1.5;
          const y = r * cellH + 1.5;
          const cw = Math.max(2, cellW - 3);
          const ch = Math.max(2, cellH - 3);
          if (grid[r][c]) {
            if (risoHalftone) {
              const cx = c * cellW + cellW / 2;
              const cy = r * cellH + cellH / 2;
              const rad = Math.min(cw, ch) * 0.44;
              pCtx.fillStyle = primary;
              pCtx.beginPath();
              pCtx.arc(cx - 1.5, cy - 1, rad, 0, Math.PI * 2);
              pCtx.fill();
              pCtx.globalAlpha = 0.72;
              pCtx.fillStyle = signal;
              pCtx.beginPath();
              pCtx.arc(cx + 1.5, cy + 1, rad * 0.78, 0, Math.PI * 2);
              pCtx.fill();
              pCtx.globalAlpha = 1;
            } else {
              pCtx.fillStyle = (r + c) % 5 === 0 ? signal : primary;
              pCtx.fillRect(x, y, cw, ch);
            }
          } else {
            pCtx.fillStyle = cellOff;
            pCtx.fillRect(x, y, cw, ch);
          }
        }
      }

      if (hasKeyboardCursor) {
        pCtx.strokeStyle = signal;
        pCtx.lineWidth = 2;
        pCtx.strokeRect(cursorC * cellW + 1, cursorR * cellH + 1, cellW - 2, cellH - 2);
      }

      updatePixelStats();
    }

    function stepConway() {
      const next = Array.from({ length: ROWS }, () => new Uint8Array(COLS));
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          let neighbors = 0;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              if (dr === 0 && dc === 0) continue;
              neighbors += grid[(r + dr + ROWS) % ROWS][(c + dc + COLS) % COLS];
            }
          }
          if (grid[r][c] === 1) {
            next[r][c] = neighbors === 2 || neighbors === 3 ? 1 : 0;
          } else {
            next[r][c] = neighbors === 3 ? 1 : 0;
          }
        }
      }
      grid = next;
      generation += 1;
      drawGrid();
    }

    function setRunning(state) {
      running = state;
      if (timerId) {
        clearInterval(timerId);
        timerId = 0;
      }
      if (running) {
        timerId = window.setInterval(stepConway, Math.round(1000 / hz));
      }
      if (pixelPlayBtn) {
        pixelPlayBtn.setAttribute("aria-pressed", String(running));
        pixelPlayBtn.textContent = running ? "Pause" : "Simuler Vie";
      }
    }

    function loadPreset(key) {
      audio.playDetent(860);
      setRunning(false);
      generation = 0;
      grid = Array.from({ length: ROWS }, () => new Uint8Array(COLS));
      const pattern = PRESETS[key];
      if (pattern) {
        const oy = Math.floor((ROWS - pattern.length) / 2);
        const ox = Math.floor((COLS - pattern[0].length) / 2);
        pattern.forEach((row, r) => {
          row.forEach((v, c) => {
            if (grid[oy + r] && ox + c < COLS) grid[oy + r][ox + c] = v;
          });
        });
      }
      drawGrid();
    }

    function cellFromPointer(e) {
      const r = pixelCanvas.getBoundingClientRect();
      const c = Math.floor(((e.clientX - r.left) / r.width) * COLS);
      const row = Math.floor(((e.clientY - r.top) / r.height) * ROWS);
      return {
        row: Math.max(0, Math.min(ROWS - 1, row)),
        col: Math.max(0, Math.min(COLS - 1, c))
      };
    }

    pixelCanvas.addEventListener("pointerdown", (e) => {
      painting = true;
      pixelCanvas.setPointerCapture(e.pointerId);
      const { row, col } = cellFromPointer(e);
      paintValue = grid[row][col] ? 0 : 1;
      grid[row][col] = paintValue;
      audio.playDetent(680 + (row + col) * 14);
      drawGrid();
    });

    pixelCanvas.addEventListener("pointermove", (e) => {
      if (!painting) return;
      const { row, col } = cellFromPointer(e);
      if (grid[row][col] !== paintValue) {
        grid[row][col] = paintValue;
        drawGrid();
      }
    });

    pixelCanvas.addEventListener("pointerup", () => { painting = false; });
    pixelCanvas.addEventListener("pointercancel", () => { painting = false; });

    pixelCanvas.addEventListener("focus", () => { hasKeyboardCursor = true; drawGrid(); });
    pixelCanvas.addEventListener("blur", () => { hasKeyboardCursor = false; drawGrid(); });
    pixelCanvas.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); cursorC = (cursorC + 1) % COLS; drawGrid(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); cursorC = (cursorC - 1 + COLS) % COLS; drawGrid(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); cursorR = (cursorR + 1) % ROWS; drawGrid(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); cursorR = (cursorR - 1 + ROWS) % ROWS; drawGrid(); }
      else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        grid[cursorR][cursorC] = grid[cursorR][cursorC] ? 0 : 1;
        audio.playDetent(800);
        drawGrid();
      }
    });

    if (pixelPlayBtn) {
      pixelPlayBtn.addEventListener("click", () => {
        audio.playDetent(920);
        setRunning(!running);
      });
    }
    if (pixelStepBtn) {
      pixelStepBtn.addEventListener("click", () => {
        audio.playDetent(780);
        setRunning(false);
        stepConway();
      });
    }
    if (pixelChaosBtn) {
      pixelChaosBtn.addEventListener("click", () => {
        audio.playDetent(660);
        generation = 0;
        for (let r = 0; r < ROWS; r++) {
          for (let c = 0; c < COLS; c++) grid[r][c] = Math.random() > 0.7 ? 1 : 0;
        }
        drawGrid();
      });
    }
    if (pixelClearBtn) {
      pixelClearBtn.addEventListener("click", () => {
        audio.playDetent(520);
        setRunning(false);
        generation = 0;
        grid = Array.from({ length: ROWS }, () => new Uint8Array(COLS));
        drawGrid();
      });
    }
    pixelPresetBtns.forEach((btn) => {
      btn.addEventListener("click", () => loadPreset(btn.dataset.pixelPreset));
    });
    if (pixelRenderModeBtn) {
      pixelRenderModeBtn.addEventListener("click", () => {
        audio.playDetent(900);
        risoHalftone = !risoHalftone;
        pixelRenderModeBtn.setAttribute("aria-pressed", String(risoHalftone));
        pixelRenderModeBtn.textContent = risoHalftone ? "Trame Riso : ON" : "Trame Riso : OFF";
        drawGrid();
      });
    }
    if (pixelHzInput) {
      pixelHzInput.addEventListener("input", () => {
        hz = Number(pixelHzInput.value);
        if (pixelHzVal) pixelHzVal.textContent = `${hz} Hz`;
        if (running) setRunning(true);
      });
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden && running) setRunning(false);
    });

    window.addEventListener("resize", resizePixelCanvas);
    themeCallbacks.push(drawGrid);
    loadPreset("hawk");
    resizePixelCanvas();
  }

  /* ------------------------------------------------------------------------
     10. CONTACT : COPIE RAPIDE & FORMULAIRE MAILTO
     ------------------------------------------------------------------------ */
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const value = btn.dataset.copy;
      audio.playDetent(880);
      try {
        await navigator.clipboard.writeText(value);
        btn.textContent = "Copié";
        setTimeout(() => { btn.textContent = "Copier"; }, 1800);
      } catch (_) {
        btn.textContent = "Sélectionné";
        setTimeout(() => { btn.textContent = "Copier"; }, 1800);
      }
    });
  });

  const contactForm = document.getElementById("contact-form");
  const contactFeedback = document.getElementById("contact-feedback");
  if (contactForm && contactFeedback) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      audio.playDetent(980);
      const fd = new FormData(contactForm);
      const name = String(fd.get("name") || "").trim();
      const email = String(fd.get("email") || "").trim();
      const missionType = String(fd.get("missionType") || "Stage / Projet collaboratif");
      const message = String(fd.get("message") || "").trim();

      const subject = encodeURIComponent(`[Portfolio] ${missionType}`);
      const body = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\n${message}`);
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;

      contactFeedback.textContent = `Votre application mail s’ouvre avec le message prêt à envoyer, ${name}. Il ne sera transmis qu’après votre envoi.`;
      contactFeedback.hidden = false;
    });
  }
})();
