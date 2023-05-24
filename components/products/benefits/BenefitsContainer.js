import React from "react";
import { Flex, Grid, Image, Text } from "theme-ui";

const BenefitsContainer = ({ isMobile, data }) => {
  return (
    <Flex
      sx={{
        flexDirection: ["column", "column", "row"],
        maxWidth: "100%",
        justifyContent: "space-between",
      }}
    >
      {!isMobile && (
        <Image
          src={data?.image}
          alt="benefits"
          sx={{ maxWidth: "40%", height: "auto", flex: 1, borderRadius: 10 }}
          loading="lazy"
        />
      )}
      <Flex
        sx={{
          flexDirection: "column",
          maxWidth: ["100%", "100%", "50%"],
          alignItems: "center",
        }}
      >
        <Text
          sx={{
            fontSize: 24,
            fontWeight: 500,
            color: "primary",
            fontFamily: "poppins",
            alignItems: "center",
            textAlign: "center",
            mb: 30,
          }}
        >
          Benefits
        </Text>
        {isMobile && (
          <Image
            src={data?.image}
            alt="benefits"
            sx={{
              maxWidth: ["100%", "100%", "40%"],
              height: "auto",
              flex: 1,
              borderRadius: 10,
              mb: 40,
            }}
            loading="lazy"
          />
        )}
        <Grid
          gap={20}
          columns={isMobile ? 1 : 2}
          sx={{ justifyContent: "center", mx: "auto" }}
        >
          {data?.content?.map((item, i) => (
            <Flex
              key={i}
              sx={{
                flexDirection: "row",
                gap: 2,
              }}
            >
              <Image
                src="/assets/checkmark.png"
                alt="benefit-points"
                sx={{ minWidth: 24, height: 24 }}
                loading="lazy"
              />
              <Text
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: "secondary",
                  fontFamily: "poppins",
                }}
              >
                {item}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default BenefitsContainer;
