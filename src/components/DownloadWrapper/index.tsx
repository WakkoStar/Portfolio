import { useGSAP } from '@gsap/react';
import './style.css';
import gsap from 'gsap';

interface DownloadWrapperProps {
  title: string;
  backgroundColor: string;
  icon: string;
  links: {
    appStore?: string;
    googlePlay?: string;
  };
}

export const DownloadWrapper: React.FC<DownloadWrapperProps> = ({
  title,
  backgroundColor,
  icon,
  links,
}) => {
  useGSAP(() => {
    gsap.from('.download > h1', {
      y: -20,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      delay: 0.5,
    });
    gsap.from('.download > img', {
      y: -20,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      delay: 0.6,
    });
    gsap.from('.download-buttons', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      delay: 0.8,
    });
    //@ts-expect-error null
  }, null);
  return (
    <div className="download" style={{ backgroundColor }}>
      <h1 className="">{title}</h1>
      <img src={icon} />
      <div className="download-buttons">
        {!!links.appStore && (
          <button onClick={() => window.open(links.appStore)}>
            <p>Obtenir sur l'App Store</p>
          </button>
        )}
        {!!links.googlePlay && (
          <button onClick={() => window.open(links.googlePlay)}>
            <p>Obtenir sur Google Play</p>
          </button>
        )}
      </div>
    </div>
  );
};
