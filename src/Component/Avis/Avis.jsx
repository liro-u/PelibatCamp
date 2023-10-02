import React from "react";
import VBox from "../../StructuralComponent/VBox";
import Image from "../../StructuralComponent/Image";
import Text from "../../StructuralComponent/Text";
import CenterContainer from "../../StructuralComponent/CenterContainer";

const SingleComment = ({
  name = "Marion",
  src = "photoProfileJoe.png",
  avis = `j'ai adoré mes séance de fitness avzec eux, ceci est un avis par defaut a remplacer.`,
}) => {
  return (
    <CenterContainer>
      <VBox>
        <Image src={src} width="100px" height="100px" />
        <Text text={name} />
        <Text fontSize="20px" text={avis} />
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
      <VBox gap="50px">
        <SingleComment name="Jerome" />
        <SingleComment name="Jasmine" />
        <SingleComment name="Yanis et son frère" />
        <SingleComment name="Magalie" />
      </VBox>
    </VBox>
  );
};

export default Avis;
