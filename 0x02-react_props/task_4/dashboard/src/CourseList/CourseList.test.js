import React from "react";
import { render, screen } from "@testing-library/react";
import CourseList from "./CourseList";

describe("CourseList", () => {
  it("renders CourseList component without crashing", () => {
    render(<CourseList />);
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("renders the 5 different rows", () => {
    render(<CourseList />);
    // 2 header rows + 3 body rows = 5 rows
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(5);
  });
});