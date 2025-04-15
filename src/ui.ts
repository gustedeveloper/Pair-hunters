import { GAME_OVER, board, Board } from "./model";

import { startGame, cardCanBeFlipped, flipCard } from "./motor";

import confetti from "canvas-confetti";

const startButton = document.getElementById("start");
const messageElement = document.getElementById("message");

board.cards.forEach((__, index) => {
  const divCard = document.querySelector(`div[data-index="${index}"]`);

  if (divCard && divCard instanceof HTMLDivElement) {
    divCard.addEventListener("click", () => {
      if (board.gameState === "GameNotStarted") {
        showMessage(board);
      }

      if (
        board.gameState !== "GameNotStarted" &&
        board.gameState !== "TwoCardsFlipped" &&
        board.gameState !== "GameOver"
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

  if (divCard && divCard instanceof HTMLElement) {
    divCard.classList.remove("flipped");

    setTimeout(() => {
      if (imgCardElement && imgCardElement instanceof HTMLImageElement) {
        imgCardElement.src = "";
      }
    }, 200);
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
    showMessage(board);
    launchFireworks();
  }
};

export const lostGame = () => {
  if (startButton && startButton instanceof HTMLButtonElement) {
    startButton.disabled = false;
    showMessage(board);
    setTimeout(() => {
      flipBackAllImg();
    }, 200);
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

export const showMessage = (board: Board) => {
  let message: string = "";
  switch (board.gameState) {
    case "GameNotStarted":
      message = "Press the button below to start the game!";
      break;
    case "ZeroCardsFlipped":
      message = "Try to hunt all the pairs!";
      break;
    case "GameCompleted":
      message = "Congratulations! You've hunted all the pairs!";
      break;
    case "GameOver":
      message = "Game over! You've run out of attempts. Try again?";
      break;
    default:
      message = "Something went wrong...";
      break;
  }
  if (messageElement && messageElement instanceof HTMLElement) {
    messageElement.innerHTML = message;
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

const launchFireworks = () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval: NodeJS.Timer = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );

    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};
