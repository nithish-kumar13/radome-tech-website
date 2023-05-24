import React from "react";
import MediaQuery from "react-responsive";
import { Box, Container } from "theme-ui";
import dynamic from "next/dynamic";

const PartnersContainer = dynamic(() =>
  import(/* webpackChunkName: "PartnersContainer" */ "./PartnersContainer")
);

const Partners = () => {
  return (
    <Box>
      <MediaQuery maxWidth={767}>
        <Box
          sx={{
            position: "relative",
            mx: 30,
            mb: 30,
          }}
        >
          <PartnersContainer isMobile />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={991}>
        <Box
          sx={{
            position: "relative",
            mx: 30,
            mb: 30,
          }}
        >
          <PartnersContainer isMobile />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <Container
          sx={{
            maxWidth: "desktopContainer",
            mx: "auto",
            px: 45,
            mb: 50,
            position: "relative",
          }}
        >
          <PartnersContainer />
        </Container>
      </MediaQuery>
    </Box>
  );
};
export default Partners;
