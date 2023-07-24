import React from "react";
import {
  ICharactersJSON,
  CharactersEntity,
} from "../../interface/ICharactersJSON";
import Card from "./Card";

interface CardsProps {
  data: ICharactersJSON;
  setModalContent: React.Dispatch<
    React.SetStateAction<CharactersEntity | undefined>
  >;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cards: React.FC<CardsProps> = ({
  data,
  setModalContent,
  setIsModalOpen,
}) => {
  return (
    <section className="cards">
      {data.characters.map((item: CharactersEntity) => (
        <Card
          key={item.id}
          item={item}
          setModalContent={setModalContent}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </section>
  );
};

export default Cards;
