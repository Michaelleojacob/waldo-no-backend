//this logic+component is for the pop up that happens on click

import compareXYClickWithXYCharacter from "../utils/checkXYcoords";

const CheckLocation = (props) => {
  //gamedata and characters
  const { gameData, changeCharacterFound } = props;
  const { characters } = gameData;
  const characterOne = characters.one;
  const characterTwo = characters.two;
  const characterThree = characters.three;
  //changefound status
  // const { changeCharacterFound } = props;
  //dimensions and click values
  const { xClickCoord, yClickCoord } = props.clickCoords;
  const { clientWidth, clientHeight } = props.imageDimensions;
  //need natural for ratio calculations

  const closeModal = (e) => {
    if (
      e.target.id === "menu-modal-container" ||
      e.target.id === "menu-modal-circle"
    ) {
      props.forceClickInactive();
    }
  };

  const handleCheckXYCoords = (e) => {
    const targetNumber = e.target.value;
    const character = characters[targetNumber];
    const obj = {
      characterCoords: character.coords,
      clickCoords: props.clickCoords,
      naturalDimensions: props.naturalDimensions,
      clientDimensions: props.imageDimensions,
    };
    const result = compareXYClickWithXYCharacter(obj);
    // console.log(result, targetNumber, character);
    if (result) {
      changeCharacterFound(targetNumber);
    }
  };

  return (
    <div
      id="menu-modal-container"
      onClick={(e) => closeModal(e)}
      style={{ width: clientWidth, height: clientHeight }}
    >
      <div
        id="menu-modal-circle"
        style={{
          transform: `translate(calc(${xClickCoord}px - 50%), calc(${yClickCoord}px - 50%))`,
        }}
      ></div>
      <div
        id="menu-modal-selection"
        style={{
          transform: `translate(calc(${xClickCoord}px + 50%), calc(${yClickCoord}px - 50%))`,
        }}
      >
        <div id="character-selection">
          <button value={"one"} onClick={handleCheckXYCoords}>
            {characterOne.name}
          </button>
          <button value={"two"} onClick={handleCheckXYCoords}>
            {characterTwo.name}
          </button>
          <button value={"three"} onClick={handleCheckXYCoords}>
            {characterThree.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckLocation;
