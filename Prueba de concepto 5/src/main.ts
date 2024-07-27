import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  createDivPerCard();
});

interface Cards {
  idCard: number;
  img: string;
}

const cards: Cards[] = [
  {
    idCard: 1,
    img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true",
  },
  {
    idCard: 2,
    img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true",
  },
  {
    idCard: 3,
    img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/3.png?raw=true",
  },
  {
    idCard: 4,
    img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/4.png?raw=true",
  },
  {
    idCard: 5,
    img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/5.png?raw=true",
  },
  {
    idCard: 6,
    img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/6.png?raw=true",
  },
  {
    idCard: 1,
    img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true",
  },
  {
    idCard: 2,
    img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true",
  },
  {
    idCard: 3,
    img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/3.png?raw=true",
  },
  {
    idCard: 4,
    img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/4.png?raw=true",
  },
  {
    idCard: 5,
    img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/5.png?raw=true",
  },
  {
    idCard: 6,
    img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/6.png?raw=true",
  },
];

const cardContainer = document.getElementById("card-container");

const createDivPerCard = (): void => {
  cards.forEach((card, index) => {
    const divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.id = `${index}`;
    cardContainer?.appendChild(divCard);
    divCard.addEventListener("click", () => {
      const cardImg = document.createElement("img");
      divCard.appendChild(cardImg);
      cardImg.id = `${index}`;
      cardImg.src = card.img;
    });
    return divCard;
  });
};
