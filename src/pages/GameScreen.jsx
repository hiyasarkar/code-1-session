import React from "react";
import { useLocation } from "react-router-dom";
import "./GameScreen.css";


const GameScreen = () => {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Unknown";

  return (
    <div className="background">
      <h1 className="title">
        Game Page
      </h1>
      <p style=
      {{ fontSize: "2.5rem", color: "#dcdcdc" }}
      >
        Selected Difficulty:{" "}
        <span style={{ color: "#fff", fontWeight: "bold"}}>{difficulty}</span>
      </p>
    </div>
  );
};

export default GameScreen;
