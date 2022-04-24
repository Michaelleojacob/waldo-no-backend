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
      image: null,
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

  const addImageToGameData = (imageLink) => {
    setGameData((prevState) => ({
      ...prevState,
      image: imageLink,
    }));
  };

  const startGameOne = () => {
    setIsGameLive(true);
    addCharactersToGameData(1);
    addImageToGameData("/assets/images/egor-klyuchnyk-full-x-season-web.jpg");
  };

  const startGameTwo = () => {
    setIsGameLive(true);
    addCharactersToGameData(2);
    addImageToGameData("/assets/images/egor-klyuchnyk-small.jpg");
  };

  const endGame = () => {
    setIsGameLive(false);
    setGameData({});
  };

  return (
    <div id="app-container">
      {!isGameLive ? (
        <InitModal startGameOne={startGameOne} startGameTwo={startGameTwo} />
      ) : (
        <div>
          <Nav endGame={endGame} characters={gameData.characters} />
          <GameArea
            gameData={gameData}
            changeCharacterFound={changeCharacterFound}
          />
        </div>
      )}
    </div>
  );
};

export default App;
