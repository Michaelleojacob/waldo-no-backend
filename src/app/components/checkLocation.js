const CheckLocation = (props) => {
  const { left, top } = props.clickCoords;
  const { clientHeight, clientWidth } = props.imageDimensions;
  const { clientX, clientY } = props.mousePosition;

  console.log(left, top);
  console.log(clientX, clientY);

  return (
    <div
      onClick={props.forceClickInactive}
      id="menu-modal-container"
      style={{ width: clientWidth, height: clientHeight }}
    >
      <div
        id="menu-modal-circle"
        style={{
          transform: `translate(calc(${left}px - 50%), calc(${top}px - 50%))`,
        }}
      >
        circle
      </div>
      <div id="menu-modal-selection" style={{ left, top }}>
        selection
      </div>
    </div>
  );
};

export default CheckLocation;
