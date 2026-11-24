# Moïse Onikoyamou — Portfolio

Portfolio personnel de **Moïse Onikoyamou**, étudiant en Licence 2 TWIN (Technologies Web et Image Numérique) à l’**ESATIC** (Abidjan, Côte d’Ivoire), développeur web et mobile.

## 🔗 Voir le site

**[grayhawk225-pixel.github.io/Mon_Portfolio](https://grayhawk225-pixel.github.io/Mon_Portfolio/)**

Dépôt : [github.com/grayhawk225-pixel/Mon_Portfolio](https://github.com/grayhawk225-pixel/Mon_Portfolio)

## Ce que contient le site

- **À propos** : présentation, parcours académique, langues, qualités et centres d’intérêt.
- **Projets** : dépôts GitHub récupérés en direct (avec repli sur une sélection locale hors-ligne), recherche et filtres par catégorie, fiche « architecture » pour chaque projet.
- **Compétences** : trois domaines avec niveaux déclarés (développement web et mobile, bases de données et systèmes, réseaux, sécurité et création).
- **Terminal interactif** et **labo pixel** (automate cellulaire de Conway).
- **Contact** : coordonnées et formulaire qui ouvre l’application mail.
- **Trois thèmes** (Stealth, Abidjan, Retro), effets sonores facultatifs (désactivés par défaut).

Le site est responsive (mobile, tablette, bureau), utilisable au clavier et respecte le réglage « réduire les animations » du système.

## Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 5](https://vitejs.dev/) pour le développement et la compilation
- [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS
- Polices auto-hébergées (Golos Text et Martian Mono, licence SIL OFL) : aucune police chargée depuis un CDN
- Déploiement automatique sur GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Lancer en local

Prérequis : [Node.js](https://nodejs.org/) 20 ou plus récent.

```bash
git clone https://github.com/grayhawk225-pixel/Mon_Portfolio.git
cd Mon_Portfolio
npm install
npm run dev
```

Le site est alors disponible sur l’adresse affichée dans le terminal (par défaut `http://localhost:5173/`).

Autres commandes :

```bash
npm run build     # compile le site dans dist/
npm run preview   # sert le build de production en local
```

## Déploiement

Chaque `push` sur la branche `main` lance le workflow GitHub Actions qui compile le site et le publie sur GitHub Pages.

## Structure

```
.
├── index.html            # page d’entrée (métadonnées, icône)
├── public/
│   ├── photo.jpg         # portrait
│   └── fonts/            # polices .woff2 auto-hébergées
├── src/
│   ├── App.tsx           # interface et sections du portfolio
│   ├── index.css         # Tailwind + styles globaux
│   └── main.tsx
├── tailwind.config.js
└── vite.config.ts
```

## Contact

- GitHub : [@grayhawk225-pixel](https://github.com/grayhawk225-pixel)
- Via le formulaire de contact du [site](https://grayhawk225-pixel.github.io/Mon_Portfolio/#contact)
