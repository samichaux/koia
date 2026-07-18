import { createFileRoute } from "@tanstack/react-router";
import {
  Dumbbell,
  Sparkles,
  AlertTriangle,
  Brain,
  Eye,
  Utensils,
} from "lucide-react";
import { EmailWaitlistForm } from "@/components/koia/EmailWaitlistForm";
import { FaqAccordion } from "@/components/koia/FaqAccordion";
import { RevealOnScroll } from "@/components/koia/RevealOnScroll";

export const Route = createFileRoute("/")({
  component: Index,
});

const displayFont = { fontFamily: "'Bebas Neue', sans-serif" } as const;

const problems = [
  {
    icon: Dumbbell,
    title: "Programmes génériques",
    text: "La plupart des apps te donnent le même programme qu'à tout le monde. Ton corps, ta morphologie, tes contraintes — ignorés.",
  },
  {
    icon: Sparkles,
    title: "IA de façade",
    text: "Un quiz de 5 questions, un PDF généré, et on appelle ça de l'intelligence artificielle. Ce n'est pas du coaching.",
  },
  {
    icon: AlertTriangle,
    title: "Promesses sans preuves",
    text: "Transformations en 30 jours, régimes miracles, compléments magiques. Zéro source, zéro transparence.",
  },
];

const pillars = [
  {
    icon: Brain,
    title: "Coaching adaptatif permanent",
    text: "Pas un programme figé. Une conversation continue qui évolue avec toi — ta fatigue, tes progrès, ton cycle, tes blessures. Chaque semaine est unique.",
  },
  {
    icon: Eye,
    title: "Raisonnement transparent",
    text: "Chaque exercice est choisi pour une raison précise. Koia t'explique pourquoi, avec quel niveau de preuve scientifique. Tu comprends ce que tu fais et pourquoi.",
  },
  {
    icon: Utensils,
    title: "Suivi repas intelligent",
    text: "Décris ton repas, Koia l'analyse. Pas de comptage de calories obsessionnel — un suivi simple, bienveillant, adapté à ta vie réelle.",
  },
];

const steps = [
  {
    n: "01",
    title: "Onboarding intelligent",
    text: "Koia te pose les bonnes questions : objectifs, morphologie, historique, blessures, équipement. Pas un quiz — une vraie conversation.",
  },
  {
    n: "02",
    title: "Programme sur mesure",
    text: "Un programme construit pour ton corps, avec la logique derrière chaque choix. Adapté à ta fréquence, ton niveau, tes contraintes.",
  },
  {
    n: "03",
    title: "Adaptation continue",
    text: "Après chaque séance, tu donnes ton feedback. Koia ajuste les charges, les exercices, le volume. Ton programme vit avec toi.",
  },
];

const faqs = [
  {
    q: "Koia est-elle une app de musculation ou de fitness ?",
    a: "Les deux. Koia génère des programmes de musculation et de fitness adaptés à tes objectifs, que tu veuilles prendre du muscle, perdre du gras, ou améliorer ta condition physique générale. Le coach IA s'adapte à ton niveau et à ton équipement.",
  },
  {
    q: "Comment l'IA de Koia est-elle différente des autres apps ?",
    a: "La plupart des apps utilisent un quiz pour te donner un programme statique. Koia utilise un agent IA conversationnel qui comprend ton contexte, s'adapte semaine après semaine via ton feedback RPE, et t'explique le raisonnement derrière chaque choix.",
  },
  {
    q: "Est-ce que Koia propose un suivi nutritionnel ?",
    a: "Oui. Tu peux décrire tes repas et Koia les analyse avec des données nutritionnelles vérifiées. Le suivi est simple et bienveillant — pas de comptage obsessionnel de calories, mais un accompagnement basé sur les portions et les objectifs protéiques.",
  },
  {
    q: "Koia est-elle adaptée aux femmes ?",
    a: "Koia est conçue pour tout le monde. Le coach IA prend en compte les spécificités morphologiques et hormonales de chaque profil, y compris l'adaptation au cycle menstruel pour les femmes qui le souhaitent.",
  },
  {
    q: "Combien coûtera Koia ?",
    a: "Le pricing n'est pas encore défini. Les membres de la bêta privée bénéficieront d'un accès prioritaire et de conditions préférentielles au lancement.",
  },
  {
    q: "Quand Koia sera-t-elle disponible ?",
    a: "Koia est actuellement en développement. Rejoins la bêta privée pour être parmi les premiers à tester l'app et influencer son évolution.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-[color:var(--color-koia-navy)] text-[color:var(--color-koia-text)]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[color:var(--color-koia-navy)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(194,0,30,0.18), transparent 55%), radial-gradient(ellipse at 80% 100%, rgba(30,36,51,0.6), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-32">
          <RevealOnScroll>
            <h1
              style={displayFont}
              className="uppercase leading-[0.95] tracking-tight text-[color:var(--color-koia-text)] text-4xl sm:text-5xl md:text-7xl"
            >
              Le coach IA qui s'adapte
              <br className="hidden sm:block" /> vraiment à toi
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="mt-6 max-w-2xl font-light text-lg text-[color:var(--color-koia-muted)]">
              Programmes personnalisés. Raisonnement transparent. Zéro bullshit.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="mt-10 max-w-xl">
              <EmailWaitlistForm idPrefix="hero" />
              <p className="mt-3 text-sm text-[color:var(--color-koia-footer)]">
                Gratuit. Pas de spam. Accès prioritaire.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-[color:var(--color-koia-navy-2)]">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
          <RevealOnScroll>
            <h2
              style={displayFont}
              className="uppercase text-3xl md:text-5xl text-[color:var(--color-koia-text)]"
            >
              Le problème avec les apps fitness
            </h2>
          </RevealOnScroll>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {problems.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 100}>
                <div>
                  <p.icon className="h-7 w-7 text-[color:var(--color-koia-crimson)]" />
                  <h3 className="mt-4 text-lg font-medium text-[color:var(--color-koia-text)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-light leading-relaxed text-[color:var(--color-koia-muted)]">
                    {p.text}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-[color:var(--color-koia-navy)]">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
          <RevealOnScroll>
            <h2
              style={displayFont}
              className="uppercase text-3xl md:text-5xl text-[color:var(--color-koia-text)]"
            >
              Koia, c'est différent
            </h2>
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 100}>
                <div className="h-full rounded-xl border border-[color:var(--color-koia-border)] bg-[color:var(--color-koia-card)] p-8 transition-colors hover:border-[color:var(--color-koia-crimson)]">
                  <p.icon className="h-7 w-7 text-[color:var(--color-koia-crimson)]" />
                  <h3 className="mt-5 text-xl font-medium text-[color:var(--color-koia-text)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-light leading-relaxed text-[color:var(--color-koia-muted)]">
                    {p.text}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[color:var(--color-koia-navy-2)]">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
          <RevealOnScroll>
            <h2
              style={displayFont}
              className="uppercase text-3xl md:text-5xl text-[color:var(--color-koia-text)]"
            >
              Comment ça marche
            </h2>
          </RevealOnScroll>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <RevealOnScroll key={s.n} delay={i * 100}>
                <div>
                  <div
                    style={displayFont}
                    className="text-6xl md:text-7xl leading-none text-[color:var(--color-koia-crimson)]"
                  >
                    {s.n}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-[color:var(--color-koia-text)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-light leading-relaxed text-[color:var(--color-koia-muted)]">
                    {s.text}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[color:var(--color-koia-navy)]">
        <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
          <RevealOnScroll>
            <h2
              style={displayFont}
              className="uppercase text-3xl md:text-5xl text-[color:var(--color-koia-text)]"
            >
              Questions fréquentes
            </h2>
          </RevealOnScroll>
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[color:var(--color-koia-navy-2)]">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 text-center">
          <RevealOnScroll>
            <p
              style={displayFont}
              className="uppercase text-3xl md:text-5xl text-[color:var(--color-koia-text)]"
            >
              Prêt·e à essayer un coach qui ne ment pas ?
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="mt-8">
              <EmailWaitlistForm idPrefix="final" />
              <p className="mt-3 text-sm text-[color:var(--color-koia-footer)]">
                Gratuit. Pas de spam. Accès prioritaire.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[color:var(--color-koia-navy)]">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-[color:var(--color-koia-footer)]">
          © 2026 Koia. Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}
