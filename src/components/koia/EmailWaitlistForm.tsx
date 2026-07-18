import { useRef, useState } from "react";
import { useEffect } from "react";

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
        className={`text-[#E8E8E8] font-sans text-base animate-[fade-in_400ms_ease-out] ${align === "center" ? "text-center" : ""}`}
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
          className="sm:w-[320px] rounded-lg border border-white/[0.08] bg-white/[0.04] px-5 py-[14px] text-[#E8E8E8] placeholder:text-[#3D4450] outline-none transition-all duration-300 focus:border-[rgba(194,0,30,0.4)] focus:shadow-[0_0_0_3px_rgba(194,0,30,0.1)]"
          style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
        />
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: "rgba(194,0,30,0.25)", filter: "blur(40px)" }}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="relative rounded-lg bg-[#C2001E] px-7 py-[14px] text-sm font-medium uppercase tracking-[0.05em] text-white transition-all duration-200 hover:brightness-[1.15] hover:scale-[1.02]"
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
