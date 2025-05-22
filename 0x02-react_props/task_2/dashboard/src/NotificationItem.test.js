import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

test('renders NotificationItem components', () => {
  render(<Notifications />);
  const items = screen.getAllByRole('listitem');
  expect(items.length).toBe(3);
});

test('first NotificationItem renders correct html', () => {
  render(<Notifications />);
  const firstItem = screen.getAllByRole('listitem')[0];
  expect(firstItem).toHaveAttribute('data-notification-type', 'default');
  expect(firstItem.textContent).toBe('New course available');
});