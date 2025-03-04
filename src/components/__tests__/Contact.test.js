import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Page test cases", () => {
  it("should load the contact us component", () => {
    render(<Contact />);
    // Querying
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside Contact component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load 2 input boxes in the Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length);

    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
