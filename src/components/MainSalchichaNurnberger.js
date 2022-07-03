// @flow
import * as React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

const data = [
  {
    title: "Salchicha Nurnberger",
    image:
      "",
    description:
      "Salchicha compuesta de carne molida de res y cerdo, pimienta, sal, semillas y hojas de cilantro.",
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
const MainSalchichaNurnberger = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainSalchichaNurnberger;
