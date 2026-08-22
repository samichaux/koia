import { useEffect, useRef, useState } from "react";

type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!listRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(listRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={listRef} className="border-t border-[var(--border)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="border-b border-[var(--border)]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(20px)",
              transition: `opacity 400ms cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, transform 400ms cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`,
            }}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left group"
              >
                <span className="font-normal text-base text-[var(--text-primary)]">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`shrink-0 text-2xl leading-none transition-all duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  style={{
                    color: isOpen ? "#C2001E" : "var(--text-secondary)",
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              className={`grid overflow-hidden transition-all duration-500 ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-6"
                  : "grid-rows-[0fr] opacity-0"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              <div className="min-h-0">
                <p className="max-w-[680px] font-light leading-relaxed text-base text-[var(--text-secondary)]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
