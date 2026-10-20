"use client";

import React from "react";
import { siteContentKo } from "@/content/site.ko";
import { siteConfig } from "@/config/site";
import { Sparkles, ArrowRight, Globe, Video, BarChart2, FileText } from "lucide-react";

export function FinalCtaSection() {
  const iconMap = {
    "start-web": Globe,
    "start-ad": Video,
    "start-mkt": BarChart2,
    "start-plan": FileText,
  };

  return (
    <section
      id="start"
      aria-label="서비스 시작 및 업무 선택"
      className="py-16 md:py-24 hero-gradient-bg relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#EAE2FF]/70 via-[#DFF4FF]/60 to-[#FFE8EE]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="brand-container max-w-4xl mx-auto">
        {/* Unified Final CTA Card */}
        <div className="surface-light p-8 md:p-12 rounded-3xl border border-[#7657F6]/20 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7657F6]/10 border border-[#7657F6]/20 text-xs font-semibold text-[#7657F6]">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{siteContentKo.finalCta.eyebrow}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171320] leading-tight tracking-tight break-keep">
              {siteContentKo.finalCta.heading}
            </h2>

            <p className="text-sm sm:text-base text-[#625D70]">
              {siteContentKo.finalCta.subcopy}
            </p>
          </div>

          {/* Compact 4 Job Option Grid inside the card */}
          <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {siteContentKo.finalCta.categories.map((cat) => {
              const Icon = iconMap[cat.id as keyof typeof iconMap] || Globe;
              const isUpcoming = cat.isUpcoming;

              // Check if there is a confirmed service URL in siteConfig
              const serviceKeyMap: Record<string, keyof typeof siteConfig.services> = {
                "start-web": "websiteBuilder",
                "start-ad": "creativeStudio",
                "start-mkt": "marketingAutomation",
                "start-plan": "businessPlan",
              };
              const serviceKey = serviceKeyMap[cat.id];
              const serviceConfig = serviceKey ? siteConfig.services[serviceKey] : null;

              const hasConfirmedUrl = serviceConfig?.isConfirmed && serviceConfig.url;
              const actionText = isUpcoming
                ? "업데이트 예정"
                : hasConfirmedUrl
                ? "서비스 이용하기"
                : "기능 살펴보기";

              const actionHref = hasConfirmedUrl ? serviceConfig.url : cat.href;

              return (
                <div
                  key={cat.id}
                  className="p-4 rounded-2xl bg-[#F8F7FC] border border-[#7657F6]/15 flex items-center justify-between gap-3 hover:border-[#7657F6]/40 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#7657F6]/10 text-[#7657F6] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm text-[#171320] truncate">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-[#625D70] truncate">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    {isUpcoming ? (
                      <a
                        href={actionHref}
                        className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#7657F6]/10 text-[#7657F6] border border-[#7657F6]/20 hover:bg-[#7657F6]/20 transition-colors"
                      >
                        {actionText}
                      </a>
                    ) : (
                      <a
                        href={actionHref}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#7657F6] text-white hover:bg-[#6242E6] active:scale-98 transition-all shadow-xs"
                      >
                        <span>{actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
