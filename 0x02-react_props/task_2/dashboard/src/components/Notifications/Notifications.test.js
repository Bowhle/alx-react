import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications tests', () => {
  it('should render without crashing', () => {
    render(<Notifications />);
    const notificationsComponent = screen.getByRole('list');
    expect(notificationsComponent).toBeInTheDocument();
  });

  it('should render three list items', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  it('should render the text Here is the list of notifications', () => {
    render(<Notifications />);
    const textElement = screen.getByText(/Here is the list of notifications/i);
    expect(textElement).toBeInTheDocument();
  });
});
