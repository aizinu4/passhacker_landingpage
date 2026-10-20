# Danh Sách Kiểm Tra Trước Khi Phát Hành Chính Thức (RELEASE_CHECKLIST)

Tài liệu này tổng hợp toàn bộ các nội dung truyền thông, trạng thái tính năng, liên kết dịch vụ và thông tin pháp lý cần **Chủ dự án (Owner) phê duyệt** trước khi gỡ cờ kiểm tra nội bộ (`검토용 미리보기`) và đưa website vào hoạt động chính thức.

---

## 1. Xác Thực Các Tuyên Bố Tiếp Thị (Marketing Claims Verification)

Các tuyên bố dưới đây là nguyên văn từ tài liệu yêu cầu (Brief), được giữ nguyên trong prototype để phục vụ quá trình xem xét nội bộ. Cần kiểm chứng số liệu thực tế trước khi công bố:

- [ ] **Tuyên bố "3천 개의 홈페이지를 학습한 제작 툴" (AI 홈페이지 제작):**
  - *Hiện trạng:* Đang hiển thị ở Tagline của phần AI 홈페이지 제작.
  - *Cần xác thực:* Số lượng mẫu website thực tế được huấn luyện/thu thập có đạt con số 3.000 không, hay cần điều chỉnh câu từ phù hợp với năng lực kỹ thuật thực tế.
- [ ] **Tuyên bố "작성 시간 95% 단축" (사업계획서 작성):**
  - *Hiện trạng:* Đang hiển thị ở Tagline của phần 사업계획서 작성.
  - *Cần xác thực:* Đo lường dựa trên kịch bản người dùng nào; có tài liệu kiểm thử so sánh thời gian viết tay và viết bằng công cụ không. Cần bổ sung chú thích cơ sở tính toán nếu giữ nguyên.
- [ ] **Cụm từ "어떤 문서든 불러오기" (PLAN-01):**
  - *Hiện trạng:* Đang hiển thị ở tên tab tính năng số 1 của 사업계획서 작성.
  - *Cần xác thực:* Danh sách định dạng file được hỗ trợ thực tế (ví dụ: PDF, DOCX, HWP, TXT). Tránh khẳng định "bất kỳ tài liệu nào" nếu hệ thống chưa hỗ trợ định dạng chuyên biệt của Hàn Quốc như HWPX.
- [ ] **Tagline "조회수 터지는 콘텐츠 제작" (광고 소재 제작):**
  - *Hiện trạng:* Đang hiển thị ở Tagline phần 광고 소재 제작.
  - *Cần xác thực:* Đảm bảo không tạo ấn tượng cam kết lượt xem hoặc thành công viral tuyệt đối cho khách hàng.

---

## 2. Xác Nhận Trạng Thái Tính Năng (Feature Statuses)

- [ ] **Nhóm Marketing & Tự Động Hóa (MKT-01, MKT-02, MKT-03):**
  - Đã gắn nhãn `comingSoon` ("업데이트 예정") trên toàn bộ Section và từng mục con.
  - *Xác nhận:* Không hiển thị trình phát video rỗng; giữ nguyên giao diện thẻ Roadmap minh họa.
- [ ] **AI 사업계획서 합격·탈락 판정단 (PLAN-03):**
  - Đã gắn nhãn `comingSoon` ("업데이트 예정").
  - Đã hiển thị lưu ý từ chối trách nhiệm chuẩn xác: *"※ AI 평가 결과는 실제 지원사업 선정 결과를 보장하지 않습니다."* (Kết quả đánh giá AI không đảm bảo kết quả trúng tuyển thực tế). Đã loại bỏ các nhắc nhở kỹ thuật nội bộ ("안내 필수").
- [ ] **이미지·그래프 생성 및 세밀한 수정 (PLAN-02):**
  - Đã gắn nhãn `needsVerification` ("확인 진행 중").
  - Ghi chú: *"신규 UI 환경에서 동작 안정성 검증 진행 중"*.
  - *Cần xác thực:* Sau khi đội ngũ kiểm thử kiểm tra xong tính năng vẽ biểu đồ trên giao diện mới, chuyển trạng thái sang `available` trong `src/content/features.ts`.

---

## 3. Cấu Hình Đường Dẫn Dịch Vụ Thật (Service URLs)

Mọi đường dẫn dịch vụ ngoại vi hiện đang được đặt là `null` trong `src/config/site.ts` để tránh tạo liên kết chết (404/broken links):

- [ ] **Radar:** Cập nhật URL chính thức và chuyển `isConfirmed: true` khi sẵn sàng.
- [ ] **Supporter:** Cập nhật URL chính thức và chuyển `isConfirmed: true` khi sẵn sàng.
- [ ] **Website Builder / Creative Studio:** Cập nhật URL đăng nhập/truy cập trực tiếp.
- [ ] **Trang demo tham khảo:** `https://passhacker.com/multiai/c` hiện chỉ được ghi chú là nguồn tham khảo giao diện demo, không dùng làm nút CTA chính.

---

## 4. Bổ Sung Video & Poster Thực Tế

- [ ] Quay và đưa 12 video chuẩn 16:9 vào `public/videos/` theo hướng dẫn tại [ASSET_MAP.md](file:///d:/passhacker_landingpage/ASSET_MAP.md).
- [ ] Chuẩn bị poster chuẩn và đưa vào `public/posters/`.
- [ ] Cập nhật `src` và `poster` tương ứng trong `src/content/media.ts`.

---

## 5. Thông Tin Pháp Lý & Chân Trang (Footer)

Hiện tại chân trang chỉ hiển thị Wordmark và thông điệp định vị để tránh bịa đặt thông tin doanh nghiệp. Trước khi ra mắt chính thức, cần bổ sung:

- [ ] Tên pháp nhân công ty (상호명 / 법인명)
- [ ] Tên người đại diện (대표자명)
- [ ] Mã số đăng ký kinh doanh (사업자등록번호) & Mã số bán hàng qua mạng (통신판매업신고번호)
- [ ] Địa chỉ trụ sở chính (사업장 주소)
- [ ] Email & Số điện thoại hỗ trợ khách hàng chính thức
- [ ] Soạn thảo và gắn link trang Điều khoản sử dụng (이용약관) & Chính sách bảo mật (개인정보처리방침)

---

## 6. Chuyển Đổi Sang Bản Công Bố Chính Thức (Go-Live)

- [ ] **Gỡ Banner Xem Trước:** Ẩn hoặc xóa component `<PreviewBanner />` trong `src/app/page.tsx` và đặt `previewMode: false` trong `src/config/site.ts`.
- [ ] **Bật Indexing Công Cụ Tìm Kiếm:** Trong `src/app/layout.tsx`, đổi:
  ```typescript
  robots: {
    index: true,
    follow: true,
  }
  ```
- [ ] **Xác nhận cấu hình Domain & Canonical URL:** Đặt đúng tên miền chính thức trong `siteConfig.siteUrl`.

---

## 7. Xác Nhận Kiểm Tra V3 Đã Hoàn Thành (V3 Refinements Verification)

- [x] **Hero đúng định vị:** Đã gỡ bỏ hoàn toàn hình mật khẩu cũ (`hero-product-preview.jpg`); thay bằng tổ hợp 3 kết quả thật (`website-edit.jpg`, `creative-shorts.jpg`, `business-import.jpg`) với layout 45/55 bất đối xứng.
- [x] **H1 & Subheadline nguyên văn:** Giữ chính xác nội dung và dấu câu theo brief.
- [x] **FAQ minh bạch:** Đã gỡ câu hứa thanh toán/tài khoản hợp nhất khỏi FAQ 1; nêu rõ hiện tại một số dịch vụ sử dụng độc lập.
- [x] **Marketing không mở rộng roadmap:** Giữ nguyên 3 mô tả chuẩn từ brief và gắn nhãn "업데이트 예정"; không thêm các tuyên bố tự động hóa ngoài lề.
- [x] **Heatmap trung thực:** Đổi mô tả về việc phân tích phản hồi và tìm điểm cải thiện, không cam kết tự động tăng conversion.
- [x] **Shorts phản ánh đầu ra thật:** Diễn đạt việc tạo và chỉnh sửa video shorts thực tế.
- [x] **Studio Gallery bất đối xứng (Ad Creative):** Nổi bật Shorts dọc 9:16 cùng 2 đầu ra Image & Blog, mở video quay quy trình 16:9 qua `VideoDialog` độc lập.
- [x] **Business Plan tài liệu:** Headline chuẩn `흩어진 자료를, 구체적인 사업계획서로.`, PLAN-02 gắn cờ kiểm tra UI, PLAN-03 gắn nhãn dự kiến kèm từ chối trách nhiệm.
- [x] **Không lộ mã nội bộ trên UI:** Tuyệt đối không hiển thị WEB-01, AD-01, PLAN-01, đường dẫn file hay mã kỹ thuật ra giao diện người dùng.

