import React from "react";

interface container {
  children?: React.ReactNode;
}
const Container: React.FC<container> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
