const url =
  "https://perenual.com/api/v2/species-list?key=sk-HeE36835fdb93d3fc10694";
const resultsContainer = document.querySelector(".contentt");
const loadingCircle = document.querySelector(".loading-circle");

// Viser loading-indikatoren
function showLoadingCircle() {
  loadingCircle.style.display = "block";
}

// Skjuler loading-indikatoren
function hideLoadingCircle() {
  loadingCircle.style.display = "none";
}

// Henter og viser planter
async function getPost() {
  try {
    showLoadingCircle();

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP-feil: ${response.status}`);
    }

    const results = await response.json();
    const plants = results.data;

    //maks 12 planter
    const maxItems = Math.min(plants.length, 12);

    resultsContainer.innerHTML = ""; 

    for (let i = 0; i < maxItems; i++) {
      const plant = plants[i];
      const plantName = plant.common_name || "No name";
      const imageUrl = plant.default_image?.medium_url || "fallback.jpg";

      const cardHTML = `
        <a href="detail.html?id=${plant.id}" class="card">
          <img class="image" src="${imageUrl}" alt="${plantName}" />
          <h2 class="blog-title">${plantName}</h2>
        </a>
      `;
      resultsContainer.innerHTML += cardHTML;
    }
  } catch (error) {
    console.error("Kunne ikke hente planter:", error);
    resultsContainer.innerHTML =
      "<p>Kunne ikke laste inn planter. Prøv igjen senere.</p>";
  } finally {
    hideLoadingCircle();
  }
}

getPost();
