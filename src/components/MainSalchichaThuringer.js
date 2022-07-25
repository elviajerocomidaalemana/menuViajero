// @flow
import * as React from "react";
import ItemFood from "./ItemFood";
import Grid from "@mui/material/Grid";
import thuringer from "../assets/img/salchichas/salchicha-thuringer.jpg";


const data = [
  {
    title: "Salchicha Thuringer",
    image:
      thuringer,
    description:
      "Salchicha elaborada a base de carne de cerdo granulado grueso con sabor a mejorana.",
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
const MainSalchichaThuringer = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainSalchichaThuringer;
