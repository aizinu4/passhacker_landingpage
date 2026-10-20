"use client";

import React from "react";
import { siteContentKo } from "@/content/site.ko";
import { motion, useReducedMotion } from "motion/react";
import { CheckCircle2, Clock, Sparkles, MessageSquare, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
      aria-label="이용 방식 안내"
      className="section-spacing bg-[#F8F7FC] relative overflow-hidden border-b border-[#7657F6]/10"
    >
      <div className="brand-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#7657F6] bg-[#7657F6]/10 px-3 py-1 rounded-full">
            {siteContentKo.howItWorks.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#171320] leading-tight tracking-tight break-keep">
            {siteContentKo.howItWorks.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#625D70]">
            {siteContentKo.howItWorks.subheading}
          </p>
        </div>

        {/* Two Distinct Blocks: Current vs Future */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Block 1: Current Workflow */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8 rounded-3xl bg-white border border-[#7657F6]/15 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{siteContentKo.howItWorks.currentBlock.badge}</span>
                </span>
                <span className="text-xs text-[#625D70] font-mono">
                  Current Workflow
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-[#171320] tracking-tight">
                {siteContentKo.howItWorks.currentBlock.title}
              </h3>

              <p className="mt-3 text-sm md:text-base text-[#625D70] leading-relaxed break-keep">
                {siteContentKo.howItWorks.currentBlock.description}
              </p>

              {/* Steps */}
              <div className="mt-8 space-y-4">
                {siteContentKo.howItWorks.currentBlock.steps.map((st) => (
                  <div
                    key={st.step}
                    className="p-4 rounded-2xl bg-[#F8F7FC] border border-black/5 flex items-start gap-4"
                  >
                    <span className="text-sm font-bold font-mono text-[#7657F6] bg-white w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border border-[#7657F6]/20">
                      {st.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#171320]">
                        {st.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-[#625D70] break-keep">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/5 text-xs text-[#625D70]">
              <span className="font-semibold text-[#171320]">안내:</span> 현재 각 도구는 목적에 따라 별도 환경으로 접속 가능합니다.
            </div>
          </motion.div>

          {/* Block 2: Future Unified Platform */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-6 md:p-8 rounded-3xl bg-[#17102C] text-white border border-white/10 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#7657F6]/30 text-[#D8CBFF] border border-[#7657F6]/50">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{siteContentKo.howItWorks.futureBlock.badge}</span>
                </span>
                <span className="text-xs text-white/50 font-mono">
                  Future Roadmap
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                {siteContentKo.howItWorks.futureBlock.title}
              </h3>

              <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed break-keep">
                {siteContentKo.howItWorks.futureBlock.description}
              </p>

              {/* Static Chat Mock Labelled '향후 제공 예정' */}
              <div className="mt-8 p-5 rounded-2xl bg-[#221840] border border-white/10 relative overflow-hidden select-none">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#A78BFA]" />
                    <span className="text-xs font-bold text-white">
                      {siteContentKo.howItWorks.futureBlock.chatMockSubtitle}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#A78BFA] bg-[#7657F6]/20 px-2 py-0.5 rounded-full border border-[#7657F6]/40">
                    {siteContentKo.howItWorks.futureBlock.chatMockLabel}
                  </span>
                </div>

                {/* Mock User Message */}
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="max-w-[85%] p-3 rounded-2xl rounded-tr-xs bg-[#7657F6] text-white text-xs leading-relaxed break-keep">
                      {siteContentKo.howItWorks.futureBlock.chatMockPrompt}
                    </div>
                  </div>

                  {/* Mock AI Response */}
                  <div className="flex justify-start">
                    <div className="max-w-[85%] p-3 rounded-2xl rounded-tl-xs bg-white/10 text-white/90 text-xs leading-relaxed border border-white/10 break-keep">
                      <div className="flex items-center gap-1.5 text-[10px] text-[#A78BFA] font-bold mb-1">
                        <Sparkles className="w-3 h-3" />
                        <span>패스해커 (통합 이용 예시)</span>
                      </div>
                      {siteContentKo.howItWorks.futureBlock.chatMockResponse}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40">
                  <span>공용 크레딧 연동 예정</span>
                  <span className="flex items-center gap-1">
                    로드맵 진행 중 <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/50">
              {siteContentKo.howItWorks.futureBlock.disclaimer}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
