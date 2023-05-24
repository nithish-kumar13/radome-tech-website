import { Widget } from "@typeform/embed-react";
import React from "react";
import { Box, Flex, Image } from "theme-ui";
import YouTube from "react-youtube";

const PopUp = ({ setIsShow, show, isYoutube, id, isMobile }) => {
  React.useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [show]);

  const opts = {
    height: "580px",
    width: "1200px",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Flex
      sx={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.9)",
        zIndex: 100,
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          top: "20px",
          right: "20px",
        }}
        onClick={() => setIsShow(!show)}
      >
        <Image
          src="/assets/x-circle.svg"
          sx={{
            alignSelf: "flex-end",
            minWidth: 30,
            height: 30,
          }}
          alt="close-image"
          loading="lazy"
        />
      </Box>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        {isYoutube ? (
          <YouTube videoId={id} opts={opts} />
        ) : (
          <Widget
            id={id}
            className="my-form"
            style={{
              height: isMobile ? "80%" : "580px",
              width: isMobile ? "100%" : "1200px",
            }}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default PopUp;
