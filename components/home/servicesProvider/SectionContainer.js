import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Flex, Grid, Text } from "theme-ui";

const SectionContainer = ({ isMobile }) => {
  const servicesProviderData = [
    {
      image: "assets/ai.json",
      title: "Artificial Intelligence",
      description: "",
    },
    {
      image: "assets/ml.json",
      title: "Machine Learning",
      description: "",
    },
    {
      image: "assets/data-analysis.json",
      title: "Data Analysis",
      description: "",
    },
  ];
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Text variant="heading">Services</Text>
      <Grid columns={isMobile ? 1 : 3} gap={30}>
        {servicesProviderData.map((item, i) => {
          return (
            <Flex
              sx={{
                flexDirection: "column",
                gap: 20,
                flex: 1,
                bg: "white",
                p: 20,
                borderRadius: "18px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  transform: "translateY(-15px)",
                  cursor: "pointer",
                },
              }}
              key={i}
            >
              <Player
                autoplay
                speed={1.5}
                loop
                src={item.image}
                style={{
                  height: isMobile ? "150px" : "220px",
                  width: isMobile ? "150px" : "220px",
                }}
              />
              <Text
                sx={{
                  fontSize: [16, 16, 20],
                  fontWeight: 400,
                  color: "secondary",
                  mb: 50,
                  fontFamily: "poppins",
                }}
              >
                {item.title}
              </Text>
            </Flex>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default SectionContainer;
