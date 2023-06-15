import { FunctionComponent } from 'react';
import styles from './SideMenuElement.module.css';
import { Link, useLocation } from 'react-router-dom';
import { IPerson } from '../../../utils/inerfaces';

const SideMenuElement: FunctionComponent<{ person: IPerson }> = ({ person }) => {
  const location = useLocation();

  return (
    <Link to={`/person/${person._id}`}>
      <li className={styles.text}>{person.name}</li>
    </Link>
  );
};

export default SideMenuElement;
