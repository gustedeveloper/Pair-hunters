import { Board, board, Card, cards } from "./model";

export const shuffleCards = (cards: Card[]): Card[] => {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};

console.log(shuffleCards(cards));

const cardCanBeFlipped = (board: Board, index: number): boolean => {
  if (
    (board.cards[index].found === false &&
      board.cards[index].flipped === false) ||
    board.gameState !== "TwoCardsFlipped"
  ) {
    return true;
  }
  return false;
};

console.log(cardCanBeFlipped(board, 1));

/* const flipCard = (board: Board, index: number): void => {

} */

export const pairOfCards = (
  indexA: number,
  indexB: number,
  board: Board
): boolean => {
  if (board.cards[indexA].idCard === board.cards[indexB].idCard) {
    return true;
  }
  return false;
};

const foundPair = (board: Board, indexA: number, indexB: number): void => {
  board.cards[indexA].found = true;
  board.cards[indexB].found = true;

  //comprobar que la partida está completa, añadir función gameCompleted
};
