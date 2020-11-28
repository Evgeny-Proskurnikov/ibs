import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Weather from './components/Weather/Weather';
import DropdownCities from './components/Dropdown-menu/DropdownCities';
import Header from './components/Header/Header';
import Form from './components/Form/Form'
import apiRequest from './utils/api';
import { addItem, removeItems, addDailyForecast } from './actions/index';
import './page.css';


function App({ addItemToStore, removeStoreItems, addDailyForecastToStore }) {
  const [ headerState, setHeaderState ] = useState(true);
  const [ citiesMenuState, setCitiesMenuState ] = useState(false);

  function handleHeaderClick() {
    setHeaderState(!headerState);
    setCitiesMenuState(!citiesMenuState);
  }

  function setWeather(cityName) {
    removeStoreItems();

    Promise.all([apiRequest.getCurrentWheather(cityName), apiRequest.getFurtherWheather(cityName)]) 
      .then(([resCurrent, resFurther]) => {
        const currentTemp = Math.floor(resCurrent.main.temp);
        const currentDate = new Date(resCurrent.dt*1000);

        addItemToStore({
          id: uuid(),
          city: resCurrent.name,
          temp: currentTemp,
          description: resCurrent.weather[0].description,
          date: currentDate.toDateString()
        });

        const dailyForecast = resFurther.list.filter(item => item.dt_txt.includes('12:00:00'));
        addDailyForecastToStore(dailyForecast);
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
  removeStoreItems: () => dispatch(removeItems()),
  addDailyForecastToStore: item => dispatch(addDailyForecast(item)),
});

export default (connect(mapStateToProps, mapDispatchToProps))(App);
