import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import details from "./details";
import lienInfo from "./lienInfo";
import Escrow from "./escrow";

const PropertyDetails = ({ match }) => (
  <div className="dashboard-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/details`} />
      <Route path={`${match.url}/details`} component={details} />
      <Route path={`${match.url}/lieninfo`} component={lienInfo} />
      <Route path={`${match.url}/escrow`} component={Escrow} />
      <Redirect to="/error" />
    </Switch>
  </div>
);
export default PropertyDetails;
