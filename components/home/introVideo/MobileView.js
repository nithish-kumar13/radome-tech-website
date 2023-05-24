// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: MobileView.js
// Description: it is specially for Mobile view component
// Author: Nithish Kumar,
// Revision dates: 11-05-2023,
// List of methods/Functions/Classes/components: NextImage
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import React, { useState } from "react";
import YouTube from "react-youtube";
import { Box, Container, Flex, Image } from "theme-ui";

// COMPONENTS
import NextImage from "@/components/NextImage";

const MobileView = ({ isTablet }) => {
  let w = document.documentElement.clientWidth;
  const [showVideo, setShowVideo] = useState(false);
  const scrollLock = () => {
    document.body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    document.body.style.overflow = "scroll";
  };

  React.useEffect(() => {
    if (showVideo) {
      scrollLock();
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [showVideo]);

  const MediaContent = () => {
    const opts = {
      height: "500px",
      width: "1070px",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <>
        <NextImage
          src="/assets/intro-thumbnail.webp"
          onClick={() => setShowVideo(!showVideo)}
          style={{
            width: isTablet ? w : "900px",
            height: isTablet ? "412px" : "186px",
            cursor: "pointer",
            borderRadius: 24,
          }}
          alt="hero-video"
          priority={true}
        />
        {showVideo && (
          <Flex
            sx={{
              position: "fixed",
              width: "100vw",
              height: "100vh",
              top: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,0.9)",
              zIndex: 100,
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "fixed",
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
                top: "20px",
                right: "20px",
              }}
              onClick={() => setShowVideo(!showVideo)}
            >
              <Image
                src="/assets/x-circle.svg"
                sx={{
                  alignSelf: "flex-end",
                  minWidth: 30,
                  height: 30,
                }}
                loading="lazy"
                alt="close-image"
              />
            </Box>
            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <YouTube videoId="sdG114ViTCg" opts={opts} />
            </Flex>
          </Flex>
        )}
      </>
    );
  };
  return (
    <Flex
      sx={{
        background: "white",
        border: "1px solid",
        borderColor: "primary",
        borderRadius: 24,
        justifyContent: "center",
        padding: 10,
        maxWidth: "100%",
        marginX: "auto",
        position: "relative",
        marginX: 30,
        mb: 80,
      }}
    >
      <MediaContent />
    </Flex>
  );
};

export default MobileView;
