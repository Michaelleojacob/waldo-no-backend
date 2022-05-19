const gameOneObject = () => {
  const gameOneCharacters = {
    one: {
      name: "No-Face",
      from: "spirited away",
      number: "one",
      coords: { x: 1170, y: 2810 },
      x: 1170,
      y: 2810,
      found: false,
      image: "/assets/images/noface.jpg",
    },
    two: {
      name: "Johnny Bravo",
      from: "cartoon network",
      number: "two",
      coords: { x: 850, y: 6372 },
      x: 850,
      y: 6372,
      found: false,
      image: "/assets/images/johhnybravo.png",
    },
    three: {
      name: "Meg",
      from: "family guy",
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
      name: "Waldo",
      from: "wheres waldo",
      number: "one",
      coords: { x: 291, y: 1733 },
      x: 291,
      y: 1733,
      found: false,
      image: "/assets/images/waldo.png",
    },
    two: {
      name: "Totoro",
      from: "my neighbor totoro",
      number: "two",
      coords: { x: 1368, y: 1476 },
      x: 1368,
      y: 1476,
      found: false,
      image: "/assets/images/bestTotoro.jpeg",
    },
    three: {
      name: "Pale Man",
      from: "pan's labyrinth",
      number: "three",
      coords: { x: 995, y: 2217 },
      x: 995,
      y: 2217,
      found: false,
      image: "/assets/images/paleman1.jpg",
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
