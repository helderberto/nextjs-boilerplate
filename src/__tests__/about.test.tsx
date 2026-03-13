import { render, screen } from '@testing-library/react';

import About from '../pages/about';

describe('About', () => {
  it('should render the heading', () => {
    render(<About />);

    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  });

  it('should render the description', () => {
    render(<About />);

    expect(
      screen.getByText(/this is a next.js boilerplate project/i),
    ).toBeInTheDocument();
  });
});
