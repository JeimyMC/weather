import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CityList from "./CityList";

const cities = [
  { city: "Madrid", country: "España" },
  { city: "Barcelona", country: "España" },

  { city: "Murcia", country: "España" },
];

test("should cityList", async () => {
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={() => {}}></CityList>
  );
  const items = await findAllByRole("button");
  expect(items).toHaveLength(3);
});

test("CityList click on item", async () => {
  const fnClickOnItem = jest.fn();
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem}></CityList>
  );
  const items = await findAllByRole("button");
  fireEvent.click(items[0]);
  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
