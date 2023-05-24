import React from "react";
import MediaQuery from "react-responsive";
import { Box, Container } from "theme-ui";
import HeaderContainer from "./HeaderContainer";


const Header = () => {
  return (
    <Box>
      <MediaQuery maxWidth={767}>
        <Box sx={{ px: 20 }}>
          <HeaderContainer isMobile />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={991}>
        <Box sx={{ px: 20 }}>
          <HeaderContainer isMobile />
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <Container sx={{ maxWidth: "desktopContainer", mx: "auto", px: 45 }}>
          <HeaderContainer />
        </Container>
      </MediaQuery>
    </Box>
  );
};
export default Header;
