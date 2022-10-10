import React from "react";
interface keypad {
  children: React.ReactNode;
}
const Keypad: React.FC<keypad> = ({ children }) => {
  return <div className="keypad">{children}</div>;
};

export default Keypad;
