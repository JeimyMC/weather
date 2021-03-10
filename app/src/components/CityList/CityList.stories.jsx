import React from "react";
import CityList from "./CityList";
import { action } from "@storybook/addon-actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "CityList",
  component: CityList,
};

const cities = [
  { city: "Madrid", country: "España", countryCode: "ES" },
  { city: "Barcelona", country: "España", countryCode: "ES" },
  { city: "Murcia", country: "España", countryCode: "ES" },
];

export const CityListExample = () => (
  <CityList cities={cities} onClickCity={action("Click")}></CityList>
);
