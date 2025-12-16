import React from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import "./StartScreen.css";

const StartScreen = () => {
  const navigate = useNavigate();

  const handleDifficultySelect = (difficulty) => {
    navigate("/game", { state: { difficulty } });
  };

  return (
    <div className="fullpage">
    <div className="container">
      {/* <h1 className="title">Welcome to the Game!</h1> */}


    <div className="title">
  <Typewriter
    options={{
      strings: ['Welcome to the Game!'],
      autoStart: true,
      loop: true,
    }}
  />
</div>


      <p className="subtitle">Select your difficulty level to start:</p>
      <div className="buttonContainer">
        <button
          className="button"
          onClick={() => handleDifficultySelect("Easy")}
        >
          Easy
        </button>
        <button
          className="button"
          onClick={() => handleDifficultySelect("Medium")}
        >
          Medium
        </button>
        <button
          className="button"
          onClick={() => handleDifficultySelect("Hard")}
        >
          Hard
        </button>
      </div>
    </div>
    </div>
  );
};

export default StartScreen;
