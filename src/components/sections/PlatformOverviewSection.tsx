"use client";

import React from "react";
import { siteContentKo } from "@/content/site.ko";
import { motion, useReducedMotion } from "motion/react";
import { Globe, Video, BarChart2, FileText, ArrowRight, Info } from "lucide-react";

export function PlatformOverviewSection() {
  const shouldReduceMotion = useReducedMotion();

  const iconMap = {
    "ai-website": Globe,
    "ad-creative": Video,
    "marketing": BarChart2,
    "business-plan": FileText,
  };

  return (
    <section
      id="platform"
      aria-label="플랫폼 개요 및 구성"
      className="section-spacing bg-white relative overflow-hidden border-b border-[#7657F6]/10"
    >
      <div className="brand-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#7657F6] bg-[#7657F6]/10 px-3 py-1 rounded-full">
            {siteContentKo.platform.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#171320] leading-tight tracking-tight break-keep">
            {siteContentKo.platform.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#625D70]">
            {siteContentKo.platform.subheading}
          </p>
        </div>

        {/* Platform Diagram: Center Passhacker Hub with 4 Interconnected Pillars */}
        <div className="mt-14 max-w-5xl mx-auto relative">
          {/* Central Hub Brand Badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-col items-center p-6 rounded-3xl bg-[#17102C] text-white shadow-xl shadow-[#17102C]/20 border border-white/10 relative z-10">
              <span className="text-xs font-mono text-[#D8CBFF] uppercase tracking-wider mb-1">
                Unified Ecosystem
              </span>
              <span className="text-2xl font-black tracking-tight text-white">
                {siteContentKo.platform.centerBadge}
              </span>
              <span className="text-xs text-white/70 mt-1 font-medium">
                {siteContentKo.platform.centerSub}
              </span>
            </div>
          </div>

          {/* 4 Pillars Grid connected to center */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
            {siteContentKo.platform.pillars.map((pillar, index) => {
              const Icon = iconMap[pillar.id as keyof typeof iconMap] || Globe;

              return (
                <motion.a
                  key={pillar.id}
                  href={pillar.href}
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{
                    duration: 0.5,
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                  }}
                  className="group p-6 rounded-2xl bg-[#F8F7FC] hover:bg-white border border-[#7657F6]/10 hover:border-[#7657F6]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#7657F6]/10 text-[#7657F6] flex items-center justify-center group-hover:bg-[#7657F6] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-medium text-[#625D70]">
                        {pillar.tag}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="font-bold text-[#171320] text-base group-hover:text-[#7657F6] transition-colors">
                          {pillar.name}
                        </h3>
                      </div>
                      {pillar.statusBadge && (
                        <span className="inline-block text-[11px] font-semibold text-[#7657F6] bg-[#7657F6]/10 px-2 py-0.5 rounded-full mt-1">
                          {pillar.statusBadge}
                        </span>
                      )}
                      <p className="text-xs text-[#625D70] leading-relaxed pt-2 break-keep">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#7657F6]">
                    <span>해당 섹션으로 이동</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Note clearly displayed */}
          <div className="mt-10 max-w-2xl mx-auto p-4 rounded-xl bg-[#F8F7FC] border border-[#7657F6]/15 flex items-center gap-3 text-xs sm:text-sm text-[#625D70]">
            <Info className="w-4 h-4 text-[#7657F6] shrink-0" aria-hidden="true" />
            <p className="break-keep">{siteContentKo.platform.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
