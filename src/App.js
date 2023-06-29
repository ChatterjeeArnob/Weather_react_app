import { useEffect, useState } from "react";
import "./App.css";
// import pngtree from './pngtree-vector-cloud-icon-png-image_939423.jpg'
// import WbCloudyIcon from '@mui/icons-material/WbCloudy';

import About from "./About";
function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [city, setCity] = useState("");
  const [weatherdata, setWeatherdata] = useState([]);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      console.log(pos.coords.latitude);
      console.log(pos.coords.longitude);
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });
  }, []);
  useEffect(() => {
    if (latitude !== "" && longitude !== "" && city === "") {
      console.log("hi");
      getWeatherwithCoord(latitude, longitude);
      // console.log(weatherdata);
    }
  }, [latitude, longitude]);

  function getWeatherwithCoord(latitude, longitude) {
    const apikey = `401c8aa97a67e408a3038a20e886dac4`;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setWeatherdata(data);
      });
  }
  function onChangeCity(e) {
    e.preventDefault();
    console.log(e.target.value);
    setCity(e.target.value);
  }

  function handleCity() {
    const apikey = `401c8aa97a67e408a3038a20e886dac4`;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeatherdata(data);
      });
  }
  return (
    <>
      {/* <h1>{latitude}</h1> */}
      {/* <h1>{longitude}</h1> */}
      <div className="inputClass">
        <input type="text" placeholder="enter the city" onChange={onChangeCity} />
      <button onClick={handleCity}>search</button>
        </div>
      <div className="center">
        <div className="detail ">
          <div className="left_component">
            <h2>
              {weatherdata?.name},{weatherdata?.sys?.country}
            </h2>
            <div className="details">
              <div className="picture_temp flex">
              {/* <img src={pngtree} alt="" /> */}
             
                <h1>{Math.round(weatherdata?.main?.temp)}°c</h1>
              </div>
              <h3>{weatherdata?.weather?.[0]?.main}</h3>
            </div>
          </div>

          <div className="right_component">
            <div className="item  flex">
              <h2>Feels Like:</h2>
              <h3> {Math.round(weatherdata?.main?.feels_like)}°c</h3>
            </div>
            <div className="item flex">
              <h2>Humidity:</h2>{" "}
              <h3>{Math.round(weatherdata?.main?.humidity)}%</h3>
            </div>
            <div className="item flex">
              <h2>Wind:</h2>{" "}
              <h3> {Math.round(weatherdata?.wind?.speed * 3.6)}km/h</h3>
            </div>
            <div className="item flex">
              <h2>Wind Gust:</h2>{" "}
              <h3>{Math.round(weatherdata?.wind?.gust * 3.6)}km/h</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <About/>
       */}
    </>
  );
}

export default App;
