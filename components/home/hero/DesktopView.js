/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Button, Container, Flex, Image, Text } from "theme-ui";
import { keyframes } from "@emotion/react";
import PopUp from "@/components/PopUp";
import { useRouter } from "next/router";

const fadeIn = keyframes({
  from: { opacity: 0, scale: 0 },
  to: { opacity: 1, scale: 1 },
});

const DesktopView = () => {
  const [showPopUp, setIsShowPopUp] = useState(false);
  let w = document.documentElement.clientWidth;
  const router = useRouter();
  return (
    <>
      <Container
        sx={{
          maxWidth: "desktopContainer",
          mx: "auto",
          position: "relative",
          animation: `${fadeIn} 0.8s backwards`,
        }}
      >
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
            md: 10,
          }}
        >
          <Text sx={{ maxWidth: "60%", textAlign: "center", mb: 20 }}>
            <Text sx={{ fontSize: 36, fontWeight: 300, color: "secondary" }}>
              Towards an{" "}
            </Text>
            <Text sx={{ fontSize: 36, fontWeight: 600, color: "primary" }}>
              Efficient, Repeatable and Reliable
            </Text>
            <Text sx={{ fontSize: 36, fontWeight: 300, color: "secondary" }}>
              {" "}
              future by{" "}
            </Text>
            <Text sx={{ fontSize: 50, fontWeight: 600, color: "primary" }}>
              Leveraging AI
            </Text>
          </Text>

          <Button
            variant="solid_primary"
            onClick={() => router.push("mailto:hr@radometech.com")}
          >
            Let's work together
          </Button>
        </Flex>
        {/* {showPopUp && (
          <PopUp id="kN2DG6QP" setIsShow={setIsShowPopUp} show={showPopUp} />
        )} */}
      </Container>
    </>
  );
};

export default DesktopView;
