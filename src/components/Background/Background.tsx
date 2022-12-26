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
    <div className={styles.wrapper}>
      <div className={styles.line}></div>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(${backgrounds[currentIndex]})`,
        }}
      ></div>
    </div>
  );
};
