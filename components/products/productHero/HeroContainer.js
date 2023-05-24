import React from "react";
import { Flex, Image, Text } from "theme-ui";

const HeroContainer = ({ data, isMobile }) => {
  return (
    <Flex
      sx={{
        flexDirection: ["column", "column", "row"],
        justifyContent: ["center", "center", "space-between"],
        alignItems: "center",
        gap: 30,
        position: "relative",
      }}
    >
      <TextContent
        title={data?.title}
        description={data?.description}
        isMobile={isMobile}
      />
      <Image
        src={data?.image}
        alt={data?.title}
        sx={{
          maxWidth: ["100%", "100%", 500],
          height: "auto",
          borderRadius: 10,
        }}
        loading="lazy"
      />
      <Image
        src="/assets/curve.svg"
        alt="hero-arrow-curve"
        sx={{
          width: 80,
          height: "auto",
          position: "absolute",
          top: [500, "103%", 250],
          left: 0,
          right: 0,
          margin: "auto",
        }}
        loading="lazy"
      />
    </Flex>
  );
};

const TextContent = ({ title, description, isMobile }) => {
  return (
    <Flex sx={{ flexDirection: "column", maxWidth: ["100%", "100%", 500] }}>
      {title && (
        <Text
          sx={{
            fontSize: 30,
            fontWeight: 600,
            color: "primary",
            textAlign: ["center", "center", "left"],
          }}
        >
          {title}
        </Text>
      )}
      {description && (
        <Text
          sx={{
            fontSize: 18,
            fontWeight: 300,
            mt: 10,
            color: "secondary",
            maxWidth: ["100%", "100%", 700],
            textAlign: ["center", "center", "left"],
          }}
        >
          {description}
        </Text>
      )}
    </Flex>
  );
};

export default HeroContainer;
