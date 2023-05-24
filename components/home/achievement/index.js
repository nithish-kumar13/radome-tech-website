import React from "react";
import MediaQuery from "react-responsive";
import { Box } from "theme-ui";
import dynamic from "next/dynamic";

const DesktopView = dynamic(() =>
  import(/* webpackChunkName: "DesktopView" */ "./DesktopView")
);
const MobileView = dynamic(() =>
  import(/* webpackChunkName: "MobileView" */ "./MobileView")
);

const Achievement = () => {
  return (
    <Box>
      <MediaQuery maxWidth={767}>
        <MobileView />
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={991}>
        <MobileView isTablet />
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <DesktopView />
      </MediaQuery>
    </Box>
  );
};
export default Achievement;
