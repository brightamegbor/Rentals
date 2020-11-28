import React, { useEffect, useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/property/propertyActions";
import * as uiHelpers from "../PropertyUIHelpers";
import {
    NoRecordsFoundMessage,
    PleaseWaitMessage
} from "../../../../../../_metronic/_helpers";
import { CardFooter, Pagination } from "../../../../../../_metronic/_partials/controls";
import { usePropertyUIContext } from "../PropertyUIContext";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import MoreVertRounded from "@material-ui/icons/MoreVertRounded";
import LaunchOutlined from "@material-ui/icons/LaunchOutlined";
import EditnOutlinedIcon from "@material-ui/icons/EditOutlined";

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
                            <div>
                                {entities.map((item, index) => (
                                    <Card key={index}>
                                        <CardBody className="row">
                                            <div className="col-3 img-container">
                                                <img alt="property" src={item.photos === "" ? "/media/stcok-900x600/20.jpg" : item.photos} />
                                                {item.status === "pending" && (
                                                    <div className="status-top-left status-pending"><small>Pending</small></div>
                                                )}
                                                {item.status === "active" && (
                                                    <div className="status-top-left status-active"><small>Active</small></div>
                                                )}
                                                {item.status === "disabled" && (
                                                    <div className="status-top-left status-disabled"><small>Disabled</small></div>
                                                )}
                                                {item.status === "disapproved" && (
                                                    <div className="status-top-left status-disapproved"><small>Disapproved</small></div>
                                                )}
                                            </div>
                                            <div className="col-8 font-size-14 pl-8 mt-2">
                                                <h3 className="color-default">{item.propertySubCategory}</h3>
                                                <h6 className="color-custom-gray">{item.propertyAddress}</h6>

                                                <div className="row mt-6">
                                                    <div className="col-3">
                                                        <p><LaunchOutlined />View</p>
                                                    </div>
                                                    <div className="col-3">
                                                        <p><EditnOutlinedIcon />Edit</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-1">
                                                <MoreVertRounded />
                                            </div>

                                        </CardBody>

                                        <CardFooter>
                                            <div className="">
                                                <p className="text-capitalize">{item.plan}</p>
                                            </div>
                                        </CardFooter>
                                        <PleaseWaitMessage entities={entities} />
                                        <NoRecordsFoundMessage entities={entities} />
                                    </Card>

                                ))}

                            </div>
                        )}

                    </div>
                )}
                {tab === "Active" && (
                    <p>Active tab</p>
                )}
                {tab === "Pending" && (
                    <p>Pending tab!</p>
                )}
                {tab === "Disabled" && (
                    <p>Disabled tab!</p>
                )}
            </div>

        </div>

    )
}