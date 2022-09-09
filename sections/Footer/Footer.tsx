import FooterBody from "@compositions/FooterBody";
import SubFooter from "@compositions/SubFooter";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <FooterBody />
      <SubFooter />
    </footer>
  );
};

export default Footer;
