import React from "react";
import VBox from "../../StructuralComponent/VBox";
import Text from "../../StructuralComponent/Text";
import CenterContainer from "../../StructuralComponent/CenterContainer";
import Image from "../../StructuralComponent/Image";

const Product = ({ name, price, src }) => {
  return (
    <CenterContainer>
      <VBox>
        <Image
          src={src}
          style={{ borderRadius: "100%" }}
          width="50%"
          height="50%"
        />
        <Text fontSize="20px" text={name + " " + price} />
      </VBox>
    </CenterContainer>
  );
};

const Vestiaire = () => {
  return (
    <VBox gap="var(--title-spacing)">
      <CenterContainer>
        <Text color="var(--dark-color)" text="Le Vestiaire" />
      </CenterContainer>
      <VBox gap="30px">
        <Product name={"Gourde"} price={"20€"} src={"gourde.jpg"} />
        <Product name={"Tee-Shirt"} price={"35€"} src={"teeShirt.jpg"} />
        <Product name={"Sac à dos"} price={"50€"} src={"sac.jpg"} />
        <Product name={"Chaussette"} price={"8€"} src={"chaussette.jpg"} />
      </VBox>
    </VBox>
  );
};

export default Vestiaire;
