import { ProjectWrapper } from '../../components/ProjectWrapper';

import assessmentResult from '../../assets/nutripoint/0/assessment-homepage.jpg';
import resultMobile from '../../assets/nutripoint/0/result-mobile.jpg';

import quizPlate from '../../assets/nutripoint/1/quiz-plate.jpg';
import quizAvatar from '../../assets/nutripoint/1/quiz-avatar.jpg';
import quizAllergies from '../../assets/nutripoint/1/quiz-allergies.jpg';
import quizComplements from '../../assets/nutripoint/1/quiz-complements.jpg';
import quizWaiting from '../../assets/nutripoint/1/quiz-waiting.jpg';
import resultSynthesis from '../../assets/nutripoint/1/result-synthesis.jpg';
import resultPlate from '../../assets/nutripoint/1/result-plate.jpg';

import resultPack from '../../assets/nutripoint/2/result-pack-1.jpg';
import resultSeeMore from '../../assets/nutripoint/2/result-pack.jpg';
import products from '../../assets/nutripoint/2/products.jpg';
import productDetails from '../../assets/nutripoint/2/product-details.jpg';
import productCart from '../../assets/nutripoint/2/product-cart.jpg';

import resultTablet from '../../assets/nutripoint/3/result-tablet.jpg';
import resultPhone from '../../assets/nutripoint/3/result-phone.jpg';
import productTablet from '../../assets/nutripoint/3/product-tablet.jpg';
import productPhone from '../../assets/nutripoint/3/product-phone.jpg';
import productNeedsPhone from '../../assets/nutripoint/3/product-needs-phone.jpg';
import detailTablet from '../../assets/nutripoint/3/details-tablet.jpg';
import detailPhone from '../../assets/nutripoint/3/details-phone.jpg';
import detailNeedsPhone from '../../assets/nutripoint/3/details-needs-phone.jpg';

import homePage from '../../assets/nutripoint/4/homepage.jpg';
import homePageFooter from '../../assets/nutripoint/4/homepage-footer.jpg';
import homePageTablet from '../../assets/nutripoint/4/homepage-tablet.jpg';
import homePageMobile from '../../assets/nutripoint/4/homepage-mobile.jpg';
import myResult from '../../assets/nutripoint/4/my-result.jpg';
import nutriGuide from '../../assets/nutripoint/4/nutri-guide.jpg';
import resultPhoneOne from '../../assets/nutripoint/4/result-phone-1.jpg';
import resultPhoneTwo from '../../assets/nutripoint/4/result-phone-2.jpg';
import resultTabletOne from '../../assets/nutripoint/4/result-tablet-1.jpg';
import resultTabletTwo from '../../assets/nutripoint/4/result-tablet-2.jpg';
import quizAvatarTwo from '../../assets/nutripoint/4/quiz-avatar.jpg';
import quizPhone from '../../assets/nutripoint/4/quiz-phone.jpg';
import quizTablet from '../../assets/nutripoint/4/quiz-tablet.jpg';
import scientificPopup from '../../assets/nutripoint/4/scientific-popup.jpg';

import ReactLogo from '../../assets/tools/react.png';
import TSLogo from '../../assets/tools/ts.png';
import VsLogo from '../../assets/tools/vscode.png';
import FigmaLogo from '../../assets/tools/figma.png';
import NotionLogo from '../../assets/tools/notion.png';

export const Nutripoint = () => {
  const nutripointConfig = {
    texts: [
      {
        title: 'Et concrètement ?',
        paragraph: (
          <>
            L’application web propose d’effectuer un questionnaire.
            L’utilisateur fournit ses informations telles que ses inconforts,
            son genre, sa taille, son alimentation, etc.
            <br />
            <br /> Il pourra ensuite consulter ses résultats, tels que ses
            carences, ses actifs recommandés, son régime alimentaire, ainsi que
            les meilleurs produits pour lui.
          </>
        ),
        images: [
          { src: quizPlate, width: 1900, height: 1069 },
          { src: quizAvatar, width: 1900, height: 1070 },
          { src: quizAllergies, width: 1900, height: 1069 },
          { src: quizComplements, width: 1900, height: 1071 },
          { src: quizWaiting, width: 1900, height: 1070 },
          { src: resultSynthesis, width: 1900, height: 1070 },
          { src: resultPlate, width: 1900, height: 1069 },
        ],
      },
      {
        title: (
          <>
            Un mix entre recommandations <br />
            et site e-commerce
          </>
        ),
        paragraph: (
          <>
            La valeur ajoutée de Nutripoint par rapport aux autres sites
            e-commerce est de proposer des recommandations personnalisées
            complètes. <br />
            <br />
            J'ai longuement réfléchi sur la manière d'afficher sur chaque page
            les meilleurs produits, sans surcharger d’informations. Mon objectif
            est que l’expérience soit sans frictions, lors de nouvelles
            recommandations.
          </>
        ),
        images: [
          { src: resultPack, width: 1900, height: 1235 },
          { src: resultSeeMore, width: 1900, height: 1234 },
          { src: products, width: 1900, height: 1400 },
          { src: productDetails, width: 1900, height: 1241 },
          { src: productCart, width: 1900, height: 1070 },
        ],
      },
      {
        title: (
          <>
            Beaucoup d’informations <br />
            pour un si petit écran
          </>
        ),
        paragraph: (
          <>
            Les besoins personnels de l’utilisateur sont la plus-value de
            Nutripoint. La présence constante de ces informations était requise.
            Le problème, c’est qu’elles représentent beaucoup de données à
            afficher et à comprendre.
            <br />
            <br />
            Assurer la lisibilité sur tout écran et toute page a été l’une de
            mes principales problématiques.
          </>
        ),
        images: [
          { src: resultTablet, width: 1900, height: 2895 },
          { src: resultPhone, width: 1900, height: 4223 },
          { src: productTablet, width: 1900, height: 2894 },
          { src: productPhone, width: 1900, height: 4239 },
          { src: productNeedsPhone, width: 1900, height: 4239 },
          { src: detailTablet, width: 1900, height: 2894 },
          { src: detailPhone, width: 1900, height: 4223 },
          { src: detailNeedsPhone, width: 1900, height: 4223 },
        ],
      },
      {
        title: 'Plus de ressources',
        images: [
          { src: homePage, width: 1900, height: 1070 },
          { src: homePageFooter, width: 1900, height: 1070 },
          { src: homePageMobile, width: 1900, height: 4112 },
          { src: homePageTablet, width: 1900, height: 2751 },
          { src: myResult, width: 1900, height: 1069 },
          { src: resultPhoneOne, width: 1900, height: 4133 },
          { src: resultPhoneTwo, width: 1900, height: 4115 },
          { src: resultTabletOne, width: 1900, height: 2752 },
          { src: resultTabletTwo, width: 1900, height: 2755 },
          { src: nutriGuide, width: 1900, height: 1069 },
          { src: quizAvatarTwo, width: 1900, height: 1071 },
          { src: quizPhone, width: 1900, height: 4135 },
          { src: quizTablet, width: 1900, height: 2731 },
          { src: scientificPopup, width: 1900, height: 1070 },
        ],
      },
    ],
    presentation: {
      images: [
        { src: assessmentResult, width: 800, height: 450 },
        { src: resultMobile, width: 563, height: 1001 },
      ],
      title: 'Nutripoint',
      description:
        'Solution de recommandation de compléments alimentaires visant à soulager ses inconforts et combler ses carences nutritionnelles.',
      tags: {
        tools: [
          { label: 'React', icon: ReactLogo },
          { label: 'Typescript', icon: TSLogo },
          { label: 'VS Code', icon: VsLogo },
          { label: 'Figma', icon: FigmaLogo },
          { label: 'Notion', icon: NotionLogo },
        ],
        roles: [
          { label: 'Développeur web front' },
          { label: 'Designer UI/UX' },
          { label: 'Product owner' },
        ],
      },
      links: [
        {
          label: 'Commencer un bilan',
          link: 'https://nutripoint.io/assessments/b2cfbd2b-1375-4e4d-8e0f-f2dcb95d9843',
        },
      ],
    },
  };

  return <ProjectWrapper {...nutripointConfig} />;
};
