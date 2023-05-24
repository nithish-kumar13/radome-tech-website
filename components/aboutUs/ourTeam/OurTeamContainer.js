// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: OurTeamContainer.js
// Description: This is Component for OurTeamContainer,
// Author: Nithish Kumar K,
// Revision dates: 11-05-2023,
// List of components: FounderCard
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import React from "react";
import { Box, Flex, Image, Text } from "theme-ui";

const OurTeamContainer = () => {
  const data = [
    {
      photo: "/assets/founder.jpg",
      name: "Nagendra Prasad Kumble",
      designation: "Founder & CEO",
      about:
        "Passionate Engineer with 14 years of experience in Aerospace & Defence industries. Key expertise in Aerostructures, Electronic System Integration, Mechanical System Integration and Avionics Directing the company towards best-in-class Aerospace and Defence AI, ML and Data analytics solution company meeting general and customized requirements.",
    },
    {
      photo: "/assets/co-founder.jpg",
      name: "Sumukh Kumble",
      designation: "Innovation Lead & Co-Founder",
      about:
        "M.Sc graduate from Chalmers University of Technology, Sweden in Automotive Engineering with an experience of 3 years in Engineering Design, Product development & Expertise in Vehicle Dynamics and Control. Budding Entrepreneur at Radome Technologies working towards the collaboration of AI with Engineering Disciplines.",
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
      <Text variant="heading">Our Team</Text>
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 50,
        }}
      >
        {data?.map((item, i) => {
          return <FounderCard key={i} item={item} />;
        })}
      </Flex>
    </Flex>
  );
};

export default OurTeamContainer;

const FounderCard = ({ item }) => {
  const Avatar = ({ src }) => {
    return (
      <Box
        sx={{
          width: 270,
          height: 270,
          borderRadius: "50%",
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    );
  };

  const NameContent = ({ data }) => {
    return <Text variant="title">{data}</Text>;
  };

  const TitleContent = ({ data }) => {
    return (
      <Text
        sx={{
          fontStyle: "italic",
          fontSize: ["16px", "16px", "16px"],
          fontWeight: "normal",
          lineHeight: "20px",
          color: "secondary",
          fontFamily: "Poppins",
          textAlign: ["center", "center", "left"],
        }}
      >
        {data}
      </Text>
    );
  };

  const DescriptionContent = ({ data }) => {
    return <Text variant="description">{data}</Text>;
  };
  return (
    <Flex
      sx={{
        flexDirection: ["column", "column", "row"],
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 20,
      }}
    >
      <Flex
        sx={{
          width: ["100%", "100%", "22.5%"],
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar src={item.photo} alt={item.name} />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          width: ["100%", "100%", "52%"],
          gap: 25,
        }}
      >
        <Flex sx={{ flexDirection: "column" }}>
          <NameContent data={item.name} />
          <TitleContent data={item.designation} />
        </Flex>
        <DescriptionContent data={item.about} />
      </Flex>
    </Flex>
  );
};
