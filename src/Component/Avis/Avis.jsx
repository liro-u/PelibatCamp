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
  avis = `j'ai adoré mes séance de fitness avzec eux, ceci est un avis par defaut a remplacer.`,
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
          src="https://cdn.discordapp.com/attachments/1126212462593716359/1171473199796604979/1vm5VA_i9kuxg7mS19Vat47fSaYdlKadEmAHcwIzym22DiGM2WbngFjvceDZsYsQ.png?ex=655cce6f&is=654a596f&hm=c65ccb5a6997631f8558567bbd54229e7f649ae5325567ad580abc646f9a8061&"
        />
        <SingleComment
          name="JASMINE, Etudiante"
          avis="« Mon coach, depuis plus d'un an, m'a apporté un soutien précieux et une expertise bienveillante. M'aidant à perdre 12kg en 6 mois ! Son énergie communicative et son professionnalisme ont été les clés de cette transformation. »  "
          src="https://cdn.discordapp.com/attachments/1126212462593716359/1171473513450836108/1r8ujK7xtwDixkBV_Q_wOqe5PlMZY1_IfdA8qMyyOeBq4zFSdup9b1HnhDR13_g.png?ex=655cceba&is=654a59ba&hm=66dd4d343ccf09dbfd6eb178343bf42e990a05eba0a97430541536ea162c3691&"
        />
        <SingleComment
          name="ADEL, Footballeur professionnel"
          avis="« J'ai contacté JO, dans le cadre de ma préparation avant d'aller en pré saison dans mon club. Il m'a très bien préparé afin d'être près à la reprise. Je suis footballeur professionnel donc j'avais certaines demandes envers lui, et j'ai été très satisfait le travail que l'on a fait était poussé et semblable au sensation d'effort retrouvées en match. » "
          src="https://cdn.discordapp.com/attachments/1126212462593716359/1171474047100518430/1v3fuEvQb5R7E29teSJHD5wedaOWPAxD1Dj2y5Lsv4nTGE88xZXW9Op9K8uH8yIA.png?ex=655ccf39&is=654a5a39&hm=ce4cf1d00978436a9ff190848ec489b75dc37a586fcfbc2e50b75d90f04c4844&"
        />
        <SingleComment
          name="YANIS, Footballeur professionnel"
          avis="« Étant sportif de haut niveaux, j'avais besoin d'une préparation spécifique à mon sport, Jo a pu répondre parfaitement à ses besoins à travers des séances variées. Je le remercie pour son investissement » "
          src="https://cdn.discordapp.com/attachments/1126212462593716359/1171473787527643156/1XSf4_KCoY7cktLvHkrT6gdmlWTY3xYeaE61qBNwg8rVCXHY8oVjLjsO5YaTB2g.png?ex=655ccefb&is=654a59fb&hm=03d2a7f29ee483198209d31a98e9475606e13ca296a731ea7d2f9162f51d8237&"
        />
      </VBox>
    </VBox>
  );
};

export default Avis;
