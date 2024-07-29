import { Board, Card } from "./model";
import { flipImgCard } from "./ui";

export const shuffleCards = (cards: Card[]): Card[] => {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};

export const cardCanBeFlipped = (board: Board, index: number): boolean => {
  if (
    (board.cards[index].found === false &&
      board.cards[index].flipped === false) ||
    board.gameState !== "TwoCardsFlipped"
  ) {
    return true;
  }
  return false;
};

export const flipCard = (board: Board, index: number): void => {
  board.cards[index].flipped = true;
  flipImgCard(board, index);
  if (
    board.indexFlippedCardA === undefined &&
    board.gameState === "ZeroCardsFlipped"
  ) {
    board.gameState = "OneCardFlipped";
    console.log(board.gameState);
    board.indexFlippedCardA = board.cards[index].idCard;
    console.log(board.indexFlippedCardA);
  } else if (
    board.indexFlippedCardB === undefined &&
    board.gameState === "OneCardFlipped"
  ) {
    board.gameState = "TwoCardsFlipped";
    console.log(board.gameState);
    board.indexFlippedCardB = board.cards[index].idCard;
    console.log(board.indexFlippedCardB);
  }

  if (board.gameState === "TwoCardsFlipped") {
    if (board.indexFlippedCardA && board.indexFlippedCardB) {
      pairOfCards(board.indexFlippedCardA, board.indexFlippedCardB, board);
    }
  }
};

const pairOfCards = (indexA: number, indexB: number, board: Board): void => {
  if (indexA === indexB) {
    console.log(board);
  } else {
    console.log("It's not a pair!");
  }
};

/*const foundPair = (board: Board, indexA: number, indexB: number): void => {
  board.cards[indexA].found = true;
  board.cards[indexB].found = true;

  gameCompleted(board);

};

const pairNotFound = (board: Board, indexA: number, indexB: number): void => {

}

export const gameCompleted = (board: Board): boolen => {};

*/

export const startGame = (board: Board): void => {
  board.cards = shuffleCards(board.cards);
  board.gameState = "ZeroCardsFlipped";
};
