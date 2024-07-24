import "./style.css";

interface CardsData {
    idCard: number,
    img: string
  }
  
  const cardsData : CardsData[] = [
    {
      idCard: 1,
      img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true"
    },
    {
      idCard: 2,
      img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true"
    }
  ]

  const cardsDivElements = document.querySelectorAll(".card");
  const cardsImgElements = document.querySelectorAll(".card-img");

  const cardsDiv = Array.from(cardsDivElements);
  const cardsImg = Array.from(cardsImgElements);

  let flippedCards : number[] = [];
  let clickedCardsImg : HTMLImageElement[] = [];

  cardsDiv.forEach((card) => {
      card.addEventListener("click", () => {
        const clickedCardId = cardsDiv.indexOf(card);
        flippedCards.push(clickedCardId);
        const imgElement = cardsImg[clickedCardId];
        if (imgElement instanceof HTMLImageElement) {
          imgElement.src = cardsData[clickedCardId].img;
          clickedCardsImg.push(imgElement);
      }

        const firstCardImg = clickedCardsImg[0];
        const secondCardImg = clickedCardsImg[1];

        if (firstCardImg instanceof HTMLImageElement && secondCardImg instanceof HTMLImageElement) {
          if (flippedCards.length === 2 && firstCardImg.src !== secondCardImg.src) {
            setTimeout(() => {
              clickedCardsImg.forEach(img => {
                img.src = "";
              })
              flippedCards = [];
              clickedCardsImg = [];
            }, 1500);
          }
        }
      });
  });