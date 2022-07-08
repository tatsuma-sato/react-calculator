import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Btn } from "../assets/styles/Button";
import { inputNum } from "../features/calculator/calculatorSlice";

const Button = ({ value }) => {
  const dispatch = useDispatch();
  const { input, result } = useSelector((state) => state.calculator);
console.log(value);
  const handleClick = (e) => {
    const value = e.target.textContent;
    dispatch(inputNum(value));
  };

  if (!value && value !== 0) return;

  let className = "";
  if (value === 0) {
    className = "zero";
  } else if (typeof value === "number" || value === ".") {
    className = "number";
  } else if (
    value === "C" ||
    value === "+/-" ||
    value === "%" ||
    value === "/"
  ) {
    className = "symbol";
  } else if (value === "0") {
    className = "zero";
  } else {
    className = "operations";
  }

  return (
    <Btn className={className} onClick={handleClick}>
      {value}
    </Btn>
  );
};

export default Button;
