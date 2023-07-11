import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import EmojiPicker from "emoji-picker-react";
import "react-toastify/dist/ReactToastify.css";
import "../src/App.css";
import Copy from "../src/copy.png";
import Github from "../src/github.png";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(" 🤸 ");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputText);
    toast.success("Text copied!");
  };

  const handleEmojiClick = (emojiObject) => {
    setInputText((prevText) => prevText + emojiObject.emoji);
    setChosenEmoji(emojiObject.emoji);
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      setInputText((prevText) => prevText + chosenEmoji);
    }
  };

  return (
    <div className='container'>
      <div>
        <h1 className='title'> 🤸 Beshify 🤸</h1>
      </div>
      <div className='body-beshify'>
        <button
          className='emoji-picker'
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
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
          <img src={Copy} alt='' className='copy' />
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
          <img src={Github} alt='' />
        </a>
        <span> Stephany Grace Tayong </span>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default App;
