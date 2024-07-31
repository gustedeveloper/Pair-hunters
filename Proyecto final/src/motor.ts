import { Board, Card } from "./model";
import { flipImgCard, flipBackImg, flipBackAllImg } from "./ui";

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
  } else {
    return false;
  }
};

export const flipCard = (board: Board, index: number): void => {
  board.cards[index].flipped = true;
  flipImgCard(board, index);
  checkGameState(board, index);
};

const checkGameState = (board: Board, index: number): void => {
  if (
    board.indexFlippedCardA === undefined &&
    board.gameState === "ZeroCardsFlipped"
  ) {
    board.gameState = "OneCardFlipped";
    board.indexFlippedCardA = index;
  } else if (
    board.indexFlippedCardB === undefined &&
    board.gameState === "OneCardFlipped"
  ) {
    board.gameState = "TwoCardsFlipped";
    board.indexFlippedCardB = index;
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

  const isCompleted = gameCompleted(board);

  if (isCompleted === true) {
    board.gameState = "GameCompleted";
    console.log("CONGRATS! YOU MADE IT :)");
  } else {
    resetBoardFlippedCardIndex(board);
    resetGameState(board);
    console.log(board, indexA, indexB);
    console.log("Pair!");
  }
};

const pairNotFound = (board: Board, indexA: number, indexB: number): void => {
  console.log(board, indexA, indexB);
  console.log("Not pair!");
  setTimeout(() => {
    flipBackImg(indexA);
    flipBackImg(indexB);
  }, 1200);
  resetBoardFlippedCardIndex(board);
  resetGameState(board);
};

const resetBoardFlippedCardIndex = (board: Board): void => {
  board.indexFlippedCardA = undefined;
  board.indexFlippedCardB = undefined;
};

const resetGameState = (board: Board): void => {
  board.gameState = "ZeroCardsFlipped";
};

export const gameCompleted = (board: Board): boolean => {
  if (board.cards.every((card) => card.found === true)) {
    return true;
  } else {
    return false;
  }
};

export const startGame = (board: Board): void => {
  if (board.gameState === "GameCompleted") {
    flipBackAllImg();
  }
  board.cards = shuffleCards(board.cards);
  board.gameState = "ZeroCardsFlipped";
};
