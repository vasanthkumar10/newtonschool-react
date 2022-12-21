import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("renders learn react link", () => {
  render(<Button text="toggle" />);
  const linkElement = screen.getByText("toggle");
  expect(linkElement).toBeInTheDocument();
});
