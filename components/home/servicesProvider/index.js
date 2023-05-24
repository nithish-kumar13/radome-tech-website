import React from "react";
import MediaQuery from "react-responsive";
import { Box, Container } from "theme-ui";
import dynamic from "next/dynamic";

const SectionContainer = dynamic(() =>
  import(/* webpackChunkName: "SectionContainer" */ "./SectionContainer")
);

const ServicesProvider = () => {
  return (
    <Box sx={{ bg: "bg" }}>
      <MediaQuery maxWidth={767}>
        <Box
          sx={{
            position: "relative",
            mx: 30,
            mb: 30,
            py: 30,
          }}
        >
          <SectionContainer isMobile />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={991}>
        <Box
          sx={{
            position: "relative",
            mx: 30,
            mb: 30,
            py: 30,
          }}
        >
          <SectionContainer isMobile />
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
            py: 30,
          }}
        >
          <SectionContainer />
        </Container>
      </MediaQuery>
    </Box>
  );
};
export default ServicesProvider;
