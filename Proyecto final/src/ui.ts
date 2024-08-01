import { GAME_OVER, board, Board } from "./model";

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
          divCard.classList.add("flipped");
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
  const divCard = document.querySelector(`div[data-index="${index}"]`);
  const imgCardElement = document.querySelector(`img[data-index="${index}"]`);

  setTimeout(() => {
    if (imgCardElement && imgCardElement instanceof HTMLImageElement) {
      imgCardElement.src = "";
    }
  }, 200);

  if (divCard && divCard instanceof HTMLElement) {
    divCard.classList.remove("flipped");
  }
};

export const flipBackAllImg = () => {
  const allDivCard = document.querySelectorAll("div[data-index]");
  const imgElements = document.querySelectorAll("img[data-index]");

  setTimeout(() => {
    imgElements.forEach((img) => {
      if (img instanceof HTMLImageElement) {
        img.src = "";
      }
    });
  }, 200);

  allDivCard.forEach((div) => {
    div.classList.remove("flipped");
  });
};

export const winGame = () => {
  if (startButton && startButton instanceof HTMLButtonElement) {
    startButton.disabled = false;
    console.log("YOU WIN!");
    console.log(startButton.disabled);
  }
};

export const showNumberOfAttempts = () => {
  const attemptsElement = document.getElementById("attempts");
  if (attemptsElement && attemptsElement instanceof HTMLElement) {
    attemptsElement.innerHTML = `${board.attempts} of ${GAME_OVER}`;
  } else {
    console.error("showNumberOfAttempts: The element id attempts not found");
  }
};

export const handleClickButtons = () => {
  if (startButton && startButton instanceof HTMLButtonElement) {
    startButton.addEventListener("click", () => {
      startGame(board);
      startButton.disabled = true;
    });
  }
};
