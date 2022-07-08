import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Btn } from "../assets/styles/Button";
import { add } from "../features/calculator/calculatorSlice";

const PlusBtn = () => {
  const dispatch = useDispatch();
  const { input, result } = useSelector((state) => state);

  const handleClick = (e) => {
    dispatch(add(input));
  };

  return (
    <Btn className="operations" onClick={handleClick}>
      +
    </Btn>
  );
};

export default PlusBtn;
