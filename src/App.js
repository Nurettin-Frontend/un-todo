import React, { Suspense, useContext, useEffect } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import TasksPage from "./pages/Tasks";
import WeatherPage from "./pages/Weather";
import TasksProvider from "./store/task-provider";
import WeatherProvider from "./store/weather-provider";

function App() {
  return (
    <TasksProvider>
      <WeatherProvider>
        <Router>
          <React.Fragment>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<TasksPage />} />
              <Route path="/details" exact element={<WeatherPage />} />
              {/* <Route path="*" component={NotFoundPage} /> */}
            </Routes>
          </React.Fragment>
        </Router>
      </WeatherProvider>
    </TasksProvider>
  );
}

export default App;
