import { FunctionComponent } from 'react';
import styles from './SideMenuElement.module.css';

interface ISideMenuElement {
  name: string;
}

const SideMenuElement: FunctionComponent<ISideMenuElement> = ({ name }) => {
  return <li className={styles.text}>{name}</li>;
};

export default SideMenuElement;
