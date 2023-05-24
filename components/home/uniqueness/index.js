import React from "react";
import MediaQuery from "react-responsive";
import { Box, Container } from "theme-ui";
import dynamic from "next/dynamic";

const UniquenessContainer = dynamic(() =>
  import(/* webpackChunkName: "UniquenessContainer" */ "./UniquenessContainer")
);

const Uniqueness = () => {
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
          <UniquenessContainer isMobile />
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
          <UniquenessContainer isMobile />
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
          <UniquenessContainer />
        </Container>
      </MediaQuery>
    </Box>
  );
};
export default Uniqueness;
