import React from "react";
import VBox from "../../StructuralComponent/VBox";
import Image from "../../StructuralComponent/Image";
import Text from "../../StructuralComponent/Text";
import CenterContainer from "../../StructuralComponent/CenterContainer";
import Card from "../Card";
import MarginContainer from "../../StructuralComponent/MarginContainer";

const SingleComment = ({
  name = "Marion",
  src = "photoProfileJoe.png",
  avis = `j'ai adoré mes séance de fitness avec eux, ceci est un avis par defaut a remplacer.`,
}) => {
  return (
    <Card style={{ marginTop: 0 }}>
      <MarginContainer margin="var(--margin-section)">
        <CenterContainer>
          <VBox>
            <Image src={src} width="100%" height="300px" objectFit="contain" />
            <Text text={name} />
            <Text fontSize="20px" text={avis} />
          </VBox>
        </CenterContainer>
      </MarginContainer>
    </Card>
  );
};

const Avis = () => {
  return (
    <VBox gap="var(--title-spacing)">
      <CenterContainer>
        <Text
          text="Ils nous ont fait confiance"
          fontSize="50px"
          fontWeight="bold"
        />
      </CenterContainer>
      <VBox>
        <SingleComment
          name="JEROME, Gérant plombier"
          avis="« C’est LE COACH que je conseille car il est à l’écoute de votre corps et vous fait évoluer rapidement .J’ai grâce à lui repris confiance en moi et en mon corps qui a radicalement changé ainsi que ma vie ! » "
          src="jerome.png"
        />
        <SingleComment
          name="JASMINE, Etudiante"
          avis="« Mon coach, depuis plus d'un an, m'a apporté un soutien précieux et une expertise bienveillante. M'aidant à perdre 12kg en 6 mois ! Son énergie communicative et son professionnalisme ont été les clés de cette transformation. »  "
          src="jasmine.png"
        />
        <SingleComment
          name="ADEL, Footballeur professionnel"
          avis="« J'ai contacté JO, dans le cadre de ma préparation avant d'aller en pré saison dans mon club. Il m'a très bien préparé afin d'être près à la reprise. Je suis footballeur professionnel donc j'avais certaines demandes envers lui, et j'ai été très satisfait le travail que l'on a fait était poussé et semblable au sensation d'effort retrouvées en match. » "
          src="adel.png"
        />
        <SingleComment
          name="YANIS, Footballeur professionnel"
          avis="« Étant sportif de haut niveaux, j'avais besoin d'une préparation spécifique à mon sport, Jo a pu répondre parfaitement à ses besoins à travers des séances variées. Je le remercie pour son investissement » "
          src="yanis.png"
        />
      </VBox>
    </VBox>
  );
};

export default Avis;
