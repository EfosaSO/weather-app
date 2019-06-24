import React from 'react';
import PropTypes from 'prop-types';
import toCelsius from '../utils/toCelsius';

const WeatherResult = ({ country, city, temperature, description, index, removeWeather }) =>{
  return (
    <div>
      {
        country &&
        <div className="weather-info">
          <div className="weather-stat">
            <span className="weather-key">Location:&nbsp;</span>
            <span className="weather-value">{city}, {country}</span>
          </div>
          <div className="weather-stat">
            <span className="weather-key">Temperature:&nbsp;</span>
            <span className="weather-value">{toCelsius(temperature)}&deg;C</span>
          </div>
          <div className="weather-stat">
            <span className="weather-key">Conditions:&nbsp;</span>
            <span className="weather-value">{description}</span>
          </div>
          <button onClick={()=>{
            return removeWeather(index)
          }}>
            Remove
          </button>
        </div>
      }
    </div>
  );
}

export default WeatherResult;

WeatherResult.propTypes = {
  country: PropTypes.string,
  city: PropTypes.string,
  temperature: PropTypes.number,
  description: PropTypes.string,
};