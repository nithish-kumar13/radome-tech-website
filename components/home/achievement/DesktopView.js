import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Box, Container, Flex, Image, Text } from "theme-ui";

const DesktopView = () => {
  const achievementData = [
    {
      image: "assets/achieve-2.webp",
      title: "Winner",
      subtitle: "Defense India Startup Challenge - 1",
      year: "2019",
    },
    {
      image: "assets/achieve-1.webp",
      title: "Winner",
      subtitle: "2nd Edition  of Manufacturing Innovation Challenge (MIC)",
      year: "2020",
    },

    {
      image: "assets/achieve-3.webp",
      title: "Top 10 AI Startup in India 2020",
      subtitle: "Recognized by CIO Insider",
      year: "2020",
    },

    {
      image: "assets/achieve-4.webp",
      title: "Defense Expo 2020",
      subtitle: "Production Revolution 4.0",
      year: "2020",
    },
    {
      image: "assets/achieve-2.webp",
      title: "Runner-up",
      subtitle: "Defense India Startup Challenge - 2",
      year: "2020",
    },
    {
      image: "assets/achieve-3.png",
      title: "Top 10 AI Startup in India 2021",
      subtitle: "Recognized by CIO Insider",
      year: "2021",
    },
    {
      image: "assets/achieve-2.webp",
      title: "Runner-up",
      subtitle: "Defense India Startup Challenge - 3",
      year: "2021",
    },
    {
      image: "assets/achieve-5.webp",
      title: "Among Top 20 Companies",
      subtitle: "Rolls-Royce Startup Accelerator",
    },
    {
      image: "assets/achieve-6.webp",
      title: "Among Top 5 Companies",
      subtitle: "Procter & Gamble Startup Challenge",
    },
  ];
  return (
    <Box sx={{ background: "bg", mb: "30%" }}>
      <Container
        sx={{
          maxWidth: "desktopContainer",
          mx: "auto",
          position: "relative",
          mb: 100,
          px: 45,
          py: 30,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ mb: 80, textAlign: "center" }}>
          <Text variant="heading">Achievement</Text>
          <Player
            autoplay
            speed={1.5}
            loop
            src="assets/trophy.json"
            style={{ height: "300px", width: "300px" }}
          />
          <Flex
            sx={{
              flexDirection: "row",
              overflowX: "scroll",
              gap: 30,
              position: "absolute",
              top: 400,
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
              width: "94%",
            }}
            className="scroll"
          >
            {achievementData.map((item, i) => {
              return (
                <Flex
                  key={i}
                  sx={{
                    minWidth: 300,
                    background: "#fff",
                    padding: 20,
                    borderRadius: 10,
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 5,
                    mx: 10,
                  }}
                >
                  <Box sx={{ width: 200, height: 200 }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: "100%",
                        height: "auto",
                        padding: 20,
                        mb: 30,
                      }}
                      loading="lazy"
                    />
                  </Box>
                  <Text sx={{ flex: 1 }}>{item.title}</Text>
                  <Text sx={{ flex: 1 }}>{item.subtitle}</Text>
                  <Text sx={{ flex: 1 }}>{item?.year}</Text>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default DesktopView;
