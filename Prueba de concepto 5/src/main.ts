import "./style.css";

const cards : number[] = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

interface CardsData {
    idCard: number,
    img: string
}

const cardsData : CardsData[] = [
    {
        idCard: 0,
        img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true"
    },
    {
        idCard: 1,
        img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true"
    },
    {   
        idCard: 2,
        img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/3.png?raw=true"
    },
    {
        idCard: 3,
        img: "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/4.png?raw=true"
    }
]



cards.forEach((card, index) => {
    const divCard = document.getElementById(`card${index}`);
    
    if (divCard && divCard instanceof HTMLDivElement) {
      divCard.addEventListener("click", () => {
        const imgCard = document.getElementById(`img${index}`);

      if (imgCard && imgCard instanceof HTMLImageElement) {
        imgCard.src = cardsData[card].img;
        console.log(card);
      }

      });
    }
  });