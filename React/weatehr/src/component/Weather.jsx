import React from 'react';

const Weather = (props) => {
  return (
    <div>
      <div>{props.weather && props.weather.name}</div>
      <h2>{props.weather && props.weather.main.temp}°C</h2>
    </div>
  );
};

export default Weather;