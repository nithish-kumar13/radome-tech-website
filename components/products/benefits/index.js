import React from "react";
import MediaQuery from "react-responsive";
import { Box, Container } from "theme-ui";
import dynamic from "next/dynamic";

const BenefitsContainer = dynamic(() =>
  import(/* webpackChunkName: "BenefitsContainer" */ "./BenefitsContainer")
);

const Benefits = (props) => {
  return (
    <Box>
      <MediaQuery maxWidth={767}>
        <Box
          sx={{
            position: "relative",
            mx: 30,
            mb: 140,
          }}
        >
          <BenefitsContainer isMobile {...props} />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={991}>
        <Box
          sx={{
            position: "relative",
            mx: 30,
            mb: 140,
          }}
        >
          <BenefitsContainer isMobile {...props} />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <Container
          sx={{
            maxWidth: "desktopContainer",
            mx: "auto",
            px: 120,
            py: 30,
            mb: 200,
            position: "relative",
            bg: "bg",
          }}
        >
          <BenefitsContainer {...props} />
        </Container>
      </MediaQuery>
    </Box>
  );
};
export default Benefits;
