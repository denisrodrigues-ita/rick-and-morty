import logo from "../../assets/img/logo.png";
import Input from "../Input";
import { ICharacter } from "../../interface/ICharacter";

interface IProps extends ICharacter {
  handleSubmit: (
    event: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => void;
}

const Header = ({ character, setCharacter, handleSubmit }: IProps) => {
  return (
    <header>
      <img className="self-center" src={logo} alt="Logo" />
      <form action="submit" className="w-full flex justify-center gap-4">
        <Input character={character} setCharacter={setCharacter} />
        <button
          className="btnSearch"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
