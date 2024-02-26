import { render, screen } from "@testing-library/react";
import Home from "./Home.js";
import { BrowserRouter } from "react-router-dom";


describe('Home component',()=>{
test("renders home as a text", () => {
  render(<BrowserRouter><Home/></BrowserRouter>);
  const homeElement = screen.getByText("Welcome to Expense Tracker");
  expect(homeElement).toBeInTheDocument();
});
test("renders home as a text", () => {
    render(<BrowserRouter><Home/></BrowserRouter>);
    const homeElement = screen.getByText("Verify Email");
    expect(homeElement).toBeInTheDocument();
  });
  test("renders forgot password as a text", () => {
    render(<BrowserRouter><Home/></BrowserRouter>);
    const homeElement = screen.getByText("Click");
    expect(homeElement).toBeInTheDocument();
  });
  test("renders forgot password as a text", () => {
    render(<BrowserRouter><Home/></BrowserRouter>);
    const homeElement = screen.getByText("Complete Now");
    expect(homeElement).toBeInTheDocument();
  });
});