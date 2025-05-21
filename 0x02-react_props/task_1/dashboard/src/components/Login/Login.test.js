import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  // Check if Login renders without crashing
  test("renders Login component without crashing", () => {
    render(<Login />);
  });

  // Check if Login renders 2 input tags and 2 label tags
  test("renders 2 input tags and 2 label tags", () => {
    render(<Login />);
    const inputs = screen.getAllByRole("textbox");
    const passwordInputs = screen.getAllByLabelText(/Password:/i);
    // There is one email input (role textbox) and one password input (role is not textbox)
    // So, count all input elements:
    const allInputs =
      screen.getAllByRole("textbox").length +
      screen.getAllByLabelText(/Password:/i).length;
    expect(allInputs).toBe(2);

    const labels = screen.getAllByText(/Email:|Password:/i);
    expect(labels.length).toBe(2);
  });
});