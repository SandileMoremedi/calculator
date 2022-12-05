import React from "react";

interface Plus {
  currentNumber: string;
  currentNumberSet: React.Dispatch<React.SetStateAction<string>>;
  previousNumberSet: React.Dispatch<React.SetStateAction<string>>;
  numberOnScreenSet: React.Dispatch<React.SetStateAction<string>>;
  operatorSet: React.Dispatch<React.SetStateAction<string>>;
  operator: string;
}
const Plus: React.FC<Plus> = ({
  currentNumberSet,
  previousNumberSet,
  currentNumber,
  numberOnScreenSet,
  operatorSet,
  operator,
}) => {
  return (
    <button
      onClick={() => {
        previousNumberSet(currentNumber);
        currentNumberSet("0");
        numberOnScreenSet("previousNumber");
        operatorSet("plus");
      }}
    >
      +
    </button>
  );
};

export default Plus;
