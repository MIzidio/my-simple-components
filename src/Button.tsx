import React from "react";
import CSS from 'csstype';

interface ButtonProps {
  onClick: React.MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button style={buttonStyle} onClick={onClick}>
    {children}
  </button>
);

const buttonStyle: CSS.Properties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  boxSizing: "border-box",
  fontFamily: "arial",
  borderRadius: "20px",
  boxShadow: "2px 2px black",
};

export default Button;
