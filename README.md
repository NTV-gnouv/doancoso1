# Hướng dẫn mở source code website công thức nấu ăn

Đây là hướng dẫn để mở source code của website công thức nấu ăn bằng Visual Studio Code (VSCode).

## Yêu cầu

- Đã cài đặt phần mềm VSCode trên máy tính của bạn.

## Cách làm

1. Tải source code web về máy tính của bạn.
2. Mở **VSCode** và chọn _"File"_ -> _"Open Folder"_ để mở thư mục chứa source code.
3. Mở file `data.json` trong thư mục và mở _Terminal_ của VSCode.

   - Để chạy file `data.json` sử dụng lệnh sau: `json-server --watch data.json`.
   - Lưu ý: Nếu bạn chưa cài đặt _json-server_, vui lòng cài đặt bằng lệnh: `npm install -g json-server`.
   - Bạn có thể tham khảo cách cài đặt _json-server_ tại [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server).

4. Chạy file `baidang.html` để xem website công thức nấu ăn.

Đó là tất cả! Bây giờ bạn đã có thể mở source code và chạy website công thức nấu ăn trên máy tính của mình bằng VSCode.
