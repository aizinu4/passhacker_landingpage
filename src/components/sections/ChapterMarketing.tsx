"use client";

import React from "react";
import { FeatureGroup } from "@/content/features";
import { siteContentKo } from "@/content/site.ko";
import { Sparkles, ArrowRight, Share2, FileCode, PlaySquare, Calendar } from "lucide-react";

const MARKETING_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "mkt-01": Share2,
  "mkt-02": FileCode,
  "mkt-03": PlaySquare,
};

interface ChapterMarketingProps {
  group: FeatureGroup;
}

export function ChapterMarketing({ group }: ChapterMarketingProps) {
  return (
    <section
      id="marketing"
      aria-label={group.name}
      className="py-16 md:py-24 dark-section-bg text-white relative overflow-hidden"
    >
      <div className="brand-container max-w-5xl mx-auto">
        {/* Chapter Header: Asymmetric Left-Aligned on Desktop */}
        <div className="text-left space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7657F6]/20 border border-[#7657F6]/30 text-xs font-semibold text-[#D8CBFF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{group.name}</span>
            <span className="ml-1 px-2 py-0.5 rounded-full bg-[#7657F6]/30 text-[10px] font-bold">
              업데이트 예정
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight break-keep">
            마케팅 활동을 통한
            <span className="block text-[#D8CBFF]">시장 조사와 자동화</span>
          </h2>

          <p className="text-base text-white/70 leading-relaxed break-keep">
            {group.description}
          </p>
        </div>

        {/* Clean Structured Roadmap: 3 Concise Rows/Cards (NO empty video player!) */}
        <div className="mt-10 md:mt-12 space-y-4 max-w-4xl">
          {group.items.map((item) => {
            const Icon = MARKETING_ICONS[item.id] || Share2;

            return (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-2xl bg-[#221840] border border-white/10 hover:border-[#7657F6]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#7657F6]/20 text-[#A78BFA] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-white/70 leading-relaxed break-keep">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2 self-start sm:self-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#7657F6]/20 text-[#D8CBFF] border border-[#7657F6]/40">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>업데이트 예정</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Storytelling Transition to Next Chapter */}
        <div className="mt-14 text-center sm:text-right">
          <a
            href="#business-plan"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#D8CBFF] hover:text-white transition-colors group"
          >
            <span>{siteContentKo.chapters.transitions.fromMarketingToBusinessPlan}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
