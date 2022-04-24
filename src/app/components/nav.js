const Nav = (props) => {
  const { endGame, characters } = props;

  const checkData = () => console.log(characters);

  return (
    <div id="nav-container">
      <button onClick={endGame}>end game</button>
      <div>00.00.00</div>
      <button onClick={checkData}>dataCheck</button>
      <div>
        {
          Object.values(characters).filter((char) => char.found === false)
            .length
        }
      </div>
    </div>
  );
};

export default Nav;
