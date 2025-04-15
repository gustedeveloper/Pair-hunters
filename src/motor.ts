import { Board, Card, GAME_OVER } from "./model";
import {
  flipImgCard,
  flipBackImg,
  flipBackAllImg,
  winGame,
  showMessage,
  showNumberOfAttempts,
  lostGame,
} from "./ui";

export const shuffleCards = (cards: Card[]): Card[] => {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};

export const cardCanBeFlipped = (board: Board, index: number): boolean => {
  if (
    board.indexFlippedCardA === index &&
    board.gameState === "OneCardFlipped"
  ) {
    return false;
  }
  if (board.cards[index].found === true) {
    return false;
  }

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
      itsPair === true
        ? foundPair(board, board.indexFlippedCardA, board.indexFlippedCardB)
        : pairNotFound(board, board.indexFlippedCardA, board.indexFlippedCardB);
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
    winGame();
  } else {
    setTimeout(() => {
      resetGameState(board);
    }, 1500);
    resetBoardFlippedCardIndex(board);
  }
};

const pairNotFound = (board: Board, indexA: number, indexB: number): void => {
  setTimeout(() => {
    flipBackImg(indexA);
    flipBackImg(indexB);
  }, 1000);
  setTimeout(() => {
    board.cards[indexA].flipped = false;
    board.cards[indexB].flipped = false;
    resetBoardFlippedCardIndex(board);
    resetGameState(board);
    board.attempts++;
    showNumberOfAttempts();
    gameOver(board);
  }, 1500);
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

export const gameOver = (board: Board): void => {
  if (board.attempts >= GAME_OVER) {
    board.gameState = "GameOver";
    lostGame();
  }
};

const resetBoard = (board: Board): void => {
  board.cards.forEach((card) => {
    card.flipped = false;
    card.found = false;
  });
  board.gameState = "ZeroCardsFlipped";
  board.attempts = 0;
  board.indexFlippedCardA = undefined;
  board.indexFlippedCardB = undefined;
};

export const startGame = (board: Board): void => {
  resetBoard(board);
  showMessage(board);
  showNumberOfAttempts();
  flipBackAllImg();
  board.cards = shuffleCards(board.cards);
};
