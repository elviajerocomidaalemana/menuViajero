// @flow
import * as React from "react";
import ItemFood from "./ItemFood";
import Grid from "@mui/material/Grid";
import engadiner from "../assets/img/salchichas/salchicha-engadiner.jpg";


const data = [
  {
    title: "Salchicha Engadiner",
    image:
      engadiner,
    description:
      "Salchicha elaborada a base de carne de cerdo y res, de sabor a vino tinto, combinada con finas especias.",
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
const MainSalchichaEngadiner = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainSalchichaEngadiner;
