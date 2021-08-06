import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Main, Favorite } from './page';
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/favorite" exact component={Favorite} />
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;