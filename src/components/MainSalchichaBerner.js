// @flow
import * as React from "react";
import ItemFood from "./ItemFood";
import Grid from "@mui/material/Grid";
import berner from "../assets/img/salchichas/salchicha-berner.jpg";

const data = [
  {
    title: "Salchicha Berner",
    image: berner,
    description:
      "Salchicha elaborada a base de carne de cerdo y res más queso en su interior. La cubre una fina capa de tocineta ahumada.",
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
const MainSalchichaBerner = (props: Props) => {
  const { data } = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainSalchichaBerner;
