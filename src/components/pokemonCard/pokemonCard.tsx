import "./pokemonCard.scss";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

interface Props {
  name: string;
  id: number;
  image: string;
  types: any;
}

function PokemonCard(props: Props) {
  const { name, id, image, types } = props;
  return (
    <section className={`pokemon-card-container ${types} `}>
      <p className="pokemon-name"> # {id} </p>
      <p className="pokemon-name"> {name} </p>
      <img src={image} alt={name} />
      <ul>
        {types.map((type: any, key: any): any => {
          return (
            <li key={key} className="pokemon-name">
              {type.type.name}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default PokemonCard;
