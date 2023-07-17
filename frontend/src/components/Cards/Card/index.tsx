import { CharactersEntity } from "../../../interface/ICharactersJSON";

const Card = ({ item }: { item: CharactersEntity }) => {
  console.log(item);
  return (
    <div className="border-2 border-gray-300 rounded-md">
      <div>
        <img src={item.image} alt="character image" />
      </div>
      <div>
        <h2 className="text-white text-2xl">{item.name}</h2>
        <p className="text-white">{item.species}</p>
      </div>
    </div>
  );
};

export default Card;
