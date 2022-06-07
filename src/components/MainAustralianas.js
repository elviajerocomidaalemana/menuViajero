// @flow
import * as React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

const data = [
  {
    title: "Coopers Original",
    image:
      "https://www.beers2rock.com/wp-content/uploads/cervezaartesana_Cooper_Original_Pale_Ale_beers2rock.png",
    description:
      "Proveniente de Australia. Con su carácter floral, afrutado, equilibrado y con un chispeante amargor, esta pale ale tiene un sabor atrayente perfecto en cualquier ocasión. Elaborada al estilo Burton-on-Trent que corresponde a aguas con alto contenido de sulfato de calcio (yeso). Su sabor mineral en boca tiene una intensa carbonatación y notas de lúpulo suave y herbal, además de un toque de levadura. En apariencia es de color dorado casi naranja.",
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
const MainAustralianas = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainAustralianas;
