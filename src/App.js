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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
