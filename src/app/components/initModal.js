const InitModal = (props) => {
  const { startGameOne, startGameTwo } = props;
  return (
    <div id="init-modal-container">
      <div>modal content</div>
      <button onClick={startGameOne}>one</button>
      <button onClick={startGameTwo}>two</button>
    </div>
  );
};

export default InitModal;
