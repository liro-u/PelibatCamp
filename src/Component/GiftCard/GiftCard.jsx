import React from "react";
import VBox from "../../StructuralComponent/VBox";
import Text from "../../StructuralComponent/Text";
import Image from "../../StructuralComponent/Image";
import Card from "../Card";
import MarginContainer from "../../StructuralComponent/MarginContainer";

const GiftCard = () => {
  return (
    <Card>
      <MarginContainer margin="var(--margin-section)">
        <VBox>
          <Text text="Tu cherches une idée cadeau ?" />
          <Text text="Nous te proposons des bons, valable 1 an !" />
          <Text text="Contacte nous pour plus de précision." />
          <Image
            src="carteCadeau.png"
            width="100%"
            height="100px"
            objectFit="contain"
          />
        </VBox>
      </MarginContainer>
    </Card>
  );
};

export default GiftCard;
