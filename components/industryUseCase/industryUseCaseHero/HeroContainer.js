import React from "react";
import { Flex, Text } from "theme-ui";

const HeroContainer = ({ data }) => {
  return (
    <Flex
      sx={{
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: [280, 280, 450],
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Text
        sx={{
          fontSize: [38, 38, 50],
          fontWeight: 600,
          color: "white",
          mb: 20,
          textAlign: "center",
        }}
      >
        {data?.title}
      </Text>
    </Flex>
  );
};

export default HeroContainer;
