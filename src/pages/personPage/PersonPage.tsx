import { FunctionComponent } from 'react';
import backArrow from '../../assets/Back.svg';
import styles from './PersonPage.module.css';
import PersonInfo from '../../components/PersonInfo/PersonInfo';

interface IPersonPage {
  person: {
    _id: string;
    name: string;
    photo: string;
    dateOfBirth: string;
    about: string;
  };
}

const PersonPage: FunctionComponent<IPersonPage> = ({ person }) => {
  return (
    <div className={styles.personPage}>
      <PersonInfo />
      <img className={styles.arrow} src={backArrow} alt="возврат на предыдущую страницу" />
    </div>
  );
};

export default PersonPage;
