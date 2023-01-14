import { useState, useEffect, useMemo } from 'react';
import { IURL } from '../../types/types';
import styles from './Background.module.css';

interface BackgroundProps {
  backgrounds: IURL[];
}

export const Background = ({ backgrounds }: BackgroundProps) => {
  const [activeImage, setActiveImage] = useState(0);

  const images = useMemo(() => backgrounds.map(item => item.url), [backgrounds]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (images.length > 0) {
      intervalId = setInterval(() => {
        setActiveImage((activeImage + 1) % images.length);
      }, 5000);
    }

    return () => clearInterval(intervalId);
  }, [activeImage, images]);

  return (
    <>
      {images.map((image, index) => (
        <div
          key={index}
          className={`
                    ${styles.backgroundItem}
                    ${activeImage === index ? styles.active : ''}
                 `}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </>
  );
};
