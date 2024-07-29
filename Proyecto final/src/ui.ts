import { board, Board } from "./model";

import { startGame, cardCanBeFlipped, flipCard } from "./motor";

const startButton = document.getElementById("start");

board.cards.forEach((__, index) => {
  const divCard = document.querySelector(`div[data-index="${index}"]`);

  if (divCard && divCard instanceof HTMLDivElement) {
    divCard.addEventListener("click", () => {
      const canBeFlipped = checkIfCardCanBeFlipped(board, index);
      if (canBeFlipped === true) {
        flipCard(board, index);
      }
    });
  }
});

const checkIfCardCanBeFlipped = (board: Board, index: number): boolean => {
  return cardCanBeFlipped(board, index);
};

export const flipImgCard = (board: Board, index: number): void => {
  const imgCardElement = document.querySelector(`img[data-index="${index}"]`);

  const imgCard = board.cards[index].image;
  if (imgCardElement && imgCardElement instanceof HTMLImageElement) {
    imgCardElement.src = imgCard;
  }
};

export const handleClickButtons = () => {
  if (startButton && startButton instanceof HTMLButtonElement) {
    startButton.addEventListener("click", () => {
      startGame(board);
    });
  }
};
