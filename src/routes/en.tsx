import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "./index";
import { enContent } from "@/content/en";

// Single source of Q&A: same data as the accordion, reused for the FAQPage JSON-LD.
const faqs: { q: string; a: string }[] = [...enContent.faq.items];

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

const TITLE = "KOIA — The AI coach that really adapts to you";
const DESCRIPTION =
  "KOIA, the AI fitness coach that adapts to you. Personalised programs, transparent reasoning, zero bullshit. Join the private beta.";
const OG_DESCRIPTION =
  "Personalised programs. Transparent reasoning. Zero bullshit. Join the KOIA private beta.";

export const Route = createFileRoute("/en")({
  component: () => <LandingPage content={enContent} />,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: OG_DESCRIPTION },
      { property: "og:url", content: "https://koia.be/en" },
    ],
    links: [
      { rel: "canonical", href: "https://koia.be/en" },
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
