import React from "react";
import { render, screen } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  it("renders one th with colspan=2 when isHeader is true and textSecondCell is null", () => {
    render(<CourseListRow isHeader={true} textFirstCell="Header only" />);
    const th = screen.getByText("Header only");
    expect(th).toBeInTheDocument();
    expect(th.tagName).toBe("TH");
    expect(th).toHaveAttribute("colspan", "2");
  });

  it("renders two th when isHeader is true and textSecondCell is present", () => {
    render(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);
    const ths = screen.getAllByRole("columnheader");
    expect(ths.length).toBe(2);
    expect(ths[0]).toHaveTextContent("Header 1");
    expect(ths[1]).toHaveTextContent("Header 2");
  });

  it("renders two td when isHeader is false", () => {
    render(<CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />);
    const tds = screen.getAllByRole("cell");
    expect(tds.length).toBe(2);
    expect(tds[0]).toHaveTextContent("Cell 1");
    expect(tds[1]).toHaveTextContent("Cell 2");
  });
});