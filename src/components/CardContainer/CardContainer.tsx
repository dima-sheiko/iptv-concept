import { Item } from '../../types/IData';
import { Card } from '../Card/Card';
import { nanoid } from 'nanoid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.css';

interface CardContainerProps {
  content: Item[];
  error: string;
}

export const CardContainer = ({ content, error }: CardContainerProps) => {
  return (
    <>
      {error && alert(error)}
      {/* TS interface errors in development mode is a known Swiper bug with React 18 */}
      <Swiper slidesPerView={4}>
        {content.map(item => (
          <SwiperSlide key={nanoid()}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
