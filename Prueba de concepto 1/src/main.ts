import "./style.css";

// Prueba de concepto 1: barajar las cartas

const shuffleCards = (array : string[]): string[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
    const cards : string[] = ["🦁", "🦁", "🐷", "🐷", "🐝", "🐝", "🦉", "🦉", "🐔", "🐔", "🐶", "🐶"];
  
  console.log(shuffleCards(cards));
  console.log(shuffleCards(cards));
  console.log(shuffleCards(cards));  