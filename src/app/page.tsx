import React from "react";
import { PreviewBanner } from "@/components/layout/PreviewBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TransitionSection } from "@/components/sections/TransitionSection";
import { ChapterWebsite } from "@/components/sections/ChapterWebsite";
import { ChapterCreative } from "@/components/sections/ChapterCreative";
import { ChapterMarketing } from "@/components/sections/ChapterMarketing";
import { ChapterBusinessPlan } from "@/components/sections/ChapterBusinessPlan";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { featureGroups } from "@/content/features";
import { getMediaByGroup } from "@/content/media";

export default function HomePage() {
  const websiteGroup = featureGroups[0];
  const creativeGroup = featureGroups[1];
  const marketingGroup = featureGroups[2];
  const businessPlanGroup = featureGroups[3];

  const websiteMedia = getMediaByGroup("ai-website");
  const creativeMedia = getMediaByGroup("ad-creative");
  const businessPlanMedia = getMediaByGroup("business-plan");

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7FC] text-[#171320] selection:bg-[#7657F6]/20 selection:text-[#7657F6]">
      {/* Top Review Banner */}
      <PreviewBanner />

      {/* Main Sticky Header */}
      <Header />

      {/* Main Landmark */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section with Real Product Screenshot */}
        <HeroSection />

        {/* 2. Merged Problem & Platform Overview Transition */}
        <TransitionSection />

        {/* 3. Chapter A: AI 홈페이지 제작 (Dark theme, large central player) */}
        <ChapterWebsite
          group={websiteGroup}
          mediaList={websiteMedia}
        />

        {/* 4. Chapter B: 광고 소재 제작 (Light pastel theme, content studio) */}
        <ChapterCreative
          group={creativeGroup}
          mediaList={creativeMedia}
        />

        {/* 5. Chapter C: 마케팅·자동화 (Dark theme, structured roadmap) */}
        <ChapterMarketing
          group={marketingGroup}
        />

        {/* 6. Chapter D: 사업계획서 작성 (Light neutral theme, document workspace) */}
        <ChapterBusinessPlan
          group={businessPlanGroup}
          mediaList={businessPlanMedia}
        />

        {/* 7. Current vs Future Ways of Using */}
        <HowItWorksSection />

        {/* 8. FAQ Accordion */}
        <FaqSection />

        {/* 9. Final CTA: Unified card with compact job selector */}
        <FinalCtaSection />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
