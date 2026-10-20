import React from "react";
import { siteConfig } from "@/config/site";
import { siteContentKo } from "@/content/site.ko";

export function Footer() {
  return (
    <footer
      aria-label="사이트 하단 정보"
      className="bg-[#17102C] text-white border-t border-white/10 py-12 md:py-16"
    >
      <div className="brand-container space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-2">
            <span className="text-2xl font-black tracking-tight text-white">
              {siteConfig.brandName}
            </span>
            <p className="text-xs sm:text-sm text-white/60">
              {siteConfig.positioning}
            </p>
          </div>

          {/* Anchor Links */}
          <nav
            aria-label="하단 네비게이션"
            className="flex flex-wrap items-center gap-4 text-xs text-white/60"
          >
            {siteConfig.navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Legal & Notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/40">
          <p>{siteContentKo.footer.copyright}</p>
          <p className="max-w-md text-right sm:text-right break-keep">
            {siteContentKo.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
