import { Item } from '../../types/types';
import { Card } from '../Card/Card';
import { nanoid } from 'nanoid';
import Carousel from 'nuka-carousel';
import styles from './CardContainer.module.css';
import './SliderStyles.css';
import { useMemo } from 'react';

interface CardContainerProps {
  content: Item[];
  error: string;
}

export const CardContainer = ({ content, error }: CardContainerProps) => {
  const sliderKey = useMemo(() => content.length, [content]);

  if (error) {
    alert(error);
  }

  return (
    <div className={styles.container}>
      <Carousel
        key={`slider-${sliderKey}`}
        className='MainSlider'
        slidesToShow={5}
        cellSpacing={16}
        withoutControls
        enableKeyboardControls
      >
        {content.map(item => (
          <Card key={nanoid()} item={item} />
        ))}
      </Carousel>
    </div>
  );
};
