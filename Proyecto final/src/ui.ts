import { board, Board } from "./model";

import { startGame, cardCanBeFlipped, flipCard } from "./motor";

const startButton = document.getElementById("start");

board.cards.forEach((__, index) => {
  const divCard = document.querySelector(`div[data-index="${index}"]`);

  if (divCard && divCard instanceof HTMLDivElement) {
    divCard.addEventListener("click", () => {
      if (board.gameState === "GameNotStarted") {
        console.log("Press the button below to start the game!");
      }

      if (
        board.gameState !== "GameNotStarted" &&
        board.gameState !== "TwoCardsFlipped"
      ) {
        const canBeFlipped = checkIfCardCanBeFlipped(board, index);
        if (canBeFlipped === true) {
          flipCard(board, index);
        }
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

export const flipBackImg = (index: number): void => {
  const imgCardElement = document.querySelector(`img[data-index="${index}"]`);

  if (imgCardElement && imgCardElement instanceof HTMLImageElement) {
    imgCardElement.src = "";
  }
};

export const flipBackAllImg = () => {
  const imgElements = document.querySelectorAll("img[data-index]");
  imgElements.forEach((img) => {
    if (img instanceof HTMLImageElement) {
      img.src = "";
    }
  });
};

export const handleClickButtons = () => {
  if (startButton && startButton instanceof HTMLButtonElement) {
    startButton.addEventListener("click", () => {
      startGame(board);
    });
  }
};
