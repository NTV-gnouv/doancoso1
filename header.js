const textSearch = document.getElementById("text-search");
const elementSearch = document.querySelector(".card_search-container > ul");
fetch("http://localhost:3000/AllPost")
  .then((response) => response.json())
  .then((data) => {
    textSearch.addEventListener("input", function () {
      const value = textSearch.value;
      result(data, value);
    });
  })
  .catch((error) => {
    // Handle any errors

    console.error("Error:", error);
  });

function result(data, value) {
  let result = data.filter((item) => item.title.toLowerCase().includes(value));
  console.log(result);
  elementSearch.innerHTML = "";

  //   console.log(data.filter((item) => item.title.toLowerCase().includes(value)));
  result.forEach((element) => {
    if (value) {
      elementSearch.innerHTML += `
        <li><img src="${element.urlImage[0]}" alt="">
                    <div><p>${element.title}</p>
                    <p>${element.price} $</p></div></li>
        `;
    }
  });
}
