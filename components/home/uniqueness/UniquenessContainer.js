import React from "react";
import { Flex, Grid, Image, Text } from "theme-ui";

const UniquenessContainer = ({ isMobile }) => {
  const uniquenessData = [
    {
      imageSrc: "/assets/Customer Centric.png",
      imageName: "Customer Centric",
      title: "Customer Centric",
      description:
        "Positive experience for you at every stage of the journey. We believe customer loyalty and satisfaction will lead to referrals for more customers.",
    },
    {
      imageSrc: "/assets/Solution Mindset.png",
      imageName: "Solution Mindset",
      title: "Solution Mindset",
      description:
        "Our solution mindset doesn't make problems magically disappear. It does, however, allow us to shift our focus and tackle challenges in a more constructive way. We have learnt to deal with a situation more effectively by reframing the way we look at it.",
    },
    {
      imageSrc: "/assets/passion driven.png",
      imageName: "Passion Driven",
      title: "Passion Driven",
      description:
        "At RadomeTech we believe in passion leading a business and a driving a brand forwards.",
    },
  ];
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Text variant="heading">Uniqueness</Text>
      <Grid columns={isMobile ? 1 : 3} gap={30}>
        {uniquenessData.map((data, i) => {
          return (
            <Flex
              key={i}
              sx={{
                flexDirection: ["column", "column", "row"],
                gap: 20,
                flex: 1,
                bg: "white",
                p: 20,
                borderRadius: "18px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                justifyContent: ["center", "space-between", "space-between"],
                alignItems: ["center", "center", "flex-start"],
              }}
            >
              <Image
                src={data.imageSrc}
                alt={data.imageName}
                sx={{
                  minWidth: [0, 0, 100],
                  maxWidth: [100, 100, 0],
                  height: 100,
                }}
                loading="lazy"
              />
              <Flex sx={{ flexDirection: "column" }}>
                <Text variant="title">{data.title}</Text>
                <Text variant="description">{data.description}</Text>
              </Flex>
            </Flex>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default UniquenessContainer;
