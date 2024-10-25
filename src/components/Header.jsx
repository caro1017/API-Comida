import { NavBar } from "../layout/NavBar";
import Fondo_header from "../../public/img/fondo_header.png";
import { HeroBar } from "./HeroBar";

export const Header = () => {
  return (
    <div id="inicio"
      className="bg-center bg-cover h-[50rem]" // Ajusta la altura según sea necesario
      style={{
        backgroundImage: `url(${Fondo_header})`, // Cambia la ruta de la imagen aquí
      }}
    >
      <NavBar />
      <HeroBar />
    </div>
  );
};
