import { render, screen } from '@testing-library/react';

import Nav from '..';

describe('<Nav />', () => {
  it('should render the home link', () => {
    render(<Nav />);

    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
      'href',
      '/',
    );
  });

  it('should render the about link', () => {
    render(<Nav />);

    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute(
      'href',
      '/about',
    );
  });
});
