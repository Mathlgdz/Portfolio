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
      categorie: { fr: "Identité visuelle · UI Design", en: "Visual identity · UI Design", pl: "Identyfikacja wizualna · UI Design" },
      annee:     "2026",
      role: { fr: "UI & Graphic Designer", en: "UI & Graphic Designer", pl: "Projektant UI i grafik" },
      outils:    "Figma - Photoshop - InDesign ",
      resume:    { fr: "À l'occasion de la JPO 2026, le département MMI communique sur lui-même, pour promouvoir la formation et attirer de nouveaux étudiants.", en: "For the 2026 Open Day, the MMI department promotes itself to showcase the programme and attract new students.", pl: "Z okazji Dni Otwartych 2026 wydział MMI promuje sam siebie, aby zaprezentować kierunek i przyciągnąć nowych studentów." },
      details: {
        fr: "L’objectif était de créer une campagne de communication pour promouvoir le BUT MMI de Champs-sur-Marne à l’occasion de la Journée Portes Ouvertes 2026. Le but était d’attirer les futurs bacheliers en donnant une image moderne et attractive de la formation.|Pour cela, nous avons commencé, en groupe de trois, par concevoir une nouvelle identité visuelle, avec un logo pour MMI Champs-sur-Marne. Nous l’avons ensuite déclinée sur plusieurs supports : une affiche, des goodies et une mini charte graphique. De mon côté, je me suis occupé de l’affiche de la campagne, ainsi que des maquettes desktop et mobile de la page d’accueil du site. Pour le site, nous avons gardé la structure existante du département afin de nous concentrer sur l’UI : la hiérarchie visuelle, la typographie, les couleurs et la cohérence avec l’affiche.|Ce projet m’a appris à faire vivre une même identité sur plusieurs supports, du print au web. Je suis fier du résultat, et si je devais aller plus loin, je retravaillerais aussi la structure de la page en partant des besoins des lycéens.",
        en: "The goal was to create a communication campaign promoting the BUT MMI in Champs-sur-Marne for the 2026 Open Day. The aim was to attract future high-school graduates by giving the programme a modern, appealing image.|To do this, working in a group of three, we started by designing a new visual identity, including a logo for MMI Champs-sur-Marne. We then rolled it out across several materials: a poster, goodies and a mini brand guide. On my side, I designed the campaign poster as well as the desktop and mobile mockups of the website’s home page. For the website, we kept the department’s existing structure so we could focus on the UI: visual hierarchy, typography, colours and consistency with the poster.|This project taught me how to bring a single identity to life across several media, from print to web. I’m proud of the result, and if I were to take it further, I would also rework the page structure based on the needs of high-school students.",
        pl: "Celem było stworzenie kampanii komunikacyjnej promującej kierunek BUT MMI w Champs-sur-Marne z okazji Dni Otwartych 2026. Chodziło o przyciągnięcie przyszłych maturzystów dzięki nowoczesnemu i atrakcyjnemu wizerunkowi kierunku.|W tym celu w trzyosobowej grupie zaczęliśmy od zaprojektowania nowej identyfikacji wizualnej, w tym logo MMI Champs-sur-Marne. Następnie przenieśliśmy ją na kilka nośników: plakat, gadżety i mini księgę znaku. Ja zająłem się plakatem kampanii oraz makietami strony głównej w wersji desktopowej i mobilnej. W przypadku strony zachowaliśmy istniejącą strukturę serwisu wydziału, aby skupić się na UI: hierarchii wizualnej, typografii, kolorach i spójności z plakatem.|Ten projekt nauczył mnie, jak rozwijać jedną identyfikację na różnych nośnikach – od druku po internet. Jestem dumny z efektu, a gdybym miał pójść dalej, przebudowałbym też strukturę strony, wychodząc od potrzeb licealistów.",
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
      categorie: { fr: "UX/UI Design", en: "UX/UI Design", pl: "Projektowanie UX/UI" },
      annee:     "2026",
      role: { fr: "UX/UI Designer", en: "UX/UI Designer", pl: "Projektant UX/UI" },
      outils:    "Figma - Photoshop - Illustrator",
      resume:    { fr: "Réalisation de l'identité visuelle d'une exposition immersive (fictive)", en: "Visual identity for an immersive (fictional) exhibition.", pl: "Identyfikacja wizualna immersyjnej (fikcyjnej) wystawy." },
      details: {
        fr: "Dans le cadre d’un projet universitaire, on devait concevoir, en groupe, une agence chargée de créer une exposition immersive. Plusieurs livrables étaient attendus : un site web pour l’agence et un autre pour l’exposition, ainsi que différents supports de communication visuelle (affiches, flyers, publications pour les réseaux sociaux et teaser). On devait également créer l’identité visuelle de l’agence, notamment son logo, puis le décliner en animation.|En groupe de sept, nous avons mené 3 entretiens auprès d’étudiants, construit 2 personas, puis cartographié leurs parcours avant, pendant et après l’exposition. Ces parcours nous ont montré que les visiteurs arrivent par de nombreux canaux (réseaux sociaux, affiches avec QR code, teaser), avec deux comportements : ceux qui veulent réserver tout de suite, et ceux qui veulent d’abord découvrir. Le site propose donc un bouton « Réserver » accessible dès l’accueil et, pour les plus curieux, une expérience immersive en 3D avec un jeu qui fait gagner un code promo à utiliser lors de la réservation. Avec une camarade, j’ai conçu les maquettes du site. J’ai aussi réalisé la fiche de communication et les posts Instagram.|Ce projet m’a fait vivre une démarche UX complète, de l’entretien à la maquette, et m’a appris à concevoir un site qui répond à plusieurs profils de visiteurs.",
        en: "As part of a university project, we had to design, as a group, an agency tasked with creating an immersive exhibition. Several deliverables were expected: a website for the agency and another for the exhibition, as well as various visual communication materials (posters, flyers, social media posts and a teaser). We also had to create the agency’s visual identity, including its logo, and then animate it.|In a group of seven, we conducted 3 interviews with students, built 2 personas, then mapped their journeys before, during and after the exhibition. These journeys showed us that visitors arrive through many channels (social media, posters with a QR code, the teaser) and fall into two groups: those who want to book straight away, and those who want to discover first. The website therefore offers a « Book » button right from the home page and, for the more curious, an immersive 3D experience with a game that wins a promo code to use when booking. With a classmate, I designed the website mockups. I also produced the communication sheet and the Instagram posts.|This project took me through a complete UX process, from interviews to mockups, and taught me to design a website that meets the needs of several visitor profiles.",
        pl: "W ramach projektu uczelnianego mieliśmy w grupie stworzyć agencję odpowiedzialną za przygotowanie immersyjnej wystawy. Oczekiwano kilku rezultatów: strony internetowej agencji i drugiej strony wystawy, a także różnych materiałów komunikacji wizualnej (plakatów, ulotek, postów w mediach społecznościowych i teasera). Musieliśmy też stworzyć identyfikację wizualną agencji, w tym jej logo, a następnie je zanimować.|W siedmioosobowej grupie przeprowadziliśmy 3 wywiady ze studentami, stworzyliśmy 2 persony, a następnie rozpisaliśmy ich ścieżki przed wystawą, w jej trakcie i po niej. Te ścieżki pokazały nam, że odwiedzający trafiają do nas wieloma kanałami (media społecznościowe, plakaty z kodem QR, teaser) i zachowują się na dwa sposoby: jedni chcą od razu zarezerwować bilet, inni wolą najpierw poznać wystawę. Dlatego strona oferuje przycisk « Zarezerwuj » dostępny już na stronie głównej, a dla bardziej ciekawych – immersyjne doświadczenie 3D z grą, w której można wygrać kod rabatowy do wykorzystania przy rezerwacji. Razem z koleżanką zaprojektowałem makiety strony. Przygotowałem też kartę komunikacyjną i posty na Instagram.|Ten projekt pozwolił mi przejść przez pełny proces UX – od wywiadu po makietę – i nauczył mnie projektować stronę odpowiadającą na potrzeby różnych profili odwiedzających.",
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
      categorie: { fr: "UX/UI Design", en: "UX/UI Design", pl: "Projektowanie UX/UI" },
      annee:     "2026",
      role: { fr: "UX/UI Designer", en: "UX/UI Designer", pl: "Projektant UX/UI" },
      outils:    "Figma",
      resume:    { fr: "Wayly est une plateforme fictive qui centralise l’organisation d’un road trip : itinéraire, hébergements, budget et partage entre amis.", en: "Wayly is a fictional platform that brings all of a road trip’s planning together: itinerary, accommodation, budget and sharing with friends.", pl: "Wayly to fikcyjna platforma, która zbiera w jednym miejscu całą organizację road tripu: trasę, noclegi, budżet i dzielenie się z przyjaciółmi." },
      details: {
        fr: "Wayly est un projet personnel de UX/UI design : une plateforme fictive qui réunit toute l’organisation d’un road trip au même endroit, avec l’itinéraire, les hébergements, le budget et le partage avec ses amis. L’objectif était de concevoir une interface complète, du wireframe à la maquette finale.|Pour cela, j’ai d’abord analysé des plateformes de réservation existantes comme Booking.com et Hotels.com, pour comprendre leurs parcours et leurs bonnes pratiques. J’ai ensuite réalisé les wireframes, puis les maquettes de 8 écrans en version desktop et mobile. En parallèle, j’ai construit un design system (couleurs, typographie, composants) pour garder une interface cohérente d’un écran à l’autre.|Le design system a été la partie la plus exigeante, car c’était la première fois que j’en construisais un. Je suis fier du résultat, mais avec du recul, je me suis rendu compte que j’étais passé directement aux wireframes, sans entretiens utilisateurs, sans persona ni parcours utilisateur. Mes choix reposaient donc sur mes intuitions et sur l’analyse de plateformes existantes, plutôt que sur les besoins réels des voyageurs. Ce projet m’a appris l’importance de ces étapes, et je les intégrerai dès le début de mes prochains projets.",
        en: "Wayly is a personal UX/UI design project: a fictional platform that brings all of a road trip’s planning together in one place, with the itinerary, accommodation, budget and sharing with friends. The goal was to design a complete interface, from wireframe to final mockup.|To do this, I first analysed existing booking platforms such as Booking.com and Hotels.com to understand their user journeys and best practices. I then created the wireframes, followed by mockups of 8 screens in desktop and mobile versions. Alongside this, I built a design system (colours, typography, components) to keep the interface consistent from one screen to the next.|The design system was the most demanding part, as it was the first time I had built one. I’m proud of the result, but looking back, I realised that I had gone straight to the wireframes, without user interviews, personas or user journeys. My choices were therefore based on my intuition and on the analysis of existing platforms, rather than on travellers’ real needs. This project taught me how important these steps are, and I will include them from the start of my next projects.",
        pl: "Wayly to mój osobisty projekt UX/UI: fikcyjna platforma, która zbiera w jednym miejscu całą organizację road tripu – trasę, noclegi, budżet i dzielenie się z przyjaciółmi. Celem było zaprojektowanie kompletnego interfejsu, od wireframe’u po finalną makietę.|W tym celu najpierw przeanalizowałem istniejące platformy rezerwacyjne, takie jak Booking.com i Hotels.com, aby zrozumieć ich ścieżki użytkownika i dobre praktyki. Następnie przygotowałem wireframe’y, a potem makiety 8 ekranów w wersji desktopowej i mobilnej. Równolegle zbudowałem design system (kolory, typografia, komponenty), aby interfejs był spójny na wszystkich ekranach.|Design system był najbardziej wymagającą częścią, ponieważ budowałem go po raz pierwszy. Jestem dumny z efektu, ale z perspektywy czasu zdałem sobie sprawę, że od razu przeszedłem do wireframe’ów – bez wywiadów z użytkownikami, person i ścieżek użytkownika. Moje wybory opierały się więc na intuicji i analizie istniejących platform, a nie na rzeczywistych potrzebach podróżnych. Ten projekt nauczył mnie, jak ważne są te etapy, i będę je uwzględniał od samego początku w kolejnych projektach.",
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
      categorie: { fr: "UX/UI Design · Développement web", en: "UX/UI Design · Web development", pl: "Projektowanie UX/UI · Tworzenie stron www" },
      annee:     "2025",
      role: { fr: "UX/UI Designer & Développeur front-end", en: "UX/UI Designer & Front-end Developer", pl: "Projektant UX/UI i front-end developer" },
      outils:    "Figma - HTML - CSS - PHP - JS",
      resume:    { fr: "Réalisation d'un site web collaboratif sur le thème de la cuisine.", en: "A collaborative cooking-themed website.", pl: "Wspólnie stworzona strona internetowa o tematyce kulinarnej." },
      details: {
        fr: "Health NutriWay est un site collaboratif autour de la cuisine, pensé pour aider les utilisateurs à mieux manger au quotidien. L’objectif était de concevoir et de développer un site simple, intuitif et convivial, du premier brainstorm jusqu’au site en ligne.|En groupe de quatre, nous avons commencé par une phase d’idéation et un moodboard, puis par un benchmark d’une vingtaine de sites de cuisine et de restauration pour repérer les bonnes pratiques. Nous avons ensuite réalisé les wireframes, que nous avons testés lors d’entretiens utilisateurs pour vérifier qu’ils étaient intuitifs et accessibles. Grâce à ces retours, nous avons modifié les wireframes avant de passer aux maquettes, chacun prenant en charge plusieurs pages, puis à un prototype interactif sur Figma, qui a fait l’objet d’une deuxième série de tests. Pour le développement, je me suis occupé du front-end en binôme, pendant que les deux autres membres du groupe développaient le back-office.|Ce projet m’a fait vivre un vrai cycle de conception : tester, corriger, puis tester à nouveau. Les tests nous ont par exemple montré que la page d’accueil ne donnait pas d’accès direct aux recettes : nous y avons donc ajouté une section « Dernières recettes ajoutées ». J’ai compris que les retours des utilisateurs permettent de repérer des problèmes qu’on ne voit plus quand on est dans son projet.",
        en: "Health NutriWay is a collaborative cooking website, designed to help users eat better every day. The goal was to design and develop a simple, intuitive and friendly website, from the first brainstorm to the live site.|In a group of four, we started with an ideation phase and a moodboard, followed by a benchmark of around twenty cooking and restaurant websites to identify best practices. We then created the wireframes and tested them in user interviews to check that they were intuitive and accessible. Based on this feedback, we revised the wireframes before moving on to the mockups, with each of us handling several pages, and then to an interactive prototype in Figma, which went through a second round of testing. For development, I worked on the front-end in a pair, while the other two members of the group built the back office.|This project took me through a real design cycle: test, fix, then test again. For example, the tests showed us that the home page gave no direct access to the recipes, so we added a « Latest recipes » section. I learned that user feedback reveals problems you no longer notice when you are deep in your own project.",
        pl: "Health NutriWay to wspólnie tworzona strona kulinarna, która ma pomóc użytkownikom lepiej odżywiać się na co dzień. Celem było zaprojektowanie i zbudowanie prostej, intuicyjnej i przyjaznej strony – od pierwszej burzy mózgów po stronę opublikowaną w sieci.|W czteroosobowej grupie zaczęliśmy od fazy ideacji i moodboardu, a następnie przeprowadziliśmy benchmark około dwudziestu stron kulinarnych i restauracyjnych, aby wyłonić dobre praktyki. Potem przygotowaliśmy wireframe’y i przetestowaliśmy je podczas wywiadów z użytkownikami, aby sprawdzić, czy są intuicyjne i dostępne. Na podstawie tych opinii poprawiliśmy wireframe’y, a następnie przeszliśmy do makiet – każdy zajął się kilkoma stronami – i do interaktywnego prototypu w Figmie, który przeszedł drugą rundę testów. Podczas kodowania zajmowałem się front-endem w parze, a pozostałe dwie osoby z grupy budowały panel administracyjny.|Ten projekt pozwolił mi przejść przez prawdziwy cykl projektowy: testować, poprawiać i testować ponownie. Testy pokazały nam na przykład, że strona główna nie dawała bezpośredniego dostępu do przepisów, dlatego dodaliśmy sekcję « Ostatnio dodane przepisy ». Zrozumiałem, że opinie użytkowników pozwalają dostrzec problemy, których nie widzi się już, będąc głęboko w swoim projekcie.",
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
      categorie: { fr: "Data visualisation · Développement web", en: "Data visualisation · Web development", pl: "Wizualizacja danych · Tworzenie stron www" },
      annee:     "2024",
      role: { fr: "Web Designer & Développeur", en: "Web Designer & Developer", pl: "Web designer i developer" },
      outils:    "Figma - HTML - CSS - JS",
      resume:    { fr: "Création d'un site web de datavisualisation sur les transferts footballistiques en Europe.", en: "A data-visualisation website about football transfers in Europe.", pl: "Strona internetowa z wizualizacją danych o transferach piłkarskich w Europie." },
      details: {
        fr: "Mercato Viz est un site de data visualisation sur les transferts de joueurs dans le football européen. L’objectif était de concevoir et de développer un site permettant d’explorer des données de manière visuelle, sur un sujet de notre choix.|Pour cela, en groupe de trois, nous avons commencé par une recherche visuelle : couleurs, typographie, images et inspiration de sites de data visualisation. Nous avons ensuite réalisé les maquettes sur Figma, puis développé le site en HTML, CSS et JavaScript.|Ce projet, réalisé au tout début de ma deuxième année de BUT MMI, a été ma première expérience de conception et de développement d’un site complet. Avec du recul, je mesure tout ce qu’il nous a manqué : nous sommes passés directement aux maquettes, sans recherche utilisateur ni wireframes, et le site n’a été pensé que pour ordinateur, sans version mobile ni prise en compte de l’accessibilité. Ce sont justement ces lacunes qui m’ont poussé à intégrer ces étapes dans mes projets suivants.",
        en: "Mercato Viz is a data-visualisation website about player transfers in European football. The goal was to design and develop a website that lets users explore data visually, on a topic of our choice.|To do this, working in a group of three, we started with visual research: colours, typography, images and inspiration from data-visualisation websites. We then created the mockups in Figma and developed the site in HTML, CSS and JavaScript.|This project, carried out at the very start of my second year of the BUT MMI, was my first experience of designing and developing a complete website. Looking back, I can see everything we were missing: we went straight to the mockups, without user research or wireframes, and the site was designed for desktop only, with no mobile version and no consideration for accessibility. It is precisely these gaps that pushed me to include these steps in my following projects.",
        pl: "Mercato Viz to strona z wizualizacją danych o transferach zawodników w europejskiej piłce nożnej. Celem było zaprojektowanie i zbudowanie strony, która pozwala w wizualny sposób eksplorować dane na wybrany przez nas temat.|W tym celu w trzyosobowej grupie zaczęliśmy od researchu wizualnego: kolorów, typografii, zdjęć i inspiracji ze stron z wizualizacją danych. Następnie przygotowaliśmy makiety w Figmie, a potem zakodowaliśmy stronę w HTML, CSS i JavaScripcie.|Ten projekt, zrealizowany na samym początku drugiego roku BUT MMI, był moim pierwszym doświadczeniem w projektowaniu i tworzeniu kompletnej strony. Z perspektywy czasu widzę wszystko, czego nam zabrakło: od razu przeszliśmy do makiet, bez badań z użytkownikami i wireframe’ów, a strona powstała wyłącznie z myślą o komputerach – bez wersji mobilnej i bez uwzględnienia dostępności. To właśnie te braki skłoniły mnie do włączenia tych etapów do kolejnych projektów.",
      },
      lien:    "https://idrisouus.github.io/Mercato_Viz/",
      image:   "images/projets/projet-05/005.jpg",
      galerie: [ "images/projets/projet-05/0052.jpg", "images/projets/projet-05/0053.jpg" ],
      motion:       "Video/Mercato_Viz_motion_design_v3.mp4",     // motion design : "Video/nom-du-fichier.mp4" ou lien YouTube / Vimeo. "" = pas de motion
      motion_ia:    true,
      motion_outil: "Claude",
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
