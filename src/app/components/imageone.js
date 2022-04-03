import CheckLocation from "./checkLocation";
import { useState } from "react";

const ImageOne = () => {
  const [clickActive, setClickActive] = useState(false);
  const [clickCoords, setClickCoords] = useState({});
  const [imageDimensions, setImageDimensions] = useState({});
  const [mousePosition, setMousePosition] = useState({});

  const handleClick = (e) => {
    // console.log(e);
    const { clientHeight, clientWidth } = e.target;
    setImageDimensions({ clientHeight, clientWidth });
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setClickCoords({ left: x, top: y });
    setClickActive(true);
    const { clientX, clientY } = e;
    setMousePosition({ clientX, clientY });
  };

  const forceClickInactive = () => setClickActive(false);

  return (
    <div id="image-one-container">
      {clickActive ? (
        <CheckLocation
          imageDimensions={imageDimensions}
          clickCoords={clickCoords}
          forceClickInactive={forceClickInactive}
          mousePosition={mousePosition}
        />
      ) : null}
      <img
        onClick={handleClick}
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

// import { useState } from "react";
// const [imageLoaded, setImageLoaded] = useState(false);
// onLoad={() => setImageLoaded(true)}
// once the image is loaded send the timestamp to the backend.

// function FindPosition(oElement)
// {
//   if(typeof( oElement.offsetParent ) != "undefined")
//   {
//     for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
//     {
//       posX += oElement.offsetLeft;
//       posY += oElement.offsetTop;
//     }
//       return [ posX, posY ];
//     }
//     else
//     {
//       return [ oElement.x, oElement.y ];
//     }
// }

// function GetCoordinates(e)
// {
//   var PosX = 0;
//   var PosY = 0;
//   var ImgPos;
//   ImgPos = FindPosition(myImg);
//   if (!e) var e = window.event;
//   if (e.pageX || e.pageY)
//   {
//     PosX = e.pageX;
//     PosY = e.pageY;
//   }
//   else if (e.clientX || e.clientY)
//     {
//       PosX = e.clientX + document.body.scrollLeft
//         + document.documentElement.scrollLeft;
//       PosY = e.clientY + document.body.scrollTop
//         + document.documentElement.scrollTop;
//     }
//   PosX = PosX - ImgPos[0];
//   PosY = PosY - ImgPos[1];
//   document.getElementById("x").innerHTML = PosX;
//   document.getElementById("y").innerHTML = PosY;
// }
