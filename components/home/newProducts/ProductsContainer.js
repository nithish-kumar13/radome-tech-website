import React, { useState } from "react";
import { Box, Flex, Grid, Image, Link, Text } from "theme-ui";

const ProductsContainer = ({ isMobile }) => {
  const productsData = [
    {
      title: "ProHM+",
      image: "/assets/product-proHM.webp",
      link: "/products/proHM",
      description:
        "An advanced analytics solution with AI to monitor the health of the Aircraft, including the engine, airframe, and critical equipment.",
    },
    {
      title: "LogiSmart",
      image: "/assets/product-logismart.webp",
      link: "/products/logiSmart",
      description:
        "LogiSmart empowers SCM professionals to get hands on Data Science and Leverage ML modules to improve the operational efficiency.",
    },
    {
      title: "Smart QC+",
      image: "/assets/product-smartQC.webp",
      link: "/products/smartQC",
      description:
        "Smart QC+ is a vision intelligence system for quality control of manufactured parts defect inspection",
    },
  ];
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Text variant="heading">Products</Text>
      <Grid columns={isMobile ? 1 : 3} gap={30} className="container">
        {productsData.map((item, i) =>
          isMobile ? (
            <Flex
              key={i}
              sx={{
                flexDirection: "column",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                borderRadius: 15,
              }}
              as={Link}
              href={item.link}
            >
              <Image
                src={item.image}
                alt={`product-${i}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "15px",
                }}
                loading="lazy"
              />
              <Flex sx={{ flexDirection: "column", padding: 20, gap: 10 }}>
                <Text variant="title">{item.title}</Text>
                <Text variant="description" sx={{ marginBottom: 20 }}>
                  {item.description}
                </Text>
                <button className="btn_outline">Load more</button>
              </Flex>
            </Flex>
          ) : (
            <Box
              className="card"
              key={i}
              sx={{ cursor: "pointer", textDecoration: "none" }}
            >
              <Box
                className="face face1"
                sx={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  height: "auto",
                  borderRadius: 15,
                }}
              >
                <Image
                  src={item.image}
                  alt={`product-${i}`}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 15,
                  }}
                  loading="lazy"
                />
              </Box>
              <Flex
                className="face face2"
                sx={{
                  boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
                  height: "auto",
                  flexDirection: "column",
                  gap: 15,
                  borderRadius: 15,
                }}
                as={Link}
                href={item.link}
              >
                <Text variant="title">{item.title}</Text>
                <Text variant="description">{item.description}</Text>
                <button className="btn_outline">Load more</button>
              </Flex>
            </Box>
          )
        )}
      </Grid>
    </Flex>
  );
};

export default ProductsContainer;
