import React from "react";
import ForecasItem from "./ForecasItem";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "ForecasItem",
  component: ForecasItem,
};

export const LunesSoleado = () => (
  <ForecasItem
    hour={10}
    state={"clear"}
    temperature={20}
    weekDay={"Lunes"}
  ></ForecasItem>
);
