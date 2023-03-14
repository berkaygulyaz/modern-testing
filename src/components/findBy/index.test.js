import { render, screen } from "@testing-library/react";
import Test from "./index";

test("should render the element correctly", async () => {
  render(<Test />);
  const element = await screen.findByText(/Mehmet/i);

  expect(element).toBeInTheDocument();
});
