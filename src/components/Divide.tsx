import React from "react";

interface Divide {
  currentNumber: string;
  currentNumberSet: React.Dispatch<React.SetStateAction<string>>;
  previousNumberSet: React.Dispatch<React.SetStateAction<string>>;
  numberOnScreenSet: React.Dispatch<React.SetStateAction<string>>;
  operatorSet: React.Dispatch<React.SetStateAction<string>>;
  previousNumber: string;
}

const Divide: React.FC<Divide> = ({
  currentNumberSet,
  previousNumberSet,
  currentNumber,
  numberOnScreenSet,
  operatorSet,
  previousNumber,
}) => {
  return (
    <button
      className="divide"
      onClick={() => {
        if (previousNumber == "0") {
          previousNumberSet(currentNumber);
          currentNumberSet("0");
          numberOnScreenSet("previousNumber");
          operatorSet("divide");
        } else {
          currentNumberSet("0");
          operatorSet("divide");
        }
      }}
    >
      /
    </button>
  );
};

export default Divide;
