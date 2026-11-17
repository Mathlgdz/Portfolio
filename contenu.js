/* ==========================================================================
   CONTENU DE MON PORTFOLIO — c'est le SEUL fichier à modifier
   ==========================================================================

   RÈGLES D'OR
   1. Ne modifiez que ce qui se trouve ENTRE les guillemets "…".
   2. Gardez les guillemets "", les virgules , et les accolades { } [ ].
   3. Chaque texte existe en trois versions : fr: "…" (français), en: "…" (anglais) et pl: "…" (polonais).
      Si une version pl manque, le site affiche l'anglais à la place.
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
  titre:          { fr: "UX/UI & Product Designer à en devenir.", en: "Aspiring UX/UI & Product Designer.", pl: "Przyszły UX/UI & Product Designer." },
  disponibilite:  { fr: "Actuellement en alternance",             en: "Currently in a work-study program", pl: "Obecnie na studiach dualnych" },
  ville:          { fr: "Paris, France",                          en: "Paris, France", pl: "Paryż, Francja" },
  email: "mathieu.legedza@gmail.com",

  // CV : déposez votre CV (PDF) dans le dossier "documents", puis écrivez son chemin,
  // par exemple "documents/CV-Mathieu-Legedza.pdf". Vous pouvez mettre un CV différent par langue.
  // Laissez "" pour afficher « CV en cours de modification » à la place du bouton.
  cv: { fr: "", en: "", pl: "" },

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
      { src: "images/beyond/IMG_8226.jpg", legende: { fr: "Pałac na Wyspie - Varsovie, Pologne", en: "Pałac na Wyspie - Warsaw, Poland", pl: "Pałac na Wyspie - Warszawa, Polska" } },
      { src: "images/beyond/IMG_7182.jpg", legende: { fr: "Pico do Arieiro - Madère, Portugal",   en: "Pico do Arieiro - Madeira, Portugal", pl: "Pico do Arieiro - Madera, Portugalia" } },
      { src: "images/beyond/IMG_8298.jpg", legende: { fr: "Centre ville - Varsovie, Pologne",         en: "City centre - Warsaw, Poland", pl: "Centrum - Warszawa, Polska" } },
      { src: "images/beyond/IMG_7123.jpg", legende: { fr: "São Vicente - Madère, Portugal",         en: "São Vicente - Madeira, Portugal", pl: "São Vicente - Madera, Portugalia" } },
    ],
  },


  /* ------------------------------------------------------------------------
     3. À PROPOS
     ------------------------------------------------------------------------ */
  apropos: {
    texte1: {
      fr: "Étudiant en 3e année de BUT MMI, je m’oriente vers le design web. Passionné de football et de voyage, j’essaie de toujours garder un œil créatif.",
      en: "Third-year BUT MMI student heading towards web design. Passionate about football and travel, I always try to keep a creative eye.", pl: "Jestem studentem trzeciego roku BUT MMI i rozwijam się w kierunku projektowania stron internetowych. Pasjonuję się piłką nożną i podróżami, a na wszystko staram się patrzeć kreatywnym okiem.",
    },
    texte2: {
      fr: "Certifié Opquast, j’attache de l’importance à la qualité et à l’accessibilité : un beau design doit aussi être simple à utiliser.",
      en: "Opquast certified, I care about quality and accessibility: good design should also be easy to use.", pl: "Mam certyfikat Opquast, dlatego przywiązuję wagę do jakości i dostępności: dobry design powinien być też prosty w użyciu.",
    },
    formation: { fr: "BUT MMI — Université Gustave Eiffel",   en: "BUT MMI — Université Gustave Eiffel", pl: "BUT MMI — Université Gustave Eiffel" },
    domaines:  { fr: "UI/UX · Design graphique · Web",         en: "UI/UX · Graphic design · Web", pl: "UI/UX · Projektowanie graficzne · Web" },
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
      titre:     { fr: "Campagne de communication",                 en: "Communication Campaign", pl: "Kampania komunikacyjna" },
      categorie: { fr: "Maquettage",               en: "Mockup design", pl: "Projektowanie makiet" },
      annee:     "2026",
      role:      { fr: "Designer graphique",              en: "Graphic Designer", pl: "Grafik" },
      outils:    "Figma - Photoshop - InDesign ",
      resume:    { fr: "À l'occasion de la JPO 2026, le département MMI communique sur lui-même, pour promouvoir la formation et attirer de nouveaux étudiants.", en: "For the 2026 Open Day, the MMI department promotes itself to showcase the programme and attract new students.", pl: "Z okazji Dni Otwartych 2026 wydział MMI promuje sam siebie, aby zaprezentować kierunek i przyciągnąć nowych studentów." },
      details: {
        fr: "Le but du projet était de créer une campagne de communication pour promouvoir la formation MMI de Champs-sur-Marne à l’occasion de la Journée Portes Ouvertes 2026. L’objectif était d’attirer de futurs bacheliers en donnant une image moderne et attractive de la formation | Pour cela, on a commencé par concevoir une nouvelle identité visuelle avec la création d’un logo pour MMI Champs-sur-Marne. Ensuite, on a décliné cette identité sur différents supports de communication, notamment une affiche promotionnelle et plusieurs produits dérivés (goodies).|Enfin, on a regroupé toutes nos créations dans un dossier de présentation contenant un moodboard, des mock-ups, les déclinaisons des supports de communication ainsi qu’une mini-charte graphique.",
        en: "The goal was to create a communication campaign promoting the MMI programme in Champs-sur-Marne for the 2026 Open Day. The aim was to attract future high-school graduates by giving the programme a modern, appealing image.|To do this, we started by designing a new visual identity, including a logo for MMI Champs-sur-Marne. We then rolled this identity out across several communication materials, including a promotional poster and a range of branded goodies.|Finally, we gathered all our work into a presentation file containing a moodboard, mock-ups, the communication materials and a mini brand guide.", pl: "Celem projektu było stworzenie kampanii komunikacyjnej promującej kierunek MMI w Champs-sur-Marne z okazji Dni Otwartych 2026. Chodziło o przyciągnięcie przyszłych maturzystów dzięki nowoczesnemu i atrakcyjnemu wizerunkowi kierunku.|W tym celu zaczęliśmy od zaprojektowania nowej identyfikacji wizualnej, w tym logo MMI Champs-sur-Marne. Następnie przenieśliśmy ją na różne materiały komunikacyjne, m.in. plakat promocyjny i gadżety.|Na koniec zebraliśmy wszystkie projekty w prezentacji zawierającej moodboard, mock-upy, warianty materiałów komunikacyjnych oraz mini księgę znaku.",
      },
      lien:    "",
      image:   "images/projets/projet-01/001.jpg",
      galerie: [ "images/projets/projet-01/0012.jpg", "images/projets/projet-01/0013.jpg" ],
      motion:       "Video/projet-01.mp4",   // motion design (dossier « videos ») ou lien YouTube / Vimeo. "" = pas de motion
      motion_ia:    true,                     // true = mention « Réalisé par IA »
      motion_outil: "",                       // facultatif : outil IA utilisé, ex. "Runway", "Kling", "Sora"
    },

    { // ---------- PROJET 02 ----------
      titre:     { fr: "Éveil de la machine",                 en: "Awakening of the Machine", pl: "Przebudzenie maszyny" },
      categorie: { fr: "Maquettage",               en: "Mockup design", pl: "Projektowanie makiet" },
      annee:     "2026",
      role:      { fr: "Graphiste - Designer Web",              en: "Graphic Designer - Web Designer", pl: "Grafik - Web designer" },
      outils:    "Figma - Photoshop - Illustrator",
      resume:    { fr: "Réalisation de l'identité visuelle d'une exposition immersive (fictive)", en: "Visual identity for an immersive (fictional) exhibition.", pl: "Identyfikacja wizualna immersyjnej (fikcyjnej) wystawy." },
      details: {
        fr: "Dans le cadre d’un projet universitaire, on devait concevoir, en groupe, une agence chargée de créer une exposition immersive. Plusieurs livrables étaient attendus : un site web pour l’agence et un autre pour l’exposition, ainsi que différents supports de communication visuelle (affiches, flyers, publications pour les réseaux sociaux et teaser). On devait également créer l’identité visuelle de l’agence, notamment son logo, puis le décliner en animation.|Notre groupe étant composé de 7 membres (5 créatifs et 2 développeurs), on a réparti les tâches en fonction des compétences de chacun. De mon côté, je me suis chargé de la conception du logo de l’exposition, de l’affiche ainsi que des visuels destinés aux réseaux sociaux. J’ai également participé à la réalisation des maquettes du site de l’exposition sur Figma.|Ce travail nous a permis de concevoir une identité visuelle cohérente et de développer plusieurs supports pour promouvoir l’exposition immersive. Nous avons également réalisé les maquettes du site web afin de présenter le projet au public.",
        en: "As part of a university project, we had to set up, as a group, an agency tasked with creating an immersive exhibition. Several deliverables were expected: a website for the agency and another for the exhibition, as well as various visual communication materials (posters, flyers, social media posts and a teaser). We also had to create the agency’s visual identity, including its logo, and then animate it.|Our group had 7 members (5 creatives and 2 developers), so we split the tasks according to everyone’s skills. I designed the exhibition logo, the poster and the social media visuals. I also helped create the exhibition website mockups in Figma.|This work allowed us to build a consistent visual identity and produce several materials to promote the immersive exhibition. We also designed the website mockups to present the project to the public.", pl: "W ramach projektu uczelnianego mieliśmy w grupie stworzyć agencję odpowiedzialną za przygotowanie immersyjnej wystawy. Oczekiwano kilku rezultatów: strony internetowej agencji i drugiej strony wystawy, a także różnych materiałów komunikacji wizualnej (plakatów, ulotek, postów w mediach społecznościowych i teasera). Musieliśmy też stworzyć identyfikację wizualną agencji, w tym jej logo, a następnie je zanimować.|Nasza grupa liczyła 7 osób (5 osób kreatywnych i 2 programistów), więc podzieliliśmy zadania według umiejętności każdego. Ja zaprojektowałem logo wystawy, plakat oraz grafiki do mediów społecznościowych. Brałem też udział w tworzeniu makiet strony wystawy w Figmie.|Ta praca pozwoliła nam zbudować spójną identyfikację wizualną i przygotować kilka materiałów promujących immersyjną wystawę. Zaprojektowaliśmy również makiety strony internetowej, aby zaprezentować projekt publiczności.",
      },
      lien:    "",
      image:   "images/projets/projet-02/002.jpg",
      galerie: [ "images/projets/projet-02/0022.jpg", "images/projets/projet-02/0023.jpg" ],
      motion:       "Video/projet-02.mp4",   // motion design (dossier « videos ») ou lien YouTube / Vimeo. "" = pas de motion
      motion_ia:    true,                     // true = mention « Réalisé par IA »
      motion_outil: "",                       // facultatif : outil IA utilisé, ex. "Runway", "Kling", "Sora"
    },

    { // ---------- PROJET 03 ----------
      titre:     { fr: "Wayly",                 en: "Wayly", pl: "Wayly" },
      categorie: { fr: "Maquettage",               en: "Mockup design", pl: "Projektowanie makiet" },
      annee:     "2026",
      role:      { fr: "Designer web",              en: "Web Designer", pl: "Web designer" },
      outils:    "Figma",
      resume:    { fr: "Wayly est une plateforme fictive qui centralise l’organisation d’un road trip : itinéraire, hébergements, budget et partage entre amis.", en: "Wayly is a fictional platform that brings all of a road trip’s planning together: itinerary, accommodation, budget and sharing with friends.", pl: "Wayly to fikcyjna platforma, która zbiera w jednym miejscu całą organizację road tripu: trasę, noclegi, budżet i dzielenie się z przyjaciółmi." },
      details: {
        fr: "Wayly est un projet fictif de conception UX/UI réalisé individuellement. Mon objectif était de m'entraîner à la création de maquettes et de développer mes compétences en design d'interface.|J'ai commencé par demander à une IA une idée de site web fictif. Pour concevoir Wayly, je me suis inspiré de plateformes de réservation comme Booking et Hotels.com. J'ai ensuite réalisé les wireframes avant de passer à la création des maquettes. J'ai également travaillé sur le Design System, une étape qui m'a demandé davantage de temps et de réflexion.| J'ai réussi à concevoir une interface complète pour Wayly. Malgré quelques difficultés, notamment dans la création du Design System, je suis satisfait du résultat final et fier du travail réalisé.",
         
        en: "Wayly is a fictional UX/UI design project that I completed independently. My goal was to practise creating mockups and further develop my interface design skills.|I started by asking an AI to suggest an idea for a fictional website. To design Wayly, I took inspiration from booking platforms such as Booking.com and Hotels.com. I then created the wireframes before moving on to designing the final mockups. I also worked on the Design System, which required more time and thought as I am still developing my skills in this area.|I successfully designed a complete interface for Wayly. Despite facing a few challenges, particularly when creating the Design System, I am very satisfied with the final result and proud of the work I have accomplished.", pl: "Wayly to fikcyjny projekt UX/UI, który zrealizowałem samodzielnie. Moim celem było przećwiczenie tworzenia makiet i dalsze rozwijanie umiejętności projektowania interfejsów.|Zacząłem od poproszenia AI o pomysł na fikcyjną stronę internetową. Projektując Wayly, inspirowałem się platformami rezerwacyjnymi, takimi jak Booking.com i Hotels.com. Następnie przygotowałem wireframe’y, a potem przeszedłem do tworzenia finalnych makiet. Pracowałem też nad Design Systemem – ten etap wymagał więcej czasu i namysłu, ponieważ wciąż rozwijam swoje umiejętności w tym obszarze.|Udało mi się zaprojektować kompletny interfejs dla Wayly. Mimo kilku trudności, zwłaszcza przy tworzeniu Design Systemu, jestem bardzo zadowolony z efektu końcowego i dumny z wykonanej pracy.",
      },
      lien:    "",
      image:   "images/projets/projet-03/003.jpg",
      galerie: [ "images/projets/projet-03/0032.jpg", "images/projets/projet-03/0033.jpg" ],
      motion:       "Video/Wayly_motion_v7.mp4",   // motion design (dossier « videos ») ou lien YouTube / Vimeo. "" = pas de motion
      motion_ia:    true,                     // true = mention « Réalisé par IA »
      motion_outil: "Claude",                       // facultatif : outil IA utilisé, ex. "Runway", "Kling", "Sora"
    },

    { // ---------- PROJET 04 ----------
      titre:     { fr: "Health Nutri Way",                 en: "Health Nutri Way", pl: "Health Nutri Way" },
      categorie: { fr: "Dev web",               en: "Web development", pl: "Tworzenie stron www" },
      annee:     "2025",
      role:      { fr: "Développeur front - Designer web",              en: "Front-end Developer - Web Designer", pl: "Front-end developer - Web designer" },
      outils:    "Figma - HTML - CSS - PHP - JS",
      resume:    { fr: "Réalisation d'un site web collaboratif sur le thème de la cuisine.", en: "A collaborative cooking-themed website.", pl: "Wspólnie stworzona strona internetowa o tematyce kulinarnej." },
      details: {
        fr: "En groupe de 4, nous devions concevoir un concept original autour du thème « À table », en combinant UX/UI design et développement web.|On a réalisé des recherches UX (benchmark, interviews, persona), puis imaginé Nutriway, un site proposant des programmes de repas personnalisés selon les objectifs de santé de l’utilisateur. On a ensuite créé les wireframes, prototypes et maquettes finales sur Figma, en versions mobile et desktop.|Pour terminer, nous avons développé les différentes parties du site en nous répartissant en deux équipes : le développement front-end et le développement back-end. Nous sommes fiers du résultat obtenu, qui est très fidèle aux maquettes que nous avions conçues !",
        en: "In a group of 4, we had to come up with an original concept around the theme « À table » (Dinner’s ready), combining UX/UI design and web development.|We carried out UX research (benchmark, interviews, persona), then came up with Nutriway, a website offering personalised meal plans based on the user’s health goals. We then created the wireframes, prototypes and final mockups in Figma, in both mobile and desktop versions.|Finally, we built the different parts of the site by splitting into two teams: front-end and back-end development. We’re proud of the result, which is very faithful to the mockups we designed!", pl: "W 4-osobowej grupie mieliśmy wymyślić oryginalny koncept na temat « À table » („Do stołu!”), łącząc projektowanie UX/UI z tworzeniem stron internetowych.|Przeprowadziliśmy badania UX (benchmark, wywiady, persona), a następnie wymyśliliśmy Nutriway – stronę oferującą spersonalizowane plany posiłków dopasowane do celów zdrowotnych użytkownika. Potem stworzyliśmy wireframe’y, prototypy i finalne makiety w Figmie, w wersji mobilnej i desktopowej.|Na koniec zbudowaliśmy poszczególne części strony, dzieląc się na dwa zespoły: front-end i back-end. Jesteśmy dumni z efektu, który bardzo wiernie odwzorowuje zaprojektowane przez nas makiety!",
      },
      lien:    "",
      image:   "images/projets/projet-04/004.jpg",
      galerie: [ "images/projets/projet-04/0042.jpg", "images/projets/projet-04/0043.jpg" ],
      motion:       "Video/HealthNutriWay_motion_v2.mp4",   // motion design (dossier « videos ») ou lien YouTube / Vimeo. "" = pas de motion
      motion_ia:    true,                     // true = mention « Réalisé par IA »
      motion_outil: "Claude",                       // facultatif : outil IA utilisé, ex. "Runway", "Kling", "Sora"
    },

    { // ---------- PROJET 05 ----------
      titre:     { fr: "Mercato Viz",                 en: "Mercato Viz", pl: "Mercato Viz" },
      categorie: { fr: "Dev web",               en: "Web development", pl: "Tworzenie stron www" },
      annee:     "2024",
      role:      { fr: "Développeur web - Designer web",              en: "Web Developer - Web Designer", pl: "Web developer - Web designer" },
      outils:    "Figma - HTML - CSS - JS",
      resume:    { fr: "Création d'un site web de datavisualisation sur les transferts footballistiques en Europe.", en: "A data-visualisation website about football transfers in Europe.", pl: "Strona internetowa z wizualizacją danych o transferach piłkarskich w Europie." },
      details: {
        fr: "Mercato Viz est un projet réalisé en groupe de trois, au début de notre deuxième année de BUT MMI. L’objectif était de concevoir et développer un site web de data visualisation autour d’un sujet de notre choix. Nous avons choisi de nous intéresser aux transferts de football européen. À cette période, nous n’avions pas encore abordé toutes les notions de responsive design et d’accessibilité : le projet a donc été réalisé uniquement en version desktop.|On a commencé par effectuer des recherches graphiques et créer un moodboard pour définir l’univers visuel du site. On est ensuite passés à la conception des maquettes sur Figma, avant de commencer le développement une fois celles-ci finalisées. Les tâches ont été réparties entre les trois membres du groupe afin que chacun puisse avancer sur ses missions.|Nous avons réussi à concevoir un site de data visualisation qui nous a beaucoup plu. Avec les compétences que nous avons acquises depuis, je pense cependant qu’il serait intéressant de faire évoluer le projet, notamment en proposant une version mobile responsive.",
        en: "Mercato Viz is a group project carried out by three of us at the start of our second year of the BUT MMI. The goal was to design and develop a data-visualisation website on a topic of our choice, and we chose to focus on European football transfers. At that point, we had not yet covered all the principles of responsive design and accessibility, so the project was built for desktop only.|We started with graphic research and a moodboard to define the site’s visual universe. We then designed the mockups in Figma, and began development once they were finalised. The tasks were split between the three members of the group so that everyone could move forward on their own part.|We managed to create a data-visualisation website that we really liked. With the skills we have gained since then, I think it would be worthwhile to take the project further, in particular by offering a responsive mobile version.",
        pl: "Mercato Viz to projekt zrealizowany w trzyosobowej grupie na początku drugiego roku BUT MMI. Celem było zaprojektowanie i stworzenie strony internetowej z wizualizacją danych na wybrany przez nas temat – zdecydowaliśmy się na transfery w europejskiej piłce nożnej. Na tamtym etapie nie znaliśmy jeszcze wszystkich zasad responsywnego projektowania i dostępności, dlatego projekt powstał wyłącznie w wersji desktopowej.|Zaczęliśmy od researchu graficznego i moodboardu, aby określić klimat wizualny strony. Następnie zaprojektowaliśmy makiety w Figmie, a po ich ukończeniu przeszliśmy do kodowania. Zadania podzieliliśmy między trzech członków grupy, tak aby każdy mógł pracować nad swoją częścią.|Udało nam się stworzyć stronę z wizualizacją danych, z której jesteśmy bardzo zadowoleni. Z umiejętnościami, które zdobyłem od tamtej pory, uważam jednak, że warto byłoby rozwinąć projekt, przede wszystkim o responsywną wersję mobilną.",
      },
      lien:    "https://idrisouus.github.io/Mercato_Viz/",
      image:   "images/projets/projet-05/005.jpg",
      galerie: [ "images/projets/projet-05/0052.jpg", "images/projets/projet-05/0053.jpg" ],
      motion:       "",     // motion design : "Video/nom-du-fichier.mp4" ou lien YouTube / Vimeo. "" = pas de motion
      motion_ia:    true,
      motion_outil: "",
    },

  ],


  /* ------------------------------------------------------------------------
     5. COMPÉTENCES
     ------------------------------------------------------------------------ */
  competences: [
    { titre: { fr: "Design UI / UX", en: "UI / UX Design", pl: "Projektowanie UI / UX" },
      texte: { fr: "Conception d’interfaces claires et pensées pour l’utilisateur, du wireframe à la maquette.", en: "Clear, user-centred interfaces, from wireframe to high-fidelity mockup.", pl: "Przejrzyste interfejsy projektowane z myślą o użytkowniku – od wireframe’u po dopracowaną makietę." },
      outils: "Figma" },

    { titre: { fr: "Design graphique", en: "Graphic Design", pl: "Projektowanie graficzne" },
      texte: { fr: "Identités visuelles, supports de communication et visuels pour le web et les réseaux.", en: "Visual identities, communication materials and visuals for web and social media.", pl: "Identyfikacje wizualne, materiały komunikacyjne i grafiki do internetu oraz mediów społecznościowych." },
      outils: "Illustrator · Photoshop · InDesign · Premiere Pro · Canva · Adobe Express" },

    { titre: { fr: "Développement web", en: "Web Development", pl: "Tworzenie stron www" },
      texte: { fr: "Intégration de pages web et gestion de contenus via CMS.", en: "Building web pages and managing content with a CMS.", pl: "Kodowanie stron internetowych i zarządzanie treścią w systemie CMS." },
      outils: "HTML · CSS · CMS (WordPress)" },

    { titre: { fr: "Qualité web", en: "Web Quality", pl: "Jakość stron www" },
      texte: { fr: "Bonnes pratiques qualité et accessibilité des sites web.", en: "Web quality and accessibility best practices.", pl: "Dobre praktyki w zakresie jakości i dostępności stron internetowych." },
      outils: { fr: "Certifié Opquast", en: "Opquast certified", pl: "Certyfikat Opquast" } },
  ],


  /* ------------------------------------------------------------------------
     6. PARCOURS (du plus récent au plus ancien)
     ------------------------------------------------------------------------ */
  parcours: [
    { periode: "2026 — 2027",
      lieu:  { fr: "Ministère de l’Agriculture - Paris, France", en: "French Ministry of Agriculture - Paris, France", pl: "Ministerstwo Rolnictwa Francji - Paryż, Francja" },
      poste: { fr: "Alternance — Chargé de communication web", en: "Work-study — Web Communications Officer", pl: "Studia dualne — Specjalista ds. komunikacji internetowej" } },

    { periode: "2025",
      lieu:  { fr: "JD Sports - Paris, France", en: "JD Sports - Paris, France", pl: "JD Sports - Paryż, Francja" },
      poste: { fr: "Stage — Graphiste", en: "Internship — Graphic Designer", pl: "Staż — Grafik" } },

    { periode: "2024 — 2027",
      lieu:  { fr: "Université Gustave Eiffel - Champs-sur-Marne, France", en: "Université Gustave Eiffel - Champs-sur-Marne, France", pl: "Université Gustave Eiffel - Champs-sur-Marne, Francja" },
      poste: { fr: "BUT MMI — Métiers du Multimédia et de l’Internet", en: "BUT MMI — Multimedia & Internet Bachelor", pl: "BUT MMI — Licencjat z multimediów i internetu" } },

    { periode: "2024",
      lieu:  { fr: "Lycée Notre-Dame de Sion - Évry-Courcouronnes, France", en: "Lycée Notre-Dame de Sion - Évry-Courcouronnes, France", pl: "Lycée Notre-Dame de Sion - Évry-Courcouronnes, Francja" },
      poste: { fr: "Bac STI2D — Énergies et Environnement", en: "Baccalauréat STI2D — Energy & Environment", pl: "Matura francuska STI2D — Energia i środowisko" } },
  ],
};


/* ==========================================================================
   7. TEXTES DU SITE (titres de sections, boutons, menus) — en français, anglais et polonais
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
  pl: {
    nav_about: "O mnie", nav_work: "Projekty", nav_exp: "Kompetencje", nav_contact: "Kontakt",
    menu: "Menu", close: "Zamknij", auto: "Auto", scroll: "Przewiń",
    about_h: "Więcej niż|tylko|designer.",   about_n: "01 — O mnie",
    f_city: "Miasto", f_edu: "Edukacja", f_fields: "Dziedziny",
    work_h: "Wybrane|projekty.",              work_n: "02 — Projekty",
    exp_h: "Co wnoszę|do zespołu.",           exp_n: "03 — Kompetencje",
    jour_h: "Moja droga|do tej pory.",        jour_n: "04 — Doświadczenie",
    bey_h: "Poza|ekranem.",                   bey_n: "05 — Po godzinach",
    contact_n: "06 — Kontakt", contact_h: "Masz pomysł|na projekt?|*Zrealizujmy|*go razem.", send: "Napisz do mnie",
    cv: "Pobierz moje CV", cv_wip: "CV w trakcie aktualizacji",
    top: "Do góry", rights: "Wszelkie prawa zastrzeżone", img: "Zdjęcie projektu",
    m_cat: "Kategoria", m_year: "Rok", m_role: "Rola", m_tools: "Narzędzia",
    m_motion: "Motion design", m_ai: "Stworzone z AI", m_play: "Odtwórz motion", m_tool: "Narzędzie",
    m_ai_note: "Ten motion design został stworzony z pomocą sztucznej inteligencji. Natomiast makiety i strony internetowe widoczne w filmie zaprojektowałem i wykonałem sam w przypadku projektów indywidualnych lub wspólnie z zespołem w przypadku projektów grupowych.",
    m_about: "O projekcie", m_visit: "Zobacz projekt", m_next: "Następny projekt", m_close: "Zamknij",
  },
};
