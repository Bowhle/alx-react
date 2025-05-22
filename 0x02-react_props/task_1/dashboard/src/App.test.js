import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    test('should contain the Notifications component', () => {
    render(<App />);
    // Assuming Notifications renders this text:
    expect(screen.getByText(/notifications/i)).toBeInTheDocument();
  });

  test('should contain the Header component', () => {
    render(<App />);
    // Assuming Header renders this text:
    expect(screen.getByText(/school dashboard/i)).toBeInTheDocument();
  });

  test('should contain the Login component', () => {
    render(<App />);
    // Assuming Login renders this text:
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
  });

  test('should contain the Footer component', () => {
    render(<App />);
    // Assuming Footer renders this text:
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
  });
});
