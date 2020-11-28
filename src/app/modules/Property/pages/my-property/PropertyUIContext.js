import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { initialFilter } from "./PropertyUIHelpers";

const PropertyUIContext = createContext();

export function usePropertyUIContext() {
    return useContext(PropertyUIContext);
}

export const PropertyUIConsumer = PropertyUIContext.Consumer;

export function PropertyUIProvider({ propertyUIEvents, children }) {
    const [queryParams, setQueryParamsBase] = useState(initialFilter);
    const [ids, setIds] = useState([]);
    const setQueryParams = useCallback((nextQueryParams) => {
        setQueryParamsBase((prevQueryParams) => {
            if (isFunction(nextQueryParams)) {
                nextQueryParams = nextQueryParams(prevQueryParams);
            }

            if (isEqual(prevQueryParams, nextQueryParams)) {
                return prevQueryParams;
            }

            return nextQueryParams;
        });
    }, []);

    const value = {
        queryParams,
        setQueryParamsBase,
        ids,
        setIds,
        setQueryParams,
        newPropertyButtonClick: propertyUIEvents.newPropertyButtonClick,
        openEditPropertyPage: propertyUIEvents.openEditPropertyPage,
        openDeletePropertyDialog: propertyUIEvents.openDeletePropertyDialog,
        openDeletePropertiesDialog: propertyUIEvents.openDeletePropertiesDialog,
        openFetchPropertiesDialog: propertyUIEvents.openFetchPropertiesDialog,
        openUpdatePropertiesStatusDialog:
            propertyUIEvents.openUpdatePropertiesStatusDialog,
    };

    return (
        <PropertyUIContext.Provider value={value}>
            {children}
        </PropertyUIContext.Provider>
    );
}
