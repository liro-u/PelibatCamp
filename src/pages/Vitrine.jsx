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
            src="https://cdn.discordapp.com/attachments/1126212462593716359/1171756914141573130/1678095072219.png?ex=655dd6aa&is=654b61aa&hm=2fabcabf802fcf3c63bb3abb2dfa4c1b10ffd601e494a969c73912a85299c921&"
            nom=""
            prenom="Jo"
            citations={[
              "Fort de plusieurs années de pratiques sportives, je souhaite mettre à ton service mon expérience en tant que coach sportif diplômé d’état.",
              "De nature enjoué je me ferai un plaisir de passer un moment convivial avec toi, sans oublier ton objectif qui deviendra le nôtre.",
              "En recherche constante de progression personnel, je me forme au quotidien afin de te proposer un contenu professionnel, original et personnalisé.",
            ]}
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
          />
          <Image
            style={{ margin: "30px" }}
            width="calc(100% - 60px)"
            height="200px"
            objectFit="cover"
            src="https://media.discordapp.net/attachments/1126212462593716359/1171449352095539250/1eYEQEOpiKwZLVkURipPz2E5izSZ2nHOLjt6o-ocN_aP2nDwXzJISNfGARzCztw.png?ex=655cb83a&is=654a433a&hm=3da3ec76265a8a24eec20f65e863a47030220bf106f9f9f053d265bc5a0c5306&=&width=640&height=493"
          />
          <Image
            style={{ margin: "30px", marginTop: 0 }}
            width="calc(100% - 60px)"
            height="200px"
            objectFit="cover"
            src="https://cdn.discordapp.com/attachments/1126212462593716359/1171449443615244318/16p0fzOcAZzHfxQSrkt00KD2s6CBolk7GEP2h9jrtKafGR5tXM1Ox_Kk4lj_q0tI.png?ex=655cb84f&is=654a434f&hm=fa41416ad529e2c43a16808ff2eb2885a9912d4282386dbb0fd25c8edf4ea7f8&"
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
                  text="C’est un coach incroyable, il est à l’écoute de tous. Il
                  ne juge pas et sera toujours derrière toi pour que tu
                  atteignes tes objectifs !
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
          style={{ margin: "30px" }}
          width="calc(100% - 60px)"
          height="200px"
          objectFit="cover"
          src="https://cdn.discordapp.com/attachments/1126212462593716359/1171449561458409482/1BAoHnUMcRvK6wh7vFF0jtPZ0VpFde4yNQYOM1CKodZFzeBLbnjrjBTiTUzB8PY8.png?ex=655cb86b&is=654a436b&hm=fe09b391ff5ab8fbf3c8114115a5c3d6b559d961612e6ab33313b9aca7992d0f&"
        />
        <Image
          style={{ margin: "30px", marginTop: 0 }}
          width="calc(100% - 60px)"
          height="200px"
          objectFit="cover"
          src="https://cdn.discordapp.com/attachments/1126212462593716359/1171449593863606342/1Syw-pIgx-fes-FmP7wKHtg7S4pTPWyrWlJrVHRQlbKiwRZJyzNT1KAC8WBz5BA.png?ex=655cb873&is=654a4373&hm=8a49c45b853d0852b84d232f79609704c367eda79c65a71a1b707bc1507276b8&"
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
            src="videoDemoVitrine.mp4"
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
