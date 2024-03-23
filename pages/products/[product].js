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
        
      </Layout>
    </>
  );
};

export default Product;
