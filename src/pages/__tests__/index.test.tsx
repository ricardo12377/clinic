import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const div = screen.getByTestId('first');

    expect(div).toBeInTheDocument();
  });
});
