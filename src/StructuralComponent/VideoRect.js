import React from "react";
import Video from "./Video";

const VideoRect = ({
  width = "100vw",
  height = "100svh",
  videoPosition = "absolute",

  style = {},
  videoStyle = {},
  childrenStyle = {},
  children,
  ...content
}) => {
  return (
    <div
      style={{
        ...style,
        width,
        height,
        overflow: "hidden",
        transition: "none",
      }}
    >
      <Video
        {...content}
        style={{
          width: "100%",
          height: "100%",
          zIndex: -1,
          position: videoPosition,
          ...videoStyle,
        }}
      />
      <div
        style={{
          overflow: "auto",
          width: "100%",
          height: "100%",
          ...childrenStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default VideoRect;
