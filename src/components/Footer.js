// @flow
import * as React from "react";
import "../assets/components/Footer.css";
import rappi from "../assets/img/logo-rappi.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

type Props = {};
const Footer = (props: Props) => {
  return (
    <div className="App">
      <footer className="App-footer">
        <h3>Bogotá-Colombia </h3>
        <ul className="social-networks">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=573125058310"
            >
              <WhatsAppIcon color="success" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/El-viajero-comida-alemana-106175011110165/"
            >
              <FacebookIcon color="primary" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/el_viajero_comida_alemana/"
            >
              <InstagramIcon
                sx={{
                  borderRadius: "5px",
                  color: "white",
                  background:
                    "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                }}
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.rappi.com.co/restaurantes/900265446?utm_source=google&utm_medium=organic&utm_campaign=place-action-link"
            >
              <img
                style={{
                  // border: '1px solid red',
                  filter:
                    "invert(60%) sepia(20%) saturate(7476%) hue-rotate(197deg) brightness(56%) contrast(106%)",
                }}
                src={rappi}
                alt="domicilios rappi"
                width="50px"
                height="50px"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
export default Footer;
