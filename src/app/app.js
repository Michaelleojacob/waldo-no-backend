import Nav from "./components/nav";
import InitModal from "./components/initModal";
import getCorrectCharacters from "./utils/characters";
import { useState } from "react";
import GameArea from "./components/gameArea";

const App = () => {
  const [isGameLive, setIsGameLive] = useState(false);
  const [gameData, setGameData] = useState({});

  // useEffect(() => {
  //   let hour = Math.floor(gameData.timer / 3600);
  //   let minute = Math.floor((gameData.timer - hour * 3600) / 60);
  //   let seconds = gameData.timer - (hour * 3600 + minute * 60);
  //   if (hour < 10) hour = "0" + hour;
  //   if (minute < 10) minute = "0" + minute;
  //   if (seconds < 10) seconds = "0" + seconds;
  //   sethhmmss(`${hour}:${minute}:${seconds}`);
  //   console.log(startTimer);
  // }, [gameData.timer]);

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
      hhmmss: null,
      gameActive: false,
    }));
  };

  // const incrementTimer = () =>
  //   setGameData((prevState) => ({
  //     ...prevState,
  //     timer: prevState.timer + 1,
  //   }));

  // const startTimer = () => setInterval(incrementTimer, 1000);

  // const clearTimer = () => {
  //   clearInterval(startTimer);
  //   clearInterval(incrementTimer);
  //   clearTimeout(startTimer);
  //   clearTimeout(incrementTimer);

  //   sethhmmss(null);
  // };

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
    forceGameInactive();
  };

  const forceGameActive = () =>
    setGameData((prevState) => ({
      ...prevState,
      gameActive: true,
    }));

  const forceGameInactive = () =>
    setGameData((prevState) => ({
      ...prevState,
      gameActive: false,
    }));

  const incrementhhmmss = () =>
    setGameData((prevState) => ({
      ...prevState,
      hhmmss: prevState.hhmmss + 1,
    }));

  const sethhmmss = (newTime) =>
    setGameData((prevState) => ({
      ...prevState,
      hhmmss: newTime,
    }));

  return (
    <div id="app-container">
      {!isGameLive ? (
        <InitModal startGameOne={startGameOne} startGameTwo={startGameTwo} />
      ) : (
        <div>
          <Nav
            endGame={endGame}
            characters={gameData.characters}
            time={gameData.hhmmss}
            incrementhhmmss={incrementhhmmss}
            gameActive={gameData.gameActive}
            sethhmmss={sethhmmss}
            timer={gameData.hhmmss}
            // remove gameData once done testing
            gameData={gameData}
          />
          <GameArea
            gameData={gameData}
            changeCharacterFound={changeCharacterFound}
            forceGameActive={forceGameActive}
          />
        </div>
      )}
    </div>
  );
};

export default App;
