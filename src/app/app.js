import Nav from "./components/nav";
import InitModal from "./components/initModal";
import ImageOne from "./components/imageone";
import ImageTwo from "./components/imagetwo";
import getCorrectCharacters from "./utils/characters";
import { useState } from "react";

const App = () => {
  const [isGameLive, setIsGameLive] = useState(false);
  const [pickedGame1, setPickedGame1] = useState(false);
  const [pickedGame2, setPickedGame2] = useState(false);
  const [gameData, setGameData] = useState({});

  const addCharactersToGameData = (num) => {
    const charObj = getCorrectCharacters(num);
    setGameData((prevState) => ({
      ...prevState,
      characters: { ...charObj },
    }));
    console.log(gameData);
  };

  const startGameOne = () => {
    setIsGameLive(true);
    setPickedGame1(true);
    setPickedGame2(false);
    addCharactersToGameData(1);
  };

  const startGameTwo = () => {
    setIsGameLive(true);
    setPickedGame2(true);
    setPickedGame1(false);
    addCharactersToGameData(2);
  };

  const endGame = () => {
    setIsGameLive(false);
    setPickedGame1(false);
    setPickedGame2(false);
  };

  return (
    <div id="app-container">
      <Nav endGame={endGame} />
      {!isGameLive ? (
        <InitModal startGameOne={startGameOne} startGameTwo={startGameTwo} />
      ) : null}
      {pickedGame1 && isGameLive ? <ImageOne gameData={gameData} /> : null}
      {pickedGame2 && isGameLive ? <ImageTwo gameData={gameData} /> : null}
    </div>
  );
};

export default App;
