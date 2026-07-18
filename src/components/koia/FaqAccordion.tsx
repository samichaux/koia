import { useState } from "react";

type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t border-white/[0.06]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-white/[0.06]">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left group"
              >
                <span className="font-normal text-base text-[#E8E8E8]">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`shrink-0 text-2xl leading-none text-[#3D4450] transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
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
                <p className="max-w-[680px] font-light leading-relaxed text-base text-[#6B7280]">
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
