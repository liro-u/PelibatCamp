import React, { useEffect } from "react";
import VBox from "../../StructuralComponent/VBox";
import Text from "../../StructuralComponent/Text";
import ColorRect from "../../StructuralComponent/ColorRect";
import CenterContainer from "../../StructuralComponent/CenterContainer";
import MarginContainer from "../../StructuralComponent/MarginContainer";

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
    <VBox {...content} gap="var(--title-spacing)">
      <CenterContainer>
        <Text text="Nos Tarifs" />
      </CenterContainer>
      <VBox gap="20px">
        <Tarif
          title="Programme Personnalisé"
          id="programme_perso"
          otherInformations={["60€ (6 semaines)"]}
        />
        <Tarif
          title="Coaching"
          id="coaching"
          otherInformations={["55€/H", "", "pack de 10 séances 50€/séances"]}
        />
        <Tarif
          title="Coaching Visio"
          id="coaching_visio"
          otherInformations={["50€/H", "", "pack de 10 séances 45€/séances"]}
        />
        <Tarif
          title="Functional training"
          id="functional_training"
          otherInformations={[
            "(cours collectif limité 12 personnes)",
            "",
            "Le Lundi et mercredi 18h30 - 19h30",
            "séance 10€",
            "",
            "mois 60€",
            "(accès aux séances du lundi et mercredi )",
            "",
            "trimestre 55€",
            "(accès aux séances du lundi et mercredi )",
          ]}
          reservationLink="https://liro-u.onrender.com/"
        />
        <Tarif
          title="Entreprise / groupe / structure spécialisée"
          otherInformations={["Devis sur demande."]}
        />
        <Tarif
          title="Randonnée des côteaux"
          id="rando"
          otherInformations={[
            "50€/H pour le groupe",
            "(12 maximum).",
            "",
            "Parcours blanc (1h)",
            "Parcours rosé (2h)",
            "Parcours rouge (3h)",
          ]}
        />
        <Tarif
          title="Bilan nutrition"
          id="bilan_nutri"
          otherInformations={["40€"]}
        />
        <Tarif
          title="Suivi nutrition mois"
          otherInformations={[
            "(accompagnement hebdomadaire 1 fois/semaine)",
            "120€ plan alimentaire inclus",
          ]}
        />
        <Tarif
          title="Pack nutri-sport"
          otherInformations={[
            "1 coaching + 1 bilan nutrition 90€",
            "",
            "1 programme + 1 bilan nutrition 95€",
            "",
            "1 coaching + 1 programme 110€",
            "",
            "1 coaching + 1 programme personnalisé + 1 bilan nutrition 140€",
          ]}
        />
        <Tarif
          title="Pack premium mois"
          otherInformations={[
            "4 coachings",
            "4 suivi alimentation",
            "1 programme personnalisé pour le mois",
            "1 bilan nutrition",
            "400€",
          ]}
        />
      </VBox>
    </VBox>
  );
};

export default Tarifs;
