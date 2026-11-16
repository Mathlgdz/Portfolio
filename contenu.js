/* ==========================================================================
   CONTENU DE MON PORTFOLIO — c'est le SEUL fichier à modifier
   ==========================================================================

   RÈGLES D'OR
   1. Ne modifiez que ce qui se trouve ENTRE les guillemets "…".
   2. Gardez les guillemets "", les virgules , et les accolades { } [ ].
   3. Chaque texte existe en deux versions : fr: "…" (français) et en: "…" (anglais).
   4. N'écrivez pas de guillemets " à l'intérieur d'un texte : utilisez « » à la place.
      Les apostrophes ' et ’ fonctionnent normalement.
   5. IMAGES : déposez la photo dans le dossier "images", puis écrivez son
      chemin entre les guillemets, par exemple "images/hero.jpg".
      Si le fichier n'existe pas encore, un cadre gris affiche le chemin attendu.
   6. Après chaque modification : enregistrez, puis actualisez la page (F5).
      Si la page devient vide, il manque sûrement un guillemet ou une virgule.

   Les lignes qui commencent par // sont des notes : elles n'apparaissent pas sur le site.
   ========================================================================== */

const SITE = {

  /* ------------------------------------------------------------------------
     1. IDENTITÉ
     ------------------------------------------------------------------------ */
  nom: "MATHIEU LEGEDZA",
  titre:          { fr: "UX/UI & Product Designer à en devenir.", en: "Aspiring UX/UI & Product Designer." },
  disponibilite:  { fr: "Actuellement en alternance",             en: "Currently in a work-study program" },
  ville:          { fr: "Paris, France",                          en: "Paris, France" },
  email: "mathieu.legedza@gmail.com",

  // CV : déposez votre CV (PDF) dans le dossier "documents", puis écrivez son chemin,
  // par exemple "documents/CV-Mathieu-Legedza.pdf". Vous pouvez mettre un CV différent par langue.
  // Laissez "" pour afficher « CV en cours de modification » à la place du bouton.
  cv: { fr: "", en: "" },

  // Statistiques de visites (GoatCounter, gratuit et sans cookies) : écrivez votre code GoatCounter,
  // par exemple "mathieulegedza". Laissez "" pour désactiver. Voir LISEZ-MOI.md.
  statistiques: "math",

  // Réseaux : pour en ajouter un, copiez une ligne { label: "…", url: "…" }, (avec la virgule)
  reseaux: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mathieu-legedza/" },
    { label: "GitHub",   url: "https://github.com/Mathlgdz" },
  ],


  /* ------------------------------------------------------------------------
     2. PHOTOS
     Formats conseillés : JPG, environ 2000 px de large, moins de 500 Ko.
     ------------------------------------------------------------------------ */
  photos: {
    hero:     "",                          // photo d'accueil : laissez "" pour ne pas en mettre (ex. "images/IMG_7804.png" pour la remettre)
    portrait: "images/IMG_7804.png",    // photo de la section À propos (format vertical)

    // Section « Au-delà de l'écran » : 4 photos (vous pouvez en mettre plus)
    beyond: [
      { src: "images/beyond/IMG_8226.jpg", legende: { fr: "Pałac na Wyspie - Varsovie, Pologne", en: "Pałac na Wyspie - Warsaw, Poland" } },
      { src: "images/beyond/IMG_7182.jpg", legende: { fr: "Pico do Arieiro - Madère, Portugal",   en: "Pico do Arieiro - Madeira, Portugal" } },
      { src: "images/beyond/IMG_8298.jpg", legende: { fr: "Centre ville - Varsovie, Pologne",         en: "City centre - Warsaw, Poland" } },
      { src: "images/beyond/IMG_7123.jpg", legende: { fr: "São Vicente - Madère, Portugal",         en: "São Vicente - Madeira, Portugal" } },
    ],
  },


  /* ------------------------------------------------------------------------
     3. À PROPOS
     ------------------------------------------------------------------------ */
  apropos: {
    texte1: {
      fr: "Étudiant en 3e année de BUT MMI, je m’oriente vers le design web. Passionné de football et de voyage, j’essaie de toujours garder un œil créatif.",
      en: "Third-year BUT MMI student heading towards web design. Passionate about football and travel, I always try to keep a creative eye.",
    },
    texte2: {
      fr: "Certifié Opquast, j’attache de l’importance à la qualité et à l’accessibilité : un beau design doit aussi être simple à utiliser.",
      en: "Opquast certified, I care about quality and accessibility: good design should also be easy to use.",
    },
    formation: { fr: "BUT MMI — Université Gustave Eiffel",   en: "BUT MMI — Université Gustave Eiffel" },
    domaines:  { fr: "UI/UX · Design graphique · Web",         en: "UI/UX · Graphic design · Web" },
  },


  /* ------------------------------------------------------------------------
     4. PROJETS
     - Pour AJOUTER un projet : copiez un bloc complet, du { jusqu'au }, (virgule comprise)
       et collez-le juste en dessous. Pour en SUPPRIMER un : effacez son bloc.
     - resume  = petit texte sous l'image sur la page d'accueil
     - details = texte de la fiche qui s'ouvre au clic. Le symbole | crée un nouveau paragraphe.
     - lien    = adresse du projet en ligne (Figma, Behance, site…). Laissez "" s'il n'y en a pas.
     - image   = image principale ; galerie = autres images affichées dans la fiche
     - motion  = vidéo de motion design affichée dans la fiche. Si le fichier n'existe pas, la partie est simplement masquée.
     ------------------------------------------------------------------------ */
  projets: [

    { // ---------- PROJET 01 ----------
      titre:     { fr: "Campagne de communication",                 en: "Communication Campaign" },
      categorie: { fr: "Maquettage",               en: "Mockup design" },
      annee:     "2026",
      role:      { fr: "Designer graphique",              en: "Graphic Designer" },
      outils:    "Figma - Photoshop - InDesign ",
      resume:    { fr: "À l'occasion de la JPO 2026, le département MMI communique sur lui-même, pour promouvoir la formation et attirer de nouveaux étudiants.", en: "For the 2026 Open Day, the MMI department promotes itself to showcase the programme and attract new students." },
      details: {
        fr: "Le but du projet était de créer une campagne de communication pour promouvoir la formation MMI de Champs-sur-Marne à l’occasion de la Journée Portes Ouvertes 2026. L’objectif était d’attirer de futurs bacheliers en donnant une image moderne et attractive de la formation | Pour cela, on a commencé par concevoir une nouvelle identité visuelle avec la création d’un logo pour MMI Champs-sur-Marne. Ensuite, on a décliné cette identité sur différents supports de communication, notamment une affiche promotionnelle et plusieurs produits dérivés (goodies).|Enfin, on a regroupé toutes nos créations dans un dossier de présentation contenant un moodboard, des mock-ups, les déclinaisons des supports de communication ainsi qu’une mini-charte graphique.",
        en: "The goal was to create a communication campaign promoting the MMI programme in Champs-sur-Marne for the 2026 Open Day. The aim was to attract future high-school graduates by giving the programme a modern, appealing image.|To do this, we started by designing a new visual identity, including a logo for MMI Champs-sur-Marne. We then rolled this identity out across several communication materials, including a promotional poster and a range of branded goodies.|Finally, we gathered all our work into a presentation file containing a moodboard, mock-ups, the communication materials and a mini brand guide.",
      },
      lien:    "",
      image:   "images/projets/projet-01/001.jpg",
      galerie: [ "images/projets/projet-01/0012.jpg", "images/projets/projet-01/0013.jpg" ],
      motion:       "Video/projet-01.mp4",   // motion design (dossier « videos ») ou lien YouTube / Vimeo. "" = pas de motion
      motion_ia:    true,                     // true = mention « Réalisé par IA »
      motion_outil: "",                       // facultatif : outil IA utilisé, ex. "Runway", "Kling", "Sora"
    },

    { // ---------- PROJET 02 ----------
      titre:     { fr: "Éveil de la machine",                 en: "Awakening of the Machine" },
      categorie: { fr: "Maquettage",               en: "Mockup design" },
      annee:     "2026",
      role:      { fr: "Graphiste - Designer Web",              en: "Graphic Designer - Web Designer" },
      outils:    "Figma - Photoshop - Illustrator",
      resume:    { fr: "Réalisation de l'identité visuelle d'une exposition immersive (fictive)", en: "Visual identity for an immersive (fictional) exhibition." },
      details: {
        fr: "Dans le cadre d’un projet universitaire, on devait concevoir, en groupe, une agence chargée de créer une exposition immersive. Plusieurs livrables étaient attendus : un site web pour l’agence et un autre pour l’exposition, ainsi que différents supports de communication visuelle (affiches, flyers, publications pour les réseaux sociaux et teaser). On devait également créer l’identité visuelle de l’agence, notamment son logo, puis le décliner en animation.|Notre groupe étant composé de 7 membres (5 créatifs et 2 développeurs), on a réparti les tâches en fonction des compétences de chacun. De mon côté, je me suis chargé de la conception du logo de l’exposition, de l’affiche ainsi que des visuels destinés aux réseaux sociaux. J’ai également participé à la réalisation des maquettes du site de l’exposition sur Figma.|Ce travail nous a permis de concevoir une identité visuelle cohérente et de développer plusieurs supports pour promouvoir l’exposition immersive. Nous avons également réalisé les maquettes du site web afin de présenter le projet au public.",
        en: "As part of a university project, we had to set up, as a group, an agency tasked with creating an immersive exhibition. Several deliverables were expected: a website for the agency and another for the exhibition, as well as various visual communication materials (posters, flyers, social media posts and a teaser). We also had to create the agency’s visual identity, including its logo, and then animate it.|Our group had 7 members (5 creatives and 2 developers), so we split the tasks according to everyone’s skills. I designed the exhibition logo, the poster and the social media visuals. I also helped create the exhibition website mockups in Figma.|This work allowed us to build a consistent visual identity and produce several materials to promote the immersive exhibition. We also designed the website mockups to present the project to the public.",
      },
      lien:    "",
      image:   "images/projets/projet-02/002.jpg",
      galerie: [ "images/projets/projet-02/0022.jpg", "images/projets/projet-02/0023.jpg" ],
      motion:       "Video/projet-02.mp4",   // motion design (dossier « videos ») ou lien YouTube / Vimeo. "" = pas de motion
      motion_ia:    true,                     // true = mention « Réalisé par IA »
      motion_outil: "",                       // facultatif : outil IA utilisé, ex. "Runway", "Kling", "Sora"
    },

    { // ---------- PROJET 03 ----------
      titre:     { fr: "Wayly",                 en: "Wayly" },
      categorie: { fr: "Maquettage",               en: "Mockup design" },
      annee:     "2026",
      role:      { fr: "Designer web",              en: "Web Designer" },
      outils:    "Figma",
      resume:    { fr: "Wayly est une plateforme fictive qui centralise l’organisation d’un road trip : itinéraire, hébergements, budget et partage entre amis.", en: "Wayly is a fictional platform that brings all of a road trip’s planning together: itinerary, accommodation, budget and sharing with friends." },
      details: {
        fr: "Wayly est un projet fictif de conception UX/UI réalisé individuellement. Mon objectif était de m'entraîner à la création de maquettes et de développer mes compétences en design d'interface.|J'ai commencé par demander à une IA une idée de site web fictif. Pour concevoir Wayly, je me suis inspiré de plateformes de réservation comme Booking et Hotels.com. J'ai ensuite réalisé les wireframes avant de passer à la création des maquettes. J'ai également travaillé sur le Design System, une étape qui m'a demandé davantage de temps et de réflexion.| J'ai réussi à concevoir une interface complète pour Wayly. Malgré quelques difficultés, notamment dans la création du Design System, je suis satisfait du résultat final et fier du travail réalisé.",
         
        en: "Wayly is a fictional UX/UI design project that I completed independently. My goal was to practise creating mockups and further develop my interface design skills.|I started by asking an AI to suggest an idea for a fictional website. To design Wayly, I took inspiration from booking platforms such as Booking.com and Hotels.com. I then created the wireframes before moving on to designing the final mockups. I also worked on the Design System, which required more time and thought as I am still developing my skills in this area.|I successfully designed a complete interface for Wayly. Despite facing a few challenges, particularly when creating the Design System, I am very satisfied with the final result and proud of the work I have accomplished.",
      },
      lien:    "",
      image:   "images/projets/projet-03/003.jpg",
      galerie: [ "images/projets/projet-03/0032.jpg", "images/projets/projet-03/0033.jpg" ],
      motion:       "Video/Wayly_motion_v7.mp4",   // motion design (dossier « videos ») ou lien YouTube / Vimeo. "" = pas de motion
      motion_ia:    true,                     // true = mention « Réalisé par IA »
      motion_outil: "Claude",                       // facultatif : outil IA utilisé, ex. "Runway", "Kling", "Sora"
    },

    { // ---------- PROJET 04 ----------
      titre:     { fr: "Health Nutri Way",                 en: "Health Nutri Way" },
      categorie: { fr: "Dev web",               en: "Web development" },
      annee:     "2025",
      role:      { fr: "Développeur front - Designer web",              en: "Front-end Developer - Web Designer" },
      outils:    "Figma - HTML - CSS - PHP - JS",
      resume:    { fr: "Réalisation d'un site web collaboratif sur le thème de la cuisine.", en: "A collaborative cooking-themed website." },
      details: {
        fr: "En groupe de 4, nous devions concevoir un concept original autour du thème « À table », en combinant UX/UI design et développement web.|On a réalisé des recherches UX (benchmark, interviews, persona), puis imaginé Nutriway, un site proposant des programmes de repas personnalisés selon les objectifs de santé de l’utilisateur. On a ensuite créé les wireframes, prototypes et maquettes finales sur Figma, en versions mobile et desktop.|Pour terminer, nous avons développé les différentes parties du site en nous répartissant en deux équipes : le développement front-end et le développement back-end. Nous sommes fiers du résultat obtenu, qui est très fidèle aux maquettes que nous avions conçues !",
        en: "In a group of 4, we had to come up with an original concept around the theme « À table » (Dinner’s ready), combining UX/UI design and web development.|We carried out UX research (benchmark, interviews, persona), then came up with Nutriway, a website offering personalised meal plans based on the user’s health goals. We then created the wireframes, prototypes and final mockups in Figma, in both mobile and desktop versions.|Finally, we built the different parts of the site by splitting into two teams: front-end and back-end development. We’re proud of the result, which is very faithful to the mockups we designed!",
      },
      lien:    "",
      image:   "images/projets/projet-04/004.jpg",
      galerie: [ "images/projets/projet-04/0042.jpg", "images/projets/projet-04/0043.jpg" ],
      motion:       "Video/projet-04.mp4",   // motion design (dossier « videos ») ou lien YouTube / Vimeo. "" = pas de motion
      motion_ia:    true,                     // true = mention « Réalisé par IA »
      motion_outil: "",                       // facultatif : outil IA utilisé, ex. "Runway", "Kling", "Sora"
    },

  ],


  /* ------------------------------------------------------------------------
     5. COMPÉTENCES
     ------------------------------------------------------------------------ */
  competences: [
    { titre: { fr: "Design UI / UX", en: "UI / UX Design" },
      texte: { fr: "Conception d’interfaces claires et pensées pour l’utilisateur, du wireframe à la maquette.", en: "Clear, user-centred interfaces, from wireframe to high-fidelity mockup." },
      outils: "Figma" },

    { titre: { fr: "Design graphique", en: "Graphic Design" },
      texte: { fr: "Identités visuelles, supports de communication et visuels pour le web et les réseaux.", en: "Visual identities, communication materials and visuals for web and social media." },
      outils: "Illustrator · Photoshop · InDesign · Premiere Pro · Canva · Adobe Express" },

    { titre: { fr: "Développement web", en: "Web Development" },
      texte: { fr: "Intégration de pages web et gestion de contenus via CMS.", en: "Building web pages and managing content with a CMS." },
      outils: "HTML · CSS · CMS (WordPress)" },

    { titre: { fr: "Qualité web", en: "Web Quality" },
      texte: { fr: "Bonnes pratiques qualité et accessibilité des sites web.", en: "Web quality and accessibility best practices." },
      outils: { fr: "Certifié Opquast", en: "Opquast certified" } },
  ],


  /* ------------------------------------------------------------------------
     6. PARCOURS (du plus récent au plus ancien)
     ------------------------------------------------------------------------ */
  parcours: [
    { periode: "2026 — 2027",
      lieu:  { fr: "Ministère de l’Agriculture - Paris, France", en: "French Ministry of Agriculture - Paris, France" },
      poste: { fr: "Alternance — Chargé de communication web", en: "Work-study — Web Communications Officer" } },

    { periode: "2025",
      lieu:  { fr: "JD Sports - Paris, France", en: "JD Sports - Paris, France" },
      poste: { fr: "Stage — Graphiste", en: "Internship — Graphic Designer" } },

    { periode: "2024 — 2027",
      lieu:  { fr: "Université Gustave Eiffel - Champs-sur-Marne, France", en: "Université Gustave Eiffel - Champs-sur-Marne, France" },
      poste: { fr: "BUT MMI — Métiers du Multimédia et de l’Internet", en: "BUT MMI — Multimedia & Internet Bachelor" } },

    { periode: "2024",
      lieu:  { fr: "Lycée Notre-Dame de Sion - Évry-Courcouronnes, France", en: "Lycée Notre-Dame de Sion - Évry-Courcouronnes, France" },
      poste: { fr: "Bac STI2D — Énergies et Environnement", en: "Baccalauréat STI2D — Energy & Environment" } },
  ],
};


/* ==========================================================================
   7. TEXTES DU SITE (titres de sections, boutons, menus)
   À modifier seulement si vous le souhaitez.
   Dans les grands titres : | = retour à la ligne, * en début de ligne = ligne dorée.
   ========================================================================== */
const TEXTES = {
  fr: {
    nav_about: "À propos", nav_work: "Projets", nav_exp: "Expertise", nav_contact: "Contact",
    menu: "Menu", close: "Fermer", auto: "Auto", scroll: "Défiler",
    about_h: "Plus qu’un|simple|designer.",   about_n: "01 — À propos",
    f_city: "Ville", f_edu: "Formation", f_fields: "Domaines",
    work_h: "Projets|choisis.",                work_n: "02 — Projets",
    exp_h: "Ce que|j’apporte.",               exp_n: "03 — Expertise",
    jour_h: "Mon parcours|jusqu’ici.",         jour_n: "04 — Parcours",
    bey_h: "Au-delà|de l’écran.",              bey_n: "05 — Hors écran",
    contact_n: "06 — Contact", contact_h: "Un projet|en tête ?|*Donnons-lui|*vie.", send: "Écrire un message",
    cv: "Télécharger mon CV", cv_wip: "CV en cours de modification",
    top: "Retour en haut", rights: "Tous droits réservés", img: "Image du projet",
    m_cat: "Catégorie", m_year: "Année", m_role: "Rôle", m_tools: "Outils",
    m_motion: "Motion design", m_ai: "Réalisé par IA", m_play: "Lire le motion", m_tool: "Outil",
    m_ai_note: "Ce motion design a été réalisé à l’aide de l’intelligence artificielle. Toutefois, les maquettes et les sites web présentés dans la vidéo ont été conçus et réalisés par mes soins lorsqu’il s’agit de projets individuels, ou par notre équipe dans le cadre de projets de groupe.",
    m_about: "Le projet", m_visit: "Voir le projet", m_next: "Projet suivant", m_close: "Fermer",
  },
  en: {
    nav_about: "About", nav_work: "Work", nav_exp: "Expertise", nav_contact: "Contact",
    menu: "Menu", close: "Close", auto: "Auto", scroll: "Scroll",
    about_h: "More than|just a|designer.",     about_n: "01 — About",
    f_city: "City", f_edu: "Education", f_fields: "Fields",
    work_h: "Selected|works.",                 work_n: "02 — Projects",
    exp_h: "What I bring|to the table.",       exp_n: "03 — Expertise",
    jour_h: "The journey|so far.",             jour_n: "04 — Journey",
    bey_h: "Beyond|the screen.",               bey_n: "05 — Off screen",
    contact_n: "06 — Contact", contact_h: "Have a project|in mind?|*Let’s make|*it happen.", send: "Send a message",
    cv: "Download my resume", cv_wip: "Resume being updated",
    top: "Back to top", rights: "All rights reserved", img: "Project image",
    m_cat: "Category", m_year: "Year", m_role: "Role", m_tools: "Tools",
    m_motion: "Motion design", m_ai: "AI-generated", m_play: "Play the motion", m_tool: "Tool",
    m_ai_note: "This motion design video was created using artificial intelligence. However, the mockups and websites featured in the video were designed and developed by me for individual projects, or by our team for group projects.",
    m_about: "About the project", m_visit: "View the project", m_next: "Next project", m_close: "Close",
  },
};
