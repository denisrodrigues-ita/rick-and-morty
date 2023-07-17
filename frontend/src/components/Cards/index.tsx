import {
  ICharactersJSON,
  CharactersEntity,
} from "../../interface/ICharactersJSON";
import Card from "./Card";

const Cards = ({ data }: { data: ICharactersJSON }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 justify-around my-16">
      {data.characters.map((item: CharactersEntity) => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Cards;
