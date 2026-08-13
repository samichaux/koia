# KOIA

Contexte projet


Stack : React + Tailwind CSS (Lovable)
Design system : dark editorial premium — deep navy #0A0F1C, Bebas Neue (titres), Inter ou DM Sans (body), accent crimson #C2001E
Inspiration : Linear.app (précision, minimal), Animo Studio (dark editorial, typo massive)
Langue : Français (page primaire), préparé pour multilingue futur
CTA : Waitlist bêta privée (champ email unique)
Deux versions : Page A (coaching adaptatif) et Page B (anti-bullshit) — même structure, headlines différents



STEP 1 — Page A : Landing page "Coaching Intelligent"


CONTEXT
This is a new landing page for Koia, an AI fitness coaching app. The page is a pre-launch waitlist page designed to collect emails. The design must be premium, minimal, and editorial — inspired by Linear.app and Animo Studio.

OBJECTIVE
Create a single-page landing at route / with the following sections, in this exact order:

SECTION 1 — HERO (above the fold)


H1: "Le coach IA qui s'adapte vraiment à toi"
Subtitle: "Programmes personnalisés. Raisonnement transparent. Zéro bullshit."
One email input field (placeholder: "Ton email") + one CTA button ("Rejoindre la bêta privée")
Below the CTA: small text "Gratuit. Pas de spam. Accès prioritaire."
Background: deep navy #0A0F1C
H1 font: Bebas Neue (import from Google Fonts), uppercase, very large (text-6xl on desktop, text-4xl on mobile), color white #F5F5F5
Subtitle font: Inter or DM Sans, font-light, text-lg, color #8A8F98
CTA button: background #C2001E, text white, rounded-lg, hover brightness-110
No navigation menu. No hamburger. No footer links. Clean.
Add subtle gradient or grain texture overlay on the background for premium feel


SECTION 2 — PROBLEM (what's broken today)


H2: "Le problème avec les apps fitness"
Three short blocks (icon + title + 1-2 sentences each), arranged in a row on desktop, stacked on mobile:

Title: "Programmes génériques" / Text: "La plupart des apps te donnent le même programme qu'à tout le monde. Ton corps, ta morphologie, tes contraintes — ignorés."
Title: "IA de façade" / Text: "Un quiz de 5 questions, un PDF généré, et on appelle ça de l'intelligence artificielle. Ce n'est pas du coaching."
Title: "Promesses sans preuves" / Text: "Transformations en 30 jours, régimes miracles, compléments magiques. Zéro source, zéro transparence."



Background slightly lighter: #0E1424
Title color: white. Text color: #8A8F98. Icon accent: #C2001E


SECTION 3 — WHAT KOIA DOES DIFFERENTLY (3 pillars)


H2: "Koia, c'est différent"
Three feature blocks (vertical cards, each with a small icon, title, and 2-3 sentence description):

Title: "Coaching adaptatif permanent" / Text: "Pas un programme figé. Une conversation continue qui évolue avec toi — ta fatigue, tes progrès, ton cycle, tes blessures. Chaque semaine est unique."
Title: "Raisonnement transparent" / Text: "Chaque exercice est choisi pour une raison précise. Koia t'explique pourquoi, avec quel niveau de preuve scientifique. Tu comprends ce que tu fais et pourquoi."
Title: "Suivi repas intelligent" / Text: "Décris ton repas, Koia l'analyse. Pas de comptage de calories obsessionnel — un suivi simple, bienveillant, adapté à ta vie réelle."



Cards: background #141926, border 1px solid #1E2433, rounded-xl, padding generous
On hover: subtle border color change to #C2001E with transition


SECTION 4 — HOW IT WORKS (3 steps)


H2: "Comment ça marche"
Three numbered steps in a horizontal flow (desktop) / vertical (mobile):

"01 — Onboarding intelligent" / "Koia te pose les bonnes questions : objectifs, morphologie, historique, blessures, équipement. Pas un quiz — une vraie conversation."
"02 — Programme sur mesure" / "Un programme construit pour ton corps, avec la logique derrière chaque choix. Adapté à ta fréquence, ton niveau, tes contraintes."
"03 — Adaptation continue" / "Après chaque séance, tu donnes ton feedback. Koia ajuste les charges, les exercices, le volume. Ton programme vit avec toi."



Step numbers in Bebas Neue, large, color #C2001E
Text in Inter/DM Sans, color #8A8F98


SECTION 5 — FAQ (XEO-critical)


H2: "Questions fréquentes"
Accordion pattern (one open at a time, smooth expand/collapse animation)
FAQ content (render in plain HTML, visible to crawlers, NOT hidden behind JS-only state):
Q1: "Koia est-elle une app de musculation ou de fitness ?"
A1: "Les deux. Koia génère des programmes de musculation et de fitness adaptés à tes objectifs, que tu veuilles prendre du muscle, perdre du gras, ou améliorer ta condition physique générale. Le coach IA s'adapte à ton niveau et à ton équipement."
Q2: "Comment l'IA de Koia est-elle différente des autres apps ?"
A2: "La plupart des apps utilisent un quiz pour te donner un programme statique. Koia utilise un agent IA conversationnel qui comprend ton contexte, s'adapte semaine après semaine via ton feedback RPE, et t'explique le raisonnement derrière chaque choix."
Q3: "Est-ce que Koia propose un suivi nutritionnel ?"
A3: "Oui. Tu peux décrire tes repas et Koia les analyse avec des données nutritionnelles vérifiées. Le suivi est simple et bienveillant — pas de comptage obsessionnel de calories, mais un accompagnement basé sur les portions et les objectifs protéiques."
Q4: "Koia est-elle adaptée aux femmes ?"
A4: "Koia est conçue pour tout le monde. Le coach IA prend en compte les spécificités morphologiques et hormonales de chaque profil, y compris l'adaptation au cycle menstruel pour les femmes qui le souhaitent."
Q5: "Combien coûtera Koia ?"
A5: "Le pricing n'est pas encore défini. Les membres de la bêta privée bénéficieront d'un accès prioritaire et de conditions préférentielles au lancement."
Q6: "Quand Koia sera-t-elle disponible ?"
A6: "Koia est actuellement en développement. Rejoins la bêta privée pour être parmi les premiers à tester l'app et influencer son évolution."
Background: #0A0F1C. Question text: white, font-medium. Answer text: #8A8F98.
Open/close chevron icon in #C2001E


SECTION 6 — FINAL CTA


Same email input + button as hero section
Text above: "Prêt·e à essayer un coach qui ne ment pas ?"
Background: #0E1424


SECTION 7 — MINIMAL FOOTER


Single line: "© 2026 Koia. Tous droits réservés." centered, text-sm, color #4A4F5C
No links, no social icons (pre-launch)


GLOBAL DESIGN SPECIFICATIONS


Import Bebas Neue from Google Fonts: https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap
Import Inter from Google Fonts: https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap
All section transitions: smooth scroll behavior
Responsive: mobile-first, breakpoints at sm/md/lg
Max content width: max-w-6xl mx-auto
Section vertical padding: py-20 on desktop, py-12 on mobile
Subtle fade-in animation on scroll for each section (use Intersection Observer, simple opacity + translateY)
The entire page must render its text content in the initial HTML — no content behind loading spinners or lazy JS


EMAIL FORM BEHAVIOR


Store the email in localStorage on submit (temporary — will be replaced by Supabase in Step 2)
On submit: show a success message "Tu es sur la liste ! On te tient au courant." replacing the form
Basic email validation (HTML5 type="email" + required)
The form must NOT be wrapped in a 

 tag (React constraint). Use onClick handler on the button.


IMPORTANT — do not change:


Do not create any routing other than the root route /
Do not add a navigation bar or sidebar
Do not add any pages other than this landing page


Do not modify any file that is not directly related to this request.
Do not refactor, rename, or restructure existing components.
Do not change any styling, layout, or logic outside the scope above.
If you are unsure whether a change is needed, do not make it.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1576a3b4-8fcb-4af5-bf10-816b2e19289c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
