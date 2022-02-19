// Add your custom JS here.

const navButton = document.querySelector('#navbarButton');
const mobileMenu = document.querySelector('#mobileMenu');

navButton.addEventListener('click', (e) => {
  e.stopPropagation();
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
  } else mobileMenu.classList.add('active');
});
