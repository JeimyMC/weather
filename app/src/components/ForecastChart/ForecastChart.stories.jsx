import React from "react";
import ForecastChart from "./ForecastChart";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "ForecastChart",
  component: ForecastChart,
};

const data = [
  {
    dayHour: "Jue 18",
    min: 14,
    max: 20,
  },
  {
    dayHour: "Vie 8",
    min: 10,
    max: 26,
  },
  {
    dayHour: "Mar 18",
    min: 17,
    max: 25,
  },
];

export const ForecastChartExample = () => (
  <ForecastChart data={data}></ForecastChart>
);
