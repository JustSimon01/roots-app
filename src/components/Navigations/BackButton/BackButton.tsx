import back from '../../../assets/Back.svg';
import close from '../../../assets/Close.svg';
import styles from './BackButton.module.css';
import { FunctionComponent } from 'react';

interface BackButton {
  type: 'Close' | 'Back';
  handleClose: () => void;
}

const BackButton: FunctionComponent<BackButton> = ({ handleClose, type }) => {
  return (
    <button className={styles.button} onClick={handleClose}>
      {type === 'Back' && <img className={styles.img} src={back} alt="Кнопка возврата на предыдущую страницу" />}
      {type === 'Close' && <img className={styles.img} src={close} alt="Кнопка закрытия страницы" />}
    </button>
  );
};

export default BackButton;
