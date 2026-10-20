"use client";

import React, { useState } from "react";
import { FeatureGroup } from "@/content/features";
import { VideoRecord } from "@/content/media";
import { VideoPlayer } from "@/components/video/VideoPlayer";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { siteContentKo } from "@/content/site.ko";
import { Sparkles, FileText, BarChart3, ShieldAlert, Calendar } from "lucide-react";

const PLAN_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "plan-01": FileText,
  "plan-02": BarChart3,
  "plan-03": ShieldAlert,
};

const PLAN_LABELS: Record<string, string> = {
  "plan-01": "문서 불러오기·초안 작성",
  "plan-02": "이미지·그래프 생성 및 수정",
  "plan-03": "AI 사업계획서 판정단 (예정)",
};

interface ChapterBusinessPlanProps {
  group: FeatureGroup;
  mediaList: readonly VideoRecord[];
}

export function ChapterBusinessPlan({ group, mediaList }: ChapterBusinessPlanProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeMedia = mediaList[activeTab] || mediaList[0];
  const activeItem = group.items[activeTab] || group.items[0];

  return (
    <section
      id="business-plan"
      aria-label={group.name}
      className="py-16 md:py-24 bg-white text-[#171320] relative overflow-hidden border-b border-[#7657F6]/10"
    >
      <div className="brand-container max-w-5xl mx-auto">
        {/* Chapter Header: Asymmetric Left-Aligned on Desktop */}
        <div className="text-left space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F7FC] border border-[#7657F6]/20 text-xs font-semibold text-[#7657F6]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{group.name}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#171320] break-keep">
            흩어진 자료를,
            <span className="block text-[#5034C4]">구체적인 사업계획서로.</span>
          </h2>

          <p className="text-base text-[#625D70] leading-relaxed break-keep">
            기존 자료를 불러와 사업계획서 초안을 작성하고, 내용을 구체적으로 다듬어보세요.
          </p>
        </div>

        {/* Document-focused Tabs */}
        <div className="mt-8 md:mt-10 flex justify-start">
          <div
            role="tablist"
            aria-label="사업계획서 작성 세부 기능 선택"
            className="p-1.5 rounded-2xl bg-[#F8F7FC] border border-[#7657F6]/15 flex flex-wrap sm:flex-nowrap gap-1.5 w-full sm:w-auto"
          >
            {group.items.map((item, idx) => {
              const isSelected = activeTab === idx;
              const Icon = PLAN_ICONS[item.id] || FileText;
              const label = PLAN_LABELS[item.id] || item.title;

              return (
                <button
                  key={item.id}
                  id={`tab-plan-${idx}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`tabpanel-plan-${idx}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    isSelected
                      ? "bg-[#7657F6] text-white shadow-md shadow-[#7657F6]/20"
                      : "text-[#625D70] hover:text-[#171320] hover:bg-black/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Central Display Frame (Document Paper Feel) */}
        <div className="mt-6 md:mt-8">
          <div
            id={`tabpanel-plan-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-plan-${activeTab}`}
            className="p-3 sm:p-5 rounded-3xl bg-[#F8F7FC] border border-[#7657F6]/20 shadow-xl relative overflow-hidden"
          >
            {/* Top Bar with Clean Status */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/5 px-1">
              <span className="font-bold text-sm sm:text-base text-[#171320]">
                {activeItem.title}
              </span>
              <StatusBadge status={activeItem.status} customLabel={activeItem.statusLabel} size="sm" />
            </div>

            {/* If tab 2 (PLAN-03 AI Evaluation), display clean roadmap block (NO fake scores/approval charts) */}
            {activeTab === 2 ? (
              <div className="w-full aspect-video rounded-2xl bg-[#17102C] text-white p-6 md:p-8 flex flex-col justify-between border border-white/10 select-none">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-white/50">ROADMAP</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#7657F6]/30 text-[#D8CBFF] border border-[#7657F6]/50">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>업데이트 예정</span>
                  </span>
                </div>

                <div className="my-auto text-center max-w-md mx-auto space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-[#7657F6]/20 text-[#A78BFA] flex items-center justify-center">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {activeItem.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed break-keep">
                    {activeItem.description}
                  </p>
                </div>

                {/* Mandatory Disclaimer */}
                <div className="pt-4 border-t border-white/10 text-xs text-amber-300 text-center font-medium">
                  {siteContentKo.chapters.upcomingDisclaimer}
                </div>
              </div>
            ) : (
              // Tabs 0 and 1: Document player in native 16:9 screen recording aspect with Autoplay
              activeMedia && (
                <VideoPlayer
                  key={activeMedia.id}
                  record={activeMedia}
                  playLabel={siteContentKo.chapters.watchProcessLabel}
                  autoPlay={true}
                  loop={true}
                />
              )
            )}

            {/* Verification note if applicable */}
            {activeItem.verificationNote && activeTab === 1 && (
              <div className="mt-3 px-3.5 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 break-keep">
                ※ {activeItem.verificationNote}
              </div>
            )}

            {/* Single value line below player */}
            <div className="mt-3.5 px-2 text-xs sm:text-sm text-[#625D70]">
              <p className="break-keep">{activeItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
