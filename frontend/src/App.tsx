import React from "react";
import Header from "./components/Header";

const App = () => {
  const [character, setCharacter] = React.useState("");
  const [data, setData] = React.useState([]);

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    event.preventDefault();

    setCharacter("");
  };

  React.useEffect(() => {
    if (!character) return;
    const handleFetch = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000?page=1&name=rick");
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.log("error", error);
      }
    };
    handleFetch();
  }, [character]);
  console.log(data);

  return (
    <>
      <Header
        character={character}
        setCharacter={setCharacter}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default App;
