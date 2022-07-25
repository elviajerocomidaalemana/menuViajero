// @flow
import * as React from "react";
import ItemFood from "./ItemFood";
import Grid from "@mui/material/Grid";
import gruyere from "../assets/img/salchichas/salchicha-gruyere.jpg";


const data = [
  {
    title: "Salchicha Gruyere",
    image:
      gruyere,
    description:
      "Es una salchicha de carne de res y cerdo, compuesta de queso gruyere. Sal, pimienta y especias.",
    price: "$ 15.000",
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
const MainSalchichaGruyere = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainSalchichaGruyere;
