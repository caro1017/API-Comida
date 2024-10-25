import Fondo_footer from "../../public/img/fondo_footer.png";
import ContactForm from "./ContactForm";

export const Footer = () => {
  return (
    <div
      id="contacto"
      className="bg-center bg-cover h-[50rem]" // Ajusta la altura según sea necesario
      style={{
        backgroundImage: `url(${Fondo_footer})`,
        backgroundSize: "cover",
      }}
    >
      <ContactForm />
      <p className="text-center mt-11">
        Copyright 2024 by Carolina Uribe Botero
      </p>
    </div>
  );
};
