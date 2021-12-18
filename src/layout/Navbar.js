import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core//Slide";
import style from "./Navbar.module.scss";
import TasksContext from "../store/task-context";
import WeatherContext from "../store/weather-context";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const HideAppBar = (props) => {
  const tasksCtx = useContext(TasksContext);
  const { weather, getLocation, fetchUCityWeather } =
    useContext(WeatherContext);

  useEffect(() => {
    getLocation();
    fetchUCityWeather();
    switch (tasksCtx.lightMode) {
      case true:
        document.body.classList.add("white-content");
        break;
      case false:
      default:
        document.body.classList.remove("white-content");
        break;
    }
  }, [tasksCtx.lightMode, getLocation, fetchUCityWeather]);

  const toggleMode = () => {
    tasksCtx.toggleMode();
  };

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={style.navbar}>
            <Typography variant="h6" component="div">
              <Link to="/">
                <span class="white-text">React To-Do Task</span>
              </Link>
            </Typography>
            <div className={style.navbar__weather}>
              <span>{weather.main ? weather.temp + "°C" : "Loading..."}</span>
              <Link to="/details">
                <p>Click For Details</p>
              </Link>
            </div>
            <div className={style.navbar__mode} onClick={toggleMode}>
              <div
                className={
                  style.navbar__mode__btn +
                  ` ${
                    tasksCtx.lightMode
                      ? style["navbar__mode__btn--active"]
                      : " "
                  }`
                }
              ></div>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default HideAppBar;
