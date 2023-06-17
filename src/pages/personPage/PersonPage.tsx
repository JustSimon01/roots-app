import { FunctionComponent } from 'react';
import styles from './PersonPage.module.css';
import PersonInfo from '../../components/PersonInfo/PersonInfo';
import BackButton from '../../components/Navigations/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';

const PersonPage: FunctionComponent = () => {
  const navigate = useNavigate();

  function returnToMainPage() {
    navigate('/');
  }

  return (
    <div className={styles.personPage}>
      <PersonInfo />
      <BackButton type="Back" handleClose={returnToMainPage} />
    </div>
  );
};

export default PersonPage;
