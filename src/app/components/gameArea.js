import CheckLocation from "./checkLocation";
import { useState } from "react";

const GameArea = (props) => {
  const { gameData } = props;
  const [clickActive, setClickActive] = useState(false);
  const [clickCoords, setClickCoords] = useState({});
  const [imageDimensions, setImageDimensions] = useState({});
  const [naturalDimensions, setNaturalDimensions] = useState({});
  console.log(props.gameData);

  const handleClick = (e) => {
    // console.log(e);
    const { clientHeight, clientWidth } = e.target;
    setImageDimensions({ clientHeight, clientWidth });
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setClickCoords({ left: x, top: y });
    setClickActive(true);
    const { naturalWidth, naturalHeight } = e.target;
    setNaturalDimensions({ naturalWidth, naturalHeight });
    console.log(props.gameData);
  };

  const forceClickInactive = () => setClickActive(false);

  return (
    <div id="game-image-container">
      {clickActive ? (
        <CheckLocation
          gameData={gameData}
          imageDimensions={imageDimensions}
          clickCoords={clickCoords}
          forceClickInactive={forceClickInactive}
          naturalDimensions={naturalDimensions}
        />
      ) : null}
      <img
        onClick={handleClick}
        className="game-image"
        src={process.env.PUBLIC_URL + gameData.characters.image}
        alt={gameData.gameNum}
      ></img>
    </div>
  );
};

export default GameArea;

// import { useState } from "react";
// const [imageLoaded, setImageLoaded] = useState(false);
// onLoad={() => setImageLoaded(true)}
// once the image is loaded send the timestamp to the backend.
