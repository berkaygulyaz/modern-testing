import { render, screen } from "@testing-library/react";
import Test from "./index";

test("should render the element correctly", () => {
  render(<Test suffix="Test"/>);
  const element = screen.getByText(/Test/i);
  const emptyElement = screen.queryByText("Suffix Yok");

  expect(emptyElement).not.toBeInTheDocument();
  expect(element).toBeInTheDocument();
});
