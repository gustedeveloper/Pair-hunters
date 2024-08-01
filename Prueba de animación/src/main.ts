import "./style.css";

const card = document.getElementById("card");
const cardImg = document.getElementById("card-img");

card?.addEventListener("click", function () {
  card.classList.add("flipped");
  if (cardImg && cardImg instanceof HTMLImageElement) {
    cardImg.src =
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true";
  }
});
