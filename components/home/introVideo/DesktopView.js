// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: DesktopView.js
// Description: it is specially for desktop view component
// Author: Nithish Kumar,
// Revision dates: 11-05-2023,
// List of methods/Functions/Classes/components: NextImage, PopUp
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import React, { useState } from "react";
import { Box, Container, Flex, Image } from "theme-ui";

// COMPONENTS
import NextImage from "@/components/NextImage";
import PopUp from "@/components/PopUp";

const DesktopView = () => {
  const [showVideo, setShowVideo] = useState(false);
  const MediaContent = () => {
    return (
      <>
        <NextImage
          src="/assets/intro-thumbnail.webp"
          onClick={() => setShowVideo(!showVideo)}
          style={{
            width: "900px",
            height: "500px",
            cursor: "pointer",
            borderRadius: 24,
          }}
          alt="hero-video"
          sizes={[
            "(max-width: 420px) calc(100vw - 32px)",
            "(max-width: 768px) calc(100vw - 48px)",
            "900px",
          ]}
        />
        {showVideo && (
          <PopUp
            id="sdG114ViTCg"
            setIsShow={setShowVideo}
            show={showVideo}
            isYoutube
          />
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
        padding: 30,
        maxWidth: 900,
        marginX: "auto",
        position: "relative",
      }}
    >
      <MediaContent />
    </Flex>
  );
};

export default DesktopView;
