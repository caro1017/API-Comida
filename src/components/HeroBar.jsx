import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

export const HeroBar = () => {
  return (
    <div className="mx-10 md:mx-20 my-11">
      <h1 className="md:w-[45%] text-3xl md:text-5xl my-5 md:my-20 font-bold uppercase tracking-wide">
        Descubre el Sabor de la Cocina en tu Hogar
      </h1>
      <p className="md:w-[45%] md:text-lg my-5 md:my-20">
        Encuentra, filtra y disfruta de las mejores recetas del mundo con solo
        un clic. ¡Explora nuevos sabores y sorprende a los tuyos con Delicias
        Caseras!
      </p>
      <Button
        variant="contained"
        endIcon={<EastIcon />}
        style={{ backgroundColor: "#FCB634", color: "black" }}
        href="#recetas"
      >
        ¡Explora Recetas Ahora!
      </Button>
    </div>
  );
};
