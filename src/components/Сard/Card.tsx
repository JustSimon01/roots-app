import { FunctionComponent } from 'react';
import styles from './Card.module.css';

interface CardProps {
  readonly img: string;
  name?: string;
}

const Card: FunctionComponent<CardProps> = ({ img, name }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} />
      <h3 className={styles.name}>{name}</h3>
    </div>
  );
};

export default Card;
