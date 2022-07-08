import React from "react";
import { useDispatch } from "react-redux";
import { Btn } from "../assets/styles/Button";
import { inputNum } from "../features/calculator/calculatorSlice";

const NumBtn = ({ num }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(inputNum(num));
  };

  return (
    <Btn
      className={`${num === 0 ? "btn zero num" : "btn num"}`}
      onClick={handleClick}
    >
      {num}
    </Btn>
  );
};

export default NumBtn;
