import { createFileRoute } from "@tanstack/react-router";
import { EmailWaitlistForm } from "@/components/koia/EmailWaitlistForm";
import { FaqAccordion } from "@/components/koia/FaqAccordion";
import { RevealOnScroll } from "@/components/koia/RevealOnScroll";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const bebas = { fontFamily: "'Bebas Neue', sans-serif" } as const;
const serif = { fontFamily: "'Instrument Serif', serif", fontStyle: "italic" } as const;
const easing = "cubic-bezier(0.16,1,0.3,1)";

const problems = [
  {
    n: "01",
    title: "Des programmes génériques",
    text: "Le même plan pour tout le monde. Ta morphologie, ton cycle, tes blessures — ignorés. Ce n'est pas de la personnalisation, c'est un template.",
  },
  {
    n: "02",
    title: "De l'IA de façade",
    text: "Un quiz de 5 questions et un PDF. On appelle ça un coach IA. En réalité, c'est un formulaire avec un logo.",
  },
  {
    n: "03",
    title: "Des promesses sans preuves",
    text: "Transformation en 30 jours, détox, brûleurs de graisse. Zéro source, zéro transparence. Juste du marketing.",
  },
];

const credibility = [
  "Basé sur les études de Schoenfeld, Morton, Helms",
  "Protocole RPE validé par la recherche",
  "Zéro diet culture · Zéro complément vendu · Zéro promesse non sourcée",
];

const faqs = [
  {
    q: "Koia est-elle une app de musculation ou de fitness ?",
    a: "Les deux. Koia génère des programmes adaptés à tes objectifs — prise de muscle, perte de gras, condition physique. Le coach IA s'adapte à ton niveau et ton équipement.",
  },
  {
    q: "En quoi l'IA de Koia est différente des autres apps ?",
    a: "La plupart des apps utilisent un quiz pour générer un programme statique. Koia utilise un agent conversationnel qui comprend ton contexte, s'adapte semaine après semaine, et t'explique chaque choix.",
  },
  {
    q: "Koia propose-t-elle un suivi nutritionnel ?",
    a: "Oui. Tu décris tes repas, Koia les analyse avec des données vérifiées. Pas de comptage obsessionnel de calories — un suivi basé sur les portions et tes objectifs protéiques.",
  },
  {
    q: "Koia est-elle adaptée aux femmes ?",
    a: "Koia est conçue pour tout le monde. Le coach prend en compte les spécificités morphologiques et hormonales de chaque profil, y compris l'adaptation au cycle menstruel.",
  },
  {
    q: "Combien coûtera Koia ?",
    a: "Le pricing sera annoncé au lancement. Les membres de la bêta privée bénéficieront de conditions préférentielles.",
  },
  {
    q: "Quand Koia sera-t-elle disponible ?",
    a: "Koia est en développement. Rejoins la bêta pour tester en avant-première et influencer le produit.",
  },
];

function HeroHeadline() {
  const words = [
    { t: "LE", f: "bebas" },
    { t: "COACH", f: "bebas" },
    { t: "IA", f: "bebas" },
    { t: "QUI", f: "bebas" },
    { t: "S'ADAPTE", f: "bebas" },
    { t: "\n", f: "br" },
    { t: "vraiment", f: "serif" },
    { t: "À", f: "bebas" },
    { t: "TOI", f: "bebas" },
  ];
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const timers: number[] = [];
    words.forEach((_, i) => {
      timers.push(window.setTimeout(() => setShown((s) => Math.max(s, i + 1)), 200 + i * 80));
    });
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <h1
      className="uppercase text-[#E8E8E8]"
      style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(3rem, 8vw, 7rem)",
        lineHeight: 0.95,
        letterSpacing: "0.02em",
      }}
    >
      {words.map((w, i) => {
        if (w.f === "br") return <br key={i} />;
        const visible = i < shown;
        const isSerif = w.f === "serif";
        return (
          <span
            key={i}
            className="inline-block"
            style={{
              transition: `opacity 600ms ${easing}, transform 600ms ${easing}`,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              marginRight: "0.25em",
              ...(isSerif
                ? {
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    textTransform: "lowercase",
                    color: "#C2001E",
                    letterSpacing: "0",
                  }
                : {}),
            }}
          >
            {w.t}
          </span>
        );
      })}
    </h1>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-xs font-medium uppercase text-[#3D4450] mb-12"
      style={{ letterSpacing: "0.2em" }}
    >
      {children}
    </div>
  );
}

function AccentHeadline({
  before,
  accent,
  after,
  size = "text-4xl md:text-5xl",
}: {
  before?: string;
  accent: string;
  after?: string;
  size?: string;
}) {
  return (
    <h2 className={`uppercase text-[#E8E8E8] ${size}`} style={{ ...bebas, lineHeight: 0.95, letterSpacing: "0.02em" }}>
      {before}
      {before ? " " : ""}
      <span style={{ ...serif, textTransform: "lowercase", color: "#C2001E" }}>{accent}</span>
      {after ? ` ${after}` : ""}
    </h2>
  );
}

function Index() {
  const problemsRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [visibleProblems, setVisibleProblems] = useState<Set<number>>(new Set());
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    problemsRefs.current.forEach((node, i) => {
      if (!node) return;
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              setTimeout(() => setVisibleProblems((s) => new Set(s).add(i)), i * 150);
              io.disconnect();
            }
          }
        },
        { threshold: 0.2 },
      );
      io.observe(node);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <main className="relative bg-[#06080C] text-[#E8E8E8] overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full"
          style={{
            background: "rgba(194,0,30,0.08)",
            filter: "blur(120px)",
            animation: "koia-glow-drift 8s ease-in-out infinite",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 md:pl-[8%] md:pr-6 py-24 text-left max-md:text-center">
          <HeroHeadline />
          <p
            className="mt-8 font-light text-base text-[#6B7280] animate-[fade-in_600ms_ease-out_1200ms_both]"
          >
            Programmes personnalisés · Raisonnement transparent · Zéro bullshit
          </p>
          <div className="mt-12 animate-[fade-in_600ms_ease-out_1400ms_both] max-md:flex max-md:justify-center">
            <EmailWaitlistForm idPrefix="hero" />
          </div>
          <p className="mt-4 text-xs font-light text-[#3D4450] animate-[fade-in_600ms_ease-out_1600ms_both]">
            Gratuit · Pas de spam · Accès prioritaire
          </p>
        </div>
        {/* Scroll indicator */}
        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 -translate-x-1/2 h-10 w-px overflow-hidden"
          style={{ background: "#3D4450" }}
        >
          <div
            className="h-2 w-px"
            style={{
              background: "#E8E8E8",
              animation: "koia-scroll-dot 2.4s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <RevealOnScroll>
            <Eyebrow>Le problème</Eyebrow>
          </RevealOnScroll>
          <RevealOnScroll>
            <AccentHeadline before="Ce que les apps fitness te" accent="vendent" />
          </RevealOnScroll>
          <div className="mt-16 border-t border-white/[0.06]">
            {problems.map((p, i) => (
              <div
                key={p.n}
                ref={(el) => {
                  problemsRefs.current[i] = el;
                }}
                className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 border-b border-white/[0.06] py-10 transition-all duration-700"
                style={{
                  transitionTimingFunction: easing,
                  opacity: visibleProblems.has(i) ? 1 : 0,
                  transform: visibleProblems.has(i) ? "translateY(0)" : "translateY(10px)",
                }}
              >
                <div
                  style={{ ...bebas, color: "#1A1F2B", lineHeight: 1 }}
                  className="text-5xl md:text-6xl select-none max-md:hidden"
                >
                  {p.n}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#E8E8E8]">{p.title}</h3>
                  <p className="mt-2 font-light text-base leading-relaxed text-[#6B7280] max-w-[680px]">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE — Bento */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <RevealOnScroll>
            <Eyebrow>La différence</Eyebrow>
          </RevealOnScroll>
          <RevealOnScroll>
            <AccentHeadline before="Un coach qui" accent="mérite" after="le nom" />
          </RevealOnScroll>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {/* Card 1 — full width */}
            <RevealOnScroll className="md:col-span-2">
              <div
                className="group rounded-xl border border-white/[0.06] bg-[#0C1017] p-8 md:p-12 transition-colors duration-300 hover:border-white/[0.12]"
                style={{ transitionTimingFunction: easing }}
              >
                <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <h3 className="text-xl font-medium text-[#E8E8E8]">
                      Coaching adaptatif permanent
                    </h3>
                    <p className="mt-4 max-w-[600px] font-light text-base leading-relaxed text-[#6B7280]">
                      Pas un programme figé. Une conversation qui évolue avec toi — ta fatigue,
                      tes progrès, ton cycle, tes blessures. Chaque semaine, le coach ajuste.
                      Comme un vrai coach, mais disponible 24/7.
                    </p>
                  </div>
                  <div className="w-full md:w-[360px] space-y-3">
                    <div className="rounded-lg bg-white/[0.04] px-4 py-3 text-sm text-[#E8E8E8] font-light max-w-[85%]">
                      J'ai mal au genou droit depuis hier
                    </div>
                    <div
                      className="ml-auto rounded-lg px-4 py-3 text-sm text-[#E8E8E8] font-light max-w-[95%]"
                      style={{ background: "rgba(194,0,30,0.08)" }}
                    >
                      On remplace le squat bulgare par du hip thrust. Pas de flexion profonde
                      cette semaine. Si la douleur persiste 48h → consulte.
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Card 2 */}
            <RevealOnScroll delay={100}>
              <div
                className="h-full rounded-xl border border-white/[0.06] bg-[#0C1017] p-9 transition-colors duration-300 hover:border-white/[0.12]"
                style={{ transitionTimingFunction: easing }}
              >
                <h3 className="text-xl font-medium text-[#E8E8E8]">Raisonnement transparent</h3>
                <p className="mt-4 font-light text-base leading-relaxed text-[#6B7280]">
                  Chaque exercice choisi pour une raison. Koia t'explique pourquoi, avec le
                  niveau de preuve. Si la science n'est pas claire, il te le dit.
                </p>
                <span
                  className="mt-6 inline-block rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-normal text-[#6B7280]"
                >
                  [Preuve : méta-analyse 2018]
                </span>
              </div>
            </RevealOnScroll>

            {/* Card 3 */}
            <RevealOnScroll delay={200}>
              <div
                className="h-full rounded-xl border border-white/[0.06] bg-[#0C1017] p-9 transition-colors duration-300 hover:border-white/[0.12]"
                style={{ transitionTimingFunction: easing }}
              >
                <h3 className="text-xl font-medium text-[#E8E8E8]">Suivi repas intelligent</h3>
                <p className="mt-4 font-light text-base leading-relaxed text-[#6B7280]">
                  Décris ton repas, Koia l'analyse. Pas de comptage obsessionnel — un suivi
                  simple, basé sur les portions et tes vrais besoins protéiques.
                </p>
                <p className="mt-6 font-light text-sm text-[#6B7280]">
                  🍗 Poulet grillé 150g → ~45g protéines ✓
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <RevealOnScroll>
            <Eyebrow>Les fondations</Eyebrow>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex gap-8 md:gap-10 overflow-x-auto md:overflow-visible md:justify-between items-center pb-2 -mx-6 px-6">
              {credibility.map((c, i) => (
                <div key={i} className="flex items-center gap-8 md:gap-10 shrink-0 md:shrink">
                  <p className="font-light text-sm text-[#3D4450] max-w-[280px]">{c}</p>
                  {i < credibility.length - 1 ? (
                    <div className="hidden md:block h-10 w-px shrink-0" style={{ background: "#1A1F2B" }} />
                  ) : null}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <RevealOnScroll>
            <Eyebrow>Questions</Eyebrow>
          </RevealOnScroll>
          <RevealOnScroll>
            <AccentHeadline before="Ce que tu veux" accent="savoir" />
          </RevealOnScroll>
          <div className="mt-12 max-w-[860px]">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative border-t border-white/[0.06] overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "rgba(194,0,30,0.06)", filter: "blur(120px)" }}
        />
        <div className="relative mx-auto max-w-[900px] px-6 py-[120px] text-center">
          <RevealOnScroll>
            <h2
              className="uppercase text-[#E8E8E8]"
              style={{
                ...bebas,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: 1,
                letterSpacing: "0.02em",
              }}
            >
              Prêt·e à essayer un coach
              <br />
              qui ne{" "}
              <span style={{ ...serif, textTransform: "lowercase", color: "#C2001E" }}>
                ment
              </span>{" "}
              pas ?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="mt-10">
              <EmailWaitlistForm idPrefix="final" align="center" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="mt-4 text-xs font-light text-[#3D4450]">
              Gratuit · Pas de spam · Accès prioritaire
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px] px-6 py-12 text-center text-xs font-light text-[#3D4450]">
          © 2026 Koia
        </div>
      </footer>
    </main>
  );
}
