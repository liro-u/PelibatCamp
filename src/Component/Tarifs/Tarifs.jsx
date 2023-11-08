import React, { useEffect } from "react";
import VBox from "../../StructuralComponent/VBox";
import Text from "../../StructuralComponent/Text";
import ColorRect from "../../StructuralComponent/ColorRect";
import CenterContainer from "../../StructuralComponent/CenterContainer";
import MarginContainer from "../../StructuralComponent/MarginContainer";
import Image from "../../StructuralComponent/Image";

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
    <Image
      id="tarifs"
      width="100%"
      height="100%"
      style={{ borderRadius: "30px" }}
      src="https://cdn.discordapp.com/attachments/1126212462593716359/1171475472031416401/1JVKD_5D_mKV8NAG1pIBLEUlAbic8glbhYxzrhc36mtTQCadbHwfGHUap9nlCZN8.png?ex=655cd08d&is=654a5b8d&hm=2f7013aef7927555d28dc973a0b9f27d074dda7d02ae7f31f174e1a7cad9eb74&"
    />
  );
};

export default Tarifs;
