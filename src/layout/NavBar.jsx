import { useState } from "react";
import {
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import Logo from "../../public/img/logo_delicias_caseras.png";
import MenuIcon from "@mui/icons-material/Menu";

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Arreglo de direcciones
  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Recetas", href: "#recetas" },
    { name: "Contáctenos", href: "#contacto" },
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="pt-5 bg-transparent shadow-none">
      <Container maxWidth="xl">
        <Toolbar className="flex justify-between">
          {/* Logotipo */}
          <Typography variant="h6" component="div" className="text-white">
            <img src={Logo} alt="Delicias Caseras" className="w-32 md:w-40" />
          </Typography>

          {/* Icono del menú hamburguesa para pantallas pequeñas */}
          <div className="lg:hidden">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon className="w-20 text-yellow-400" />
            </IconButton>
            {/* MenuItem desplegable */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {navItems.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={handleMenuClose}
                  component="a"
                  href={item.href}
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </div>

          {/* Enlaces de navegación para pantallas grandes */}
          <div className="hidden w-full space-x-8 text-lg md:ml-32 lg:flex">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative text-white transition-all duration-300 ease-in-out hover:text-yellow-400 hover:underline hover:underline-offset-8 "
              >
                {item.name}
                <span className="block h-[2px] w-0 bg-yellow-400 transition-all duration-300 ease-in-out hover:w-full"></span>
              </a>
            ))}
          </div>
        </Toolbar>
      </Container>
    </nav>
  );
};
