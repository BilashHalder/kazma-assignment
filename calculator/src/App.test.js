import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux';
import CalculatorReducer from './Reducers/CalculatorReducer';
import {configureStore} from '@reduxjs/toolkit';
import Cal from'./Calculator'; 
const app = require("../../Calculator_Api/app");

const store=configureStore({reducer:CalculatorReducer});
beforeEach(() => {
  
  render(
    <Provider store={store}>
      <App/>
    </Provider>
  );
});

test('renders all Keypad 0-9', () => {
 
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbers.forEach((n) => {
    expect(screen.getByText(n.toString())).toBeInTheDocument();
  });
});


it("Render All Operator", () => {
  const calcOperators = ["+", "-", "*", "/","="];

  calcOperators.forEach((operator) => {
    expect(screen.getByText(operator.toString())).toBeInTheDocument();
  });
});

it("renders an Display input With disabled", () => {
  expect(screen.getAllByTestId("display")).toHaveAttribute["disabled"];
});

it("renders Checkbox with unchecked", () => {
  expect(screen.getByTestId("inputcheckbox").checked).toEqual(false)
});

it("displays users inputs",async () => {
  const one = screen.getByTestId("1");
  const two = screen.getByTestId("2");
  const add = screen.getByTestId("+");
  fireEvent.click(one);
  fireEvent.click(add);
  fireEvent.click(two);
  expect(screen.getByTestId("display")).toHaveValue("1+2");
});


it("Calculation Without Api",async () => {
  const op = screen.getByTestId("=");
  fireEvent.click(op);
  expect(screen.getByTestId("display")).toHaveValue("3");
});


it("Calculation Using Api",async () => {
  const inputcheckbox = screen.getByTestId("inputcheckbox");
  const two = screen.getByTestId("2");
  const add = screen.getByTestId("+");
  const op = screen.getByTestId("=");
  fireEvent.click(add);
  fireEvent.click(two);
  fireEvent.click(inputcheckbox);
  await fireEvent.click(op);
  expect(screen.getByTestId("display")).toHaveValue();
});
