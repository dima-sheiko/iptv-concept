import { useState } from 'react';
import { Item } from '../../types/types';
import styles from './Card.module.css';

interface CardProps {
  item: Item;
}

export const Card = ({ item }: CardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const { country, genres, imdb_rate, keyframe, length, min_age, num_seasons, poster, title, year, is_new } = item;
  const genre = [...genres.join(', ')];

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.head} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isHovering && <img className={styles.image_hovered} src={keyframe} alt='movie poster' />}
        {!isHovering && (
          <>
            <img className={styles.image} src={poster} alt='movie poster' />{' '}
            <div className={styles.labels}>
              {is_new && <p className={styles.new}>New On NetUP TV</p>}
              <p className={styles.rating}>
                IMDB <b>{`${imdb_rate}/10`}</b>
              </p>
            </div>
          </>
        )}
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.specs}>{`${country} | ${year} | ${
          length / 60
        } min | ${num_seasons} seasons | ${min_age}+`}</p>
        <p className={styles.genres}>{genre}</p>
      </div>
    </div>
  );
};
