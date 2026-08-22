import { useRef, useState } from "react";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const STORAGE_KEY = "koia_waitlist_email";

export function EmailWaitlistForm({
  idPrefix = "hero",
  align = "left",
}: {
  idPrefix?: string;
  align?: "left" | "center";
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) setSubmitted(true);
    } catch {}
  }, []);

  const handleSubmit = () => {
    const input = inputRef.current;
    if (!input) return;
    if (!input.checkValidity()) {
      input.reportValidity();
      setError("Merci d'entrer un email valide.");
      return;
    }
    const email = input.value.trim().toLowerCase();
    try {
      localStorage.setItem(STORAGE_KEY, email);
    } catch {}
    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className={`text-[#EEF0F8] font-sans text-base animate-[fade-in_400ms_ease-out] ${align === "center" ? "text-center" : ""}`}
      >
        Tu es sur la liste <span className="text-[#C2001E]">✓</span>
      </div>
    );
  }

  return (
    <div className={`w-full ${align === "center" ? "mx-auto max-w-xl" : ""}`}>
      <div className={`relative flex flex-col gap-3 sm:flex-row ${align === "center" ? "sm:justify-center" : ""}`}>
        <input
          ref={inputRef}
          id={`${idPrefix}-email`}
          type="email"
          required
          placeholder="Ton email"
          autoComplete="email"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit();
            }
          }}
          className="sm:w-[300px] rounded-lg border border-[#1E2A40] bg-[rgba(14,21,37,0.8)] px-5 py-[14px] text-[#EEF0F8] placeholder:text-[#6B7A99] outline-none transition-all duration-300 focus:border-[rgba(194,0,30,0.4)] focus:shadow-[0_0_0_3px_rgba(194,0,30,0.08)]"
          style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
        />
        <div className="relative">
          <div
            aria-hidden
            className="koia-cta-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60px] w-[200px] rounded-full"
            style={{ background: "rgba(194,0,30,0.25)", filter: "blur(40px)", transform: "translate(-50%, -50%)" }}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="relative rounded-lg px-7 py-[14px] text-sm font-medium uppercase tracking-[0.05em] text-white transition-all duration-200 hover:brightness-[1.15] hover:scale-[1.02]"
            style={{
              background:
                "linear-gradient(135deg, #FF2D4B 0%, #C2001E 40%, #7A0012 100%)",
            }}
          >
            Rejoindre la bêta
          </button>
        </div>
      </div>
      {error ? (
        <p className={`mt-2 text-sm text-[#C2001E] ${align === "center" ? "text-center" : ""}`}>{error}</p>
      ) : null}
    </div>
  );
}
