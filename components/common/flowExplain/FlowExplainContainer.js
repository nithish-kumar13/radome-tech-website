// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: FlowExplainContainer.js
// Description: This is Component for FlowExplainContainer,
// Author: Nithish Kumar K,
// Revision dates: 11-05-2023,
// List of components: NIL
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import React from "react";
import { Flex, Text } from "theme-ui";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const FlowExplainContainer = ({ data, isMobile, title, isFromAbout }) => {
  return (
    <Flex
      sx={{
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text variant="heading">{title} &darr;</Text>
      <VerticalTimeline
        lineColor="#3b4859"
        layout={isMobile ? "1-column" : "2-columns"}
      >
        {data?.map((item, i) => {
          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              iconStyle={{
                background: "#2dbece",
                color: "#fff",
                width: 20,
                height: 20,
                left: isMobile ? 11 : "51.8%",
              }}
              contentStyle={{ background: "#eaf8fa", boxShadow: "none" }}
              contentArrowStyle={{ borderRight: "7px solid #eaf8fa" }}
            >
              {isFromAbout ? (
                <Flex sx={{ flexDirection: "column" }}>
                  <Text variant="title">{item?.date}</Text>
                  <Text variant="description">{item?.title}</Text>
                </Flex>
              ) : (
                <Text>{item}</Text>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Flex>
  );
};

export default FlowExplainContainer;
