import React from "react";
import "./App.scss";
import HomePage from "./components/Pages/HomePage/HomePage";
import ShopPage from "./components/Pages/Shop/Shop";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
