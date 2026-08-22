export const frContent = {
  hero: {
    headline: [
      { t: "LE", f: "bebas" },
      { t: "COACH", f: "bebas" },
      { t: "IA", f: "bebas" },
      { t: "QUI", f: "bebas" },
      { t: "S'ADAPTE", f: "bebas" },
      { t: "\n", f: "br" },
      { t: "VRAIMENT", f: "gradient" },
      { t: "À", f: "bebas" },
      { t: "TOI", f: "bebas" },
    ],
    subtitle:
      "Tu parles comme à un vrai coach. KOIA construit ton plan et l'adapte chaque semaine.",
    formNote: "Gratuit · Pas de spam · Accès prioritaire",
  },

  problem: {
    eyebrow: "Le problème",
    title: "Ce que les apps fitness te vendent",
    items: [
      {
        n: "01",
        title: "ChatGPT te donne un programme. Pas un coach.",
        text: "Des millions de gens demandent déjà à ChatGPT ou Claude de leur écrire un programme. Mais sans le bon prompt, l'IA invente, généralise, et oublie ta morphologie, tes blessures, ton historique. Tu obtiens un plan générique habillé en personnalisation.",
      },
      {
        n: "02",
        title: "Les apps fitness ne sont pas de l'IA.",
        text: "Un quiz de 5 questions et un PDF. La plupart des apps qui se disent « IA » sont des formulaires avec un logo. Aucune adaptation réelle, aucune explication, aucune conversation.",
      },
      {
        n: "03",
        title: "Personne ne te dit pourquoi.",
        text: "Pourquoi cet exercice et pas un autre ? Pourquoi 4 séries et pas 3 ? Ni ChatGPT ni les apps ne t'expliquent le raisonnement — chez KOIA, chaque choix a une réponse que tu peux lire quand tu veux la lire.",
      },
    ],
  },

  motivational: {
    line1: "ARRÊTE DE DEVINER.",
    line2: "COMMENCE À COMPRENDRE.",
  },

  difference: {
    eyebrow: "La différence",
    title: "Un coach qui mérite le nom",
    block1: {
      title: "L'IA, mais bien promptée",
      body: "KOIA ne repart pas de zéro à chaque message. Il retient tes séances, tes douleurs, ta progression — et ajuste, semaine après semaine, sans que tu aies à tout rappeler.",
      systemPrompt: "System prompt : 6 blocs · 47 règles · 0 bullshit",
      without: {
        label: "Sans KOIA",
        footer: "Générique · Pas de contexte",
        messages: [
          { side: "user", text: "Fais-moi un programme de muscu" },
          {
            side: "ai",
            text: "Jour 1 — Bench press 4×10, Shoulder press 3×12, Triceps pushdown 3×15...",
          },
        ],
      },
      with: {
        label: "Avec KOIA",
        footer: "Adapté · Contextualisé · Sourcé",
        messages: [
          { side: "user", text: "j'ai mal au genou droit" },
          {
            side: "ai",
            text: "Je remplace le squat bulgare par du hip thrust. RPE 6 aujourd'hui. Si ça persiste → consulte.",
          },
        ],
      },
    },
    block2: {
      title: "Raisonnement transparent",
      body: "Chaque exercice est choisi pour une raison. KOIA t'explique pourquoi, avec le niveau de preuve.",
      pills: [
        { t: "Méta-analyse ✓", dim: false },
        { t: "Étude RCT ✓", dim: false },
        { t: "Consensus expert ✓", dim: true },
      ],
    },
    block3: {
      title: "Suivi repas sans prise de tête",
      body: "Décris ce que tu manges. KOIA analyse et te donne des conseils concrets — pas des chiffres, pas de culpabilité.",
      mealLabel: "Suivi repas — Mardi midi",
      userMessage: "j’ai mangé du poulet avec du riz et une salade",
      aiResponse:
        "Bon repas 👍 Le poulet couvre bien tes protéines. Par contre la portion de riz est un peu grosse par rapport à la salade — essaie deux poings de légumes la prochaine fois.",
      tip: "Astuce : ajoute une source de bon gras — quelques noix ou un filet d’huile d’olive.",
    },
  },

  programme: {
    eyebrow: "Exemple",
    title: "Ton programme, pas celui de tout le monde",
    cardLabel: "FULL BODY A",
    cardSubLabel: "Semaine 3 · Recomp",
    rows: [
      { name: "Hip Thrust", sets: "4×10", rpe: "RPE 8" },
      { name: "Rowing T-bar", sets: "4×10", rpe: "RPE 7" },
      { name: "Squat Bulgare", sets: "3×12", rpe: "RPE 7" },
      { name: "Reverse Pec Deck", sets: "3×15", rpe: "RPE 6" },
      { name: "Abduction machine", sets: "3×15", rpe: "RPE 6" },
    ],
    coachNote:
      "Hip thrust en premier — on cible les fessiers quand tu es encore fraîche. Le rowing est chest-supported pour protéger le bas du dos.",
  },

  credibility: {
    eyebrow: "Les fondations",
    items: [
      "Zéro diet culture · Rien à te vendre",
      "Conçu par une athlète · 10 ans de pratique",
      "Basé sur Schoenfeld, Morton, Helms, Contreras",
      "Protocole RPE validé par la recherche",
    ],
  },

  faq: {
    eyebrow: "Questions",
    title: "Ce que tu veux savoir",
    items: [
      {
        q: "KOIA est-elle une app de musculation ou de fitness ?",
        a: "Les deux. KOIA génère des programmes adaptés à tes objectifs — prise de muscle, perte de gras, condition physique. Le coach IA s'adapte à ton niveau et ton équipement.",
      },
      {
        q: "Pourquoi ne pas utiliser ChatGPT pour mon programme ?",
        a: "Tu peux, et le premier programme peut même être bon. Le problème arrive à la semaine 3 : ChatGPT ne se souvient pas de ta séance précédente, ni de si tu as eu mal quelque part. Tu dois tout retaper à chaque fois. KOIA garde le fil et ajuste sans que tu aies à réexpliquer.",
      },
      {
        q: "En quoi l'IA de KOIA est différente des autres apps ?",
        a: "La plupart des apps utilisent un quiz pour générer un programme statique. KOIA utilise un agent conversationnel qui comprend ton contexte, s'adapte semaine après semaine, et t'explique chaque choix.",
      },
      {
        q: "KOIA propose-t-elle un suivi nutritionnel ?",
        a: "Oui. Tu décris tes repas, KOIA les analyse avec des données vérifiées. Pas de comptage obsessionnel — un suivi basé sur les portions et tes objectifs protéiques.",
      },
      {
        q: "KOIA est-elle adaptée aux femmes ?",
        a: "KOIA est conçue pour tout le monde. Le coach prend en compte les spécificités morphologiques et hormonales de chaque profil, y compris l'adaptation au cycle menstruel.",
      },
      {
        q: "Combien coûtera KOIA ?",
        a: "Le pricing sera annoncé au lancement. Les membres de la bêta privée bénéficieront de conditions préférentielles.",
      },
      {
        q: "Quand KOIA sera-t-elle disponible ?",
        a: "KOIA est en développement. Rejoins la bêta pour tester en avant-première et influencer le produit.",
      },
    ],
  },

  finalCta: {
    title: {
      line1: "Prêt·e à essayer un coach",
      line2Before: "qui ne",
      accent: "MENT",
      line2After: "pas ?",
    },
    formNote: "Gratuit · Pas de spam · Accès prioritaire",
  },

  footer: {
    copyright: "© 2026 KOIA",
  },

  iPhone: {
    statusBarTime: "9:41",
    chatHeaderName: "KOIA",
    onlineStatus: "En ligne",
    inputPlaceholder: "Écris à ton coach...",
    messages: [
      {
        from: "koia",
        text: "Salut ! Je suis ton coach. Pour construire ton programme, j'ai quelques questions. C'est quoi ton objectif principal ?",
        delay: 500,
      },
      {
        from: "user",
        text: "recomp, je veux perdre du gras et raffermir surtout les fessiers",
        delay: 2000,
      },
      {
        from: "koia",
        text: "Noté. Tu t'entraînes depuis combien de temps ? Et tu as des blessures ou douleurs actuelles ?",
        delay: 3500,
      },
      {
        from: "user",
        text: "10 ans, j'ai une douleur au genou droit en ce moment",
        delay: 5000,
      },
      {
        from: "koia",
        text: "Avec ton expérience je pars sur un Full Body 3×/sem. Pour le genou : pas de squat profond, on privilégie hip thrust et leg press partiel.",
        delay: 6500,
      },
      {
        from: "koia",
        text: "J'ai aussi détecté que tu as un dos dominant — je retire les tractions pour équilibrer tes proportions. Voici ton programme ↓",
        delay: 7500,
      },
    ],
  },
} as const;

export type Content = typeof frContent;
