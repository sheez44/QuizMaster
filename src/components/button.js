import React from "react";

const Button = ({ buttonText, onClick, disabled }) => (
  <button onClick={onClick} className="button" disabled={disabled}>
    {buttonText}
  </button>
);

export default Button;
