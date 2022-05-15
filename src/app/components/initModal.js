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
        <div id="select-game-btns">
          <button onClick={() => setSelected(1)}>one</button>
          <button onClick={() => setSelected(2)}>two</button>
        </div>
        <Preview selected={selected} start={handleStart} />
      </div>
    </div>
  );
};

export default InitModal;
