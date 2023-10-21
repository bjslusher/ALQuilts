import { render, screen } from '@testing-library/react';
import Coming_soon from './comingSoon';

test('renders learn react link', () => {
  render(<Coming_soon />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
