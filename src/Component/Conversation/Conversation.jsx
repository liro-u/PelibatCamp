import React from "react";
import VBox from "../../StructuralComponent/VBox";
import HBox from "../../StructuralComponent/HBox";
import ColorRect from "../../StructuralComponent/ColorRect";
import Text from "../../StructuralComponent/Text";
import MarginContainer from "../../StructuralComponent/MarginContainer";

const Message = ({
  text = "lorem Ipsum",
  borderRadius = "30px",
  backgroundColor = "var(--message-sender-color)",
}) => {
  return (
    <ColorRect
      backgroundColor={backgroundColor}
      style={{
        borderRadius,
        maxWidth: "80%",
      }}
    >
      <MarginContainer margin="10px">
        <Text fontSize="15px" text={text} />
      </MarginContainer>
    </ColorRect>
  );
};

export const SenderMessage = ({ text }) => {
  return (
    <HBox justifyContent="right">
      <Message
        borderRadius="30px 30px 0px 30px"
        text={text}
        backgroundColor="var(--message-sender-color)"
      />
    </HBox>
  );
};

export const ReceiptorMessage = ({ text }) => {
  return (
    <HBox justifyContent="left">
      <Message
        borderRadius="30px 30px 30px 0px"
        text={text}
        backgroundColor="var(--message-receiptor-color)"
      />
    </HBox>
  );
};

export const Conversation = ({ children }) => {
  return <VBox gap="10px">{children}</VBox>;
};
