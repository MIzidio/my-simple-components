import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children }) => (
  <button style={styles.root} onClick={onClick}>
    {children}
  </button>
);

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
    fontFamily: "arial",
    borderRadius: "20px",
    boxShadow: "2px 2px black",
  },
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
};

export default Button;
