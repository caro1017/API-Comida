import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, completa todos los campos correctamente.",
      });
      return;
    }

    // Lógica para enviar el formulario (puedes hacer una llamada a tu API aquí)
    console.log("Formulario enviado:", formData);

    await Swal.fire({
      icon: "success",
      title: "¡Éxito!",
      text: "Tu mensaje ha sido enviado.",
    });

    // Limpiar el formulario después de enviar
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleClear = async () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    await Swal.fire({
      icon: "info",
      title: "Formulario Limpio",
      text: "Los campos han sido limpiados.",
    });
  };

  return (
    <section>
      <Container className="p-6">
        <form onSubmit={handleSubmit} className="w-full mt-60 md:w-1/2">
          <Typography variant="h5" className="mb-10 text-[#FCB634] uppercase">
            Contacto
          </Typography>
          <div className="mt-10 mb-4">
            <TextField
              fullWidth
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="standard"
              required
              InputProps={{
                style: { color: "#FCB634" }, // Color del texto
              }}
              InputLabelProps={{
                style: { color: "#FCB634" }, // Color de la etiqueta
              }}
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid #828282", // Línea amarilla antes de enfocar
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "2px solid #FCB634", // Línea amarilla al enfocar
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottom: "2px solid #FCB634", // Línea amarilla al pasar el mouse
                },
              }}
            />
          </div>
          <div className="mb-4">
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="standard"
              required
              InputProps={{
                style: { color: "#FCB634" }, // Color del texto
              }}
              InputLabelProps={{
                style: { color: "#FCB634" }, // Color de la etiqueta
              }}
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid #828282", // Línea amarilla antes de enfocar
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "2px solid #FCB634", // Línea amarilla al enfocar
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottom: "2px solid #FCB634", // Línea amarilla al pasar el mouse
                },
              }}
            />
          </div>
          <div className="mb-4">
            <TextField
              fullWidth
              label="Mensaje"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              variant="standard"
              required
              InputProps={{
                style: { color: "#FCB634" }, // Color del texto
              }}
              InputLabelProps={{
                style: { color: "#FCB634" }, // Color de la etiqueta
              }}
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid #828282", // Línea amarilla antes de enfocar
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "2px solid #FCB634", // Línea amarilla al enfocar
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottom: "2px solid #FCB634", // Línea amarilla al pasar el mouse
                },
              }}
            />
          </div>
          <div className="flex space-x-10">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#FCB634",
                color: "black",
                marginBottom: "20px",
              }}
              type="submit"
            >
              Enviar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClear}
              type="button"
              style={{
                color: "#FCB634",
                border: "2px solid #FCB634",
                marginBottom: "20px",
              }}
            >
              Limpiar
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default ContactForm;
