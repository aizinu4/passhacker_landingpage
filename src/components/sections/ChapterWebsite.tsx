"use client";

import React, { useState } from "react";
import { FeatureGroup } from "@/content/features";
import { VideoRecord } from "@/content/media";
import { VideoPlayer } from "@/components/video/VideoPlayer";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { siteContentKo } from "@/content/site.ko";
import { Sparkles, ArrowRight, MousePointerClick, Edit3, Layers, FileCode } from "lucide-react";

const TAB_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "web-01": Edit3,
  "web-02": Layers,
  "web-03": MousePointerClick,
  "web-04": FileCode,
};

const SHORT_TITLES: Record<string, string> = {
  "web-01": "직접 편집·설문 폼",
  "web-02": "다중 페이지",
  "web-03": "히트맵·방문자 분석",
  "web-04": "HTML 업로드·편집",
};

interface ChapterWebsiteProps {
  group: FeatureGroup;
  mediaList: readonly VideoRecord[];
}

export function ChapterWebsite({ group, mediaList }: ChapterWebsiteProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeMedia = mediaList[activeTab] || mediaList[0];
  const activeItem = group.items[activeTab] || group.items[0];

  return (
    <section
      id="ai-website"
      aria-label={group.name}
      className="py-16 md:py-24 dark-section-bg text-white relative overflow-hidden"
    >
      <div className="brand-container max-w-5xl mx-auto">
        {/* Chapter Header: Asymmetric Left-Aligned on Desktop */}
        <div className="text-left space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7657F6]/20 border border-[#7657F6]/30 text-xs font-semibold text-[#D8CBFF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{group.name}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight break-keep">
            아이디어를 소개하고,
            <span className="block text-[#D8CBFF]">고객의 반응까지 확인하세요.</span>
          </h2>

          <p className="text-base text-white/70 leading-relaxed break-keep">
            홈페이지와 설문을 직접 다듬고, 방문자가 관심을 보인 지점을 확인하세요.
          </p>
        </div>

        {/* 4 Tab Selector */}
        <div className="mt-8 md:mt-10 flex justify-start">
          <div
            role="tablist"
            aria-label="AI 홈페이지 제작 세부 기능 선택"
            className="p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-wrap sm:flex-nowrap gap-1.5 w-full sm:w-auto"
          >
            {group.items.map((item, idx) => {
              const isSelected = activeTab === idx;
              const mediaItem = mediaList[idx];
              const Icon = TAB_ICONS[item.id] || Edit3;
              const tabTitle = SHORT_TITLES[item.id] || (mediaItem ? mediaItem.tabLabel : item.title);

              return (
                <button
                  key={item.id}
                  id={`tab-web-${idx}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`tabpanel-web-${idx}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    isSelected
                      ? "bg-[#7657F6] text-white shadow-md shadow-[#7657F6]/30"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tabTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Large Central Stage (Sân khấu lớn) on Dark Purple */}
        <div className="mt-6 md:mt-8">
          <div
            id={`tabpanel-web-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-web-${activeTab}`}
            className="surface-dark p-3 sm:p-5 rounded-3xl relative overflow-hidden border border-white/10 shadow-2xl"
          >
            {/* Top Bar with Clean Full Title and Status */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 px-1">
              <span className="font-bold text-sm sm:text-base text-white">
                {activeItem.title}
              </span>
              <StatusBadge status={activeItem.status} customLabel={activeItem.statusLabel} size="sm" />
            </div>

            {/* Video Player on the Main Stage with Autoplay */}
            {activeMedia && (
              <VideoPlayer
                key={activeMedia.id}
                record={activeMedia}
                playLabel={siteContentKo.chapters.watchProcessLabel}
                autoPlay={true}
                loop={true}
              />
            )}

            {/* Single value line below player */}
            <div className="mt-3.5 px-2 text-xs sm:text-sm text-white/60 flex items-center justify-between">
              <p className="break-keep">{activeItem.description}</p>
            </div>
          </div>
        </div>

        {/* Storytelling Transition to Next Chapter */}
        <div className="mt-12 text-center sm:text-right">
          <a
            href="#ad-creative"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#D8CBFF] hover:text-white transition-colors group"
          >
            <span>{siteContentKo.chapters.transitions.fromWebsiteToCreative}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
