import React, { useEffect } from "react";
import VBox from "../../StructuralComponent/VBox";
import Text from "../../StructuralComponent/Text";
import ColorRect from "../../StructuralComponent/ColorRect";
import CenterContainer from "../../StructuralComponent/CenterContainer";
import MarginContainer from "../../StructuralComponent/MarginContainer";
import Image from "../../StructuralComponent/Image";
import Card from "../Card";

const Tarif = ({ title, otherInformations, reservationLink, ...content }) => {
  return (
    <ColorRect
      backgroundColor="var(--pastel3)"
      style={{ borderRadius: "30px" }}
      {...content}
    >
      <MarginContainer margin="var(--margin-section)">
        <CenterContainer>
          <VBox style={{ color: "var(--light-color)" }} gap="20px">
            <Text text={title} fontSize="25px" />
            <VBox>
              {otherInformations.map((information, index) => {
                return <Text text={information} fontSize="20px" key={index} />;
              })}
            </VBox>

            {reservationLink && (
              <ColorRect
                style={{ borderRadius: "20px" }}
                backgroundColor="var(--pastel4)"
              >
                <MarginContainer margin={"10px"}>
                  <a
                    href={reservationLink}
                    style={{
                      textDecoration: "none",
                      color: "var(--light-color)",
                    }}
                  >
                    <Text text="Reserver" />
                  </a>
                </MarginContainer>
              </ColorRect>
            )}
          </VBox>
        </CenterContainer>
      </MarginContainer>
    </ColorRect>
  );
};

const Tarifs = ({ ...content }) => {
  return (
    <Card>
      <Image
        id="tarifs"
        width="100%"
        height="100%"
        style={{ borderRadius: "30px" }}
        src="tarif.webp"
      />
    </Card>
  );
};

export default Tarifs;
