// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: _app.js
// Description: In this file, Theme UI setup for component build
// Author: Nithish Kumar K,
// Revision dates: 11-05-2023,
// List of components: NIL
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "theme-ui";

// STYLES
import "../styles/globals.css";

// UTILS
import theme from "../utils/theme";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
