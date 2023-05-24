import React from "react";
import MediaQuery from "react-responsive";
import { Box, Container } from "theme-ui";
import dynamic from "next/dynamic";

const HeroContainer = dynamic(() =>
  import(/* webpackChunkName: "HeroContainer" */ "./HeroContainer")
);

const ProductHero = (props) => {
  return (
    <Box>
      <MediaQuery maxWidth={767}>
        <Box
          sx={{
            position: "relative",
            mx: 30,
            marginTop: "10%",
            mb: 200,
          }}
        >
          <HeroContainer isMobile {...props} />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={991}>
        <Box
          sx={{
            position: "relative",
            mx: 30,
            marginTop: "10%",
            mb: 200,
          }}
        >
          <HeroContainer isMobile {...props} />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <Container
          sx={{
            maxWidth: "desktopContainer",
            mx: "auto",
            px: 120,
            mb: 200,
            position: "relative",
            mt: 100,
          }}
        >
          <HeroContainer {...props} />
        </Container>
      </MediaQuery>
    </Box>
  );
};
export default ProductHero;
