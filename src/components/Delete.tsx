import React from "react";
interface Delete {
  currentNumberSet: React.Dispatch<React.SetStateAction<string>>;
}
const Delete: React.FC<Delete> = ({ currentNumberSet }) => {
  return (
    <button
      className="deleteBtn"
      onClick={() => {
        currentNumberSet((val) => val.slice(0, val.length - 1));
      }}
    >
      Del
    </button>
  );
};

export default Delete;
