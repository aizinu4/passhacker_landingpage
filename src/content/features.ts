/**
 * Passhacker Feature Data & Status Definitions
 * 
 * Strict separation between feature development status and media asset status.
 * Preserves original brief group IDs (1/2/3/4) for internal tracking.
 */

export type FeatureStatus = "available" | "comingSoon" | "needsVerification";

export interface FeatureItem {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly description: string;
  readonly status: FeatureStatus;
  readonly statusLabel: string;
  readonly verificationNote?: string;
}

export interface FeatureGroup {
  readonly id: string;
  readonly briefId: number; // 1, 2, 3, 4 from original brief
  readonly anchorId: string;
  readonly name: string;
  readonly headline: string;
  readonly briefTagline: string;
  readonly description: string;
  readonly isUpcoming?: boolean;
  readonly items: readonly FeatureItem[];
}

export const featureGroups: readonly FeatureGroup[] = [
  {
    id: "ai-website",
    briefId: 1,
    anchorId: "ai-website",
    name: "AI 홈페이지 제작",
    headline: "아이디어를 소개하고, 고객의 반응까지 확인하세요.",
    briefTagline: "3천 개의 홈페이지를 학습한 제작 툴",
    description: "홈페이지와 설문 폼을 직접 수정하고, 여러 페이지를 구성하세요. 히트맵과 방문자 분석으로 고객이 관심을 보인 지점을 확인할 수 있습니다.",
    items: [
      {
        id: "web-01",
        code: "WEB-01",
        title: "홈페이지 직접 편집 및 설문 제작 폼 편집",
        description: "코딩 없이 직관적으로 레이아웃과 텍스트를 수정하고 설문 양식을 배치합니다.",
        status: "available",
        statusLabel: "이용 가능",
      },
      {
        id: "web-02",
        code: "WEB-02",
        title: "다중 페이지 구성",
        description: "소개 페이지부터 상세 안내까지 필요한 구조를 손쉽게 확장합니다.",
        status: "available",
        statusLabel: "이용 가능",
      },
      {
        id: "web-03",
        code: "WEB-03",
        title: "히트맵 및 방문자 분석",
        description: "방문자의 반응을 분석하고, 홈페이지에서 개선할 지점을 찾아보세요.",
        status: "available",
        statusLabel: "이용 가능",
      },
      {
        id: "web-04",
        code: "WEB-04",
        title: "HTML 파일 업로드 및 편집",
        description: "기존에 작성된 HTML 파일을 업로드하여 디자인과 요소를 웹 에디터에서 직접 수정하고 게시합니다.",
        status: "available",
        statusLabel: "이용 가능",
      },
    ],
  },
  {
    id: "ad-creative",
    briefId: 2,
    anchorId: "ad-creative",
    name: "광고 소재 제작",
    headline: "전하고 싶은 메시지를, 영상과 이미지, 글로 만드세요.",
    briefTagline: "조회수 터지는 콘텐츠 제작",
    description: "숏츠 영상, 이미지, 블로그 콘텐츠를 준비하고 원하는 방향으로 다듬어보세요.",
    items: [
      {
        id: "ad-01",
        code: "AD-01",
        title: "숏츠 영상 제작",
        description: "아이디어를 숏츠 영상으로 만들고, 원하는 방향으로 다듬어보세요.",
        status: "available",
        statusLabel: "이용 가능",
      },
      {
        id: "ad-02",
        code: "AD-02",
        title: "이미지 제작",
        description: "SNS 피드 및 디스플레이 광고에 최적화된 시각 그래픽을 생성합니다.",
        status: "available",
        statusLabel: "이용 가능",
      },
      {
        id: "ad-03",
        code: "AD-03",
        title: "블로그 제작",
        description: "검색 유입을 고려한 정보성 블로그 원고 초안을 작성합니다.",
        status: "available",
        statusLabel: "이용 가능",
      },
    ],
  },
  {
    id: "marketing",
    briefId: 3,
    anchorId: "marketing",
    name: "마케팅·자동화",
    headline: "고객의 반응을 살피고, 반복되는 마케팅 업무를 줄이는 방향으로.",
    briefTagline: "마케팅 활동을 통한 시장 조사와 자동화",
    description: "메타·인스타그램 광고, 블로그 작성 자동화, 유튜브 운영 자동화를 준비하고 있습니다.",
    isUpcoming: true,
    items: [
      {
        id: "mkt-01",
        code: "MKT-01",
        title: "메타·인스타그램 광고",
        description: "메타·인스타그램 광고를 통해 고객 반응을 살펴볼 수 있도록 준비하고 있습니다.",
        status: "comingSoon",
        statusLabel: "업데이트 예정",
      },
      {
        id: "mkt-02",
        code: "MKT-02",
        title: "블로그 작성 자동화",
        description: "블로그 작성의 반복 작업을 줄이는 자동화 기능을 준비하고 있습니다.",
        status: "comingSoon",
        statusLabel: "업데이트 예정",
      },
      {
        id: "mkt-03",
        code: "MKT-03",
        title: "유튜브 운영 자동화",
        description: "유튜브 운영을 돕는 자동화 기능을 준비하고 있습니다.",
        status: "comingSoon",
        statusLabel: "업데이트 예정",
      },
    ],
  },
  {
    id: "business-plan",
    briefId: 4,
    anchorId: "business-plan",
    name: "사업계획서 작성",
    headline: "흩어진 자료를, 구체적인 사업계획서로.",
    briefTagline: "작성 시간 95% 단축",
    description: "기존 자료를 불러와 사업계획서 초안을 작성하고, 내용을 구체적으로 다듬어보세요.",
    items: [
      {
        id: "plan-01",
        code: "PLAN-01",
        title: "어떤 문서든 불러오기 및 문서 자동 작성",
        description: "기존 아이디어 메모나 문서를 바탕으로 체계적인 사업계획서 구조를 자동 생성합니다.",
        status: "available",
        statusLabel: "이용 가능",
      },
      {
        id: "plan-02",
        code: "PLAN-02",
        title: "이미지·그래프 생성 및 세밀한 수정",
        description: "계획서에 필요한 시각 자료와 그래프를 생성하고 세부 수치를 조정합니다.",
        status: "needsVerification",
        statusLabel: "확인 진행 중",
        verificationNote: "신규 UI 환경에서 동작 안정성 검증 진행 중",
      },
      {
        id: "plan-03",
        code: "PLAN-03",
        title: "AI 사업계획서 합격·탈락 판정단",
        description: "지원사업 심사 기준에 맞추어 보완점을 분석하는 도구를 준비하고 있습니다. (AI 평가 결과는 실제 지원사업 선정 결과를 보장하지 않습니다)",
        status: "comingSoon",
        statusLabel: "업데이트 예정",
        verificationNote: "AI 평가 결과는 실제 지원사업 선정 결과를 보장하지 않습니다",
      },
    ],
  },
] as const;
