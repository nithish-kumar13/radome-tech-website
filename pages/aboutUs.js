// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: aboutUs.js
// Description: In this screen, Tell about our company
// Author: Nithish Kumar K,
// Revision dates: 11-05-2023,
// List of components: AboutUsHero, Layout, FlowExplain, OurTeam, Location,
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import Head from "next/head";
import React from "react";

// COMPONENTS
import AboutUsHero from "../components/aboutUs/aboutUsHero";
import Layout from "../components/Layout";
import FlowExplain from "../components/common/flowExplain";
import OurTeam from "../components/aboutUs/ourTeam";
import Location from "../components/aboutUs/location";

const journeyData = [
  { date: "May - 2017", title: "Incorporate of company" },
  { date: "May - 2018", title: "Agreement with DIO for a navy project" },
  { date: "May - 2019", title: "Moved to new office space" },
  { date: "May - 2020", title: "First version of AI product market is ready" },
];

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Radome-About Us</title>
        <meta name="description" content="Radome_content" />
        <meta property="og:image" content="/assets/small-logo.png" />
      </Head>
      <Layout>
        <AboutUsHero />
        <FlowExplain title="Our Journey" data={journeyData} isFromAbout />
        <OurTeam />
        <Location />
      </Layout>
    </>
  );
};

export default AboutUs;
