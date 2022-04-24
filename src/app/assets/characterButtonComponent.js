const CharacterButton = (props) => {
  return (
    <button
      className="character-button"
      value={props.character.number}
      onClick={props.handleCheckXYCoords}
      disabled={props.character.found}
    >
      {props.character.name}
    </button>
  );
};

export default CharacterButton;
