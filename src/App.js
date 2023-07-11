import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import EmojiPicker from "emoji-picker-react";
import "react-toastify/dist/ReactToastify.css";
import copyIcon from "../src/copy.png";
import githubIcon from "../src/github.png";
import clearIcon from "../src/erase.png";
import "../src/App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState("🤸");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputText);
    toast.success("Text copied!");
  };

  const handleEmojiClick = (emojiObject) => {
    const { emoji } = emojiObject;
    setInputText((prevText) => prevText + emoji);
    setChosenEmoji(emoji);
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      setInputText((prevText) => prevText + chosenEmoji);
    }
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleClearInput = () => {
    setInputText("");
  };

  return (
    <div className='container'>
      <div>
        <h1 className='title'>🤸 Beshify 🤸</h1>
      </div>
      <div className='body-beshify'>
        <button className='emoji-picker' onClick={toggleEmojiPicker}>
          {chosenEmoji || "Choose Emoji"}
        </button>
        <input
          type='text'
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className='input'
        />
        <button onClick={handleCopyClick} className='btn-copy'>
          <img src={copyIcon} alt='Copy' className='copy' />
        </button>
        <button onClick={handleClearInput} className='btn-clear'>
          <img src={clearIcon} alt='Clear' className='clear' />
        </button>
      </div>
      <div className='show-emojipicker'>
        {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
      </div>
      <div className='footer'>
        <a
          href='https://github.com/stephanygrace'
          target='_blank'
          rel='noreferrer'>
          <img src={githubIcon} alt='GitHub' />
        </a>
        <span>Stephany Grace Tayong</span>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default App;
