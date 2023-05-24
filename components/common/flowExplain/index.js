// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: FlowExplain.js
// Description: This is Component for FlowExplain,
// Author: Nithish Kumar K,
// Revision dates: 11-05-2023,
// List of components: FlowExplainContainer
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import React from "react";
import MediaQuery from "react-responsive";
import { Box, Container } from "theme-ui";
import dynamic from "next/dynamic";

const FlowExplainContainer = dynamic(() =>
  import(
    /* webpackChunkName: "FlowExplainContainer" */ "./FlowExplainContainer"
  )
);

const FlowExplain = (props) => {
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
          <FlowExplainContainer isMobile {...props} />
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
          <FlowExplainContainer isMobile {...props} />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <Container
          sx={{
            maxWidth: "desktopContainer",
            mx: "auto",
            px: 120,
            py: 30,
            mb: 100,
            position: "relative",
          }}
        >
          <FlowExplainContainer {...props} />
        </Container>
      </MediaQuery>
    </Box>
  );
};
export default FlowExplain;
