// @flow
import * as React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";
import BrewDogPunkIPA from "../assets/img/escocesas/BrewDog-Punk-IPA.png";
import InnisGunnTheOriginal from "../assets/img/escocesas/Innis&Gunn-The-Original.png";

const data = [
  {
    title: "BrewDog Punk IPA",
    image:
      // "https://www.bodecall.com/images/stories/virtuemart/product/brewdog-punk-ipa.png",
      BrewDogPunkIPA,
    description:
      "Proviene de Escocia, estilo India Pale Ale de color dorado. De cuerpo medio, espuma blanca y densa al servirse. La cerveza que lo inició todo y bajo la frase quizá no te guste. Se convirtió en un clásico de esta famosa e importante cervecería independiente escocesa. Cerveza cargada de lúpulos de todo el mundo, lo que genera una explosión de sabor en boca que el une caramelo, frutas tropicales y pomelo. Esto precede un final amargo en el retrogusto para concluir la experiencia fácil de beber y supremamente refrescante.",
    price: "$ 15.000",
  },
  {
    title: "Innis & Gunn The Original",
    image:
      // "https://www.innisandgunn.com/uploads/images/isolatedproducts/_product/the-original-new.png",
      InnisGunnTheOriginal,
    description:
      "Ptoviene de Escocia. De color marrón brillante, ligera corona de espuma que se disipa rápidamente por la escasa carbonatación. Tiene una historia particular en su elaboración ya que se logró por «accidente». Una destilería de Escocia tenía como objetivo elaborar un Whisky con toques de cerveza al final y habló con el maestro cervecero Douglas Sharp. Se puso a la tarea y elaboró una cerveza, en la que el ingrediente del Whisky fue el éxito rotundo, pero la cerveza se estaba desaprovechado. (Cerveza con meses de maduración en barricas de roble americano que se tiraba por los desagües). Un día los empleados probaron dicha cerveza y les encantó. Allí había nacido la «Oack Beer Age». Finalmente lograron perfeccionar el proceso y la cerveza The Original se consolidó hasta nuestros días.",
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
const MainEscocesas = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainEscocesas;
