const url = "https://work.bynelly.no//wp-json/wp/v2/posts/";
const postsContainer = document.querySelector('.latest-posts');
const specificId = 38;
const loadingSpinner = document.querySelector('.loading-circle');

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

    

  });
  
