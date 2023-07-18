import { CharactersEntity } from "../../../interface/ICharactersJSON";

const Card = ({ item }: { item: CharactersEntity }) => {

  const truncateText = (text: string, num: number) => {
    if (num > 15) {
      text = `${text.slice(0, 15)}...`;
      return text;
    }
    return text;
  };

  return (
    <div className="card">
      <div>
        <img
          src={item.image}
          alt="character image"
          className={`${item.status === "Dead" ? "grayscale" : null} imgCard`}
        />
      </div>
      <div className="card_info">
        <h2>
          {truncateText(item.name, item.name.length)}
        </h2>
        <p>{item.species}</p>
      </div>
    </div>
  );
};

export default Card;
