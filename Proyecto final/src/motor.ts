import { Board, Card } from "./model";
import { flipImgCard, flipBackImg } from "./ui";

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
    board.indexFlippedCardA = index;
    console.log(board.indexFlippedCardA);
  } else if (
    board.indexFlippedCardB === undefined &&
    board.gameState === "OneCardFlipped"
  ) {
    board.gameState = "TwoCardsFlipped";
    console.log(board.gameState);
    board.indexFlippedCardB = index;
    console.log(board.indexFlippedCardB);
  }

  if (board.gameState === "TwoCardsFlipped") {
    if (
      board.indexFlippedCardA !== undefined &&
      board.indexFlippedCardB !== undefined
    ) {
      const itsPair = pairOfCards(
        board.indexFlippedCardA,
        board.indexFlippedCardB,
        board
      );
      if (itsPair === true) {
        foundPair(board, board.indexFlippedCardA, board.indexFlippedCardB);
      } else if (itsPair === false) {
        pairNotFound(board, board.indexFlippedCardA, board.indexFlippedCardB);
      }
    }
  }
};

const pairOfCards = (indexA: number, indexB: number, board: Board): boolean => {
  if (board.cards[indexA].idCard === board.cards[indexB].idCard) {
    return true;
  } else {
    return false;
  }
};

const foundPair = (board: Board, indexA: number, indexB: number): void => {
  board.cards[indexA].found = true;
  board.cards[indexB].found = true;
  console.log(board, indexA, indexB);
  console.log("Pair!");
};

const pairNotFound = (board: Board, indexA: number, indexB: number): void => {
  console.log(board, indexA, indexB);
  console.log("Not pair!");
  setTimeout(() => {
    flipBackImg(indexA);
    flipBackImg(indexB);
  }, 2000);
};

//export const gameCompleted = (board: Board): boolean => {};

export const startGame = (board: Board): void => {
  board.cards = shuffleCards(board.cards);
  board.gameState = "ZeroCardsFlipped";
};
