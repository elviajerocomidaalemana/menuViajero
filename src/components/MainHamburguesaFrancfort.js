// @flow
import * as React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

const data = [
  {
    title: "Hamburguesa Francfort",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/20/34/5a/der-fette-bulle-burger.jpg",
    description:
      "La compone un pan artesanal, vegetales frescos de la casa: lechuga, tomate y cebolla caramelizada. 150gr de res y cerdo combinados con especies propias del viajero. Su mayor atracción se centra en las salchichas, el huevo, el queso chédar y una toque de salsa picante de búfalo que sin duda alguna la posicionan en nuestro tercer lugar de hamburguesas.",
    price: "$ 18.000",
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
const MainHamburguesaFrancfort = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainHamburguesaFrancfort;
