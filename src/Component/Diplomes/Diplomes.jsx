import React from "react";
import CenterContainer from "../../StructuralComponent/CenterContainer";
import Text from "../../StructuralComponent/Text";
import VBox from "../../StructuralComponent/VBox";
import Image from "../../StructuralComponent/Image";
import MarginContainer from "../../StructuralComponent/MarginContainer";

const Diplomes = () => {
  return (
    <VBox gap="var(--title-spacing)">
      <CenterContainer>
        <Text text="Les Diplomes" />
      </CenterContainer>
      <MarginContainer margin="20px">
        <VBox gap="20px">
          <Image src="diplome.jpg" width="100%" height="100%" />
          <Image src="diplome.jpg" width="100%" height="100%" />
          <Image src="diplome.jpg" width="100%" height="100%" />
          <Image src="diplome.jpg" width="100%" height="100%" />
        </VBox>
      </MarginContainer>
    </VBox>
  );
};

export default Diplomes;
