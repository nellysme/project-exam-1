const url = "https://work.bynelly.no//wp-json/wp/v2/posts/";
const postsContainer = document.querySelector('.latest-posts');
const specificId = 38;
const loadingSpinner = document.querySelector('.loading-circle');

const imageSliderContainer = document.querySelector('.image-slider-container');
const images = imageSliderContainer.querySelectorAll('img');





loadingSpinner.style.display = 'block'; 

fetch(url + specificId)
  .then(response => response.json())
  .then(data => {
    const post = data;
    const innerContent = `
      <h2 class="everything-you">${post.title.rendered}</h2>
      ${post.excerpt.rendered}
      <div class="button-learn"><button class="button"><a href ="blog.html">Learn more</a></button></div>
    `;
    postsContainer.innerHTML += innerContent;
    console.log(data);

    loadingSpinner.style.display = 'none'; 






const imageSliderContainer = document.querySelector('.image-slider-container');
const images = imageSliderContainer.querySelectorAll('img');

let currentIndex = 0;
const slideWidth = images[0].clientWidth * 2;
const totalSlides = images.length;

function goToSlide(index) {
  imageSliderContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

function nextSlide() {
  if (currentIndex === totalSlides - 2) { 
    goToSlide(0);
  } else {
    goToSlide(currentIndex + 1);
  }
}

function previousSlide() {
  if (currentIndex === 0) {
    goToSlide(totalSlides - 2);
  } else {
    goToSlide(currentIndex - 1);
  }
}

document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.previous-button').addEventListener('click', previousSlide);


    
  });
  
