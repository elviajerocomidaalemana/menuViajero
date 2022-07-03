// @flow
import * as React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

const data = [
  {
    title: "Hamburguesa Belin",
    image:
      "https://www.homeburgerbar.com/sites/default/files/imagenes/sobre-nosotros.png",
    description:
      "La número uno del Viajero. Compuesta por nuestro único pan artesanal, vegetales frescos: lechuga, tomate y cebolla caramelizada. 150gr de carne de res y cerdo combinados con especies propias del viajero, 100 gr de lomo de cerdo, más una tocineta ahumada y queso azul.",
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
const MainHamburguesaBerlin = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainHamburguesaBerlin;
