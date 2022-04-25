import Nav from "./components/nav";
import InitModal from "./components/initModal";
import getCorrectCharacters from "./utils/characters";
import { useEffect, useState } from "react";
import GameArea from "./components/gameArea";

const App = () => {
  const [isGameLive, setIsGameLive] = useState(false);
  const [gameData, setGameData] = useState({});

  const addStaticValuesToGameData = (num) => {
    setGameData((prevState) => ({
      ...prevState,
      name: "anon",
      timeStamps: {
        start: null,
        end: null,
      },
      gameNum: num,
      image: null,
      time: 0,
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

  const resetGame = () => {
    setIsGameLive(false);
    setGameData({});
  };

  const startGame = () => {
    setIsGameLive(true);
    setStartTimestamp();
  };

  const incrementTime = () =>
    setGameData((prevState) => ({
      ...prevState,
      time: prevState.time + 1,
    }));

  const setStartTimestamp = () =>
    setGameData((prevState) => ({
      ...prevState,
      timeStamps: {
        ...prevState.timeStamps,
        start: Date.now(),
      },
    }));

  // wont use this until I begin working on the win-end logic
  // const setEndTimestamp = () =>
  //   setGameData((prevState) => ({
  //     ...prevState,
  //     timeStamps: {
  //       ...prevState.timeStamps,
  //       end: Date.now(),
  //     },
  //   }));

  useEffect(() => {
    let intervalId;
    if (isGameLive) {
      intervalId = setInterval(() => incrementTime(), 1000);
    }
    return () => clearInterval(intervalId);
  }, [isGameLive]);

  return (
    <div id="app-container">
      {!isGameLive ? (
        <InitModal startGameOne={startGameOne} startGameTwo={startGameTwo} />
      ) : (
        <div>
          <Nav
            resetGame={resetGame}
            characters={gameData.characters}
            time={gameData.time}
            gameData={gameData}
          />
          <GameArea
            gameData={gameData}
            changeCharacterFound={changeCharacterFound}
            startGame={startGame}
          />
        </div>
      )}
    </div>
  );
};

export default App;
