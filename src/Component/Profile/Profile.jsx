import React from "react";
import VBox from "../../StructuralComponent/VBox";
import Text from "../../StructuralComponent/Text";
import Image from "../../StructuralComponent/Image";
import CenterContainer from "../../StructuralComponent/CenterContainer";
import MarginContainer from "../../StructuralComponent/MarginContainer";

const Citations = ({ fontSize, citations, textAlign }) => {
  return (
    <VBox gap="20px">
      {citations.map((citation, index) => {
        return (
          <Text
            fontSize={fontSize}
            text={citation}
            key={index}
            style={{ textAlign }}
          />
        );
      })}
    </VBox>
  );
};

const ProfilePicture = ({
  src = "photoProfileManon.png",
  borderWidth = "5px",
  borderColor = "var(--secondary)",
}) => {
  return (
    <Image
      src={src}
      style={{
        borderRadius: "100%",
        border: "solid " + borderWidth + " " + borderColor,
      }}
      width="100px"
      height="100px"
    />
  );
};

const Profile = ({
  fontSize = "15px",
  nom = "Nom",
  prenom = "Prenom",
  citations = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mauris nec justo ullamcorper tincidunt. Vivamus vel posuere tortor.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac erat nec libero vehicula pharetra.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt augue a nunc posuere.",
  ],
}) => {
  return (
    <VBox gap="30px">
      <CenterContainer>
        <ProfilePicture />
      </CenterContainer>
      <Text text={prenom + " " + nom} style={{ textAlign: "center" }} />
      <Citations
        fontSize={fontSize}
        citations={citations}
        textAlign={"center"}
      />
      <MarginContainer />
    </VBox>
  );
};

export default Profile;
