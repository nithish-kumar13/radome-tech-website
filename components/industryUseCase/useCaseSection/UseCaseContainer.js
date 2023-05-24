import React from "react";
import { Flex, Grid, Text } from "theme-ui";

const UseCaseContainer = ({ title, data, isMobile }) => {
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
      <Grid columns={isMobile ? 1 : 2} gap={30}>
        {data?.map((item, i) => {
          return (
            <Flex
              sx={{
                flexDirection: "column",
                gap: 20,
                flex: 1,
                bg: "bg",
                p: 20,
                borderRadius: "18px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={i}
            >
              <Text variant="title">{item.title}</Text>
              <Text variant="description">{item.description}</Text>
            </Flex>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default UseCaseContainer;
