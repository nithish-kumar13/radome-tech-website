/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Button, Flex, Text } from "theme-ui";
import { keyframes } from "@emotion/react";
import PopUp from "@/components/PopUp";
import { useRouter } from "next/router";

const fadeIn = keyframes({
  from: { opacity: 0, scale: 0 },
  to: { opacity: 1, scale: 1 },
});

const MobileView = ({ isTablet }) => {
  const [showPopUp, setIsShowPopUp] = useState(false);
  let w = document.documentElement.clientWidth;
  const router = useRouter();
  return (
    <>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
          mb: 30,
          px: 30,
        }}
      >
        <Text sx={{ maxWidth: 500, textAlign: "center" }}>
          <Text sx={{ fontSize: 25, fontWeight: 300, color: "secondary" }}>
            Towards an{" "}
          </Text>
          <Text sx={{ fontSize: 25, fontWeight: 600, color: "primary" }}>
            Efficient, Repeatable and Reliable
          </Text>
          <Text sx={{ fontSize: 25, fontWeight: 300, color: "secondary" }}>
            {" "}
            future by{" "}
          </Text>
        </Text>
        <Text sx={{ fontSize: 40, fontWeight: 600, color: "primary", mb: 20 }}>
          Leveraging AI
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
    </>
  );
};

export default MobileView;
