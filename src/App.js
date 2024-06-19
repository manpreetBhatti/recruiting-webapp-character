import { useState, useEffect } from "react";
import "./App.css";
import Characters from "./Characters.js";

function App() {
  const [chars, setChars] = useState([
    {
      name: "character1",
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        {/* <button onClick={() => saveData()}>Save Character</button> */}
        <button
          onClick={() => {
            setChars([
              ...chars,
              {
                name: "character" + (chars.length + 1),
              },
            ]);
          }}
        >
          Add Character
        </button>
        {/* <div>
          Value:
          {num}
          <button>+</button>
          <button>-</button>
        </div> */}
        {chars.map((char) => {
          return <Characters key={char.name} name={char.name} />;
        })}
      </section>
    </div>
  );
}

export default App;
