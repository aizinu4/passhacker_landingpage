# ASSET_MAP: Bản Đồ Video & Tài Nguyên Media Passhacker (V3)

Tài liệu này ghi nhận hiện trạng tích hợp media thực tế, quy cách bố cục thị giác V3 và hướng dẫn cập nhật video/poster cho website thương hiệu 패스해커 (Passhacker).

---

## 1. Nguyên Tắc Quản Lý Media & Kiến Trúc Thị Giác V3

1. **Hiển thị kết quả thật trước, video chứng minh đi sau:**
   - Người dùng thấy ngay thành phẩm họ có thể tạo ra (giao diện website thật, video Shorts thật, trang kế hoạch kinh doanh thật).
   - Nút “사용 과정 보기” hoặc “제작 과정 보기” cung cấp 1-click để mở video ghi lại thao tác màn hình thật.
2. **Không tạo yêu cầu 404:** Trong file cấu hình `src/content/media.ts`, trường `src` chỉ trỏ tới file MP4 thực sự tồn tại trong `public/videos/`.
3. **Hero không dùng hình sai định vị:** Đã loại bỏ hình mật khẩu (`hero-product-preview.jpg`); Hero V3 sử dụng tổ hợp 3 asset kết quả thật (`website-edit.jpg`, `creative-shorts.jpg`, `business-import.jpg`) với chiều sâu và bố cục lệch 45/55.
4. **Giữ nguyên tỷ lệ 16:9 cho video quy trình:** Video ghi hình màn hình 16:9 được phát trong khung lớn hoặc qua `VideoDialog` chuẩn, không bị crop ép vào khung điện thoại làm mất chữ và menu.
5. **Điều phối 1 video duy nhất:** Khi một video bắt đầu phát, mọi video khác tự động dừng; video tự động tạm dừng khi chuyển tab hoặc khi cuộn ra ngoài màn hình.

---

## 2. Bảng 12 Video Kỷ Lục (Media Manifest Records)

| Mã ID | Lĩnh Vực | Tên Tính Năng & Kịch Bản | File Video Hoạt Động | Poster Hoạt Động | Nguồn Gốc | Trạng Thái Tính Năng | Trạng Thái Media |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **WEB-01** | AI 홈페이지 제작 | 홈페이지 직접 편집 및 설문 제작 폼 편집 | `/videos/website-edit.mp4` | `/posters/website-edit.png` | `1_영상1.mp4` | `available` (이용 가능) | `ready` (동영상 재생 가능) |
| **WEB-02** | AI 홈페이지 제작 | 다중 페이지 구성 | `/videos/website-multipage.mp4` | `/posters/website-multipage.png` | `1_영상2.mp4` | `available` (이용 가능) | `ready` (동영상 재생 가능) |
| **WEB-03** | AI 홈페이지 제작 | 히트맵 및 방문자 분석 | `/videos/website-heatmap.mp4` | `/posters/website-heatmap.jpg` | `1_영상3.mp4` | `available` (이용 가능) | `ready` (동영상 재생 가능) |
| **WEB-04** | AI 홈페이지 제작 | HTML 파일 업로드 및 편집 | `/videos/website-html-import.mp4` | `/posters/website-html-import.png` | `1_영상4.mp4` | `available` (이용 가능) | `ready` (동영상 재생 가능) |
| **AD-01** | 광고 소재 제작 | 숏츠 영상 제작 | `/videos/creative-shorts.mp4` | `/posters/creative-shorts.png` | `4_영상1.mp4` | `available` (이용 가능) | `ready` (동영상 재생 가능) |
| **AD-02** | 광고 소재 제작 | 이미지 제작 | `/videos/creative-image.mp4` | `/posters/creative-image.jpg` | `4_영상2.mp4` | `available` (이용 가능) | `ready` (동영상 재생 가능) |
| **AD-03** | 광고 소재 제작 | 블로그 제작 | `/videos/creative-blog.mp4` | `/posters/creative-blog.jpg` | `4_영상3.mp4` | `available` (이용 가능) | `ready` (동영상 재생 가능) |
| **MKT-01** | 마케팅·자동화 | 메타·인스타그램 광고 | `/videos/marketing-meta.mp4` | Không (Roadmap) | Lộ trình Roadmap | `comingSoon` (업데이트 예정) | `previewOnly` (업데이트 예정) |
| **MKT-02** | 마케팅·자동화 | 블로그 작성 자동화 | `/videos/marketing-blog.mp4` | Không (Roadmap) | Lộ trình Roadmap | `comingSoon` (업데이트 예정) | `previewOnly` (업데이트 예정) |
| **MKT-03** | 마케팅·자동화 | 유튜브 운영 자동화 | `/videos/marketing-youtube.mp4` | Không (Roadmap) | Lộ trình Roadmap | `comingSoon` (업데이트 예정) | `previewOnly` (업데이트 예정) |
| **PLAN-01** | 사업계획서 작성 | 어떤 문서든 불러오기 및 문서 자동 작성 | `/videos/business-import.mp4` | `/posters/business-import.png` | `2_영상1.mp4` | `available` (이용 가능) | `ready` (동영상 재생 가능) |
| **PLAN-02** | 사업계획서 작성 | 이미지·그래프 생성 및 세밀한 수정 | `/videos/business-visuals.mp4` | Đang chờ file | Đang chờ file | `needsVerification` (확인 진행 중) | `missing` (기능 소개 예시) |
| **PLAN-03** | 사업계획서 작성 | AI 사업계획서 합격·탈락 판정단 | `/videos/business-evaluation.mp4` | Không (Roadmap) | Lộ trình Roadmap | `comingSoon` (업데이트 예정) | `previewOnly` (업데이트 예정) |

---

## 3. Kiến Trúc 4 Chương V3

1. **AI 홈페이지 제작 (ChapterWebsite.tsx):**
   - Theme tím sâu (`#17102C`), heading lệch trái.
   - Sân khấu lớn tích hợp 3 poster độ nét cao trích xuất từ video thật.
   - Click “사용 과정 보기” phát video trực tiếp trong sân khấu.
2. **광고 소재 제작 (ChapterCreative.tsx):**
   - Theme sáng pastel (`#F8F7FC`), bố cục studio gallery bất đối xứng.
   - Cột trái: 숏츠 영상 제작 nổi bật với preview đầu ra video.
   - Cột phải: 2 thẻ đầu ra 이미지 제작 & 블로그 제작.
   - Nút “제작 과정 보기” mở `VideoDialog` độc lập tỷ lệ 16:9, quản lý focus chuẩn accessibility và đóng bằng phím ESC.
3. **마케팅·자동화 (ChapterMarketing.tsx):**
   - Theme tím sâu (`#17102C`), 3 hàng timeline/roadmap gọn gàng.
   - Giữ đúng câu chữ chuẩn từ brief, không vẽ player trống hoặc pipeline giả.
4. **사업계획서 작성 (ChapterBusinessPlan.tsx):**
   - Theme trắng/giấy (`#FFFFFF`), heading lệch trái.
   - Sân khấu chính hiển thị trang kế hoạch thật (`business-import.jpg`) và phát video quy trình.
   - PLAN-02 gắn cờ kiểm tra ổn định UI; PLAN-03 hiển thị lưu ý từ chối trách nhiệm chuẩn.

