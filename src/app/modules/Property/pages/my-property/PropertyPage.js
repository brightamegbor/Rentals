import React from "react";
import { Route } from "react-router-dom";
import { PropertyCard } from "./PropertyCard";
import { PropertyUIProvider } from "./PropertyUIContext";

export function PropertyPage({ history }) {
    const propertyUIEvents = {
        newPropertyButtonClick: () => {
            history.push("/property/new");
        },

        openEditPropertyPage: (id) => {
            history.push(`/my-property/my/${id}/edit`);
        },

        openPropertyDetailsPage: (id) => {
            history.push(`/my-property/preview/${id}`);
        },
    };


    return (
        <PropertyUIProvider propertyUIEvents={propertyUIEvents}>

            <PropertyCard />
        </PropertyUIProvider>


    );
}
