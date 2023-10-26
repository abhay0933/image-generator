let imageSearch = document.querySelector(".ImageSearch");
let searchBtn = document.querySelector("#searchBtn");


searchBtn.addEventListener("click", () => {
  searchImage();
  setTimeout(searchImage, 1000)
});
// console.log(imageSearch);
async function searchImage() {
  // console.log(search_data);

  let data = await fetch(
    `https://api.unsplash.com/search/photos?query=${imageSearch.value}&client_id=dle-pRciumNIXKUg3pWav9Ye1DPeDGEXbO4sEcjHiOc`
  );
  // console.log(data);
  let item = await data.json();
  const img_data = item.results;
  // console.log(img_data);
  // console.log(item.results);
  let imageContainer = document.querySelector(".image-container");
  imageContainer.innerHTML= "";
  img_data.forEach(item => {
    console.log(item.urls.full);
    let newDiv = document.createElement("div");
    newDiv.classList.add("card");

    newDiv.innerHTML = `
        <img src=${item.urls.raw}/>`;

    imageContainer.appendChild(newDiv);
  });
  
}

