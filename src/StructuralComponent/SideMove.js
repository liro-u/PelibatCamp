import React, { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";

const SideMove = ({
  delay = 0,
  time = 1,
  translateXStart = "-100%",
  translateXEnd = "0",
  translateYStart = "0",
  translateYEnd = "0",
  newCondition = null,
  //children
  children,
  //style
  style,
}) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      className="textApparition"
      ref={ref}
      style={{
        ...style,
        transform: (newCondition !== null ? newCondition : isVisible)
          ? "translateX(" +
            translateXEnd +
            ") translateY(" +
            translateYEnd +
            ")"
          : "translateX(" +
            translateXStart +
            ") translateY(" +
            translateYStart +
            ")",
        transition: "all " + time + "s",
        transitionDelay: delay + "ms",
      }}
    >
      {children}
    </div>
  );
};

export default SideMove;
