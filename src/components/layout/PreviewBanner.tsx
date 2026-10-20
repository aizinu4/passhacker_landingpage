import React from "react";
import { siteContentKo } from "@/content/site.ko";
import { Info } from "lucide-react";

export function PreviewBanner() {
  return (
    <aside
      aria-label="내부 검토 안내"
      className="bg-[#17102C] text-white/90 border-b border-white/10 px-4 py-2.5 text-xs select-none"
    >
      <div className="brand-container flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 font-semibold text-[#D8CBFF] bg-[#7657F6]/30 px-2 py-0.5 rounded-full border border-[#7657F6]/50">
            <Info className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{siteContentKo.reviewBanner.badge}</span>
          </span>
          <p className="text-white/80 hidden sm:inline">
            {siteContentKo.reviewBanner.message}
          </p>
          <p className="text-white/80 sm:hidden">
            내부 검토용 프로토타입 (수치 및 기능 상태 확인 필요)
          </p>
        </div>
        <a
          href="#faq"
          className="text-[#D8CBFF] hover:underline underline-offset-2 font-medium shrink-0"
        >
          검토 안내 사항 보기 →
        </a>
      </div>
    </aside>
  );
}
