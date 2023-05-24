import React, { useState, useEffect } from "react";
import { Flex, Image } from "theme-ui";

const LoginGallery = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length, interval]);

  const dotStyle = {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#cccccc",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    margin: "0 5px",
    cursor: "pointer",
  };

  const activeDotStyle = {
    backgroundColor: "#2dbece",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };

  return (
    <Flex
      sx={{
        background: "white",
        borderColor: "primary",
        justifyContent: "center",
        maxWidth: "100%",
        marginTop: [0, 0, 30],
        paddingY: 30,
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        src={images[currentImageIndex]}
        alt="Autoplay Image"
        sx={{ width: "100%", height: "auto", borderRadius: 10 }}
      />
      {/* <Text variant="3xl" sx={{ paddingX: 50 }}>
        {images[currentImageIndex].title}
      </Text> */}
      <div style={{ paddingX: 50, marginTop: 20 }}>
        {images.map((image, index) => (
          <span
            key={index}
            style={
              index === currentImageIndex
                ? { ...dotStyle, ...activeDotStyle }
                : dotStyle
            }
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </Flex>
  );
};

export default LoginGallery;
