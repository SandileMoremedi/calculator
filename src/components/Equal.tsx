import React from "react";
const { log } = console;

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
        let a = PlusF(parseInt(currentNum), parseInt(previousNum));
        previousNumberSet(`${a}`);
        numberOnScreenSet("previousNumber");
        currentNumberSet("0");
        log(previousNumber, currentNumber);
        break;
      case "minus":
        let b = MinusF(parseInt(currentNum), parseInt(previousNum));
        previousNumberSet(`${b}`);
        currentNumberSet("0");
        numberOnScreenSet("previousNumber");
        break;
      case "multiply":
        let c = MultiplyF(parseInt(currentNum), parseInt(previousNum));
        previousNumberSet(`${c}`);
        currentNumberSet("0");
        numberOnScreenSet("previousNumber");
        break;
      case "divide":
        let d = DivideF(parseInt(currentNum), parseInt(previousNum));
        previousNumberSet(`${d}`);
        currentNumberSet("0");
        numberOnScreenSet("previousNumber");
        break;
      default:
        previousNumberSet(`${currentNum}`);
        break;
    }
  };
  return (
    <button
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
