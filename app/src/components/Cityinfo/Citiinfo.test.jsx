import React from "react";
import Cityinfo from "./Cityinfo";
import { render } from "@testing-library/react";

test("Cityinfo render", async () => {
  const { findAllByRole } = render(
    <Cityinfo city={"A Coruña"} country={"España"}></Cityinfo>
  );
  const cityComponent = await findAllByRole("heading");
  expect(cityComponent[0]).toHaveTextContent("A Coruña");
});
