import React from "react";
import { Flex, Grid, Text } from "theme-ui";

const SectionContainer = ({ isMobile, data }) => {
  const columns = isMobile ? 1 : data?.length > 4 ? "repeat(3, 2fr)" : 4;

  return (
    <Grid
      gap="20px"
      columns={columns}
      sx={{ width: "100%", alignContent: "center" }}
    >
      {data?.map((item, i) => (
        <Flex
          sx={{
            flexDirection: "column",
            bg: "bg",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            p: 20,
          }}
          key={i}
        >
          <Text
            sx={{
              fontSize: 18,
              fontWeight: 400,
              color: "secondary",
              fontFamily: "poppins",
              textAlign: "center",
            }}
          >
            {item}
          </Text>
        </Flex>
      ))}
    </Grid>
  );
};

export default SectionContainer;
