/*  =================================
 *   | Bài tập js buổi 7-8           |
 *   | Handler: Bùi Hữu Công         |
 *   =================================*/

// ===[global function]======
// ẩn element
function hideElement(selector) {
  let el = document.querySelector(selector);
  el.style.display = "none";
  el.style.opacity = "0";
}
// hiện element block & inline-block
function showBlock(selector) {
  let el = document.querySelector(selector);
  el.style.display = "block";
  el.style.opacity = "1";
}
function showBlockInline(selector) {
  let el = document.querySelector(selector);
  el.style.display = "inline-block";
  el.style.opacity = "1";
}
// xóa form input
function xoaForm(selector) {
  let els = document.querySelectorAll(selector);
  let i = 0;
  while (i < els.length) {
    els[i].value = "";
    i++;
  }
}
// .toLocaleString( "vi", {style: "currency", currency: "VND"})
// .toLocaleString( "vi")
// hàm format tiền VND
function vnd(num) {
  return (num = num.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  }));
}
// hàm format tiền USD
function usd(num) {
  return (num = num.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  }));
}
// format vn number
function vnNum(num) {
  return (num = num.toLocaleString("vi-VN"));
}
// format us number
function usNum(num) {
  return (num = num.toLocaleString("en-US"));
}
// Nhập nội dung vô selector
function nhapBill(idNhap, NoiDungNhap) {
  document.getElementById(idNhap).innerHTML = NoiDungNhap;
}
// ======end global fn

/**=============================
 * BÀI TẬP 1: QUẢN LÝ TUYỂN SINH
 * - Thí sinh trúng tuyển nếu có điểm tổng kết >= điểm chuẩn &&  không có môn 0 điểm
 * - Điểm tổng = Tổng điểm 3 môn + Điểm ưu tiên
 * - Điểm ưu tiên tính theo khu vực và đối tượng:
 *  + Khu vực: A: 2 điểm | B: 1 điểm | C: 0.5 điểm
 *  + Đối tượng: 1: 2.5 điểm | 2: 1.5 điểm | 3: 1 điểm
 * ==============================
 *   Sơ đồ 3 khối
 *
 * 1. Đầu vào:
 * - Người dùng nhập vào Điểm chuẩn của hội đồng + Điểm thi 3 môn + Đối tượng ưu tiên + Khu vực ưu tiên.
 *
 *
 * 2. Xử lý:
 * - Bước 1: DOM đến button tính điểm để gắn sự kiện click --> Sau đó DOM tới các đối tượng để lấy dữ liệu liên quan.
 * - Bước 2: Kiểm tra dữ liệu trước khi tính:
 *   + Điểm thi 3 môn: là số >=0, không nhập hiểu là = 0.
 *  !!! Nếu có ít nhất 1 trong 3 môn điểm bằng 0 thì trả ngay về kết quả "thi rớt" và dừng chương trình.
 *   + Điểm chuẩn: bắt buộc nhập và là number > 0
 *   + Khu vực ưu tiên: mặc định không nhập là không thuộc khu vực ưu tiên (điểm cộng = 0)
 *   + Đối tượng ưu tiên: mặc định không nhập là không thuộc đối tượng ưu tiên (điểm cộng = 0)
 * - Bước 3: Tính điểm ưu tiên theo khu vực và đối tượng:
 *  + Khu vực: A: 2 điểm | B: 1 điểm | C: 0.5 điểm
 *  + Đối tượng: 1: 2.5 điểm | 2: 1.5 điểm | 3: 1 điểm
 * - Bước 3: Tính Tổng Điểm = [Tổng điểm 3 môn]+[Điểm Khu vực ưu tiên]+[Điểm đối tượng Ưu tiên]
 * - Bước 4: So sánh với Điểm chuẩn để ra kết quả thi:
 *   + Nếu >= điểm chuẩn -> Đậu;
 *   + Nếu < điểm chuẩn -> Rớt
 *
 *
 * 3. Đầu ra:  Hiển thị kết quả lên giao diện
 *
 */
