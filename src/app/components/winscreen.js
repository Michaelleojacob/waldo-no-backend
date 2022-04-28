const WinScreen = ({ gameData, resetGame }) => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <div>
      <div>hi you won!</div>
      <div>{gameData.timeStamps.start}</div>
      <div>{gameData.timeStamps.end}</div>
      <div>speed = {gameData.timeStamps.end - gameData.timeStamps.start}</div>
      <form onSubmit={handleSubmit}>
        <label>
          enter a name
          <input placeholder="anon"></input>
        </label>
      </form>
      <button onClick={resetGame}>play again?</button>
    </div>
  );
};

export default WinScreen;
