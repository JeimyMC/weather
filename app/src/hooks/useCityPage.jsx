import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import getDataAux from "./../utils/transform/getDataAux";
import getForecastItem from "./../utils/transform/getForecastItem";
import { getForecastUrl } from "./../utils/url";
import { getCityCode } from "./../utils/utils";

const useCityPage = (allDataItem, allForecastItem, actions) => {
  const { city, countryCode } = useParams();

  useEffect(() => {
    const forecast = async () => {
      const url = getForecastUrl(city, countryCode);
      const cityCode = getCityCode(city, countryCode);
      try {
        const { data } = await axios.get(url);
        const dataAux = getDataAux(data);
        //onSetDataItem({ [cityCode]: dataAux });
        actions({ type: "SET_DATA", payload: { [cityCode]: dataAux } });
        const forecastItemAux = getForecastItem(data);
        //onSetForecastItem({ [cityCode]: forecastItemAux });
        actions({
          type: "SET_FORECAST",
          payload: { [cityCode]: forecastItemAux },
        });
      } catch (err) {
        console.log(err);
      }
    };
    const cityCode = getCityCode(city, countryCode);
    if (
      allDataItem &&
      allForecastItem &&
      !allDataItem[cityCode] &&
      !allForecastItem[cityCode]
    ) {
      forecast();
    }
  }, [city, countryCode, actions, allDataItem, allForecastItem]);
  return {
    city,
    countryCode,
  };
};

export default useCityPage;
