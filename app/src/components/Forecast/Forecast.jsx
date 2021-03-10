import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ForecasItem from "./../ForecasItem/ForecasItem";
import { validValues } from "./../IconState/IconState";

const renderForcastItem = (item) => {
  const { hour, weekDay, temperature, state } = item;
  return (
    <Grid data-testid="forecast-item-container" item key={`${weekDay}${hour}`}>
      <ForecasItem
        hour={hour}
        weekDay={weekDay}
        temperature={temperature}
        state={state}
      ></ForecasItem>
    </Grid>
  );
};

const Forecast = ({ itemList }) => {
  return (
    <Grid container justify="space-around" alignItems="center">
      {itemList.map((item) => renderForcastItem(item))}
    </Grid>
  );
};

Forecast.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      state: PropTypes.oneOf(validValues).isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Forecast;
