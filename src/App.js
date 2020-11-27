import React, { useState } from 'react';
import './page.css';
import Wheather from './components/Wheather/Wheather';
import DropdownCities from './components/Dropdown-menu/DropdownCities';
import Header from './components/Header/Header';

function App() {
  const [ headerState, setHeaderState ] = useState(true);
  const [ citiesMenuState, setCitiesMenuState ] = useState(false);

  function handleHeaderClick() {
    setHeaderState(!headerState);
    setCitiesMenuState(!citiesMenuState);
  }

  return (
    <div className="page">
      <Header headerState={headerState} handleHeaderClick={handleHeaderClick} />
      <DropdownCities isOpened={citiesMenuState} />
      <Wheather />
    </div>
  );
}

export default App;
