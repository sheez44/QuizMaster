import React from "react";

export default function Button(props) {
  const buttonStyling = {
    backgroundColor: "lime",
    padding: "10px 40px 10px 20px",
    display: "inline-block",
    cursor: "pointer",
    transition: "all .3s ease",

    ":hover": {
      transform: "scale(1.1)",
      backgroundColor: "red"
    }
  };

  return (
    <button
      onClick={props.onClick}
      className="button"
      style={buttonStyling}
      disabled={props.disabled}
    >
      {props.buttonText}
    </button>
  );
}
