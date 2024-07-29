import { board } from "./model";

import { startGame } from "./motor";

const startButton = document.getElementById("start");

export const handleClickButtons = () => {
  if (startButton && startButton instanceof HTMLButtonElement) {
    startButton.addEventListener("click", () => {
      startGame(board);
    });
  }
};
