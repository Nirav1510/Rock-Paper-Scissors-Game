import React, { useState, useEffect } from "react";

const Game = ({ myChoice, score, setScore }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setplayerWin] = useState("");

  //random choice taken by opponent
  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  return <div className="game">Game</div>;
};

export default Game;
