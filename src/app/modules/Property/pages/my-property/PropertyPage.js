import React from "react";
import { Route } from "react-router-dom";
import { PropertyCard } from "./PropertyCard";
import { PropertyUIProvider } from "./PropertyUIContext";
import { PropertyDeleteDialog } from "./property-delete-dialog/PropertyDeleteDialog";

export function PropertyPage({ history }) {
    const propertyUIEvents = {
        newPropertyButtonClick: () => {
            history.push("/property/new");
        },

        openEditPropertyPage: (id) => {
            history.push(`/property/edit/${id}`);
        },

        openPropertyAddonsPage: (id) => {
            history.push(`/property/edit/${id}/addons`);
        },

        openPropertyDetailsPage: (id) => {
            history.push(`/property/preview/${id}`);
        },

        openDeletePropertyDialog: (id) => {
            history.push(`/property/my/${id}/delete`)
        },
    };


    return (
        <PropertyUIProvider propertyUIEvents={propertyUIEvents}>
            <Route path="/property/my/:id/delete">
                {({ history, match }) => (
                    <PropertyDeleteDialog
                        show={match != null}
                        id={match && match.params.id}
                        onHide={() => {
                            history.push("/property/my");
                        }}
                    />
                )}
            </Route>

            <PropertyCard />
        </PropertyUIProvider>


    );
}
