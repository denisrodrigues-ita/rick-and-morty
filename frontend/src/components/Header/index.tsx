import React from "react";
import logo from "../../assets/img/logo.png";
import Input from "../Input";

const Header = () => {
  const [character, setCharacter] = React.useState("");

  return (
    <header>
      <img className="self-center" src={logo} alt="Logo" />
      <form action="submit" className="w-full flex justify-center gap-4">
        <Input character={character} setCharacter={setCharacter} />
        <button
          type="submit"
          className="border-2 border-gray-300 bg-transparent rounded-md p-2 text-white p-2"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
