// @flow
import * as React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

const data = [
  {
    title: "Salchicha Berner",
    image:
      "",
    description:
      "Salchicha elaborada a base de carne de cerdo y res más queso en su interior. La cubre una fina capa de tocineta ahumada.",
    price: "$ 27.000",
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
const MainSalchichaBerner = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainSalchichaBerner;
