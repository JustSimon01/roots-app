import SideMenu from './components/SideMenu/SideMenu';
import 'normalize.css';
import styles from './App.module.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import Modal from './components/Modal/Modal';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const navigate = useNavigate();

  function closePopup() {
    navigate(-1);
  }

  return (
    <div className={styles.App}>
      <SideMenu header={'Roots'} />
      <Routes location={background || location}>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Modal handleClose={closePopup}></Modal>
    </div>
  );
}

export default App;
