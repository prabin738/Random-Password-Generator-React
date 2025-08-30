import React, { useState } from "react";
import "./index.css";
import "./app.css";

const App = () => {
  let [uppercase, setUppercase] = useState(false);
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
          <input type="number" max={20} />
        </div>
        <div className="pass-length">
          <label>Include Uppercase letters</label>
          <input type="checkbox" />
        </div>
        <div className="pass-length">
          <label>Include Lowercase letters</label>
          <input type="checkbox" />
        </div>
        <div className="pass-length">
          <label>Include Numbers</label>
          <input type="checkbox" />
        </div>
        <div className="pass-length">
          <label>Include Symbols</label>
          <input type="checkbox" />
        </div>
        <button className="btn">Generate Password</button>
      </div>
    </>
  );
};

export default App;
