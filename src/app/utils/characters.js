const gameOneObject = () => {
  const gameOneCharacters = {
    one: {
      name: "No-Face",
      from: "Spirited Away",
      number: "one",
      coords: { x: 1170, y: 2810 },
      x: 1170,
      y: 2810,
      found: false,
      image: "/assets/images/noface.jpg",
    },
    two: {
      name: "Johnny Bravo",
      from: "Cartoon Network",
      number: "two",
      coords: { x: 850, y: 6372 },
      x: 850,
      y: 6372,
      found: false,
      image: "/assets/images/johhnybravo.png",
    },
    three: {
      name: "Meg",
      from: "Family Guy",
      number: "three",
      coords: { x: 858, y: 5534 },
      x: 858,
      y: 5534,
      found: false,
      image: "/assets/images/meg.jpg",
    },
  };
  return { ...gameOneCharacters };
};

const gameTwoObject = () => {
  const gameTwoCharacters = {
    one: {
      name: "game2-char-one",
      from: "g2-one",
      number: "one",
      coords: { x: 110, y: 1000 },
      x: 110,
      y: 1000,
      found: false,
      image: "game2-char-one-image-placeholder",
    },
    two: {
      name: "game2-char-two",
      from: "g2-two",
      number: "two",
      coords: { x: 500, y: 500 },
      x: 500,
      y: 500,
      found: false,
      image: "game2-char-two-image-placeholder",
    },
    three: {
      name: "game2-char-three",
      from: "g2-three",
      number: "three",
      coords: { x: 600, y: 600 },
      x: 600,
      y: 600,
      found: false,
      image: "game2-char-three-image-placeholder",
    },
  };
  return { ...gameTwoCharacters };
};

const getCorrectCharacters = (num) => {
  let obj;
  switch (num) {
    case 1:
      obj = gameOneObject();
      break;
    case 2:
      obj = gameTwoObject();
      break;
    default:
      console.log("something went horribly wrong form getCorrectCharacters");
      break;
  }
  return obj;
};

export default getCorrectCharacters;
