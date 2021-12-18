import { useCallback } from "react";
import { useState } from "react/cjs/react.development";
import { _axios, WEATHER_KEY } from "../constants/api";
import WeatherContext from "./weather-context";

const WeatherProvider = (props) => {
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState({
    lon: "",
    lat: "",
  });

  const getLocation = useCallback(async () => {
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, []);

  const fetchUCityWeather = useCallback(async () => {
    try {
      if (location.lat && location.lon) {
        let { data } = await _axios.get(
          `weather?lat=${location.lat}&lon=${location.lon}&appid=${WEATHER_KEY}&units=metric`
        );
        let weatherObj = {
          clouds: data.clouds.all,
          humidity: data.main.humidity,
          temp: data.main.temp,
          name: data.name,
          wind: data.wind.deg,
          description: data.weather[0].description,
          main: data.weather[0].main,
          icon: data.weather[0].icon,
        };
        setWeather(weatherObj);
      }
    } catch (err) {
      console.log("ee", err);
    }
  }, [location.lat, location.lon]);

  const fetchWeatherDays = useCallback(async () => {
    try {
      if (weather.name) {
        let { data } = await _axios.get(
          `forecast/daily?q=${weather.name}&appid=${WEATHER_KEY}`
        );
        console.log("dataaa", data);
      }
    } catch (err) {
      console.log("ee", err);
    }
  }, [weather.name]);

  const initValue = {
    weather,
    location,
    getLocation,
    fetchUCityWeather,
    fetchWeatherDays,
  };

  return (
    <WeatherContext.Provider value={initValue}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
