import React, { useEffect } from 'react';
import { CITY_NAMES } from '../../constants/constants';
import { connect } from 'react-redux';


function Weather({ onUpdate, storeWeather, storeCity }) {
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
    <>
      <h2>{storeWeather.city}</h2>
      <p>{storeWeather.description}</p>
      <p>{storeWeather.temp} &deg;C</p>
      <p>Today: {storeWeather.date}</p>
    </>
  ) : (
    <h2>Loading...</h2>
  )
}
  
const mapStateToProps = (state) => ({
  storeWeather: state.data,
  storeCity: state.city
});

export default (connect(mapStateToProps))(Weather);
