/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export const CardBar = ({ meal }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{ maxWidth: 300, margin: 1 }}
        style={{ backgroundColor: "#1E1E1E", color: "black" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={meal.strMealThumb} // Imagen de la receta
            alt={meal.strMeal} // Nombre de la receta
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-[#FCB634] text-center uppercase h-20"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {meal.strMeal} {/* Nombre de la receta */}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontWeight: "300",
                fontSize: "14px",
                marginLeft: "12px",
              }}
            >
              {meal.strInstructions.substring(0, 50) + "..."} {/* Resumen */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="flex justify-center">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FCB634",
              color: "black",
              marginBottom: "20px",
            }}
            onClick={handleClickOpen}
          >
            Ver Receta Completa
          </Button>
        </CardActions>
      </Card>

      {/* Modal con los detalles de la receta */}
      <Dialog open={open} onClose={handleClose}>
        <DialogActions
          className="bg-[#1E1E1E] flex justify-between items-center"
          sx={{ padding: "8px" }}
        >
          <DialogTitle
            className="bg-[#1E1E1E] text-[#FCB634] text-center uppercase text-xl"
            sx={{ flexGrow: 1, textAlign: "center", marginRight: "10px" }}
          >
            {meal.strMeal}
          </DialogTitle>

          <IconButton
            onClick={handleClose}
            size="small"
            aria-label="Cerrar"
          >
            <CloseIcon className="text-[#FCB634] " />
          </IconButton>
        </DialogActions>

        <DialogContent className="bg-[#1E1E1E]">
          <Typography
            variant="body1"
            gutterBottom
            className="text-white "
            sx={{
              color: "white",
              fontWeight: "300",
              fontSize: "14px",
              marginLeft: "12px",
              marginBottom:"20px"
            }}
          >
            <strong className="text-[#FCB634] ">Instrucciones:</strong>{" "}
            {meal.strInstructions}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            className="text-white "
            sx={{
              color: "white",
              fontWeight: "300",
              fontSize: "14px",
              marginLeft: "12px",
            }}
          >
            <strong className="text-[#FCB634] ">Ingredientes:</strong>
            <ul>
              {Object.keys(meal)
                .filter((key) => key.startsWith("strIngredient") && meal[key])
                .map((key, index) => (
                  <li key={index} className="flex">
                    <CheckIcon sx={{ color: "#FCB634" }} />
                    <p>
                      {meal[key]} {meal[`strMeasure${index + 1}`]}
                    </p>
                  </li>
                ))}
            </ul>
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};
