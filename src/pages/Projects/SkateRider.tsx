import { ProjectWrapper } from '../../components/ProjectWrapper';

import banner from '../.././assets/skaterider/0/banner.jpg';
import homeScreen from '../.././assets/skaterider/0/homeScreen.jpg';

import grindRamp from '../.././assets/skaterider/1/grind-ramp.jpg';
import plainPlatformEnd from '../.././assets/skaterider/1/plain-platform-end.jpg';
import plainWood from '../.././assets/skaterider/1/plain-wood.jpg';
import plateformDown from '../.././assets/skaterider/1/plateform-down.jpg';
import stairsGrind from '../.././assets/skaterider/1/stairs-grind.jpg';
import configStairs from '../.././assets/skaterider/1/config-stairs.jpg';
import configLowWall from '../.././assets/skaterider/1/config-low-wall.jpg';
import configSimulate from '../.././assets/skaterider/1/config-simulate.jpg';
import configLevelOne from '../.././assets/skaterider/1/config-level-1.jpg';
import configLevelTwo from '../.././assets/skaterider/1/config-level-2.jpg';
import configLevel3D from '../.././assets/skaterider/1/config-level-3d.jpg';
import skateBoost from '../.././assets/skaterider/1/skate-boos.jpg';
import skateGrind from '../.././assets/skaterider/1/skate-grind.jpg';
import skateJump from '../.././assets/skaterider/1/skate-jump.jpg';

import fiftyfifty from '../.././assets/skaterider/2/50-50.jpg';
import darkSlide from '../.././assets/skaterider/2/darkslide.jpg';
import doubleHeelFlip from '../.././assets/skaterider/2/double-heel-flip.jpg';
import frontside360Flip from '../.././assets/skaterider/2/frontside-360-flip.jpg';
import gameOver from '../.././assets/skaterider/2/game-over.jpg';
import skateRiderJumping from '../.././assets/skaterider/2/skate-rider-jumping.jpg';
import trickFront from '../.././assets/skaterider/2/trick-front.jpg';
import skateSpeed from '../.././assets/skaterider/2/skate-rider-speed.jpg';

import customables from '../.././assets/skaterider/3/customables.jpg';
import skateNoCustom from '../.././assets/skaterider/3/skatez-no-custom.jpg';
import skateYesCustom from '../.././assets/skaterider/3/skate-yes-custom.jpg';
import lootbox from '../.././assets/skaterider/3/lootbox.jpg';
import youWon from '../.././assets/skaterider/3/you-won.jpg';
import applyWon from '../.././assets/skaterider/3/apply-won.jpg';
import duplicates from '../.././assets/skaterider/3/duplicate.jpg';
import shop from '../.././assets/skaterider/3/shop.jpg';

import dezoomOne from '../.././assets/skaterider/4/dezoom-1.jpg';
import dezoomTwo from '../.././assets/skaterider/4/dezoom-2.jpg';
import configLevel from '../.././assets/skaterider/4/config-level.jpg';
import skateIcon from '../.././assets/skaterider/4/skate-icon.jpg';
import frontView from '../.././assets/skaterider/4/front-view.jpg';
import bigJumpTwo from '../.././assets/skaterider/4/big-jump-2.jpg';
import bigJumpOne from '../.././assets/skaterider/4/big-jump.jpg';
import grinding from '../.././assets/skaterider/4/grinding.jpg';
import fancyLand from '../.././assets/skaterider/4/fancy-land.jpg';
import jumpBeta from '../.././assets/skaterider/4/jump-beta.jpg';
import displayCollider from '../.././assets/skaterider/4/display-collider.jpg';

import UnityLogo from '../../assets/tools/unity.png';
import CLogo from '../../assets/tools/c.png';
import VsLogo from '../../assets/tools/vscode.png';
import FigmaLogo from '../../assets/tools/figma.png';
import TrelloLogo from '../../assets/tools/trello.png';

export const SkateRider = () => {
  const skateriderConfig = {
    texts: [
      {
        title: 'Un skatepark à bloc',
        paragraph: (
          <>
            Le terrain se génère de manière aléatoire et est divisé en blocs qui
            se succèdent les uns après les autres, créant ainsi un enchainement
            unique.
            <br />
            <br />
            J'ai cherché à trouver le mélange parfait entre difficulté et
            plaisir pour créer un terrain attrayant. J'ai donc décidé que les
            actions du joueur influencent la génération du terrain.
            <br />
            <br /> Lorsque le joueur saute, des zones de sureté sont générées à
            son atterrissage. Mais après chaque zone de sureté, des blocs
            faisant obstacle peuvent survenir et ainsi de suite...
          </>
        ),
        images: [
          { src: grindRamp, width: 580, height: 580 },
          { src: plainPlatformEnd, width: 582, height: 585 },
          { src: plainWood, width: 583, height: 580 },
          { src: plateformDown, width: 578, height: 580 },
          { src: stairsGrind, width: 577, height: 578 },
          { src: configStairs, width: 1598, height: 897 },
          { src: configLowWall, width: 1599, height: 900 },
          { src: configSimulate, width: 1629, height: 925 },
          { src: configLevelOne, width: 1593, height: 479 },
          { src: configLevelTwo, width: 1597, height: 493 },
          { src: configLevel3D, width: 1575, height: 1120 },
          { src: skateBoost, width: 828, height: 1792 },
          { src: skateGrind, width: 828, height: 1792 },
          { src: skateJump, width: 828, height: 1792 },
        ],
      },
      {
        title: 'Un gameplay comme sur des roulettes',
        paragraph: (
          <>
            Je voulais créer une mécanique de jeu la plus fluide possible. Pour
            y parvenir, j’ai dû traiter beaucoup d’informations, en voici
            quelques exemples :<br />
            <ul>
              <li>
                Connaître l’inclinaison du terrain est essentiel pour déterminer
                dans quelle direction la planche doit aller.
              </li>
              <li>
                Calculer la rotation de la planche permet de distinguer si le
                joueur réalise une figure ou s’il subit un accident.
              </li>
              <li>
                Considérer l'environnement (en l’air, sur le sol, en glissade)
                sert à varier les propriétés physiques de la planche
              </li>
            </ul>
          </>
        ),
        images: [
          { src: fiftyfifty, width: 1234, height: 2671 },
          { src: darkSlide, width: 1242, height: 2688 },
          { src: doubleHeelFlip, width: 1242, height: 2688 },
          { src: frontside360Flip, width: 1242, height: 2688 },
          { src: skateSpeed, width: 1242, height: 2688 },
          { src: gameOver, width: 1242, height: 2688 },
          { src: skateRiderJumping, width: 1235, height: 2673 },
          { src: trickFront, width: 1346, height: 2688 },
        ],
      },
      {
        title: 'Une personnalisation aux petits boulons',
        paragraph: (
          <>
            Pour gagner la fidélité des joueurs j'ai intégré une économie dans
            le jeu. Au cours de sa session de jeu, le joueur collecte des
            boulons (la monnaie d'échange) à travers le niveau.
            <br />
            <br />
            Il peut ensuite les utiliser pour personnaliser sa planche. Il peut
            choisir d’acheter directement ses éléments préférés ou de tenter sa
            chance avec un coffre à butin.
          </>
        ),
        images: [
          { src: customables, width: 2022, height: 2689 },
          { src: skateNoCustom, width: 1242, height: 2688 },
          { src: skateYesCustom, width: 1368, height: 2690 },
          { src: lootbox, width: 1242, height: 2688 },
          { src: youWon, width: 1234, height: 2671 },
          { src: applyWon, width: 1238, height: 2679 },
          { src: duplicates, width: 1225, height: 2651 },
          { src: shop, width: 1234, height: 2671 },
        ],
      },
      {
        title: 'Plus de ressources',
        images: [
          { src: dezoomOne, width: 1480, height: 1114 },
          { src: dezoomTwo, width: 2853, height: 1752 },
          { src: configLevel, width: 1137, height: 1114 },
          { src: skateIcon, width: 1024, height: 1024 },
          { src: frontView, width: 1242, height: 2688 },
          { src: bigJumpOne, width: 1116, height: 2248 },
          { src: bigJumpTwo, width: 1242, height: 2688 },
          { src: grinding, width: 1102, height: 2188 },
          { src: fancyLand, width: 1068, height: 2127 },
          { src: jumpBeta, width: 1068, height: 1910 },
          { src: displayCollider, width: 1060, height: 2127 },
        ],
      },
    ],
    presentation: {
      images: [
        { src: banner, width: 631, height: 450 },
        { src: homeScreen, width: 512, height: 1011 },
      ],
      title: 'Skate Rider',
      description:
        'Dans ce jeu vidéo mêlant plateformes infinies et planche de skate, le joueur doit survivre le plus longtemps possible et réaliser des figures afin de réaliser le meilleur score.',
      tags: {
        tools: [
          { label: 'Unity', icon: UnityLogo },
          { label: 'C#', icon: CLogo },
          { label: 'VS Code', icon: VsLogo },
          { label: 'Figma', icon: FigmaLogo },
          { label: 'Trello', icon: TrelloLogo },
        ],
        roles: [
          { label: 'Développeur Gameplay' },
          { label: 'Designer de niveau' },
          { label: 'Créateur' },
        ],
      },
      links: [
        {
          label: 'Télécharger',
          link: '/download/skate-rider',
        },
        {
          label: 'Voir le code source',
          link: 'https://github.com/WakkoStar/SkateRider',
        },
      ],
    },
  };

  return <ProjectWrapper {...skateriderConfig} />;
};
