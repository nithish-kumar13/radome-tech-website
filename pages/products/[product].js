// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: [product].js
// Description: Product related exposing and this file is dynamic
// Author: Nithish Kumar K,
// Revision dates: 11-05-2023,
// List of components: Layout, Benefits, FlowExplain, ProductHero, Section
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// COMPONENTS
import Layout from "../../components/Layout";
import Benefits from "../../components/products/benefits";
import FlowExplain from "../../components/common/flowExplain";
import ProductHero from "../../components/products/productHero";
import Section from "../../components/products/section";

// DATA
import { logiSmart, proHM, smartQC } from "../../data/products";
import { Box, Button, Flex, Image } from "theme-ui";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [productLinkPopUp, setProductLinkPopUp] = useState(false);
  const router = useRouter();
  const { product } = router.query;

  useEffect(() => {
    if (product === "proHM") {
      proHM.map((item, i) => setProductData(item));
    }
    if (product === "smartQC") {
      smartQC.map((item, i) => setProductData(item));
    }
    if (product === "logiSmart") {
      logiSmart.map((item, i) => setProductData(item));
    }
    setProductLinkPopUp(true);
  }, [product]);
  return (
    <>
      <Head>
        <title>Radome-Products</title>
        <meta name="description" content="Radome_content" />
      </Head>
      <Layout>
        <ProductHero data={productData.hero} />
        <Section data={productData.sections} />
        <FlowExplain data={productData.flow} title={"Flow"} />
        <Benefits data={productData.benefits} />
        {productLinkPopUp && product === "proHM" && (
          <Flex
            sx={{
              position: "fixed",
              bottom: [2, 2, 10],
              right: [2, 2, 10],
              background: "white",
              padding: 15,
              minWidth: [0, 0, 200],
              maxWidth: [200, 200, 0],
              height: [350, 350, 300],
              borderRadius: 10,
              flexDirection: "column",
              zIndex: "99",
              gap: 15,
              opacity: productLinkPopUp ? 1 : 0,
              transform: productLinkPopUp ? "scale(1)" : "scale(0.8)",
              transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <Image
              src="/assets/close.png"
              sx={{
                alignSelf: "flex-end",
                minWidth: 30,
                height: 30,
                cursor: "pointer",
              }}
              alt="close-image"
              loading="lazy"
              onClick={() => setProductLinkPopUp(!productLinkPopUp)}
            />
            <Image
              src="/assets/header_proHM.png"
              alt="proHM"
              sx={{
                maxWidth: ["100%", "100%", 130],
                height: "auto",
                alignSelf: "center",
                my: "4px",
              }}
              loading="lazy"
            />
            <Button
              variant="outline_primary"
              onClick={() => router.push("mailto:hr@radometech.com")}
              sx={{ borderColor: "#252525", color: "#252525", minWidth: 100 }}
            >
              Demo
            </Button>
          </Flex>
        )}
      </Layout>
    </>
  );
};

export default Product;
