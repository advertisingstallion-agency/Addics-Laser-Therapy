// All French copy lives here. Missing facts stay as [placeholders]: never invent them
// (prices, phone numbers, reviews, testimonials) and make no medical promises.

export const site = {
  name: "Centre Addic's Laser",
  // Set NEXT_PUBLIC_SITE_URL to the real domain before going live.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  city: "Mohammedia, Maroc",
  description:
    "Centre de bien-être à Mohammedia : EMDR, hypnose, sablothérapie, laserothérapie et madérothérapie, sur rendez-vous.",
  instagramHandle: "@addics.laser",
  instagramUrl: "https://www.instagram.com/addics.laser",
  phone: "[Numéro de téléphone]",
  email: "[Adresse e-mail]",
  address: "[Adresse], Mohammedia",
  hours: "[Horaires d'ouverture]",
  copyright: `© ${new Date().getFullYear()} Centre Addic's Laser. Tous droits réservés.`,
};

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nos soins", href: "#soins" },
  { label: "Tarifs", href: "#tarifs" },
  // No dedicated "À propos" section yet: points to the gallery of the centre.
  { label: "À propos", href: "#galerie" },
  { label: "Contact", href: "#reservation" },
];

export const nav = {
  brandSub: "Bien-être · Mohammedia",
  cta: "Réserver",
  openMenu: "Ouvrir le menu",
  closeMenu: "Fermer le menu",
};

export const hero = {
  eyebrow: "Centre bien-être · Mohammedia",
  titleStart: "Prenez le temps de vous ",
  titleAccent: "retrouver.",
  lead: "Thérapies, détente du corps et de l'esprit, dans un cadre calme et chaleureux.",
  primaryCta: "Réserver une séance",
  secondaryCta: "Découvrir nos soins",
  card: {
    eyebrow: "Sur rendez-vous",
    text: "Réservez votre séance en quelques instants, par message.",
    link: "Nous écrire",
  },
  pause: "Mettre la vidéo en pause",
  play: "Lire la vidéo",
};

// Order matters: it sets the numbering (01 to 05) and the booking form options.
export const therapies = [
  {
    id: "emdr",
    name: "EMDR",
    description:
      "Un accompagnement émotionnel guidé pour traverser les moments difficiles et retrouver de la sérénité.",
  },
  {
    id: "hypnose",
    name: "Hypnose",
    description:
      "Une détente profonde, guidée par la voix, pour lâcher prise et se recentrer en douceur.",
  },
  {
    id: "sablotherapie",
    name: "Sablothérapie",
    description:
      "Un massage au sable chaud, enveloppant, pour dénouer les tensions du corps.",
  },
  {
    id: "laserotherapie",
    name: "Laserothérapie",
    description:
      "Un soin ciblé, réalisé avec douceur par un praticien certifié, dans un cadre rassurant.",
  },
  {
    id: "maderotherapie",
    name: "Madérothérapie",
    description:
      "Un massage aux instruments en bois, tonique, pour revitaliser et sculpter la silhouette.",
  },
];

// Same price and duration for every therapy until the centre provides them.
export const therapyDuration = "[Durée]";
export const therapyPrice = "[Prix] DH";

export const soins = {
  eyebrow: "Thérapies",
  title: "Nos soins",
  intro:
    "Cinq approches pour prendre soin de vous, du corps comme de l'esprit. Chaque séance se déroule sur rendez-vous, dans un cadre calme.",
  pricesLink: "Voir les tarifs",
  photo: {
    alt: "",
    badge: "Sur rendez-vous",
    title: "Un cadre calme, des gestes doux.",
    text: "Chaque séance est pensée pour vous laisser le temps de souffler.",
  },
  bookLabel: "Réserver",
  cta: {
    eyebrow: "Un doute ?",
    title: "Quel soin est fait pour vous ?",
    text: "Écrivez-nous, nous vous conseillons avec plaisir.",
    button: "Nous écrire",
  },
};

export const tarifs = {
  eyebrow: "Tarifs",
  title: "Des prix clairs, sans surprise.",
  intro:
    "Chaque soin est proposé à un tarif affiché en dirhams, sur rendez-vous. Choisissez une séance ou un forfait.",
  note: "Tarifs en dirhams (DH). Les séances se réservent sur rendez-vous.",
  package: {
    badge: "Offre forfait",
    title: "Forfait [N] séances",
    text: "Prenez soin de vous sur la durée, à prix avantageux.",
    price: "[Prix] DH",
    oldPrice: "[Ancien prix] DH",
    features: [
      "[N] séances au choix parmi nos soins",
      "Valable [durée de validité]",
      "Réservation sur rendez-vous",
    ],
    cta: "Réserver le forfait",
  },
};

export const temoignages = {
  eyebrow: "Témoignages",
  title: "Ce qu'ils en disent.",
  intro:
    "Les mots de celles et ceux qui ont pris le temps de souffler chez nous.",
  // Placeholders only: real testimonials come from the centre.
  items: [
    "[Témoignage du client : une ou deux phrases sur son expérience au centre.]",
    "[Témoignage du client : ce qu'il ou elle a apprécié pendant la séance.]",
    "[Témoignage du client : une phrase courte.]",
    "[Témoignage du client : deux ou trois phrases sur le soin suivi et sur le cadre du centre.]",
    "[Témoignage du client : une ou deux phrases.]",
  ],
  initial: "[P]",
  name: "[Prénom N.]",
  role: "[Soin suivi]",
  pauseLabel: "Mettre le défilement en pause",
  playLabel: "Reprendre le défilement",
  pauseText: "Pause",
  playText: "Lecture",
};

export const galerie = {
  eyebrow: "Galerie",
  title: "Le centre en images.",
  intro:
    "Un lieu pensé pour la lenteur : lumière douce, bois, matières naturelles.",
  follow: "Suivre @addics.laser",
  photoAlt: "Soin relaxant du visage, à la lueur douce",
  placeholder: "[Photo du centre]",
};

export const reservation = {
  eyebrow: "Réservation",
  title: "Réservez votre séance.",
  intro:
    "Dites-nous ce qui vous ferait du bien. Nous vous répondons pour confirmer votre rendez-vous.",
  labels: {
    phone: "Téléphone",
    email: "E-mail",
    instagram: "Instagram",
    address: "Adresse",
    hours: "Horaires",
  },
  form: {
    eyebrow: "Sur rendez-vous",
    title: "Votre demande de réservation",
    name: "Prénom et nom",
    namePlaceholder: "Votre nom",
    phone: "Téléphone",
    phonePlaceholder: "06 00 00 00 00",
    therapy: "Soin souhaité",
    therapyPlaceholder: "Choisir un soin",
    date: "Date souhaitée",
    datePlaceholder: "Choisir une date",
    message: "Message (facultatif)",
    messagePlaceholder: "Dites-nous ce qui vous amène.",
    submit: "Envoyer ma demande",
    sending: "Envoi en cours…",
    note: "Votre demande n'est pas un engagement : nous confirmons le créneau avec vous.",
    success:
      "Merci ! Votre demande est bien envoyée. Nous revenons vers vous pour confirmer le rendez-vous.",
    invalid: "Veuillez corriger les champs signalés.",
    prevMonth: "Mois précédent",
    nextMonth: "Mois suivant",
  },
  // Booking options: the five therapies plus a request for advice.
  adviceOption: "Je souhaite un conseil",
};

export const footer = {
  about: "Bien-être intégratif et accompagnements émotionnels, à Mohammedia.",
  cta: "Réserver une séance",
  columns: {
    navigation: "Navigation",
    soins: "Nos soins",
    infos: "Informations",
    contact: "Contact",
  },
  infoLinks: [
    { label: "Réservation", href: "#reservation" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "Galerie", href: "#galerie" },
  ],
  wordmark: "ADDIC'S LASER",
};
