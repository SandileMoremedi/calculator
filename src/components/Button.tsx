import React, { SetStateAction } from "react";
interface numberButton {
  num: number;
  currentNumberSet: React.Dispatch<SetStateAction<string>>;
  numberOnScreenSet: React.Dispatch<SetStateAction<string>>;
  numberOnScreen: string;
  className: string;
}
const Button: React.FC<numberButton> = ({
  num,
  currentNumberSet,
  numberOnScreenSet,
  numberOnScreen,
  className,
}) => {
  return (
    <button
      onClick={() => {
        if (numberOnScreen == "previousNumber") {
          numberOnScreenSet("currentNumber");
        }
        currentNumberSet((val) => val + `${num}`);
      }}
      className={className}
    >
      {num}
    </button>
  );
};

export default Button;
