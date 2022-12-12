export interface Project {
  name: string;
  thumbnailUrl: string;
  type: 'Application' | 'Jeu vidéo';
  support: 'PC' | 'Mobile';
  languages: string;
  domain: 'Projet personnel' | 'Projet scolaire' | 'Projet professionnel';
  contents: ProjectContent[];
  links: ProjectLink[];
}

export interface ProjectContent {
  value: string;
  url?: string;
  type: 'image' | 'text' | 'video';
}

interface ProjectLink {
  label: string;
  url: string;
}

export const projects: Project[] = [
  {
    name: 'Universalis',
    thumbnailUrl: 'assets/universalis/sun-universalis.jpg',
    type: 'Application',
    support: 'Mobile',
    languages: 'Unity - C#',
    domain: 'Projet personnel',
    contents: [
      {
        type: 'video',
        url: 'https://youtube.com/shorts/Tr8m9fRS_oo?feature=share',
        value: 'assets/universalis/universalis-video-thumbnail.jpg',
      },
      {
        type: 'text',
        value:
          "Universalis est une carte de l'univers pour observer le ciel en temps réel. Les étoiles sont basées sur 100 000 éléments. Elles varient en fonction de leur couleur, taille et magnitude.",
      },
      {
        type: 'image',
        value: 'assets/universalis/blue-star-universalis.jpg',
      },
      {
        type: 'image',
        value: 'assets/universalis/universalis-jupiter.jpg',
      },
      {
        type: 'text',
        value:
          "La position des astres est calculée en fonction de la position de l'hôte sur Terre et de la date courante. L'application se sert du gyroscope du smartphone pour se situer dans l'espace.",
      },
      {
        type: 'image',
        value: 'assets/universalis/sun-universalis-3d-mode.jpg',
      },
      {
        type: 'image',
        value: 'assets/universalis/universalis-screenshot.jpg',
      },
      {
        type: 'text',
        value:
          "Des fonctionnalités telles que le mode 3D et la page Wikipédia de l'astre permettent de comprendre le ciel. Observez n'importe quelle planète ou étoile sous tous ses angles.",
      },
      {
        type: 'image',
        value: 'assets/universalis/saturn-in-sky-universalis.jpg',
      },
      {
        type: 'image',
        value: 'assets/universalis/saturn-universalis-3d-mode.jpg',
      },
      {
        type: 'image',
        value: 'assets/universalis/saturn-text-universalis.jpg',
      },
    ],
    links: [
      {
        label: "Télécharger l'application",
        url: 'TODO',
      },
      {
        label: "Obtenir la ressource d'étoiles",
        url: 'https://github.com/astronexus/HYG-Database',
      },
      {
        label: 'Voir plus de vidéos',
        url: 'https://www.tiktok.com/@blacephalone',
      },
      {
        label: 'Voir Repo Github',
        url: 'https://github.com/WakkoStar/Universalis',
      },
    ],
  },
  {
    name: 'Skate Rider',
    thumbnailUrl: 'assets/skaterider/skaterider-jump.jpg',
    type: 'Jeu vidéo',
    support: 'Mobile',
    languages: 'Unity - C#',
    domain: 'Projet personnel',
    contents: [
      {
        type: 'video',
        url: 'https://youtube.com/shorts/4c6sTHAPQ-w?feature=share',
        value: 'assets/skaterider/skaterider-video-thumbnail.jpg',
      },
      {
        type: 'text',
        value:
          'Skate Rider mêle jeu de plateforme et jeu de skate. Le but est de réaliser des "tricks" et d\'aller le plus loin possible sur cet endless platformer pour réaliser le meilleur score.',
      },
      {
        type: 'image',
        value: 'assets/skaterider/skaterider-level-jump.jpg',
      },
      {
        type: 'image',
        value: 'assets/skaterider/skaterider-tricks.jpg',
      },
      {
        type: 'image',
        value: 'assets/skaterider/skaterider-level-grind.jpg',
      },
      {
        type: 'image',
        value: 'assets/skaterider/skaterider-gameplay.jpg',
      },
      {
        type: 'text',
        value:
          "Le niveau est généré bloc par bloc. L'apparition d'un nouveau bloc est régie par le précédent. Des zones de suretés, permettent au joueur d'atterrir et de placer des obstacles.",
      },
      {
        type: 'image',
        value: 'assets/skaterider/skaterider-level.jpg',
      },
      {
        type: 'image',
        value: 'assets/skaterider/skaterider-tiles.jpg',
      },
      {
        type: 'image',
        value: 'assets/skaterider/skaterider-start-screen.jpg',
      },
      {
        type: 'image',
        value: 'assets/skaterider/skaterider-end-screen.jpg',
      },
      {
        type: 'text',
        value:
          'Le joueur récupère des collectables durant sa partie. Il peut les utiliser pour obtenir de nouvelles apparences et personnaliser son skate.',
      },
      {
        type: 'image',
        value: 'assets/skaterider/skaterider-custom.jpg',
      },
      {
        type: 'image',
        value: 'assets/skaterider/skaterider-lootbox.jpg',
      },
    ],
    links: [
      {
        label: "Télécharger l'application",
        url: 'TODO',
      },
      {
        label: 'Voir plus de vidéos',
        url: 'https://www.tiktok.com/@blacephalone',
      },
      {
        label: 'Voir Repo Github',
        url: 'https://github.com/WakkoStar/SkateRider',
      },
    ],
  },
  {
    name: 'City Escape',
    thumbnailUrl: 'assets/cityescape/city-escape-wallpaper.jpg',
    type: 'Jeu vidéo',
    support: 'PC',
    languages: 'Unity - C#',
    domain: 'Projet scolaire',
    contents: [
      {
        type: 'video',
        value: 'assets/cityescape/city-escape-video-thumbnail.jpg',
        url: 'https://youtu.be/YyBk659A8Ac',
      },
      {
        type: 'text',
        value:
          "Jeu d'horreur à la première personne. Vous devez récupérer des collectables disséminés à travers le niveau. Des ennemis vous en empêcheront, utilisez votre lampe torche pour les tuer.",
      },
      {
        type: 'image',
        value: 'assets/cityescape/city-escape-gameplay.jpg',
      },
      {
        type: 'image',
        value: 'assets/cityescape/city-escape-collectable.jpg',
      },
      {
        type: 'image',
        value: 'assets/cityescape/city-escape-monster.jpg',
      },
      {
        type: 'text',
        value:
          'Basé sur le vrai monde, en fonction de la longitude et la latitude choisie. Le niveau va générer un terrain, des bâtiments, des collectables, des lampadaires grâce aux données récupérées de la carte du monde.',
      },
      {
        type: 'image',
        value: 'assets/cityescape/city-escape-choose-city.jpg',
      },
      {
        type: 'image',
        value: 'assets/cityescape/city-escape-level.jpg',
      },
      {
        type: 'image',
        value: 'assets/cityescape/city-escape-level-view.jpg',
      },
    ],
    links: [],
  },
  {
    name: 'AR Signe',
    thumbnailUrl: 'assets/arsign/arsign-logo.jpg',
    type: 'Application',
    support: 'Mobile',
    languages: 'Unity - C#',
    domain: 'Projet scolaire',
    contents: [
      {
        type: 'video',
        value: 'assets/arsign/arsign-menu.jpg',
        url: 'https://youtube.com/shorts/kEZ4eQYAuxI?feature=share',
      },
      {
        type: 'text',
        value:
          "AR Signe est une application en réalité augmentée. Elle permet d'apprendre ludiquement la langue des signes. Tournez autour de votre personnage pour observer ses mouvements.",
      },
      {
        type: 'image',
        value: 'assets/arsign/arsign-start-screen.jpg',
      },
      {
        type: 'image',
        value: 'assets/arsign/arsign-pose-character.jpg',
      },
      {
        type: 'image',
        value: 'assets/arsign/arsign-hello.jpg',
      },
      {
        type: 'image',
        value: 'assets/arsign/arsign-menu.jpg',
      },
      {
        type: 'image',
        value: 'assets/arsign/arsign-goodbye.jpg',
      },
      {
        type: 'image',
        value: 'assets/arsign/arsign-dog.jpg',
      },
    ],
    links: [],
  },
];

export const templateProject: Project = {
  name: '',
  thumbnailUrl: '',
  type: 'Application',
  support: 'PC',
  languages: '',
  domain: 'Projet personnel',
  contents: [],
  links: [],
};
