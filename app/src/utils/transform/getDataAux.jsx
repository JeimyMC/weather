import moment from "moment";
import "moment/locale/es";
import { toCelsius } from "./../utils";

const getDataAux = (data) => {
  const daysAhead = [0, 1, 2, 3, 4, 5];
  const days = daysAhead.map((d) => moment().add(d, "d"));

  const dataAux = days
    .map((d) => {
      const tempArray = data.list.filter((item) => {
        const dayOfYear = moment.unix(item.dt).dayOfYear();
        return dayOfYear === d.dayOfYear();
      });
      const temps = tempArray.map((item) => item.main.temp);

      return {
        dayHour: d.format("ddd"),
        min: Number(toCelsius(Math.min(...temps))),
        max: Number(toCelsius(Math.max(...temps))),
        hasTemps: temps.length > 0 ? true : false,
      };
    })
    .filter((item) => item.hasTemps);
  return dataAux;
};

export default getDataAux;
