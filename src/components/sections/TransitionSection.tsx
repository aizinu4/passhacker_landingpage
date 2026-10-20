"use client";

import React from "react";
import { siteContentKo } from "@/content/site.ko";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Info, Globe, Video, BarChart2, FileText } from "lucide-react";

export function TransitionSection() {
  const shouldReduceMotion = useReducedMotion();

  const pillarIcons = [Globe, Video, BarChart2, FileText];

  return (
    <section
      id="why"
      aria-label="사업 준비 고민과 4대 영역 안내"
      className="py-12 md:py-20 bg-white border-b border-[#7657F6]/10 relative overflow-hidden"
    >
      <div id="platform" className="scroll-mt-24" />

      <div className="brand-container max-w-4xl mx-auto">
        {/* 1. Problem: 4 Rhythmic Questions in a Clean Grid without Giant Cards */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#171320] leading-tight tracking-tight break-keep">
            <span>{siteContentKo.problem.headingLine1}</span>{" "}
            <span className="text-[#5034C4] block sm:inline">
              {siteContentKo.problem.headingLine2}
            </span>
          </h2>

          {/* 4 Short Rhythmic Question Pills */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {siteContentKo.problem.questions.map((q, idx) => (
              <motion.div
                key={q.id}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : idx * 0.08,
                }}
                className="px-4 py-3 rounded-xl bg-[#F8F7FC] border border-[#7657F6]/15 flex items-center justify-between text-left hover:border-[#7657F6]/30 transition-colors"
              >
                <span className="text-sm font-bold text-[#171320] break-keep">
                  {q.text}
                </span>
                <span className="text-xs text-[#7657F6] font-mono shrink-0 ml-2">
                  0{idx + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Transition Divider */}
        <div className="my-8 md:my-12 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-[#7657F6]/20 to-transparent w-full max-w-md" />
          <div className="mx-4 p-2 rounded-full bg-[#F8F7FC] border border-[#7657F6]/20 text-[#7657F6] shrink-0">
            <ArrowDown className="w-4 h-4" />
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#7657F6]/20 to-transparent w-full max-w-md" />
        </div>

        {/* 3. Platform: One Compact 4-Area Overview Bar */}
        <div className="text-center space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-[#171320] tracking-tight break-keep">
            {siteContentKo.platform.heading}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {siteContentKo.platform.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index] || Globe;

              return (
                <a
                  key={pillar.id}
                  href={pillar.href}
                  className="group p-4 rounded-2xl bg-[#F8F7FC] hover:bg-white border border-[#7657F6]/15 hover:border-[#7657F6]/40 hover:shadow-md transition-all duration-200 flex flex-col items-center text-center justify-between"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#7657F6]/10 text-[#7657F6] group-hover:bg-[#7657F6] group-hover:text-white flex items-center justify-center transition-colors mb-2">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-[#171320] group-hover:text-[#7657F6] transition-colors break-keep">
                    {pillar.name}
                  </span>
                  {pillar.statusBadge ? (
                    <span className="mt-1 text-[10px] font-semibold text-[#7657F6] bg-[#7657F6]/10 px-2 py-0.5 rounded-full">
                      {pillar.statusBadge}
                    </span>
                  ) : (
                    <span className="mt-1 text-[10px] text-[#625D70]">
                      {pillar.tag}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Platform Evolution Note */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F8F7FC] border border-[#7657F6]/15 text-xs text-[#625D70]">
            <Info className="w-3.5 h-3.5 text-[#7657F6] shrink-0" aria-hidden="true" />
            <p className="break-keep">{siteContentKo.platform.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
