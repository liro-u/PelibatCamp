import React from "react";
import VBox from "../../StructuralComponent/VBox";
import CenterContainer from "../../StructuralComponent/CenterContainer";
import Text from "../../StructuralComponent/Text";
import MarginContainer from "../../StructuralComponent/MarginContainer";
import Card from "../Card";

const Promesse = ({ title, children }) => {
  return (
    <Card style={{ marginTop: 0 }}>
      <MarginContainer margin="var(--margin-section)">
        <VBox gap="20px">
          <Text text={title} />
          <VBox gap="15px">{children}</VBox>
        </VBox>
      </MarginContainer>
    </Card>
  );
};

const Promesses = () => {
  return (
    <VBox gap="var(--title-spacing)">
      <CenterContainer>
        <Text text="On te promet quoi ?" fontSize="50px" fontWeight="bold" />
      </CenterContainer>
      <VBox gap="0px">
        <Promesse title="Suivi ultra personnalisé">
          <Text
            fontSize="20px"
            text="Le titre parle de lui-même, je t’accompagnerai en fonction de tes objectifs, du temps que tu souhaites y consacrer et d’éventuelles pathologies"
          />
        </Promesse>

        <Promesse title="Résultats garantis">
          <Text
            fontSize="20px"
            text="Rien de mieux que les témoignages pour te faire ta propre idée ! "
          />
        </Promesse>

        <Promesse title="Equipements haut de gamme">
          <Text
            fontSize="20px"
            text="Nous avons choisi de travailler avec du matériels haut de gamme, afin de pouvoir proposer des entrainements complets."
          />
          <Text
            fontSize="20px"
            text="Concept 2, Xebex, Sveltus, Rogue, 2 cages de cross training en plein air …. Et bien d’autres"
          />
        </Promesse>

        <Promesse title="Originalité">
          <Text
            fontSize="20px"
            text="car ta séance se fera en plein air, et dans  nos locaux  à quelques pas de la forêt et des vignes ! Mais aussi la découverte des côteaux à pieds ou à VTT."
          />
          <Text
            fontSize="20px"
            text="Nous te réserverons un accueil chaleureux sur place mais aussi en visio pour ton confort personnel, il ne te reste plus qu’à choisir !"
          />
        </Promesse>

        <Promesse title="De nombreux thèmes">
          <Text
            fontSize="20px"
            text="Les thèmes sur lesquels je vais t’accompagner  sont variés et nombreux ! A nous de trouver ensemble les points à travailler pour que tu sois au top de ta forme."
          />
          <ul>
            <li>
              <Text fontSize="20px" text="Perte de poids" />
            </li>
            <li>
              <Text
                fontSize="20px"
                text="Tonifier et raffermir la silhouette"
              />
            </li>
            <li>
              <Text
                fontSize="20px"
                text="Augmentation de la masse musculaire"
              />
            </li>
            <li>
              <Text
                fontSize="20px"
                text="Amélioration des qualités physiques (force, explosivité…)"
              />
            </li>
            <li>
              <Text fontSize="20px" text="Réduction de la cellulite" />
            </li>
            <li>
              <Text
                fontSize="20px"
                text="Prévention des blessures et maintien de la posture "
              />
            </li>
            <li>
              <Text
                fontSize="20px"
                text="Prévention des maladies cardio-vasculaires"
              />
            </li>
            <li>
              <Text fontSize="20px" text="Prévention" />
            </li>
            <li>
              <Text fontSize="20px" text="Accompagnement sport" />
            </li>
            <li>
              <Text
                fontSize="20px"
                text="Préparation physiques générales (concours, avant-saison, compétitions…)"
              />
            </li>
            <li>
              <Text
                fontSize="20px"
                text="Maintien de l’autonomie (vieillissement, ALD…)"
              />
            </li>
            <li>
              <Text
                fontSize="20px"
                text="Accompagnement pour les structures spécialisées"
              />
            </li>
            <li>
              <Text
                fontSize="20px"
                text="Bien-être mental et gestion du stress"
              />
            </li>
            <li>
              <Text fontSize="20px" text="Ré-équilibrage alimentaire" />
            </li>
          </ul>
        </Promesse>
      </VBox>
    </VBox>
  );
};

export default Promesses;
