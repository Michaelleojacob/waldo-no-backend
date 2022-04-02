const Nav = (props) => {
  const { endGame } = props;
  return (
    <div id="nav-container">
      <button onClick={endGame}>end game</button>
      <div>00.00.00</div>
      <div>'x'</div>
    </div>
  );
};

export default Nav;
