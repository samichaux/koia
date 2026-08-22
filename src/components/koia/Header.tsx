import logoAsset from "@/assets/koia-logo-navy.svg.asset.json";
import { useTheme } from "@/hooks/use-theme";
import { Link, useRouterState } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const currentLang = pathname.startsWith("/en") ? "en" : "fr";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToWaitlist = () => {
    const input = document.getElementById("hero-email");
    if (input) {
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      input.focus({ preventScroll: true });
    }
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-page)]/70 backdrop-blur-xl"
      style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <button
          onClick={scrollToTop}
          className="cursor-pointer transition-opacity duration-200 hover:opacity-80"
          aria-label="Retour en haut de page"
        >
          <img
            src={logoAsset.url}
            alt="KOIA"
            className="h-14 w-auto"
          />
        </button>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 sm:flex">
            <div className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider">
              <Link
                to="/"
                className="rounded px-2 py-1 transition-colors"
                style={{
                  color:
                    currentLang === "fr"
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                }}
              >
                FR
              </Link>
              <span style={{ color: "var(--text-muted)" }}>·</span>
              <Link
                to="/en"
                className="rounded px-2 py-1 transition-colors"
                style={{
                  color:
                    currentLang === "en"
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                }}
              >
                EN
              </Link>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? "Passer au mode clair" : "Passer au mode sombre"
              }
              className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] transition-colors hover:border-[var(--text-secondary)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToWaitlist}
            className="relative rounded-lg px-5 py-2.5 text-xs font-medium uppercase tracking-[0.05em] text-white transition-all duration-200 hover:brightness-[1.15] hover:scale-[1.02]"
            style={{
              background:
                "linear-gradient(135deg, #FF2D4B 0%, #C2001E 40%, #7A0012 100%)",
            }}
          >
            Je m'inscris
          </button>
        </div>
      </div>
    </header>
  );
}
