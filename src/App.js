import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./components/Pages/HomePage/HomePage";
import ShopPage from "./components/Pages/Shop/Shop";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
