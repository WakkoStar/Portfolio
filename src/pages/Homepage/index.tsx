import { useNavigate } from 'react-router-dom';

import homepageVideo from '../../assets/homepage/homepage-vid.mp4';
import darkArrow from '../../assets/icons/arrow-side-dark.png';

import CV from '../../assets/homepage/cv freelance - web front.pdf';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useGSAP } from '@gsap/react';
import { ButtonWithInfo } from '../../components/ButtonWithInfo';
import { HorizontalScrollWrapper } from '../../components/HorizontalScrollWrapper';

import './style.css';
import gsap from 'gsap';
import { useRef } from 'react';

export const Homepage = () => {
  const roleRef = useRef();

  const navigate = useNavigate();
  const isSmallDevice = useMediaQuery('(max-width: 1023px)');
  const handleNavigate = (url: string) => {
    gsap.to('.homepage-texts', {
      xPercent: -100,
      opacity: 0,
      ease: 'power3.inOut',
      duration: 0.8,
    });
    gsap.to('.homepage-image', {
      opacity: 0,
      xPercent: 30,
      delay: 0.2,
      ease: 'power3.inOut',
      duration: 0.8,
    });
    gsap.set('.homepage', {
      backgroundColor: '#fefaec',
    });
    setTimeout(
      () => {
        navigate(url);
      },
      isSmallDevice ? 500 : 1000
    );
  };

  useGSAP(() => {
    if (isSmallDevice) {
      gsap.from('.homepage-texts', {
        yPercent: 100,
        opacity: 0,
        delay: 0,
        ease: 'power3.out',
        duration: 0.5,
      });
      gsap.from('.header-title', {
        opacity: 0,
        delay: 0.2,
        duration: 0.3,
      });

      gsap.from('.texts-about', {
        opacity: 0,
        y: 100,
        delay: 0.3,
        duration: 0.3,
      });
      gsap.from('.texts-buttons', {
        x: -100,
        opacity: 0,
        delay: 0.4,
        duration: 0.3,
      });

      return;
    }

    gsap.from('.homepage-image', {
      opacity: 0,
      delay: 2,
      duration: 1,
    });
    gsap.from('.homepage-texts', {
      xPercent: -100,
      opacity: 0,
      delay: 1,
      ease: 'power3.out',
      duration: 0.5,
    });
    gsap.from('.header-title', {
      opacity: 0,
      delay: 1.5,
      duration: 0.3,
    });

    gsap.from('.texts-about', {
      opacity: 0,
      y: 100,
      delay: 2,
      duration: 0.3,
    });

    gsap.from('.texts-buttons', {
      x: -100,
      opacity: 0,
      delay: 2.2,
      duration: 0.3,
    });

    gsap.from('.texts-buttons > button', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 2.3,
      ease: 'elastic.out(1,0.5)',
      stagger: 0.1,
    });
    //@ts-expect-error null
  }, null);

  useGSAP(() => {
    gsap.from('.role-item', {
      x: 100,
      opacity: 0,
      delay: isSmallDevice ? 0.3 : 1.5,
      ease: 'power3.inOut',
      stagger: 0.1, // 0.1 seconds between when each ".box" element starts animating
    });
  }, [{ scope: roleRef }]);

  return (
    <div className="homepage">
      <div className="homepage-texts">
        <div className="texts-container">
          <div className="texts-header">
            <h1 className="header-title">
              Hugo <br className="mobile-only" /> DEL PIA
            </h1>
            <div className="roles-wrapper" ref={roleRef as any}>
              <p className="web role-item">Développeur web</p>
              <p className="et role-item">&</p>
              <p className="ui-ux role-item">Designer UI/UX</p>
            </div>
          </div>
          <p className="texts-about">
            Montpelliérain, né dans la ville du melon, aime le soleil.
            <br />
            <br />
            Je suis développeur et designer UI/UX, je conçois des applications
            web dans l’objectif de créer la meilleure expérience sur votre
            écran.
            <br />
            <br />
            Mes outils préférés sont React et Figma, j’ai 4 ans d’expérience
            dans le milieu.
          </p>
          <HorizontalScrollWrapper
            className="texts-buttons"
            containerClassName="texts-buttons-container"
          >
            <ButtonWithInfo
              infos={[
                {
                  label: '💊 Nutripoint',
                  onClick: () => handleNavigate('/nutripoint'),
                },
                {
                  label: '🛹 Skate Rider',
                  onClick: () => handleNavigate('/skate-rider'),
                },
                {
                  label: '🪐 Universalis',
                  onClick: () => handleNavigate('/universalis'),
                },
              ]}
            >
              <p>Découvrir projets</p>
              <img src={darkArrow} />
            </ButtonWithInfo>
            <button onClick={() => window.open(CV)}>
              <p>Consulter CV</p>
            </button>
            <ButtonWithInfo
              infos={[
                {
                  label: '🗯️ Linkedin',
                  onClick: () => {
                    window.open('https://www.linkedin.com/in/hugo-del-pia/');
                  },
                },
                {
                  label: '🎯 Malt',
                  onClick: () => {
                    window.open('https://www.malt.fr/profile/hugodelpia');
                  },
                },
                {
                  label: '🎵 Tiktok',
                  onClick: () => {
                    window.open('https://www.tiktok.com/@blacephalone');
                  },
                },
              ]}
            >
              <p>Me contacter</p>
              <img src={darkArrow} />
            </ButtonWithInfo>
          </HorizontalScrollWrapper>
        </div>
      </div>
      {!isSmallDevice && (
        <div className="homepage-image">
          <video src={homepageVideo} loop muted autoPlay />
        </div>
      )}
    </div>
  );
};
//TODO retravailler CV
//TODO se rendre dispo sur malt
//TODO faire un post avec vidéo portfolio sur linkedin
//TODO démarrer un plan d'action pour obtenir du prospect et bonne pratiques
