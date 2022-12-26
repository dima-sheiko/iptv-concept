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
      {/* Ошибки interface в dev режиме - баг с React 18, который пока не починили. Можно убрать с @ts-nocheck */}
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
