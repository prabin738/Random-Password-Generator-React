import React, { use, useState } from "react";
import "./index.css";
import "./app.css";
import { LC, NC, SC, UC } from "./data/PassChar";

const App = () => {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [number, setNumber] = useState(false);

  //password length
  let [passwordlen, setPasswordlen] = useState(10);
  let [fpass, setFpass] = useState("");

  //function and check if else to check wheather checkmark is on or not

  let createPassword = () => {
    let finalPass = "";
    let charSet = "";
    // alert("clicked");
    if (uppercase || lowercase || number || symbol) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;
      // console.log(charSet);

      //for loop to generate password
      for (let i = 0; i < passwordlen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
        // console.log(finalPass);
        setFpass(finalPass);
      }
    } else {
      alert("At least check one checkbox...");
    }
  };

  return (
    <>
      <div className="passwordBox">
        <h2>Random Password Generator</h2>
        <div className="passwordboxin">
          <input type="text" readOnly />
          <button>Copy</button>
        </div>
        <div className="pass-length">
          <label>Password Length</label>
          <input
            type="number"
            value={passwordlen}
            onChange={(event) => setPasswordlen(event.target.value)}
            max={20}
            min={10}
          />
        </div>
        <div className="pass-length">
          <label>Include Uppercase letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>
        <div className="pass-length">
          <label>Include Lowercase letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>
        <div className="pass-length">
          <label>Include Symbols</label>
          <input
            type="checkbox"
            checked={symbol}
            onChange={() => setSymbol(!symbol)}
          />
        </div>
        <div className="pass-length">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>

        <button className="btn" onClick={createPassword}>
          Generate Password
        </button>
      </div>
    </>
  );
};

export default App;
