import NavDropdown from "./navdropdown";
import { useState, useEffect } from "react";

const Nav = (props) => {
  const { endGame, characters, gameData, gameActive, sethhmmss, time } = props;
  const [dropIsOpen, setDropIsOpen] = useState(false);

  useEffect(() => {
    let newTimer = time;
    if (!gameActive) {
      return;
    }

    const intervalID = setInterval(() => {
      newTimer = newTimer + 1;
      let hour = Math.floor(newTimer / 3600);
      let minute = Math.floor((newTimer - hour * 3600) / 60);
      let seconds = newTimer - (hour * 3600 + minute * 60);
      if (hour < 10) hour = "0" + hour;
      if (minute < 10) minute = "0" + minute;
      if (seconds < 10) seconds = "0" + seconds;
      sethhmmss(`${hour}:${minute}:${seconds}`);
    }, 1000);

    return () => {
      console.log("time for cleanup");
      clearInterval(intervalID);
      sethhmmss(null);
    };
    // eslint-disable-next-line
  }, [gameActive]);

  // this is for testing purposes only
  const handleCheckData = () => console.log(gameData);

  const forceClose = () => setDropIsOpen(false);

  const toggleIsOpen = () => setDropIsOpen(!dropIsOpen);

  const handleDropdown = () => toggleIsOpen();

  return (
    <div id="nav-container">
      <button onClick={endGame}>end game</button>
      <div>{time !== null && time !== "NaN:NaN:NaN" ? time : "00:00:00"}</div>
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
