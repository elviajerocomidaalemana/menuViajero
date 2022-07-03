// @flow
import * as React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

const data = [
  {
    title: "Salchicha Suiza Blanca",
    image:
      "",
    description:
      "Salchicha elaborada con masa fina de cerdo y combinada con especias naturales.",
    price: "$ 12.000",
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
const MainSalchichaSuizaBlanca = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainSalchichaSuizaBlanca;
