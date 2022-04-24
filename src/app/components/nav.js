import NavDropdown from "./navdropdown";
import { useState } from "react";

const Nav = (props) => {
  const { endGame, characters } = props;
  const [dropIsOpen, setDropIsOpen] = useState(false);

  // this is for testing purposes only
  const handleCheckData = () => console.log(characters);

  const forceClose = () => setDropIsOpen(false);

  const toggleIsOpen = () => setDropIsOpen(!dropIsOpen);

  const handleDropdown = () => toggleIsOpen();

  return (
    <div id="nav-container">
      <button onClick={endGame}>end game</button>
      <div>00.00.00</div>
      <button onClick={handleCheckData}>dataCheck</button>
      <div id="dropdown-container">
        <button id="dropbtn" onClick={handleDropdown} onBlur={forceClose}>
          {/* <button id="dropbtn" onClick={handleDropdown}> */}
          {
            Object.values(characters).filter((char) => char.found === false)
              .length
          }
        </button>

        {dropIsOpen ? <NavDropdown characters={characters} /> : null}
      </div>
    </div>
  );
};

export default Nav;
