import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { BrowserRouter } from "react-router-dom";

const MockFooter = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};
describe("Testing Footer Elements", () => {
  it("should render heading element", () => {
    render(<MockFooter />);
    const buttonElement = screen.getByRole("heading", { name: /Wikimedia/i });
    expect(buttonElement).toBeInTheDocument();
  });
  it("should render Button element", () => {
    render(<MockFooter />);
    const buttonClass = screen.getByRole("link", {
      name: /Wikimedia Foundation/i,
    });
    expect(buttonClass).toBeInTheDocument();
  });
  it("should have active class element", () => {
    render(<MockFooter />);
    const buttonClass = screen.getByRole("link", { name: /Home/i });
    expect(buttonClass).toBeInTheDocument();
  });
});
