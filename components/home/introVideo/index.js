import React from "react";
import MediaQuery from "react-responsive";
import { Box } from "theme-ui";
import LoginGallery from "./LoginGallery";

const IntroVideo = () => {
  const galleryData = [
    "/assets/1.webp",
    "/assets/2.webp",
    "/assets/3.webp",
    "/assets/4.webp",
  ];
  return (
    <Box>
      <MediaQuery maxWidth={767}>
        <LoginGallery images={galleryData} interval={2000} />
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={991}>
        <LoginGallery images={galleryData} interval={2000} />
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <LoginGallery images={galleryData} interval={2000} />
      </MediaQuery>
    </Box>
  );
};
export default IntroVideo;
