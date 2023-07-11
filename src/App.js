import React, { useState } from "react";
import "../src/App.css";
import Copy from "../src/copy.png";
import Github from "../src/github.png";

const App = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      setInputText((prevText) => prevText + " 🤸 ");
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="title"> 🤸 Beshify 🤸</h1>
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="input"
        />
        <button>
          <img src={Copy} alt="" className="copy" />
        </button>
      </div>
      <div className="footer">
        <h3>
          © Stephany Grace Tayong
          <div className="socmeds">
            <img src={Github} alt="" />
          </div>
        </h3>
      </div>
    </div>
  );
};

export default App;
