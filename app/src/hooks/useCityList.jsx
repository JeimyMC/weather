import { useState, useEffect } from "react";
import axios from "axios";
import { getWeatherUrl } from "./../utils/url";
import { getAllWeather } from "./../utils/transform/getAllWeather";
import { getCityCode } from "./../utils/utils";

const useCityList = (cities, actions, allWeather) => {
  const [error, setError] = useState(null);
  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const url = getWeatherUrl(city, countryCode);
      try {
        actions({
          type: "SET_ALLWEATHER",
          payload: { [getCityCode(city, countryCode)]: {} },
        });
        //onSetAllWeather({ [getCityCode(city, countryCode)]: {} });
        const res = await axios.get(url);
        const allWeatherAux = getAllWeather(res, city, countryCode);

        //onSetAllWeather(allWeatherAux);
        actions({ type: "SET_ALLWEATHER", payload: allWeatherAux });
      } catch (err) {
        if (err.response) {
          setError("Ha ocurrido un error en el servidor");
        } else if (err.request) {
          setError("Verifique la conexión a internet");
        } else {
          setError("Error al cargar los datos");
        }
      }
    };
    cities.forEach(({ city, countryCode }) => {
      if (!allWeather[getCityCode(city, countryCode)]) {
        setWeather(city, countryCode);
      }
    });
  }, [cities, actions, allWeather]);

  return { error, setError };
};

export default useCityList;
