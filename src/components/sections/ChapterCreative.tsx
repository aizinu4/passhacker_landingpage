"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { FeatureGroup } from "@/content/features";
import { VideoRecord } from "@/content/media";
import { VideoDialog } from "@/components/video/VideoDialog";
import { siteContentKo } from "@/content/site.ko";
import { Sparkles, ArrowRight, Play, Video, ImageIcon, FileText } from "lucide-react";

interface ChapterCreativeProps {
  group: FeatureGroup;
  mediaList: readonly VideoRecord[];
}

export function ChapterCreative({ group, mediaList }: ChapterCreativeProps) {
  const [selectedRecord, setSelectedRecord] = useState<VideoRecord | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const shortsMedia = mediaList.find((m) => m.id === "AD-01") || mediaList[0];
  const imageMedia = mediaList.find((m) => m.id === "AD-02") || mediaList[1];
  const blogMedia = mediaList.find((m) => m.id === "AD-03") || mediaList[2];

  const handleOpenVideo = (record: VideoRecord, e: React.MouseEvent<HTMLButtonElement>) => {
    lastTriggerRef.current = e.currentTarget;
    setSelectedRecord(record);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section
      id="ad-creative"
      aria-label={group.name}
      className="py-16 md:py-24 bg-[#F8F7FC] text-[#171320] relative overflow-hidden border-b border-[#7657F6]/10"
    >
      <div className="brand-container max-w-6xl mx-auto">
        {/* Chapter Header: Asymmetric Left-Aligned on Desktop */}
        <div className="text-left space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#7657F6]/20 text-xs font-semibold text-[#7657F6] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{group.name}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#171320] break-keep">
            전하고 싶은 메시지를,
            <span className="block text-[#5034C4]">영상과 이미지, 글로 만드세요.</span>
          </h2>

          <p className="text-base text-[#625D70] leading-relaxed break-keep">
            숏츠 영상, 이미지, 블로그 콘텐츠를 준비하고 원하는 방향으로 다듬어보세요.
          </p>
        </div>

        {/* Asymmetric Content Studio Gallery */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* 1. Prominent Left Showcase: 숏츠 영상 제작 (lg:col-span-6) */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-white border border-[#7657F6]/20 shadow-md flex flex-col justify-between group hover:border-[#7657F6]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7657F6]/10 text-xs font-bold text-[#7657F6]">
                  <Video className="w-3.5 h-3.5" />
                  <span>숏츠 영상 제작</span>
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                  동영상 시연 가능
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#171320] tracking-tight">
                아이디어를 숏츠 영상으로
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#625D70] leading-relaxed break-keep">
                아이디어를 숏츠 영상으로 만들고, 원하는 방향으로 다듬어보세요.
              </p>
            </div>

            {/* Vertical Video Output Preview Box with Autoplay */}
            <div className="my-6 relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#17102C] border border-black/10 flex items-center justify-center">
              {shortsMedia?.src ? (
                <video
                  src={shortsMedia.src}
                  poster={shortsMedia.poster || undefined}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              ) : (
                shortsMedia?.poster && (
                  <Image
                    src={shortsMedia.poster}
                    alt="숏츠 영상 제작 결과 예시"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                  />
                )
              )}
              {/* Subtle gradient overlay to make action pop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* 1-click CTA button in center of preview */}
              <button
                type="button"
                onClick={(e) => shortsMedia && handleOpenVideo(shortsMedia, e)}
                className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7657F6] text-white text-xs sm:text-sm font-semibold hover:bg-[#6242E6] active:scale-95 transition-all shadow-lg shadow-[#7657F6]/40 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>{siteContentKo.chapters.watchProcessCreative}</span>
              </button>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#625D70] border-t border-black/5">
              <span>9:16 모바일 최적화 포맷 지원</span>
              <span className="text-[#7657F6] font-semibold">16:9 제작 화면 보기</span>
            </div>
          </div>

          {/* 2. Complementary Right Side: 2 Output Cards (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            {/* Card A: 이미지 제작 */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#7657F6]/20 shadow-md flex-1 flex flex-col justify-between group hover:border-[#7657F6]/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7657F6]/10 text-xs font-bold text-[#7657F6]">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>이미지 제작</span>
                  </span>
                  <button
                    type="button"
                    onClick={(e) => imageMedia && handleOpenVideo(imageMedia, e)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#7657F6] text-white text-xs font-semibold hover:bg-[#6242E6] active:scale-95 transition-all shadow-xs cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{siteContentKo.chapters.watchProcessCreative}</span>
                  </button>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#171320] tracking-tight">
                  마케팅 배너 이미지 생성
                </h3>
                <p className="mt-1.5 text-xs text-[#625D70] leading-relaxed break-keep">
                  SNS 피드 및 디스플레이 광고에 최적화된 시각 그래픽을 생성합니다.
                </p>
              </div>

              <div className="mt-4 relative w-full aspect-[16/8] rounded-xl overflow-hidden bg-[#17102C] border border-black/10">
                {imageMedia?.src ? (
                  <video
                    src={imageMedia.src}
                    poster={imageMedia.poster || undefined}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                ) : (
                  imageMedia?.poster && (
                    <Image
                      src={imageMedia.poster}
                      alt="이미지 제작 결과 예시"
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  )
                )}
              </div>
            </div>

            {/* Card B: 블로그 제작 */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#7657F6]/20 shadow-md flex-1 flex flex-col justify-between group hover:border-[#7657F6]/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7657F6]/10 text-xs font-bold text-[#7657F6]">
                    <FileText className="w-3.5 h-3.5" />
                    <span>블로그 제작</span>
                  </span>
                  <button
                    type="button"
                    onClick={(e) => blogMedia && handleOpenVideo(blogMedia, e)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#7657F6] text-white text-xs font-semibold hover:bg-[#6242E6] active:scale-95 transition-all shadow-xs cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{siteContentKo.chapters.watchProcessCreative}</span>
                  </button>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#171320] tracking-tight">
                  정보성 블로그 원고 초안
                </h3>
                <p className="mt-1.5 text-xs text-[#625D70] leading-relaxed break-keep">
                  검색 유입을 고려한 정보성 블로그 원고 초안을 작성하고 다듬습니다.
                </p>
              </div>

              <div className="mt-4 relative w-full aspect-[16/8] rounded-xl overflow-hidden bg-[#17102C] border border-black/10">
                {blogMedia?.src ? (
                  <video
                    src={blogMedia.src}
                    poster={blogMedia.poster || undefined}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                ) : (
                  blogMedia?.poster && (
                    <Image
                      src={blogMedia.poster}
                      alt="블로그 제작 결과 예시"
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Storytelling Transition to Next Chapter */}
        <div className="mt-14 text-center sm:text-right">
          <a
            href="#marketing"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#7657F6] hover:text-[#5034C4] font-semibold transition-colors group"
          >
            <span>{siteContentKo.chapters.transitions.fromCreativeToMarketing}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Shared Accessible Video Dialog */}
      <VideoDialog
        isOpen={isDialogOpen}
        record={selectedRecord}
        onClose={handleCloseDialog}
        triggerRef={lastTriggerRef}
      />
    </section>
  );
}
