import React from "react";
import HBox from "../../StructuralComponent/HBox";
import IconButton from "../../StructuralComponent/IconButton";
import { HashLink } from "react-router-hash-link";

const FastContact = () => {
  return (
    <HBox justifyContent="center" gap="30px">
      <HashLink
        to={"#contacts"}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <IconButton iconName="call" style={{ color: "#fff" }} />
      </HashLink>
      <HashLink
        to={"#contacts"}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <IconButton iconName="mail" style={{ color: "#fff" }} />
      </HashLink>
    </HBox>
  );
};

export default FastContact;
