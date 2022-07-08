import React from "react";
import { useDispatch } from "react-redux";
import { Btn } from "../assets/styles/Button";
import { invert } from "../features/calculator/calculatorSlice";

const InvertBtn = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(invert());
  };
  return (
    <Btn className="symbol" onClick={handleClick}>
      +/-
    </Btn>
  );
};

export default InvertBtn;
