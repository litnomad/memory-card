import { useState, useRef } from "react";
import "./App.css";
import { initialData } from "./data";

function App() {
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState(initialData);
  const [bestScore, setBestscore] = useState(0);
  let reference = useRef(null);

  function handleClick(event) {
    const updatedCard = cards.filter((card) => card.term === event.target.id);
    if (!updatedCard[0].hasClicked) {
      setCards(
        cards.map((card) => {
          if (updatedCard[0].term === card.term) {
            return { ...card, hasClicked: true };
          } else {
            return card;
          }
        }),
      );
      setScore(score + 1);
    } else {
      console.log("score", score, ">", reference.current, "?");
      if (score > reference.current) {
        reference.current = score;
        setBestscore(score);
      }

      setCards(initialData);
      setScore(0);
    }
  }

  console.log("after set score", score);
  console.log("after set cards", cards);

  return (
    <div className="container">
      <div className="score">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <div className="cards">
        {cards.map((card) => {
          return (
            <button key={card.term} id={card.term} onClick={handleClick}>
              {card.term}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
