import "./detailPokemon.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  height: "70vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  name: string;
  id: number;
  images: any;
  types: any;
  abilities;
  moves;
  height;
  weight;
}

export default function PokemonDetail(props: Props) {
  const { name, id, images, types, abilities, height, moves, weight } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="pokemon-detail-main-container" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name} #{id}
          </Typography>
          <div className="pokemon-image-container">
            <img src={images.front_default} alt={name} />
            <img src={images.back_default} alt={name} />
            <img src={images.front_shiny} alt={name} />
          </div>
          <div className="pokemon-types-container">
            <h4>types :</h4>
            <ul>
              {types.map((type: any, key: any): any => {
                return (
                  <li key={key} className="pokemon-name">
                    {type.type.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="pokemon-size-container">
            <h4>Height :</h4>
            <p>{height} Cm </p>
          </div>
          <div className="pokemon-size-container">
            <h4>Weight :</h4>
            <p>{weight} Kg</p>
          </div>

          <div className="pokemon-types-container">
            <h4>Abilities :</h4>
            <ul>
              {abilities.map((ability: any, key: any): any => {
                return (
                  <li key={key} className="pokemon-name">
                    {ability.ability.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="pokemon-moves-container">
            <h4>Moves that can learn :</h4>
            <div>
              {moves.map((move: any, key: any): any => {
                return <p> {move.move.name}</p>;
              })}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
