import React from "react";
import Weather from "./Weather";
import { render } from "@testing-library/react";

test("should Weather", async () => {
  const { findByRole } = render(
    <Weather temperature={10} state="clear"></Weather>
  );
  const temp = await findByRole("heading");
  expect(temp).toHaveTextContent("10");
});
