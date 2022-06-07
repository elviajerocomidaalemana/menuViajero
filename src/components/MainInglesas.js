// @flow
import * as React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

const data = [
  {
    title: "Adnams Innovation IPA",
    image:
      "https://anesabirra.it/wp-content/uploads/2017/12/beer16-272x1024.png",
    description:
      "Proviene de Inglaterra. Estilo India Pale Ale. De color dorado, ligera y refrescante, notas cítricas y frutales, espuma blanca no tan densa y baja al servirse en copa.",
    price: "$ 15.000",
  },
  {
    title: "Fuller's London Pride",
    image:
      "https://www.saq.com/media/catalog/product/1/3/13965881-1_1578546923.png?quality=80&fit=bounds&height=&width=",
    description:
      "Proveniente de Inglaterra. De color cobrizo y sin excesiva espuma, destaca por una suave base de malta y los delicados toques de las diversas variedades de lúpulo con las que se produce.",
    price: "$ 20.000",
  },
  {
    title: "Robinsons Trooper",
    image:
      "https://lalicorera.com/img/products/robinsons-trooper.png",
    description:
      "Proveniente de Inglaterra. Es una cerveza con un color dorado anaranjado con carbonatación ligera. Tiene un aroma dulce a caramelo y frutas, pan y lúpulo. Su sabor es ligeramente dulce de caramelo y frutas, lúpulo y un toque herbal. Tiene un final ligeramente amargo de los lúpulos. Está hecha a base de tres tipos de lúpulos. Trooper es una cerveza premium británica inspirada por Iron Maiden y artesanos de la cervecería Robinsons. Entusiasta de las Ale, el vocalista Bruce Dickinson ha desarrollado una cerveza que tiene verdadera profundidad de carácter. Sabores de malta y notas cítricas de una mezcla única de Bobec, Goldings y lúpulo Cascade dominan esta profunda ale dorada con un sutil toque de limón.",
    price: "$ 15.000",
  },
  {
    title: "Aspall Suffolk Draught",
    image:
      "https://cdn.shopify.com/s/files/1/0269/1176/8618/products/aspall_draught_600x600.png?v=1620341052",
    description:
      "Proveniente de Inglaterra. Creada para celebrar los 275 años de fabricación de sidra Aspall por los hermanos Barry y Henry Chevallier Guild de la octava generación. Es levemente seca, tiene un color dorado, un delicioso aroma a manzana y deja un refrescante y natural sabor en la boca.",
    price: "$ 20.000",
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
const MainInglesas = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainInglesas;
