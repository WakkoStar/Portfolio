import { ReactNode, useEffect } from 'react';

import arrowIcon from '../../assets/icons/arrow-side-white.png';

import './style.css';
import useScrollable from '../../hooks/useScrollable';

interface HorizontalScrollWrapperProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  gradientColor?: string;
  id?: string;
}

export const HorizontalScrollWrapper: React.FC<
  HorizontalScrollWrapperProps
> = ({
  children,
  className = '',
  containerClassName = '',
  id = '',
  gradientColor = '#FEFAEC',
}) => {
  const { isScrollable, ref, scrollStatus, setScroll, refreshScroll } =
    useScrollable('horizontal');

  const scrollGradientLeftStyle = {
    background: `linear-gradient(to left, transparent, ${gradientColor})`,
    opacity: scrollStatus.isBegin || !isScrollable ? '0' : '1',
  };

  const scrollGradientRightStyle = {
    background: `linear-gradient(to right, transparent, ${gradientColor})`,
    opacity: scrollStatus.isEnd || !isScrollable ? '0' : '1',
  };

  useEffect(() => {
    refreshScroll();
    setScroll(-2000);
  }, [children]);

  return (
    <div
      className={`horizontal-scroll-container ${containerClassName} ${
        isScrollable ? 'scrollable' : ''
      }`}
    >
      <div className="scroll-gradient left" style={scrollGradientLeftStyle} />
      <div
        className={`scroll-arrow left ${
          !scrollStatus.isBegin ? 'display' : ''
        }`}
        onClick={() => setScroll(-0.8)}
      >
        <img src={arrowIcon} />
      </div>
      <div className="scroll-gradient right" style={scrollGradientRightStyle} />
      <div
        className={`scroll-arrow right ${!scrollStatus.isEnd ? 'display' : ''}`}
        onClick={() => setScroll(0.8)}
      >
        <img src={arrowIcon} />
      </div>
      <div
        ref={ref}
        className={`horizontal-scroll-wrapper ${className}`}
        id={id}
      >
        {children}
      </div>
    </div>
  );
};
