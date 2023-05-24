import React from "react";
import Marquee from "react-fast-marquee";
import { Flex, Image, Text } from "theme-ui";

const PartnersContainer = () => {
  const recruitersdata = [
    {
      imageSrc: "/assets/enablers-1.webp",
      imageName: "idex",
    },
    {
      imageSrc: "/assets/enablers-2.webp",
      imageName: "LG",
    },
    {
      imageSrc: "/assets/enablers-3.webp",
      imageName: "CIIE",
    },
    {
      imageSrc: "/assets/enablers-5.webp",
      imageName: "Nasscom",
    },
    {
      imageSrc: "/assets/enablers-6.webp",
      imageName: "RPG",
    },
  ];
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <Text variant="heading">Trusted partners</Text>
      <Marquee speed={100} gradientWidth={"50px"}>
        {recruitersdata.map((data, i) => {
          return (
            <Image
              src={data.imageSrc}
              alt={data.imageName}
              sx={{
                width: [100, 100, 130],
                height: "auto",
                maxWidth: "100%",
                mr: 100,
                ml: [0, 0, 100],
              }}
              key={i}
              loading="lazy"
            />
          );
        })}
      </Marquee>
    </Flex>
  );
};

export default PartnersContainer;
