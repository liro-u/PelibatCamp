import React from "react";
import HBox from "../../StructuralComponent/HBox";
import Text from "../../StructuralComponent/Text";
import VBox from "../../StructuralComponent/VBox";
import Icon from "../../StructuralComponent/Icon";
import Image from "../../StructuralComponent/Image";

const Contact = ({ fontSize = "20px", iconSize = "20px" }) => {
  const CustomIcon = ({ ...content }) => {
    return (
      <Icon
        {...content}
        fontSize={iconSize}
        style={{ height: "min-content", marginTop: "auto" }}
      />
    );
  };

  const CustomText = ({ ...content }) => {
    return (
      <Text
        {...content}
        fontSize={fontSize}
        style={{ height: "min-content", margin: "auto 0" }}
      />
    );
  };

  const CustomHBox = ({ children, ...content }) => {
    return (
      <HBox justifyContent="center" gap="10px">
        {children}
      </HBox>
    );
  };

  const Social = ({ ...content }) => {
    return <Image width="50px" height="50px" {...content} />;
  };

  const Partenaire = ({ ...content }) => {
    return <Image width="70px" height="70px" {...content} />;
  };

  return (
    <VBox gap="20px" style={{ color: "var(--light-color)" }}>
      <Text text="Contact" />
      <HBox justifyContent="center" gap="20px">
        <Social src="insta.webp" />
        <Social src="facebook.png" />
      </HBox>
      <VBox gap="5px">
        <CustomHBox>
          <CustomIcon iconName="mail" />
          <CustomText text="pelibatcamp@gmail.com" />
        </CustomHBox>
        <CustomHBox>
          <CustomIcon iconName="call" />
          <CustomText text="07 54 36 63 49" />
        </CustomHBox>
        <CustomHBox>
          <CustomIcon iconName="location_on" />
          <CustomText text="2 chemin pelibat 64110 Laroin" />
        </CustomHBox>
      </VBox>
      <VBox gap="5px">
        <CustomText text="Ouvert du lundi au vendredi sur rendez-vous" />
        <CustomText text="Accueil téléphonique : 9h00 – 19h30" />
      </VBox>
      <Text text="Nos Partenaires" />
      <Partenaire src="juranconFoot.png" />
    </VBox>
  );
};

export default Contact;
