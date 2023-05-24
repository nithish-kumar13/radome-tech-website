// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: LocationContainer.js
// Description: This is Component, LocationContainer,
// Author: Nithish Kumar K,
// Revision dates: 11-05-2023,
// List of components: NIL
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import React from "react";
import { Flex, Text } from "theme-ui";

const LocationContainer = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text variant="heading">Our Location</Text>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1591701079624!2d77.52881891433432!3d12.89748469090454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f9c6e7650c9%3A0x2c6a2d4cc5e20985!2sRadome%20Technologies%20and%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1676225417752!5m2!1sen!2sin"
        width="100%"
        height={450}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
        frameBorder={0}
      ></iframe>
    </Flex>
  );
};

export default LocationContainer;
