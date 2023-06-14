import styles from './SideMenu.module.css';
import { FC } from 'react';
import SideMenuElement from './SideMenuElement/SideMenuElement';
import { IPerson } from '../../utils/inerfaces';

interface ISideMenu {
  header?: string;
  persons: Array<IPerson>;
}

const SideMenu: FC<ISideMenu> = ({ header, persons }) => {
  return (
    <>
      <div className={styles.sideMenu}>
        <h1 className={styles.header}>{header || ''}</h1>
        <ul className={styles.list}>
          {persons && persons.map((person) => <SideMenuElement person={person} key={person._id} />)}
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
