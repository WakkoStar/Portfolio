import { ProjectWrapper } from '../../components/ProjectWrapper';

import saturn from '../../assets/universalis/0/saturn.jpg';
import saturnInGame from '../../assets/universalis/0/saturn-in-game.jpg';

import moon3D from '../../assets/universalis/1/moon-3d.jpg';
import moonInGame from '../../assets/universalis/1/moon-in-game.jpg';
import jupiter from '../../assets/universalis/1/jupiter.jpg';
import sun3D from '../../assets/universalis/1/sun-3d.jpg';
import saturn3D from '../../assets/universalis/1/saturn-3d.jpg';
import saturnText from '../../assets/universalis/1/saturn-text.jpg';
import arcturusText from '../../assets/universalis/1/arcturus-text.jpg';
import zoomOne from '../../assets/universalis/1/zoom-1.jpg';
import zoomTwo from '../../assets/universalis/1/zoom-2.jpg';
import zoomThree from '../../assets/universalis/1/zoom-3.jpg';

import skyOne from '../../assets/universalis/2/sky (1).jpg';

import skyFour from '../../assets/universalis/2/sky (4).jpg';
import skyFive from '../../assets/universalis/2/sky (5).jpg';
import skySix from '../../assets/universalis/2/sky (6).jpg';
import skySeven from '../../assets/universalis/2/sky (7).jpg';
import skyEight from '../../assets/universalis/2/sky (8).jpg';
import skyNine from '../../assets/universalis/2/sky (9).jpg';
import skyTen from '../../assets/universalis/2/sky (10).jpg';
import skyEleven from '../../assets/universalis/2/sky (11).jpg';
import skyTwelve from '../../assets/universalis/2/sky (12).jpg';
import skyThirdteen from '../../assets/universalis/2/sky (13).jpg';
import skyFourthteen from '../../assets/universalis/2/sky (14).jpg';

import starOne from '../../assets/universalis/3/star (1).jpg';
import starTwo from '../../assets/universalis/3/star (2).jpg';
import starThree from '../../assets/universalis/3/star (3).jpg';
import starFour from '../../assets/universalis/3/star (4).jpg';
import starFive from '../../assets/universalis/3/star (5).jpg';
import starSix from '../../assets/universalis/3/star (6).jpg';
import starSeven from '../../assets/universalis/3/star (7).jpg';

import redStar from '../../assets/universalis/4/red-start.jpg';
import blueStar from '../../assets/universalis/4/blue-star.jpg';

import UnityLogo from '../../assets/tools/unity.png';
import CLogo from '../../assets/tools/c.png';
import VsLogo from '../../assets/tools/vscode.png';
import FigmaLogo from '../../assets/tools/figma.png';
import TrelloLogo from '../../assets/tools/trello.png';

export const Universalis = () => {
  const universalisConfig = {
    texts: [
      {
        title: 'Connaitre notre univers',
        paragraph: (
          <>
            Les astres sont modélisés en 3D et peuvent être observés aussi bien
            de loin que de près. De nombreux astres possèdent une fiche
            d’information pour en apprendre plus sur l’astre en question. <br />
            <br />
            Avoir une carte détaillée du ciel me tenait à coeur. Plus
            l'utilisateur plongera dans l’infini, plus il aura la chance de
            rencontrer des étoiles lointaines.
          </>
        ),
        images: [
          { src: moon3D, width: 1242, height: 2688 },
          { src: moonInGame, width: 1242, height: 2688 },
          { src: jupiter, width: 2524, height: 2524 },
          { src: sun3D, width: 1242, height: 2688 },
          { src: saturn3D, width: 1242, height: 2688 },
          { src: saturnText, width: 1242, height: 2688 },
          { src: arcturusText, width: 1242, height: 2688 },
          { src: zoomOne, width: 1242, height: 2688 },
          { src: zoomTwo, width: 1242, height: 2688 },
          { src: zoomThree, width: 1242, height: 2688 },
        ],
      },
      {
        title: 'Votre ciel est unique ',
        paragraph: (
          <>
            Déterminer la position de plus de 40 000 astres s’effectue en
            plusieurs étapes :<br />
            <ul>
              <li>
                Récupération de l’ensemble des données sur les étoiles et les
                planètes
              </li>
              <li>
                Ajustement de leurs coordonnées en fonction de la date et de la
                position
              </li>
              <li>Placement dans l’espace par calcul trigonométrique</li>
            </ul>
            <br />
            Les planètes, la lune et le soleil répondent à des calculs
            différents.
          </>
        ),
        images: [
          { src: skyOne, width: 828, height: 1792 },
          { src: skyFour, width: 828, height: 1792 },
          { src: skyFive, width: 828, height: 1792 },
          { src: skySix, width: 828, height: 1792 },
          { src: skySeven, width: 828, height: 1792 },
          { src: skyEight, width: 828, height: 1792 },
          { src: skyNine, width: 828, height: 1792 },
          { src: skyTen, width: 828, height: 1792 },
          { src: skyEleven, width: 828, height: 1792 },
          { src: skyTwelve, width: 828, height: 1792 },
          { src: skyThirdteen, width: 828, height: 1792 },
          { src: skyFourthteen, width: 828, height: 1792 },
        ],
      },
      {
        title: 'Des astres plus vrais que nature',
        paragraph: (
          <>
            Je voulais que l'utilisateur ait une sensation d'immersion. Je me
            suis assuré que chaque étoile possède une apparence unique en lien
            étroit avec la réalité.
            <br />
            <br /> La couleur, la luminosité, la taille et la distance de
            l’étoile sont retranscrites dans l’application
          </>
        ),
        images: [
          { src: starOne, width: 828, height: 1792 },
          { src: starTwo, width: 828, height: 1792 },
          { src: starThree, width: 828, height: 1792 },
          { src: starFour, width: 828, height: 1792 },
          { src: starFive, width: 828, height: 1792 },
          { src: starSix, width: 828, height: 1792 },
          { src: starSeven, width: 828, height: 1792 },
        ],
      },
      {
        title: 'Plus de ressources',
        images: [
          { src: redStar, width: 495, height: 495 },
          { src: blueStar, width: 1274, height: 1182 },
        ],
      },
    ],
    presentation: {
      images: [
        { src: saturn, width: 631, height: 450 },
        { src: saturnInGame, width: 512, height: 1020 },
      ],
      title: 'Universalis',
      description:
        'Une application mobile permettant d’observer le ciel en temps réel et d’en apprendre davantage sur les astres, les planètes qui nous entourent.',
      tags: {
        tools: [
          { label: 'Unity', icon: UnityLogo },
          { label: 'C#', icon: CLogo },
          { label: 'VS Code', icon: VsLogo },
          { label: 'Figma', icon: FigmaLogo },
          { label: 'Trello', icon: TrelloLogo },
        ],
        roles: [
          { label: 'Développeur mobile' },
          { label: 'Calculs astronomiques' },
          { label: 'Créateur' },
        ],
      },
      links: [
        {
          label: 'Télécharger',
          link: '/#/download/universalis',
        },
        {
          label: 'Voir le code source',
          link: 'https://github.com/WakkoStar/Universalis',
        },
        {
          label: 'Consulter les données',
          link: 'https://github.com/astronexus/HYG-Database',
        },
      ],
    },
  };

  return <ProjectWrapper {...universalisConfig} />;
};
