import { render, screen } from "@testing-library/react";
import Board from "../Board";

describe("Testing Board Elements", () => {
  it("should render h1 element", () => {
    render(<Board />);
    const h1Element = screen.getByRole("heading", {
      name: /Leaderboard/i,
    });
    expect(h1Element).toBeInTheDocument();
  });
  it("should render Search element", () => {
    render(<Board />);
    const inputElement = screen.getByPlaceholderText(/Search User/i);
    expect(inputElement).toBeInTheDocument();
  });
  it("should render Button element", () => {
    render(<Board />);
    const buttonClass = screen.getByRole("button", { name: /All-Time/i });
    expect(buttonClass).toBeInTheDocument();
  });

  it("should render h2 element", () => {
    render(<Board />);
    const h1Element = screen.getByRole("heading", {
      name: /Users/i,
    });
    expect(h1Element).toBeInTheDocument();
  });

  it("should render h2 element", () => {
    render(<Board />);
    const h1Element = screen.getByRole("heading", {
      name: /Edits/i,
    });
    expect(h1Element).toBeInTheDocument();
  });
  it("should have active class element", () => {
    render(<Board />);
    const buttonClass = screen.getByRole("button", { name: /All-Time/i });
    expect(buttonClass).toHaveClass("active");
  });
});
