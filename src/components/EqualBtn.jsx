import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Btn } from "../assets/styles/Button";
import {
  add,
  divide,
  equal,
  mul,
  sub,
} from "../features/calculator/calculatorSlice";

const EqualBtn = () => {
  const dispatch = useDispatch();
  const operator = useSelector((state) => state.calculator.operator);

  const handleClick = () => {
    switch (operator) {
      case "add":
        dispatch(add());
        break;
      case "sub":
        dispatch(sub());
        break;
      case "mul":
        dispatch(mul());
        break;
      case "div":
        dispatch(divide());
        break;
    }
    dispatch(equal());
  };

  return (
    <Btn className="operations" onClick={handleClick}>
      =
    </Btn>
  );
};

export default EqualBtn;
