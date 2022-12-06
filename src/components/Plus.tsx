import React from "react";

interface Plus {
  currentNumber: string;
  currentNumberSet: React.Dispatch<React.SetStateAction<string>>;
  previousNumberSet: React.Dispatch<React.SetStateAction<string>>;
  numberOnScreenSet: React.Dispatch<React.SetStateAction<string>>;
  operatorSet: React.Dispatch<React.SetStateAction<string>>;
  operator: string;
  previousNumber: string;
}
const Plus: React.FC<Plus> = ({
  currentNumberSet,
  previousNumberSet,
  currentNumber,
  numberOnScreenSet,
  operatorSet,
  operator,
  previousNumber,
}) => {
  return (
    <button
      onClick={() => {
        if (previousNumber == "0") {
          previousNumberSet(currentNumber);
          currentNumberSet("0");
          numberOnScreenSet("previousNumber");
          operatorSet("plus");
        } else {
          // previousNumberSet(currentNumber);
          currentNumberSet("0");
          operatorSet("plus");
        }
      }}
    >
      +
    </button>
  );
};

export default Plus;
