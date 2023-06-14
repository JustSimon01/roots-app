import { FunctionComponent } from 'react';
import styles from './Card.module.css';
import { Link, useLocation } from 'react-router-dom';

interface CardProps {
  _id: string;
  photo: string;
  name?: string;
}

const Card: FunctionComponent<CardProps> = ({ photo, name, _id }) => {
  const location = useLocation();

  return (
    <Link to={`/person/${_id}`} state={{ background: location }}>
      <div className={styles.card}>
        <img className={styles.img} src={photo} />
        <h3 className={styles.name}>{name}</h3>
      </div>
    </Link>
  );
};

export default Card;
