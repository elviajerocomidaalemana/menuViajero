// @flow
import * as React from "react";
import ItemFood from "./ItemFood";
import Grid from "@mui/material/Grid";
import caracol from "../assets/img/salchichas/salchicha-caracol.jpg";


const data = [
  {
    title: "Salchicha Caracol",
    image:
      caracol,
    description:
      "Salchicha elaborada con carne de ternera y cerdo y salsa de queso.",
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
const MainSalchichaCaracol = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainSalchichaCaracol;
