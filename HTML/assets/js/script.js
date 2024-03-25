 // This version is dyanmic and cloned items are inserted automatically. Also --tiles variable set by JS automatically.

// For Pure CSS version visit https://codepen.io/chiraggoyal777/pen/ZEVqwje

// Get all image carousels
const allImageCarousels = document.querySelectorAll("[data-rc-carousel]");

// For duplicating items and setting --tiles variable
allImageCarousels.forEach((carousel) => {
  const allItems = carousel.querySelectorAll("[data-rc-carousel-item]");
  allItems.forEach((item) => {
    // Prepare cloning each item
    const itemToClone = item.cloneNode(true);
    itemToClone.setAttribute("aria-hidden", "true");
    itemToClone.classList.add("cloned");
    // Insert cloned item here
    carousel
      .querySelector("[data-rc-carousel-box]")
      .insertAdjacentElement("beforeend", itemToClone);
  });
  // set --tiles variable to carousel
  carousel.style.setProperty("--tiles", allItems.length * 2);
});