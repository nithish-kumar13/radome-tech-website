import React from "react";
import MediaQuery from "react-responsive";
import { Box } from "theme-ui";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const Hero = () => {
  return (
    <Box>
      <MediaQuery maxWidth={767}>
        <MobileView />
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={991}>
        <MobileView isTablet/>
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <DesktopView />
      </MediaQuery>
    </Box>
  );
};
export default Hero;
