import React, { useEffect, useState } from "react";
import "./index.css";
import checkSpell from "./utils/spellchecker";

function App() {
  const [state, setState] = useState("");
  const [incorrectWords, setIncorrectWords] = useState([]);

  const handleChange = (e) => {
    setIncorrectWords(checkSpell(e.target.value));
    setState(e.target.value);
  };

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = (e) => {
    const outputTextArea = document.getElementsByClassName(
      "outputEditorContainer"
    )[0];
    if (e.keyCode === 32) {
      outputTextArea.innerHTML += `<span>&nbsp;</span>`;
    }
  };

  return (
    <>
      <div className="header">
        <h1 className="centerText">Spell Checker</h1>
      </div>
      <h2 className="centerText">
        {" "}
        Check your spell that tells you when you are using BASIC English
      </h2>
      <p className="centerText">
        The 850 words in
        <a href="http://ogden.basic-english.org/words.html"> BASIC English</a>
      </p>
      <div className="centerDiv parentEditorContainer">
        <div className="inputEditorContainer">
          <textarea
            className="textarea"
            id="spellchecker"
            name="spellchecker"
            value={state}
            onChange={handleChange}
          >
            {" "}
          </textarea>
          <label htmlFor="spellchecker">Text input</label>
        </div>
        <div className="outputEditorContainer">
          {state.split(" ").map((word, index) => {
            return incorrectWords.includes(word) ? (
              <span
                key={index}
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "red",
                  textDecorationStyle: "wavy",
                }}
              >
                {word}
              </span>
            ) : (
              <span key={index}>{word}</span>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

/*        
const data = `<span>write here...</span>
<div
          contentEditable="true"
          onInput={handleChange}
          dangerouslySetInnerHTML={{ __html: data }}
        ></div>*/

/*

/*
        <div>
          {state.split(" ").map((word, index) => {
            return incorrectWords.includes(word) ? (
              <span key={index} style={{ color: "red" }}>
                {word}
              </span>
            ) : (
              <span key={index}>{word}</span>
            );
          })}
        </div>
        */
