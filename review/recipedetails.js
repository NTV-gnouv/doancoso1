const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
const productId = urlParams.get("id");
console.log(productId);
const cardContainer = document.querySelector(".recipe_detail-post-div");
let detailTable = document.createElement("div");
detailTable.className = "Detail_recipe_table";
fetch("http://localhost:3000/AllPost/" + productId)
  .then((response) => response.json())
  .then((data) => {
    // Do something with the data
    console.log(data);
    data.ingredient.forEach((element) => {
      detailTable.innerHTML += `<div class="detail_recipe_table">
            <span> ${element.ingredient} </span>
            <span> ${element.quantity} </span>
        </div>`;
    });
    cardContainer.innerHTML = `
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
  </div>`;
  })
  .catch((error) => {
    // Handle any errors
    console.error("Error:", error);
  });
