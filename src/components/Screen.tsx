import React, { useEffect, useState } from "react";
interface Screen {
  currentNumber: string;
  previousNumber: string;
  numberOnScreen: string;
}
const Screen: React.FC<Screen> = ({
  currentNumber,
  previousNumber,
  numberOnScreen,
}) => {
  return (
    <div className="screen">
      {numberOnScreen == "currentNumber" ? (
        <p className="number">{currentNumber}</p>
      ) : (
        <p className="number">{previousNumber}</p>
      )}
    </div>
  );
};

export default Screen;
