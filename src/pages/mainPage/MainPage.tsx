import { FunctionComponent } from 'react';
import Card from '../../components/Сard/Card';

const MainPage: FunctionComponent = () => {
  return (
    <div className="main-block">
      <Card img={'https://www.cartonionline.com/tv/boing/Gennaio/Johnny_Bravo_Pointing_3.jpg'} name={'Джонни Браво'} />
    </div>
  );
};

export default MainPage;
