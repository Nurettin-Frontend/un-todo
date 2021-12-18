import { useContext, useEffect } from "react";
import TasksContext from "../store/task-context";
import WeatherContext from "../store/weather-context";
import style from "./Weather.module.scss";

const Weather = () => {
  const tasksCtx = useContext(TasksContext);
  const { fetchWeatherDays, weather } = useContext(WeatherContext);

  useEffect(() => {
    fetchWeatherDays();
  }, [fetchWeatherDays]);

  return (
    <div className={style.container}>
      <div className={style.container__title}>
        <span className="text">{weather.name} </span>
        <span className="text">{weather.temp} °C</span>
      </div>
      <div className={style.container__details}>
        {[1, 2, 3, 4, 5].map((i) => {
          return (
            <div
              key={i}
              className={
                style.container__details__cover +
                " " +
                `${
                  tasksCtx.lightMode
                    ? style["container__details__cover--active"]
                    : ""
                }`
              }
            >
              <span className="text">Sat</span>
              <span className="text">30.0c</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weather;
