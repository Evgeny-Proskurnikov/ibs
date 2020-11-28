import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { CITY_NAMES } from '../../constants/constants';
import DailyWeather from './DailyWeather';
import './Weather.css';

function Weather({ onUpdate, storeWeather, storeCity, storeDailyForecast }) {
  const initialCity = CITY_NAMES[0]['city'];

  useEffect(() => {
    onUpdate(initialCity);
  }, []);

  useEffect(() => {
    if (storeCity) {
      onUpdate(storeCity);
    }
  }, [storeCity]);

  return storeWeather.id ? (
    <div className='weather'>
      <h2>{storeWeather.city}</h2>
      <p>{storeWeather.description}</p>
      <p>{storeWeather.temp} &deg;C</p>
      <p>Today: {storeWeather.date}</p>
      <div className='weather__container'>
        {storeDailyForecast.map(item => <DailyWeather weatherData={item} key={uuid()} />)}
      </div>
    </div>
  ) : (
    <h2>Loading...</h2>
  )
}
  
const mapStateToProps = (state) => ({
  storeWeather: state.data,
  storeCity: state.city,
  storeDailyForecast: state.dailyForecast
});

export default (connect(mapStateToProps))(Weather);
