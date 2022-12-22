import React from "react";
interface Multiply {
  currentNumber: string;
  previousNumber: string;
  currentNumberSet: React.Dispatch<React.SetStateAction<string>>;
  previousNumberSet: React.Dispatch<React.SetStateAction<string>>;
  numberOnScreenSet: React.Dispatch<React.SetStateAction<string>>;
  operatorSet: React.Dispatch<React.SetStateAction<string>>;
}

const Multiply: React.FC<Multiply> = ({
  currentNumberSet,
  previousNumberSet,
  currentNumber,
  numberOnScreenSet,
  operatorSet,
  previousNumber,
}) => {
  return (
    <button
      className="multiply"
      onClick={() => {
        if (previousNumber == "0") {
          previousNumberSet(currentNumber);
          currentNumberSet("0");
          numberOnScreenSet("previousNumber");
          operatorSet("multiply");
        } else {
          currentNumberSet("0");
          operatorSet("multiply");
        }
      }}
    >
      x
    </button>
  );
};
export default Multiply;
