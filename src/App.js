import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainAlemanas from "./components/MainAlemanas";
import MainHolandesas from "./components/MainHolandesas";
import MainRusas from "./components/MainRusas";
import MainEscocesas from "./components/MainEscocesas";
import MainBelgas from "./components/MainBelgas";
import MainInglesas from "./components/MainInglesas";
import MainAustralianas from "./components/MainAustralianas";
import MainJaponesas from "./components/MainJaponesas";
import MainRepublicaCheca from "./components/MainRepublicaCheca";
import MainHamburguesaBerlin from "./components/MainHamburguesaBerlin";
import MainHamburguesaMunich from "./components/MainHamburguesaMunich";
import MainHamburguesaFrancfort from "./components/MainHamburguesaFrancfort";
import MainHamburguesaHamburgo from "./components/MainHamburguesaHamburgo";
import MainSalchichaGruyere from "./components/MainSalchichaGruyere";
import MainSalchichaNurnberger from "./components/MainSalchichaNurnberger";
import MainSalchichaEngadiner from "./components/MainSalchichaEngadiner";
import MainSalchichaBerner from "./components/MainSalchichaBerner";
import MainSalchichaThuringer from "./components/MainSalchichaThuringer";
import MainSalchichaCaracol from "./components/MainSalchichaCaracol";
import MainSalchichaSuizaBlanca from "./components/MainSalchichaSuizaBlanca";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainAlemanas />} exact />
        <Route path="/holanda" element={<MainHolandesas />} exact />
        <Route path="/rusia" element={<MainRusas />} exact />
        <Route path="/escocia" element={<MainEscocesas />} exact />
        <Route path="/belgica" element={<MainBelgas />} exact />
        <Route path="/inglaterra" element={<MainInglesas />} exact />
        <Route path="/australia" element={<MainAustralianas />} exact />
        <Route path="/japon" element={<MainJaponesas />} exact />
        <Route path="/republica_checa" element={<MainRepublicaCheca />} exact />
        <Route path="/hberlin" element={<MainHamburguesaBerlin />} exact />
        <Route path="/hmunich" element={<MainHamburguesaMunich />} exact />
        <Route path="/hfrancfort" element={<MainHamburguesaFrancfort />} exact />
        <Route path="/hhamburgo" element={<MainHamburguesaHamburgo />} exact />
        <Route path="/salGruyere" element={<MainSalchichaGruyere />} exact />
        <Route path="/salNurnberger" element={<MainSalchichaNurnberger />} exact />
        <Route path="/salEngadiner" element={<MainSalchichaEngadiner />} exact />
        <Route path="/salBerner" element={<MainSalchichaBerner />} exact />
        <Route path="/salThuringer" element={<MainSalchichaThuringer />} exact />
        <Route path="/salCaracol" element={<MainSalchichaCaracol />} exact />
        <Route path="/salSuizaBlanca" element={<MainSalchichaSuizaBlanca />} exact />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
