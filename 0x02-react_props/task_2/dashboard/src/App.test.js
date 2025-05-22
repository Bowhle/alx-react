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