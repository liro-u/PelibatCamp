import React from "react";

const Icon = ({
  iconName = "shapes",
  fontSize = "30px",
  color = "inherit",
  // style
  style = {},
  // other props
  ...content
}) => {
  return (
    <span
      className="material-symbols-outlined"
      style={{ color, fontSize, ...style }}
      {...content}
    >
      {iconName}
    </span>
  );
};

export default Icon;
