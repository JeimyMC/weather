import React, { useMemo } from "react";
import AppFrame from "./../components/AppFrame/AppFrame";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Cityinfo from "./../components/Cityinfo/Cityinfo";
import Weather from "./../components/Weather/Weather";
import WeatherDetails from "./../components/WeatherDetails/WeatherDetails";
import ForecastChart from "./../components/ForecastChart/ForecastChart";
import Forecast from "./../components/Forecast/Forecast";
import useCityPage from "./../hooks/useCityPage";
import useCityList from "./../hooks/useCityList";
import { getCityCode } from "./../utils/utils";
import { getCountryName } from "./../utils/transform/serviceCities";
import { useContextDispatch, useContextState } from "./../WeatherContext";

const CityPage = () => {
  // const { onSetAllWeather, onSetDataItem, onSetForecastItem } = actions;
  const actions = useContextDispatch();
  const data = useContextState();
  const { allWeather, allDataItem, allForecastItem } = data;
  const { city, countryCode } = useCityPage(
    allDataItem,
    allForecastItem,
    actions
  );
  const cities = useMemo(() => [{ city, countryCode }], [city, countryCode]);

  useCityList(cities, actions, allWeather);
  const cityCode = getCityCode(city, countryCode);
  const weather = allWeather[cityCode];
  const dataItem = allDataItem[cityCode];
  const forecastItem = allForecastItem[cityCode];

  const country = countryCode && getCountryName(countryCode);
  const humidity = weather && weather.humidity;
  const wind = weather && weather.wind;
  const state = weather && weather.state;
  const temperature = weather && weather.temperature;
  return (
    <AppFrame>
      <Grid container justify="center" direction="column" spacing={6}>
        <Grid
          style={{ marginTop: "20px" }}
          container
          justify="center"
          alignItems="flex-end"
          item
          xs={12}
        >
          <Cityinfo city={city} country={country}></Cityinfo>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={8}>
            <Weather state={state} temperature={temperature}></Weather>
          </Grid>
          <Grid item xs={4}>
            {humidity && wind && (
              <WeatherDetails humidity={humidity} wind={wind}></WeatherDetails>
            )}
          </Grid>
        </Grid>
        <Grid item>
          {!dataItem && !forecastItem && <LinearProgress></LinearProgress>}
        </Grid>
        <Grid item>
          {dataItem && <ForecastChart data={dataItem}></ForecastChart>}
        </Grid>
        <Grid item>
          {forecastItem && <Forecast itemList={forecastItem}></Forecast>}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
