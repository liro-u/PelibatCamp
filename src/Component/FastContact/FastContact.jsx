import React from "react";
import HBox from "../../StructuralComponent/HBox";
import IconButton from "../../StructuralComponent/IconButton";

const FastContact = () => {
  return (
    <HBox justifyContent="center" gap="30px">
      <IconButton iconName="call" />
      <IconButton iconName="mail" />
    </HBox>
  );
};

export default FastContact;
