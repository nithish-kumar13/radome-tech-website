// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: Footer.js
// Description: This is Component for Footer, Common for all screen
// Author: Nithish Kumar K,
// Revision dates: 11-05-2023,
// List of components: FooterContainer
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import React from "react";
import MediaQuery from "react-responsive";
import { Box } from "theme-ui";
import dynamic from "next/dynamic";

const FooterContainer = dynamic(() =>
  import(/* webpackChunkName: "FooterContainer" */ "./FooterContainer")
);

const Footer = () => {
  return (
    <Box>
      <MediaQuery maxWidth={767}>
        <FooterContainer isMobile />
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={991}>
        <FooterContainer isMobile />
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <FooterContainer />
      </MediaQuery>
    </Box>
  );
};
export default Footer;
