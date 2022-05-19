import getCorrectCharacters from "../utils/characters";

const EachChar = ({ char }) => {
  return (
    <div id="preview-chars">
      <img
        className="preview-char-icon"
        src={process.env.PUBLIC_URL + char.image}
        alt={char.name + " image"}
      ></img>
      <div className="char-name-and-from">
        <div className="char-name">{char.name}</div>
        <div className="char-from">{char.from}</div>
      </div>
    </div>
  );
};

const PreviewContent = ({ chars, img, start }) => {
  return (
    <div id="preview-content">
      <div id="preview-img-container">
        <img
          id="preview-img"
          src={process.env.PUBLIC_URL + img}
          alt="img1"
        ></img>
      </div>
      <div id="chars-and-start-container">
        <EachChar char={chars.one} />
        <EachChar char={chars.two} />
        <EachChar char={chars.three} />
        <div id="start-btn-container">
          <button id="start-game-btn" onClick={start}>
            start
          </button>
        </div>
      </div>
    </div>
  );
};

const Preview = ({ selected, start }) => {
  const gameOneCharacters = getCorrectCharacters(1);
  const gameTwoCharacters = getCorrectCharacters(2);
  const img1 = "/assets/images/egor-klyuchnyk-full-x-season-web.jpg";
  const img2 = "/assets/images/egor-klyuchnyk-small.jpg";

  return (
    <div id="prev-wrapper">
      {selected === 1 ? (
        <PreviewContent chars={gameOneCharacters} img={img1} start={start} />
      ) : (
        <PreviewContent chars={gameTwoCharacters} img={img2} start={start} />
      )}
    </div>
  );
};

export default Preview;
