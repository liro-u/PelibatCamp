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
import Contact from "../Component/Contact/Contact";
import GiftCard from "../Component/GiftCard/GiftCard";
import Vestiaire from "../Component/Vestiaire/Vestiaire";
import Tarifs from "../Component/Tarifs/Tarifs";
import Video from "../StructuralComponent/Video";
import Avis from "../Component/Avis/Avis";
import Ordonnance from "../Component/Ordonnance/Ordonnance";
import Diplomes from "../Component/Diplomes/Diplomes";
import Promesses from "../Component/Promesses/Promesses";
import Formules from "../Component/Formules/Formules";
import Card from "../Component/Card";
import Image from "../StructuralComponent/Image";
import { usePageRatioContext } from "../hooks/usePageRatioContexte";

const CustomProfile = ({ ...content }) => {
  return (
    <Card>
      <MarginContainer
        margin="calc(var(--margin-section) * 2)"
        marginLeft="var(--margin-section)"
        marginRight="var(--margin-section)"
      >
        <Profile {...content} />
      </MarginContainer>
    </Card>
  );
};

const Vitrine = () => {
  const { pageRatio } = usePageRatioContext();
  return (
    <ColorRect style={{ zIndex: -1 }} backgroundColor="#538135">
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
          />
          <CustomProfile
            src="photoProfileManon.webp"
            nom="Bordes"
            prenom="Manon"
            citations={[
              "Business Girl dans l’âme depuis mon plus jeune âge, je me lance mon plus grand défi… Créer notre propre société !",
              "Le relationnel client étant ma priorité, je serai ravie de t’accompagner dans notre nouvelle aventure !",
              "Te renseigner sur notre société ou bien sur la couleur de tes lacets, j’y mettrai autant de passion !",
            ]}
          />
          <Image
            style={{
              margin: "30px",
              marginLeft: pageRatio === "tel" ? "inherit" : "25%",
              marginRight: pageRatio === "tel" ? "inherit" : "25%",
              borderRadius: "30px",
            }}
            width={pageRatio === "tel" ? "calc(100% - 60px)" : "50%"}
            height="200px"
            objectFit="cover"
            src="outdoor1.png"
          />
          <Image
            style={{
              margin: "30px",
              marginTop: 0,
              marginLeft: pageRatio === "tel" ? "inherit" : "25%",
              marginRight: pageRatio === "tel" ? "inherit" : "25%",
              borderRadius: "30px",
            }}
            width={pageRatio === "tel" ? "calc(100% - 60px)" : "50%"}
            height="200px"
            objectFit="cover"
            src="outdoor2.png"
          />
        </VBox>

        {/*---------- Interview Couple ----------*/}
        <Card>
          <MarginContainer margin="var(--margin-section)">
            <CenterContainer>
              <Text text="Le Live Pelibat Camp" fontSize="50px" />
            </CenterContainer>
            <MarginContainer margin="10px">
              <Conversation>
                <h1>Racontez-nous en un peu plus, s'il vous plait</h1>
                <p>
                  Pour la petite histoire, nous sommes un jeune couple de Laroin
                  qui avons décidé de créer notre entreprise au sein du village.
                </p>
                <p>
                  Après plusieurs expériences dans le domaine du sport nous
                  souhaitons proposer un accompagnement ultra-personnalisé et
                  ouvert à tous ! Le cadre est reposant, l’équipement très
                  complet et l’ambiance est familiale. Voilà ce qui est le plus
                  important pour nous.
                </p>
                <p>
                  Pour être bien dans sa tête, il faut être bien dans son
                  corps ! Alors n’hésite pas à sauter le pas, nous serons ravis
                  de répondre à tes questions.
                </p>
                <h1>Allons un peu plus loin…</h1>
                <h3>Manon, on t’écoute il est comment Jonathan ?</h3>
                <p>
                  C’est un coach incroyable, il est à l’écoute de tous. Il ne
                  juge pas et sera toujours derrière toi pour que tu atteignes
                  tes objectifs !
                </p>
                <h3>Jonathan, et Manon ? dit nous tout !</h3>
                <p>
                  Elle déborde d’énergie, souriante, accueillante, elle est
                  toujours à la recherche de nouvelles idées, afin de nous
                  développer !
                </p>
              </Conversation>
            </MarginContainer>
          </MarginContainer>
        </Card>

        <Image
          style={{
            margin: "30px",
            marginLeft: pageRatio === "tel" ? "inherit" : "25%",
            marginRight: pageRatio === "tel" ? "inherit" : "25%",
            borderRadius: "30px",
          }}
          width={pageRatio === "tel" ? "calc(100% - 60px)" : "50%"}
          height="200px"
          objectFit="cover"
          src="outdoor3.png"
        />
        <Image
          style={{
            margin: "30px",
            marginTop: 0,
            marginLeft: pageRatio === "tel" ? "inherit" : "25%",
            marginRight: pageRatio === "tel" ? "inherit" : "25%",
            borderRadius: "30px",
          }}
          width={pageRatio === "tel" ? "calc(100% - 60px)" : "50%"}
          height="200px"
          objectFit="cover"
          src="outdoor4.png"
        />

        {/*---------- Diplomes ----------*/}
        <Card>
          <MarginContainer margin="var(--margin-section)">
            <Diplomes />
          </MarginContainer>
        </Card>

        {/*---------- Promesses ----------*/}
        <Promesses />

        {/*---------- Formules ----------*/}
        <Formules />

        {/*---------- Sport Sur Ordonnance ----------*/}
        <Card>
          <MarginContainer margin="var(--margin-section)">
            <Ordonnance />
          </MarginContainer>
        </Card>

        {/*---------- Avis ----------*/}
        <Avis />

        {/*---------- Video ----------*/}
        <MarginContainer margin={"10px"}>
          <Video
            width="100%"
            height="calc(100%)"
            src="demoVideo.mp4"
            style={{ borderRadius: "10px" }}
            autoPlay="true"
          />
        </MarginContainer>

        {/*---------- Tarifs ----------*/}

        <MarginContainer margin="var(--margin-section)">
          <Tarifs />
        </MarginContainer>

        {/*---------- Shop ----------*/}
        <VBox gap="10px">
          <Vestiaire />
          <GiftCard />
        </VBox>

        {/*---------- Contact ----------*/}
        <ColorRect backgroundColor="#333">
          <CenterContainer>
            <MarginContainer margin="20px">
              <Contact />
            </MarginContainer>
          </CenterContainer>
        </ColorRect>
      </VBox>
    </ColorRect>
  );
};

export default Vitrine;
