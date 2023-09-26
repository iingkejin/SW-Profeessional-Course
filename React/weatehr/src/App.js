import './App.css';
import { useState, useEffect } from 'react';
import Weather from './component/Weather';

function App() {
  let [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getweather(lat, lon)
    });
  }

  const getweather = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fe79fb667fbd8b3145ec26a713e809c0&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    setWeather(data)
  }

  // useEffect -> 첫번째 UI 렌더 후에 작동
  useEffect(() => {
    getCurrentLocation()
  },[])

  return (
    <div className="App">
      <Weather weather={weather}/>
    </div>
  );
}

export default App;
