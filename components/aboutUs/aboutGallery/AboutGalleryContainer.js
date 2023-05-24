// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: AboutGalleryContainer.js
// Description: AboutGalleryContainer is used Gallery view container fully custom
// Author: Nithish Kumar,
// Revision dates: 11-05-2023,
// List of methods/Functions/Classes/components: IndustryUseCaseHero, DescriptionSection, UseCaseSection
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import React, { useState, useRef, useEffect } from "react";
import { Flex, Text } from "theme-ui";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

const AboutGalleryContainer = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Text variant="heading">Our Gallery</Text>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundColor }}
            ></div>
          ))}
        </div>

        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </Flex>
  );
};

export default AboutGalleryContainer;
