// @flow
import * as React from "react";
import ItemFood from "./ItemFood";
import Grid from "@mui/material/Grid";
import hamburgo from '../assets/img/hamburger/hamburguesa-hamburgo.jpg'


const data = [
  {
    title: "Hamburguesa Hamburgo",
    image:
      // "https://www.gastronosfera.com/sites/default/files/styles/dos_columnas/public/field/image/hamburguesa_slide.jpg?itok=-T8CyKP1",
      hamburgo,
    description:
      "Compuesta de nuestro pan artesanal, vegetales frescos de la casa: lechuga, tomate y cebolla caramelizada. 150gr de carne de res y cerdo combinados con especies propias del viajero.  La distingue el maíz tierno y un suculento queso mozzarella.",
    price: "$ 17.000",
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
const MainHamburguesaHamburgo = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainHamburguesaHamburgo;
