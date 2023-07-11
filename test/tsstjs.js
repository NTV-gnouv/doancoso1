// Khởi tạo một mảng để lưu trữ các ID bài viết đã tạo
var danhSachID = [];

// Hàm kiểm tra xem ID đã tồn tại hay chưa
function kiemTraTonTai(ID) {
  return danhSachID.includes(ID);
}
// Hàm tạo ID bài viết
function taoIDBaiViet() {
  console.log(danhSachID);
  var id = "";
  var characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  do {
    // Tạo ID ngẫu nhiên với độ dài 10 ký tự
    for (var i = 0; i < 25; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }
  } while (kiemTraTonTai(id)); // Kiểm tra nếu ID đã tồn tại thì tạo lại

  console.log(id);

  return id;
}

fetch("http://localhost:3000/AllPost")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((item) => {
      danhSachID.push(item.id);
    });
  })
  .catch((error) => {
    console.log(error);
    // Xử lý lỗi ở đây
  });
