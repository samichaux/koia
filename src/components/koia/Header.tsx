import logoAsset from "@/assets/koia-logo-navy.svg.asset.json";



export function Header() {
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
      className="sticky top-0 z-50 border-b border-[#1E2A40] bg-[#04070F]/70 backdrop-blur-xl"
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
            className="h-10 w-auto"
          />
        </button>

        <div className="flex items-center gap-4">
          {/* Espace réservé pour le futur sélecteur de langue et de thème */}
          <div className="hidden items-center gap-2 sm:flex" />

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
