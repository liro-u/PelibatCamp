import React from "react";

const Card = ({ children, style }) => {
  return (
    <div
      style={{
        margin: "30px",
        background: "#fff",
        borderRadius: "30px",
        padding: "10px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
