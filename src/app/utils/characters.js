const gameOneObject = () => {
  const gameOneCharacters = {
    one: {
      name: "No-Face",
      coords: { x: 1170, y: 2810 },
      x: 1170,
      y: 2810,
      found: false,
      icon: "noface-icon-placeholder",
    },
    two: {
      name: "Johnny Bravo",
      coords: { x: 850, y: 6372 },
      x: 850,
      y: 6372,
      found: false,
      icon: "johnnybravo-icon-placeholder",
    },
    three: {
      name: "Meg",
      coords: { x: 858, y: 5534 },
      x: 858,
      y: 5534,
      found: false,
      icon: "meg-icon-placeholder",
    },
  };
  return { ...gameOneCharacters };
};

const gameTwoObject = () => {
  const gameTwoCharacters = {
    one: {
      name: "game2-char-one",
      coords: { x: 110, y: 1000 },
      x: 110,
      y: 1000,
      found: false,
      icon: "game2-char-one-icon-placeholder",
    },
    two: {
      name: "game2-char-two",
      coords: { x: 500, y: 500 },
      x: 500,
      y: 500,
      found: false,
      icon: "game2-char-two-icon-placeholder",
    },
    three: {
      name: "game2-char-three",
      coords: { x: 600, y: 600 },
      x: 600,
      y: 600,
      found: false,
      icon: "game2-char-three-icon-placeholder",
    },
  };
  return { ...gameTwoCharacters };
};

const gameData = (gameNum) => {
  let obj;
  switch (gameNum) {
    case 1:
      obj = gameOneObject();
      break;
    case 2:
      obj = gameTwoObject();
      break;
    default:
      console.log("error - from gameData");
      break;
  }

  const changeFound = (charNum) => {
    const newFoundValue = true;
    if (obj[charNum].found === false) {
      const newObj = { ...obj };
      newObj[charNum].found = newFoundValue;
      obj = newObj;
      return { ...obj };
    }
  };

  return {
    getAllChars: () => ({ ...obj }),
    getCharOne: () => ({ ...obj.one.coords }),
    getCharTwo: () => ({ ...obj.two.coords }),
    getCharThree: () => ({ ...obj.three.coords }),
    changeFound,
  };
};

export default gameData;
