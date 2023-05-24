// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: ChevronDown.js
// Description: Custom ChevronDown Icon
// Author: Nithish Kumar K,
// Revision dates: 11-05-2023,
// List of components:
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import React from "react";

const ChevronDown = ({
  width = 0,
  height = 0,
  stroke = "#3b4859",
  fill = "none",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-down"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

export default ChevronDown;
