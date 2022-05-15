import getCorrectCharacters from "../utils/characters";

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
      <div id="preview-chars">
        <div>{chars.one.name}</div>
        <button onClick={start}>start</button>
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
