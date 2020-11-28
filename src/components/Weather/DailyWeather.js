import React from 'react';

function DailyWeather({ weatherData }) {
  return (
    <div className='weather__daily'>
      <p>{weatherData.dt_txt}</p>
      <p>{weatherData.weather[0].description}</p>
      <p>{Math.floor(weatherData.main.temp)} &deg;C</p>
    </div>
  )
}

export default DailyWeather;
