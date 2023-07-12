import { ICharacter } from "../../interface/ICharacter";

const Input = ({ character, setCharacter }: ICharacter) => {
  return (
    <>
      <input
        className="border-2 border-gray-300 bg-transparent rounded-md p-2 w-72 text-white"
        type="text"
        placeholder="Search character"
        onChange={(e) => setCharacter(e.target.value)}
        value={character}
      />
    </>
  );
};

export default Input;
