import { getCityCode, toCelsius } from "../utils";
import { validValues } from "../../components/IconState/IconState";

export const getAllWeather = (res, city, countryCode) => {
  const { data } = res;
  const temperature = toCelsius(data.main.temp);
  const humidity = data.main.humidity;
  const wind = data.wind.speed;
  const stateFromServer = data.weather[0].main.toLowerCase();
  const state = validValues.includes(stateFromServer) ? stateFromServer : null;
  const propName = getCityCode(city, countryCode);
  return { [propName]: { temperature, state, humidity, wind } };
};
