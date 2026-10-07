import { useState, useRef, useEffect } from "react";
import "./App.css";
import { initialData, shuffle } from "./data";

function Image({ term, handleClick }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=cjgVFDEd1F5mInM4Xg7sboKwnPM6Wmjc&s=${term}`,
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setImage(response.data.images.fixed_width.url);
      });
  }, [term]);

  return (
    <>
      <button
        id={term}
        onClick={handleClick}
        style={{ backgroundImage: "url(" + image + ")" }}
      ></button>
    </>
  );
}

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

  shuffle(cards);

  return (
    <div className="container">
      <header>
        <h1>Memory Card</h1>
        <p>
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </header>
      <div className="score">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <div className="cards">
        {cards.map((card) => {
          return (
            <Image
              key={card.term}
              term={card.term}
              handleClick={handleClick}
            ></Image>
          );
        })}
      </div>
    </div>
  );
}

export default App;
