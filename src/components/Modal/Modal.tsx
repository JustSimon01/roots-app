import { FunctionComponent, useEffect } from 'react';
import styles from './Modal.module.css';
import Overlay from '../Overlay/Overlay';
import closeBtn from '../../assets/Close.svg';

interface ModalProps {
  children?: JSX.Element;
  handleClose: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({ children, handleClose }) => {
  useEffect(() => {
    const closeEsc = (e: KeyboardEvent) => (e.key === 'Escape' ? handleClose() : null);
    document.addEventListener('keydown', closeEsc);
    return () => document.removeEventListener('keydown', closeEsc);
  });
  return (
    <>
      <div className={`${styles.modal}`}>
        <button className={`${styles.closeButton}`}>
          <img className={`${styles.closeButtonImg}`} src={closeBtn} alt="Кнопка закрытия попапа" />
        </button>
        {children}
      </div>
      <Overlay handleClose={handleClose} />
    </>
  );
};

export default Modal;
