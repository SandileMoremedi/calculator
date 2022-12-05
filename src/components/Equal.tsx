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
  switch (operator) {
    case "plus":
      PlusF(parseInt(currentNumber), parseInt(previousNumber));
      break;
  }
  return <button> =</button>;
};

export default Equal;
