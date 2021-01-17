import React from 'react';
import {
    Card,
    CardBody,
    CardFooter
} from "../../../../../../_metronic/_partials/controls";
import {
    NoRecordsFoundMessage,
    PleaseWaitMessage
} from "../../../../../../_metronic/_helpers";
import MoreVertRounded from "@material-ui/icons/MoreVertRounded";
import LaunchOutlined from "@material-ui/icons/LaunchOutlined";
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';



export function PropertyListCardStatus(props) {
    const { data,
        openDeletePropertyDialog,
        openPropertyDetailsPage,
        openEditPropertyPage,
        openPropertyAddonsPage,
        propStatus,
        secStatus, ...rest } = props;

    return (
        <div {...rest}>
            {data.map((item, index) => (
                <div key={index}>
                    {(item.status === propStatus || item.status === secStatus) && (
                        <Card>
                            <CardBody className="row">
                                <div className="col-3 img-container">
                                    <img alt="property" src={item.photos === "" ? "/media/stcok-900x600/20.jpg" : item.photos[0]} />
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

                                    <div className="action-links mt-6">
                                        <div className="view-link">
                                            <Link
                                                to={`/property/preview/${item.id}`}

                                            ><LaunchOutlined />View</Link>
                                        </div>
                                        <div className="edit-link">
                                            <Link
                                                to={`/property/edit/${item.id}`}
                                            >
                                                <i className="fa fa-edit"></i>Edit
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-1 more-action">

                                    <DropdownButton
                                        alignRight
                                        title={<MoreVertRounded />}
                                        id="dropdown-menu-align-right"
                                    >
                                        <Dropdown.Item onClick={() => openPropertyDetailsPage(item.id)
                                        } eventKey="1">

                                            <LaunchOutlined /> View
                                </Dropdown.Item>
                                        <Dropdown.Item eventKey="2">
                                            <AccountCircleOutlined /> Leads
                                    </Dropdown.Item>

                                        <Dropdown.Item onClick={() => openEditPropertyPage(item.id)
                                        } eventKey="3">

                                            <i className="fa fa-edit"></i> Edit

                                </Dropdown.Item>

                                        <Dropdown.Item onClick={() => openDeletePropertyDialog(item.id)
                                        } eventKey="4" >

                                            <DeleteOutlinedIcon /> Delete

                                </Dropdown.Item>

                                        <Dropdown.Item eventKey="5">
                                            <Link
                                                to={`/property/${item.id}/addons`}
                                            >

                                                <i className="fa fa-chart-bar"></i>
                                     Plans & Addons
                                    </Link>
                                        </Dropdown.Item>
                                    </DropdownButton>



                                </div>

                            </CardBody>

                            <CardFooter>
                                <div className="prop-footer-cta">
                                    <div className="property-footer">
                                        <ul className="property-card-footer">
                                            <li className="text-capitalize"><span className="plan">{item.planAddons}</span></li>
                                            <li><h3>Views</h3> <span>0</span></li>
                                            <li><h3>Leads</h3> <span>0</span></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <a href={`/property/${item.id}/addons`} className="btn-br btn-plans">Plans & Addons</a>
                                        <a className="btn-br btn-leads">Leads</a>
                                    </div>
                                </div>
                            </CardFooter>
                            <PleaseWaitMessage entities={data} />
                            <NoRecordsFoundMessage entities={data} />

                            {item.status === "" && (<div>No property found</div>)}
                        </Card>
                    )}
                </div>
            ))}

        </div>
    )

}