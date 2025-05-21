import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

test('renders without crashing', () => {
  render(<NotificationItem />);
});

test('renders correct html with type and value', () => {
  render(<NotificationItem type="default" value="test" />);
  const item = screen.getByText('test');
  expect(item).toBeInTheDocument();
  expect(item).toHaveAttribute('data-notification-type', 'default');
});

test('renders correct html with html prop', () => {
  render(<NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />);
  const item = screen.getByText('test');
  expect(item.tagName).toBe('U');
  expect(item.closest('li')).toHaveAttribute('data-notification-type', 'urgent');
});