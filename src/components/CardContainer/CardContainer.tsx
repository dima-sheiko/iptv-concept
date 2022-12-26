import { Item } from '../../types/IData';
import { Card } from '../Card/Card';
import { nanoid } from 'nanoid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.css';

interface CardContainerProps {
  content: Item[];
}

export const CardContainer = ({ content }: CardContainerProps) => {
  return (
    // TS interface errors in development mode is a known Swiper bug
    <Swiper slidesPerView={4}>
      {content.map(item => (
        <SwiperSlide key={nanoid()}>
          <Card item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
