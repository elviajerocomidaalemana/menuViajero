// @flow
import * as React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

const data = [
  {
    title: "Asahi Super Dry",
    image:
      "https://www.beers2rock.com/wp-content/uploads/cervezaartesana_Budweiser_Budvar_B_Original_Czechvar_12_beers2rock.png",
    description:
      "Proveniente de República Checa. De apariencia color dorado. Su espuma es alta y blanca al servirse y se disipa rápidamente en copa. Cerveza tipo Pilsner de baja fermentación; muy conocida a nivel mundial ya que los checos son expertos en este estilo. Es elaborada a partir de agua manantial con granos de cebada moravia. Finalmente de poco amargor, muy ligera en cuerpo, fácil de beber y perfecta para refrescarse.",
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
const MainRepublicaCheca = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainRepublicaCheca;
