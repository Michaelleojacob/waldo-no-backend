import Nav from './components/nav';
import InitModal from './components/initModal';
import getCorrectCharacters from './utils/characters';
import { useEffect, useState } from 'react';
import GameArea from './components/gameArea';
import WinScreen from './components/winscreen';

const App = () => {
  const [isGameLive, setIsGameLive] = useState(false);
  const [gameData, setGameData] = useState({});
  const [win, setWin] = useState(false);

  const addStaticValuesToGameData = (num) => {
    setGameData((prevState) => ({
      ...prevState,
      name: 'anon',
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
    addImageToGameData('/assets/images/egor-klyuchnyk-full-x-season-web.jpg');
  };

  const startGameTwo = () => {
    setIsGameLive(true);
    addCharactersToGameData(2);
    addImageToGameData('/assets/images/egor-klyuchnyk-small.jpg');
  };

  const resetGame = () => {
    setIsGameLive(false);
    setWin(false);
    setGameData({});
  };

  const startGame = () => {
    setIsGameLive(true);
    setWin(false);
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

  const checkForWin = () => {
    const checkCharacters = Object.values(gameData.characters).every(
      (char) => char.found
    );
    return checkCharacters;
  };

  const setEndTimestamp = () =>
    setGameData((prevState) => ({
      ...prevState,
      timeStamps: {
        ...prevState.timeStamps,
        end: Date.now(),
      },
    }));

  useEffect(() => {
    let intervalId;
    if (isGameLive) {
      intervalId = setInterval(() => incrementTime(), 1000);
    }
    return () => clearInterval(intervalId);
  }, [isGameLive]);

  useEffect(() => {
    if (gameData.hasOwnProperty('characters')) {
      if (Object.values(gameData.characters).every((char) => char.found)) {
        setEndTimestamp();
        setIsGameLive(false);
        setWin(true);
      }
    }
    // eslint-disable-next-line
  }, [gameData.characters]);

  return (
    <div id='app-container'>
      {!isGameLive && !win ? (
        <InitModal startGameOne={startGameOne} startGameTwo={startGameTwo} />
      ) : null}
      {isGameLive && !win ? (
        <div>
          <Nav
            resetGame={resetGame}
            characters={gameData.characters}
            time={gameData.time}
            gameData={gameData}
            checkForWin={checkForWin}
          />
          <GameArea
            gameData={gameData}
            changeCharacterFound={changeCharacterFound}
            startGame={startGame}
            checkForWin={checkForWin}
          />
        </div>
      ) : null}
      {!isGameLive && win ? (
        <WinScreen timeStamps={gameData.timeStamps} resetGame={resetGame} />
      ) : null}
    </div>
  );
};

export default App;
