// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: index.js
// Description: In this screen, Home screen or initial screen will render here,
// Author: Nithish Kumar K,
// Revision dates: 11-05-2023,
// List of components: IntroVideo, Partners, ServicesProvider, Uniqueness, Achievement, Layout, Hero, Future, NewProducts,
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import Head from "next/head";

// COMPONENTS
import IntroVideo from "../components/home/introVideo";
import Partners from "../components/home/partners";
import ServicesProvider from "../components/home/servicesProvider";
import Uniqueness from "../components/home/uniqueness";
import Achievement from "../components/home/achievement";
import Layout from "../components/Layout";
import Hero from "../components/home/hero";
import Future from "../components/home/future";
import NewProducts from "../components/home/newProducts";

/** @jsxImportSource theme-ui */

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Radome-Home</title>
        <meta name="description" content="Radome_content" />
      </Head>
      <Layout>
        <IntroVideo />
        <Hero />

        <Future />
        <Uniqueness />
        <NewProducts />
        <ServicesProvider />
        <Partners />
        <Achievement />
        {/* <Blog /> */}
      </Layout>
    </>
  );
};
export default Homepage;
