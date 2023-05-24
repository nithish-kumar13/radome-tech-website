// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: index.js
// Description: This is Component for OurTeam,
// Author: Nithish Kumar K,
// Revision dates: 11-05-2023,
// List of components: OurTeamContainer
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import React from "react";
import MediaQuery from "react-responsive";
import { Box, Container } from "theme-ui";
import dynamic from "next/dynamic";

const OurTeamContainer = dynamic(() =>
  import(/* webpackChunkName: "OurTeamContainer" */ "./OurTeamContainer")
);

const OurTeam = (props) => {
  return (
    <Box>
      <MediaQuery maxWidth={767}>
        <Box
          sx={{
            position: "relative",
            mx: 30,
            mb: 80,
          }}
        >
          <OurTeamContainer isMobile {...props} />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={991}>
        <Box
          sx={{
            position: "relative",
            mx: 30,
            mb: 80,
          }}
        >
          <OurTeamContainer isMobile {...props} />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <Container
          sx={{
            maxWidth: "desktopContainer",
            mx: "auto",
            px: 45,
            mb: 100,
            position: "relative",
            mt: 100,
          }}
        >
          <OurTeamContainer {...props} />
        </Container>
      </MediaQuery>
    </Box>
  );
};
export default OurTeam;
