export interface Card {
  idCard: number;
  image: string;
  flipped: boolean;
  found: boolean;
}

interface CardData {
  idCard: number;
  image: string;
}

const cardsData: CardData[] = [
  {
    idCard: 1,
    image: "./images/1.png",
  },
  {
    idCard: 2,
    image: "./images/2.png",
  },
  {
    idCard: 3,
    image: "./images/3.png",
  },
  {
    idCard: 4,
    image: "./images/4.png",
  },
  {
    idCard: 5,
    image: "./images/5.png",
  },
  {
    idCard: 6,
    image: "./images/6.png",
  },
];

const createInitialCard = (idCard: number, image: string): Card => ({
  idCard,
  image,
  flipped: false,
  found: false,
});

const createInitialCardColection = (cardsData: CardData[]): Card[] => {};
