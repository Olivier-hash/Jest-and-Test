import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "../components/Greeting";


test('render greeting with correct name', () => { 
  render(<Greeting name={Olivier} />);
  const greetingText = screen.getByText("Hello, Olivier!")
  expect(greetingText).toBeInTheDocument();
 })














// _tests_Greeting.test.jsx
// import { render, screen } from "@testing-library/react";
// import Greeting from "../components/Greeting";

// test("renders greeting with the correct name", () => {
//   render(<Greeting name="Olivier" />);
//   const greetingText = screen.getByText("Hello, Olivier!");
//   expect(greetingText).toBeInTheDocument();
// });import React from "react";
