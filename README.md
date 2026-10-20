# 패스해커 (Passhacker) Brand Landing Page Prototype

Website thương hiệu 1-page dành cho **패스해커 (Passhacker)** — *"초기 사업자를 위한 종합 지원 툴"* (Bộ công cụ hỗ trợ toàn diện dành cho người mới kinh doanh).

Được xây dựng bằng **Next.js App Router**, **React 19**, **TypeScript strict**, **Tailwind CSS v4**, và **Motion for React (`motion/react`)**. Hệ thống tập trung vào trải nghiệm cuộn theo mạch câu chuyện (Storytelling), hệ thống trình diễn 12 video kịch bản sản phẩm với cơ chế điều phối chống quá tải và minh bạch hóa tình trạng phát triển tính năng.

---

## 1. Lệnh Chạy & Kiểm Thử Dự Án

Dự án hỗ trợ đầy đủ các tập lệnh tiêu chuẩn:

```bash
# Cài đặt phụ thuộc (nếu chuyển sang môi trường mới)
npm install

# Khởi chạy server phát triển nội bộ
npm run dev
# Mở trình duyệt tại: http://localhost:3000

# Kiểm tra kiểu dữ liệu TypeScript (chế độ nghiêm ngặt)
npm run typecheck

# Chạy trực tiếp ESLint (với bộ quy tắc Next.js Core Web Vitals)
npm run lint

# Biên dịch gói sản phẩm (Production Build)
npm run build

# Khởi chạy bản dựng sản xuất
npm run start
```

---

## 2. Cấu Trúc Mã Nguồn & Vị Trí Tùy Chỉnh

Mọi văn bản tiếng Hàn và cấu hình thương hiệu được tập trung tại một nơi duy nhất, không rải rác trong các component:

```
src/
├── config/
│   └── site.ts           # Tên thương hiệu, khẩu hiệu, bảng màu, URL dịch vụ
├── content/
│   ├── site.ko.ts        # Toàn bộ nội dung tiếng Hàn (Header, Hero, FAQ, Footer...)
│   ├── features.ts       # Định nghĩa 4 nhóm lĩnh vực & trạng thái tính năng
│   └── media.ts          # Manifest 12 video kịch bản, poster & phụ đề
├── components/
│   ├── layout/           # Header, Footer, PreviewBanner
│   ├── sections/         # Hero, Problem, PlatformOverview, Chapter, HowItWorks, Faq, FinalCta
│   ├── video/            # VideoPlayer, VideoFallback
│   ├── motion/           # MotionFadeIn (hỗ trợ prefers-reduced-motion)
│   └── ui/               # StatusBadge
public/
├── videos/               # Thư mục chứa 12 file video thật (.mp4)
├── posters/              # Thư mục chứa ảnh poster video (.jpg, .webp)
└── captions/             # Thư mục chứa phụ đề WebVTT (.vtt)
```

---

## 3. Hướng Dẫn Tùy Chỉnh Thương Hiệu & Nội Dung

### A. Đổi tên thương hiệu & Màu sắc
Mở file [src/config/site.ts](file:///d:/passhacker_landingpage/src/config/site.ts):
- Đổi tên thương hiệu tại: `brandName: "패스해커"`.
- Đổi câu định vị tại: `positioning: "초기 사업자를 위한 종합 지원 툴"`.
- Bảng mã màu thiết kế nằm trong đối tượng `colors`:
  - Nền sáng: `#F8F7FC`
  - Nền tối: `#17102C`
  - Nền bề mặt tối: `#221840`
  - Màu chủ đạo (Primary): `#7657F6`
  - Điểm nhấn chuyển sắc: `#EAE2FF`, `#DFF4FF`, `#FFE8EE`

### B. Chỉnh sửa câu từ tiếng Hàn
Mở file [src/content/site.ko.ts](file:///d:/passhacker_landingpage/src/content/site.ko.ts):
- Tiêu đề chính Hero (H1), Subheadline, và câu chuyện 4 vấn đề của khách hàng được định nghĩa tường minh.
- Sử dụng thuộc tính `word-break: keep-all; overflow-wrap: break-word;` nhằm ngắt dòng tự nhiên theo cụm từ tiếng Hàn.

### C. Cập nhật trạng thái tính năng (Feature Status)
Mở file [src/content/features.ts](file:///d:/passhacker_landingpage/src/content/features.ts):
Mỗi tính năng có 3 trạng thái nghiêm ngặt:
- `"available"`: Đã có thể sử dụng (hiển thị nhãn `이용 가능` màu xanh ngọc).
- `"comingSoon"`: Đang chuẩn bị cập nhật (hiển thị nhãn `업데이트 예정` màu tím).
- `"needsVerification"`: Cần kiểm tra độ ổn định trên UI mới (hiển thị nhãn `확인 진행 중` màu vàng hổ phách kèm ghi chú).

### D. Thêm video thật vào website
Xem hướng dẫn chi tiết từng bước tại [ASSET_MAP.md](file:///d:/passhacker_landingpage/ASSET_MAP.md):
1. Copy file `.mp4` vào `public/videos/`.
2. Mở [src/content/media.ts](file:///d:/passhacker_landingpage/src/content/media.ts), đổi `src: null` thành đường dẫn thật (ví dụ `src: "/videos/website-heatmap.mp4"`).
3. Đổi `mediaStatus: "ready"`.

### E. Cấu hình liên kết dịch vụ (Service URLs)
Trong [src/config/site.ts](file:///d:/passhacker_landingpage/src/config/site.ts), các URL dịch vụ độc lập (Radar, Supporter, Website Builder...) hiện để `null` và `isConfirmed: false`. Khi đã có link đăng nhập/sử dụng chính thức, bạn chỉ cần điền URL và đổi `isConfirmed: true`. Nút CTA sẽ tự động chuyển từ "기능 살펴보기" (cuộn tới phần mô tả) sang "서비스 이용하기" (mở dịch vụ).

---

## 4. Các Điểm Nổi Bật Về Kỹ Thuật

1. **Điều Phối Video Toàn Trang (Global Video Coordinator):**
   - Chỉ cho phép tối đa 1 video phát tại bất kỳ thời điểm nào trên toàn trang. Khi người dùng bấm phát một video mới, video cũ tự động dừng lại.
   - Khi chuyển tab chức năng, video đang phát tự động dừng và giải phóng bộ nhớ.
   - Khi người dùng cuộn ra xa khỏi vùng nhìn (viewport) hoặc ẩn tab trình duyệt, video tự động tạm dừng.
   - Cơ chế nạp lười (Lazy-load): Trình duyệt không tải trước 12 file MP4 nặng, chỉ nạp khi người dùng bấm phát.
2. **Khung Fallback Tinh Tế Khi Chưa Có Media:**
   - Khi video thật chưa có, hệ thống hiển thị khung thông tin mô tả giá trị và mã tính năng tương ứng theo đúng tỷ lệ 16:9, tuyệt đối không dùng thumbnail giả có nút Play ảo.
3. **Tiếp Cận & Khả Năng Đọc (Accessibility & Reduced Motion):**
   - Hỗ trợ đầy đủ `prefers-reduced-motion` qua Motion for React.
   - Điều hướng bàn phím đầy đủ cho Tabs, Accordion FAQ, và Menu Mobile (hỗ trợ phím Escape).
   - Đảm bảo đầy đủ Semantic HTML5 (`header`, `main`, `footer`, `nav`, `section`) với 1 thẻ H1 duy nhất và liên kết bỏ qua `Skip to Content`.
