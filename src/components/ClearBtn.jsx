import React from "react";
import { useDispatch } from "react-redux";
import { Btn } from "../assets/styles/Button";
import { reset } from "../features/calculator/calculatorSlice";

const ClearBtn = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(reset());
  };

  return (
    <Btn className="symbol" onClick={handleClick}>
      C
    </Btn>
  );
};

export default ClearBtn;
