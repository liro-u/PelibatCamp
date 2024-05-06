import React from "react";
import { usePageRatioContext } from "../hooks/usePageRatioContexte";

const Card = ({ children, style }) => {
  const { pageRatio } = usePageRatioContext();

  return (
    <div
      style={{
        margin: "30px",
        marginRight: pageRatio === "tel" ? "inherit" : "25%",
        marginLeft: pageRatio === "tel" ? "inherit" : "25%",
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
