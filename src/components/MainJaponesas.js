// @flow
import * as React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";
import AsahiSuperDry from "../assets/img/japonesas/Asahi-Super-Dry.png";

const data = [
  {
    title: "Asahi Super Dry",
    image:
      AsahiSuperDry,
    description:
      "Proveniente de Japón. Una cerveza de apariencia amarillo pajizo o dorada pálida. Ligera, fácil de beber pero una cerveza seca (Karakuchi significa seco como ellos mismos la definen) debido a un sabor con un toque de arroz y aroma a malta sutilmente notorio. Una de las cervezas más importantes de Japón y que recorre el mundo en la actualidad.",
    price: "$ 15.000",
  },
];

type Props = {};
const Row = (props) => {
  return (
    <Grid item xs sm={4}>
      <Item data1={data} />
    </Grid>
  );
};
const MainJaponesas = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainJaponesas;
