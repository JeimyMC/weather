import moment from "moment";
import "moment/locale/es";
import { toCelsius } from "./../utils";

const getForecastItem = (data) => {
  const interval = [0, 1, 2, 3, 4, 5];
  const forecastItemAux = data.list
    .filter((item, index) => interval.includes(index))
    .map((item) => {
      return {
        hour: moment.unix(item.dt).hour(),
        weekDay: moment.unix(item.dt).format("dddd"),
        state: item.weather[0].main.toLowerCase(),
        temperature: Number(toCelsius(item.main.temp)),
      };
    });
  return forecastItemAux;
};

export default getForecastItem;
