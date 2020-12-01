import React, { useEffect, useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/property/propertyActions";
import * as uiHelpers from "../PropertyUIHelpers";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import { usePropertyUIContext } from "../PropertyUIContext";
import { PropertyListCard } from "./PropertyListCard";
import { PropertyListCardStatus } from "./PropertyListCardStatus";


export function PropertyList() {
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

        };
    }, [propertyUIContext]);

    // Tabs
    const [tab, setTab] = useState("all");
    // const [data, setData] = useState();

    // getting current state of properties list from store (Redux)
    const { currentState } = useSelector(
        (state) => ({ currentState: state.properties }),
        shallowEqual
    );

    const { totalCount, entities, listLoading } = currentState;

    // PROPERTY REDuX STATE
    const dispatch = useDispatch();
    useEffect(() => {

        // clear selections list
        propertyUIProps.setIds([]);
        // server call by queryParams
        dispatch(actions.fetchProperties(propertyUIProps.queryParams));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [propertyUIProps.queryParams, dispatch]);

    // List pagination properties

    // const paginationOptions = {
    //     custom: true,
    //     totalSize: totalCount,
    //     sizePerPageList: uiHelpers.sizePerPageList,
    //     sizePerPage: propertyUIProps.queryParams.pageSize,
    //     page: propertyUIProps.queryParams.pageNumber,
    // };

    return (
        <div>
            <ul className="nav nav-tabs nav-tabs-line font-size-16" role="tablist">
                <li className="nav-item ml-auto" onClick={() => setTab("all")}>
                    <a
                        className={`nav-link ${tab === "all" && "active"}`}
                        data-toggle="tab"
                        role="tab"
                        aria-selected={(tab === "all").toString()}
                    >
                        All
                        </a>
                </li>

                <>
                    {" "}
                    <li className="nav-item" onClick={() => setTab("Active")}>
                        <a
                            className={`nav-link ${tab === "Active" && "active"}`}
                            data-toggle="tab"
                            role="button"
                            aria-selected={(tab === "Active").toString()}
                        >
                            Active
                </a>
                    </li>
                    <li className="nav-item" onClick={() => setTab("Pending")}>
                        <a
                            className={`nav-link ${tab === "Pending" && "active"}`}
                            data-toggle="tab"
                            role="tab"
                            aria-selected={(tab === "Pending").toString()}
                        >
                            Pending
                </a>
                    </li>

                    <li className="nav-item" onClick={() => setTab("Disabled")}>
                        <a
                            className={`nav-link ${tab === "Disabled" && "active"}`}
                            data-toggle="tab"
                            role="tab"
                            aria-selected={(tab === "Disabled").toString()}
                        >
                            Disabled
                </a>
                    </li>
                </>
            </ul>


            <div className="mt-5">
                {tab === "all" && (
                    <div>
                        {entities !== null && (
                            <PropertyListCard
                                data={entities}
                            />

                        )}

                    </div>
                )}
                {tab === "Active" && (
                    <div>
                        {entities !== null && (
                            <PropertyListCardStatus
                                propStatus='active'
                                secStatus='active'
                                data={entities}
                            />
                        )}
                    </div>

                )}
                {tab === "Pending" && (
                    <div>
                        {entities !== null && (
                            <PropertyListCardStatus
                                propStatus='pending'
                                secStatus='pending'
                                data={entities}
                            />
                        )}
                    </div>

                )}
                {tab === "Disabled" && (
                    <div>
                        {entities !== null && (
                            <PropertyListCardStatus
                                propStatus='disabled'
                                secStatus='disapproved'
                                data={entities}
                            />
                        )}
                    </div>

                )}
            </div>

        </div>

    )
}