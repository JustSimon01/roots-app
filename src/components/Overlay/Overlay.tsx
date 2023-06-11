import styles from './Overlay.module.css';
import { FC } from 'react';

export const Overlay: FC<{ handleClose: () => void }> = ({ handleClose }) => {
  return <div className={styles.overlay} onClick={handleClose} />;
};

export default Overlay;
