import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

import darkArrow from '../../assets/icons/arrow-side-dark.png';
import { HorizontalScrollWrapper } from '../HorizontalScrollWrapper';
import { ImageWithLoading } from '../ImageWithLoading';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export interface ProjectWrapperProps {
  presentation: {
    tags: {
      tools: { icon?: string; label: string }[];
      roles: { icon?: string; label: string }[];
    };
    title: string;
    description: string;
    links: { label: string; link: string }[];
    images: { src: string; width: number; height: number }[];
  };
  texts: {
    title: ReactNode | string;
    paragraph?: ReactNode | string;
    images: { src: string; width: number; height: number }[];
  }[];
}

export const ProjectWrapper: React.FC<ProjectWrapperProps> = ({
  presentation: { tags, title, description, images: imagesPresentation, links },
  texts,
}) => {
  const isSmallDevice = useMediaQuery('(max-width: 1023px)');

  useGSAP(() => {
    gsap.from('.project-container', {
      opacity: 0,
      xPercent: 20,
      duration: 0.8,
      ease: 'power3.inOut',
    });
    gsap.to('.project', {
      backgroundColor: '#fefaec',
      duration: 0.5,
      delay: 0.8,
    });
    //@ts-expect-error null
  }, null);

  const navigate = useNavigate();

  const handleBack = () => {
    gsap.to('.project-container', {
      opacity: 0,
      xPercent: 20,
      duration: 0.8,
      ease: 'power3.inOut',
    });

    setTimeout(
      () => {
        navigate('/');
      },
      isSmallDevice ? 500 : 1300
    );

    if (isSmallDevice) return;

    gsap.to('.project', {
      backgroundColor: 'black',
      duration: 0.5,
      delay: 0.8,
    });
  };

  return (
    <div className="project">
      <div className="project-container">
        <button className="back-btn" onClick={handleBack}>
          <img src={darkArrow} />
        </button>
        <div className="project-presentation">
          <div className="presentation-texts">
            <div className="texts-header">
              <div className="header-texts">
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
              <div className="header-tags">
                <div className="tag-container">
                  <p className="label">Outils</p>
                  <div className="tag-wrapper">
                    {tags.tools.map((tag, index) => (
                      <div className="tag-item tools" key={index}>
                        {!!tag.icon && <img src={tag.icon} />}
                        <p>{tag.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tag-container">
                  <p className="label">Rôles</p>
                  <div className="tag-wrapper">
                    {tags.roles.map((tag, index) => (
                      <div className="tag-item roles" key={index}>
                        {!!tag.icon && <img src={tag.icon} />}
                        <p>{tag.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <HorizontalScrollWrapper className="texts-buttons">
              {links.map((link, index) => (
                <button onClick={() => window.open(link.link)} key={index}>
                  <p>{link.label}</p>
                </button>
              ))}
            </HorizontalScrollWrapper>
          </div>
          <HorizontalScrollWrapper
            className="presentation-images"
            id="presentation"
            containerClassName="presentation-images-container"
          >
            {imagesPresentation.map((image, index) => (
              <ImageWithLoading
                containerId="presentation"
                {...image}
                key={index}
              />
            ))}
          </HorizontalScrollWrapper>
        </div>
        {texts.map(({ title, paragraph, images }, index) => (
          <div className="project-section" key={index}>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <HorizontalScrollWrapper
              containerClassName="section-images-container"
              className="section-images"
              id={`section-${index}`}
            >
              {images.map((image, subIndex) => (
                <ImageWithLoading
                  containerId={`section-${index}`}
                  {...image}
                  key={subIndex}
                />
              ))}
            </HorizontalScrollWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};
