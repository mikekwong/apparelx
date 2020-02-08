import React from "react";
import "./App.scss";
import HomePage from "./components/Pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";

const HatsPage = props => (
  <div>
    {console.log(props)}
    <h1>hats Page</h1>
  </div>
);

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
};

export default App;
