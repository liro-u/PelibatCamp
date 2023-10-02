import React from "react";
import VBox from "../../StructuralComponent/VBox";
import CenterContainer from "../../StructuralComponent/CenterContainer";
import Text from "../../StructuralComponent/Text";

const Ordonnance = () => {
  return (
    <VBox gap="var(--title-spacing)">
      <CenterContainer>
        <Text text="Sport Sur Ordonnance" />
      </CenterContainer>
      <CenterContainer>
        <VBox gap="20px">
          <Text
            fontSize="20px"
            text="Depuis mars 2017, il est possible de se faire prescrire une activité sportive adaptée (APA) sur ordonnance (voir de quoi il s’agit)."
          />
          <Text
            fontSize="20px"
            text="Cette mesure, qui vise à reconnaître le sport comme un « médicament », ne concerne toutefois qu’une certaine catégorie de patients, à savoir les personnes souffrant d’une Affection Longue Durée (voir qui peut bénéficier du sport sur ordonnance)."
          />
          <Text
            fontSize="20px"
            text="Sport sur ordonnance : qui peut en bénéficier et quelle est la prise en charge ?"
          />
          <Text text="" />
          <Text
            fontSize="20px"
            text="Titulaire du CS AMAP (certificat de spécialisation Animation et Maintien de l’Autonomie de la Personne), je suis en mesure de t’accompagner. Pour cela, rapproche toi de ton médecin et  de ta mutuelle pour savoir si tu peux bénéficier de remboursement."
          />
        </VBox>
      </CenterContainer>
    </VBox>
  );
};

export default Ordonnance;
