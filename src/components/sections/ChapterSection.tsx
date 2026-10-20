"use client";

import React, { useState } from "react";
import { FeatureGroup } from "@/content/features";
import { VideoRecord } from "@/content/media";
import { VideoPlayer } from "@/components/video/VideoPlayer";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Sparkles,
  ExternalLink,
  Info,
  Calendar,
  Layers,
  FileCheck2,
} from "lucide-react";

interface ChapterSectionProps {
  group: FeatureGroup;
  mediaList: readonly VideoRecord[];
  isDarkTheme?: boolean;
}

export function ChapterSection({
  group,
  mediaList,
  isDarkTheme = true,
}: ChapterSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // Pick first item that has real media, or fallback to first item
  const initialIndex = Math.max(
    0,
    mediaList.findIndex((item) => item.src !== null)
  );
  const [activeTabIndex, setActiveTabIndex] = useState<number>(
    initialIndex !== -1 ? initialIndex : 0
  );

  const activeMedia = mediaList[activeTabIndex] || mediaList[0];
  const activeFeatureItem = group.items[activeTabIndex] || group.items[0];

  const isMarketingChapter = group.id === "marketing";

  return (
    <section
      id={group.anchorId}
      aria-label={group.name}
      className={`section-spacing relative overflow-hidden ${
        isDarkTheme ? "dark-section-bg text-white" : "bg-white text-[#171320]"
      }`}
    >
      <div className="brand-container">
        {/* Chapter Header */}
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-xs font-mono font-semibold tracking-wider px-3 py-1 rounded-full bg-[#7657F6]/20 text-[#D8CBFF] border border-[#7657F6]/30">
              {group.name}
            </span>
            {group.isUpcoming && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#7657F6]/30 text-[#D8CBFF] border border-[#7657F6]/50">
                업데이트 예정
              </span>
            )}
            <span className="text-xs font-medium text-white/50">
              {group.briefTagline}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight break-keep">
            {group.headline}
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed break-keep">
            {group.description}
          </p>
        </div>

        {/* Chapter Interactive Area with Tabs and Player / Roadmap */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tab Navigation Column */}
          <div className="lg:col-span-5 space-y-3">
            <div
              role="tablist"
              aria-label={`${group.name} 세부 기능 목록`}
              className="flex flex-col gap-2.5"
            >
              {group.items.map((item, index) => {
                const isSelected = activeTabIndex === index;
                const mediaItem = mediaList[index];

                return (
                  <button
                    key={item.id}
                    id={`tab-${group.id}-${index}`}
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls={`tabpanel-${group.id}-${index}`}
                    tabIndex={isSelected ? 0 : -1}
                    onClick={() => setActiveTabIndex(index)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setActiveTabIndex((prev) => (prev + 1) % group.items.length);
                      } else if (e.key === "ArrowUp") {
                        e.preventDefault();
                        setActiveTabIndex(
                          (prev) => (prev - 1 + group.items.length) % group.items.length
                        );
                      }
                    }}
                    className={`text-left p-4 md:p-5 rounded-2xl transition-all duration-200 border cursor-pointer ${
                      isSelected
                        ? "bg-[#221840] border-[#7657F6] text-white shadow-lg shadow-[#7657F6]/10"
                        : "bg-white/5 hover:bg-white/10 border-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono text-white/40">
                        {item.code}
                      </span>
                      <StatusBadge status={item.status} customLabel={item.statusLabel} size="sm" />
                    </div>

                    <h3 className="text-base font-bold text-white tracking-tight break-keep">
                      {mediaItem ? mediaItem.tabLabel : item.title}
                    </h3>

                    <p className="mt-1.5 text-xs text-white/60 leading-relaxed line-clamp-2 break-keep">
                      {item.description}
                    </p>

                    {item.verificationNote && (
                      <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-amber-300/90 bg-amber-500/10 px-2 py-1 rounded-md border border-amber-500/20">
                        <Info className="w-3.5 h-3.5 shrink-0" />
                        <span>{item.verificationNote}</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Special Chapter Footnotes */}
            {group.id === "ad-creative" && (
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60 flex items-start gap-2">
                <ExternalLink className="w-4 h-4 text-[#7657F6] shrink-0 mt-0.5" />
                <p className="break-keep">
                  기능 참조 데모 출처: passhacker.com/multiai/c (본 링크는 기능 확인용 참조 출처입니다.)
                </p>
              </div>
            )}

            {group.id === "ai-website" && (
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#7657F6] shrink-0 mt-0.5" />
                <p className="break-keep">
                  히트맵 분석 기능은 실제 사용자의 클릭 및 스크롤 분포를 실시간으로 집계하여 표시합니다.
                </p>
              </div>
            )}

            {group.id === "business-plan" && (
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60 flex items-start gap-2">
                <FileCheck2 className="w-4 h-4 text-[#7657F6] shrink-0 mt-0.5" />
                <p className="break-keep">
                  AI 판정단의 모의 심사는 내부 기준에 따른 자가 점검용이며 실제 정부/민간 기관의 선정을 보증하지 않습니다.
                </p>
              </div>
            )}
          </div>

          {/* Player / Visual Display Column */}
          <div className="lg:col-span-7">
            <div
              id={`tabpanel-${group.id}-${activeTabIndex}`}
              role="tabpanel"
              aria-labelledby={`tab-${group.id}-${activeTabIndex}`}
              className="surface-dark p-3 md:p-4 lg:p-6 relative min-h-[340px] flex flex-col justify-between"
            >
              {/* Media Title & Description outside player for accessibility */}
              <div className="mb-4 px-2 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-[#D8CBFF]">
                    {activeMedia?.id || activeFeatureItem.code}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {activeMedia?.title || activeFeatureItem.title}
                  </h4>
                </div>
                <StatusBadge
                  status={activeFeatureItem.status}
                  customLabel={activeFeatureItem.statusLabel}
                />
              </div>

              {/* Animate Tab Content with Crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${group.id}-${activeTabIndex}`}
                  initial={shouldReduceMotion ? undefined : { opacity: 0 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="w-full"
                >
                  {isMarketingChapter ? (
                    // Marketing Chapter: Roadmap visualization without fake player
                    <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-[#221840] via-[#1E1538] to-[#17102C] border border-[#7657F6]/30 flex flex-col justify-between p-6 md:p-8">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-white/40">
                          ROADMAP PREVIEW
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#7657F6]/20 text-[#D8CBFF] border border-[#7657F6]/40">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>업데이트 예정</span>
                        </span>
                      </div>

                      <div className="my-auto text-center max-w-md mx-auto space-y-3">
                        <div className="w-12 h-12 mx-auto rounded-2xl bg-[#7657F6]/10 border border-[#7657F6]/20 flex items-center justify-center text-[#A78BFA]">
                          <Layers className="w-6 h-6" />
                        </div>
                        <h5 className="text-lg font-bold text-white">
                          {activeFeatureItem.title}
                        </h5>
                        <p className="text-sm text-white/70 break-keep leading-relaxed">
                          {activeFeatureItem.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
                        <span>반복 업무 자동화 파이프라인 준비 중</span>
                        <span>예정 데모: {activeMedia?.plannedFilename}</span>
                      </div>
                    </div>
                  ) : (
                    // Other Chapters: Video player with fallback support
                    activeMedia && <VideoPlayer key={activeMedia.id} record={activeMedia} />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Informative text below player */}
              <div className="mt-4 px-2 text-xs text-white/60 leading-relaxed">
                <p className="break-keep">
                  {activeMedia?.description || activeFeatureItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
