import React from "react";
import MediaQuery from "react-responsive";
import { Box, Container } from "theme-ui";
import dynamic from "next/dynamic";

const DescriptionContainer = dynamic(() =>
  import(
    /* webpackChunkName: "DescriptionContainer" */ "./DescriptionContainer"
  )
);

const DescriptionSection = (props) => {
  return (
    <Box>
      <MediaQuery maxWidth={767}>
        <Box
          sx={{
            position: "relative",
            mx: 30,
            mb: props?.isFromLast ? 150 : 80,
          }}
        >
          <DescriptionContainer isMobile {...props} />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={991}>
        <Box
          sx={{
            position: "relative",
            mx: 30,
            mb: props?.isFromLast ? 150 : 80,
          }}
        >
          <DescriptionContainer isMobile {...props} />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <Container
          sx={{
            maxWidth: "desktopContainer",
            mx: "auto",
            px: 120,
            mb: props?.isFromLast ? 300 : 100,
            position: "relative",
          }}
        >
          <DescriptionContainer {...props} />
        </Container>
      </MediaQuery>
    </Box>
  );
};
export default DescriptionSection;
