// @flow
import * as React from "react";
import "../assets/components/Header.css";
import logo from "../assets/img/WhatsApp Image 2022-06-01 at 7.05.57 PM.jpeg";
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
    setAnchorHamb(null)
    setAnchorSal(null)
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
            sx={{}}
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
            <Link className="link" to="/">
              <MenuItem onClick={handleClose}>Alemanas</MenuItem>
            </Link>
            <Link className="link" to="/holanda">
              <MenuItem onClick={handleClose}>Holandesas</MenuItem>
            </Link>
            <Link className="link" to="/rusia">
              <MenuItem onClick={handleClose}>Rusas</MenuItem>
            </Link>
            <Link className="link" to="/escocia">
              <MenuItem onClick={handleClose}>Escocia</MenuItem>
            </Link>
            <Link className="link" to="/belgica">
              <MenuItem onClick={handleClose}>Belgica</MenuItem>
            </Link>
            <Link className="link" to="/inglaterra">
              <MenuItem onClick={handleClose}>Inglesas</MenuItem>
            </Link>
            <Link className="link" to="/australia">
              <MenuItem onClick={handleClose}>Australianas</MenuItem>
            </Link>
            <Link className="link" to="/japon">
              <MenuItem onClick={handleClose}>Japonesas</MenuItem>
            </Link>
            <Link className="link" to="/republica_checa">
              <MenuItem onClick={handleClose}>Republica Checa</MenuItem>
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
            sx={{}}
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
              <MenuItem onClick={handleClose}>Berlín</MenuItem>
            </Link>
            <Link className="link" to="/hmunich">
              <MenuItem onClick={handleClose}>Múnich</MenuItem>
            </Link>
            <Link className="link" to="/hfrancfort">
              <MenuItem onClick={handleClose}>Fráncfort</MenuItem>
            </Link>
            <Link className="link" to="/hhamburgo">
              <MenuItem onClick={handleClose}>Hamburgo</MenuItem>
            </Link>
          </Menu>
        </Grid>
         <Grid sx={{ }} xs={8}>
          <Button
            id="basic-button"
            aria-controls={openSal ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openSal ? "true" : undefined}
            onClick={handleClickSal}
            sx={{}}
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
              <MenuItem onClick={handleClose}>Gruyere</MenuItem>
            </Link>
            <Link className="link" to="/salNurnberger">
              <MenuItem onClick={handleClose}>Nûrnberger</MenuItem>
            </Link>
            <Link className="link" to="/salEngadiner">
              <MenuItem onClick={handleClose}>Engadiner</MenuItem>
            </Link>
            <Link className="link" to="/salBerner">
              <MenuItem onClick={handleClose}>Berner</MenuItem>
            </Link>
            <Link className="link" to="/salThuringer">
              <MenuItem onClick={handleClose}>Thûringer</MenuItem>
            </Link>
            <Link className="link" to="/salCaracol">
              <MenuItem onClick={handleClose}>Caracol</MenuItem>
            </Link>
            <Link className="link" to="/salSuizaBlanca">
              <MenuItem onClick={handleClose}>Suiza Blanca</MenuItem>
            </Link>
          </Menu>
        </Grid> 
      </Grid>
      <Outlet />
    </Grid>
  );
};
export default Header;
