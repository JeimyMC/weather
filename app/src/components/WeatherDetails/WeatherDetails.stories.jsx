import React from "react";
import WeatherDetails from "./WeatherDetails";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "WeatherDetails",
  component: WeatherDetails,
};

export const WeatherDetailsExample = () => {
  return <WeatherDetails humidity={10} wind={9}></WeatherDetails>;
};
