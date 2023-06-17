import { FunctionComponent, useEffect } from 'react';
import ReactDom from 'react-dom';
import styles from './Modal.module.css';
import Overlay from '../Overlay/Overlay';
import closeBtn from '../../assets/Close.svg';
import BackButton from '../Navigations/BackButton/BackButton';

interface ModalProps {
  children?: JSX.Element;
  handleClose: () => void;
}

const portal = document.getElementById('portal') as HTMLElement;

const Modal: FunctionComponent<ModalProps> = ({ children, handleClose }) => {
  useEffect(() => {
    const closeEsc = (e: KeyboardEvent) => (e.key === 'Escape' ? handleClose() : null);
    document.addEventListener('keydown', closeEsc);
    return () => document.removeEventListener('keydown', closeEsc);
  });

  return ReactDom.createPortal(
    <>
      <div className={`${styles.modal}`}>
        <div className={`${styles.closeButton}`}>
          <BackButton type="Close" handleClose={handleClose} />
        </div>
        {children}
      </div>
      <Overlay handleClose={handleClose} />
    </>,
    portal
  );
};

export default Modal;
