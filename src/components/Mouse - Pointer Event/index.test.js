import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Test from "./index";

test("should render the element correctly", async () => {
  const user = userEvent.setup();
  render(<Test suffix="Test"/>);
  await user.pointer({
    keys: '[MouseLeft]',
    target: screen.getByRole('button', {name: 'Increment'})
  })

  expect(screen.getByRole('heading')).toHaveTextContent('1')
});
