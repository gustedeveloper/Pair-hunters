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

cardsData.forEach((card, index) => {
  const divCard = document.getElementById(`card${index}`);

  if (divCard && divCard instanceof HTMLDivElement) {
    divCard.addEventListener("click", () => {
      const imgCard = document.getElementById(`img${index}`);

      if (imgCard && imgCard instanceof HTMLImageElement) {
        imgCard.src = card.img;
      }
    });
  }
});