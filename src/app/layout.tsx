import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { siteContentKo } from "@/content/site.ko";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} | ${siteConfig.positioning}`,
  description: siteContentKo.hero.supporting,
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: `${siteConfig.brandName} - ${siteConfig.positioning}`,
    description: siteContentKo.hero.subheadline,
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} - ${siteConfig.positioning}`,
    description: siteContentKo.hero.subheadline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#F8F7FC] text-[#171320]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#7657F6] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          {siteContentKo.header.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
