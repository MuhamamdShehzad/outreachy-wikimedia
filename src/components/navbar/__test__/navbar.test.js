import { render, screen } from "@testing-library/react";
import Navbar1 from "../Navbar1";
import { BrowserRouter } from "react-router-dom";

const MockNavbar = () => {
  return (
    <BrowserRouter>
      <Navbar1 />
    </BrowserRouter>
  );
};
describe("Testing Navbar Elements", () => {
  it("should contain link element", () => {
    render(<MockNavbar />);
    const linkElement = screen.getByRole("link", {
      name: /Home/i,
    });
    expect(linkElement).toBeInTheDocument();
  });
  it("should contain heading element", () => {
    render(<MockNavbar />);
    const headingElement = screen.getByText(/Wikimedia/i);
    expect(headingElement).toBeInTheDocument();
  });
});
