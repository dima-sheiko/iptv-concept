import { useState, useEffect } from 'react';
import styles from './Background.module.css';

interface BackgroundProps {
  backgrounds: string[];
}

export const Background = ({ backgrounds }: BackgroundProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === backgrounds.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <>
      {currentIndex === 0 && (
        <div
          className={styles.bg}
          style={{
            backgroundImage: `url(${backgrounds[0]})`,
          }}
        ></div>
      )}

      {currentIndex === 1 && (
        <div
          className={styles.bg}
          style={{
            backgroundImage: `url(${backgrounds[1]})`,
          }}
        ></div>
      )}
    </>
  );
};