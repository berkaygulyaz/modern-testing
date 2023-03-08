import { render, screen } from "@testing-library/react";
import Test from "./index";

test("should render the element correctly", () => {
  render(<Test />);
  const element = screen.getByPlaceholderText("Enter your username");
  expect(element).toBeInTheDocument();
});
