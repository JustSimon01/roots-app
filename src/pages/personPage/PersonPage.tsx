import { FunctionComponent } from 'react';
import styles from './PersonPage.module.css';
import PersonInfo from '../../components/PersonInfo/PersonInfo';

const PersonPage: FunctionComponent = () => {
  return (
    <div className={styles.personPage}>
      <PersonInfo
        photo="https://www.cartonionline.com/tv/boing/Gennaio/Johnny_Bravo_Pointing_3.jpg"
        name="Джонни Браво"
        dateOfBirth="01 апреля 1970 г."
        about="Харизматичный мультяшный герой с мускулистым телом, ослепительной улыбкой и известным харканием. Он всегда в центре внимания, уверен в своей привлекательности и стремится покорять сердца девушек. Несмотря на свою самоуверенность, Джонни также имеет доброе сердце и помогает тем, кто в беде. Его приключения всегда наполнены стилем, юмором и весельем, оставляя яркий след в сердцах и улыбках людей, с которыми он встречается."
      />
    </div>
  );
};

export default PersonPage;
