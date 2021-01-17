import React, { useEffect, useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/property/propertyActions";
import * as uiHelpers from "../PropertyUIHelpers";
import { Card, Pagination } from "../../../../../../_metronic/_partials/controls";
import { usePropertyUIContext } from "../PropertyUIContext";
import { PropertyListCard } from "./PropertyListCard";
import { PropertyListCardStatus } from "./PropertyListCardStatus";


export function PropertyDropdownActions() {
    // property ui context

    const propertyUIContext = usePropertyUIContext();
    const propertyUIProps = useMemo(() => {
        return {
            ids: propertyUIContext.ids,
            setIds: propertyUIContext.setIds,
            queryParams: propertyUIContext.queryParams,
            setQueryParams: propertyUIContext.setQueryParams,
            openEditPropertyPage: propertyUIContext.openEditPropertyPage,
            openDeletePropertyDialog: propertyUIContext.openDeletePropertyDialog,
            openPropertyDetailsPage: propertyUIContext.openPropertyDetailsPage,
            openPropertyAddonsPage: propertyUIContext.openPropertyAddonsPage,

        };
    }, [propertyUIContext]);
}