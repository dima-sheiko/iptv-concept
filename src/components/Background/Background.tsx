import { useState, useEffect, useMemo } from 'react';
import { IURL } from '../../types/types';
import styles from './Background.module.css';

interface BackgroundProps {
  backgrounds: IURL[];
}

export const Background = ({ backgrounds }: BackgroundProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const background = useMemo(() => backgrounds.map(item => item.url), [backgrounds]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === background.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div
      className={styles.bg}
      style={{
        backgroundImage: `url(${background[currentIndex]})`,
      }}
    />
  );
};
