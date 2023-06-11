import styles from './SideMenu.module.css';
import { FC } from 'react';
import SideMenuElement from './SideMenuElement/SideMenuElement';

type TSideMenu = {
  header?: string;
};

const SideMenu: FC<TSideMenu> = ({ header }) => {
  return (
    <>
      <div className={styles.sideMenu}>
        <h1 className={styles.header}>{header || ''}</h1>
        <ul className={styles.list}>
          <SideMenuElement name={'Джонни Браво'} />
          <SideMenuElement name={'Джекки Браво'} />
          <SideMenuElement name={'Джонни Браво мл.'} />
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
