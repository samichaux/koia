import { createFileRoute } from "@tanstack/react-router";
import { EmailWaitlistForm } from "@/components/koia/EmailWaitlistForm";
import { FaqAccordion } from "@/components/koia/FaqAccordion";
import { RevealOnScroll } from "@/components/koia/RevealOnScroll";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const bebas = { fontFamily: "'Bebas Neue', sans-serif" } as const;
const easing = "cubic-bezier(0.16,1,0.3,1)";

const problems = [
  {
    n: "01",
    title: "ChatGPT te donne un programme. Pas un coach.",
    text: "Des millions de gens demandent déjà à ChatGPT ou Claude de leur écrire un programme. Mais sans le bon prompt, l'IA invente, généralise, et oublie ta morphologie, tes blessures, ton historique. Tu obtiens un plan générique habillé en personnalisation.",
  },
  {
    n: "02",
    title: "Les apps fitness ne sont pas de l'IA.",
    text: "Un quiz de 5 questions et un PDF. La plupart des apps qui se disent « IA » sont des formulaires avec un logo. Aucune adaptation réelle, aucune explication, aucune conversation.",
  },
  {
    n: "03",
    title: "Personne ne te dit pourquoi.",
    text: "Pourquoi cet exercice et pas un autre ? Pourquoi 4 séries et pas 3 ? Ni ChatGPT ni les apps ne t'expliquent le raisonnement. Tu exécutes sans comprendre.",
  },
];

const credibility = [
  "System prompt conçu par une athlète · 10 ans de pratique",
  "Basé sur Schoenfeld, Morton, Helms, Contreras",
  "Protocole RPE validé par la recherche",
  "Zéro diet culture · Zéro complément vendu",
];

const faqs = [
  {
    q: "Koia est-elle une app de musculation ou de fitness ?",
    a: "Les deux. Koia génère des programmes adaptés à tes objectifs — prise de muscle, perte de gras, condition physique. Le coach IA s'adapte à ton niveau et ton équipement.",
  },
  {
    q: "Pourquoi ne pas utiliser ChatGPT pour mon programme ?",
    a: "Tu peux, mais sans le bon prompt, ChatGPT généralise — il ignore ta morphologie, tes blessures, ton cycle. Koia intègre un system prompt expert : onboarding structuré, gestion des blessures, adaptation hormonale, protocole RPE. Tu parles normalement, le coaching est intégré.",
  },
  {
    q: "En quoi l'IA de Koia est différente des autres apps ?",
    a: "La plupart des apps utilisent un quiz pour générer un programme statique. Koia utilise un agent conversationnel qui comprend ton contexte, s'adapte semaine après semaine, et t'explique chaque choix.",
  },
  {
    q: "Koia propose-t-elle un suivi nutritionnel ?",
    a: "Oui. Tu décris tes repas, Koia les analyse avec des données vérifiées. Pas de comptage obsessionnel — un suivi basé sur les portions et tes objectifs protéiques.",
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
    { t: "VRAIMENT", f: "gradient" },
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
      className="uppercase text-[#EEF0F8]"
      style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
        lineHeight: 0.95,
        letterSpacing: "0.02em",
      }}
    >
      {words.map((w, i) => {
        if (w.f === "br") return <br key={i} />;
        const visible = i < shown;
        const isGradient = w.f === "gradient";
        return (
          <span
            key={i}
            className="inline-block"
            style={{
              transition: `opacity 600ms ${easing}, transform 600ms ${easing}`,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              marginRight: "0.25em",
              ...(isGradient
                ? {
                    backgroundImage:
                      "linear-gradient(135deg, #FF2D4B 0%, #C2001E 40%, #7A0012 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
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
      className="text-xs font-medium uppercase text-[#1A2338] mb-12"
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
    <h2 className={`uppercase text-[#EEF0F8] ${size}`} style={{ ...bebas, lineHeight: 0.95, letterSpacing: "0.02em" }}>
      {before}
      {before ? " " : ""}
      <span>{accent}</span>
      {after ? ` ${after}` : ""}
    </h2>
  );
}

function IPhoneMockup() {
  const messages = [
    { from: "koia", text: "Prête pour ta séance ? Full Body A aujourd'hui 💪", delay: 500 },
    { from: "user", text: "oui mais g mal au genou droit depuis hier", delay: 1800 },
    {
      from: "koia",
      text: "Ok on adapte. Je retire le squat bulgare, remplacé par hip thrust — pas de flexion profonde.",
      delay: 3200,
    },
    {
      from: "koia",
      text: "RPE 6 au lieu de 8 aujourd'hui. Si ça persiste demain, va consulter.",
      delay: 4200,
    },
    { from: "user", text: "Nickel 👍", delay: 5500 },
  ] as const;

  const TYPING_MS = 600;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [shown, setShown] = useState(0);
  const [typingFor, setTypingFor] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setStarted(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const timers: number[] = [];
    messages.forEach((m, i) => {
      const showAt = m.delay;
      const typingAt = Math.max(0, showAt - TYPING_MS);
      timers.push(window.setTimeout(() => setTypingFor(i), typingAt));
      timers.push(
        window.setTimeout(() => {
          setTypingFor((cur) => (cur === i ? null : cur));
          setShown((s) => Math.max(s, i + 1));
        }, showAt),
      );
    });
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [shown, typingFor]);

  const activeTyping = typingFor !== null && typingFor >= shown ? typingFor : null;
  const typingSide = activeTyping !== null ? messages[activeTyping].from : null;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto max-md:!w-[240px] max-md:!h-[520px]"
      style={{
        width: 280,
        height: 580,
        borderRadius: 44,
        border: "3px solid #1E2A40",
        background: "#070C17",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(4,7,15,0.6)",
      }}
    >
      <div className="flex h-full flex-col">
        {/* Status bar */}
        <div
          className="flex items-center justify-between"
          style={{ height: 44, padding: "12px 20px" }}
        >
          <span className="text-xs font-medium text-[#EEF0F8]" style={{ fontFamily: "Inter, sans-serif" }}>
            9:41
          </span>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#4A5872" }} />
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#4A5872" }} />
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#4A5872" }} />
          </div>
        </div>

        {/* Chat header */}
        <div
          className="flex items-center gap-2"
          style={{ height: 40, padding: "6px 14px", borderBottom: "1px solid #1E2A40" }}
        >
          <div
            className="flex items-center justify-center"
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "#0E1525",
              color: "#C2001E",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            K
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className="font-medium text-[#EEF0F8]"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 11 }}
            >
              Koia
            </span>
            <span
              className="flex items-center gap-1 text-[#4A5872]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: 10 }}
            >
              <span
                className="inline-block rounded-full"
                style={{ width: 5, height: 5, background: "#C2001E" }}
              />
              En ligne
            </span>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-hidden"
          style={{ padding: 16 }}
        >
          <div className="flex flex-col">
            {messages.map((m, i) => {
              const visible = i < shown;
              if (!visible) return null;
              const isUser = m.from === "user";
              const isContinuation = i > 0 && messages[i - 1].from === m.from;
              return (
                <div
                  key={i}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  style={{ marginBottom: isContinuation ? 3 : 6 }}
                >
                  <div
                    style={{
                      background: isUser ? "#141D30" : "#0E1525",
                      color: "#EEF0F8",
                      borderRadius: isUser ? "10px 10px 3px 10px" : "10px 10px 10px 3px",
                      padding: "8px 12px",
                      maxWidth: "78%",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 300,
                      fontSize: 11,
                      lineHeight: 1.35,
                      animation: "koia-msg-in 400ms cubic-bezier(0.16,1,0.3,1) both",
                    }}
                  >
                    {m.text}
                  </div>
                </div>
              );
            })}
            {activeTyping !== null && (
              <div
                className={`flex ${typingSide === "user" ? "justify-end" : "justify-start"}`}
                style={{ marginBottom: 6 }}
              >
                <div
                  className="flex items-center gap-1"
                  style={{
                    background: typingSide === "user" ? "#141D30" : "#0E1525",
                    borderRadius: typingSide === "user" ? "10px 10px 3px 10px" : "10px 10px 10px 3px",
                    padding: "8px 12px",
                  }}
                >
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="inline-block rounded-full"
                      style={{
                        width: 4,
                        height: 4,
                        background: "#4A5872",
                        animation: `koia-typing 1.2s ease-in-out ${d * 0.15}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input bar */}
        <div
          className="flex items-center gap-2"
          style={{ padding: "8px 12px", borderTop: "1px solid #1E2A40" }}
        >
          <div
            className="flex flex-1 items-center"
            style={{
              background: "#0E1525",
              borderRadius: 20,
              height: 32,
              padding: "0 12px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: 10,
              color: "#1A2338",
            }}
          >
            Écris à ton coach...
          </div>
          <button
            type="button"
            aria-hidden
            className="flex items-center justify-center"
            style={{ width: 24, height: 24, borderRadius: "50%", background: "#1E2A40", color: "#EEF0F8" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
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
    <main className="relative bg-[#04070F] text-[#EEF0F8] overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full"
          style={{
            background: "rgba(194,0,30,0.06)",
            filter: "blur(120px)",
            animation: "koia-glow-drift 8s ease-in-out infinite",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 md:pl-[8%] md:pr-8 py-24">
          <div className="grid gap-16 md:grid-cols-[55fr_45fr] md:items-center">
            {/* Left: text + form */}
            <div className="text-left max-md:text-center">
              <HeroHeadline />
              <p className="mt-6 font-light text-lg text-[#4A5872] animate-[fade-in_600ms_ease-out_1200ms_both]">
                Tu n'as pas besoin de savoir prompter pour avoir un vrai coach.
              </p>
              <div className="mt-10 animate-[fade-in_600ms_ease-out_1400ms_both] max-md:flex max-md:justify-center">
                <EmailWaitlistForm idPrefix="hero" />
              </div>
              <p className="mt-4 text-xs font-light text-[#1A2338] animate-[fade-in_600ms_ease-out_1600ms_both]">
                Gratuit · Pas de spam · Accès prioritaire
              </p>
            </div>
            {/* Right: iPhone mockup */}
            <div className="relative animate-[fade-in_800ms_ease-out_1600ms_both] max-md:mt-4">
              <IPhoneMockup />
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 -translate-x-1/2 h-10 w-px overflow-hidden"
          style={{ background: "#1A2338" }}
        >
          <div
            className="h-2 w-px"
            style={{
              background: "#EEF0F8",
              animation: "koia-scroll-dot 2.4s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-t border-[#1E2A40]">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <RevealOnScroll>
            <Eyebrow>Le problème</Eyebrow>
          </RevealOnScroll>
          <RevealOnScroll>
            <AccentHeadline before="Ce que les apps fitness te" accent="vendent" />
          </RevealOnScroll>
          <div className="mt-16 border-t border-[#1E2A40]">
            {problems.map((p, i) => (
              <div
                key={p.n}
                ref={(el) => {
                  problemsRefs.current[i] = el;
                }}
                className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 border-b border-[#1E2A40] py-10 transition-all duration-700"
                style={{
                  transitionTimingFunction: easing,
                  opacity: visibleProblems.has(i) ? 1 : 0,
                  transform: visibleProblems.has(i) ? "translateY(0)" : "translateY(10px)",
                }}
              >
                <div
                  style={{ ...bebas, color: "#1A2338", lineHeight: 1 }}
                  className="text-5xl md:text-6xl select-none max-md:hidden"
                >
                  {p.n}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#EEF0F8]">{p.title}</h3>
                  <p className="mt-2 font-light text-base leading-relaxed text-[#4A5872] max-w-[720px]">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE — Bento */}
      <section className="border-t border-[#1E2A40]">
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
                className="group rounded-xl border border-[#1E2A40] bg-[#0E1525] p-8 md:p-12 transition-colors duration-300 hover:border-[rgba(238,240,248,0.1)]"
                style={{ transitionTimingFunction: easing }}
              >
                <h3 className="text-xl font-medium text-[#EEF0F8]">
                  L'IA, mais bien promptée.
                </h3>
                <p className="mt-4 max-w-[540px] font-light text-base leading-relaxed text-[#4A5872]">
                  Koia, c'est un agent IA construit avec un system prompt de coaching expert — onboarding structuré, gestion des blessures, adaptation morphologique et hormonale, protocole RPE. Tu parles normalement, l'IA fait le travail de fond.
                </p>

                <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1px_1fr]">
                  {/* ChatGPT */}
                  <div>
                    <div className="mb-4 text-xs font-normal text-[#1A2338]">ChatGPT</div>
                    <div
                      className="rounded-lg px-3.5 py-2.5 text-sm font-light text-[#4A5872] max-w-[90%]"
                      style={{ background: "rgba(238,240,248,0.03)" }}
                    >
                      Fais-moi un programme de muscu
                    </div>
                    <div
                      className="mt-2 ml-auto rounded-lg px-3.5 py-2.5 text-sm font-light text-[#4A5872]"
                      style={{ background: "rgba(238,240,248,0.03)" }}
                    >
                      Jour 1 — Bench press 4×10, Shoulder press 3×12, Triceps pushdown 3×15...
                    </div>
                    <div className="mt-3 text-xs text-[#1A2338]">Générique · Pas de contexte</div>
                  </div>
                  {/* Separator */}
                  <div className="hidden md:block h-full w-px bg-[#1E2A40]" />
                  {/* Koia */}
                  <div>
                    <div className="mb-4 text-xs font-normal text-[#C2001E]">Koia</div>
                    <div
                      className="rounded-lg px-3.5 py-2.5 text-sm font-light text-[#EEF0F8] max-w-[90%]"
                      style={{ background: "rgba(194,0,30,0.04)" }}
                    >
                      J'ai mal au genou droit depuis hier
                    </div>
                    <div
                      className="mt-2 ml-auto rounded-lg px-3.5 py-2.5 text-sm font-light text-[#EEF0F8]"
                      style={{ background: "rgba(194,0,30,0.04)" }}
                    >
                      On remplace le squat bulgare par du hip thrust. Pas de flexion profonde cette semaine. RPE 6. Si ça persiste 48h → consulte.
                    </div>
                    <div className="mt-3 text-xs text-[#4A5872]">Contextualisé · Adapté · Sourcé</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Card 2 */}
            <RevealOnScroll delay={100}>
              <div
                className="h-full rounded-xl border border-[#1E2A40] bg-[#0E1525] p-9 transition-colors duration-300 hover:border-[rgba(238,240,248,0.1)]"
                style={{ transitionTimingFunction: easing }}
              >
                <h3 className="text-lg font-medium text-[#EEF0F8]">Raisonnement transparent</h3>
                <p className="mt-4 font-light text-sm leading-relaxed text-[#4A5872]">
                  Chaque exercice choisi pour une raison. Koia t'explique pourquoi, avec le
                  niveau de preuve. Si la science n'est pas claire, il te le dit.
                </p>
                <span
                  className="mt-6 inline-block rounded-full px-3 py-1 text-xs font-normal text-[#4A5872]"
                  style={{
                    background: "rgba(194,0,30,0.04)",
                    border: "1px solid rgba(194,0,30,0.12)",
                  }}
                >
                  [Preuve : méta-analyse 2018, Schoenfeld et al.]
                </span>
              </div>
            </RevealOnScroll>

            {/* Card 3 */}
            <RevealOnScroll delay={200}>
              <div
                className="h-full rounded-xl border border-[#1E2A40] bg-[#0E1525] p-9 transition-colors duration-300 hover:border-[rgba(238,240,248,0.1)]"
                style={{ transitionTimingFunction: easing }}
              >
                <h3 className="text-lg font-medium text-[#EEF0F8]">Suivi repas sans prise de tête</h3>
                <p className="mt-4 font-light text-sm leading-relaxed text-[#4A5872]">
                  Décris ce que tu manges, Koia analyse. Pas de comptage obsessionnel — un suivi basé sur les portions et tes objectifs protéiques.
                </p>
                <div className="mt-6 space-y-1.5">
                  <p className="font-light text-xs text-[#4A5872]">🍗 Poulet grillé 150g → ~45g protéines</p>
                  <p className="font-light text-xs text-[#4A5872]">🥗 Salade composée → ~18g protéines</p>
                  <p className="text-xs font-normal text-[#EEF0F8]">📊 Total : 63g / 110g cible</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="border-t border-[#1E2A40]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <RevealOnScroll>
            <Eyebrow>Les fondations</Eyebrow>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex gap-8 md:gap-10 overflow-x-auto md:overflow-visible md:justify-between items-center pb-2 -mx-6 px-6">
              {credibility.map((c, i) => (
                <div key={i} className="flex items-center gap-8 md:gap-10 shrink-0 md:shrink">
                  <p className="font-light text-sm text-[#1A2338] max-w-[260px]">{c}</p>
                  {i < credibility.length - 1 ? (
                    <div className="hidden md:block h-10 w-px shrink-0" style={{ background: "#1A2338" }} />
                  ) : null}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#1E2A40]">
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
      <section className="relative border-t border-[#1E2A40] overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "rgba(194,0,30,0.04)", filter: "blur(100px)" }}
        />
        <div className="relative mx-auto max-w-[900px] px-6 py-32 text-center">
          <RevealOnScroll>
            <h2
              className="uppercase text-[#EEF0F8]"
              style={{
                ...bebas,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: 1.05,
                letterSpacing: "0.02em",
              }}
            >
              Prêt·e à essayer un coach
              <br />
              qui ne{" "}
              <span>MENT</span>{" "}
              pas ?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="mt-10">
              <EmailWaitlistForm idPrefix="final" align="center" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="mt-4 text-xs font-light text-[#1A2338]">
              Gratuit · Pas de spam · Accès prioritaire
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1E2A40]">
        <div className="mx-auto max-w-[1200px] px-6 py-12 text-center text-xs font-light text-[#1A2338]">
          © 2026 Koia
        </div>
      </footer>
    </main>
  );
}
