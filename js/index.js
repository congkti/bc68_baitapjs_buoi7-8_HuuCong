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
function nhapKetQua(elmentNhap, NoiDungNhap) {
  document.querySelector(elmentNhap).innerHTML = NoiDungNhap;
}
// ======end global fn

/**=============
 * Nhập số vào mảng
 */
let arrNumber = [];
let inputNumber = document.getElementById("ipNumber");
let theShowArray = document.querySelector(".showArray");
document.getElementById("formLeftSide").addEventListener("submit", () => {
  event.preventDefault();
  arrNumber.push(inputNumber.value * 1);
  if (arrNumber.length <= 1) {
    theShowArray.innerText += inputNumber.value * 1;
  } else {
    theShowArray.innerText += " , " + inputNumber.value * 1;
  }

  // console.log(arrNumber);
  inputNumber.value = "";
  inputNumber.focus();
});
/**=============================
 * BÀI 1: Tổng các số dương trong mảng
 *
 */
document.getElementById("btnClickB1").addEventListener("click", () => {
  let bai1TongSoDuong = 0;
  arrNumber.forEach((num, i) => {
    if (num > 0) {
      bai1TongSoDuong += num;
    }
  });
  console.log(bai1TongSoDuong);
  nhapKetQua(
    ".result.bai1",
    "Tổng các số dương trong mảng là: " + bai1TongSoDuong
  );
});

/**=============================
 * BÀI 2: Đếm các số dương trong mảng
 *
 */
document.getElementById("btnClickB2").addEventListener("click", () => {
  let bai2DemSoDuong = 0;
  arrNumber.forEach((num, i) => {
    if (num > 0) {
      bai2DemSoDuong++;
    }
  });
  nhapKetQua(
    ".result.bai2",
    "Tổng cộng có " + bai2DemSoDuong + " số dương trong mảng"
  );
});

/**=============================
 * BÀI 3: Tìm số nhỏ nhất trong mảng
 *
 */
document.getElementById("btnClickB3").addEventListener("click", () => {
  let bai3SoNhoNhat = arrNumber[0];
  arrNumber.forEach((num, i) => {
    if (num < bai3SoNhoNhat) {
      bai3SoNhoNhat = num;
    }
  });
  nhapKetQua(".result.bai3", `Số nhỏ nhất trong mảng là: ${bai3SoNhoNhat}`);
});

/**=============================
 * BÀI 4: Tìm số dương nhỏ nhất trong mảng
 *
 */
document.getElementById("btnClickB4").addEventListener("click", () => {
  let arrSoDuong = [];
  arrNumber.forEach((num, i) => {
    if (num >= 0) {
      arrSoDuong.push(num);
    }
  });
  // console.log(arrSoDuong);
  // console.log(arrSoDuong.sort((a, b) => a - b));
  let bai4SoDuongNhoNhat = arrSoDuong.sort((a, b) => a - b)[0];

  nhapKetQua(
    ".result.bai4",
    `Số dương nhỏ nhất trong mảng là: ${bai4SoDuongNhoNhat}`
  );
});

/**===========================================
 * BÀI 5: Tìm số CHẴN CUỐI CÙNG trong mảng
 *
 */
document.getElementById("btnClickB5").addEventListener("click", () => {
  let arrSoChan = [];
  let bai5SoChanCuoiCung = -1;
  arrNumber.forEach((num, i) => {
    if (num % 2 == 0) {
      arrSoChan.push(num);
    }
  });

  let content5 = "";
  if (arrSoChan.length == 0) {
    content5 = "Không có số chẵn trong mảng [ " + arrNumber + " ]";
  } else {
    content5 = `Số chẵn cuối cùng trong mảng là: ${
      arrSoChan[arrSoChan.length - 1]
    }`;
  }

  console.log(arrSoChan);
  nhapKetQua(".result.bai5", content5);
});

/**===========================================
 * BÀI 6: Đổi chỗ 2 giá trị trong mảng theo vị trí
 * nhập vào 2 vị trí cần đổi chỗ cho nhau
 */
let arrNumberChanged = arrNumber; //để ko ảnh hưởng đến arrNumber cho phía sau
let content6 = "";
document.getElementById("btnClickB6").addEventListener("click", () => {
  let viTriThu1 = document.querySelector(".viTri1").value * 1;
  let viTriThu2 = document.querySelector(".viTri2").value * 1;
  if (
    viTriThu1 >= arrNumberChanged.length ||
    viTriThu2 >= arrNumberChanged.length
  ) {
    alert("Kiểm tra lại vị trí 1 hoặc 2 không có trong mảng hiện tại");
    document.querySelector(".viTri1").focus();
  } else {
    let tmp = arrNumberChanged[viTriThu1];
    arrNumberChanged[viTriThu1] = arrNumberChanged[viTriThu2];
    arrNumberChanged[viTriThu2] = tmp;
    console.log(arrNumberChanged);
    content6 += `Mảng sau khi đổi &rarr; N = [ ${arrNumberChanged} ]<br />`;
    nhapKetQua(".result.bai6", content6);
  }
});

/**===========================================
 * BÀI 7: Sắp xếp mảng theo thứ tự tăng dần
 *
 */
let arrNumberB7 = arrNumber;
document.getElementById("btnClickB7").addEventListener("click", () => {
  nhapKetQua(
    ".result.bai7",
    `Mảng sắp xếp tăng dần: ${arrNumberB7.sort((a, b) => a - b)}`
  );
});

/**===========================================
 * BÀI 8: Tìm số nguyên tố đầu tiên trong mảng
 * nếu không có số nguyên tố thì trả về -1
 */
const KIEM_TRA_SO_NT = (n) => {
  if (n < 2) {
    // console.log(n + " không phải là số nguyên tố");
    return false;
  } else {
    for (let i = 2; i <= Math.ceil(n / 2); i++) {
      if (n % i === 0) {
        // console.log(n + " không phải là số nguyên tố");
        return false;
      }
    }
    // console.log(n + " là số nguyên tố");
    return true;
  }
};
console.log(KIEM_TRA_SO_NT(13));

document.getElementById("btnClickB8").addEventListener("click", () => {
  let arrNumberB8 = arrNumber;
  let arrSoNguyenTo = [];
  arrNumberB8.forEach((num, i) => {
    if (KIEM_TRA_SO_NT(num)) {
      arrSoNguyenTo.push(num);
    }
  });
  let content8 = "";
  if (arrSoNguyenTo.length == 0) {
    content8 = "Không có số nguyên tố trong mảng" + arrSoNguyenTo;
  } else {
    content8 = `Số nguyên tố đầu tiên trong mảng là: ${arrSoNguyenTo[0]}`;
  }

  nhapKetQua(".result.bai8", content8);
  console.log(arrSoNguyenTo);
});

/**===========================================
 * BÀI 9: Đếm có bao nhiêu số nguyên trong mảng
 * 05/06->fix lỗi ko nhập đc số thực
 * nguyên nhân do validate tự động của type="number"
 * xử lý: trong html input thêm vào  attribute step="any" để nhập đc số thực bất kỳ, hoặc step="0.01" -> nhập số thực chính xác 2 đến 2 chữ số thập phân,...
 *
 */
document.getElementById("btnClickB9").addEventListener("click", () => {
  let count = 0;
  arrNumber.forEach((num, i) => {
    if (Number.isInteger(num * 1)) {
      console.log("số nguyên");
      count++;
    }
  });

  nhapKetQua(".result.bai9", `Có tổng cộng ${count} số nguyên trong mảng`);
});

/**===========================================
 * BÀI 10: So sánh số lượng số âm và dương
 *
 */

document.getElementById("btnClickB10").addEventListener("click", () => {
  let countDuong = 0;
  let countAm = 0;

  arrNumber.forEach((num, i) => {
    if (num > 0) {
      countDuong++;
    } else if (num < 0) {
      countAm++;
    }
  });
  console.log(countAm, countDuong);
  let content10 = "";
  if (countAm == countDuong) {
    content10 = "Tổng số Âm BẰNG tổng số Dương";
  } else {
    if (countAm > countDuong) {
      content10 = `Số lượng số Âm (${countAm}) NHIỀU HƠN số lượng số Dương (${countDuong})`;
    } else {
      content10 = `Số lượng số Âm (${countAm}) ÍT HƠN số lượng số Dương (${countDuong})`;
    }
  }

  nhapKetQua(".result.bai10", content10);
});
