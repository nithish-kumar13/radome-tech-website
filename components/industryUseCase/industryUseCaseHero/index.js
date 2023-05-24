import React from "react";
import MediaQuery from "react-responsive";
import { Box, Container } from "theme-ui";
import dynamic from "next/dynamic";

const HeroContainer = dynamic(() =>
  import(/* webpackChunkName: "HeroContainer" */ "./HeroContainer")
);

const IndustryUseCaseHero = (props) => {
  return (
    <Box>
      <MediaQuery maxWidth={767}>
        <Box
          sx={{
            position: "relative",
            marginTop: "10%",
            mb: 80,
            backgroundImage: `url(${props.data?.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            width: "100%",
            height: 280,
          }}
        >
          <HeroContainer isMobile {...props} />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={991}>
        <Box
          sx={{
            position: "relative",
            marginTop: "10%",
            mb: 80,
            backgroundImage: `url(${props.data?.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            width: "100%",
            height: 280,
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
            mb: 100,
            position: "relative",
            mt: 100,
            backgroundImage: `url(${props.data?.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            width: "100%",
            height: 450,
          }}
        >
          <HeroContainer {...props} />
        </Container>
      </MediaQuery>
    </Box>
  );
};
export default IndustryUseCaseHero;
