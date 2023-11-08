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
          <Text
            fontSize="20px"
            text="BPGEPS (Activité de la forme option althérophilie, option cour collectif)"
          />
          <Text fontSize="20px" text="BPGEPS (Activité physique pour tous)" />
          <Text
            fontSize="20px"
            text="CS AMAP (Animation et maintien de l'autonomie de la personne)"
          />
          <Text
            fontSize="20px"
            text="CS (optimisé la préparation mentale des sportifs)"
          />
          <Text
            fontSize="20px"
            text="CS (accompagné dans le cadre d'un programme nutritionnel)"
          />
        </VBox>
      </MarginContainer>
    </VBox>
  );
};

export default Diplomes;
