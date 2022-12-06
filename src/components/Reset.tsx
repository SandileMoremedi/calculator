import React from "react";
interface Reset {
  previousNumberSet: React.Dispatch<React.SetStateAction<string>>;
  currentNumberSet: React.Dispatch<React.SetStateAction<string>>;
  numberOnScreenSet: React.Dispatch<React.SetStateAction<string>>;
}
const Reset: React.FC<Reset> = ({
  previousNumberSet,
  currentNumberSet,
  numberOnScreenSet,
}) => {
  return (
    <button
      onClick={() => {
        previousNumberSet("0");
        currentNumberSet("0");
        numberOnScreenSet("currentNumber");
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
