import React from "react";
import VBox from "../../StructuralComponent/VBox";
import CenterContainer from "../../StructuralComponent/CenterContainer";
import Text from "../../StructuralComponent/Text";
import Image from "../../StructuralComponent/Image";

const Ordonnance = () => {
  return (
    <VBox gap="var(--title-spacing)">
      <CenterContainer>
        <Text text="Sport Sur Ordonnance" />
      </CenterContainer>
      <CenterContainer>
        <Image
          width="100px"
          objectFit="contain"
          height="100px"
          src="croix.png"
        />
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
            fontSize="25px"
            color="red"
            text="Pour plus de renseignements, tu peux aller consulter le site du gouvernement :"
          />
          <a href="https://www.monparcourshandicap.gouv.fr/actualite/sport-sur-ordonnance-pour-qui-pourquoi-comment">
            <Text
              fontSize="20px"
              text="Sport sur ordonnance | Mon Parcours Handicap"
            />
          </a>
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
