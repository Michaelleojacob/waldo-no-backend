import { useState } from "react";
import Preview from "../utils/preview";
const InitModal = (props) => {
  const { startGameOne, startGameTwo } = props;
  const [selected, setSelected] = useState(1);

  const handleStart = () => {
    switch (selected) {
      case 1:
        startGameOne();
        break;
      case 2:
        startGameTwo();
        break;
      default:
        console.log("error");
        break;
    }
  };

  return (
    <div id="init-modal-container">
      <div id="modal-content">
        <div id="modal-title">Find Us</div>
        <div id="instructions">
          <div>- select map</div>
          <div>- press start</div>
        </div>
        <div id="select-game-btns">
          <button className="select-map-btn" onClick={() => setSelected(1)}>
            map 1
          </button>
          <button className="select-map-btn" onClick={() => setSelected(2)}>
            map 2
          </button>
        </div>
        <Preview selected={selected} start={handleStart} />
      </div>
    </div>
  );
};

export default InitModal;
