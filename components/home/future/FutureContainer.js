import React from "react";
import { Box, Flex, Grid, Image, Text } from "theme-ui";
import { motion } from "framer-motion";
import Animation from "@/components/Animation";

const FutureContainer = ({ isMobile, isTablet }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [hoverid, setId] = React.useState();

  const variants = {
    visible: { transform: "rotateY(180deg)" },
    hidden: { transform: "rotateY(0deg)" },
  };

  const variants2 = {
    visible: { transform: "rotateY(-180deg)" },
    hidden: { transform: "rotateY(0deg)" },
  };

  const handleClick = (id) => {
    setId(id);
    setIsFlipped(!isFlipped);
  };
  const FutureContainerData = [
    {
      image: "/assets/future-leveragingData.png",
      title: "Leveraging Data",
      content: [
        "Leveraging data enables companies to turn raw information into valuable actionable insights.",
        "Leverage data to inform goals, measure progress, and learn lessons for future improvement",
      ],
    },
    {
      image: "/assets/future-process.png",
      title: "Enhancing Process Intelligence",
      content: [
        "Data that has been systematically collected to analyze the individual steps within a business process or operational workflow is the learning Block.",
        "Process intelligence can help an organization to identify bottlenecks and improve operational efficiency.",
      ],
    },
    {
      image: "/assets/future-aiDecision.png",
      title: "Al driven decision",
      content: [
        "Empowered with Al, you can make small decisions on the go, solve complex problems, initiate strategic changes, evaluate risks, and assess your entire business performance.",
      ],
    },
    {
      image: "/assets/future-gatherData.png",
      title: "Gather Data",
      content: [
        "Data Scientists and Subject Matter Experts combination gives an edge in gathering right information of the data.",
        "Access to the latest technology and tools will enhance data acquisition and reduce processing time.",
      ],
    },
    {
      image: "/assets/future-buildIntelligence.png",
      title: "Build Intelligence",
      content: [
        "In house expertise in model building transforms the acquired data into business intelligence.",
        "Our Unique method to combine data driven, mathematical & simulation modelling approach ensures inference of highest order.",
      ],
    },
    {
      image: "/assets/future-createAIValue.png",
      title: "Create Al Value",
      content: [
        "Our Al algorithms will enable digital transformation by using data to improve the decision making process.",
        "The deep learning models help in optimizing processes resulting in operational and business excellence.",
      ],
    },
  ];
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundImage: isMobile ? "" : "url('/assets/robo.png')",
          backgroundRepeat: "no-repeat no-repeat",
          backgroundPosition: "100% 50%",
          backgroundSize: "40%",
        }}
      >
        <Grid
          columns={isMobile ? 1 : 2}
          gap={2}
          sx={{ width: ["100%", "100%", "60%"] }}
        >
          {FutureContainerData.map((item, index) => {
            return (
              <Animation key={index}>
                <Box
                  key={index}
                  onMouseEnter={() => handleClick(index)}
                  onMouseLeave={() => {
                    setId(null);
                    setIsFlipped(false);
                  }}
                >
                  <Box
                    id="scene"
                    sx={{
                      height: "230px",
                      width: ["100%", "100%", "100%"],
                      backgroundColor: "00FFFFFF",
                    }}
                  >
                    <Box
                      id="card"
                      sx={{
                        position: "relative",
                        height: "230px",
                        width: ["100%", "100%", 420],
                      }}
                    >
                      <motion.div
                        variants={variants}
                        animate={hoverid === index ? "hidden" : "visible"}
                        transition={{ duration: 0.5 }}
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          backfaceVisibility: "hidden",
                          backgroundColor: "white",
                          boxShadow:
                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          borderRadius: "18px",
                        }}
                      >
                        <ul style={{ margin: isMobile ? 0 : 20 }}>
                          {item.content?.map((item, i) => (
                            <li
                              key={i}
                              style={{
                                fontSize: "13px",
                                fontWeight: 400,
                                color: "secondary",
                                fontFamily: "poppins",
                                margin: 20,
                              }}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                      <motion.div
                        variants={variants2}
                        animate={hoverid !== index ? "hidden" : "visible"}
                        transition={{ duration: 0.5 }}
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          backfaceVisibility: "hidden",
                          backgroundColor: "white",
                          borderRadius: "18px",
                          boxShadow:
                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          transform: "rotateY(180deg)",
                          padding: 20,
                          textAlign: "center",
                        }}
                        onMouseEnter={() => handleClick(index)}
                      >
                        <Flex
                          sx={{
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            width: "100%",
                            gap: 15,
                          }}
                        >
                          <Image
                            src={item.image}
                            alt={`future-${index}`}
                            sx={{ width: 100, height: 100 }}
                            loading="lazy"
                          />
                          <Text variant="title">{item.title}</Text>
                        </Flex>
                      </motion.div>
                    </Box>
                  </Box>
                </Box>
              </Animation>
            );
          })}
        </Grid>
      </Box>
    </Flex>
  );
};

export default FutureContainer;
