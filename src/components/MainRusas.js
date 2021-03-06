// @flow
import * as React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";
import Baltika6 from "../assets/img/rusas/Baltika6.webp";

const data = [
  {
    title: "Baltika 6",
    image:
      Baltika6,
    description:
      "Proviene de Rusia. Estilo Porter. De apariencia color negro, de cuerpo medio, espuma beige, sedosa al servirse, además alta que se disipa lentamente en el vaso. Una cerveza tradicional y elaborada con antiguas recetas inglesas, cuerpo alto y espuma blanca alta al servirse.",
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
const MainRusas = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainRusas;
