import React from "react";
import { useDispatch } from "react-redux";
import { Btn } from "../assets/styles/Button";
import { divide } from "../features/calculator/calculatorSlice";

const DevideBtn = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(divide());
  };

  return (
    <Btn className="operations btn" onClick={handleClick}>
      ÷
    </Btn>
  );
};

export default DevideBtn;
