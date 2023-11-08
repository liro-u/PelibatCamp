import React from "react";
import VBox from "../../StructuralComponent/VBox";
import CenterContainer from "../../StructuralComponent/CenterContainer";
import Text from "../../StructuralComponent/Text";
import MarginContainer from "../../StructuralComponent/MarginContainer";
import ColorRect from "../../StructuralComponent/ColorRect";
import Image from "../../StructuralComponent/Image";
import { HashLink } from "react-router-hash-link";
import Card from "../Card";

const Formule = ({ title, hashLink, src = "seance.jpg", children }) => {
  return (
    <HashLink
      to={"#" + hashLink}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <Card style={{ marginTop: "0px" }}>
        <MarginContainer margin="20px">
          <VBox gap="20px">
            <CenterContainer>
              <Text text={title} />
            </CenterContainer>
            <Image src={src} width="100%" height="100%" />
            <VBox gap="15px">{children}</VBox>
          </VBox>
        </MarginContainer>
      </Card>
    </HashLink>
  );
};

const Formules = () => {
  return (
    <VBox gap="var(--title-spacing)" id="accompagnement">
      <CenterContainer>
        <Text text="Nos Formules" fontSize="50px" fontWeight="bold" />
      </CenterContainer>
      <VBox gap="0px">
        <Formule title="Programme personnalisé" hashLink="programme_perso">
          <Text
            fontSize="20px"
            text="C’est un plan d’entraînement que je vais élaborer spécifiquement pour toi, qui va te permettre d’atteindre les objectifs que tu t’es fixé."
          />
          <Text
            fontSize="20px"
            text=" Le but est que tu puisses suivre un programme d’entrainement chez toi, en salle de sport ou en extérieur qui sera adapté à tes besoins et à ton équipement."
          />
        </Formule>
        <Formule title="Coaching (solo, duo)" hashLink="coaching">
          <Text
            fontSize="20px"
            text="C’est un accompagnement personnalisé, qui va permettre de te guider, de te suivre et de te soutenir tout au long de ta séance . C’est un suivi sur le plan physique mais aussi psychologique."
          />
          <Text
            fontSize="20px"
            text="On déterminera ensemble tes points forts et tes points faibles, pour élaborer un entrainement sur mesure. "
          />
        </Formule>
        <Formule title="Coaching Visio" hashLink="coaching_visio">
          <Text
            fontSize="20px"
            text="C’est un accompagnement en ligne depuis le lieu de ton choix."
          />
          <Text
            fontSize="20px"
            text="Je vais te guider, te soutenir, tout au long du coaching. Les séances seront établit en fonction de tes objectifs et du matériel que tu as sur place. "
          />
          <Text
            fontSize="20px"
            text="Tu n’as pas de matériel à disposition ? Ce n’est pas grave, tu verras bien assez tôt qu’il est possible de tout sans équipement !"
          />
        </Formule>
        <Formule
          title="Functional training  (lundi et mercredi soir)"
          hashLink="functional_training"
        >
          <Text
            fontSize="20px"
            text="C’est un cours collectif qui vise à maintenir, développer et optimiser le fonctionnement de ton corps. Il privilégie le retour aux mouvements du quotidien et aux exercices pour travailler le corps dans sa globalité.  "
          />
          <Text
            fontSize="20px"
            text="Le groupe permettra de te dépasser mentalement et physiquement."
          />
          <Text
            fontSize="20px"
            text="Aucunes séances ne se ressemblent, la surprise est garantie !! "
          />
        </Formule>
        <Formule title="Randonnée des côteaux" hashLink="rando">
          <Text
            fontSize="20px"
            text="C’est la découverte des sentiers et domaines environnants."
          />
          <Text
            fontSize="20px"
            text="Je te propose de mélanger le sport et la culture en découvrant à pieds ou à VTT le patrimoine local de nos côteaux."
          />
        </Formule>
        <Formule title="Bilan nutrition" hashLink="bilan_nutri">
          <Text
            fontSize="20px"
            text="Nous allons faire ensemble un point sur tes habitudes alimentaires,  les quantités, et les apports nutritionnels dont ton corps à besoin."
          />
          <Text
            fontSize="20px"
            text="Nous allons faire ensemble un point sur tes habitudes alimentaires,  les quantités, et les apports nutritionnels dont ton corps à besoin."
          />
        </Formule>
      </VBox>
    </VBox>
  );
};

export default Formules;
