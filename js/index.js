const url = "https://perenual.com/api/v2/species/details/";
const postsContainer = document.querySelector(".latest-posts");
const specificId = 38;
const loadingSpinner = document.querySelector(".loading-circle");

const imageSliderContainer = document.querySelector(".image-slider-container");
const images = imageSliderContainer.querySelectorAll("img");

loadingSpinner.style.display = "block";

fetch(url + specificId + "?key=sk-HeE36835fdb93d3fc10694")
  .then((response) => response.json())
  .then((data) => {
    const post = data;

    const innerContent = `
      <h2 class="everything-you">${post.common_name}</h2>
      <p>${post.description || "No description available."}</p>
      <div class="button-learn"><button class="button"><a href ="blog.html">Learn more</a></button></div>
    `;
    postsContainer.innerHTML += innerContent;
    console.log(data);

    loadingSpinner.style.display = "none";

    // Image slider logikk
let currentIndex = 0;
const imagesPerPage = 4;
const totalImages = images.length;

// Beregn total mulig scroll (runder ned hvis ikke nok til ny full gruppe)
const maxIndex = Math.ceil(totalImages / imagesPerPage) - 1;

function goToGroup(index) {
  const slideWidth = imageSliderContainer.clientWidth / imagesPerPage;
  currentIndex = index;

  if (currentIndex > maxIndex) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = maxIndex;
  }

  const offset = currentIndex * slideWidth * imagesPerPage;
  imageSliderContainer.style.transform = `translateX(-${offset}px)`;
}

function nextGroup() {
  goToGroup(currentIndex + 1);
}

function prevGroup() {
  goToGroup(currentIndex - 1);
}

document.querySelector(".next-button").addEventListener("click", nextGroup);
document.querySelector(".previous-button").addEventListener("click", prevGroup);


// Initial visning
goToGroup(0);

  });
