import React from "react";
interface numberButton {
  num: number;
}
const Button: React.FC<numberButton> = ({ num }) => {
  return <button>{num}</button>;
};

export default Button;
