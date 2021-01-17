import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { PropertyPage } from "./my-property/PropertyPage";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";
import { PropertyAdd } from "./my-property/property-add/PropertyAdd";
// import { PropertyEdit } from "./my-property/property-edit/PropertyEdit";
import { PropertyDetails } from "./my-property/property-details/PropertyDetails";
import { PropertyEdit } from "./my-property/property-edit/PropertyEdit";
import { PropertyAddons } from "./my-property/property-addons/PropertyAddons";

export default function propertyPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        <Redirect
          exact={true}
          from="/property"
          to="/property/my"
        />
        <ContentRoute path="/property/new" component={PropertyAdd} />
        {/* <ContentRoute
        path="/property/my/:id/edit"
        component={PropertyEdit}
      /> */}
        <ContentRoute
          path="/property/preview/:id"
          component={PropertyDetails}
        />

        <ContentRoute
          path="/property/edit/:id"
          component={PropertyEdit}
        />

        <ContentRoute
          path="/property/:id/addons"
          component={PropertyAddons}
        />


        <ContentRoute path="/property/my" component={PropertyPage} />
      </Switch>
    </Suspense>
  );
}
