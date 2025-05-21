import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  // Check if the Footer component renders without crashing
  test("renders Footer component without crashing", () => {
    render(<Footer />);
  });

  // Check if the Footer component renders the text "Copyright"
  test('renders the text "Copyright"', () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });
});
