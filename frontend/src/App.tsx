import React from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Cards from "./components/Cards";
import { ICharactersJSON, CharactersEntity } from "./interface/ICharactersJSON";
import Pagination from "./components/Pagination";
import Modal from "./components/Modal";
import NotFound from "./components/NotFound";

const App = () => {
  const [character, setCharacter] = React.useState("");
  const [newCharacter, setNewCharacter] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<ICharactersJSON>();
  const [pages, setPages] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(0);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [modalContent, setModalContent] = React.useState<CharactersEntity>();

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    event.preventDefault();
    setNewCharacter(character);
    setPages(1);
    setCharacter("");
  };

  React.useEffect(() => {
    if (!newCharacter) return;
    const handleFetch = async () => {
      try {
        setLoading(true);
        const response: Response = await fetch(
          `http://127.0.0.1:5000?page=${pages}&name=${newCharacter}`
        );
        const result: ICharactersJSON = await response.json();
        setData(result);
        setTotalPages(result.pages);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    handleFetch();
  }, [newCharacter, pages]);

  if (loading) return <Loading />;
  return (
    <>
      <Header
        character={character}
        setCharacter={setCharacter}
        handleSubmit={handleSubmit}
      />
      {data?.characters && data?.characters.length > 0 ? (
        <Cards
          data={data}
          setModalContent={setModalContent}
          setIsModalOpen={setIsModalOpen}
        />
      ) : (
        data?.characters.length === 0 && <NotFound />
      )}
      {data?.pages && data?.pages > 0 ? (
        <Pagination pages={pages} totalPages={totalPages} setPages={setPages} />
      ) : null}
      {isModalOpen && modalContent && (
        <Modal setIsModalOpen={setIsModalOpen} modalContent={modalContent} />
      )}
    </>
  );
};

export default App;
