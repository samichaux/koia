import { useRef, useState } from "react";

const STORAGE_KEY = "koia_waitlist_emails";

export function EmailWaitlistForm({ idPrefix = "hero" }: { idPrefix?: string }) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      const raw = localStorage.getItem(STORAGE_KEY);
      const list: string[] = raw ? JSON.parse(raw) : [];
      if (!list.includes(email)) list.push(email);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      // ignore storage errors
    }
    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-lg border border-[color:var(--color-koia-border)] bg-[color:var(--color-koia-card)] px-5 py-4 text-[color:var(--color-koia-text)]"
      >
        Tu es sur la liste ! On te tient au courant.
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
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
          className="flex-1 rounded-lg border border-[color:var(--color-koia-border)] bg-[color:var(--color-koia-card)] px-4 py-3 text-[color:var(--color-koia-text)] placeholder:text-[color:var(--color-koia-footer)] outline-none transition focus:border-[color:var(--color-koia-crimson)]"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-lg bg-[color:var(--color-koia-crimson)] px-6 py-3 font-medium text-white transition hover:brightness-110"
        >
          Rejoindre la bêta privée
        </button>
      </div>
      {error ? (
        <p className="mt-2 text-sm text-[color:var(--color-koia-crimson)]">{error}</p>
      ) : null}
    </div>
  );
}
