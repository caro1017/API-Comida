/* eslint-disable react/prop-types */
import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div id="recetas" className="flex items-center my-4 md:my-4" >
      <TextField
        variant="outlined"
        placeholder="Buscar receta..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{
          input: { color: "white" },
          fieldset: { borderColor: "#FCB634" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#FCB634", // Color por defecto
            },
            "&:hover fieldset": {
              borderColor: "#FCB634", // Color al pasar el ratón
            },
            "&.Mui-focused fieldset": {
              borderColor: "#BF2A2E", // Color cuando está activo/enfocado
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleSearchClick}
                style={{ color: "#FCB634" }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
