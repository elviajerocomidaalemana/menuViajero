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
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid container xs={12} className="container">
      <Grid
        item
        xs={7}
        sm={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <header className="App-header">
          <img className="logo" src={logo} alt="" />
        </header>
      </Grid>
      <Grid sx={{ border: '1px solid red' }} item className="container__bottom">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{  }}
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
      <Grid sx={{ border: '1px solid red' }} item className="container__bottom">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{  }}
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
      </Grid><Grid sx={{ border: '1px solid red' }} item className="container__bottom">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{  }}
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
      <Outlet />
    </Grid>
  );
};
export default Header;
