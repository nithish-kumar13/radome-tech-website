// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: index.js
// Description: This is Component, AboutUsHero,
// Author: Nithish Kumar K,
// Revision dates: 11-05-2023,
// List of components: AboutUsHeroContainer
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import React from "react";
import MediaQuery from "react-responsive";
import { Box, Container } from "theme-ui";
import dynamic from "next/dynamic";

const AboutUsHeroContainer = dynamic(() =>
  import(
    /* webpackChunkName: "AboutUsHeroContainer" */ "./AboutUsHeroContainer"
  )
);

const AboutUsHero = (props) => {
  return (
    <Box>
      <MediaQuery maxWidth={767}>
        <Box
          sx={{
            position: "relative",
            mx: 30,
            marginTop: "10%",
            mb: 80,
          }}
        >
          <AboutUsHeroContainer isMobile {...props} />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={991}>
        <Box
          sx={{
            position: "relative",
            mx: 30,
            marginTop: "10%",
            mb: 80,
          }}
        >
          <AboutUsHeroContainer isMobile {...props} />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <Container
          sx={{
            maxWidth: "desktopContainer",
            mx: "auto",
            px: 45,
            position: "relative",
            mt: 100,
          }}
        >
          <AboutUsHeroContainer {...props} />
        </Container>
      </MediaQuery>
    </Box>
  );
};
export default AboutUsHero;
