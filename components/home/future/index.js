import React from "react";
import MediaQuery from "react-responsive";
import { Box, Container } from "theme-ui";
import dynamic from "next/dynamic";

const FutureContainer = dynamic(() =>
  import(/* webpackChunkName: "FutureContainer" */ "./FutureContainer")
);

const Future = (props) => {
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
          <FutureContainer isMobile />
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
          <FutureContainer />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <Container
          sx={{
            maxWidth: "desktopContainer",
            mx: "auto",
            position: "relative",
            px: 45,
            mb: 0,
            justifyContent: "center",
            alignItems: "center",
            py: 50,
          }}
        >
          <FutureContainer />
        </Container>
      </MediaQuery>
    </Box>
  );
};
export default Future;
