import React from "react";
import Forecast from "./../Forecast/Forecast";
import { render } from "@testing-library/react";

const forecastItemList = [
  { hour: 10, state: "clear", temperature: 18, weekDay: "Jueves" },
  { hour: 13, state: "clouds", temperature: 12, weekDay: "Martes" },
  { hour: 11, state: "drizzle", temperature: 14, weekDay: "Viernes" },
  { hour: 19, state: "rain", temperature: 11, weekDay: "Lunes" },
  { hour: 18, state: "clouds", temperature: 13, weekDay: "Miércoles" },
  { hour: 12, state: "clear", temperature: 19, weekDay: "Jueves" },
];

test("should Forecast", async () => {
  const { findAllByTestId } = render(
    <Forecast itemList={forecastItemList}></Forecast>
  );
  const forecastItems = await findAllByTestId("forecast-item-container");
  expect(forecastItems).toHaveLength(6);
});
