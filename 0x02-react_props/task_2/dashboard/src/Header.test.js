import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

// Test suite for the Header component
describe("Header component", () => {
  // Test case to check if the Header component renders without crashing
  test("renders Header component without crashing", () => {
    render(<Header />);
  });

  // Test case to check if the Header component contains the ALX logo
  test("contains ALX logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("ALX Logo");
    expect(logo).toBeInTheDocument();
  });

  // Test case to check if the Header component contains the title "School dashboard"
  test("contains title 'School dashboard'", () => {
    render(<Header />);
    const title = screen.getByText("School dashboard");
    expect(title).toBeInTheDocument();
  });
});
