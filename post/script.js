const maxImages = 10;
const maxVideoSize = 50; // MB
const maxVideos = 2;

const uploadImageBtn = document.querySelector(".upload-image");
const uploadVideoBtn = document.querySelector(".upload-video");
const imageUploadInput = document.getElementById("image-upload");
const videoUploadInput = document.getElementById("video-upload");

uploadImageBtn.addEventListener("click", () => {
  imageUploadInput.click();
});

uploadVideoBtn.addEventListener("click", () => {
  videoUploadInput.click();
});

imageUploadInput.addEventListener("change", (event) => {
  const files = event.target.files;
  if (files.length > maxImages) {
    alert(`Vui lòng chọn tối đa ${maxImages} hình ảnh.`);
    return;
  }

  // Thực hiện xử lý tải lên hình ảnh ở đây
});

videoUploadInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file.size > maxVideoSize * 1024 * 1024) {
    alert(`Vui lòng chọn video không quá ${maxVideoSize}MB.`);
    return;
  }

  const files = event.target.files;
  if (files.length > maxVideos) {
    alert(`Vui lòng chọn tối đa ${maxVideos} video.`);
    return;
  }

  // Thực hiện xử lý tải lên video ở đây
});
