/**
 * Passhacker Media Manifest
 * 
 * Strict tracking of 12 planned video assets.
 * 'src' MUST be null if the physical video file does not exist in public/videos/.
 * This prevents the browser from emitting 404 requests for unreleased assets.
 */

import { FeatureStatus } from "./features";

export type MediaStatus = "ready" | "missing" | "previewOnly";

export interface VideoRecord {
  readonly id: string; // e.g. WEB-01, AD-01, MKT-01, PLAN-01
  readonly groupId: string; // "ai-website" | "ad-creative" | "marketing" | "business-plan"
  readonly title: string;
  readonly tabLabel: string;
  readonly description: string;
  readonly plannedFilename: string;
  readonly src: string | null;
  readonly poster: string | null;
  readonly captions: string | null;
  readonly aspectRatio: "16/9" | "9/16" | "4/3";
  readonly featureStatus: FeatureStatus;
  readonly mediaStatus: MediaStatus;
  readonly fallbackBadge: "소개 영상 준비 중" | "업데이트 예정" | "기능 소개 예시";
}

export const mediaManifest: readonly VideoRecord[] = [
  // 1. AI 홈페이지 제작 (WEB)
  {
    id: "WEB-01",
    groupId: "ai-website",
    title: "홈페이지 직접 편집 및 설문 제작 폼 편집",
    tabLabel: "홈페이지·설문 편집",
    description: "블록 기반 에디터로 코딩 없이 즉시 텍스트와 레이아웃을 수정하고, 고객 설문 수집 폼을 추가합니다.",
    plannedFilename: "/videos/website-edit.mp4",
    src: "/videos/website-edit.mp4",
    poster: "/posters/website-edit.png",
    captions: null,
    aspectRatio: "16/9",
    featureStatus: "available",
    mediaStatus: "ready",
    fallbackBadge: "소개 영상 준비 중",
  },
  {
    id: "WEB-02",
    groupId: "ai-website",
    title: "다중 페이지 구성",
    tabLabel: "다중 페이지 구성",
    description: "단일 랜딩페이지를 넘어 소개, 상세 기능, 문의 등 필요한 다중 페이지 구조를 유연하게 생성합니다.",
    plannedFilename: "/videos/website-multipage.mp4",
    src: "/videos/website-multipage.mp4",
    poster: "/posters/website-multipage.png",
    captions: null,
    aspectRatio: "16/9",
    featureStatus: "available",
    mediaStatus: "ready",
    fallbackBadge: "소개 영상 준비 중",
  },
  {
    id: "WEB-03",
    groupId: "ai-website",
    title: "히트맵 및 방문자 분석",
    tabLabel: "히트맵·방문자 분석",
    description: "방문자의 반응을 분석하고, 홈페이지에서 개선할 지점을 찾아보세요.",
    plannedFilename: "/videos/website-heatmap.mp4",
    src: "/videos/website-heatmap.mp4",
    poster: "/posters/website-heatmap.jpg",
    captions: null,
    aspectRatio: "16/9",
    featureStatus: "available",
    mediaStatus: "ready",
    fallbackBadge: "소개 영상 준비 중",
  },
  {
    id: "WEB-04",
    groupId: "ai-website",
    title: "HTML 파일 업로드 및 편집",
    tabLabel: "HTML 파일 편집",
    description: "기존에 작성된 HTML 파일을 업로드하여 디자인과 요소를 웹 에디터에서 직접 수정하고 게시합니다.",
    plannedFilename: "/videos/website-html-import.mp4",
    src: "/videos/website-html-import.mp4",
    poster: "/posters/website-html-import.png",
    captions: null,
    aspectRatio: "16/9",
    featureStatus: "available",
    mediaStatus: "ready",
    fallbackBadge: "소개 영상 준비 중",
  },

  // 2. 광고 소재 제작 (AD)
  {
    id: "AD-01",
    groupId: "ad-creative",
    title: "숏츠 영상 제작",
    tabLabel: "숏츠 영상 제작",
    description: "아이디어를 숏츠 영상으로 만들고, 원하는 방향으로 다듬어보세요.",
    plannedFilename: "/videos/creative-shorts.mp4",
    src: "/videos/creative-shorts.mp4",
    poster: "/posters/creative-shorts.png",
    captions: null,
    aspectRatio: "16/9",
    featureStatus: "available",
    mediaStatus: "ready",
    fallbackBadge: "소개 영상 준비 중",
  },
  {
    id: "AD-02",
    groupId: "ad-creative",
    title: "이미지 제작",
    tabLabel: "이미지 제작",
    description: "인스타그램, 메타 광고 및 SNS 채널에 최적화된 마케팅 배너 이미지를 즉시 생성합니다.",
    plannedFilename: "/videos/creative-image.mp4",
    src: "/videos/creative-image.mp4",
    poster: "/posters/creative-image.jpg",
    captions: null,
    aspectRatio: "16/9",
    featureStatus: "available",
    mediaStatus: "ready",
    fallbackBadge: "소개 영상 준비 중",
  },
  {
    id: "AD-03",
    groupId: "ad-creative",
    title: "블로그 제작",
    tabLabel: "블로그 제작",
    description: "검색 포털 알고리즘에 맞춘 고품질 정보성 블로그 원고 초안을 작성하고 다듬습니다.",
    plannedFilename: "/videos/creative-blog.mp4",
    src: "/videos/creative-blog.mp4",
    poster: "/posters/creative-blog.jpg",
    captions: null,
    aspectRatio: "16/9",
    featureStatus: "available",
    mediaStatus: "ready",
    fallbackBadge: "소개 영상 준비 중",
  },

  // 3. 마케팅·자동화 (MKT)
  {
    id: "MKT-01",
    groupId: "marketing",
    title: "메타·인스타그램 광고",
    tabLabel: "메타·인스타 광고",
    description: "메타·인스타그램 광고를 통해 고객 반응을 살펴볼 수 있도록 준비하고 있습니다.",
    plannedFilename: "/videos/marketing-meta.mp4",
    src: null,
    poster: null,
    captions: null,
    aspectRatio: "16/9",
    featureStatus: "comingSoon",
    mediaStatus: "previewOnly",
    fallbackBadge: "업데이트 예정",
  },
  {
    id: "MKT-02",
    groupId: "marketing",
    title: "블로그 작성 자동화",
    tabLabel: "블로그 자동화",
    description: "블로그 작성의 반복 작업을 줄이는 자동화 기능을 준비하고 있습니다.",
    plannedFilename: "/videos/marketing-blog.mp4",
    src: null,
    poster: null,
    captions: null,
    aspectRatio: "16/9",
    featureStatus: "comingSoon",
    mediaStatus: "previewOnly",
    fallbackBadge: "업데이트 예정",
  },
  {
    id: "MKT-03",
    groupId: "marketing",
    title: "유튜브 운영 자동화",
    tabLabel: "유튜브 운영 자동화",
    description: "유튜브 운영을 돕는 자동화 기능을 준비하고 있습니다.",
    plannedFilename: "/videos/marketing-youtube.mp4",
    src: null,
    poster: null,
    captions: null,
    aspectRatio: "16/9",
    featureStatus: "comingSoon",
    mediaStatus: "previewOnly",
    fallbackBadge: "업데이트 예정",
  },

  // 4. 사업계획서 작성 (PLAN)
  {
    id: "PLAN-01",
    groupId: "business-plan",
    title: "어떤 문서든 불러오기 및 문서 자동 작성",
    tabLabel: "문서 불러오기·초안 작성",
    description: "기존의 기획서, 메모, 자료 파일의 텍스트를 불러와 정부지원사업 표준 규격에 맞춘 초안으로 자동 재구성합니다.",
    plannedFilename: "/videos/business-import.mp4",
    src: "/videos/business-import.mp4",
    poster: "/posters/business-import.png",
    captions: null,
    aspectRatio: "16/9",
    featureStatus: "available",
    mediaStatus: "ready",
    fallbackBadge: "소개 영상 준비 중",
  },
  {
    id: "PLAN-02",
    groupId: "business-plan",
    title: "이미지·그래프 생성 및 세밀한 수정",
    tabLabel: "이미지·그래프 생성 및 수정",
    description: "시장 분석, 재무 지표, 비즈니스 모델 도표를 생성하고 세부 텍스트와 수치를 편집할 수 있는 도구입니다.",
    plannedFilename: "/videos/business-visuals.mp4",
    src: null,
    poster: null,
    captions: null,
    aspectRatio: "16/9",
    featureStatus: "needsVerification",
    mediaStatus: "missing",
    fallbackBadge: "기능 소개 예시",
  },
  {
    id: "PLAN-03",
    groupId: "business-plan",
    title: "AI 사업계획서 합격·탈락 판정단",
    tabLabel: "AI 합격·탈락 판정단 (업데이트 예정)",
    description: "지원사업 심사 기준에 맞추어 보완점을 분석하는 도구를 준비하고 있습니다. (AI 평가 결과는 실제 지원사업 선정 결과를 보장하지 않습니다)",
    plannedFilename: "/videos/business-evaluation.mp4",
    src: null,
    poster: null,
    captions: null,
    aspectRatio: "16/9",
    featureStatus: "comingSoon",
    mediaStatus: "previewOnly",
    fallbackBadge: "업데이트 예정",
  },
] as const;

/**
 * Get media items for a specific group
 */
export function getMediaByGroup(groupId: string): readonly VideoRecord[] {
  return mediaManifest.filter((item) => item.groupId === groupId);
}
