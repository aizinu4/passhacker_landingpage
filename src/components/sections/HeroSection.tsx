"use client";

import React from "react";
import Image from "next/image";
import { siteContentKo } from "@/content/site.ko";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Play, Sparkles, Globe, Video, FileText } from "lucide-react";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      aria-label="서비스 소개"
      className="relative overflow-hidden hero-gradient-bg pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#7657F6]/10"
    >
      {/* Subtle ambient light accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#EAE2FF]/60 via-[#DFF4FF]/50 to-[#FFE8EE]/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="brand-container max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: 45% Text on Desktop */}
          <div className="lg:col-span-5 text-left space-y-6">
            {/* Eyebrow & Brand Idea Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#7657F6]/20 shadow-xs text-xs md:text-sm font-semibold text-[#7657F6]">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{siteContentKo.hero.eyebrow}</span>
              </div>
              <span className="text-xs text-[#625D70] font-medium hidden sm:inline">
                {siteContentKo.hero.designConcept}
              </span>
            </div>

            {/* Mandatory Exact H1 (3 lines, exact punctuation preserved) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#171320] leading-[1.14] break-keep">
              <span className="block">{siteContentKo.hero.h1Line1}</span>
              <span className="block">{siteContentKo.hero.h1Line2}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#171320] via-[#5034C4] to-[#7657F6]">
                {siteContentKo.hero.h1Line3}
              </span>
            </h1>

            {/* Mandatory Exact Subheadline */}
            <p className="text-lg sm:text-xl font-bold text-[#5034C4] tracking-tight leading-snug break-keep">
              {siteContentKo.hero.subheadline}
            </p>

            {/* Supporting Copy */}
            <p className="text-base text-[#625D70] max-w-xl leading-relaxed break-keep">
              {siteContentKo.hero.supporting}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={siteContentKo.hero.primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#7657F6] text-white font-semibold text-base hover:bg-[#6242E6] active:scale-98 transition-all shadow-md shadow-[#7657F6]/30"
              >
                <span>{siteContentKo.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={siteContentKo.hero.secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-[#171320] font-semibold text-base hover:bg-black/5 active:scale-98 border border-[#7657F6]/20 transition-all shadow-xs"
              >
                <Play className="w-4 h-4 text-[#7657F6] fill-current" aria-hidden="true" />
                <span>{siteContentKo.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Editorial helper note */}
            <div className="pt-2">
              <span className="text-xs text-[#8A8598] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                실제 서비스 제작 결과물 기반 시연 제공
              </span>
            </div>
          </div>

          {/* Right Column: 55% Visual on Desktop (Composite Real Results Showcase) */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full"
            >
              {/* 1. Main Base Layer: AI Website Builder Result (Largest frame) */}
              <div className="surface-light p-2.5 sm:p-3.5 rounded-3xl relative overflow-hidden backdrop-blur-sm border border-[#7657F6]/20 shadow-2xl">
                {/* Mock Browser Header */}
                <div className="flex items-center justify-between px-3 py-2 mb-2 rounded-xl bg-[#F8F7FC] border border-black/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 text-xs font-medium text-[#625D70] hidden sm:inline">
                      {siteContentKo.hero.assetLabels.website}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#7657F6]/10 text-[11px] font-semibold text-[#7657F6]">
                    <Globe className="w-3 h-3" />
                    <span>홈페이지 직접 편집</span>
                  </span>
                </div>

                {/* Real website builder frame */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#17102C] border border-black/10">
                  <Image
                    src="/posters/website-edit.png"
                    alt="패스해커 AI 홈페이지 제작 결과 화면"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 750px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* 2. Floating Secondary Layer: Shorts Content Result (Vertical card on the left-bottom) */}
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="hidden sm:block absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-44 md:w-52 p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#7657F6]/25 shadow-xl z-20"
              >
                <div className="flex items-center justify-between mb-1.5 px-1">
                  <span className="text-[11px] font-bold text-[#171320] flex items-center gap-1">
                    <Video className="w-3 h-3 text-[#7657F6]" />
                    {siteContentKo.hero.assetLabels.shorts}
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#7657F6]/10 text-[#7657F6] font-semibold">
                    9:16
                  </span>
                </div>
                <div className="relative w-full aspect-[9/14] rounded-lg overflow-hidden bg-black border border-black/5">
                  <Image
                    src="/posters/creative-shorts.png"
                    alt="숏츠 영상 콘텐츠 결과 예시"
                    fill
                    sizes="220px"
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>

              {/* 3. Floating Secondary Layer: Business Plan Draft Result (Document card on the right-top) */}
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: -16 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="hidden md:block absolute -top-6 -right-6 lg:-right-8 w-56 md:w-64 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#7657F6]/25 shadow-xl z-20"
              >
                <div className="flex items-center justify-between mb-1.5 px-1">
                  <span className="text-[11px] font-bold text-[#171320] flex items-center gap-1">
                    <FileText className="w-3 h-3 text-[#7657F6]" />
                    {siteContentKo.hero.assetLabels.businessPlan}
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 font-semibold">
                    완성 초안
                  </span>
                </div>
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-[#F8F7FC] border border-black/5">
                  <Image
                    src="/posters/business-import.png"
                    alt="사업계획서 초안 결과 예시"
                    fill
                    sizes="260px"
                    className="object-cover object-top"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
