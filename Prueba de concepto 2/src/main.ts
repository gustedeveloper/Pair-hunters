import "./style.css";

const card = document.getElementById("card");
const cardImg = document.getElementById("card-img");

const flipCard = (): void => {
    if (cardImg && cardImg instanceof HTMLImageElement) {
    cardImg.src = "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true";
    }
}

card?.addEventListener("click", flipCard);
