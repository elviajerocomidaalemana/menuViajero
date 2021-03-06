// @flow
import * as React from "react";
import ItemFood from "./ItemFood";
import Grid from "@mui/material/Grid";
import berlin from "../assets/img/hamburger/hamburguesa-berlin.jpg";

const data = [
  {
    title: "Hamburguesa Belin",
    image: berlin,
    description:
      "La número uno del Viajero. Compuesta por nuestro único pan artesanal, vegetales frescos: lechuga, tomate y cebolla caramelizada. 150gr de carne de res y cerdo combinados con especies propias del viajero, 100 gr de lomo de cerdo, más una tocineta ahumada y queso azul.",
    combo: true,
    priceCombo: "$ 27.000",
    priceOnly: "$ 24.000",
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
const MainHamburguesaBerlin = (props: Props) => {
  const { data } = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainHamburguesaBerlin;
