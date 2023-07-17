import { ICharacter } from "../../interface/ICharacter";

const Input = ({ character, setCharacter }: ICharacter) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search character"
        onChange={(e) => setCharacter(e.target.value)}
        value={character}
      />
    </>
  );
};

export default Input;
