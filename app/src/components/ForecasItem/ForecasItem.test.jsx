import React from "react";
import { render } from "@testing-library/react";
import ForecasItem from "./../ForecasItem/ForecasItem";

test("should ForecasItem", async () => {
  const { findByText } = render(
    <ForecasItem
      hour={10}
      weekDay={"Viernes"}
      temperature={15}
      state={"clear"}
    ></ForecasItem>
  );
  const hour = await findByText(/10/);
  const weekDay = await findByText(/Viernes/);
  const temperature = await findByText(/15/);

  expect(hour).toHaveTextContent("Hora: 10");
  expect(weekDay).toHaveTextContent("Día: Viernes");
  expect(temperature).toHaveTextContent("15 º");
});
