import NavDropdown from "./navdropdown";
import { useState } from "react";

const Time = (props) => {
  const { time } = props;
  const secondCounter = time % 60;
  const minuteCounter = Math.floor((time % 3600) / 60);
  const hourCounter = Math.floor(time / 3600);

  const computedSecond =
    String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
  const computedMinute =
    String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;
  const computedHour =
    String(hourCounter).length === 1 ? `0${hourCounter}` : hourCounter;

  return (
    <div>
      {computedHour}:{computedMinute}:{computedSecond}
    </div>
  );
};

const Nav = (props) => {
  const { resetGame, characters, gameData, time } = props;
  const [dropIsOpen, setDropIsOpen] = useState(false);

  const handleCheckData = () => console.log(gameData);

  const forceClose = () => setDropIsOpen(false);

  const toggleIsOpen = () => setDropIsOpen(!dropIsOpen);

  const handleDropdown = () => toggleIsOpen();

  return (
    <div id="nav-container">
      <button onClick={resetGame}>end game</button>
      <div>
        <Time time={time} />
      </div>
      <button onClick={handleCheckData}>dataCheck</button>
      <div id="dropdown-container">
        <button id="dropbtn" onClick={handleDropdown} onBlur={forceClose}>
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
