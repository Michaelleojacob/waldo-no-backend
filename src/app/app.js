import Nav from "./components/nav";
import InitModal from "./components/initModal";
import getCorrectCharacters from "./utils/characters";
import { useState } from "react";
import GameArea from "./components/gameArea";

const App = () => {
  const [isGameLive, setIsGameLive] = useState(false);
  const [gameData, setGameData] = useState({});

  const addStaticValuesToGameData = (num) => {
    setGameData((prevState) => ({
      ...prevState,
      name: "anon",
      timeStamps: {
        initial: null,
        end: null,
      },
      gameNum: num,
    }));
  };

  const addCharactersToGameData = (num) => {
    const charObj = getCorrectCharacters(num);
    addStaticValuesToGameData(num);
    setGameData((prevState) => ({
      ...prevState,
      characters: { ...charObj },
    }));
  };

  const changeCharacterFound = (characterNum) => {
    setGameData((prevState) => ({
      ...prevState,
      characters: {
        ...prevState.characters,
        [characterNum]: {
          ...prevState.characters[characterNum],
          found: true,
        },
      },
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
        <GameArea
          gameData={gameData}
          changeCharacterFound={changeCharacterFound}
        />
      )}
    </div>
  );
};

export default App;
