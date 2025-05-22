import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('menu item is displayed when displayDrawer is false', () => {
    render(<Notifications />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });

  test('div.Notifications is not displayed when displayDrawer is false', () => {
    render(<Notifications />);
    expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
  });

  test('menu item is displayed when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });

  test('div.Notifications is displayed when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  });
});
