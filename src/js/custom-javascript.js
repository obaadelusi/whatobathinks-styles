// Add your custom JS here.

const navButton = document.querySelector('#navbarButton');
const mobileMenu = document.querySelector('#mobileMenu');

navButton.addEventListener('click', (e) => {
   e.stopPropagation();
   if (mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
   } else mobileMenu.classList.add('active');
});

// Live search function
const searchInput = document.querySelector('#posts-search');
const searchResults = document.querySelector('#search-results');
const loader = document.querySelector('#loader');
let timeout;

function displayPosts(data) {
   if (data.length > 0) {
      data.map((post) => {
         searchResults.innerHTML += `<a href="${post.link}" class="posts__search-results__link">${post.title.rendered}</a>`;
      });
   } else {
      searchResults.innerHTML = `<span class="posts__search-results__empty">No search results</span>`;
   }
}

function getPosts() {
   if (searchInput.value.length !== 0) {
      fetch(`${blogData.rootUrl}/wp-json/wp/v2/posts?search=${searchInput.value}`)
         .then((res) => res.json())
         .then((data) => displayPosts(data))
         .catch((e) => console.log('JS Error:', e));
   }
   return;
}

searchInput.addEventListener('input', () => {
   loader.classList.add('show');

   clearTimeout(timeout);
   timeout = setTimeout(() => {
      loader.classList.remove('show');
      searchResults.innerHTML = '';
      getPosts();
   }, 1000);
});

//
