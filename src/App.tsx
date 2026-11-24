import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// ============================================================================
// ICÔNES VECTORIELLES SVG AUTONOMES (ZÉRO DÉPENDANCE EXTERNE / ZÉRO BUG BUNDLER)
// ============================================================================
const SvgIcon = ({ children, className = 'w-4 h-4' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const Terminal = ({ className }) => (
  <SvgIcon className={className}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </SvgIcon>
);
const Cpu = ({ className }) => (
  <SvgIcon className={className}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
  </SvgIcon>
);
const Globe = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </SvgIcon>
);
const Github = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </SvgIcon>
);
const ExternalLink = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </SvgIcon>
);
const Sparkles = ({ className }) => (
  <SvgIcon className={className}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
  </SvgIcon>
);
const Radar = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34M4 6h.01M2.29 9.62A10 10 0 1 0 21.31 8.35" />
    <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
    <circle cx="12" cy="12" r="2" />
    <path d="m13.41 10.59 5.66-5.66" />
  </SvgIcon>
);
const Layers = ({ className }) => (
  <SvgIcon className={className}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </SvgIcon>
);
const Zap = ({ className }) => (
  <SvgIcon className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </SvgIcon>
);
const Volume2 = ({ className }) => (
  <SvgIcon className={className}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </SvgIcon>
);
const VolumeX = ({ className }) => (
  <SvgIcon className={className}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </SvgIcon>
);
const Sliders = ({ className }) => (
  <SvgIcon className={className}>
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </SvgIcon>
);
const Send = ({ className }) => (
  <SvgIcon className={className}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </SvgIcon>
);
const CheckCircle2 = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </SvgIcon>
);
const FolderGit2 = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    <circle cx="12" cy="13" r="2" />
    <path d="M14 13h3M7 13h3" />
  </SvgIcon>
);
const Star = ({ className }) => (
  <SvgIcon className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </SvgIcon>
);
const GitFork = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
    <path d="M12 12v3" />
  </SvgIcon>
);
const Activity = ({ className }) => (
  <SvgIcon className={className}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </SvgIcon>
);
const Play = ({ className }) => (
  <SvgIcon className={className}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </SvgIcon>
);
const Pause = ({ className }) => (
  <SvgIcon className={className}>
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </SvgIcon>
);
const RotateCcw = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </SvgIcon>
);
const Copy = ({ className }) => (
  <SvgIcon className={className}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </SvgIcon>
);
const Check = ({ className }) => (
  <SvgIcon className={className}>
    <polyline points="20 6 9 17 4 12" />
  </SvgIcon>
);
const Search = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </SvgIcon>
);
const Eye = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </SvgIcon>
);
const Shield = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </SvgIcon>
);
const Crosshair = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="22" y1="12" x2="18" y2="12" />
    <line x1="6" y1="12" x2="2" y2="12" />
    <line x1="12" y1="6" x2="12" y2="2" />
    <line x1="12" y1="22" x2="12" y2="18" />
  </SvgIcon>
);
const MapPin = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </SvgIcon>
);
const X = ({ className }) => (
  <SvgIcon className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </SvgIcon>
);
const RefreshCw = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </SvgIcon>
);
const Flame = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </SvgIcon>
);
const Grid = ({ className }) => (
  <SvgIcon className={className}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </SvgIcon>
);
const Server = ({ className }) => (
  <SvgIcon className={className}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </SvgIcon>
);
const Mail = ({ className }) => (
  <SvgIcon className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </SvgIcon>
);
const Phone = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </SvgIcon>
);
const GraduationCap = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M22 10 12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </SvgIcon>
);
const User = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </SvgIcon>
);
const Lock = ({ className }) => (
  <SvgIcon className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </SvgIcon>
);

// ============================================================================
// MOTEUR SONORE TACTIQUE (WEB AUDIO API)
// ============================================================================
class TacticalSoundEngine {
  ctx: AudioContext | null = null;
  enabled = false;

  init() {
    if (this.ctx || typeof window === 'undefined') return;
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioCtx) this.ctx = new AudioCtx();
  }

  playClick(freq = 800, duration = 0.05, type: OscillatorType = 'square') {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.4, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Ignore audio errors if blocked by browser policy
    }
  }

  playScan() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(1240, now + 0.18);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch (e) {}
  }

  playSuccess() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((n, idx) => {
        setTimeout(() => this.playClick(n, 0.08, 'triangle'), idx * 55);
      });
    } catch (e) {}
  }
}

const soundFX = new TacticalSoundEngine();

// ============================================================================
// DONNÉES INITIALES & PROJETS ENRICHIS (POUR COMPLÉTER L'API GITHUB LIVE)
// ============================================================================
const DEFAULT_PROFILE_CONFIG = {
  handle: 'grayhawk225-pixel',
  displayName: 'MOÏSE ONIKOYAMOU',
  role: 'Étudiant L2 TWIN (ESATIC) • Développeur Web & Mobile',
  tagline: 'Étudiant en Technologies Web et Image Numérique, je construis des interfaces et des applications concrètes avec React, TypeScript, Flutter et Python.',
  location: 'Abidjan, Côte d’Ivoire',
  statusText: 'ÉTUDIANT L2 TWIN • ESATIC • OUVERT AUX STAGES',
  bio: "Étudiant en Licence 2 filière TWIN (Technologies Web et Image Numérique) à l'ESATIC, rigoureux et passionné par les technologies du numérique. Je combine théorie académique et réalisation de projets concrets (développement web, conception d'interfaces, traitement de l'image numérique). À la recherche d'opportunités académiques et professionnelles (stage, projets collaboratifs) pour appliquer mon savoir-faire technique.",
  githubUrl: 'https://github.com/grayhawk225-pixel',
  email: 'onikoyamou9@gmail.com',
  phone: '+225 0545086784',
  availability: 'Stage / Projets collaboratifs',
  yearsExp: 'L2',
  school: 'ESATIC — Abidjan'
};

// Dépôts réels de https://github.com/grayhawk225-pixel (repli hors-ligne si l'API GitHub est indisponible)
const CURATED_PROJECTS = [
  {
    id: 'curated-1',
    name: 'TikTask',
    title: 'TikTask // Todo List Intelligente',
    description: "Todo List intelligente avec alarmes sonores et deadlines. Projet d'apprentissage React (hooks, context, reducer) conçu pour rester concentré et maîtriser son temps.",
    language: 'TypeScript',
    topics: ['React', 'TypeScript', 'Hooks', 'Context', 'Reducer'],
    Category: 'Web & Productivité',
    stars: 0,
    forks: 0,
    isCurated: true,
    isLiveGithub: false,
    html_url: 'https://github.com/grayhawk225-pixel/TikTask',
    architecture: {
      nodes: ['Interface React', 'Context API', 'Reducer (état des tâches)', 'Alarmes sonores & deadlines'],
      latency: 'React + TypeScript',
      throughput: 'Open-Source',
      snippet: `// Dépôt GitHub : grayhawk225-pixel/TikTask\n// Langage : TypeScript\n// Voir le code source sur GitHub pour le détail de l'implémentation.`
    }
  },
  {
    id: 'curated-2',
    name: 'Ivoire-Bio-AXE',
    title: 'Ivoire Bio-AXE // Plateforme d’Économie Circulaire',
    description: "Plateforme de mise en relation au sein d'une économie circulaire : elle connecte producteurs, collecteurs et transformateurs pour réduire l'empreinte environnementale en Côte d'Ivoire.",
    language: 'Dart',
    topics: ['Dart', 'Flutter', 'Économie circulaire', 'Côte d’Ivoire'],
    Category: 'Mobile & Impact',
    stars: 0,
    forks: 0,
    isCurated: true,
    isLiveGithub: false,
    html_url: 'https://github.com/grayhawk225-pixel/Ivoire-Bio-AXE',
    architecture: {
      nodes: ['Producteurs', 'Collecteurs', 'Transformateurs', 'Mise en relation'],
      latency: 'Dart',
      throughput: 'Open-Source',
      snippet: `// Dépôt GitHub : grayhawk225-pixel/Ivoire-Bio-AXE\n// Langage : Dart\n// Voir le code source sur GitHub pour le détail de l'implémentation.`
    }
  }
];

// Niveaux de maîtrise déclarés (barre de progression associée)
const SKILL_LEVELS = {
  intermediaire: { label: 'Intermédiaire', percent: 55 },
  avance: { label: 'Avancé', percent: 80 }
};

const SKILL_DOMAINS = [
  {
    id: 'dev',
    name: 'Développement Web & Mobile',
    icon: Layers,
    skills: [
      { name: 'TypeScript, JavaScript, Python', tag: 'Langages', level: 'intermediaire' },
      { name: 'HTML', tag: 'Web', level: 'avance' },
      { name: 'React, Tailwind CSS', tag: 'Web', level: 'intermediaire' },
      { name: 'Flutter, Dart, C++', tag: 'Mobile', level: 'intermediaire' },
      { name: 'Django', tag: 'Backend', level: 'intermediaire' }
    ]
  },
  {
    id: 'data',
    name: 'Bases de Données & Systèmes',
    icon: Server,
    skills: [
      { name: 'SQL (MySQL, PostgreSQL)', tag: 'SQL', level: 'intermediaire' },
      { name: 'NoSQL (MongoDB)', tag: 'NoSQL', level: 'intermediaire' },
      { name: 'Linux (Ubuntu, Kali), Windows, Multi-boot', tag: 'Systèmes', level: 'avance' },
      { name: 'Git, GitHub, dépôts collaboratifs', tag: 'Workflow', level: 'avance' }
    ]
  },
  {
    id: 'secu',
    name: 'Réseaux, Sécurité & Création',
    icon: Shield,
    skills: [
      { name: 'Fondamentaux réseaux', tag: 'Réseaux', level: 'intermediaire' },
      { name: 'Notions d’audit de sécurité', tag: 'Sécurité', level: 'intermediaire' },
      { name: 'Canva, Photoshop, Illustrator', tag: 'Design', level: 'intermediaire' },
      { name: 'Marketing, communication digitale, réseaux sociaux', tag: 'Com', level: 'avance' }
    ]
  }
];

const ABOUT_DATA = {
  education: [
    { years: '2026 – 2027', title: 'Licence 2 (L2) — TWIN', place: 'ESATIC — Abidjan', detail: 'Technologies Web et Image Numérique' },
    { years: '2025 – 2026', title: 'Licence 1 (L1) — TWIN', place: 'ESATIC — Abidjan', detail: 'Technologies Web et Image Numérique' },
    { years: '2025', title: 'Baccalauréat Scientifique', place: 'Collège Privé Les Cartésiens — Abidjan', detail: '' },
    { years: '2022', title: 'BEPC', place: 'Collège Pierre et Marie Curie — Abidjan', detail: '' }
  ],
  languages: [
    { name: 'Français', level: 'Niveau professionnel' },
    { name: 'Anglais', level: 'Niveau intermédiaire' },
    { name: 'Espagnol', level: 'Niveau intermédiaire' }
  ],
  qualities: ['Très bon relationnel', 'Discipliné', 'Rigoureux'],
  interests: ['Sport', 'Veille technologique', 'Ingénierie logicielle', 'Jeux vidéo tactiques & émulation', 'Musique']
};

const THEMES = {
  stealth: {
    id: 'stealth',
    name: 'Stealth Hawk',
    subtitle: 'Obsidienne & Radar Émeraude',
    bgPrimary: 'bg-slate-950',
    bgSecondary: 'bg-slate-900/80',
    border: 'border-emerald-500/25',
    accentText: 'text-emerald-400',
    accentBg: 'bg-emerald-500',
    accentSoft: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    glow: 'shadow-[0_0_30px_rgba(16,185,129,0.18)]',
    particleColor: '16, 185, 129',
    secondaryColor: '6, 182, 212'
  },
  abidjan225: {
    id: 'abidjan225',
    name: 'Abidjan Cyber-225',
    subtitle: 'Nuit Lagune, Orange Néon & Or',
    bgPrimary: 'bg-[#090814]',
    bgSecondary: 'bg-[#121026]/85',
    border: 'border-amber-500/30',
    accentText: 'text-amber-400',
    accentBg: 'bg-amber-500',
    accentSoft: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    glow: 'shadow-[0_0_30px_rgba(245,158,11,0.2)]',
    particleColor: '245, 158, 11',
    secondaryColor: '16, 185, 129'
  },
  pixelos: {
    id: 'pixelos',
    name: 'Retro Pixel OS',
    subtitle: 'Terminal Phosphore Cyan & Violet',
    bgPrimary: 'bg-[#050811]',
    bgSecondary: 'bg-[#0b1325]/85',
    border: 'border-cyan-400/30',
    accentText: 'text-cyan-400',
    accentBg: 'bg-cyan-400',
    accentSoft: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30',
    glow: 'shadow-[0_0_30px_rgba(34,211,238,0.22)]',
    particleColor: '34, 211, 238',
    secondaryColor: '168, 85, 247'
  }
};

// ============================================================================
// COMPOSANT : TEXTE DÉCRYPTÉ (EFFET CYBER SCRAMBLE)
// ============================================================================
function ScrambleText({ text, className = '' }) {
  const [displayed, setDisplayed] = useState(text);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/_-225<>[]*';

  const triggerScramble = useCallback(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayed(text);
      return () => {};
    }
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayed(
        text
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return ' ';
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 2;
    }, 25);
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    const cleanup = triggerScramble();
    return cleanup;
  }, [triggerScramble]);

  return (
    <span
      onMouseEnter={() => {
        soundFX.playClick(1100, 0.02);
        triggerScramble();
      }}
      className={`cursor-pointer select-none ${className}`}
      title="Survolez pour décrypter"
    >
      {displayed}
    </span>
  );
}

// ============================================================================
// COMPOSANT : FOND CANVAS INTERACTIF (GRILLE PIXEL & RADAR DE FAUCON)
// ============================================================================
function CyberHawkCanvas({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2, active: false };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Création des noeuds pixel-tactiques
    const count = Math.min(65, Math.floor((width * height) / 22000));
    const nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      size: Math.random() > 0.7 ? 3 : 2
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Grille tactique discrète
      const gridSize = 48;
      ctx.strokeStyle = `rgba(${theme.particleColor}, 0.035)`;
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Mise à jour et dessin des particules carrées (Pixels)
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Dessin du pixel
        ctx.fillStyle = `rgba(${theme.particleColor}, 0.45)`;
        ctx.fillRect(Math.floor(node.x), Math.floor(node.y), node.size, node.size);

        // Connexions entre noeuds proches
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(${theme.particleColor}, ${(1 - dist / 130) * 0.14})`;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Connexion au curseur "Radar Hawk"
        if (mouse.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.strokeStyle = `rgba(${theme.secondaryColor}, ${(1 - dist / 180) * 0.35})`;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      });

      // Réticule subtil autour de la souris
      if (mouse.active) {
        ctx.strokeStyle = `rgba(${theme.particleColor}, 0.18)`;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 28, 0, Math.PI * 2);
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}

// ============================================================================
// COMPOSANT : LABORATOIRE PIXEL & AUTOMATE CELLULAIRE "225-PIXEL SANDBOX"
// ============================================================================
const PRESET_PATTERNS = {
  hawk: [
    [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,1,1,1,0,0,0,0,0,1,1,1,0,0],
    [0,1,1,1,1,1,0,1,0,1,1,1,1,1,0],
    [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1],
    [1,0,0,0,1,1,1,1,1,1,1,0,0,0,1],
    [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,1,1,0,1,0,1,1,0,0,0,0],
    [0,0,0,1,1,0,0,1,0,0,1,1,0,0,0]
  ],
  code225: [
    [1,1,1,0,0,1,1,1,0,0,1,1,1],
    [0,0,1,0,0,0,0,1,0,0,1,0,0],
    [1,1,1,0,0,1,1,1,0,0,1,1,1],
    [1,0,0,0,0,1,0,0,0,0,0,0,1],
    [1,1,1,0,0,1,1,1,0,0,1,1,1]
  ]
};

function PixelLabSandbox({ theme }) {
  const ROWS = 14;
  const COLS = 28;
  const [grid, setGrid] = useState(() => {
    const empty = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    // Dessiner l'emblème Hawk par défaut au centre
    const pattern = PRESET_PATTERNS.hawk;
    const offsetY = 3;
    const offsetX = 6;
    pattern.forEach((row, rIdx) => {
      row.forEach((val, cIdx) => {
        if (empty[offsetY + rIdx] && empty[offsetY + rIdx][offsetX + cIdx] !== undefined) {
          empty[offsetY + rIdx][offsetX + cIdx] = val;
        }
      });
    });
    return empty;
  });

  const [isRunning, setIsRunning] = useState(false);
  const [generation, setGeneration] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);

  const loadPreset = (key) => {
    soundFX.playScan();
    setIsRunning(false);
    setGeneration(0);
    const next = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    const pattern = PRESET_PATTERNS[key];
    if (pattern) {
      const offsetY = Math.floor((ROWS - pattern.length) / 2);
      const offsetX = Math.floor((COLS - pattern[0].length) / 2);
      pattern.forEach((row, r) => {
        row.forEach((val, c) => {
          if (next[offsetY + r] && next[offsetY + r][offsetX + c] !== undefined) {
            next[offsetY + r][offsetX + c] = val;
          }
        });
      });
    }
    setGrid(next);
  };

  const randomizeGrid = () => {
    soundFX.playClick(640, 0.05);
    setGeneration(0);
    setGrid(
      Array.from({ length: ROWS }, () =>
        Array.from({ length: COLS }, () => (Math.random() > 0.72 ? 1 : 0))
      )
    );
  };

  const clearGrid = () => {
    soundFX.playClick(300, 0.04);
    setIsRunning(false);
    setGeneration(0);
    setGrid(Array.from({ length: ROWS }, () => Array(COLS).fill(0)));
  };

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setGrid((prev) => {
        const next = prev.map((row) => [...row]);
        for (let r = 0; r < ROWS; r++) {
          for (let c = 0; c < COLS; c++) {
            let neighbors = 0;
            for (let i = -1; i <= 1; i++) {
              for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                const nr = (r + i + ROWS) % ROWS;
                const nc = (c + j + COLS) % COLS;
                neighbors += prev[nr][nc];
              }
            }
            if (prev[r][c] === 1 && (neighbors < 2 || neighbors > 3)) {
              next[r][c] = 0;
            } else if (prev[r][c] === 0 && neighbors === 3) {
              next[r][c] = 1;
            }
          }
        }
        return next;
      });
      setGeneration((g) => g + 1);
    }, 180);

    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleCell = (r, c) => {
    soundFX.playClick(700 + (r + c) * 15, 0.02);
    setGrid((prev) => {
      const copy = prev.map((row) => [...row]);
      copy[r][c] = copy[r][c] ? 0 : 1;
      return copy;
    });
  };

  const activePixels = useMemo(
    () => grid.reduce((acc, row) => acc + row.reduce((s, v) => s + v, 0), 0),
    [grid]
  );

  return (
    <div className={`rounded-2xl border ${theme.border} ${theme.bgSecondary} backdrop-blur-xl p-5 sm:p-6`}>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <Grid className={`w-4 h-4 ${theme.accentText}`} />
            <h3 className="text-sm font-mono uppercase tracking-wider text-white font-semibold">
              LABO // MATRICE 225-PIXEL & AUTOMATE DE CONWAY
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Dessinez des pixels à la souris ou lancez la simulation d’automate cellulaire temps-réel.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              soundFX.playClick(920, 0.04);
              setIsRunning(!isRunning);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition ${
              isRunning
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                : `${theme.accentBg} text-slate-950 font-semibold`
            }`}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isRunning ? 'Pause' : 'Simuler Vie'}
          </button>

          <button
            onClick={() => loadPreset('hawk')}
            className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            Emblème Hawk
          </button>
          <button
            onClick={() => loadPreset('code225')}
            className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            Preset #225
          </button>
          <button
            onClick={randomizeGrid}
            className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            Chaos
          </button>
          <button
            onClick={clearGrid}
            className="p-1.5 rounded-lg text-xs font-mono bg-slate-800/90 hover:bg-rose-950/60 text-slate-400 hover:text-rose-300 border border-slate-700 transition"
            title="Effacer la matrice"
            aria-label="Effacer la matrice"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Grille Pixel Interactive */}
      <div
        className="w-full overflow-x-auto pb-2 select-none"
        onPointerLeave={() => setIsDrawing(false)}
        onPointerUp={() => setIsDrawing(false)}
      >
        <div
          className="grid gap-1 mx-auto bg-slate-950/90 p-3 rounded-xl border border-slate-800/80"
          style={{
            gridTemplateColumns: `repeat(${COLS}, minmax(14px, 1fr))`,
            minWidth: '480px'
          }}
        >
          {grid.map((row, rIdx) =>
            row.map((cell, cIdx) => (
              <div
                key={`${rIdx}-${cIdx}`}
                onPointerDown={() => {
                  setIsDrawing(true);
                  toggleCell(rIdx, cIdx);
                }}
                onPointerEnter={() => {
                  if (isDrawing) toggleCell(rIdx, cIdx);
                }}
                className={`aspect-square rounded-[2px] cursor-crosshair transition-all duration-100 ${
                  cell
                    ? `${theme.accentBg} shadow-[0_0_8px_rgba(16,185,129,0.6)] scale-95`
                    : 'bg-slate-900/90 hover:bg-slate-800'
                }`}
              />
            ))
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs font-mono text-slate-400 mt-3 pt-3 border-t border-slate-800/60">
        <span>CELLULES ACTIVES : <strong className={theme.accentText}>{activePixels}</strong> / {ROWS * COLS}</span>
        <span>GÉNÉRATION : <strong className="text-white">#{generation}</strong></span>
        <span className="hidden sm:inline">MODE : AUTOMATE TOROÏDAL 2D</span>
      </div>
    </div>
  );
}

// ============================================================================
// COMPOSANT PRINCIPAL : PORTFOLIO GRAYHAWK // 225-PIXEL
// ============================================================================
export default function App() {
  // Thème Visuel
  const [themeKey, setThemeKey] = useState('stealth');
  const theme = THEMES[themeKey];

  // Audio
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Profil personnalisable en direct
  const profile = DEFAULT_PROFILE_CONFIG;

  // État API GitHub Live
  const [githubUser, setGithubUser] = useState(null);
  const [githubRepos, setGithubRepos] = useState([]);
  const [githubLoading, setGithubLoading] = useState(true);
  const [githubError, setGithubError] = useState(null);
  const [dataSourceMode, setDataSourceMode] = useState('hybrid'); // 'hybrid' | 'live_only'

  // Filtres Projets & Modal d'Architecture
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectedProject, setInspectedProject] = useState(null);

  // Terminal Interactif hawk-sh
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    {
      type: 'system',
      text: 'HAWK-OS v4.225 (Abidjan-Cyber-Kernel) initialisé. Tapez "help" ou cliquez sur une commande rapide.'
    },
    {
      type: 'output',
      text: 'Connexion établie avec https://github.com/grayhawk225-pixel ... [OK]'
    }
  ]);
  const terminalEndRef = useRef(null);

  // Formulaire de Contact
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    missionType: 'Stage / Projet collaboratif',
    message: ''
  });
  const [transmissionSent, setTransmissionSent] = useState(false);

  // Synchronisation avec l'API publique GitHub
  const fetchGithubData = useCallback(async () => {
    setGithubLoading(true);
    setGithubError(null);
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch('https://api.github.com/users/grayhawk225-pixel'),
        fetch('https://api.github.com/users/grayhawk225-pixel/repos?sort=updated&per_page=12')
      ]);

      if (userRes.ok) {
        const userData = await userRes.json();
        setGithubUser(userData);
      } else {
        setGithubError('Limite API GitHub atteinte ou mode hors-ligne — Bascule sur le cache tactique.');
      }

      if (reposRes.ok) {
        const reposData = await reposRes.json();
        if (Array.isArray(reposData)) {
          setGithubRepos(reposData);
        }
      }
    } catch (err) {
      setGithubError('Mode autonome activé (API GitHub indisponible).');
    } finally {
      setGithubLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGithubData();
  }, [fetchGithubData]);

  // Fermeture de la fenêtre d'architecture avec la touche Échap
  useEffect(() => {
    if (!inspectedProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setInspectedProject(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [inspectedProject]);

  // Fusion intelligente des dépôts GitHub en direct et des projets d'ingénierie phares
  const allProjects = useMemo(() => {
    const mappedLiveRepos = githubRepos.map((repo) => ({
      id: `gh-${repo.id}`,
      name: repo.name,
      title: repo.name
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (l) => l.toUpperCase()),
      description:
        repo.description ||
        `Dépôt public hébergé sur le GitHub de grayhawk225-pixel (${repo.language || 'Code & Architecture'}). Mis à jour récemment.`,
      language: repo.language || 'Multi-Stack',
      topics:
        repo.topics && repo.topics.length > 0
          ? repo.topics
          : [repo.language || 'GitHub', 'Open-Source', '225-Pixel'],
      Category: 'GitHub Live',
      stars: repo.stargazers_count || 0,
      forks: repo.forks_count || 0,
      isLiveGithub: true,
      updatedAt: repo.updated_at,
      html_url: repo.html_url || 'https://github.com/grayhawk225-pixel',
      architecture: {
        nodes: ['Source Repository', 'Build & Linting Pipeline', 'Module Core', 'Déploiement Edge'],
        latency: 'Optimal',
        throughput: 'Open-Source',
        snippet: `// Dépôt GitHub Live : ${repo.full_name || repo.name}\n// URL : ${repo.html_url}\n// Branche par défaut : ${repo.default_branch || 'main'}\n\nexport const repoMetadata = {\n  owner: "grayhawk225-pixel",\n  repository: "${repo.name}",\n  language: "${repo.language || 'TypeScript'}",\n  verified: true\n};`
      }
    }));

    if (dataSourceMode === 'live_only' && mappedLiveRepos.length > 0) {
      return mappedLiveRepos;
    }
    const liveNames = new Set(mappedLiveRepos.map((r) => r.name.toLowerCase()));
    return [
      ...mappedLiveRepos,
      ...CURATED_PROJECTS.filter((c) => !liveNames.has(c.name.toLowerCase()))
    ];
  }, [githubRepos, dataSourceMode]);

  const categories = useMemo(() => {
    const cats = new Set(['Tous']);
    allProjects.forEach((p) => cats.add(p.Category));
    return Array.from(cats);
  }, [allProjects]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesCat = selectedCategory === 'Tous' || p.Category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.language.toLowerCase().includes(q) ||
        p.topics.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [allProjects, selectedCategory, searchQuery]);

  // Gestion de l'audio
  const toggleAudio = () => {
    const next = !soundEnabled;
    soundFX.enabled = next;
    setSoundEnabled(next);
    if (next) soundFX.playSuccess();
  };

  // Exécution des commandes du terminal interactif
  const runTerminalCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;
    soundFX.playClick(760, 0.03);

    const newEntries = [{ type: 'command', text: `grayhawk@225-pixel:~$ ${rawCmd}` }];

    switch (cmd) {
      case 'help':
        newEntries.push({
          type: 'output',
          text: `Commandes disponibles :
  • whoami     : Identité & Philosophie de GrayHawk // 225-Pixel
  • github     : État de synchronisation en direct avec GitHub
  • skills     : Matrice des compétences & Stack technique
  • projects   : Lister les systèmes et dépôts actifs
  • 225        : Hommage à Abidjan & à la scène Tech ivoirienne
  • contact    : Coordonnées de transmission directe
  • clear      : Nettoyer le terminal`
        });
        break;
      case 'whoami':
        newEntries.push({
          type: 'output',
          text: `${profile.displayName} — ${profile.role}\n"${profile.bio}"`
        });
        break;
      case 'github':
        newEntries.push({
          type: 'output',
          text: `Profil GitHub : https://github.com/grayhawk225-pixel\nDépôts publics détectés : ${
            githubUser ? githubUser.public_repos : githubRepos.length
          } | Followers : ${githubUser ? githubUser.followers : 'Actif'}\nStatut API : ${
            githubError ? 'Mode Hybride Enrichi' : 'Connecté en temps réel (200 OK)'
          }`
        });
        break;
      case 'skills':
        newEntries.push({
          type: 'output',
          text: `STACK PRINCIPALE :
  [Dev]       TypeScript, JavaScript, Python, C++, HTML, React, Flutter, Dart, Django, Tailwind CSS
  [Données]   MySQL, PostgreSQL, MongoDB
  [Systèmes]  Linux (Ubuntu, Kali), Windows, Git, GitHub
  [Réseaux]   Fondamentaux réseaux, notions d'audit de sécurité`
        });
        break;
      case 'projects':
        newEntries.push({
          type: 'output',
          text: allProjects
            .slice(0, 5)
            .map((p, i) => `  ${i + 1}. [${p.language}] ${p.name} — ★ ${p.stars}`)
            .join('\n')
        });
        break;
      case '225':
        newEntries.push({
          type: 'highlight',
          text: `⚡ CODE #225 ACTIVÉ — Depuis Abidjan vers le monde entier. Alliance de l'audace créative ivoirienne et des standards d'ingénierie internationaux.`
        });
        break;
      case 'contact':
        newEntries.push({
          type: 'output',
          text: `GitHub : ${profile.githubUrl}\nEmail  : ${profile.email}\nStatut : ${profile.statusText}`
        });
        break;
      case 'clear':
        setTerminalHistory([
          { type: 'system', text: 'Terminal réinitialisé. Tapez "help" pour voir les commandes.' }
        ]);
        setTerminalInput('');
        return;
      default:
        newEntries.push({
          type: 'error',
          text: `Commande inconnue: "${cmd}". Tapez "help" pour afficher la liste des commandes.`
        });
    }

    setTerminalHistory((prev) => [...prev, ...newEntries]);
    setTerminalInput('');
    setTimeout(() => {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    runTerminalCommand(terminalInput);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    soundFX.playSuccess();
    const subject = encodeURIComponent(`[Portfolio] ${contactForm.missionType}`);
    const body = encodeURIComponent(
      `Nom : ${contactForm.name}\nEmail : ${contactForm.email}\n\n${contactForm.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setTransmissionSent(true);
    setTimeout(() => setTransmissionSent(false), 6000);
  };

  return (
    <div className={`min-h-screen ${theme.bgPrimary} text-slate-100 relative selection:bg-emerald-500 selection:text-slate-950 font-sans overflow-x-hidden`}>
      <a href="#contenu" className="skip-link">Aller au contenu</a>

      {/* Fond Canvas Interactif */}
      <CyberHawkCanvas theme={theme} />

      {/* =================================================================== */}
      {/* BARRE DE NAVIGATION TACTIQUE (HUD HEADER)                           */}
      {/* =================================================================== */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/75 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          {/* Identité & Logo */}
          <a
            href="#contenu"
            aria-label="Accueil — Moïse Onikoyamou"
            onClick={() => soundFX.playClick(900, 0.03)}
            className="flex items-center gap-3 group"
          >
            <div className={`w-10 h-10 rounded-xl ${theme.accentSoft} border flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition`}>
              <Crosshair className={`w-5 h-5 ${theme.accentText} animate-pulse`} />
              <span className="absolute bottom-0.5 right-1 text-[8px] font-mono font-bold opacity-80">
                225
              </span>
            </div>
            <div>
              <div className="font-mono font-bold tracking-wider text-sm sm:text-base flex items-center gap-1.5 text-white">
                <span>GRAYHAWK</span>
                <span className={theme.accentText}>//</span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  225-PIXEL
                </span>
              </div>
              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="truncate max-w-[180px] sm:max-w-none">
                  github.com/grayhawk225-pixel
                </span>
              </div>
            </div>
          </a>

          {/* Liens de navigation rapide */}
          <nav className="hidden xl:flex items-center gap-5 whitespace-nowrap text-xs font-mono uppercase tracking-wider text-slate-300 [&_svg]:hidden 2xl:[&_svg]:block">
            <a href="#apropos" className="py-2 hover:text-emerald-300 transition flex items-center gap-1">
              <User className="w-3.5 h-3.5" /> À propos
            </a>
            <a href="#projets" className="py-2 hover:text-emerald-300 transition flex items-center gap-1">
              <FolderGit2 className="w-3.5 h-3.5" /> Projets
            </a>
            <a href="#adn" className="py-2 hover:text-emerald-300 transition flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5" /> ADN & Stack
            </a>
            <a href="#terminal" className="py-2 hover:text-emerald-300 transition flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5" /> Terminal
            </a>
            <a href="#labo" className="py-2 hover:text-emerald-300 transition flex items-center gap-1">
              <Grid className="w-3.5 h-3.5" /> Labo Pixel
            </a>
            <a href="#contact" className="py-2 hover:text-emerald-300 transition flex items-center gap-1">
              <Send className="w-3.5 h-3.5" /> Contact
            </a>
          </nav>

          {/* Actions : Thème, Audio, Studio de personnalisation */}
          <div className="flex items-center gap-2">
            {/* Sélecteur de Thème */}
            <div className="hidden sm:flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800">
              {Object.values(THEMES).map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    soundFX.playClick(1000, 0.03);
                    setThemeKey(t.id);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition ${
                    themeKey === t.id
                      ? `${theme.accentBg} text-slate-950 font-bold`
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title={t.subtitle}
                >
                  {t.name.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Bouton Audio Synthétique */}
            <button
              onClick={toggleAudio}
              aria-pressed={soundEnabled}
              aria-label="Effets sonores"
              className={`p-2 rounded-xl border transition ${
                soundEnabled
                  ? `${theme.accentSoft}`
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
              }`}
              title={soundEnabled ? 'Effets sonores tactiques activés' : 'Activer les effets sonores tactiques'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>
        <nav
          aria-label="Sections"
          className="mobile-nav xl:hidden flex items-center gap-2 overflow-x-auto px-4 pb-3 text-xs font-mono uppercase tracking-wider"
        >
          {[
            ['#apropos', 'À propos'],
            ['#projets', 'Projets'],
            ['#adn', 'Stack'],
            ['#terminal', 'Terminal'],
            ['#labo', 'Labo'],
            ['#contact', 'Contact']
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="shrink-0 min-h-[44px] inline-flex items-center px-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white hover:border-emerald-500/50 transition"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* =================================================================== */}
      {/* CONTENU PRINCIPAL                                                   */}
      {/* =================================================================== */}
      <main id="contenu" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 space-y-20 sm:space-y-28">
        
        {/* ================================================================= */}
        {/* SECTION 1 : HERO CYBER-TACTIQUE & TÉLÉMÉTRIE GITHUB LIVE          */}
        {/* ================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          {/* Colonne Principale (8 cols) */}
          <div className={`lg:col-span-8 rounded-3xl border ${theme.border} ${theme.bgSecondary} ${theme.glow} backdrop-blur-xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden`}>
            {/* Filigrane décoratif 225-PIXEL */}
            <div className="absolute -right-6 -bottom-8 text-[110px] font-mono font-black text-white/[0.02] select-none pointer-events-none leading-none">
              225//PX
            </div>

            <div>
              {/* Badge Statut Opérationnel */}
              <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-3.5 py-2 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs font-mono mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className={theme.accentText}>{profile.statusText}</span>
                <span className="text-slate-600 hidden sm:inline">|</span>
                <span className="text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {profile.location}
                </span>
              </div>

              {/* Titre Principal avec effet de décryptage */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6">
                <ScrambleText text={profile.displayName} className="font-mono" />
                <span className={`block font-sans text-lg sm:text-2xl lg:text-[1.75rem] font-semibold tracking-normal leading-snug mt-4 ${theme.accentText}`}>
                  {profile.role}
                </span>
              </h1>

              {/* Tagline & Bio */}
              <p className="text-base sm:text-lg text-slate-100 max-w-2xl leading-relaxed mb-4">
                {profile.tagline}
              </p>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                {githubUser?.bio || profile.bio}
              </p>
            </div>

            {/* Barre d'actions & Statistiques Clés */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projets"
                  onClick={() => soundFX.playScan()}
                  className={`px-5 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold ${theme.accentBg} text-slate-950 flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition shadow-lg`}
                >
                  <Radar className="w-4 h-4" />
                  Explorer mes Systèmes ({allProjects.length})
                </a>

                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick(820, 0.04)}
                  className="px-4 py-3 rounded-xl font-mono text-xs sm:text-sm font-medium bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 flex items-center justify-center gap-2 transition"
                >
                  <Github className="w-4 h-4" />
                  @grayhawk225-pixel
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

              {/* Sélecteur de thème mobile */}
              <div className="flex sm:hidden items-center justify-between bg-slate-950/80 p-1.5 rounded-xl border border-slate-800">
                <span className="text-xs font-mono text-slate-400 px-2">Thème :</span>
                <div className="flex gap-1">
                  {Object.values(THEMES).map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setThemeKey(t.id)}
                      className={`px-2 py-1 rounded text-[11px] font-mono ${
                        themeKey === t.id ? `${theme.accentBg} text-slate-950 font-bold` : 'text-slate-400'
                      }`}
                    >
                      {t.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Télémétrie & Carte d'Identité GitHub Live (4 cols) */}
          <div className={`lg:col-span-4 rounded-3xl border ${theme.border} ${theme.bgSecondary} backdrop-blur-xl p-6 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <Activity className={`w-4 h-4 ${theme.accentText}`} />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    TÉLÉMÉTRIE GITHUB LIVE
                  </span>
                </div>
                <button
                  onClick={() => {
                    soundFX.playScan();
                    fetchGithubData();
                  }}
                  className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition"
                  title="Rafraîchir l'API GitHub"
                  aria-label="Rafraîchir les données GitHub"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${githubLoading ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {/* Avatar & Identité GitHub */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  {githubUser?.avatar_url ? (
                    <img
                      src={githubUser.avatar_url}
                      alt="grayhawk225-pixel"
                      className={`w-16 h-16 rounded-2xl object-cover border-2 ${theme.border}`}
                    />
                  ) : (
                    <div className={`w-16 h-16 rounded-2xl ${theme.accentSoft} border flex items-center justify-center font-mono font-bold text-xl`}>
                      GH
                    </div>
                  )}
                  <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 text-[9px] font-mono font-bold bg-emerald-500 text-slate-950 rounded">
                    LIVE
                  </span>
                </div>

                <div>
                  <h2 className="font-mono font-bold text-white text-base">
                    {githubUser?.name || 'GrayHawk 225'}
                  </h2>
                  <p className={`text-xs font-mono ${theme.accentText}`}>
                    @{githubUser?.login || 'grayhawk225-pixel'}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {githubUser?.created_at
                      ? `Membre GitHub depuis ${new Date(githubUser.created_at).getFullYear()}`
                      : 'Ingénierie & Pixel Craft'}
                  </p>
                </div>
              </div>

              {/* Grille de Métriques */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/90">
                  <div className="text-xs font-mono text-slate-400">DÉPÔTS PUBLICS</div>
                  <div className="text-2xl font-mono font-bold text-white mt-1 flex items-baseline gap-2">
                    {githubUser?.public_repos ?? githubRepos.length}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/90">
                  <div className="text-xs font-mono text-slate-400">FORMATION</div>
                  <div className="text-2xl font-mono font-bold text-white mt-1 flex items-baseline gap-1">
                    L2<span className={`text-xs ${theme.accentText}`}>TWIN • ESATIC</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/90">
                  <div className="text-xs font-mono text-slate-400">BASE OPÉRATIONNELLE</div>
                  <div className="text-sm font-mono font-bold text-white mt-1.5 flex items-center gap-1.5">
                    <Globe className={`w-4 h-4 ${theme.accentText}`} />
                    ABIDJAN #225
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/90">
                  <div className="text-xs font-mono text-slate-400">DISPONIBILITÉ</div>
                  <div className="text-sm font-mono font-bold text-emerald-400 mt-1.5 flex items-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    IMMÉDIATE
                  </div>
                </div>
              </div>
            </div>

            {/* Commutateur de Mode de Données */}
            <div className="p-3 rounded-2xl bg-slate-950/90 border border-slate-800 text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs text-slate-400">SOURCE DES PROJETS :</span>
                <span className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${theme.accentSoft}`}>
                  {dataSourceMode === 'hybrid' ? 'Hybride (GitHub + Vitrine)' : 'GitHub Strict'}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={() => {
                    soundFX.playClick(750, 0.03);
                    setDataSourceMode('hybrid');
                  }}
                  className={`py-1.5 px-2 rounded-lg font-mono text-xs transition ${
                    dataSourceMode === 'hybrid'
                      ? `${theme.accentBg} text-slate-950 font-bold`
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  Mode Enrichi
                </button>
                <button
                  onClick={() => {
                    soundFX.playClick(750, 0.03);
                    setDataSourceMode('live_only');
                  }}
                  className={`py-1.5 px-2 rounded-lg font-mono text-xs transition ${
                    dataSourceMode === 'live_only'
                      ? `${theme.accentBg} text-slate-950 font-bold`
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  100% API GitHub
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION À PROPOS : PRÉSENTATION, PARCOURS, LANGUES, INTÉRÊTS      */}
        {/* ================================================================= */}
        <section id="apropos" className="space-y-6 scroll-mt-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400">
            <User className={`w-4 h-4 ${theme.accentText}`} />
            <span>À PROPOS DE MOI</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className={`lg:col-span-7 rounded-2xl border ${theme.border} ${theme.bgSecondary} backdrop-blur-xl p-6 sm:p-8`}>
              <div className="flex items-center gap-5 mb-5">
                <img
                  src={`${import.meta.env.BASE_URL}photo.jpg`}
                  alt={`Portrait de ${profile.displayName}`}
                  className={`w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-full object-cover portrait-ring`}
                />
                <div>
                  <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    Qui suis-je ?
                  </h2>
                  <p className={`text-xs font-mono mt-1 ${theme.accentText}`}>{profile.displayName}</p>
                  <p className="text-xs font-mono text-slate-400">{profile.role}</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{profile.bio}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Qualités</h3>
                  <div className="flex flex-wrap gap-2">
                    {ABOUT_DATA.qualities.map((q) => (
                      <span key={q} className={`px-2.5 py-1 rounded-lg border text-xs font-mono ${theme.accentSoft}`}>{q}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Langues</h3>
                  <ul className="space-y-1 text-xs font-mono text-slate-300">
                    {ABOUT_DATA.languages.map((l) => (
                      <li key={l.name} className="flex justify-between gap-3">
                        <span className="text-white">{l.name}</span>
                        <span className="text-slate-400">{l.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Centres d’intérêt</h3>
                <div className="flex flex-wrap gap-2">
                  {ABOUT_DATA.interests.map((i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-200">{i}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`lg:col-span-5 rounded-2xl border ${theme.border} ${theme.bgSecondary} backdrop-blur-xl p-6 sm:p-8`}>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className={`w-4 h-4 ${theme.accentText}`} />
                <h3 className="text-sm font-mono uppercase tracking-wider text-white font-semibold">Parcours académique</h3>
              </div>
              <ol className="space-y-4 border-l border-slate-800 pl-4">
                {ABOUT_DATA.education.map((e) => (
                  <li key={e.years + e.title} className="relative">
                    <span className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full ${theme.accentBg}`} />
                    <div className={`text-xs font-mono ${theme.accentText}`}>{e.years}</div>
                    <div className="text-sm font-semibold text-white">{e.title}</div>
                    <div className="text-xs text-slate-400">{e.place}</div>
                    {e.detail && <div className="text-xs text-slate-400">{e.detail}</div>}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 2 : VITRINE DES PROJETS & INSPECTEUR D'ARCHITECTURE       */}
        {/* ================================================================= */}
        <section id="projets" className="space-y-6 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                <FolderGit2 className={`w-4 h-4 ${theme.accentText}`} />
                <span>RÉPERTOIRE SYSTÈME & DÉPÔTS GITHUB</span>
              </div>
              <h2 className="section-title text-2xl sm:text-4xl font-bold text-white">
                Projets & Architectures Déployées
              </h2>
            </div>

            {/* Barre de recherche & Filtres */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filtrer (React, Dart, TypeScript...)"
                  aria-label="Filtrer les projets"
                  className="pl-9 pr-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60"
                />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    aria-pressed={selectedCategory === cat}
                    onClick={() => {
                      soundFX.playClick(840, 0.03);
                      setSelectedCategory(cat);
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-mono transition ${
                      selectedCategory === cat
                        ? `${theme.accentBg} text-slate-950 font-bold`
                        : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grille des cartes de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group rounded-2xl border ${theme.border} ${theme.bgSecondary} backdrop-blur-xl p-6 flex flex-col justify-between card-lift relative overflow-hidden`}
              >
                <div>
                  {/* En-tête de la carte */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium border ${theme.accentSoft}`}>
                      {project.language}
                    </span>

                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                      {project.isLiveGithub && (
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[11px]">
                          LIVE API
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-slate-400" />
                        {project.forks}
                      </span>
                    </div>
                  </div>

                  {/* Titre & Description */}
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition mb-2 font-mono leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags Techniques */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-950/90 border border-slate-800 text-xs font-mono text-slate-400"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pied de carte : Inspecter l'architecture ou Ouvrir sur GitHub */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      soundFX.playScan();
                      setInspectedProject(project);
                    }}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-semibold border ${theme.accentSoft} hover:bg-emerald-500/20 flex items-center justify-center gap-1.5 transition`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Inspecter Architecture
                  </button>

                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFX.playClick(950, 0.03)}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition"
                    title="Voir sur GitHub"
                    aria-label={`Voir ${project.name} sur GitHub`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 3 : MATRICE ADN, COMPÉTENCES & MANIFESTE D'INGÉNIERIE     */}
        {/* ================================================================= */}
        <section id="adn" className="space-y-6 scroll-mt-20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
              <Cpu className={`w-4 h-4 ${theme.accentText}`} />
              <span>CAPACITÉS OPÉRATIONNELLES & STACK TECHNIQUE</span>
            </div>
            <h2 className="section-title text-2xl sm:text-4xl font-bold text-white">
              ADN Technique // La Précision du Faucon
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SKILL_DOMAINS.map((domain) => {
              const IconComponent = domain.icon;
              return (
                <div
                  key={domain.id}
                  className={`rounded-2xl border ${theme.border} ${theme.bgSecondary} backdrop-blur-xl p-6 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl border ${theme.accentSoft}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="font-mono font-bold text-white text-sm sm:text-base">
                          {domain.name}
                        </h3>
                      </div>

                    </div>

                    <div className="space-y-4">
                      {domain.skills.map((skill, idx) => (
                        <div key={idx}>
                          <div className="flex items-center justify-between gap-3 text-xs font-mono mb-1.5">
                            <span className="text-slate-200">{skill.name}</span>
                            <span className="shrink-0 text-slate-400 text-xs">
                              [{skill.tag}] {SKILL_LEVELS[skill.level].label}
                            </span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden p-0.5 border border-slate-800">
                            <div
                              className={`h-full rounded-full ${theme.accentBg} transition-all duration-700`}
                              style={{ width: `${SKILL_LEVELS[skill.level].percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>NIVEAUX DÉCLARÉS</span>
                    <span className={theme.accentText}>INTERMÉDIAIRE / AVANCÉ</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Les 3 Piliers de la signature GrayHawk 225-Pixel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-4">
              <div className={`p-2.5 rounded-xl ${theme.accentSoft} border shrink-0`}>
                <Crosshair className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-mono font-bold text-white text-sm">1. GRAYHAWK (Vision & Architecture)</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Prendre de la hauteur sur la complexité système pour concevoir du code modulaire, maintenable et sans dette cachée.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-4">
              <div className={`p-2.5 rounded-xl ${theme.accentSoft} border shrink-0`}>
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-mono font-bold text-white text-sm">2. CODE #225 (Résilience & Audace)</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  L’ingéniosité pragmatique : bâtir des solutions simples et efficaces qui fonctionnent même dans des environnements contraints.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-4">
              <div className={`p-2.5 rounded-xl ${theme.accentSoft} border shrink-0`}>
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-mono font-bold text-white text-sm">3. PIXEL (Sens du Détail & UI)</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Chaque pixel et chaque micro-interaction comptent. Une ingénierie puissante mérite une interface mémorable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 4 : TERMINAL INTERACTIF (HAWK-SH) & LABO PIXEL            */}
        {/* ================================================================= */}
        <section id="terminal" className="grid grid-cols-1 lg:grid-cols-12 gap-6 scroll-mt-20">
          {/* Terminal Interactif (6 cols) */}
          <div className={`lg:col-span-6 rounded-2xl border ${theme.border} bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between overflow-hidden shadow-2xl`}>
            {/* Barre de titre du terminal */}
            <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  hawk-sh — grayhawk225-pixel@abidjan:~
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">UTF-8 // ZSH</span>
            </div>

            {/* Corps du terminal */}
            <div className="p-4 font-mono text-xs space-y-2.5 h-72 overflow-y-auto">
              {terminalHistory.map((item, index) => (
                <div key={index} className="leading-relaxed whitespace-pre-wrap">
                  {item.type === 'system' && (
                    <span className="text-slate-400">{item.text}</span>
                  )}
                  {item.type === 'command' && (
                    <span className="text-white font-bold">{item.text}</span>
                  )}
                  {item.type === 'output' && (
                    <span className={theme.accentText}>{item.text}</span>
                  )}
                  {item.type === 'highlight' && (
                    <span className="text-amber-300 font-semibold">{item.text}</span>
                  )}
                  {item.type === 'error' && (
                    <span className="text-rose-400">{item.text}</span>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Raccourcis de commandes cliquables + Input */}
            <div className="p-3 bg-slate-900/70 border-t border-slate-800 space-y-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-slate-400 mr-1">Commandes rapides :</span>
                {['help', 'whoami', 'github', 'skills', 'projects', '225', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={() => runTerminalCommand(cmd)}
                    className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 border border-slate-700 transition"
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2">
                <span className={`font-mono text-xs font-bold ${theme.accentText}`}>
                  hawk@225:~$
                </span>
                <input
                  type="text"
                  aria-label="Commande du terminal"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Tapez une commande (ex: whoami, 225, skills)..."
                  className="flex-1 bg-transparent text-xs font-mono text-white placeholder-slate-400 min-w-0"
                />
                <button
                  type="submit"
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${theme.accentBg} text-slate-950`}
                >
                  Exécuter
                </button>
              </form>
            </div>
          </div>

          {/* Sandbox Pixel Art & Automate Cellulaire (6 cols) */}
          <div id="labo" className="lg:col-span-6 scroll-mt-20">
            <PixelLabSandbox theme={theme} />
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 5 : CANAL DE TRANSMISSION (CONTACT & COLLABORATION)       */}
        {/* ================================================================= */}
        <section id="contact" className="scroll-mt-20">
          <div className={`rounded-3xl border ${theme.border} ${theme.bgSecondary} backdrop-blur-xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8`}>
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                  <Send className={`w-4 h-4 ${theme.accentText}`} />
                  <span>ME CONTACTER</span>
                </div>
                <h2 className="section-title text-2xl sm:text-4xl font-bold text-white mb-5">
                  Travaillons ensemble.
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Vous proposez un stage, un projet collaboratif ou une opportunité dans le numérique ? Écrivez-moi : je réponds avec plaisir.
                </p>

                <div className="space-y-3 text-xs font-mono">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition group"
                  >
                    <span className="flex items-center gap-2.5 text-slate-200">
                      <Mail className={`w-4 h-4 ${theme.accentText}`} />
                      {profile.email}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  </a>

                  <a
                    href={`tel:${profile.phone.replace(/\s/g, '')}`}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition group"
                  >
                    <span className="flex items-center gap-2.5 text-slate-200">
                      <Phone className={`w-4 h-4 ${theme.accentText}`} />
                      {profile.phone}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  </a>

                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition group"
                  >
                    <span className="flex items-center gap-2.5 text-slate-200">
                      <Github className={`w-4 h-4 ${theme.accentText}`} />
                      github.com/grayhawk225-pixel
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  </a>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="flex items-center gap-2.5 text-slate-200">
                      <MapPin className={`w-4 h-4 ${theme.accentText}`} />
                      {profile.location}
                    </span>
                    <span className="text-emerald-400">UTC+0</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                <div>DISPONIBILITÉ : <strong className="text-white">{profile.availability}</strong></div>
              </div>
            </div>

            {/* Formulaire de Transmission */}
            <form onSubmit={handleContactSubmit} className="lg:col-span-7 space-y-4 bg-slate-950/70 p-6 rounded-2xl border border-slate-800/90">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-nom" className="block text-xs font-mono text-slate-300 mb-1.5">
                    IDENTIFIANT // NOM
                  </label>
                  <input
                    id="contact-nom"
                    autoComplete="name"
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Ex: Sarah Koné / CTO"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    CANAL RETOUR // EMAIL
                  </label>
                  <input
                    id="contact-email"
                    autoComplete="email"
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="sarah@entreprise.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-mission" className="block text-xs font-mono text-slate-300 mb-1.5">
                  NATURE DE LA MISSION
                </label>
                <select
                  id="contact-mission"
                  value={contactForm.missionType}
                  onChange={(e) => setContactForm({ ...contactForm, missionType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition"
                >
                  <option>Stage / Projet collaboratif</option>
                  <option>Développement Web (React / TypeScript)</option>
                  <option>Application Mobile (Flutter / Dart)</option>
                  <option>Collaboration Open-Source sur GitHub</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                  PAYLOAD // DÉTAILS DU PROJET
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Décrivez vos objectifs techniques, vos délais ou votre vision..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Lock className={`w-3.5 h-3.5 ${theme.accentText}`} />
                  Ouvre votre application mail
                </div>

                <button
                  type="submit"
                  className={`px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold ${theme.accentBg} text-slate-950 flex items-center gap-2 hover:brightness-110 active:scale-[0.98] transition`}
                >
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </button>
              </div>

              {transmissionSent && (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    Votre application mail s’ouvre avec le message prêt à envoyer, {contactForm.name}. Il ne sera transmis qu’après votre envoi.
                  </span>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* =================================================================== */}
      {/* MODAL : INSPECTEUR D'ARCHITECTURE SYSTÈME                           */}
      {/* =================================================================== */}
      {inspectedProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Architecture du projet ${inspectedProject.title}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setInspectedProject(null);
          }}
        >
          <div className={`max-w-2xl w-full rounded-3xl border ${theme.border} bg-slate-900 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className={`px-2.5 py-1 rounded text-xs font-mono ${theme.accentSoft} border`}>
                  BLUEPRINT ARCHITECTURE // {inspectedProject.language}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-mono mt-2">
                  {inspectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setInspectedProject(null)}
                aria-label="Fermer la fenêtre"
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {inspectedProject.description}
            </p>

            {/* Schéma du Pipeline d'Architecture */}
            <div>
              <div className="text-xs font-mono uppercase text-slate-400 mb-3">
                PIPELINE DE TRAITEMENT & FLUX SYSTÈME :
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                {inspectedProject.architecture.nodes.map((node, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 flex flex-col justify-between"
                  >
                    <span className={`text-[11px] ${theme.accentText}`}>ÉTAPE 0{i + 1}</span>
                    <span className="font-semibold mt-1">{node}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extrait de Code représentatif */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>EXTRAIT DE CODE / SIGNATURE TECHNIQUE :</span>
                <span className={theme.accentText}>
                  Latence: {inspectedProject.architecture.latency} | {inspectedProject.architecture.throughput}
                </span>
              </div>
              <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                <code>{inspectedProject.architecture.snippet}</code>
              </pre>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setInspectedProject(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300"
              >
                Fermer
              </button>
              <a
                href={inspectedProject.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold ${theme.accentBg} text-slate-950 flex items-center gap-1.5`}
              >
                <Github className="w-4 h-4" />
                Ouvrir le Dépôt GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* FOOTER TACTIQUE                                                     */}
      {/* =================================================================== */}
      <footer className="relative z-10 border-t border-slate-900 bg-slate-950/90 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${theme.accentBg}`} />
            <span>SYSTÈME CONÇU POUR GRAYHAWK // 225-PIXEL</span>
          </div>
          <div>
            SYNCHRONISÉ AVEC{' '}
            <a
              href="https://github.com/grayhawk225-pixel"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme.accentText} hover:underline`}
            >
              GITHUB.COM/GRAYHAWK225-PIXEL
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}