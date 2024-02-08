import { ImgHTMLAttributes, useEffect, useLayoutEffect, useState } from 'react';

import './style.css';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export interface ImageWithLoadingProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  containerId: string;
}

export const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({
  containerId,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(0);

  const isMobile = useMediaQuery('(max-width: 767px');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const sizeProp = isMobile ? 'width' : 'height';

  const padding = isMobile ? 0 : 20;

  useLayoutEffect(() => {
    const listener = () => {
      setScale(
        ((document.getElementById(containerId)?.getBoundingClientRect()[
          sizeProp
        ] || 0) -
          padding) /
          +(props[sizeProp] || 0)
      );
    };

    listener();
    document.getElementById(containerId)?.addEventListener('resize', listener);

    return () => {
      document
        .getElementById(containerId)
        ?.removeEventListener('resize', listener);
    };
  }, [
    document.getElementById(containerId)?.getBoundingClientRect()[sizeProp] ||
      0,
    isPortrait,
  ]);

  useEffect(() => {
    const image = new Image();
    image.src = props.src || '';
    image.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    };
  }, [props.src]);

  return (
    <div
      className="image-wrapper"
      style={{
        height: `${isMobile ? `${+(props.height || 0) * scale}px` : '100%'}`,
        width: `${isMobile ? '100%' : `${+(props.width || 0) * scale}px`}`,
      }}
    >
      <div className={`image-loader ${isLoading ? '' : 'hidden'}`} />
      <img {...props} />
    </div>
  );
};
