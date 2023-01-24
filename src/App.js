import { useState } from "react";
import "./styles.css";

var headingFirstName = "inside";
var headingSecondName = "Out!";
var color = "#ffcb4c";
const emojiDictionary = {
  "😊": "Smiling",
  "🙃": "Upside-Down face",
  "😞": "Sad",
  "🤗": "Hug",
  "❤️": "Heart",
  "📚": "Books",
  "👍": "Thumbs Up",
  "😑": "Annoy",
  "🫠": "Melting Face",
  "🎂": "Cake ",
  "⚽": "Football",
  "😕": "Confused"
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database 😕";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        {headingFirstName}{" "}
        <span style={{ color: color }}>{headingSecondName}</span>
      </h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h3>
        <span style={{ color: color }}>emojis</span> we know
      </h3>

      <div class="emojis" style={{ padding: "2rem" }}>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2rem",
                padding: "1.5rem ",
                marginBottom: "2rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>

      {/* <div class="hii"> Welcome {userInput} </div> */}
    </div>
  );
}
