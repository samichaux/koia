import { createFileRoute } from "@tanstack/react-router";
import { EmailWaitlistForm } from "@/components/koia/EmailWaitlistForm";
import { FaqAccordion } from "@/components/koia/FaqAccordion";
import { RevealOnScroll } from "@/components/koia/RevealOnScroll";
import { useEffect, useRef, useState } from "react";
import { frContent } from "@/content/fr";
import type { Content } from "@/content/fr";

// Source unique des questions/réponses : utilisée par l'accordéon et le JSON-LD FAQPage.
const faqs: { q: string; a: string }[] = [...frContent.faq.items];

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export const Route = createFileRoute("/")({
  component: () => <LandingPage content={frContent} />,
  head: () => ({
    links: [
      { rel: "alternate", hrefLang: "fr", href: "https://koia.be/" },
      { rel: "alternate", hrefLang: "en", href: "https://koia.be/en" },
      { rel: "alternate", hrefLang: "x-default", href: "https://koia.be/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFaqJsonLd()),
      },
    ],
  }),
});

const bebas = { fontFamily: "'Bebas Neue', sans-serif" } as const;
const easing = "cubic-bezier(0.16,1,0.3,1)";

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function WordReveal({
  text,
  size = "text-4xl md:text-5xl",
  gradient = false,
  color,
}: {
  text: string;
  size?: string;
  gradient?: boolean;
  color?: string;
}) {
  const { ref, visible } = useInView<HTMLHeadingElement>(0.2);
  const words = text.split(" ");
  return (
    <h2
      ref={ref}
      className={`uppercase ${size}`}
      style={{
        ...bebas,
        lineHeight: 0.95,
        letterSpacing: "0.02em",
        color: color ?? "#EEF0F8",
      }}
    >
      {words.map((w, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            marginRight: "0.25em",
            paddingBottom: "0.05em",
          }}
        >
          <span
            style={{
              display: "inline-block",
              transform: visible ? "translateY(0)" : "translateY(100%)",
              opacity: visible ? 1 : 0,
              transition: `transform 500ms ${easing} ${i * 50}ms, opacity 500ms ${easing} ${i * 50}ms`,
              ...(gradient
                ? {
                    backgroundImage:
                      "linear-gradient(135deg, #FF2D4B 0%, #C2001E 40%, #7A0012 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }
                : {}),
            }}
          >
            {w}
          </span>
        </span>
      ))}
    </h2>
  );
}

function MotivationalDivider({ content }: { content: Content }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);
  const line1 = content.motivational.line1.split(" ");
  const line2 = content.motivational.line2.split(" ");
  const line1Duration = line1.length * 100;
  const beatPause = 400;
  return (
    <section className="relative py-16 koia-motiv overflow-hidden" ref={ref}>
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=70&auto=format&fit=crop"
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "saturate(0.4) brightness(0.7)", zIndex: 0 }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "rgba(4,7,15,0.88)", zIndex: 1 }}
      />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <h2 className="uppercase" style={{ ...bebas, color: "#2A3448", lineHeight: 0.95, letterSpacing: "0.02em" }}>
          {line1.map((w, i) => (
            <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.25em", paddingBottom: "0.05em" }}>
              <span
                style={{
                  display: "inline-block",
                  transform: visible ? "translateY(0)" : "translateY(100%)",
                  opacity: visible ? 1 : 0,
                  transition: `transform 500ms ${easing} ${i * 100}ms, opacity 500ms ${easing} ${i * 100}ms`,
                }}
              >
                {w}
              </span>
            </span>
          ))}
        </h2>
        <div className="relative mt-2">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ width: 400, height: 60, background: "rgba(194,0,30,0.08)", filter: "blur(60px)" }}
          />
          <h2 className="relative uppercase" style={{ ...bebas, lineHeight: 0.95, letterSpacing: "0.02em" }}>
            {line2.map((w, i) => (
              <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.25em", paddingBottom: "0.05em" }}>
                <span
                  style={{
                    display: "inline-block",
                    transform: visible ? "translateY(0)" : "translateY(100%)",
                    opacity: visible ? 1 : 0,
                    transition: `transform 500ms ${easing} ${line1Duration + beatPause + i * 70}ms, opacity 500ms ${easing} ${line1Duration + beatPause + i * 70}ms`,
                    backgroundImage: "linear-gradient(135deg, #FF2D4B 0%, #C2001E 40%, #7A0012 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  {w}
                </span>
              </span>
            ))}
          </h2>
        </div>
      </div>
      <style>{`
        .koia-motiv h2 { font-size: clamp(2.5rem, 7vw, 5rem); text-align: center; }
      `}</style>
    </section>
  );
}

function PulseLine() {
  return (
    <div aria-hidden className="mx-auto max-w-[1200px] px-6">
      <div className="koia-pulse-line" />
    </div>
  );
}

function BentoReveal({
  children,
  variant,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  variant: "scale" | "up";
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  const duration = variant === "scale" ? 700 : 600;
  const hidden = variant === "scale" ? "scale(0.95)" : "translateY(30px)";
  const shown = variant === "scale" ? "scale(1)" : "translateY(0)";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? shown : hidden,
        transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ScaleReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: `opacity 800ms ${easing} ${delay}ms, transform 800ms ${easing} ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ProgrammeSection({ content }: { content: Content }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  const programme = content.programme.rows;
  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <RevealOnScroll>
          <Eyebrow>{content.programme.eyebrow}</Eyebrow>
        </RevealOnScroll>
        <WordReveal text={content.programme.title} />
        <div className="mt-16 flex justify-center">
          <div
            ref={ref}
            className="w-full max-w-[480px] overflow-hidden rounded-xl border border-[#1E2A40] bg-[#0E1525]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "perspective(800px) rotateX(0deg) scale(1)"
                : "perspective(800px) rotateX(4deg) scale(0.96)",
              transformOrigin: "center top",
              transition: `opacity 800ms ${easing}, transform 800ms ${easing}`,
            }}
          >
            <div
              className="flex items-center justify-between"
              style={{ background: "#141D30", padding: "16px 20px" }}
            >
              <span style={{ ...bebas, fontSize: "1.125rem", color: "#EEF0F8" }}>
                {content.programme.cardLabel}
              </span>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.75rem",
                  color: "#8A96B0",
                }}
              >
                {content.programme.cardSubLabel}
              </span>
            </div>
            <div>
              {programme.map((row, i) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between"
                  style={{
                    padding: "12px 20px",
                    background: i % 2 === 1 ? "rgba(20, 29, 48, 0.5)" : "transparent",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-20px)",
                    transition: `opacity 400ms ${easing} ${400 + i * 120}ms, transform 400ms ${easing} ${400 + i * 120}ms`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "0.875rem",
                      color: "#EEF0F8",
                    }}
                  >
                    {row.name}
                  </span>
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 300,
                        fontSize: "0.875rem",
                        color: "#8A96B0",
                      }}
                    >
                      {row.sets}
                    </span>
                    <span
                      className="rounded-full"
                      style={{
                        background: "rgba(194,0,30,0.12)",
                        padding: "2px 10px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "0.75rem",
                        display: "inline-block",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "scale(1)" : "scale(0.8)",
                        transition: `opacity 200ms ${easing} ${400 + i * 120 + 80}ms, transform 200ms ${easing} ${400 + i * 120 + 80}ms`,
                      }}
                    >
                      <span
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg, #FF2D4B 0%, #C2001E 40%, #7A0012 100%)",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          color: "transparent",
                        }}
                      >
                        {row.rpe}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="flex items-start"
              style={{
                padding: "16px 20px",
                borderTop: "1px solid #1E2A40",
                opacity: visible ? 1 : 0,
                transition: `opacity 500ms ${easing} ${400 + programme.length * 120 + 300}ms`,
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "#0E1525",
                  border: "1px solid rgba(194,0,30,0.2)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 7,
                }}
              >
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #FF2D4B 0%, #C2001E 40%, #7A0012 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  K
                </span>
              </div>
              <p
                style={{
                  marginLeft: 8,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.75rem",
                  lineHeight: 1.5,
                  color: "#8A96B0",
                }}
              >
                {content.programme.coachNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroHeadline({ content }: { content: Content }) {
  const words = content.hero.headline;
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
      className="text-xs font-medium uppercase text-[#6B7A99] mb-12"
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

function IPhoneMockup({ content }: { content: Content }) {
  const messages = content.iPhone.messages;

  const TYPING_MS = 600;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [shown, setShown] = useState(0);
  const [typingFor, setTypingFor] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const [cycle, setCycle] = useState(0);

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

    const lastDelay = messages[messages.length - 1].delay;
    timers.push(
      window.setTimeout(() => {
        setFading(true);
      }, lastDelay + 3000),
    );
    timers.push(
      window.setTimeout(() => {
        setShown(0);
        setTypingFor(null);
        setFading(false);
        setCycle((c) => c + 1);
      }, lastDelay + 3000 + 600 + 1000),
    );

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, cycle]);

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
            {content.iPhone.statusBarTime}
          </span>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#8A96B0" }} />
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#8A96B0" }} />
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#8A96B0" }} />
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
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FF2D4B 0%, #C2001E 40%, #7A0012 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              K
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className="font-medium text-[#EEF0F8]"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 11 }}
            >
              {content.iPhone.chatHeaderName}
            </span>
            <span
              className="flex items-center gap-1 text-[#8A96B0]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: 10 }}
            >
              <span
                className="inline-block rounded-full"
                style={{ width: 5, height: 5, background: "#C2001E" }}
              />
              {content.iPhone.onlineStatus}
            </span>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-hidden"
          style={{ padding: 16 }}
        >
          <div
            className="flex flex-col"
            style={{
              opacity: fading ? 0 : 1,
              transition: "opacity 600ms ease",
            }}
          >
            {messages.map((m, i) => {
              const visible = i < shown;
              if (!visible) return null;
              const isUser = m.from === "user";
              const isContinuation = i > 0 && messages[i - 1].from === m.from;
              const isFirstInGroup = i === 0 || messages[i - 1].from !== m.from;
              const showAvatar = isFirstInGroup;
              return (
                <div
                  key={i}
                  className={`flex items-end ${isUser ? "flex-row-reverse" : "flex-row"}`}
                  style={{
                    marginBottom: isContinuation ? 3 : 6,
                    marginLeft: !isUser && !isFirstInGroup ? 26 : undefined,
                    marginRight: isUser && !isFirstInGroup ? 26 : undefined,
                    alignSelf: isUser ? "flex-end" : "flex-start",
                    maxWidth: "72%",
                    gap: 6,
                  }}
                >
                  {showAvatar && (
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: isUser ? "rgba(194, 0, 30, 0.15)" : "#0E1525",
                        border: isUser ? "1px solid rgba(194, 0, 30, 0.2)" : "1px solid #1E2A40",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: 9,
                        color: isUser ? "#EEF0F8" : "transparent",
                      }}
                    >
                      {isUser ? (
                        "S"
                      ) : (
                        <span
                          style={{
                            backgroundImage:
                              "linear-gradient(135deg, #FF2D4B 0%, #C2001E 40%, #7A0012 100%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            color: "transparent",
                          }}
                        >
                          K
                        </span>
                      )}
                    </div>
                  )}
                  <div
                    style={{
                      background: isUser ? "#7A0012" : "#141E30",
                      color: "#EEF0F8",
                      borderRadius: isUser ? "10px 10px 3px 10px" : "10px 10px 10px 3px",
                      padding: "8px 12px",
                      maxWidth: "100%",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 300,
                      fontSize: 10,
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
                style={{
                  marginBottom: 6,
                  alignSelf: typingSide === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  className="flex items-center gap-1"
                  style={{
                    background: typingSide === "user" ? "#7A0012" : "#141E30",
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
                        background: "#8A96B0",
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
              color: "#6B7A99",
            }}
          >
            {content.iPhone.inputPlaceholder}
          </div>
          <button
            type="button"
            aria-hidden
            className="flex items-center justify-center"
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #FF2D4B 0%, #C2001E 40%, #7A0012 100%)",
              color: "#EEF0F8",
            }}
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

function MiniChatBubble({
  side,
  variant,
  children,
}: {
  side: "user" | "ai";
  variant: "chatgpt" | "koia-user" | "koia-ai";
  children: React.ReactNode;
}) {
  const isUser = side === "user";
  const bg =
    variant === "chatgpt"
      ? "rgba(255,255,255,0.04)"
      : variant === "koia-user"
        ? "linear-gradient(135deg, rgba(255,45,75,0.22) 0%, rgba(194,0,30,0.16) 40%, rgba(122,0,18,0.12) 100%)"
        : "#0E1525";
  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
      style={{ marginBottom: 4 }}
    >
      <div
        style={{
          background: bg,
          color: "#EEF0F8",
          borderRadius: isUser ? "10px 10px 3px 10px" : "10px 10px 10px 3px",
          padding: "6px 10px",
          maxWidth: "88%",
          fontFamily: "Inter, sans-serif",
          fontWeight: 300,
          fontSize: 10,
          lineHeight: 1.4,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function PhoneFrame({
  label,
  variant,
  children,
  footer,
  mark,
}: {
  label: string;
  variant: "off" | "on";
  children: React.ReactNode;
  footer: React.ReactNode;
  mark: "cross" | "check";
}) {
  return (
    <div className="w-full max-w-[260px]">
      <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#6B7A99]">
        {label}
      </div>
      <div
        className="relative"
        style={{
          width: "100%",
          background: "#0E1525",
          borderRadius: 14,
          padding: 16,
          border: variant === "on" ? "1px solid transparent" : "1px solid #1E2A40",
          borderImage:
            variant === "on"
              ? "linear-gradient(135deg, rgba(255,45,75,0.35), rgba(194,0,30,0.2), rgba(122,0,18,0.1)) 1"
              : undefined,
          overflow: "hidden",
        }}
      >
        {mark === "cross" ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: 120,
              color: "rgba(194,0,30,0.10)",
              lineHeight: 1,
            }}
          >
            ✗
          </div>
        ) : (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: 120,
              lineHeight: 1,
              backgroundImage:
                "linear-gradient(135deg, rgba(255,45,75,0.14), rgba(122,0,18,0.06))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            ✓
          </div>
        )}
        <div className="relative">{children}</div>
      </div>
      <div className="mt-2 text-xs" style={{ color: variant === "on" ? "#EEF0F8" : "#6B7A99" }}>
        {footer}
      </div>
    </div>
  );
}

function DifferenceBlock1({ content }: { content: Content }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  const block = content.difference.block1;
  return (
    <div
      ref={ref}
      className="grid gap-10 md:grid-cols-[55fr_45fr] md:items-center"
    >
      <div className="flex flex-col items-center gap-6 md:items-start">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: `opacity 600ms ${easing}, transform 600ms ${easing}`,
          }}
        >
          <PhoneFrame
            label={block.without.label}
            variant="off"
            mark="cross"
            footer={block.without.footer}
          >
            <MiniChatBubble side={block.without.messages[0].side as "user" | "ai"} variant="chatgpt">
              {block.without.messages[0].text}
            </MiniChatBubble>
            <MiniChatBubble side={block.without.messages[1].side as "user" | "ai"} variant="chatgpt">
              {block.without.messages[1].text}
            </MiniChatBubble>
          </PhoneFrame>
        </div>
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: `opacity 600ms ${easing} 200ms, transform 600ms ${easing} 200ms`,
          }}
        >
          <PhoneFrame
            label={block.with.label}
            variant="on"
            mark="check"
            footer={
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #FF2D4B 0%, #C2001E 40%, #7A0012 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                {block.with.footer}
              </span>
            }
          >
            <MiniChatBubble side={block.with.messages[0].side as "user" | "ai"} variant="koia-user">
              {block.with.messages[0].text}
            </MiniChatBubble>
            <MiniChatBubble side={block.with.messages[1].side as "user" | "ai"} variant="koia-ai">
              {block.with.messages[1].text}
            </MiniChatBubble>
          </PhoneFrame>
        </div>
      </div>
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 700ms ${easing} 300ms, transform 700ms ${easing} 300ms`,
        }}
      >
        <h3
          className="uppercase text-[#EEF0F8]"
          style={{ ...bebas, fontSize: "1.75rem", lineHeight: 1.05, letterSpacing: "0.02em" }}
        >
          {block.title}
        </h3>
        <p className="mt-4 font-light text-sm leading-relaxed text-[#8A96B0]">
          {block.body}
        </p>
        <div
          className="mt-6 pl-3"
          style={{
            borderLeft: "2px solid transparent",
            borderImage:
              "linear-gradient(180deg, #FF2D4B 0%, #C2001E 40%, #7A0012 100%) 1",
          }}
        >
          <p className="text-xs font-normal text-[#EEF0F8]">
            {block.systemPrompt}
          </p>
        </div>
      </div>
    </div>
  );
}

function DifferenceBlock2({ content }: { content: Content }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  const block = content.difference.block2;
  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-xl"
      style={{
        minHeight: 200,
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.97)",
        transition: `opacity 700ms ${easing}, transform 700ms ${easing}`,
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1600&q=70&auto=format&fit=crop"
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "saturate(0.3) brightness(0.5)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(4,7,15,0.95) 0%, rgba(4,7,15,0.7) 60%, rgba(4,7,15,0.4) 100%)",
        }}
      />
      <div className="relative z-10 max-w-[520px] p-10">
        <h3
          className="uppercase text-[#EEF0F8]"
          style={{ ...bebas, fontSize: "1.5rem", lineHeight: 1.05, letterSpacing: "0.02em" }}
        >
          {block.title}
        </h3>
        <p className="mt-3 font-light text-sm leading-relaxed text-[#8A96B0] max-w-[400px]">
          {block.body}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {block.pills.map((p) => (
            <span
              key={p.t}
              className="inline-block rounded-full text-xs text-[#EEF0F8]"
              style={{
                background: "rgba(194,0,30,0.1)",
                border: "1px solid rgba(194,0,30,0.2)",
                padding: "4px 12px",
                opacity: p.dim ? 0.6 : 1,
              }}
            >
              {p.t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DifferenceBlock3({ content }: { content: Content }) {
  const { ref, visible } = useInView<HTMLDivElement>(0.2);
  const block = content.difference.block3;
  return (
    <div ref={ref} className="mx-auto w-full max-w-[560px]">
      <div
        className="rounded-xl border border-[#1E2A40] bg-[#0E1525] p-8"
        style={{ transitionTimingFunction: easing }}
      >
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transition: `opacity 600ms ${easing}, transform 600ms ${easing}`,
            }}
          >
            <h3
              className="uppercase text-[#EEF0F8]"
              style={{ ...bebas, fontSize: "1.25rem", lineHeight: 1.05, letterSpacing: "0.02em" }}
            >
              {block.title}
            </h3>
            <p className="mt-3 font-light text-sm leading-relaxed text-[#8A96B0]">
              {block.body}
            </p>
          </div>
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(20px)",
              transition: `opacity 600ms ${easing} 150ms, transform 600ms ${easing} 150ms`,
            }}
          >
            <div
              className="rounded-lg"
              style={{ background: "#141D30", padding: 14 }}
            >
              <div className="text-xs font-normal text-[#4A5872]">{block.mealLabel}</div>
              <div className="my-2 h-px" style={{ background: "#1E2A40" }} />
              <div
                className="mb-2 inline-block rounded-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #FF2D4B 0%, #C2001E 40%, #7A0012 100%)",
                  padding: "6px 10px",
                }}
              >
                <span
                  className="text-[10px] font-light text-[#EEF0F8]"
                  style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.4 }}
                >
                  {block.userMessage}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div
                  className="flex shrink-0 items-center justify-center rounded-full"
                  style={{
                    width: 14,
                    height: 14,
                    background: "#0E1525",
                    border: "1px solid rgba(194,0,30,0.2)",
                  }}
                >
                  <span
                    className="text-[6px] font-medium"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      backgroundImage:
                        "linear-gradient(135deg, #FF2D4B 0%, #C2001E 40%, #7A0012 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                    }}
                  >
                    K
                  </span>
                </div>
                <p
                  className="text-[10px] font-light leading-relaxed text-[#4A5872]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {block.aiResponse}
                </p>
              </div>
              <div
                className="mt-3 text-[10px] font-light leading-relaxed text-[#4A5872]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  paddingLeft: 10,
                  borderLeft: "2px solid transparent",
                  borderImage:
                    "linear-gradient(180deg, #FF2D4B 0%, #C2001E 40%, #7A0012 100%) 1",
                }}
              >
                {block.tip}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LandingPage({ content }: { content: Content }) {
  const problemsRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [visibleProblems, setVisibleProblems] = useState<Set<number>>(new Set());
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    content.problem.items.forEach((_, i) => {
      const node = problemsRefs.current[i];
      if (!node) return;
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              setTimeout(() => setVisibleProblems((s) => new Set(s).add(i)), i * 200);
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
  }, [content]);

  return (
    <main className="relative bg-[#04070F] text-[#EEF0F8] overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=70&auto=format&fit=crop"
          alt=""
          aria-hidden
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "saturate(0.4) brightness(0.7)", zIndex: 0 }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(4,7,15,0.92) 0%, rgba(4,7,15,0.85) 50%, rgba(4,7,15,0.7) 100%)",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full z-0"
          style={{
            background: "rgba(194,0,30,0.06)",
            filter: "blur(120px)",
            animation: "koia-glow-drift 8s ease-in-out infinite",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:pl-[8%] md:pr-8 py-24">
          <div className="grid gap-16 md:grid-cols-[55fr_45fr] md:items-center">
            {/* Left: text + form */}
            <div className="text-left max-md:text-center">
              <HeroHeadline content={content} />
              <p className="mt-6 font-light text-lg text-[#8A96B0] animate-[fade-in_600ms_ease-out_1200ms_both]">
                {content.hero.subtitle}
              </p>
              <div className="mt-10 animate-[fade-in_600ms_ease-out_1400ms_both] max-md:flex max-md:justify-center">
                <EmailWaitlistForm idPrefix="hero" />
              </div>
              <p className="mt-4 text-xs font-light text-[#6B7A99] animate-[fade-in_600ms_ease-out_1600ms_both]">
                {content.hero.formNote}
              </p>
            </div>
            {/* Right: iPhone mockup */}
            <div className="relative animate-[fade-in_800ms_ease-out_1600ms_both] max-md:mt-4">
              <IPhoneMockup content={content} />
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 -translate-x-1/2 h-10 w-px overflow-hidden"
          style={{ background: "linear-gradient(180deg, #FF2D4B, #7A0012)" }}
        >
          <div
            className="h-2 w-px"
            style={{
              background: "#C2001E",
              animation: "koia-scroll-dot 2.4s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      <PulseLine />
      {/* PROBLEM */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <RevealOnScroll>
            <Eyebrow>{content.problem.eyebrow}</Eyebrow>
          </RevealOnScroll>
          <WordReveal text={content.problem.title} />
          <div className="mt-16 border-t border-[#1E2A40]">
            {content.problem.items.map((p, i) => (
              <div
                key={p.n}
                ref={(el) => {
                  problemsRefs.current[i] = el;
                }}
                className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 border-b border-[#1E2A40] py-10"
                style={{
                  transition: `opacity 600ms ${easing}, transform 600ms ${easing}`,
                  opacity: visibleProblems.has(i) ? 1 : 0,
                  transform: visibleProblems.has(i) ? "translateX(0)" : "translateX(-40px)",
                }}
              >
                <div
                  style={{
                    ...bebas,
                    lineHeight: 1,
                    backgroundImage:
                      "linear-gradient(135deg, rgba(255,45,75,0.25) 0%, rgba(194,0,30,0.15) 40%, rgba(122,0,18,0.08) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                  className="text-5xl md:text-6xl select-none max-md:hidden"
                >
                  {p.n}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#EEF0F8]">{p.title}</h3>
                  <p className="mt-2 font-light text-base leading-relaxed text-[#8A96B0] max-w-[720px]">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PulseLine />
      <MotivationalDivider content={content} />

      {/* DIFFERENCE — Bento */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <RevealOnScroll>
            <Eyebrow>{content.difference.eyebrow}</Eyebrow>
          </RevealOnScroll>
          <WordReveal text={content.difference.title} />

          <div className="mt-16 flex flex-col gap-[60px]">
            <DifferenceBlock1 content={content} />
            <DifferenceBlock2 content={content} />
            <DifferenceBlock3 content={content} />
          </div>
        </div>
      </section>

      <PulseLine />
      <ProgrammeSection content={content} />

      {/* CREDIBILITY */}
      <section className="koia-section-divider">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <RevealOnScroll>
            <Eyebrow>{content.credibility.eyebrow}</Eyebrow>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex gap-8 md:gap-10 overflow-x-auto md:overflow-visible md:justify-between items-center pb-2 -mx-6 px-6">
              {content.credibility.items.map((c, i) => (
                <div key={i} className="flex items-center gap-8 md:gap-10 shrink-0 md:shrink">
                  <p className="font-light text-sm text-[#B4BFD3] max-w-[260px]">{c}</p>
                  {i < content.credibility.items.length - 1 ? (
                    <div className="hidden md:block h-10 w-px shrink-0" style={{ background: "#2A3654" }} />
                  ) : null}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="koia-section-divider">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <RevealOnScroll>
            <Eyebrow>{content.faq.eyebrow}</Eyebrow>
          </RevealOnScroll>
          <WordReveal text={content.faq.title} />
          <div className="mt-12 max-w-[860px]">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative koia-section-divider overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=70&auto=format&fit=crop"
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "saturate(0.4) brightness(0.7)", zIndex: 0 }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "rgba(4,7,15,0.92)", zIndex: 0 }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full z-0"
          style={{ background: "rgba(194,0,30,0.04)", filter: "blur(100px)" }}
        />
        <div className="relative z-10 mx-auto max-w-[900px] px-6 py-32 text-center">
          <ScaleReveal>
            <h2
              className="uppercase text-[#EEF0F8]"
              style={{
                ...bebas,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: 1.05,
                letterSpacing: "0.02em",
              }}
            >
              {content.finalCta.title.line1}
              <br />
              {content.finalCta.title.line2Before}{" "}
              <span>{content.finalCta.title.accent}</span>{" "}
              {content.finalCta.title.line2After}
            </h2>
          </ScaleReveal>
          <RevealOnScroll delay={100}>
            <div className="mt-10">
              <EmailWaitlistForm idPrefix="final" align="center" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="mt-4 text-xs font-light text-[#6B7A99]">
              {content.finalCta.formNote}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="koia-section-divider">
        <div className="mx-auto max-w-[1200px] px-6 py-12 text-center text-xs font-light text-[#6B7A99]">
          {content.footer.copyright}
        </div>
      </footer>
    </main>
  );
}
