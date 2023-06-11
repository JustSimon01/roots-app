import { FunctionComponent } from 'react';
import styles from './PersonInfo.module.css';

interface PersonInfoProps {
  name: string | 'Имя Фамилия Отчество';
  dateOfBirth: string;
  about: string;
  photo: string;
}

const PersonInfo: FunctionComponent<PersonInfoProps> = ({ name, dateOfBirth, about, photo }) => {
  return (
    <div className={styles.PersonInfoBlock}>
      <img className={styles.photo} src={photo} alt="Фотография [Имя Фамилия]" />
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.subtitle}>{dateOfBirth}</p>
      <p className={styles.paragraph}>{about}</p>
      <h2 className={styles.title}>Фотографии</h2>
      <div className={styles.album}></div>
    </div>
  );
};

export default PersonInfo;
