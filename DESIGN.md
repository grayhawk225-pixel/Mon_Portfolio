# Design Brief — Portfolio Tactile-Atelier de Moïse Onikoyamou

## 1. Matérialité & Registres chromatiques `oklch()` (Budget 70 / 20 / 10)
Direction choisie : **Banc Optique & Planche d'Atelier TWIN** (Technologies Web et Image Numérique), en rupture avec le dark-neon cyber classique et le template crème/serif.

- **Chambre Claire (défaut)** : papier technique froid `oklch(0.962 0.006 230)` (70 % substrat faible chroma), échelle de surfaces tonales `ΔL = -0.036 / -0.074` (20 %), duo d'encres complémentaires brisées **Cobalt Optique** (`oklch(0.45 0.19 258)`) + **Vermillon Repère** (`oklch(0.55 0.20 30)`) (10 %), grain papier SVG `<feTurbulence>` subtil.
- **Banc Alu** : aluminium anodisé mat `oklch(0.918 0.007 175)`, signal **Émeraude Technique** (`oklch(0.43 0.14 162)`) + **Laiton Calibré** (`oklch(0.54 0.14 70)`).
- **Chambre Noire** : basalte minéral mat `oklch(0.175 0.012 245)`, signal inactinique **Ambre Labo** (`oklch(0.77 0.15 68)`) + **Cyan Optique** (`oklch(0.75 0.12 215)`).

## 2. Typographie 3 voix (100 % auto-hébergée `.woff2`, zéro CDN)
1. **Voix Display variable** : `Anybody` (`wght` 100–900, `wdth` 50–150) — titres sculpturaux et modulation cinétique d'axe verrouillée en largeur.
2. **Voix Corps lisible** : `Golos Text` (`16px`, `line-height: 1.55`, `max-width: 62ch`, couverture complète des diacritiques français).
3. **Voix Télémétrie** : `Martian Mono` (`tabular-nums`, règles, cotes, terminal, métriques GitHub).

## 3. Régime de mouvement
- Détentes horlogères nettes (`110ms cubic-bezier(0.2, 0.9, 0.3, 1)`), zéro Lenis, zéro GSAP, zéro curseur caché.
- Physique ressort 2D / Verlet dans `requestAnimationFrame` (`dpr <= 2`, mise en veille automatique au repos, hors écran via `IntersectionObserver` et sur `visibilitychange`).
- Transitions natives (`View Transitions API` lors des changements de registre, défilement natif).
- Respect strict de `prefers-reduced-motion: reduce`.

## 4. Interactions instrumentales signatures
1. **Banc Optique & Loupe X-Ray (Hero)** : champ interférométrique Canvas 2D + loupe optique `clip-path: circle()` révélant le calque technique TWIN, avec préréglages clavier/tactiles, curseur d'ouverture et mode radiographie pleine.
2. **Inspecteur d'Architecture Risographique (Projets)** : modale accessible avec schéma de pipeline en surimpression 2 encres et contrôle physique du décalage de repérage.
3. **Patchbay à câbles Verlet (Compétences)** : 3 câbles physiques pincables au pointeur ou au clavier reliant domaines techniques et piliers GrayHawk // 225-Pixel.
4. **Atelier combiné `hawk-sh` + Matrice `225-Pixel`** : terminal interactif complet et automate cellulaire de Conway Canvas 2D avec rendu pixels nets ou trame risographique.
5. **Micro-audio WebAudio optionnel (`OFF` par défaut)** : clics mécaniques filtrés et pincements Karplus-Strong activés uniquement par l'utilisateur.
