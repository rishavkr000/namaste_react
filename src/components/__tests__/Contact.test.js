import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {


  // beforeAll(() => {
  //   console.log("If we want to do something before running all test cases then we can do this here.")
  // })

  // beforeEach(() => {
  //   console.log("If we want to do something before running each test cases then we can do this here.")
  // })

  // afterAll(() => {
  //   console.log("If we want to do something after running all test cases then we can do this here.")
  // })

  // beforeEach(() => {
  //   console.log("If we want to do something after running each test cases then we can do this here.")
  // })


  test("Should the Contact component loaded", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should the Button loaded inside Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should the input name loaded inside the Contact component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Name"); // Querying
    // console.log(input)  // When we do console log there it returns the JSX Element
    expect(input).toBeInTheDocument();
  });

  test("Should 2 input boxes loaded inside the Contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(3);
  });
});
