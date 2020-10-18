import React from "react";
import { Route } from "react-router-dom";

import Home from './containers/Home'


const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Home} />
  </div>
);

export default BaseRouter;