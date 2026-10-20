/**
 * Passhacker Site Configuration
 * 
 * Centralized brand configuration, tokens, and verified service URLs.
 * If rebranding in the future, edit this file to update brand name, positioning, colors, and links.
 */

export interface ServiceUrlConfig {
  readonly url: string | null;
  readonly isConfirmed: boolean;
  readonly internalAnchor: string;
}

export interface SiteConfig {
  readonly brandName: string;
  readonly brandEnglishName: string;
  readonly positioning: string;
  readonly previewMode: boolean;
  readonly siteUrl: string;
  readonly services: {
    readonly radar: ServiceUrlConfig;
    readonly supporter: ServiceUrlConfig;
    readonly websiteBuilder: ServiceUrlConfig;
    readonly creativeStudio: ServiceUrlConfig;
    readonly marketingAutomation: ServiceUrlConfig;
    readonly businessPlan: ServiceUrlConfig;
  };
  readonly references: {
    readonly demoSource: string;
  };
  readonly colors: {
    readonly lightBg: string;
    readonly surface: string;
    readonly textPrimary: string;
    readonly textSecondary: string;
    readonly primary: string;
    readonly primaryHover: string;
    readonly darkBg: string;
    readonly darkSurface: string;
    readonly darkBorder: string;
    readonly gradientAccents: readonly string[];
  };
  readonly navigation: readonly {
    readonly id: string;
    readonly label: string;
    readonly href: string;
    readonly isUpcoming?: boolean;
  }[];
}

export const siteConfig: SiteConfig = {
  brandName: "패스해커",
  brandEnglishName: "Passhacker",
  positioning: "초기 사업자를 위한 종합 지원 툴",
  previewMode: true,
  siteUrl: "https://passhacker.com",
  services: {
    radar: {
      url: null,
      isConfirmed: false,
      internalAnchor: "#marketing",
    },
    supporter: {
      url: null,
      isConfirmed: false,
      internalAnchor: "#business-plan",
    },
    websiteBuilder: {
      url: null,
      isConfirmed: false,
      internalAnchor: "#ai-website",
    },
    creativeStudio: {
      url: null,
      isConfirmed: false,
      internalAnchor: "#ad-creative",
    },
    marketingAutomation: {
      url: null,
      isConfirmed: false,
      internalAnchor: "#marketing",
    },
    businessPlan: {
      url: null,
      isConfirmed: false,
      internalAnchor: "#business-plan",
    },
  },
  references: {
    demoSource: "https://passhacker.com/multiai/c",
  },
  colors: {
    lightBg: "#F8F7FC",
    surface: "#FFFFFF",
    textPrimary: "#171320",
    textSecondary: "#625D70",
    primary: "#7657F6",
    primaryHover: "#6242E6",
    darkBg: "#17102C",
    darkSurface: "#221840",
    darkBorder: "rgba(255, 255, 255, 0.12)",
    gradientAccents: ["#EAE2FF", "#DFF4FF", "#FFE8EE"],
  },
  navigation: [
    { id: "nav-ai-website", label: "AI 홈페이지", href: "#ai-website" },
    { id: "nav-ad-creative", label: "광고 소재", href: "#ad-creative" },
    { id: "nav-marketing", label: "마케팅·자동화", href: "#marketing", isUpcoming: true },
    { id: "nav-business-plan", label: "사업계획서", href: "#business-plan" },
    { id: "nav-faq", label: "자주 묻는 질문", href: "#faq" },
  ],
} as const;
