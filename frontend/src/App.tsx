import React from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";

const App = () => {
  const [character, setCharacter] = React.useState("");
  const [newCharacter, setNewCharacter] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    event.preventDefault();
    setNewCharacter(character);
    setCharacter("");
  };

  React.useEffect(() => {
    if (!newCharacter) return;
    const handleFetch = async () => {
      try {
        setLoading(true);
        const response: Response = await fetch(
          `http://127.0.0.1:5000?page=1&name=${newCharacter}`
        );
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    handleFetch();
  }, [newCharacter]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Header
          character={character}
          setCharacter={setCharacter}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default App;
