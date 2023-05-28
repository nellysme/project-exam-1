const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const container = document.querySelector(".post-details");

const loadingCircle = document.querySelector(".loading-circle");

const url = "https://work.bynelly.no//wp-json/wp/v2/posts/" + id;




const modal = document.getElementById("modal-image");
const modalImage = document.getElementById("image");
const closeModal = document.getElementsByClassName("close")[0];





async function LoadingCircle() {
  loadingCircle.style.display = "block";
}

async function hideLoading() {
  loadingCircle.style.display = "none";
}


async function fetchPost() {

  try {

    LoadingCircle();

    const response = await fetch(url);
    const json = await response.json();

    container.innerHTML = `
      <h1 class="details-title">${json.title.rendered}</h1>
      <img class="details-image" src="${json.jetpack_featured_media_url}" alt="">
      <div class="details-description">${json.excerpt.rendered}</div>`;

    hideLoading();

   
    const detailsImage = document.querySelector(".details-image");
    
    detailsImage.addEventListener("click", function() {
      modal.style.display = "block";
      image.src = json.jetpack_featured_media_url;
      
    });

  
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });



  } catch (error) {
    console.error(error);
    hideLoading();
  }
}

fetchPost();
