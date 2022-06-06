import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import MainAlemanas from "./components/MainAlemanas";
// import MainHolandesas from "./components/MainHolandesas";
import Uno from "./components/Uno";
import Dos from "./components/Dos";
import { BrowserRouter as Route } from "react-router-dom";
import * as Switch from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <div>
       <Switch>
        <Route path="/" component={Uno} exact />
        <Route path="/dos" component={Dos} exact />
        {/* <Route path="/holand" component={MainHolandesas} exact/>  */}
      </Switch> 
      </div>
      <Footer />
    </div>
  );
};

export default App;
