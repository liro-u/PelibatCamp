import React from "react";
import HBox from "../../StructuralComponent/HBox";
import Image from "../../StructuralComponent/Image";
import Text from "../../StructuralComponent/Text";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <HBox justifyContent="space-between">
      <HeaderMenu />
      <Image
        src="logoPelibatCamp.png"
        width="100px"
        height="100px"
        style={{ position: "absolute", right: "0" }}
      />
    </HBox>
  );
};

export default Header;
