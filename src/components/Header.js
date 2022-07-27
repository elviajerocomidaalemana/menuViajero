// @flow
import * as React from "react";
import "../assets/components/Header.css";
import logo from "../assets/img/logo-viajero-orange.png";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Outlet, Link } from "react-router-dom";

type Props = {};
const Header = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorHamb, setAnchorHamb] = React.useState<null | HTMLElement>(null);
  const [anchorSal, setAnchorSal] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const openHamb = Boolean(anchorHamb);
  const openSal = Boolean(anchorSal);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickHamb = (event) => {
    setAnchorHamb(event.currentTarget);
  };

  const handleClickSal = (event) => {
    setAnchorSal(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorHamb(null);
    setAnchorSal(null);
  };

  return (
    <Grid container xs={12} className="container">
      <Grid
        item
        xs={12}
        sm={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <header className="App-header">
          <img className="logo" src={logo} alt="" />
        </header>
      </Grid>
      <Grid
        sx={{}}
        sm={7}
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid sx={{}} xs={8}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ color: "Black", fontSize: "18px", padding: 0 }}
            variant="text"
          >
            Cervezas
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link className="link" to="/alemana">
              <MenuItem
                sx={{ color: "Black"}}
                onClick={handleClose}
              >
                Alemanas
              </MenuItem>
            </Link>
            <Link className="link" to="/holanda">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Holandesas</MenuItem>
            </Link>
            <Link className="link" to="/rusia">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Rusas</MenuItem>
            </Link>
            <Link className="link" to="/escocia">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Escocia</MenuItem>
            </Link>
            <Link className="link" to="/belgica">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Belgica</MenuItem>
            </Link>
            <Link className="link" to="/inglaterra">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Inglesas</MenuItem>
            </Link>
            <Link className="link" to="/australia">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Australianas</MenuItem>
            </Link>
            <Link className="link" to="/japon">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Japonesas</MenuItem>
            </Link>
            <Link className="link" to="/republica_checa">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Republica Checa</MenuItem>
            </Link>
          </Menu>
        </Grid>
        <Grid sx={{}} xs={8}>
          <Button
            id="basic-button"
            aria-controls={openHamb ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openHamb ? "true" : undefined}
            onClick={handleClickHamb}
            sx={{ color: "Black", fontSize: "18px", padding: 0 }}
            variant="text"
          >
            Hamburguesas
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorHamb}
            open={openHamb}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link className="link" to="/hberlin">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Berlín</MenuItem>
            </Link>
            <Link className="link" to="/hmunich">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Múnich</MenuItem>
            </Link>
            <Link className="link" to="/hfrancfort">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Fráncfort</MenuItem>
            </Link>
            <Link className="link" to="/hhamburgo">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Hamburgo</MenuItem>
            </Link>
          </Menu>
        </Grid>
        <Grid sx={{}} xs={8}>
          <Button
            id="basic-button"
            aria-controls={openSal ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openSal ? "true" : undefined}
            onClick={handleClickSal}
            sx={{ color: "Black", fontSize: "18px", padding: "0 0 20px 0" }}
            variant="text"
          >
            Salchichas
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorSal}
            open={openSal}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link className="link" to="/salGruyere">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Gruyere</MenuItem>
            </Link>
            <Link className="link" to="/salNurnberger">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Nûrnberger</MenuItem>
            </Link>
            <Link className="link" to="/salEngadiner">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Engadiner</MenuItem>
            </Link>
            <Link className="link" to="/salBerner">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Berner</MenuItem>
            </Link>
            <Link className="link" to="/salThuringer">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Thûringer</MenuItem>
            </Link>
            <Link className="link" to="/salCaracol">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Caracol</MenuItem>
            </Link>
            <Link className="link" to="/salSuizaBlanca">
              <MenuItem sx={{ color: "Black"}} onClick={handleClose}>Suiza Blanca</MenuItem>
            </Link>
          </Menu>
        </Grid>
      </Grid>
      <Outlet />
    </Grid>
  );
};
export default Header;
