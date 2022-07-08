import React from "react";
import { useDispatch } from "react-redux";
import { Btn } from "../assets/styles/Button";
import { sub } from "../features/calculator/calculatorSlice";

const MinusBtn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(sub());
  };
  return (
    <Btn className="operations" onClick={handleClick}>
      -
    </Btn>
  );
};

export default MinusBtn;
