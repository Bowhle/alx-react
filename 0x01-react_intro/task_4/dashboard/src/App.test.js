import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  it('should render without crashing', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', { name: 'School dashboard' });
    expect(headingElement).toBeInTheDocument();
  });

  it('should render a div with the class App-header', () => {
    render(<App />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('App-header');
  });

  it('should render a div with the class App-body', () => {
    render(<App />);
    const bodyElement = document.querySelector('.App-body');
    expect(bodyElement).toBeInTheDocument();
  });

  it('should render a div with the class App-footer', () => {
    render(<App />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('App-footer');
  });
});
