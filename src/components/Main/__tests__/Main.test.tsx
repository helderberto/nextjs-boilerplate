import { render, screen } from '@testing-library/react';

import Main from '..';

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /next.js boilerplate/i }),
    ).toBeInTheDocument();
  });

  it('should render the description', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /typescript, reactjs, nextjs/i }),
    ).toBeInTheDocument();
  });
});
