// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: FooterContainer.js
// Description: This is Component for FooterContainer,
// Author: Nithish Kumar K,
// Revision dates: 11-05-2023,
// List of components: ContactContainer, GridItemsContainer, CopyrightContainer
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Link,
  Text,
} from "theme-ui";

const FooterContainer = (props) => {
  const [showPopUp, setIsShowPopUp] = useState(false);
  const { isfooter, isMobile } = props;
  const router = useRouter();
  return (
    <Box>
      {isfooter === true ? (
        <Container sx={{ maxWidth: "desktopContainer", mx: "auto", px: 3 }}>
          <Flex
            sx={{
              justifyContent: "space-between",
              paddingX: "20px",
              paddingY: "23px",
              alignItems: "center",
            }}
          >
            <Text
              variant="xs"
              as={Link}
              onClick={() =>
                window.open("https://www.increscotech.com/", "_blank")
              }
              sx={{ cursor: "pointer" }}
            >
              Powered by Incresco
            </Text>
            <Text variant="xs">principal@aamec.edu.in | +91 9489978460</Text>
            <Flex sx={{ alignItems: "center" }}>
              <Text variant="xs">Copyright © AAMEC | All Rights Reserved</Text>
              {/* <Link variant="footernav" sx={{ paddingLeft: "5px" }}>
                  | Our privacy policy
                </Link> */}
            </Flex>
          </Flex>
        </Container>
      ) : (
        <Box
          sx={{
            backgroundColor: "primary",
          }}
        >
          {isMobile ? (
            <Box sx={{ px: 30, position: "relative" }}>
              <ContactContainer
                isMobile={isMobile}
                router={router}
                setIsShowPopUp={setIsShowPopUp}
                showPopUp={showPopUp}
              />
            </Box>
          ) : (
            <Container
              sx={{
                maxWidth: "desktopContainer",
                mx: "auto",
                px: 60,
                position: "relative",
              }}
            >
              <ContactContainer
                setIsShowPopUp={setIsShowPopUp}
                showPopUp={showPopUp}
                router={router}
              />
            </Container>
          )}
          {isMobile ? (
            <GridItemsContainer isMobile={isMobile} />
          ) : (
            <Container
              sx={{
                maxWidth: "desktopContainer",
                mx: "auto",
                px: 45,
                position: "relative",
              }}
            >
              <GridItemsContainer />
            </Container>
          )}
          <Divider sx={{ color: "divider", marginBottom: 0 }} />
          {isMobile ? (
            <Box
              sx={{
                px: 20,
                py: 20,
                textAlign: "center",
              }}
            >
              <CopyrightContainer isMobile={isMobile} />
            </Box>
          ) : (
            <Container
              sx={{
                maxWidth: "desktopContainer",
                mx: "auto",
                px: 45,
                py: 20,
                textAlign: "center",
              }}
            >
              <CopyrightContainer />
            </Container>
          )}
        </Box>
      )}
    </Box>
  );
};
export default FooterContainer;

const ContactContainer = ({ isMobile, showPopUp, setIsShowPopUp, router }) => {
  return (
    <Flex
      sx={{
        position: "absolute",
        background: "#EEE7E2",
        flexDirection: ["column", "column", "row"],
        justifyContent: "space-between",
        alignItems: "center",
        px: [30, 30, 40],
        py: [40, 40, 60],
        top: [-80, -80, -100],
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        width: ["89%", "89%", "92%"],
        borderRadius: 15,
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
        }}
      >
        <Text
          sx={{
            fontSize: [20, 20, 30],
            fontWeight: 500,
            color: "primary",
            fontFamily: "poppins",
            textAlign: ["center", "center", "left"],
          }}
        >
          Ready to get started?
        </Text>
        <Text
          sx={{
            fontSize: [20, 20, 30],
            fontWeight: 500,
            color: "secondary",
            fontFamily: "poppins",
            textAlign: ["center", "center", "left"],
          }}
        >
          Talk to us today
        </Text>
      </Flex>
      <Button
        variant="solid_primary"
        onClick={() => router.push("mailto:hr@radometech.com")}
      >
        Get Started
      </Button>

      {/* {showPopUp && (
        <PopUp id="kN2DG6QP" setIsShow={setIsShowPopUp} show={showPopUp} />
      )} */}
    </Flex>
  );
};

const GridItemsContainer = ({ isMobile }) => {
  return (
    <Flex
      sx={{
        flexDirection: ["column", "column", "row"],
        gap: [50, 50, 160],
        paddingTop: [160, 160, 200],
        paddingBottom: 50,
        marginX: 25,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid
        gap={isMobile ? "30px" : "45px"}
        columns={isMobile ? 2 : 4}
        sx={{ maxWidth: "100%" }}
      >
        <Flex sx={{ flexDirection: "column" }}>
          <Text variant="sm">Products</Text>
          <Divider sx={{ color: "divider", marginBottom: 0 }} />
          <Link variant="footernav" href="/products/proHM">
            ProHM+
          </Link>
          <Link variant="footernav" href="/products/logiSmart">
            LogiSmart
          </Link>
          <Link variant="footernav" href="/products/smartQC">
            Smart QC+
          </Link>
        </Flex>
        <Flex sx={{ flexDirection: "column" }}>
          <Text variant="sm">Location</Text>
          <Divider sx={{ color: "divider", marginBottom: 0 }} />
          <Text variant="xs" sx={{ mt: 10 }}>
            No 207, 1st Floor, JayaNivas, Paduka Mandira Road, near Brigade 7
            Gardens, BHCS Layout, Bengaluru 560061
          </Text>
          <br />
        </Flex>
        <Flex sx={{ flexDirection: "column" }}>
          <Text variant="sm">Career Enquiry</Text>
          <Divider sx={{ color: "divider", marginBottom: 0 }} />
          {/* <Text variant="xs" sx={{ mt: 10 }}>
            +91 9008662093
          </Text> */}
          <Link variant="footernav" href="mailto:hr@radometech.com">
            hr@radometech.com
          </Link>
        </Flex>
        <Flex sx={{ flexDirection: "column", flex: 1 }}>
          <Text variant="sm">Sales Enquiry</Text>
          <Divider sx={{ color: "divider", marginBottom: 0 }} />
          {/* <Text variant="xs" sx={{ mt: 10 }}>
            +91 8762640093
          </Text> */}
          <Link variant="footernav" href="mailto:sales@radometech.com">
            sales@radometech.com
          </Link>
        </Flex>
      </Grid>
    </Flex>
  );
};

const CopyrightContainer = ({ isMobile }) => {
  return (
    <Text>
      <Text variant="xs">
        Copyright © Radome Technology | All Rights Reserved | Our privacy policy
      </Text>
      {/* <Link variant="footerCopyNav" sx={{ paddingLeft: "5px" }} href="/"></Link> */}
    </Text>
  );
};
