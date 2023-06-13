import SideMenu from './components/SideMenu/SideMenu';
import 'normalize.css';
import styles from './App.module.css';
import { Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import Modal from './components/Modal/Modal';
import PersonInfo from './components/PersonInfo/PersonInfo';
import PersonPage from './pages/personPage/PersonPage';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const navigate = useNavigate();

  function closePopup() {
    navigate(-1);
  }

  return (
    <div className={styles.App}>
      <Link to="/person/id" state={{ background: location }} className={`${styles.ingredient}`}>
        asasdasd
      </Link>
      <SideMenu header={'Roots'} />
      <Routes location={background || location}>
        <Route path="/" element={<MainPage />} />
        <Route path="/person/id" element={<PersonPage />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/person/id"
            element={
              <Modal handleClose={closePopup}>
                <PersonInfo
                  photo="https://www.cartonionline.com/tv/boing/Gennaio/Johnny_Bravo_Pointing_3.jpg"
                  name="Джонни Браво"
                  dateOfBirth="01 апреля 1970 г."
                  about="Харизматичный мультяшный герой с мускулистым телом, ослепительной улыбкой и известным харканием. Он всегда в центре внимания, уверен в своей привлекательности и стремится покорять сердца девушек. Несмотря на свою самоуверенность, Джонни также имеет доброе сердце и помогает тем, кто в беде. Его приключения всегда наполнены стилем, юмором и весельем, оставляя яркий след в сердцах и улыбках людей, с которыми он встречается."
                />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
