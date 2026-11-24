# Moïse Onikoyamou — Portfolio (Atelier Optique TWIN)

Portfolio interactif de **Moïse Onikoyamou**, étudiant en Licence 2 TWIN (Technologies Web et Image Numérique) à l’**ESATIC** (Abidjan, Côte d’Ivoire), développeur web et mobile.

## Voir le site

**[grayhawk225-pixel.github.io/Mon_Portfolio](https://grayhawk225-pixel.github.io/Mon_Portfolio/)**

Dépôt : [github.com/grayhawk225-pixel/Mon_Portfolio](https://github.com/grayhawk225-pixel/Mon_Portfolio)

## Ce que contient le site

- **Banc optique & loupe X-Ray** : planche d’identité interactive avec champ interférométrique Canvas 2D, loupe déplaçable (souris, tactile et préréglages clavier), réglage d’ouverture et mode radiographie pleine.
- **À propos & règle chronologique** : présentation, qualités, langues, centres d’intérêt et parcours académique navigable année par année.
- **Projets & inspecteur risographique** : les 7 dépôts publics GitHub avec recherche, filtres par langage, synchronisation API GitHub à la demande et fenêtre d’architecture en surimpression 2 encres (repérage réglable, fermeture avec `Échap`).
- **Compétences & Patchbay Verlet** : 3 câbles physiques manipulables reliant chaque domaine technique aux piliers GrayHawk // 225-Pixel, avec niveaux déclarés.
- **Atelier interactif** : terminal `hawk-sh` et labo cellulaire `225-Pixel` (automate de Conway Canvas 2D, mode pixels nets ou trame risographique, cadence réglable).
- **Contact** : coordonnées directes avec copie en un clic et formulaire `mailto:`.
- **Trois registres chromatiques `oklch()`** (*Chambre Claire*, *Banc Alu*, *Chambre Noire*) et micro-audio WebAudio facultatif (`OFF` par défaut).

Le site est autonome (zéro dépendance externe, zéro CDN), responsive (`375 px`, `768 px`, `1440 px`), navigable au clavier et respecte `prefers-reduced-motion`.

## Stack

- HTML5, CSS3 (`oklch()`, View Transitions API, Scroll-Driven Animations) et JavaScript natif (Canvas 2D, physique Verlet/ressort, WebAudio)
- Polices variables auto-hébergées au format `.woff2` (`Anybody`, `Golos Text`, `Martian Mono`, licence SIL OFL)
- Déploiement automatique sur GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Lancer en local

Aucune installation de dépendance n’est nécessaire. Il suffit d’un serveur HTTP local :

```bash
git clone https://github.com/grayhawk225-pixel/Mon_Portfolio.git
cd Mon_Portfolio
python3 -m http.server 8000
```

Le site est alors accessible sur `http://127.0.0.1:8000/`.

## Structure

```text
.
├── index.html            # structure sémantique et planches interactives
├── css/atelier.css       # architecture oklch() à 3 registres et responsive
├── js/atelier.js         # loupe X-Ray, risographie, Verlet, terminal et Conway
├── fonts/                # polices variables .woff2 auto-hébergées
├── assets/photo.jpg      # portrait studio
├── DESIGN.md             # note de conception tactile-atelier
└── .github/workflows/    # déploiement automatique GitHub Pages
```

## Contact

- GitHub : [@grayhawk225-pixel](https://github.com/grayhawk225-pixel)
- Via le formulaire du [site](https://grayhawk225-pixel.github.io/Mon_Portfolio/#contact)
