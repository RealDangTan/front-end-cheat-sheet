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
finally {
// Khối lệnh sẽ luôn được thực hiện
}

// --------------- LỚP ---------------
let me = {ten: "Phạm Dương Minh", email: "phamduongminh@mail.com", diachi: "207 Giải Phóng", tuoi: 22};
// tên-đối-tượng.tên-thuộc tính
// tên-đối-tượng[tên-thuộc tính]
//class không thể hoist
class SinhVien extends Nguoi{};
