import img1Url from "./assets/images/1.png";
import img2Url from "./assets/images/2.png";
import img3Url from "./assets/images/3.png";
import img4Url from "./assets/images/4.png";
import img5Url from "./assets/images/5.png";
import img6Url from "./assets/images/6.png";

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
    image: img1Url,
  },
  {
    idCard: 2,
    image: img2Url,
  },
  {
    idCard: 3,
    image: img3Url,
  },
  {
    idCard: 4,
    image: img4Url,
  },
  {
    idCard: 5,
    image: img5Url,
  },
  {
    idCard: 6,
    image: img6Url,
  },
];

const createInitialCard = (idCard: number, image: string): Card => ({
  idCard,
  image,
  flipped: false,
  found: false,
});

const createInitialCardColection = (cardsData: CardData[]): Card[] => {
  let cards: Card[] = [];
  while (cards.length < 12) {
    cardsData.forEach((card) => {
      cards.push(createInitialCard(card.idCard, card.image));
      cards.push(createInitialCard(card.idCard, card.image));
    });
  }
  return cards;
};

export let cards: Card[] = createInitialCardColection(cardsData);

type GameState =
  | "GameNotStarted"
  | "ZeroCardsFlipped"
  | "OneCardFlipped"
  | "TwoCardsFlipped"
  | "GameCompleted"
  | "GameOver";

export const GAME_OVER: number = 10;

export interface Board {
  cards: Card[];
  gameState: GameState;
  attempts: number;
  indexFlippedCardA?: number;
  indexFlippedCardB?: number;
}

const createInitialBoard = (): Board => ({
  cards: cards,
  gameState: "GameNotStarted",
  attempts: 0,
});

export let board: Board = createInitialBoard();
