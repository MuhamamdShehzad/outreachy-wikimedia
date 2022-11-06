import { render, screen } from "@testing-library/react";
import About from "../About";

describe("Testing About Elements", () => {
  it("should render About element", () => {
    render(<About />);
    const h1Element = screen.getByRole("heading", { name: /About Wikimedia/i });
    expect(h1Element).toBeInTheDocument();
    /*   const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument(); */
  });

  it("should render img alt element", () => {
    render(<About />);

    const testImage = document.querySelector("img");
    expect(testImage.alt).toContain("Background Img");
  });
  it("should render h3 element", async () => {
    render(<About />);
    const h3Element = await screen.findByText(
      /Need for Open Source Softwares/i
    );
    expect(h3Element).toBeInTheDocument();
  });
});
