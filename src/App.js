import React, { useState } from 'react';
import './page.css';
import Weather from './components/Weather/Weather';
import DropdownCities from './components/Dropdown-menu/DropdownCities';
import Header from './components/Header/Header';
import Form from './components/Form/Form'
import apiRequest from './utils/api';
import { connect } from 'react-redux';
import { addItem, removeItems } from './actions/index';
import { v4 as uuid } from 'uuid';

function App({ addItemToStore, removeStoreItems }) {
  const [ headerState, setHeaderState ] = useState(true);
  const [ citiesMenuState, setCitiesMenuState ] = useState(false);

  function handleHeaderClick() {
    setHeaderState(!headerState);
    setCitiesMenuState(!citiesMenuState);
  }

  function setWeather(initialCity) {
    apiRequest.getCurrentWheather(initialCity)
      .then(res => {
        const currentTemp = Math.floor(res.main.temp);
        const currentDate = new Date(res.dt*1000);

        removeStoreItems();
        addItemToStore({
          id: uuid(),
          city: res.name,
          temp: currentTemp,
          description: res.weather[0].description,
          date: currentDate.toDateString()
        });
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="page">
      <Header headerState={headerState} handleHeaderClick={handleHeaderClick} />
      <DropdownCities isOpened={citiesMenuState} />
      <Weather onUpdate={setWeather} />
      <Form />
    </div>
  );
}

const mapStateToProps = (state) => ({
  storeData: state.data
});

const mapDispatchToProps = (dispatch) => ({
  addItemToStore: item => dispatch(addItem(item)),
  removeStoreItems: () => dispatch(removeItems())
});

export default (connect(mapStateToProps, mapDispatchToProps))(App);
