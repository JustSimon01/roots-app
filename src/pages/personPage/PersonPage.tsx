import { FunctionComponent } from 'react';
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
    </div>
  );
};

export default PersonPage;
