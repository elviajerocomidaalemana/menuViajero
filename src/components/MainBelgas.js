// @flow
import * as React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";
import DeliriumNocturnum from '../assets/img/belgas/Delirium-Nocturnum.png'
import DeliriumTremens from '../assets/img/belgas/Delirium-Tremens.png'
import GuldenDraakClassic from '../assets/img/belgas/Gulden-Draak-Classic.png'
import GuldenDraak9000Quadruple from '../assets/img/belgas/Gulden-Draak-9000-Quadruple.png'
import Duvel from '../assets/img/belgas/Duvel.png'
import LaChouffeBlonde from '../assets/img/belgas/La-Chouffe-Blonde.png'
import LiefmansFruitesse from '../assets/img/belgas/Liefmans-Fruitesse.png'
import LiefmansGoudenband from '../assets/img/belgas/Liefmans-Goudenband.png'
import MaredsousBlond from '../assets/img/belgas/Maredsous-Blond.png'
import MaredsousBrune from '../assets/img/belgas/Maredsous-Brune.png'
import MaredsousTripel from '../assets/img/belgas/Maredsous-Tripel.png'
import StIdesbaldBlond from '../assets/img/belgas/St-Idesbald-Blond.png'
import VedettExtraIPA from '../assets/img/belgas/Vedett-Extra-IPA.png'
import VedettExtraWhite from '../assets/img/belgas/Vedett-Extra-White.png'

const data = [
  {
    title: "Delirium Nocturnum ",
    image:
      DeliriumNocturnum,
    description:
      "Proviene de Bélgica. Cerveza oscura y fuerte que se fermenta en envase, sabor a malta y transfondo a lúpulo. El regusto es un poco amargo y como su hermana rubia también produce una sensación de picor en la boca.",
    price: "$ 20.000",
  },
  {
    title: "Delirium Tremens",
    image:
      DeliriumTremens,
    description:
      "Proviene de Bélgica. De color ámbar amarillento, pálida y bastante turbia. Espuma en buena cantidad, blanca y de escasa persistencia. En boca tiene bastante cuerpo y un carbónico fino pincantón.",
    price: "$ 20.000",
  },
  {
    title: "Gulden Draak Classic",
    image:
      GuldenDraakClassic,
    description:
      "Proviene de Bélgica. De sabor a caramelo, alto volumen de alcohol, malta tostada y café, cuerpo completo, con notas a chocolate, caramelo. El alcohol está un poco menos influenciado en comparación con su aroma. Color cobrizo y espuma densa y alta.",
    price: "$ 20.000",
  },
  {
    title: "Gulden Draak 9000 Quadruple",
    image:
      GuldenDraak9000Quadruple,
    description:
      "Proviene de Bélgica. De color profundo entre ámbar y dorado que al verter en copa presenta una voluptuosa capa de espuma, finalmente un detonante alto volumen de alcohol.",
    price: "$ 20.000",
  },
  {
    title: "Duvel",
    image:
      Duvel,
      description:
      "Proveniente de Bélgica. Cerveza rubia tipo Ale especial, con un proceso de fermentación único y extenso de 90 días, color dorado y espuma alta al servirse que se disipa lentamente.",
    price: "$ 20.000",
  },
  {
    title: "La Chouffe Blonde",
    image:
      LaChouffeBlonde,
    description:
      "Proveniente de Bélgica. La CHOUFFE proveniente de Bélgica revela notas cítricas en el paladar, seguidas de un toque refrescante, agradablemente especiado, que le confiere una gran ligereza. Con su 8% de alcohol y su ligero sabor a lúpulo, esta cerveza dorada intensa ha conquistado a los amantes de la cerveza en todo el mundo a lo largo de los años. Su sabor único también ha sido recompensado con varios premios. Consúmase servida en copa o vaso. Descubre la leyenda de los elfos del Vallée des Fées Marcel y Cie.",
    price: "$ 20.000",
  },
  {
    title: "Liefmans Fruitesse",
    image:
      LiefmansFruitesse,
    description:
      "Proveniente de Bélgica. Cerveza única y refrescante, es una mezcla de cervezas maduradas por 18 meses con cerezas, se utiliza jugo natural de cereza, arándano, fresa y frambuesa. Perfecta para servir a la roca. Color rojo y espuma ligeramente rosada.",
    price: "$ 15.000",
  },
  {
    title: "Liefmans Goudenband",
    image:
      LiefmansGoudenband,
    description:
      "Cerveza exclusiva de alta fermentación, producida con técnicas artesanales y de fermentación especiales que le aportar a la cerveza un delicado y fino sabor, se puede conservar por 10 años, color café claro y espuma cobriza. Resultado de la mezcla de una cerveza añejada entre 4 y 12 meses en la bodega. Sabores agridulces a caramelo combinados con cerezas.",
    price: "$ 18.000",
  },
  {
    title: "Maredsous Blond",
    image:
      MaredsousBlond,
    description:
      "Proveniente de Bélgica. De apariencia dorada, predomina su textura, cuerpo y aroma. Pertenece a la tradición de los monjes benedictinos y actualmente unas de las pocas Abadías que producen cerveza en el mundo. Espuma blanca, alta y densa al servirse.",
    price: "$ 18.000",
  },
  {
    title: "Maredsous Brune",
    image:
      MaredsousBrune,
    description:
      "Proveniente de Bélgica. De apariencia oscura, espuma densa y alta. Alto contenido de alcohol y predomina su textura, cuerpo y sabor y actualmente una de las pocas abadías que producen cerveza en el mundo.",
    price: "$ 18.000",
  },
  {
    title: "Maredsous Tripel",
    image:
      MaredsousTripel,
    description:
      "Proveniente de Bélgica. Cerveza tipo Belgian Tripel. De apariencia ámbar en la que predomina el cuerpo y sabor. Es actualmente una de las pocas abadías que producen cerveza en el mundo; de alto contenido de alcohol, bastante cuerpo, color dorado, espuma blanca y alta.",
    price: "$ 18.000",
  },
  {
    title: "St-Idesbald Blond",
    image:
      StIdesbaldBlond,
    description:
      "Proveniente de Bélgica. Cerveza de color y aspecto dorado, espuma agradable y firme, aroma complejo en nariz, con notas de ginebra, lima, cilantro y lúpulo. Sabor amargo, fresco, ligeramente picante y equilibrado.",
    price: "$ 16.000",
  },
  {
    title: "Vedett Extra IPA",
    image:
      VedettExtraIPA,
    description:
      "Proveniente de Bélgica.  Elaborada con cuatro lúpulos americanos y con proceso Dry-Hopping lo que le aporta aromas florales y herbales del lúpulo. De color anaranjado, espuma alta y sedosa beige. Se nota perfectamente al servirse en copa; aroma cítrico más notable a naranja, sutil durazno combinado con el lúpulo que se percibe cuando se destapa la botella; muy fresca, amargor moderado y dulzor ligero dado por la malta.",
    price: "$ 16.000",
  },
  {
    title: "Vedett Extra White",
    image:
      VedettExtraWhite,
    description:
      "Proveniente de Bélgica. Supremamente refrescante de bajo cuerpo; color dorado pajizo que proporciona espuma blanca de retención media con notables burbujas al servirse. Aroma cítrico a limón, naranja y cilantro. Finaliza con un sabor ligeramente amargo y seco que combina la frescura y acidez del trigo y lo cítrico de las frutas.",
    price: "$ 16.000",
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
const MainBelgas = (props: Props) => {
  const {data} = props;
  return (
    <div>
      <Row data={data} />
    </div>
  );
};
export default MainBelgas;
