import React from "react";
import VBox from "../../StructuralComponent/VBox";
import Image from "../../StructuralComponent/Image";
import Text from "../../StructuralComponent/Text";
import CenterContainer from "../../StructuralComponent/CenterContainer";

const SingleComment = () => {
  return (
    <CenterContainer>
      <VBox>
        <Image src="photoProfileJoe.png" width="100px" height="100px" />
        <Text text="Marion" />
        <Text
          fontSize="20px"
          text={`j'ai adoré mes séance de fitness avzec eux, ceci est un avis par defaut a remplacer.`}
        />
      </VBox>
    </CenterContainer>
  );
};

const Avis = () => {
  return (
    <VBox gap="var(--title-spacing)">
      <CenterContainer>
        <Text text="Ils nous ont fait confiance" />
      </CenterContainer>
      <VBox gap="20px">
        <SingleComment />
        <SingleComment />
      </VBox>
    </VBox>
  );
};

export default Avis;
