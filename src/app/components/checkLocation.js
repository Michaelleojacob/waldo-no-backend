const CheckLocation = (props) => {
  const { left, top } = props.clickCoords;
  const { clientHeight, clientWidth } = props.imageDimensions;

  const handleOutterModalClick = (e) => {
    if (
      e.target.id === "menu-modal-container" ||
      e.target.id === "menu-modal-circle"
    ) {
      props.forceClickInactive();
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
          <button>char 1</button>
          <button>char 2</button>
          <button>char 3</button>
        </div>
      </div>
    </div>
  );
};

export default CheckLocation;
