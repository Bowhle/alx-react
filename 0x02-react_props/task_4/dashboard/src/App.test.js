import React from 'react';
import { render, screen } from "@testing-library/react";
import App from './App';

test('App contains the Notifications component', () => {
  render(<App />);
  expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
});

test('App contains the Header component', () => {
  render(<App />);
  expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
});

test('App contains the Login component', () => {
  render(<App />);
  expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
});

test('App contains the Footer component', () => {
  render(<App />);
  expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
});

test('App does not display CourseList by default', () => {
  render(<App />);
  expect(screen.queryByRole("table")).not.toBeInTheDocument();
});

describe('App when isLoggedIn is true', () => {
  beforeEach(() => {
    render(<App isLoggedIn={true} />);
  });

  test('Login component is not displayed', () => {
    expect(screen.queryByText(/Login to access the full dashboard/i)).not.toBeInTheDocument();
  });

  test('CourseList component is displayed', () => {
    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});

