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
    };


    return (
        <PropertyUIProvider propertyUIEvents={propertyUIEvents}>

            <PropertyCard />
        </PropertyUIProvider>


    );
}
