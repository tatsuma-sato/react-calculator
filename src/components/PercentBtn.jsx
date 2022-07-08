import React from "react";
import { useDispatch } from "react-redux";
import { Btn } from "../assets/styles/Button";
import { percent } from "../features/calculator/calculatorSlice";

const PercentBtn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(percent());
  };
  return (
    <Btn className="symbol" onClick={handleClick}>
      %
    </Btn>
  );
};

export default PercentBtn;
