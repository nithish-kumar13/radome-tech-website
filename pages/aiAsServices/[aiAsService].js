// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: [aiAsService].js
// Description: AI service  related useCases and this file is dynamic 
// Author: Nithish Kumar K,
// Revision dates: 11-05-2023,
// List of components: DescriptionSection, IndustryUseCaseHero, Layout, UseCaseSection
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// COMPONENTS
import DescriptionSection from "../../components/industryUseCase/descriptionSection";
import IndustryUseCaseHero from "../../components/industryUseCase/industryUseCaseHero";
import Layout from "../../components/Layout";
import UseCaseSection from "../../components/industryUseCase/useCaseSection";

// DATA
import {
  banking,
  consumer,
  engineer,
  food,
  healthcare,
  manufacture,
  oil,
  retail,
  telecommunication,
  travel,
} from "../../data/industrialUseCases";

const AIAsService = () => {
  const [industryUseCaseData, setIndustryUseCaseData] = useState([]);
  const router = useRouter();
  const { aiAsService } = router.query;

  useEffect(() => {
    if (aiAsService === "retail") {
      retail.map((item, i) => setIndustryUseCaseData(item));
    }
    if (aiAsService === "manufacture") {
      manufacture.map((item, i) => setIndustryUseCaseData(item));
    }
    if (aiAsService === "healthCare") {
      healthcare.map((item, i) => setIndustryUseCaseData(item));
    }
    if (aiAsService === "engineering") {
      engineer.map((item, i) => setIndustryUseCaseData(item));
    }
    if (aiAsService === "oil") {
      oil.map((item, i) => setIndustryUseCaseData(item));
    }
    if (aiAsService === "travel") {
      travel.map((item, i) => setIndustryUseCaseData(item));
    }
    if (aiAsService === "consumer") {
      consumer.map((item, i) => setIndustryUseCaseData(item));
    }
    if (aiAsService === "telecommunication") {
      telecommunication.map((item, i) => setIndustryUseCaseData(item));
    }
    if (aiAsService === "banking") {
      banking.map((item, i) => setIndustryUseCaseData(item));
    }
    if (aiAsService === "food") {
      food.map((item, i) => setIndustryUseCaseData(item));
    }
  }, [aiAsService]);
  return (
    <>
      <Head>
        <title>Radome-Industry Use cases</title>
        <meta name="description" content="Radome_content" />
      </Head>
      <Layout>
        <IndustryUseCaseHero data={industryUseCaseData.hero} />
        <DescriptionSection
          data={industryUseCaseData.businessChallenge}
          title="Business Challenges"
        />
        <DescriptionSection
          data={industryUseCaseData.howCanHelp}
          title="How can AI help?"
        />
        <UseCaseSection data={industryUseCaseData.useCases} title="Use cases" />
        <DescriptionSection
          data={industryUseCaseData.whyChoose}
          title="Why choose us?"
          isFromLast
        />
      </Layout>
    </>
  );
};

export default AIAsService;
