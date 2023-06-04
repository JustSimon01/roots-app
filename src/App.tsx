import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import SideMenu from './components/SideMenu/SideMenu';
import Card from './components/Сard/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SideMenu header={'Roots'} />
      <div className="main-block">
        <Card
          img={'https://www.cartonionline.com/tv/boing/Gennaio/Johnny_Bravo_Pointing_3.jpg'}
          name={'Джонни Браво'}
        />
      </div>
    </>
  );
}

export default App;
