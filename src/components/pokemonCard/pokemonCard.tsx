import "./pokemonCard.scss";

interface Props {
  name: string;
  id: number;
  image: string;
  type: string;
}

function PokemonCard(props: Props) {
  const { name, id, image, type } = props;
  return (
    <div>
      <section className={`pokemon-card-container ${type} `}>
        <p className="pokemon-name"> # {id} </p>
        <p className="pokemon-name"> {name} </p>
        <img src={image} alt={name} />
        <p className="pokemon-name"> Type : {type} </p>
      </section>
    </div>
  );
}

export default PokemonCard;
