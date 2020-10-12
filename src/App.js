import React from "react";
import Homepage from "./pages/homepage/Homepage.jsx";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";

const HatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
