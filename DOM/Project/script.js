const colorsContainer = document.querySelector(".colors");
const colorName = document.querySelector("#colorName");

colorsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("color")) {
    const color = e.target.id;
    document.body.style.backgroundColor = color;
    colorName.textContent = `Your Website Color: ${color}`;
  }
});
