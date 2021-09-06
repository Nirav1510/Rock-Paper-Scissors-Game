import React from "react";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Header/>
      </div>
    </React.Fragment>
  );
};

export default App;
