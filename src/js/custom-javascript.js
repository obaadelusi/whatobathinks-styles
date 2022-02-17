// Add your custom JS here.
const navButton = document.getElementById('navbarButton');
const mobileMenu = document.getElementById('mobileMenu');

navButton.addEventListener('click', () => {
  if (mobileMenu.style.display == 'none') {
    mobileMenu.style.display == 'block';
  } else mobileMenu.style.display == 'none';
  console.log(mobileMenu);
});
