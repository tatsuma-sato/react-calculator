import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonBox,
  ClearBtn,
  CommaBtn,
  DevideBtn,
  EqualBtn,
  InvertBtn,
  MinusBtn,
  MultiBtn,
  PercentBtn,
  PlusBtn,
  Screen,
  Wrapper,
} from "./components";
import NumBtn from "./components/NumBtn";
import { add, inputNum } from "./features/calculator/calculatorSlice";
import { btnValues } from "./utils/buttonValues";

function App() {
  const dispatch = useDispatch();
  const { input, result, showResult } = useSelector(
    (state) => state.calculator
  );

  const [calc, setCalc] = useState({
    operator: "",
    first: 0,
    second: 0,
  });

  const handleClick = (e) => {
    const value = e.target.textContent;
    dispatch(inputNum(value));
  };

  // const handleClick = (e) => {
  //   const value = e.target.textContent;
  //   switch (value) {
  //     case "C":
  //     // reset
  //     case "+/-":
  //       invertClick(value);
  //       break;
  //     case "%":
  //     // percent
  //     case "=":
  //       equalsClick(value);
  //       break;
  //     case "÷" || "×" || "+" || "-":
  //       operatorClick(value);
  //       break;
  //     case ".":
  //       commaClick(value);
  //       break;
  //     default:
  //       numClick(value);
  //   }
  // };

  // const numClick = (value) => {
  //   if (calc.num.length < 16) {
  //     setCalc({
  //       ...calc,
  //       num:
  //         calc.num === 0 && value === "0"
  //           ? "0"
  //           : calc.num % 1 === 0
  //           ? Number(calc.num + value)
  //           : calc.num + value,
  //       result: !calc.operator ? 0 : calc.result,
  //     });
  //   }
  // };

  // const commaClick = (value) => {
  //   setCalc({
  //     ...calc,
  //     num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
  //   });
  // };

  // const operatorClick = (value) => {
  //   setCalc({
  //     ...calc,
  //     operator: value,
  //     result: !calc.result && calc.num ? calc.num : calc.result,
  //     num: 0,
  //   });
  // };

  // const equalsClick = (value) => {
  //   if (calc.operator && calc.num) {
  //     const equation = (a, b, ope) => {
  //       return ope === "+"
  //         ? a + b
  //         : ope === "-"
  //         ? a - b
  //         : ope === "×"
  //         ? a * b
  //         : a / b;
  //     };

  //     setCalc({
  //       ...calc,
  //       result:
  //         calc.num === "0" && calc.operator === "÷"
  //           ? "Error"
  //           : equation(Number(calc.result), Number(calc.num), calc.operator),
  //       operator: "",
  //       num: 0,
  //     });
  //   }
  // };

  // const invertClick = (value) => {
  //   setCalc({
  //     ...calc,
  //     num: calc.num ? calc.num * -1 : 0,
  //     result: calc.result ? calc.result * -1 : 0,
  //     operator: "",
  //   });
  // };

  return (
    <div className="App">
      <Wrapper>
        <Screen value={showResult ? result : input} />
        <ButtonBox>
          {/* {btnValues.flat().map((value, i) => {
            return <Button key={i} value={value}  />;
          })} */}
          <ClearBtn />
          <InvertBtn />
          <PercentBtn />
          <DevideBtn />

          <NumBtn num={7} />
          <NumBtn num={8} />
          <NumBtn num={9} />
          <MultiBtn />

          <NumBtn num={4} />
          <NumBtn num={5} />
          <NumBtn num={6} />
          <MinusBtn />

          <NumBtn num={1} />
          <NumBtn num={2} />
          <NumBtn num={3} />
          <PlusBtn />

          <NumBtn num={0} />
          <CommaBtn />
          <EqualBtn />
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
