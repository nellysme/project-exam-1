const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const container = document.querySelector(".post-details");
const loadingCircle = document.querySelector(".loading-circle");

const modal = document.getElementById("modal-image");
const modalImage = document.getElementById("image");
const closeModal = document.getElementsByClassName("close")[0];

const url = `https://perenual.com/api/species/details/${id}?key=sk-HeE36835fdb93d3fc10694`;

function showLoading() {
  loadingCircle.style.display = "block";
}

function hideLoading() {
  loadingCircle.style.display = "none";
}

async function fetchPlantDetails() {
  try {
    showLoading();

    const response = await fetch(url);
    const plant = await response.json();

    container.innerHTML = `
      <h1 class="details-title">${plant.common_name || "No name"}</h1>
      <img class="details-image" src="${
        plant.default_image?.original_url || "fallback.jpg"
      }" alt="${plant.common_name}">
      <div class="details-description">
        <p><strong>Scientific name:</strong> ${
          plant.scientific_name || "Unknown"
        }</p>
        <p><strong>Watering:</strong> ${plant.watering || "Unknown"}</p>
        <p><strong>Sunlight:</strong> ${
          plant.sunlight?.join(", ") || "Unknown"
        }</p>
        <p><strong>Description:</strong> ${
          plant.description || "No description available."
        }</p>
      </div>
    `;

    hideLoading();

    const detailsImage = document.querySelector(".details-image");

    detailsImage.addEventListener("click", function () {
      modal.style.display = "block";
      modalImage.src = plant.default_image?.original_url || "fallback.jpg";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });
  } catch (error) {
    console.error(error);
    container.innerHTML = "<p>Oops! Noe gikk galt. Prøv igjen senere.</p>";
    hideLoading();
  }
}

fetchPlantDetails();
