import React from "react";
import VBox from "../StructuralComponent/VBox";
import Header from "../Component/Header/Header";
import MarginContainer from "../StructuralComponent/MarginContainer";
import Profile from "../Component/Profile/Profile";
import IntroVideoSection from "../Component/IntroVideoSection/IntroVideoSection";
import ColorRect from "../StructuralComponent/ColorRect";
import Text from "../StructuralComponent/Text";
import CenterContainer from "../StructuralComponent/CenterContainer";
import {
  SenderMessage,
  ReceiptorMessage,
  Conversation,
} from "../Component/Conversation/Conversation";
import HBox from "../StructuralComponent/HBox";
import IconButton from "../StructuralComponent/IconButton";

const CustomProfile = ({ backgroundColor, ...content }) => {
  return (
    <ColorRect backgroundColor={backgroundColor}>
      <MarginContainer
        margin="calc(var(--margin-section) * 2)"
        marginLeft="var(--margin-section)"
        marginRight="var(--margin-section)"
      >
        <Profile {...content} />
      </MarginContainer>
    </ColorRect>
  );
};

const Vitrine = () => {
  return (
    <VBox style={{ overflow: "hidden" }}>
      {/*---------- HEADER ----------*/}
      <MarginContainer
        margin={"var(--margin-section)"}
        style={{ position: "absolute", top: 0, left: 0, right: 0 }}
      >
        <Header />
      </MarginContainer>

      {/*---------- INTRO VIDEO SECTION ----------*/}
      <IntroVideoSection />

      {/*---------- PROFILES ----------*/}
      <ColorRect backgroundColor="var(--primary)">
        <VBox>
          <CustomProfile
            src="photoProfileJoe.png"
            nom=""
            prenom="Jo"
            citations={[
              "Fort de plusieurs années de pratiques sportives, je souhaite mettre à ton service mon expérience en tant que coach sportif diplômé d’état.",
              "De nature enjoué je me ferai un plaisir de passer un moment convivial avec toi, sans oublier ton objectif qui deviendra le nôtre.",
              "En recherche constante de progression personnel, je me forme au quotidien afin de te proposer un contenu professionnel, original et personnalisé.",
            ]}
            backgroundColor="var(--pastel1)"
          />
          <CustomProfile
            src="photoProfileManon.png"
            nom="Bordes"
            prenom="Manon"
            citations={[
              "Business Girl dans l’âme depuis mon plus jeune âge, je me lance mon plus grand défi… Créer notre propre société !",
              "Le relationnel client étant ma priorité, je serai ravie de t’accompagner dans notre nouvelle aventure !",
              "Te renseigner sur notre société ou bien sur la couleur de tes lacets, j’y mettrai autant de passion !",
            ]}
            backgroundColor="var(--pastel2)"
          />
        </VBox>
      </ColorRect>

      {/*---------- Interview Couple ----------*/}
      <ColorRect backgroundColor="var(--primary)">
        <MarginContainer margin="var(--margin-section)">
          <CenterContainer>
            <Text color="var(--light-color)" text="Tous savoir sur nous" />
          </CenterContainer>
          <MarginContainer margin="10px">
            <Conversation>
              <ReceiptorMessage text="Racontez-nous en un peu plus, s'il vous plait" />
              <SenderMessage text="Pour la petite histoire, nous sommes un jeune couple de Laroin qui avons décidé de créer notre entreprise au sein du village." />
              <SenderMessage text="Après plusieurs expériences dans le domaine du sport nous souhaitons proposer un accompagnement ultra-personnalisé et ouvert à tous ! Le cadre est reposant, l’équipement très complet et l’ambiance est familiale. Voilà ce qui est le plus important pour nous." />
              <SenderMessage text="Pour être bien dans sa tête, il faut être bien dans son corps ! Alors n’hésite pas à sauter le pas, nous serons ravis de répondre à tes questions." />
              <ReceiptorMessage text="Allons un peu plus loin…" />
              <ReceiptorMessage text="Manon, on t’écoute il est comment Jonathan ?" />
              <SenderMessage text="C’est un coach incroyable, il est à l’écoute de tous. Il ne juge pas et sera toujours derrière toi pour que tu atteignes tes objectifs !" />
              <ReceiptorMessage text="Jonathan, et Manon ? dit nous tout !" />
              <SenderMessage text="Elle déborde d’énergie, souriante, accueillante, elle est toujours à la recherche de nouvelles idées, afin de nous développer !" />
            </Conversation>
          </MarginContainer>
        </MarginContainer>
      </ColorRect>
    </VBox>
  );
};

export default Vitrine;
