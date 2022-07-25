// @flow
import * as React from "react";
import ItemFood from "./ItemFood";
import Grid from "@mui/material/Grid";
import suiza_blanca from "../assets/img/salchichas/salchicha-suiza-blanca.jpg";


const data = [
  {
    title: "Salchicha Suiza Blanca",
    image:
      suiza_blanca,
    description:
      "Salchicha elaborada con masa fina de cerdo y combinada con especias naturales.",
    price: "$ 12.000",
  },
];

type Props = {};
const Row = (props) => {
  return (
    <Grid item xs sm={4}>
      <ItemFood data1={data} />
    </Grid>
  );
};
const MainSalchichaSuizaBlanca = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainSalchichaSuizaBlanca;
