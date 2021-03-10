import React from "react";
import Cityinfo from "./Cityinfo";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Cityinfo",
  component: Cityinfo,
  argTypes: {
    city: { control: { type: "text" } },
    country: { control: { type: "text" } },
  },
};

export const CityExample = (args) => <Cityinfo {...args}></Cityinfo>;

CityExample.args = { city: "A Coruña", country: "España" };
