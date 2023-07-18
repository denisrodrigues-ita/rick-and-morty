import {
  ICharactersJSON,
  CharactersEntity,
} from "../../interface/ICharactersJSON";
import Card from "./Card";

const Cards = ({ data }: { data: ICharactersJSON }) => {
  return (
    <section className="cards">
      {data.characters.map((item: CharactersEntity) => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Cards;
