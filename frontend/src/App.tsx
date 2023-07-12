import React from "react";
import Header from "./components/Header";

const App = () => {
  const [character, setCharacter] = React.useState("");

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
    event.preventDefault();
  }

  return (
    <>
      <Header character={character} setCharacter={setCharacter} handleSubmit={handleSubmit}/>
    </>
  );
};

export default App;
