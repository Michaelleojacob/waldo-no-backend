const Nav = (props) => {
  const { endGame, characters } = props;

  const checkData = () => console.log(characters);

  const handleDisplayCharacters = () => {
    console.log("this was clicked");
  };

  return (
    <div id="nav-container">
      <button onClick={endGame}>end game</button>
      <div>00.00.00</div>
      <button onClick={checkData}>dataCheck</button>
      <button onClick={handleDisplayCharacters}>
        {
          Object.values(characters).filter((char) => char.found === false)
            .length
        }
      </button>
    </div>
  );
};

export default Nav;
