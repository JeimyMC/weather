import React from "react";
import PropTypes from "prop-types";
import {
  WiDayCloudy,
  WiDaySunny,
  WiRain,
  WiSnow,
  WiRaindrop,
  WiThunderstorm,
} from "react-icons/wi";

const validValues = [
  "clouds",
  "clear",
  "rain",
  "snow",
  "drizzle",
  "thunderstorm",
];

const stateByName = {
  clouds: WiDayCloudy,
  clear: WiDaySunny,
  rain: WiRain,
  snow: WiSnow,
  drizzle: WiRaindrop,
  thunderstorm: WiThunderstorm,
};

const IconState = ({ state }) => {
  let Icon = stateByName[state];
  return <Icon></Icon>;
};

IconState.propTypes = {
  state: PropTypes.oneOf(validValues).isRequired,
};

export { IconState, validValues };
