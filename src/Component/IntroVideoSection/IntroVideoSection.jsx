import React from "react";
import VideoRect from "../../StructuralComponent/VideoRect";
import CenterContainer from "../../StructuralComponent/CenterContainer";
import Text from "../../StructuralComponent/Text";
import VBox from "../../StructuralComponent/VBox";
import FastContact from "../FastContact/FastContact";

const IntroVideoSection = () => {
  return (
    <VideoRect
      autoPlay="true"
      src="videoDemoVitrine.mp4"
      style={{ position: "relative" }}
      videoStyle={{ zIndex: 1 }}
      childrenStyle={{ zIndex: 2, position: "relative" }}
    >
      <VBox justifyContent="center" mainBoxStyle={{ height: "100svh" }}>
        <CenterContainer>
          <Text
            text="Pelibat Camp"
            fontWeight="bold"
            fontSize="60px"
            color="var(--light-color)"
          />
        </CenterContainer>
        <FastContact />
      </VBox>
    </VideoRect>
  );
};

export default IntroVideoSection;
