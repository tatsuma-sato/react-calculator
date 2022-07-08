import React from "react";
import { useDispatch } from "react-redux";
import { Btn } from "../assets/styles/Button";
import { mul } from "../features/calculator/calculatorSlice";

const MultiBtn = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(mul());
  };

  return (
    <Btn className="operations" onClick={handleClick}>
      ×
    </Btn>
  );
};

export default MultiBtn;
