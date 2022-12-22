import React from "react";
// We need to make switch/cases that check which operator we are using
interface Equal {
  operator: string;
  currentNumber: string;
  previousNumber: string;
  operatorSet: React.Dispatch<React.SetStateAction<string>>;
  currentNumberSet: React.Dispatch<React.SetStateAction<string>>;
  previousNumberSet: React.Dispatch<React.SetStateAction<string>>;
  numberOnScreenSet: React.Dispatch<React.SetStateAction<string>>;
}

const Equal: React.FC<Equal> = ({
  operator,
  currentNumber,
  previousNumber,
  currentNumberSet,
  previousNumberSet,
  numberOnScreenSet,
}) => {
  // Add Operator
  const PlusF = (current: number, prev: number) => {
    return prev + current;
  };
  // Minus Operator
  const MinusF = (current: number, prev: number) => {
    return prev - current;
  };
  // Divide Operator
  const DivideF = (current: number, prev: number) => {
    return prev / current;
  };
  // Multiply Operator
  const MultiplyF = (current: number, prev: number) => {
    return prev * current;
  };
  const CalculateF = (
    operatorS: string,
    currentNum: string,
    previousNum: string
  ) => {
    switch (operatorS) {
      case "plus":
        if (currentNum.includes(".") && previousNum.includes(".")) {
          let a = PlusF(parseInt(currentNum), parseInt(previousNum));
          previousNumberSet(`${a}`);
          numberOnScreenSet("previousNumber");
          currentNumberSet("0");
        } else {
          let a = PlusF(parseFloat(currentNum), parseFloat(previousNum));
          previousNumberSet(`${a}`);
          numberOnScreenSet("previousNumber");
          currentNumberSet("0");
        }
        break;
      case "minus":
        if (currentNum.includes(".") && previousNum.includes(".")) {
          let b = MinusF(parseInt(currentNum), parseInt(previousNum));
          previousNumberSet(`${b}`);
          numberOnScreenSet("previousNumber");
          currentNumberSet("0");
        } else {
          let b = MinusF(parseFloat(currentNum), parseFloat(previousNum));
          previousNumberSet(`${b}`);
          numberOnScreenSet("previousNumber");
          currentNumberSet("0");
        }
        break;
      case "multiply":
        if (currentNum.includes(".") && previousNum.includes(".")) {
          let c = MultiplyF(parseInt(currentNum), parseInt(previousNum));
          previousNumberSet(`${c}`);
          numberOnScreenSet("previousNumber");
          currentNumberSet("0");
        } else {
          let c = MultiplyF(parseFloat(currentNum), parseFloat(previousNum));
          previousNumberSet(`${c}`);
          numberOnScreenSet("previousNumber");
          currentNumberSet("0");
        }
        break;
      case "divide":
        if (currentNum.includes(".") && previousNum.includes(".")) {
          let d = DivideF(parseInt(currentNum), parseInt(previousNum));
          previousNumberSet(`${d}`);
          numberOnScreenSet("previousNumber");
          currentNumberSet("0");
        } else {
          let d = DivideF(parseFloat(currentNum), parseFloat(previousNum));
          previousNumberSet(`${d}`);
          numberOnScreenSet("previousNumber");
          currentNumberSet("0");
        }
        break;
      default:
        previousNumberSet(`${currentNum}`);
        break;
    }
  };
  return (
    <button
      className="equals"
      onClick={() => {
        CalculateF(operator, currentNumber, previousNumber);
      }}
    >
      {" "}
      =
    </button>
  );
};

export default Equal;
