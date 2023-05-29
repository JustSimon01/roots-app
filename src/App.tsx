import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SideMenu header={'Roots'} />
      <div className="main-block"></div>
    </>
  );
}

export default App;
