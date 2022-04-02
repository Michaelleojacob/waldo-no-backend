const ImageOne = () => {
  return (
    <div>
      <img
        className="game-image"
        src={
          process.env.PUBLIC_URL +
          "/assets/images/egor-klyuchnyk-full-x-season-web.jpg"
        }
        alt={"game version one"}
      ></img>
    </div>
  );
};

export default ImageOne;
