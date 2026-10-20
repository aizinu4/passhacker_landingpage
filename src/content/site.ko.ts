/**
 * Passhacker Korean Copy & Content
 * 
 * Centralized user-facing Korean text.
 * Strictly adheres to project brief headlines, subheadlines, and taglines.
 * Do not hardcode Korean text across random components.
 */

export const siteContentKo = {
  // Review banner
  reviewBanner: {
    badge: "검토용 미리보기",
    message: "본 페이지는 내부 검토 및 프로토타입 확인용입니다. 일부 수치(3천 개, 95% 등) 및 기능 상태는 릴리즈 전 확인 대상입니다.",
    checklistAnchor: "#faq",
  },

  // Header
  header: {
    wordmark: "패스해커",
    skipToContent: "본문 바로가기",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    ctaLabel: "시작하기",
    ctaHref: "#start",
  },

  // Hero section (#top)
  hero: {
    eyebrow: "초기 사업자를 위한 종합 지원 툴",
    designConcept: "아이디어를, 눈에 보이는 준비로.",
    // H1 MUST KEEP EXACT BRIEF TEXT, formatted across 3 lines
    h1Line1: "준비가 부족하면",
    h1Line2: "대부분의 사업은",
    h1Line3: "실패합니다.",
    // Subheadline MUST KEEP EXACT BRIEF TEXT
    subheadline: "시장 조사·사업계획서 작성·마케팅 전문 서비스 제공",
    // Supporting copy
    supporting: "홈페이지 제작부터 콘텐츠 준비와 사업계획서 작성까지, 필요한 업무를 패스해커에서 만나보세요.",
    primaryCta: "패스해커 시작하기",
    primaryCtaHref: "#start",
    secondaryCta: "기능 영상 보기",
    secondaryCtaHref: "#ai-website",
    visualBadge: "실제 작업 결과물 예시",
    assetLabels: {
      website: "AI 홈페이지 제작 결과",
      shorts: "숏츠 영상 콘텐츠",
      businessPlan: "사업계획서 초안",
    },
    overviewCards: [
      { id: "ov-web", title: "AI 홈페이지 제작", desc: "아이디어 소개 및 검증", href: "#ai-website" },
      { id: "ov-ad", title: "광고 소재 제작", desc: "숏폼·이미지·블로그", href: "#ad-creative" },
      { id: "ov-mkt", title: "마케팅·자동화", desc: "시장 조사 및 자동화 (업데이트 예정)", href: "#marketing", isUpcoming: true },
      { id: "ov-plan", title: "사업계획서 작성", desc: "초안 작성 및 구체화", href: "#business-plan" },
    ],
  },

  // Problem section (#why)
  problem: {
    headingLine1: "준비해야 할 일은 많지만,",
    headingLine2: "혼자 감당할 필요는 없습니다.",
    questions: [
      { id: "q1", text: "아이디어를 어떻게 소개할까요?", context: "홈페이지 제작과 첫인상" },
      { id: "q2", text: "홍보 콘텐츠는 어떻게 만들까요?", context: "숏츠, 배너, 블로그 원고" },
      { id: "q3", text: "고객의 반응은 어떻게 확인할까요?", context: "히트맵, 광고 반응 측정" },
      { id: "q4", text: "사업계획서는 어디서부터 써야 할까요?", context: "정부지원사업 규격 작성" },
    ],
    closing: "흩어진 준비 과정을, 하나의 브랜드 아래에서.",
  },

  // Platform overview section (#platform)
  platform: {
    eyebrow: "업무 영역 안내",
    heading: "사업 준비에 필요한 네 가지 업무, 패스해커에서 만나보세요.",
    subheading: "각 업무 영역을 클릭하여 세부 결과와 시연 영상을 살펴보세요.",
    centerBadge: "패스해커",
    centerSub: "통합 지원 플랫폼",
    note: "현재 일부 서비스는 별도로 이용하며, 통합 플랫폼으로 발전할 예정입니다.",
    pillars: [
      {
        id: "ai-website",
        name: "AI 홈페이지 제작",
        tag: "아이디어 소개·검증",
        desc: "직접 편집, 다중 페이지, 히트맵",
        href: "#ai-website",
        statusBadge: null,
      },
      {
        id: "ad-creative",
        name: "광고 소재 제작",
        tag: "콘텐츠 스튜디오",
        desc: "숏츠 영상, 이미지, 블로그",
        href: "#ad-creative",
        statusBadge: null,
      },
      {
        id: "marketing",
        name: "마케팅·자동화",
        tag: "반복 업무 감소",
        desc: "메타 광고, 블로그/유튜브 자동화",
        href: "#marketing",
        statusBadge: "업데이트 예정",
        isUpcoming: true,
      },
      {
        id: "business-plan",
        name: "사업계획서 작성",
        tag: "계획서 구체화",
        desc: "문서 불러오기, 그래프, 판정단",
        href: "#business-plan",
        statusBadge: null,
      },
    ],
  },

  // Chapters common labels and transitions
  chapters: {
    videoTabSectionLabel: "기능별 데모 영상",
    unverifiedNotice: "신규 UI 환경에서 동작 안정성 검증 진행 중인 기능입니다.",
    upcomingDisclaimer: "AI 평가 결과는 실제 지원사업 선정 결과를 보장하지 않습니다.",
    watchProcessLabel: "사용 과정 보기",
    watchProcessCreative: "제작 과정 보기",
    playButtonAria: "영상 재생하기",
    pauseButtonAria: "영상 일시정지",
    fallbackNotice: "소개 영상 준비 중",
    transitions: {
      fromWebsiteToCreative: "소개할 페이지가 준비됐다면, 이제 고객에게 전할 콘텐츠를 만들어보세요.",
      fromCreativeToMarketing: "만든 콘텐츠를 고객에게 전하고, 반응을 살피는 기능도 준비하고 있습니다.",
      fromMarketingToBusinessPlan: "고객을 이해하려는 준비를, 구체적인 사업계획으로 이어가세요.",
    },
  },

  // How it works section (#how-it-works)
  howItWorks: {
    eyebrow: "이용 방식 안내",
    heading: "지금 필요한 기능부터, 앞으로는 더 연결된 방식으로.",
    subheading: "현재의 개별 접근 방식부터 향후 예정된 통합 워크스페이스까지 투명하게 안내합니다.",
    currentBlock: {
      badge: "현재 단계",
      title: "현재 이용 방식",
      description: "필요한 기능을 선택한 뒤, 해당 서비스를 이용합니다. 일부 서비스는 별도로 접속합니다.",
      steps: [
        { step: "01", title: "필요 업무 선택", desc: "홈페이지, 콘텐츠, 사업계획서 등 당장 필요한 영역을 고릅니다." },
        { step: "02", title: "해당 도구 접근", desc: "각 목적에 최적화된 독립 도구에서 작업을 진행합니다." },
        { step: "03", title: "결과 확인·활용", desc: "작업 결과를 확인하고, 서비스에서 제공하는 방식으로 활용하세요." },
      ],
    },
    futureBlock: {
      badge: "로드맵",
      title: "통합 이용 방식 준비 중",
      description: "채팅 또는 UI 선택으로 작업을 시작하고, 네 가지 업무 영역에서 크레딧을 사용하는 방식을 준비하고 있습니다.",
      chatMockLabel: "향후 제공 예정",
      chatMockSubtitle: "통합 이용 방식 예시 (출시 준비 중)",
      chatMockPrompt: "새로운 패션 커머스 아이템을 시작하려고 해. 사업계획서 초안과 테스트용 랜딩페이지를 구성해줘.",
      chatMockResponse: "네, 입력하신 아이템을 바탕으로 1) 시장 분석 그래프가 포함된 사업계획서 초안, 2) 설문 폼이 연동된 테스트 랜딩페이지 템플릿을 준비하겠습니다.",
      disclaimer: "※ 통합 채팅 인터페이스 및 공용 크레딧 시스템은 향후 업데이트 예정이며, 현재 동작하지 않는 시각적 예시입니다.",
    },
  },

  // FAQ section (#faq)
  faq: {
    eyebrow: "자주 묻는 질문",
    heading: "패스해커에 대해 궁금한 점을 확인하세요",
    items: [
      {
        question: "패스해커는 누구를 위한 서비스인가요?",
        answer: "사업을 준비하거나 시작한 초기 사업자를 위한 서비스입니다. 홈페이지 제작, 콘텐츠 준비, 사업계획서 작성에 필요한 기능을 살펴보고, 목적에 맞는 서비스를 선택할 수 있습니다. 현재 일부 서비스는 별도로 이용합니다.",
      },
      {
        question: "모든 기능을 지금 사용할 수 있나요?",
        answer: "홈페이지 직접 편집, 광고 소재 제작, 사업계획서 초안 작성 등 주요 기능은 순차적으로 이용 가능합니다. 마케팅 자동화(메타 광고 연동, 블로그/유튜브 자동화)와 AI 사업계획서 모의 판정단은 현재 업데이트 준비 중이며, 각 영역별 상태 배지를 통해 확인하실 수 있습니다.",
      },
      {
        question: "레이더와 서포터는 어떻게 이용하나요?",
        answer: "두 도구 모두 패스해커라는 하나의 브랜드 아래에서 초기 사업자의 업무를 돕도록 기획되었습니다. 현재는 서비스별 독립 워크스페이스로 접속하여 이용하실 수 있으며, 추후 단일 계정 및 통합 플랫폼으로 점진 발전될 예정입니다.",
      },
      {
        question: "크레딧과 통합 채팅은 언제 이용할 수 있나요?",
        answer: "네 가지 영역을 유기적으로 넘나들 수 있는 통합 채팅 및 공용 크레딧 체계는 로드맵에 따라 준비 중입니다. 안정적인 서비스 품질 확보를 위해 순차 적용되며, 구체적인 일정과 세부 정책은 추후 공식 공지될 예정입니다.",
      },
    ],
  },

  // Final CTA section (#start)
  finalCta: {
    eyebrow: "업무 시작",
    heading: "준비의 다음 단계, 패스해커와 시작하세요.",
    subcopy: "지금 필요한 업무부터 살펴보세요.",
    categories: [
      {
        id: "start-web",
        name: "AI 홈페이지 제작",
        desc: "3천 개 학습 기반 에디터와 히트맵 분석",
        actionText: "기능 살펴보기",
        href: "#ai-website",
        status: "available",
        isUpcoming: false,
      },
      {
        id: "start-ad",
        name: "광고 소재 제작",
        desc: "숏폼 영상, 배너 이미지, 블로그 원고",
        actionText: "기능 살펴보기",
        href: "#ad-creative",
        status: "available",
        isUpcoming: false,
      },
      {
        id: "start-mkt",
        name: "마케팅·자동화",
        desc: "메타·인스타 광고, 블로그/유튜브 자동화",
        actionText: "업데이트 예정",
        href: "#marketing",
        status: "comingSoon",
        isUpcoming: true,
      },
      {
        id: "start-plan",
        name: "사업계획서 작성",
        desc: "문서 불러오기와 사업계획서 초안 작성",
        actionText: "기능 살펴보기",
        href: "#business-plan",
        status: "available",
        isUpcoming: false,
      },
    ],
  },

  // Footer
  footer: {
    wordmark: "패스해커",
    positioning: "초기 사업자를 위한 종합 지원 툴",
    copyright: "© 2026 패스해커 (Passhacker). All rights reserved.",
    disclaimer: "패스해커는 초기 사업자의 업무 효율을 지원하는 도구 플랫폼입니다. 서비스별 이용 정책 및 세부 기능은 각 안내 페이지를 참조해 주세요.",
    roadmapLinkText: "서비스 로드맵",
    privacyText: "개인정보처리방침",
    termsText: "이용약관",
  },
} as const;
