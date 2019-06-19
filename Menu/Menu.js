const toggleMenu = function() {
  menu.classList.toggle("menu--open");
  // Toggle the "menu--open" class on your menu reference.
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
console.log("hello", menu);
// create a reference to the ".menu-button" class

const menuButton = document.querySelector(".menu-button");
//console.log("btn", menuButton);
// menuButton.addEventListener("click", () => toggleMenu(menu));
menuButton.addEventListener("click", toggleMenu);
// Using your menuButton reference, add a click handler that calls toggleMenu
