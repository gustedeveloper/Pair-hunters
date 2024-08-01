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
    image: "./src/images/1.png",
  },
  {
    idCard: 2,
    image: "./src/images/2.png",
  },
  {
    idCard: 3,
    image: "./src/images/3.png",
  },
  {
    idCard: 4,
    image: "./src/images/4.png",
  },
  {
    idCard: 5,
    image: "./src/images/5.png",
  },
  {
    idCard: 6,
    image: "./src/images/6.png",
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

export let attempts: number = 0;

export const GAME_OVER: number = 5;

export interface Board {
  cards: Card[];
  gameState: GameState;
  indexFlippedCardA?: number;
  indexFlippedCardB?: number;
}

const createInitialBoard = (): Board => ({
  cards: cards,
  gameState: "GameNotStarted",
});

export let board: Board = createInitialBoard();
