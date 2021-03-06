// @flow
import * as React from "react";
import ItemFood from "./ItemFood";
import Grid from "@mui/material/Grid";
import munich from "../assets/img/hamburger/hamburguesa-munich.jpg";

const data = [
  {
    title: "Hamburguesa Munich",
    image: munich,
    description:
      "La compone un pan artesanal, vegetales frescos de la casa: lechuga, tomate y cebolla caramelizada. 150gr de carne de res y cerdo combinados con especies propias del viajero. Su especialidad está en el jamón pastrami y queso chédar, que sin duda la ubican en el segundo lugar de nuestras hamburguesas.",
    combo: true,
    priceCombo: "$ 23.000",
    priceOnly: "$ 19.000",
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
const MainHamburguesaMunich = (props: Props) => {
  const { data } = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainHamburguesaMunich;
