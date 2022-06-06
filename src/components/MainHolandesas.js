// @flow
import * as React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

const data = [
  {
    title: "8.6 Black",
    image:
      "https://swinkelsfamilybrewers.com/en/our-range/alcoholic-beers/8-6/86-black/_jcr_content/root/responsivegrid/productinformation/image.coreimg.1024.png/1601045303885.png",
    description:
      "Proveniente de Holanda. Tipo Dark Lager. El miembro más oscuro de la línea 8.6. Negro y robusto con un cuerpo excepcionalmente fuerte. Esta lager está hecha de cebada quemada, como granos de café tostados para un sabor intenso y pleno. Tiene una textura ligera y cremosa y un final de sabor agradablemente dulce. 8.6 Black se elabora con agua mineral natural de manantial y la mejor malta de cebada y lúpulos. Se necesita carácter para domesticar a este impresionante lobo negro.",
    price: "$ 15.000",
  },
  {
    title: "8.6 Original ",
    image: "https://swinkelsfamilybrewers.com/en/our-range/alcoholic-beers/8-6/86-original/_jcr_content/root/responsivegrid/productinformation/image.coreimg.1024.png/1572956122987.png",
    description:
      "Proviene de Holanda. El alfa de la línea 8.6 desde 1986. Una cerveza rubia, fuerte elaborada con lo mejor de la cebada de la propia maltería de la cervecería 8.6 para que se pueda preparar y licuar exactamente como les gusta. El proceso de fermentación único que sigue aumenta el sabor por las nubes. 8.6 Original es una cerveza afrutada con la dulzura del grano y un toque de anís. Un sorbo y tus papilas gustativas sabrán instantáneamente para qué están hechas. Si crees en la individualidad como un alfa, 8.6 Original es tu cerveza.",
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
const MainHolandesas = (props: Props) => {
  const {} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainHolandesas;
