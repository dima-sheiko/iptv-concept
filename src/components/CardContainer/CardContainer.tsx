import { Item } from '../../types/types';
import { Card } from '../Card/Card';
import Carousel from 'nuka-carousel';
import styles from './CardContainer.module.css';
import './SliderStyles.css';

interface CardContainerProps {
  content: Item[];
  error: string;
}

export const CardContainer = ({ content, error }: CardContainerProps) => {
  const sliderKey = () => content.length;

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
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Carousel>
    </div>
  );
};
