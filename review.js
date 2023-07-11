const post = document.querySelector(".container_post");
const cardCount = document.getElementById("card-count");
const cardTotal = document.getElementById("card-total");

let dataList = [];
let dataIngredient = 0;
let displayedCount = 0;
var myVariable = "";
let detailTable = document.createElement("div");
detailTable.className = "Detail_recipe_table";
function displayNumber() {
  cardCount.innerText = displayedCount;
  cardTotal.innerText = dataList.length;
}
function increaseCard() {
  let locationArray = 0;
  dataList.slice(displayedCount).forEach((item) => {
    if (locationArray < 4) {
      post.innerHTML += `<div class="card_post" onclick="handleCl('${item.id}')">
      <img
        src="${item.urlImage[0]}"
        alt="${item.title}"
      />
      <div class="paragraph-container1">
      <h6 class="title_p_post paragraph-content1">${item.title}</h6>
      </div>
      <div class="paragraph-container">
      <p class="paragraph-content">
      ${item.describe}
      </p>
      </div>
      <div class="button_post">
      <span>
        <i class="fa-solid fa-circle-exclamation"></i>
        Xem ngay
      </span> 
      <span>
        <i class="fa-solid fa-cart-shopping"></i>
        <a>Mua ngay ${item.price} $</a>
      </span>
      </div>
      <div class="div_author">
        <img src="${item.urlAvata}" alt="avatar" />
        <h6>${item.name}</h6>
      </div>
    </div>`;
      locationArray++;
    }
  });
  displayedCount = displayedCount + 4;

  console.log(displayedCount);
  if (displayedCount > dataList.length) {
    displayedCount = dataList.length;
  }
  displayNumber();
}

fetch("http://localhost:3000/AllPost")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    dataList = data.sort(() => Math.random() - 0.5); //thinking
    console.log(dataList);
    console.log(data[0].id);
    dataList.forEach((item) => {
      if (displayedCount < 8) {
        post.innerHTML += `<div class="card_post" onclick="handleCl('${item.id}')">
        <img
          src="${item.urlImage[0]}"
          alt="${item.title}"
        />
        <div class="paragraph-container1">
        <h6 class="title_p_post paragraph-content1">${item.title}</h6>
        </div>
        <div class="paragraph-container">
        <p class="paragraph-content">
        ${item.describe}
        </p>
        </div>
        <div class="button_post">
        <span>
          <i class="fa-solid fa-circle-exclamation"></i>
          Xem ngay
        </span> 
        <span>
          <i class="fa-solid fa-cart-shopping"></i>
          <a>Mua ngay ${item.price} $</a>
        </span>
        </div>
        <div class="div_author">
          <img src="${item.urlAvata}" alt="avatar" />
          <h6>${item.name}</h6>
        </div>
      </div>`;
        displayedCount++;
      }
    });
    displayNumber();
    // const cardPost = document.querySelectorAll(".card_post");
    // console.log(cardPost);
    // cardPost.forEach(handleClick(item));
  })
  .catch((error) => {
    console.log(error);
    // Xử lý lỗi ở đây
  });

function seeDetails() {}
document.addEventListener("click", function (e) {
  var myDiv = document.getElementById("myDiv");
  // Kiểm tra nếu người dùng đã nhấp vào nơi không phải là div và không phải là button
  if (!myDiv.contains(e.target)) {
    myDiv.style.display = "none"; // Ẩn div
  }
});

data.ingredient.forEach((element) => {
  detailTable.innerHTML += `<div class="detail_recipe_table">
                <span> ${element.ingredient} </span>
                <span> ${element.quantity} </span>
            </div>`;
});
myDiv.innerHTML = `<div class="recipe_detail-post-div">
            <img
            src="${data.urlImage[0]}"
            alt=""
          />
          <div class="title_post">
            <h5>${data.title}</h5>
          </div>
          <div>
            <div class="user_post">
              <img src="${data.urlAvata}" alt="" />
              <div>
                <h5>${data.name}</h5>
                <p class="data_user">
                  <span id="soCongThuc">98</span> công thức,
                  <span id="soNguoiTheoDoi">61</span> người theo dõi
                </p>
              </div>
            </div>
          </div>
          <p>
          ${data.describe}
          </p>
          <div class="mainDetail_recipe_table">
          ${detailTable.innerHTML}
            </div>
          </div>
          <div class="steps_recipe">
            <h5>Bước làm</h5>
            <span>
            ${data.steps}
            </span>
          </div>
            </div>`;

function handleCl(params) {
  window.location.href = "/review/reviewpost.html?id=" + params;
  console.log(params);
}
