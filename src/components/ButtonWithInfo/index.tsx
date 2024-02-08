import React, { ReactNode, useRef, useState } from 'react';

import whiteArrow from '../../assets/icons/arrow-side-white.png';

import './style.css';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

interface ButtonWithInfoProps {
  className?: string;
  children: ReactNode;
  infos: { label: string; onClick: () => void }[];
}

export const ButtonWithInfo: React.FC<ButtonWithInfoProps> = ({
  className = '',
  children,
  infos,
}) => {
  const [displayInfo, setDisplayInfo] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setDisplayInfo(false));

  return (
    <>
      <button
        ref={ref}
        className={className}
        onClick={() => setDisplayInfo(!displayInfo)}
      >
        <>
          <div className={`info-display ${displayInfo ? '' : 'hidden'}`}>
            {infos.map((info, index) => (
              <div key={index} className="info-item" onClick={info.onClick}>
                <p>{info.label}</p>
                <img src={whiteArrow} />
              </div>
            ))}
          </div>
          {children}
        </>
      </button>
    </>
  );
};
