import React, { useEffect, useMemo } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import LocationCityOutlined from '@material-ui/icons/LocationCityOutlined';
import { PropertyList } from "./property-list/PropertyList";
import { usePropertyUIContext } from "./PropertyUIContext";
import { useSubheader } from "../../../../../_metronic/layout";

export function PropertyCard() {

    const propertyUIContext = usePropertyUIContext();
    const propertyUIProps = useMemo(() => {
        return {
            ids: propertyUIContext.ids,
            queryParams: propertyUIContext.queryParams,
            setQueryParams: propertyUIContext.setQueryParams,
            newPropertyButtonClick: propertyUIContext.newPropertyButtonClick,
            openDeletePropertiesDialog: propertyUIContext.openDeletePropertiesDialog,
            openEditPropertyPage: propertyUIContext.openEditPropertyPage,
            openPropertyAddonsPage: propertyUIContext.openPropertyAddonsPage,
            openPropertyDetailsPage: propertyUIContext.openPropertyDetailsPage,
            openUpdatePropertyStatusDialog:
                propertyUIContext.openUpdatePropertyStatusDialog,
            openFetchPropertyDialog: propertyUIContext.openFetchPropertyDialog,
        };
    }, [propertyUIContext]);

    const _title = <h3 className="header-title"><LocationCityOutlined /> Listings</h3>;

    const suhbeader = useSubheader();

    useEffect(() => {

        suhbeader.setTitle('Property');
    }, [useSubheader]);

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
