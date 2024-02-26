import { render, screen } from "@testing-library/react";
import ForgotPassword from "./ForgotPassword";
import { Provider } from "react-redux";
import {store} from '../Reducers/store.js'


test("renders forgot password as a text", () => {
  render(<Provider store={store}><ForgotPassword /></Provider>);
  const forgotPasswordElement = screen.getByText("Forgot Password");
  expect(forgotPasswordElement).toBeInTheDocument();
});