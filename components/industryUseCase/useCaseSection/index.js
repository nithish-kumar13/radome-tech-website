import React from "react";
import MediaQuery from "react-responsive";
import { Box, Container } from "theme-ui";
import dynamic from "next/dynamic";

const UseCaseContainer = dynamic(() =>
  import(/* webpackChunkName: "UseCaseContainer" */ "./UseCaseContainer")
);

const UseCaseSection = (props) => {
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
          <UseCaseContainer isMobile {...props} />
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
          <UseCaseContainer isMobile {...props} />
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
          <UseCaseContainer {...props} />
        </Container>
      </MediaQuery>
    </Box>
  );
};
export default UseCaseSection;
