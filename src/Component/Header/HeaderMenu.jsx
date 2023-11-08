import React, { useEffect, useState } from "react";
import VBox from "../../StructuralComponent/VBox";
import HBox from "../../StructuralComponent/HBox";
import Text from "../../StructuralComponent/Text";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const HeaderMenuPart = ({
  text,
  lineWidth,
  lineWidthHover,
  lineHeight,
  gap,
  color,
  timeAnimationHover,
  anchor,
}) => {
  const [hover, setHover] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const location = useLocation();

  const toggleHover = () => {
    setHover(!hover);
  };

  useEffect(() => {
    const hashAnchor = location.hash;
    setIsSelected("#" + anchor === hashAnchor);
  }, [location, anchor]);

  return (
    <HashLink
      to={"#" + anchor}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <HBox
        gap={gap}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        style={{ cursor: "pointer" }}
      >
        <VBox justifyContent="center">
          <div
            style={{
              width: !isSelected
                ? hover
                  ? lineWidthHover
                  : lineWidth
                : lineWidth /*lineWidthHover*/,
              height: lineHeight,
              backgroundColor: color,
              transition: "width " + timeAnimationHover,
            }}
          />
        </VBox>
        <Text text={text} color={color} fontSize="15px" />
      </HBox>
    </HashLink>
  );
};

const HeaderMenu = ({
  // HeaderMenu Props
  anchors = [
    { text: "Nos Accompagnements", anchor: "accompagnement" },
    { text: "Tarifs", anchor: "tarifs" },
    { text: "Contact", anchor: "contacts" },
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
            anchor={anchorObject.anchor}
          />
        );
      })}
    </VBox>
  );
};

export default HeaderMenu;
