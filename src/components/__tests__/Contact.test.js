import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Page Test Case", () => {
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
  test("Should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
  test("Should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("submit");

    expect(button).toBeInTheDocument();
  });
  test("Should load button inside contact us component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("name");

    expect(input).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
