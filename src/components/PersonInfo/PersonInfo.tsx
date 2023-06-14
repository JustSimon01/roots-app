import { FunctionComponent } from 'react';
import styles from './PersonInfo.module.css';
import { useParams } from 'react-router-dom';
import db from '../../temp/bd.json';

// interface IPerson {
//   person: {
//     name: string;
//     dateOfBirth: string;
//     about: string;
//     photo: string;
//   };
// }

const PersonInfo: FunctionComponent = () => {
  const { id } = useParams();
  const person = db.find((item) => item._id === id);
  return (
    <>
      {person && (
        <div className={styles.PersonInfoBlock}>
          <img className={styles.photo} src={person.photo} alt="Фотография [Имя Фамилия]" />
          <h2 className={styles.title}>{person.name}</h2>
          <p className={styles.subtitle}>{person.dateOfBirth}</p>
          <p className={styles.paragraph}>{person.about}</p>
          <h2 className={styles.title}>Фотографии</h2>
          <div className={styles.album}></div>
        </div>
      )}
    </>
  );
};

export default PersonInfo;
