import React from "react";
import Image from "next/image";
import { VideoRecord } from "@/content/media";
import { Sparkles, VideoOff, Clock, FileSearch } from "lucide-react";

interface VideoFallbackProps {
  record: VideoRecord;
}

export function VideoFallback({ record }: VideoFallbackProps) {
  const getBadgeStyle = (badge: VideoRecord["fallbackBadge"]) => {
    switch (badge) {
      case "업데이트 예정":
        return {
          icon: Clock,
          color: "bg-[#7657F6]/20 text-[#D8CBFF] border-[#7657F6]/40",
        };
      case "기능 소개 예시":
        return {
          icon: FileSearch,
          color: "bg-amber-500/15 text-amber-300 border-amber-500/30",
        };
      case "소개 영상 준비 중":
      default:
        return {
          icon: VideoOff,
          color: "bg-black/60 text-white/90 border-white/20 backdrop-blur-md",
        };
    }
  };

  const badgeConfig = getBadgeStyle(record.fallbackBadge);
  const BadgeIcon = badgeConfig.icon;

  // If a real poster image is available, render the poster preview with a clean badge
  if (record.poster) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl select-none group">
        <Image
          src={record.poster}
          alt={`${record.title} 화면 미리보기`}
          fill
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-contain bg-[#17102C]"
          priority={record.groupId === "ai-website"}
        />

        {/* Top Floating Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border shadow-md ${badgeConfig.color}`}
          >
            <BadgeIcon className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{record.fallbackBadge}</span>
          </span>
        </div>

        {/* Bottom subtle title bar */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-5 flex items-end justify-between">
          <div>
            <h4 className="text-sm md:text-base font-semibold text-white drop-shadow-sm">
              {record.title}
            </h4>
            <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
              {record.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Fallback when no poster is available
  return (
    <div className="relative w-full aspect-video rounded-2xl bg-gradient-to-br from-[#221840] via-[#1E1538] to-[#17102C] border border-white/10 flex flex-col justify-between p-6 md:p-8 overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#7657F6]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top bar with clean badge */}
      <div className="relative z-10 flex items-center justify-end">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${badgeConfig.color}`}
        >
          <BadgeIcon className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{record.fallbackBadge}</span>
        </span>
      </div>

      {/* Center content */}
      <div className="relative z-10 my-auto text-center max-w-md mx-auto space-y-3">
        <div className="w-12 h-12 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A78BFA] shadow-inner">
          <Sparkles className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-base md:text-lg font-semibold text-white tracking-tight">
            {record.title}
          </h4>
          <p className="mt-2 text-xs md:text-sm text-white/60 leading-relaxed break-keep">
            {record.description}
          </p>
        </div>
      </div>

      {/* Bottom info: purely customer-facing */}
      <div className="relative z-10 flex items-center justify-between text-xs text-white/50 pt-4 border-t border-white/5">
        <span>기능 시연 영상 준비 중</span>
        <span>패스해커 제품 화면</span>
      </div>
    </div>
  );
}
