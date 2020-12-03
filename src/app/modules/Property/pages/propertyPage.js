import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { PropertyPage } from "./my-property/PropertyPage";
import { ContentRoute } from "../../../../_metronic/layout";
import { PropertyAdd } from "./my-property/property-add/PropertyAdd";
// import { PropertyEdit } from "./my-property/property-edit/PropertyEdit";
import { PropertyDetails } from "./my-property/property-details/PropertyDetails";

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
      {/* <ContentRoute
        path="/property/my/:id/edit"
        component={PropertyEdit}
      /> */}
      <ContentRoute
        path="/property/preview/:id"
        component={PropertyDetails}
      />

    </Switch>
  );
}
