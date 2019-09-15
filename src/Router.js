import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FilmDetails from "./Componets/FilmDetails";
import App from "./App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/films/:episode_id' component={FilmDetails} />
      <Route path='/' render={() => <h1>Page Not Found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Router;
