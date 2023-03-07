import { render, screen } from '@testing-library/react';
import Test from './index';

test('should render the element correctly', () => {
  render(<Test />);
    //const element = screen.getByRole('button');
    //I WANT TO CONTROL 2ND BUTTON
    //If i have 2 button, i can use option parameter.
    const element = screen.getByRole('button', {
        name: 'Test2'
    });
  expect(element).toBeInTheDocument();
})
  