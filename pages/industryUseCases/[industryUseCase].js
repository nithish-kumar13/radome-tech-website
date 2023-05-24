// Copyright (c) 2023, Radome Technologies and Services Private Limited
// All rights reserved.

// FileName: [industryUseCase].js
// Description: Industrical UseCase dynamically for screen pages
// Author: Nithish Kumar,
// Revision dates: 11-05-2023,
// List of methods/Functions/Classes/components: IndustryUseCaseHero, DescriptionSection, UseCaseSection
// Approved by: Ajit,
// Date of Approval: 11-05-2023,

// Redistribution and use in source and binary forms, with or without modification, are strictly prohibited without prior written permission from Radome Technologies and Services Private Limited

// PACKAGES
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// COMPONENTS
import Layout from "@/components/Layout";
import DescriptionSection from "@/components/industryUseCase/descriptionSection";
import IndustryUseCaseHero from "@/components/industryUseCase/industryUseCaseHero";
import UseCaseSection from "@/components/industryUseCase/useCaseSection";

// DATA STATIC
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
} from "@/data/industrialUseCases";

const IndustryUseCase = () => {
  const [industryUseCaseData, setIndustryUseCaseData] = useState([]);
  const router = useRouter();
  const { industryUseCase } = router.query;

  useEffect(() => {
    if (industryUseCase === "retail") {
      retail.map((item, i) => setIndustryUseCaseData(item));
    }
    if (industryUseCase === "manufacture") {
      manufacture.map((item, i) => setIndustryUseCaseData(item));
    }
    if (industryUseCase === "healthCare") {
      healthcare.map((item, i) => setIndustryUseCaseData(item));
    }
    if (industryUseCase === "engineering") {
      engineer.map((item, i) => setIndustryUseCaseData(item));
    }
    if (industryUseCase === "oil") {
      oil.map((item, i) => setIndustryUseCaseData(item));
    }
    if (industryUseCase === "travel") {
      travel.map((item, i) => setIndustryUseCaseData(item));
    }
    if (industryUseCase === "consumer") {
      consumer.map((item, i) => setIndustryUseCaseData(item));
    }
    if (industryUseCase === "telecommunication") {
      telecommunication.map((item, i) => setIndustryUseCaseData(item));
    }
    if (industryUseCase === "banking") {
      banking.map((item, i) => setIndustryUseCaseData(item));
    }
    if (industryUseCase === "food") {
      food.map((item, i) => setIndustryUseCaseData(item));
    }
  }, [industryUseCase]);
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

export default IndustryUseCase;
