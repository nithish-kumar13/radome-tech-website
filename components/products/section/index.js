import React from "react";
import MediaQuery from "react-responsive";
import { Box, Container } from "theme-ui";
import dynamic from "next/dynamic";

const SectionContainer = dynamic(() =>
  import(/* webpackChunkName: "SectionContainer" */ "./SectionContainer")
);

const Section = (props) => {
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
          <SectionContainer isMobile {...props} />
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
          <SectionContainer isMobile {...props} />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <Container
          sx={{
            maxWidth: "desktopContainer",
            mx: "auto",
            px: 120,
            mb: 100,
            position: "relative",
          }}
        >
          <SectionContainer {...props} />
        </Container>
      </MediaQuery>
    </Box>
  );
};
export default Section;
