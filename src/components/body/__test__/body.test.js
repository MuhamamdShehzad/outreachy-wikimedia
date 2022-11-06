import { render, screen } from "@testing-library/react";
import Body from "../Body";

describe("Testing Body Elements", () => {
  it("should render Button element", () => {
    render(<Body />);
    const buttonClass = screen.getByRole("link", { name: /Learn More/i });
    expect(buttonClass).toBeInTheDocument();
  });
});
