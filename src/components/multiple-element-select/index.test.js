import { render, screen } from "@testing-library/react";
import Test from "./index";

test("should render the element correctly", () => {
  render(<Test products={['product-1', 'product-2', 'product-3']} />);
  const elements = screen.getAllByRole("listitem");
  expect(elements).toHaveLength(3);
});
