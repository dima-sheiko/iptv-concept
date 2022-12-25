import { Item } from '../../types/IData';
import { Card } from '../Card/Card';
import styles from './CardContainer.module.css';

interface CardContainerProps {
  content: Item[];
}

export const CardContainer = ({ content }: CardContainerProps) => {
  return (
    <div>
      {content.map(item => (
        <Card item={item} />
      ))}
    </div>
  );
};
