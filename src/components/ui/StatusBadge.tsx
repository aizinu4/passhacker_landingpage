import React from "react";
import { FeatureStatus } from "@/content/features";

interface StatusBadgeProps {
  status: FeatureStatus;
  customLabel?: string;
  size?: "sm" | "md";
}

export function StatusBadge({
  status,
  customLabel,
  size = "md",
}: StatusBadgeProps) {
  const configs = {
    available: {
      label: customLabel || "이용 가능",
      bgClass: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      dotClass: "bg-emerald-400",
    },
    comingSoon: {
      label: customLabel || "업데이트 예정",
      bgClass: "bg-[#7657F6]/20 text-[#D8CBFF] border-[#7657F6]/40",
      dotClass: "bg-[#A78BFA]",
    },
    needsVerification: {
      label: customLabel || "확인 진행 중",
      bgClass: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      dotClass: "bg-amber-400",
    },
  };

  const current = configs[status];
  const sizeClasses =
    size === "sm" ? "px-2 py-0.5 text-xs gap-1.5" : "px-3 py-1 text-xs md:text-sm gap-2";

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${current.bgClass} ${sizeClasses}`}
      role="status"
    >
      <span className={`w-1.5 h-1.5 rounded-full ${current.dotClass}`} aria-hidden="true" />
      <span>{current.label}</span>
    </span>
  );
}
