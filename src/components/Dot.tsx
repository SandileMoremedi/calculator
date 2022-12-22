import React from "react";

interface Dot {
  currentNumberSet: React.Dispatch<React.SetStateAction<string>>;
}
const Dot: React.FC<Dot> = ({ currentNumberSet }) => {
  return (
    <button
      className="dot"
      onClick={() => {
        currentNumberSet((val) => val + ".");
      }}
    >
      .
    </button>
  );
};
export default Dot;
