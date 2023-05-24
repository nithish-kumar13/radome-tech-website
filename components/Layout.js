import React from "react";
import { Box } from "theme-ui";
import Footer from "./common/footer";
import Header from "./common/header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Box>{props.children}</Box>
      <Footer />
    </>
  );
};
export default Layout;
