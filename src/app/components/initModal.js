import { useState } from "react";
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
        <div>modal content</div>
        <div>
          <button onClick={() => setSelected(1)}>one</button>
          <button onClick={() => setSelected(2)}>two</button>
        </div>
        <div>preview {selected}</div>
        <button onClick={handleStart}>start</button>
      </div>
    </div>
  );
};

export default InitModal;
