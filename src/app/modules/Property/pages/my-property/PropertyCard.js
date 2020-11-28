import React, { useMemo } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import LocationCityOutlined from '@material-ui/icons/LocationCityOutlined';
import { PropertyList } from "./property-list/PropertyList";
import { usePropertyUIContext } from "./PropertyUIContext";

import {
    Link
} from 'react-router-dom';

export function PropertyCard() {

    const propertyUIContext = usePropertyUIContext();
    const propertyUIProps = useMemo(() => {
        return {
            ids: propertyUIContext.ids,
            queryParams: propertyUIContext.queryParams,
            setQueryParams: propertyUIContext.setQueryParams,
            newPropertyButtonClick: propertyUIContext.newPropertyButtonClick,
            openDeletePropertysDialog: propertyUIContext.openDeletePropertiesDialog,
            openEditPropertyPage: propertyUIContext.openEditPropertyPage,
            openUpdatePropertyStatusDialog:
                propertyUIContext.openUpdatePropertyStatusDialog,
            openFetchPropertyDialog: propertyUIContext.openFetchPropertyDialog,
        };
    }, [propertyUIContext]);

    const _title = <h3 className="header-title"><LocationCityOutlined /> Listings</h3>;


    return (
        <Card>
            <CardHeader title={_title}>
                <CardHeaderToolbar>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={propertyUIProps.newPropertyButtonClick}
                    >
                        New Property
                    </button>
                </CardHeaderToolbar>
            </CardHeader>
            <CardBody>
                <PropertyList />
            </CardBody>
        </Card>
    );
}
