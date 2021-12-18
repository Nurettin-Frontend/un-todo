import axios from "axios";
export const WEATHER_KEY = "bd2a10bf398f39cc65925c4646fe290b";
export const WEATHER_API = `https://api.openweathermap.org/data/2.5/`;

export const _axios = axios.create({
  baseURL: WEATHER_API,
});
