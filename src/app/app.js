import Nav from "./components/nav";
import InitModal from "./components/initModal";
import getCorrectCharacters from "./utils/characters";
import { useState } from "react";
import GameArea from "./components/gameArea";

const App = () => {
  const [isGameLive, setIsGameLive] = useState(false);
  const [gameData, setGameData] = useState({});

  const addStaticValuesToGameData = () => {
    setGameData((prevState) => ({
      ...prevState,
      name: "anon",
      timeStamps: {
        initial: null,
        end: null,
      },
    }));
  };

  const addCharactersToGameData = (num) => {
    const charObj = getCorrectCharacters(num);
    addStaticValuesToGameData();
    setGameData((prevState) => ({
      ...prevState,
      characters: { ...charObj },
    }));
  };

  const startGameOne = () => {
    setIsGameLive(true);
    addCharactersToGameData(1);
  };

  const startGameTwo = () => {
    setIsGameLive(true);
    addCharactersToGameData(2);
  };

  const endGame = () => {
    setIsGameLive(false);
    setGameData({});
  };

  return (
    <div id="app-container">
      <Nav endGame={endGame} />
      {!isGameLive ? (
        <InitModal startGameOne={startGameOne} startGameTwo={startGameTwo} />
      ) : (
        <GameArea gameData={gameData} />
      )}
    </div>
  );
};

export default App;
