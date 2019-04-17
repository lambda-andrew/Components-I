
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu reference. 
  let hamburger = document.querySelectorAll('.menu--open');
  
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelectorAll('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelectorAll('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu());