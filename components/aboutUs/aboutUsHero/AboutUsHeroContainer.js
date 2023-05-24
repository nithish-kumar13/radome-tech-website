// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: AboutUsHeroContainer.js
// Description: This is Component, AboutUsHeroContainer,
// Author: Nithish Kumar K,
// Revision dates: 11-05-2023,
// List of components: NIL
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import React from "react";
import { Flex, Text } from "theme-ui";

const AboutUsHeroContainer = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        sx={{
          fontSize: [25, 25, 36],
          fontWeight: 300,
          color: "secondary",
          mb: [50, 50, 100],
          textAlign: ["center", "center", "center"],
        }}
      >
        GAME CHANGERS + AI =
        <Text
          sx={{
            fontSize: [25, 25, 36],
            fontWeight: 600,
            color: "primary",
            ml: 2,
          }}
        >
          FUTURE
        </Text>
      </Text>
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "bg",
          p: 45,
          borderRadius: 15,
        }}
      >
        <Text variant="heading" sx={{ mb: [30, 30, 40] }}>
          Our Story
        </Text>
        <Text
          variant="title"
          sx={{
            fontWeight: 400,
            textAlign: ["justify", "justify", "justify"],
          }}
        >
          RadomeTech was founded in the year 2017, in Bengaluru, India
          (popularly called as Startup Hub!) with a desire to empower
          today&lsquo;s data driven industries with advancement in technologies
          like Artifical Intelligence and Machine Learning while achieving
          highest efficiency at minimal cost. Started as a company with couple
          of employees at a small space, now we have moved to a bigger place
          with a bunch of young talents, as we believe that young minds if
          trained can do wonders. We are a team of curious and creative
          engineers and designers; doers and makers who believe in the the power
          of technology. RadomeTech is recognised by Ministry of Defence,
          Government of India and is supported for one of their challenges
          &quot;AI for Supply Chain and Logistics&quot; for Defence .
          RadomeTech&lsquo;s indigenously developed product
          &quot;LogiSmart&quot; is now ready with its Beta Version with 2
          modules &quot;Inventory Forecasting&quot; and &quot;Demand
          Forecasting&quot;.
        </Text>
      </Flex>
    </Flex>
  );
};

export default AboutUsHeroContainer;
