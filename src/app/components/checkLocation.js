import characterObject from "../utils/characters";

const CheckLocation = (props) => {
  const { left, top } = props.clickCoords;
  const { clientWidth, clientHeight } = props.imageDimensions;
  const { naturalWidth, naturalHeight } = props.naturalDimensions;

  const handleOutterModalClick = (e) => {
    if (
      e.target.id === "menu-modal-container" ||
      e.target.id === "menu-modal-circle"
    ) {
      props.forceClickInactive();
    }
  };

  const handleCheckCharOneLocation = () => {
    const { noface } = characterObject();
    const widthRatio = naturalWidth / clientWidth;
    const xCoordToCheck = left * widthRatio;
    const low = noface[0] - 50;
    const high = noface[0] + 50;

    console.log(`low:${low} high:${high} xcoord:${xCoordToCheck}`);

    if (xCoordToCheck >= low && xCoordToCheck <= high) {
      console.log(true);
    }
  };

  return (
    <div
      onClick={(e) => handleOutterModalClick(e)}
      id="menu-modal-container"
      style={{ width: clientWidth, height: clientHeight }}
    >
      <div
        id="menu-modal-circle"
        style={{
          transform: `translate(calc(${left}px - 50%), calc(${top}px - 50%))`,
        }}
      ></div>
      <div
        id="menu-modal-selection"
        style={{
          transform: `translate(calc(${left}px + 70%), calc(${top}px - 50%))`,
        }}
      >
        <div id="character-selection">
          <button onClick={handleCheckCharOneLocation}>noface</button>
          <button>char 2</button>
          <button>char 3</button>
        </div>
      </div>
    </div>
  );
};

export default CheckLocation;
