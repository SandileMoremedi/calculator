import React from "react";

// The number is for the amount of items in the row,
// this will make it easier to use styles for different numbered rows
interface row {
  children: React.ReactNode;
  number: string;
}
const Row: React.FC<row> = ({ children, number }) => {
  return <div className={`row ${number}`}>{children}</div>;
};
export default Row;
