import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { PropertyPage } from "./my-property/PropertyPage";
import { ContentRoute } from "../../../../_metronic/layout";
import { PropertyAdd } from "./my-property/property-add/PropertyAdd";

export default function propertyPage() {
  return (
    <Switch>
      <Redirect
        exact={true}
        from="/property"
        to="/property/my"
      />
      <ContentRoute path="/property/my" component={PropertyPage} />
      <ContentRoute path="/property/new" component={PropertyAdd} />

    </Switch>
  );
}
