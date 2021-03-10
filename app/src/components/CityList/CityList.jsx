import React from "react";
import PropTypes from "prop-types";
import Cityinfo from "./../Cityinfo/Cityinfo";
import Alert from "@material-ui/lab/Alert";
import Weather from "./../Weather/Weather";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { getCityCode } from "./../../utils/utils";
import useCityList from "./../../hooks/useCityList";
import { useContextDispatch, useContextState } from "../../WeatherContext";

const CityListItem = React.memo(function CitiesList({
  city,
  countryCode,
  country,
  weather,
  eventOnClickCity,
}) {
  return (
    <ListItem button onClick={() => eventOnClickCity(city, countryCode)}>
      <Grid container justify="center" alignItems="center">
        <Grid item sm={6} xs={10}>
          <Cityinfo city={city} country={country}></Cityinfo>
        </Grid>
        <Grid item sm={2} xs={10}>
          <Weather
            temperature={weather && weather.temperature}
            state={weather && weather.state}
          ></Weather>
        </Grid>
      </Grid>
    </ListItem>
  );
});

const renderCityAndCountry = (eventOnClickCity) => (
  cityAndCountry,
  weather
) => {
  const { city, countryCode, country } = cityAndCountry;
  return (
    <CityListItem
      key={getCityCode(city, countryCode)}
      city={city}
      countryCode={countryCode}
      country={country}
      eventOnClickCity={eventOnClickCity}
      weather={weather}
    ></CityListItem>
  );
};

const CityList = ({ cities, onClickCity }) => {
  // const { onSetAllWeather } = actions;
  const actions = useContextDispatch();
  const data = useContextState();
  const { allWeather } = data;
  const { error, setError } = useCityList(cities, actions, allWeather);

  return (
    <div>
      {error && (
        <Alert onClose={() => setError(null)} severity="error">
          {error}
        </Alert>
      )}
      <List>
        {cities.map((cityAndCountry) =>
          renderCityAndCountry(onClickCity)(
            cityAndCountry,
            allWeather[
              getCityCode(cityAndCountry.city, cityAndCountry.countryCode)
            ]
          )
        )}
      </List>
    </div>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ),
  onClickCity: PropTypes.func.isRequired,
};

export default React.memo(CityList);
