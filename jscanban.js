/* 
- Cài Nodejs để chạy js trên máy local
*/

/* - JS tự đẩy toàn bộ biến "var" lên đâù để chạy trước do đó khai báo sau là hoàn toàn hợp lệ (kể cả hàm)*/
tuoi = 30;
var tuoi; // legit

// --------------- KHAI BÁO CHUỖI ---------------
// Cách khai báo chuỗi
let str1 = "Chuỗi với dấu nháy kép";
let str2 = 'Chuỗi với dấu nháy đơn';
let str3 = new String("Chuỗi như đối tượng"); // Không khuyến khích

// So sánh kiểu dữ liệu
console.log("Kiểu str1:", typeof str1);  // string
console.log("Kiểu str3:", typeof str3);  // object
console.log("str1 === str3:", str1 === String(str3));  // false
console.log("str1 == str3:", str1 == str3);  // true

// --------------- ESCAPE CHARACTERS ---------------
console.log("Xuống dòng: Dòng 1\nDòng 2");
console.log("Tab: Cột 1\tCột 2");
console.log("Dấu nháy: \"Trích dẫn trong nháy kép\" và \'Trích dẫn trong nháy đơn\'");
console.log("Dấu gạch chéo: C:\\Users\\Documents");

// --------------- THUỘC TÍNH & PHƯƠNG THỨC CƠ BẢN ---------------
let text = "JavaScript là ngôn ngữ lập trình phổ biến";

// Độ dài chuỗi
console.log(`Độ dài chuỗi: ${text.length}`);

// Truy cập ký tự
console.log(`Ký tự đầu tiên: ${text[0]}`);
console.log(`Ký tự thứ 5: ${text.charAt(4)}`);

// --------------- TÌM KIẾM TRONG CHUỖI ---------------
console.log(`Vị trí 'lập trình': ${text.indexOf("lập trình")}`);
console.log(`Tìm 'PHP': ${text.indexOf("PHP")}`); // -1 nếu không tìm thấy
console.log(`Vị trí cuối cùng của 'á': ${text.lastIndexOf("á")}`);
console.log(`Kiểm tra có chứa 'script': ${text.includes("script")}`);

// --------------- CẮT & GHÉP CHUỖI ---------------
// Cắt chuỗi
console.log(`Cắt từ vị trí 0-10: ${text.slice(0, 10)}`);
console.log(`Cắt từ vị trí 11 đến hết: ${text.substring(11)}`);

// Ghép chuỗi
let text2 = " và dễ học";
console.log(`Ghép chuỗi: ${text.concat(text2)}`);
// Cách ghép chuỗi hiện đại
console.log(`Template literal: ${text}${text2}`);

// --------------- CHỈNH SỬA CHUỖI ---------------
// Thay thế
let newText = text.replace("JavaScript", "TypeScript");
console.log(`Sau khi thay thế: ${newText}`);

// Xóa khoảng trắng
let spacedText = "   Có khoảng trắng   ";
console.log(`Xóa khoảng trắng: '${spacedText.trim()}'`);

// Chuyển đổi chữ hoa/thường
console.log(`Chữ hoa: ${text.toUpperCase()}`);
console.log(`Chữ thường: ${text.toLowerCase()}`);

// --------------- CHUYỂN CHUỖI THÀNH MẢNG ---------------
let workflow = "Phân tích - Thiết kế - Lập trình - Kiểm thử - Bảo trì";
let steps = workflow.split(" - ");
console.log("Các bước trong quy trình:");
steps.forEach((step, index) => {
    console.log(`${index + 1}. ${step}`);
});

// --------------- CHUỖI TEMPLATE ---------------
let name = "Minh";
let age = 25;
console.log(`Xin chào, tôi là ${name} và tôi ${age} tuổi.`);

// --------------- THÊM ĐỆM CHUỖI ---------------
let number = "42";
console.log(`Thêm đệm đầu: ${number.padStart(5, '0')}`); // 00042
console.log(`Thêm đệm cuối: ${number.padEnd(5, '*')}`);   // 42***

// --------------- MỘT VÀI KIỂU CHUỒI ---------------
var bien1 = null; // biến trống nhưng vẫn tình là 1 object
console.log(bien2); // biến chưa tồn tại sẽ đc khai báo là undefined
var bien3 = {
    ten:"Tan",
    age:20,
} // biến object như C++
var bien4 = new Boolean(true); // boolean variable
console.log(typeof bien4); //check loai bien
console.log(bien3 instanceof Object); // check xem bien duoc inherit tu dau
var bien5 = 30;
var bien6 = String(bien5); //chuyển biến từ số sang string
console.log(bien5.toString()); // như trên nhưng lấy loại biến trước rồi mới truy cập giá trị biến -> null với undefined không convert được
// Boolean(), Number(), parseInt(), parseFloat() -> chuyển đổi kiểu dữ liệu, tương tự như trên


// --------------- HÀM ---------------
function tinhtong(a, b) {
    return a + b;
}
let tinhtong = (a,b) => {
    return a + b;
}
let tinhtong = (a,b) => a + b;
nghenghiep.forEach((item)=>console.log(item));
// từ khóa "this" dùng y như trong C++

// --------------- MẢNG ---------------
nghenghiep.forEach((item)=>console.log(item)); // shorthand duyệt phần tử

// --------------- LINH TINH ---------------
try {
// khối lệnh thực thi
}
catch(err) {
// khối lệnh sẽ được thực hiện nếu khối lệnh thực thi phát sinh lỗi
}
finally {
// Khối lệnh sẽ luôn được thực hiện
}

// --------------- LỚP ---------------
let me = {ten: "Phạm Dương Minh", email: "phamduongminh@mail.com", diachi: "207 Giải Phóng", tuoi: 22};
// tên-đối-tượng.tên-thuộc tính
// tên-đối-tượng[tên-thuộc tính]
//class không thể hoist
class SinhVien extends Nguoi{};



// --------------- JS CHO WEBSITE ---------------
alert("Xin chào!"); // thông báo
confirm("Bạn có chắc chắn không?"); // xác nhận
prompt("Nhập tên của bạn: "); // nhập liệu

const thoigian = setTimeout(() => {
    alert("Hẹn giờ 2 giây");
    clearTimeout(thoigian); // dừng hẹn giờ
}, 2000); // hẹn giờ

const thoigian2 = setInterval(function (){
    console.log("Hiển thị thông tin")
}, 1000);

var quangcao = open("quangcao.html", "", "width=600, height=400")
setTimeout(function () {
 quangcao.close()
}, 3000);

var quangcao = open("quangcao.html", "", "width=600, height=400")
quangcao.moveTo(100, 100); //Di chuyển đến vị trí (100,100)
quangcao.moveBy(50, 50); //Di chuyển đến vị trí mới cách vị trí ban đầu 50 về bên phải và 50 xuống phía dưới

var quangcao = open("quangcao.html", "", "width=600, height=400")
quangcao.resizeTo(300, 300); //Thay đổi kích thước thành 300px x 300px
quangcao.resizeBy(100, 100); //Thay đổi kích thước tăng thêm 100px mỗi chiều

scrollTo(0, 100); //Cuộn theo trục y (Cuộn dọc) đến vị trí 50
scroolBy(0, 50); //Cuộn theo trục tung (Cuộn dọc) đến vị trí cách vị trí ban đầu 50

print(); //In trang hiện tại

// SCREEN
console.log("Screen:", screen.availWidth + "x" + screen.availHeight, screen.colorDepth, screen.orientation.type);

// LOCATION
console.log("URL:", location.href, location.hostname, location.pathname, location.protocol, location.origin);

// HISTORY
console.log("History length:", history.length);
// history.back(); history.forward(); history.go(-1);

// NAVIGATOR
console.log("Browser:", navigator.appName, navigator.language, "Cookies enabled:", navigator.cookieEnabled);
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(pos => {
    console.log("Vị trí:", pos.coords.latitude, pos.coords.longitude);
  });
}

// COOKIE (async/await cần môi trường hỗ trợ)
(async () => {
  await cookieStore.set({ name: "ten", value: "Minh", expires: Date.now() + 86400000 });
  let c = await cookieStore.get("ten");
  console.log("Cookie:", c?.value);
  await cookieStore.delete("ten");
})();

// LOCALSTORAGE
localStorage.setItem("ten", "Minh"); localStorage.tuoi = 22;
console.log("Local:", localStorage.getItem("ten"), localStorage.tuoi);
localStorage.removeItem("ten"); localStorage.tuoi = null;

// SESSIONSTORAGE
sessionStorage.solanbam = Number(sessionStorage.solanbam || 0) + 1;
console.log("Đã bấm:", sessionStorage.solanbam);

// ---------------- HTML ELE MANUPILATION ---------------
// 📌 Truy xuất phần tử
document.getElementById("id");
document.getElementsByClassName("class"); // HTMLCollection
document.getElementsByTagName("tag");     // HTMLCollection
document.querySelector("css selector");
document.querySelectorAll("css selector"); // NodeList

// 📌 Thay đổi nội dung
element.innerHTML = "Nội dung";
element.textContent = "Chữ thuần";

// 📌 Thay đổi thuộc tính
element.setAttribute("type", "text");
element.getAttribute("type");
element.removeAttribute("type");

// 📌 Thay đổi style
element.style.color = "red";
element.style.display = "none";

// 📌 Thêm / Xóa class
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");

// 📌 Tạo và thêm phần tử mới
let div = document.createElement("div");
div.innerHTML = "Mới";
document.body.appendChild(div);

// 📌 Xoá phần tử
element.remove();

// 📌 Xử lý sự kiện
element.addEventListener("click", function(e) {
  console.log(e.target);
});
/*
- onchange    → khi giá trị phần tử thay đổi (input, select,...)
- onclick     → khi người dùng nhấp chuột
- onmouseover → khi chuột di chuyển lên phần tử
- onmouseout  → khi chuột rời khỏi phần tử
- onkeydown   → khi người dùng nhấn phím
- onload      → khi trang được tải xong
*/

// 📌 Ngăn hành vi mặc định (form, thẻ a...)
event.preventDefault();

// 📌 DOM Form
let form = document.forms["myForm"];
form.elements["username"].value;

// 📌 Validation đơn giản
if (input.value.trim() === "") {
  alert("Không được để trống");
}

// Bubbling - child to parent, Capturing - parent to child
element.addEventListener("click", function(e) {
  console.log("Element clicked:", e.target);
}, false);
document.getElementById("myP").addEventListener("click", myFunction, true);
document.getElementById("myDiv").addEventListener("click", myFunction, true);
// true là sử dụng capturing, false là bubbling

// ---------------- NODE ---------------
// Node là một phần tử trong DOM (Document Object Model), quan hệ nesting và parent-child
 var para = document.createElement("p");
 var node = document.createTextNode("This is new paragraph");
 para.appendChild(node);
 var element = document.getElementById("div1");
 var child = document.getElementById("p1");
 element.insertBefore(para, child);

// --------------- FORM ---------------
function validateForm() {
  let fname = document.forms["myForm"]["fname"];
  if (!fname.checkValidity()) {
    if (fname.validity.valueMissing) alert("Name must be filled out");
    return false;
  }
}

function myFunction() {
  let num = document.getElementById("id1");
  let txt = "";
  let validity = num.validity;
  
  if (!num.checkValidity()) {
    if (validity.rangeOverflow) txt = "Value too large";
    else if (validity.rangeUnderflow) txt = "Value too small";
    else if (validity.stepMismatch) txt = "Invalid step";
    else if (validity.patternMismatch) txt = "Invalid pattern";
    else if (validity.valueMissing) txt = "Value required";
    else if (validity.typeMismatch) txt = "Invalid type";
    else if (validity.customError) txt = num.validationMessage;
  } else {
    txt = "Valid input";
  }
  
  // Tùy chỉnh thông báo lỗi
  num.setCustomValidity(txt === "Valid input" ? "" : txt);
  document.getElementById("demo").innerHTML = txt;
}

// --------------- CANVAS (chả ai vẽ bằng code đâu) ---------------

// ---------------- AJAX ---------------
// Hàm chung để gửi yêu cầu AJAX
function loadData(url, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) callback(this);
      else if (this.status == 403) alert("Forbidden");
      else if (this.status == 404) alert("Not Found");
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

// Gửi yêu cầu POST
function postData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "ajax_test.asp", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("fname=Henry&lname=Ford");
}

// Cập nhật nội dung bằng responseText
function updateText(xhttp) {
  document.getElementById("demo").innerHTML = xhttp.responseText;
}

// Xử lý dữ liệu XML
function loadXML(url) {
  loadData(url, function(xhttp) {
    var xmlDoc = xhttp.responseXML;
    var artists = xmlDoc.getElementsByTagName("ARTIST");
    var txt = "";
    for (var i = 0; i < artists.length; i++) {
      txt += artists[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
  });
}

// Lấy thông tin headers
function showHeaders() {
  loadData("ajax_info.txt", function(xhttp) {
    var allHeaders = xhttp.getAllResponseHeaders();
    var lastModified = xhttp.getResponseHeader("Last-Modified");
    document.getElementById("demo").innerHTML = 
      "All Headers:<br>" + allHeaders + "<br>Last-Modified: " + lastModified;
  });
}