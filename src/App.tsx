import SideMenu from './components/SideMenu/SideMenu';
import 'normalize.css';
import styles from './App.module.css';
import { Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import Modal from './components/Modal/Modal';
import PersonInfo from './components/PersonInfo/PersonInfo';
import PersonPage from './pages/personPage/PersonPage';
import bd from './temp/bd.json';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const navigate = useNavigate();

  function closePopup() {
    navigate(-1);
  }

  return (
    <div className={styles.App}>
      <SideMenu header={'Roots'} persons={bd} />
      <Routes location={background || location}>
        <Route path="/" element={<MainPage />} />
        <Route path="/person/:id" element={<PersonPage person={bd[0]} />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/person/:id"
            element={
              <Modal handleClose={closePopup}>
                <PersonInfo />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
