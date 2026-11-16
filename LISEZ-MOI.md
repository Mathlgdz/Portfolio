# Comment personnaliser mon portfolio sans savoir coder

## Ce que contient le dossier

```
portfolio/
├── index.html      ← le site (ne pas toucher)
├── contenu.js      ← TOUS les textes, liens et chemins d'images : c'est le seul fichier à modifier
├── LISEZ-MOI.md    ← ce guide
└── images/
    ├── hero.jpg            ← photo d'accueil
    ├── portrait.jpg        ← photo de la section À propos
    ├── beyond/             ← photos de « Au-delà de l'écran » (photo-1.jpg, photo-2.jpg…)
    └── projets/
        ├── projet-01/      ← couverture.jpg, image-1.jpg, image-2.jpg
        ├── projet-02/
        └── …
```

## Voir le site

Double-cliquez sur **index.html** : il s'ouvre dans votre navigateur. Une connexion Internet est nécessaire pour les polices et les animations.
Après chaque modification, enregistrez **contenu.js** puis actualisez la page (touche **F5**, ou **Cmd + R** sur Mac).

## Modifier un texte

1. Ouvrez **contenu.js** avec un éditeur de texte : **VS Code** (gratuit, conseillé), Bloc-notes sur Windows, ou TextEdit sur Mac (menu Format → « Convertir au format texte »).
2. Repérez la section qui vous intéresse : les titres en MAJUSCULES (1. IDENTITÉ, 2. PHOTOS, 3. À PROPOS…) servent de repères.
3. Changez uniquement le texte **entre les guillemets**. Chaque texte a une version `fr:` et une version `en:`.

Exemple pour changer votre titre :
```
titre: { fr: "UX/UI & Product Designer à en devenir.", en: "Aspiring UX/UI & Product Designer." },
```

## Les trois langues (français, anglais, polonais)

Le site existe en **français**, **anglais** et **polonais**. Le visiteur choisit avec les drapeaux en haut à droite (dans le menu sur téléphone) ; à la première visite, la langue de son navigateur est utilisée.
Dans **contenu.js**, chaque texte a trois versions : `fr: "…"`, `en: "…"` et `pl: "…"`. Si vous ajoutez un texte sans version `pl`, le site affiche l'anglais à la place pour les visiteurs polonais.
Les drapeaux sont dans `images/flags/` (fr.svg, en.svg, pl.svg).

## Changer ou ajouter une image

1. Déposez votre photo dans le bon dossier, par exemple `images/hero.jpg`.
2. Si vous gardez le même nom de fichier, c'est tout : elle apparaît automatiquement.
3. Si le nom est différent, écrivez le nouveau chemin dans **contenu.js** :
```
hero: "images/ma-photo.jpg",
```
Tant qu'une image manque, le site affiche un cadre gris avec le chemin attendu.

Conseils : format JPG (ou PNG pour une image détourée), environ 2000 px de large, moins de 500 Ko. Évitez les espaces et les accents dans les noms de fichiers (`photo-foot.jpg` plutôt que `Photo foot été.jpg`).

## Ajouter un projet

Dans **contenu.js**, section 4. PROJETS :
1. Copiez un bloc projet complet, de `{ // ---------- PROJET 01` jusqu'au `},` qui le termine.
2. Collez-le juste après le dernier projet.
3. Changez ses textes et ses chemins d'images, et créez son dossier d'images (`images/projets/projet-05/`).

Pour supprimer un projet, effacez son bloc entier.
Dans `details`, le symbole `|` crée un nouveau paragraphe dans la fiche du projet.
Laissez `lien: ""` si le projet n'est pas en ligne : le bouton « Voir le projet » n'apparaîtra pas.

## Réseaux sociaux et coordonnées

Section 1. IDENTITÉ : modifiez `email` et la liste `reseaux`. Pour ajouter un réseau, copiez une ligne :
```
{ label: "Behance", url: "https://www.behance.net/votre-profil" },
```

## Ajouter mon CV

1. Exportez votre CV en PDF et déposez-le dans le dossier **documents**, par exemple `documents/CV-Mathieu-Legedza.pdf`.
2. Dans **contenu.js**, section 1. IDENTITÉ, remplissez la ligne `cv` :
```
cv: { fr: "documents/CV-Mathieu-Legedza.pdf", en: "documents/CV-Mathieu-Legedza.pdf" },
```
Si vous avez une version anglaise de votre CV, mettez son chemin dans `en:`.
Le bouton « Télécharger mon CV » apparaît alors dans la section Contact. Tant que la ligne est vide `""`, le site affiche « CV en cours de modification » à la place (non cliquable).

## Suivre les visites (GoatCounter, gratuit)

GoatCounter compte les visites sans cookies et sans collecter de données personnelles : pas besoin de bandeau cookies.
1. Créez un compte gratuit sur **goatcounter.com** (bouton « Sign up »).
2. Choisissez un code, par exemple `mathieulegedza` : votre tableau de bord sera sur `mathieulegedza.goatcounter.com`.
3. Dans **contenu.js**, section 1. IDENTITÉ, écrivez ce code :
```
statistiques: "mathieulegedza",
```
Les visites ne sont comptées qu'une fois le site en ligne (pas quand vous l'ouvrez sur votre ordinateur).

## Image d'aperçu des partages

Quand le lien du site est partagé (LinkedIn, WhatsApp, Messenger…), l'image `images/apercu.jpg` s'affiche (1200 × 630 px). Pour la changer, remplacez ce fichier par une image de même format et du même nom.
Note : LinkedIn préfère une adresse complète. Une fois le site en ligne, dans **index.html**, remplacez les deux `content="images/apercu.jpg"` par l'adresse complète, par exemple `content="https://votre-site.netlify.app/images/apercu.jpg"`. Pour vérifier le résultat : **linkedin.com/post-inspector**.

## Protection des images, vidéos et du code

Le site décourage la copie : pas de clic droit ni de glisser-déposer sur les images et vidéos, pas de bouton de téléchargement sur les vidéos, raccourcis d'enregistrement et d'inspection bloqués, et le code de **index.html** est compressé (illisible).
Ces protections sont **dissuasives** : une personne déterminée peut toujours récupérer ce qui s'affiche dans son navigateur.
**index.html** n'est plus modifiable à la main : pour faire évoluer le site, envoyez le dossier complet à Claude. La version lisible du code est rangée dans le dossier **_source**, qui reste sur GitHub mais n'est pas publié sur le site (GitHub Pages ignore les dossiers commençant par « _ »). **contenu.js** reste modifiable comme avant.

## Si la page devient vide

Un message s'affiche si **contenu.js** contient une erreur. C'est presque toujours :
- un guillemet `"` oublié ou en trop ;
- une virgule `,` manquante à la fin d'une ligne ;
- une accolade `}` ou un crochet `]` effacé par erreur.

Annulez votre dernière modification (**Ctrl + Z**) et réessayez. Dans VS Code, une erreur est soulignée en rouge.

## Mettre le site en ligne (gratuit)

1. Allez sur **app.netlify.com/drop** et créez un compte gratuit (connexion possible avec Google ou GitHub).
2. Glissez-déposez le **dossier portfolio entier** dans la zone prévue.
3. Netlify vous donne un lien du type `nom-au-hasard.netlify.app`. Vous pouvez le renommer dans **Site configuration → Change site name**.
4. Pour mettre à jour le site : dans votre site Netlify, onglet **Deploys**, glissez à nouveau le dossier.
