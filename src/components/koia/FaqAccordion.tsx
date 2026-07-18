import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[color:var(--color-koia-border)] border-y border-[color:var(--color-koia-border)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-medium text-[color:var(--color-koia-text)]">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[color:var(--color-koia-crimson)] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-6"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <p className="max-w-3xl font-light leading-relaxed text-[color:var(--color-koia-muted)]">
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
