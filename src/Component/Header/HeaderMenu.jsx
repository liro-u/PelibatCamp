import React, { useState } from "react";
import VBox from "../../StructuralComponent/VBox";
import HBox from "../../StructuralComponent/HBox";
import Text from "../../StructuralComponent/Text";

const HeaderMenuPart = ({
  text,
  lineWidth,
  lineWidthHover,
  lineHeight,
  gap,
  color,
  timeAnimationHover,
}) => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <HBox
      gap={gap}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      style={{ cursor: "pointer" }}
    >
      <VBox justifyContent="center">
        <div
          style={{
            width: hover ? lineWidthHover : lineWidth,
            height: lineHeight,
            backgroundColor: color,
            transition: "width " + timeAnimationHover,
          }}
        />
      </VBox>
      <Text text={text} color={color} fontSize="15px" />
    </HBox>
  );
};

const HeaderMenu = ({
  // HeaderMenu Props
  anchors = [
    { text: "Nos Accompagnements", anchor: "" },
    { text: "Tarifs", anchor: "" },
    { text: "Contact", anchor: "" },
  ],
  // HeaderMenuPart Props
  lineWidth = "30px",
  lineWidthHover = "60px",
  lineHeight = "2px",
  gap = "10px",
  color = "var(--light-color)",
  timeAnimationHover = "1s",
}) => {
  return (
    <VBox gap="10px" justifyContent="top">
      {anchors.map((anchorObject, index) => {
        return (
          <HeaderMenuPart
            key={index}
            lineHeight={lineHeight}
            lineWidth={lineWidth}
            lineWidthHover={lineWidthHover}
            gap={gap}
            color={color}
            timeAnimationHover={timeAnimationHover}
            text={anchorObject.text}
          />
        );
      })}
    </VBox>
  );
};

export default HeaderMenu;
