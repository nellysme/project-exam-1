const url = "https://work.bynelly.no//wp-json/wp/v2/posts";
const resultsContainer = document.querySelector(".contentt");
const loadingCircle = document.querySelector(".loading-circle");

async function showLoadingCircle() {
  loadingCircle.style.display = "block";
}

async function hideLoadingCircle() {
  loadingCircle.style.display = "none";
}

async function getPost() {
  try {
    showLoadingCircle();

    const response = await fetch(url);
    const results = await response.json();

    const post = results;

    for (let i = 0; i != 12; i++) {


      resultsContainer.innerHTML += `


        <a href="detail.html?id=${post[i].id}" class="card">
          <img class="image" src="${post[i].jetpack_featured_media_url}"/>
          <h2 class="blog-title">${post[i].title.rendered}</h2>
        </a>

      `;
    }

    hideLoadingCircle();

    
  } catch (error) {
    console.error(error);
    hideLoadingCircle();
  }
}

getPost();
