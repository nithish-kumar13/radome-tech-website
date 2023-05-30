/* eslint-disable react-hooks/exhaustive-deps */

import ChevronDown from "@/utils/icons/ChevronDown";
import { keyframes } from "@emotion/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Box, Button, Divider, Flex, Grid, Image, Link, Text } from "theme-ui";

const scaleIn = keyframes({ from: { scale: 0 }, to: { scale: 1 } });

const HeaderContainer = (props) => {
  const { isMobile } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [hoverIndex, setHoverIndex] = useState();
  const [selected, setSelected] = useState(null);
  const [showPopUp, setIsShowPopUp] = useState(false);
  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };
  let h = document.documentElement.clientHeight;

  const mainLinkData = [
    { path: "/aboutUs", title: "About Us" },
    {
      title: "Products",
      menuItems: [
        {
          title: "ProHM+",
          image: "/assets/header_proHM.png",
          path: "/products/proHM",
        },
        {
          title: "LogiSmart",
          image: "/assets/header_logismart.png",
          path: "/products/logiSmart",
        },
        {
          title: "Smart QC+",
          image: "/assets/header_smartQC.png",
          path: "/products/smartQC",
        },
        {
          title: "Retail AI",
          image: "/assets/small-logo.png",
          path: "http://49.207.60.103:8081/",
        },
      ],
    },
    {
      title: "AI as Services",
      menuItems: [
        {
          image: "/assets/retail.png",
          title: "Retail",
          description: "",
          path: "/aiAsServices/retail",
        },
        {
          image: "/assets/manufacturing.png",
          title: "Manufacturing",
          description: "",
          path: "/aiAsServices/manufacture",
        },
        {
          image: "/assets/healthcare.png",
          title: "Health Care",
          description: "",
          path: "/aiAsServices/healthCare",
        },
        {
          image: "/assets/engineer.png",
          title: "Engineering & Construction",
          description: "",
          path: "/aiAsServices/engineering",
        },
        {
          image: "/assets/oil.png",
          title: "Oil & Gas",
          description: "",
          path: "/aiAsServices/oil",
        },
        {
          image: "/assets/travel.png",
          title: "Travel & Hospitality",
          description: "",
          path: "/aiAsServices/travel",
        },
        {
          image: "/assets/consumer.png",
          title: "Consumer Electronics",
          description: "",
          path: "/aiAsServices/consumer",
        },
        {
          image: "/assets/telecommunication.png",
          title: "Telecommunication",
          description: "",
          path: "/aiAsServices/telecommunication",
        },
        {
          image: "/assets/banking.png",
          title: "Banking & Insurance",
          description: "",
          path: "/aiAsServices/banking",
        },
        {
          image: "/assets/food.png",
          title: "Food & Beverages",
          description: "",
          path: "/aiAsServices/food",
        },
      ],
    },
  ];
  const scrollLock = () => {
    document.body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    document.body.style.overflow = "scroll";
  };

  React.useEffect(() => {
    if (isMenuOpen || isMenuShow) {
      scrollLock();
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [isMenuOpen]);

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        pt: "15px",
      }}
      onMouseLeave={() => {
        setIsMenuShow(false);
        setHoverIndex();
      }}
    >
      <Link href="/">
        <Image
          src="/assets/logo.png"
          alt="radome-logo"
          variant="logo"
          sx={{ cursor: "pointer" }}
          loading="lazy"
        />
      </Link>
      {isMobile ? (
        <>
          <Button
            variant="normal_text_btn"
            sx={{ background: "bg", padding: 10, color: "highLight" }}
            onClick={() =>
              window.open("https://forms.gle/MpjiXY3euLK1QWDY6", "_blank")
            }
          >
            Careers
          </Button>
          <Image
            src={isMenuOpen ? "/assets/close.png" : "/assets/menu.png"}
            alt="radome-logo"
            variant="menuIcon"
            sx={{ cursor: "pointer" }}
            loading="lazy"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setHoverIndex();
            }}
          />
        </>
      ) : (
        <>
          <Flex
            sx={{
              alignItems: "center",
              gap: "40px",
              position: "relative",
            }}
          >
            {mainLinkData.map((item, i) => {
              return (
                <MenuListing
                  key={i}
                  index={i}
                  item={item}
                  setIsMenuShow={setIsMenuShow}
                  isMenuOpen={isMenuOpen}
                  setHoverIndex={setHoverIndex}
                  hoverIndex={hoverIndex}
                />
              );
            })}
            <Button
              variant="normal_text_btn"
              onClick={() =>
                window.open("https://forms.gle/MpjiXY3euLK1QWDY6", "_blank")
              }
              // https://forms.gle/MpjiXY3euLK1QWDY6
            >
              Careers
            </Button>
          </Flex>
        </>
      )}
      {mainLinkData[hoverIndex]?.menuItems && isMenuShow && !isMobile && (
        <Box
          sx={{
            width: "100%",
            height: "auto",
            borderLeft: "15px solid transparent",
            borderRight: "15px solid transparent",
            position: "absolute",
            backgroundColor: "rgba(225,225,225,0)",
            backdropFilter: `blur(10px)`,
            top: 80,
            left: 0,
            zIndex: 50,
            padding: 40,
          }}
        >
          <Grid columns={3} gap={10}>
            {!isMobile &&
              mainLinkData[hoverIndex]?.menuItems.map((item, i) => {
                return (
                  <Link
                    key={item?.path}
                    href={item?.path}
                    sx={{ textDecoration: "none" }}
                  >
                    <Flex
                      sx={{
                        background: "transparent",
                        flexDirection: "row",
                        gap: 20,
                        cursor: "pointer",
                        padding: 20,
                        backgroundColor: "#eaf9fa",
                        borderRadius: 10,
                        "&:hover": {
                          transform: `scale(1.02)`,
                          boxShadow:
                            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                        },
                      }}
                    >
                      <Image
                        alt="arrow-left-icon"
                        src={item.image}
                        sx={{
                          width: i === 3 ? 100 : 100,
                          height: 100,
                          position: "relative",
                          backgroundPosition: "center",
                        }}
                        loading="lazy"
                      />
                      <Text
                        sx={{
                          fontSize: 18,
                          fontWeight: 400,
                          color: "secondary",
                          py: 20,
                        }}
                      >
                        {item.title}
                      </Text>
                    </Flex>
                  </Link>
                );
              })}
          </Grid>
        </Box>
      )}
      {isMenuOpen && isMobile && (
        <MenuListingMobile
          h={h}
          sideVariants={sideVariants}
          mainLinkData={mainLinkData}
          itemVariants={itemVariants}
          toggle={toggle}
          selected={selected}
          setSelected={setSelected}
          setIsShowPopUp={setIsShowPopUp}
          showPopUp={showPopUp}
        />
      )}
      {/* {showPopUp && (
        <PopUp
          id="npNpkQeI"
          setIsShow={setIsShowPopUp}
          show={showPopUp}
          isMobile={isMobile}
        />
      )} */}
    </Flex>
  );
};

export default HeaderContainer;

const MenuListing = ({
  item,
  setIsMenuShow,
  isMenuOpen,
  setHoverIndex,
  index,
  hoverIndex,
}) => {
  return (
    <Flex sx={{ alignItems: "center", gap: "4px", position: "relative" }}>
      <Text
        onMouseEnter={() => {
          setIsMenuShow(true);
          setHoverIndex(index);
        }}
        sx={{
          color: hoverIndex === index ? "primary" : "secondary",
          cursor: "pointer",
          textDecoration: "none",
        }}
        as={Link}
        href={item?.path}
      >
        {item.title}
      </Text>
      {item.menuItems && (
        <ChevronDown
          width={15}
          height={15}
          stroke={hoverIndex === index ? "#2dbece" : "#3b4859"}
        />
      )}
    </Flex>
  );
};

const MenuListingMobile = ({
  h,
  sideVariants,
  mainLinkData,
  itemVariants,
  toggle,
  selected,
  setIsShowPopUp,
  showPopUp,
}) => {
  const SubMenuListing = ({ index, item }) => {
    return (
      <Link href={item?.path} sx={{ textDecoration: "none" }}>
        <Flex
          sx={{
            background: "transparent",
            flexDirection: "row",
            gap: 20,
            cursor: "pointer",
            padding: 10,
            borderRadius: 10,
            "&:hover": {
              transform: `scale(1.02)`,
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            },
          }}
        >
          <Image
            alt="arrow-left-icon"
            src={item.image}
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundPosition: "center",
            }}
            loading="lazy"
          />
          <Text
            sx={{
              fontSize: 18,
              fontWeight: 600,
              color: "secondary",
              py: 20,
            }}
          >
            {item.title}
          </Text>
        </Flex>
      </Link>
    );
  };
  return (
    <AnimatePresence>
      <motion.aside
        initial={{ width: 0 }}
        animate={{
          width: 300,
        }}
        exit={{
          width: 0,
          transition: { delay: 0.7, duration: 0.3 },
        }}
        style={{
          backgroundColor: "rgba(225,225,225,0.5)",
          minWidth: "100%",
          height: h - 100,
          position: "absolute",
          zIndex: 99,
          top: 80,
          right: 0,
          left: 0,
          backdropFilter: `blur(10px)`,
          padding: 30,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <motion.div
          className="container"
          initial="closed"
          animate="open"
          exit="closed"
          variants={sideVariants}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {mainLinkData.map((item, index) => (
            <>
              <motion.a
                key={index}
                href={item.path}
                whileTap={{ scale: 1.1 }}
                variants={itemVariants}
                style={{
                  fontFamily: "poppins",
                  fontSize: "24px",
                  textDecoration: "none",
                  color: selected === index ? "#2dbece" : "#3b4859",
                  fontWeight: 500,
                  paddingTop: 10,
                  paddingBottom: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onClick={() => {
                  toggle(index);
                }}
              >
                {item.title}
                {item.menuItems && (
                  <ChevronDown
                    width={15}
                    height={15}
                    stroke={selected === index ? "#2dbece" : "#3b4859"}
                  />
                )}
              </motion.a>

              {selected === index && (
                <Box
                  sx={{
                    height: 350,
                    overflowY: "scroll",
                    scrollBehavior: "smooth",
                  }}
                >
                  {item?.menuItems.map((item, i) => {
                    return <SubMenuListing key={item} item={item} />;
                  })}
                </Box>
              )}

              {index + 1 !== mainLinkData?.length && (
                <Divider sx={{ color: "secondary" }} />
              )}
            </>
          ))}
        </motion.div>
      </motion.aside>
    </AnimatePresence>
  );
};
