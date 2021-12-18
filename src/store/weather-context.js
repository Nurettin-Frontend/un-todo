import React from "react";

const WeatherContext = React.createContext({
  weather: "",
  location: undefined,
  fetchUCityWeather: () => {},
  fetchWeatherDays: () => {},
  getLocation: () => {},
});

export default WeatherContext;
