import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const WeatherDetails = ({ humidity, wind }) => {
  return (
    <div>
      <Typography>Humedad: {humidity}%</Typography>
      <Typography>Viento: {wind} km/h</Typography>
    </div>
  );
};

WeatherDetails.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
};

export default WeatherDetails;
