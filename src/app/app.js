import Nav from "./components/nav";
import InitModal from "./components/initModal";
import ImageOne from "./components/imageone";
import ImageTwo from "./components/imagetwo";
import { useState } from "react";

const App = () => {
  const [isGameLive, setIsGameLive] = useState(false);
  const [pickedGame1, setPickedGame1] = useState(false);
  const [pickedGame2, setPickedGame2] = useState(false);

  const startGameOne = () => {
    setIsGameLive(true);
    setPickedGame1(true);
    setPickedGame2(false);
  };

  const startGameTwo = () => {
    setIsGameLive(true);
    setPickedGame2(true);
    setPickedGame1(false);
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
      {pickedGame1 && isGameLive ? <ImageOne /> : null}
      {pickedGame2 && isGameLive ? <ImageTwo /> : null}
    </div>
  );
};

export default App;
