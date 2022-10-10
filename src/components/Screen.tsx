import React, { useEffect, useState } from "react";
// interface screen {

// }
const Screen: React.FC = () => {
  const [currentNumber, currentNumberSet] = useState(0);
  const [previousNumber, previousNumberSet] = useState(0);
  return (
    <div className="screen">
      <p className="number">{currentNumber}</p>
    </div>
  );
};

export default Screen;
