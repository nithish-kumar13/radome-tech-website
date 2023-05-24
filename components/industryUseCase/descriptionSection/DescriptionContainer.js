import React from "react";
import { Flex, Text } from "theme-ui";

const DescriptionContainer = ({ title, data }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text variant="heading" sx={{ mb: [50, 50, 80] }}>
        {title}
      </Text>
      <Text
        sx={{
          fontWeight: 400,
          fontSize: [16, 16, 18],
          lineHeight: "auto",
          color: "secondary",
          fontFamily: "poppins",
          textAlign: ["justify", "justify", "justify"],
        }}
      >
        {data}
      </Text>
    </Flex>
  );
};

export default DescriptionContainer;
