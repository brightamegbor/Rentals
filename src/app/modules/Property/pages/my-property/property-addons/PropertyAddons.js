import React, { useEffect, useState, useRef } from "react";

import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";

import { shallowEqual, useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import * as actions from '../../../_redux/property/propertyActions';
import MoreHorizRounded from "@material-ui/icons/MoreHorizRounded";
import LaunchOutlined from "@material-ui/icons/LaunchOutlined";
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { useSubheader } from "../../../../../../_metronic/layout";
import { PropertyDeleteDialog } from "../property-delete-dialog/PropertyDeleteDialog";
import Button from '@material-ui/core/Button';
import ArrowRight from '@material-ui/icons/ArrowForward';

export function PropertyAddons({
    history,
    match: {
        params: { id },
    }
}) {
    // const { value: selectedValue } = field;

    const suhbeader = useSubheader();

    const [days, setDays] = useState('15days');

    const [selectedPlan, setSelectedPlan] = useState('');

    const goToEnd = useRef(null);

    const _handleBack = () => {
        history.push(`/property/my`);
    }

    const dispatch = useDispatch();

    const { actionsLoading, propertyDetails } = useSelector(
        (state) => ({
            actionsLoading: state.properties.actionsLoading,
            propertyDetails: state.properties.propertyDetails
        }),
        shallowEqual
    );

    useEffect(() => {
        dispatch(actions.fetchProperty(id));
    }, [id, dispatch]);

    useEffect(() => {
        let _title = 'Property';
        if (propertyDetails && id) {
            _title = `Property '${propertyDetails.propertySubCategory} - ${propertyDetails.propertyAddress}' Billing`;

        }
        suhbeader.setTitle(_title);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [propertyDetails, id]);



    const handleSwitchDays = (event, newDays) => {
        if (newDays) {
            setDays(newDays);
        }
        //     try {
        //         setValue(newPropertySubType);
        //     } catch (error) {
        //         setValue(newPropertySubType);
        //     }
        // } else {
        //     setValue(newPropertySubType);
        // }
    }

    const openEditPropertyPage = (id) => {
        history.push(`/property/edit/${id}`);
    }

    const openPropertyDetailsPage = (id) => {
        history.push(`/property/preview/${id}`);
    }

    const openDeletePropertyDialog = (id) => {
        history.push(`/property/my/${id}/delete`)
    }

    const handleSelectedPlan = (newPlan) => {
        setSelectedPlan(newPlan);

        if (newPlan !== '') {
            goToEnd.current.scrollIntoView({ behaviour: "smooth" });
        }
    }



    return (
        <Card>
            <CardHeader title="Plans & Addons">
                <CardHeaderToolbar>
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={_handleBack}
                    >
                        <i className="fa fa-arrow-left"></i>
                            Back
                        </button>

                </CardHeaderToolbar>
            </CardHeader>

            <CardBody>
                {propertyDetails !== undefined && (
                    <>
                        <div className="details-top-header addons-header-01">
                            <div className="details-top-header-left addons-top-left">
                                {propertyDetails.status === 'pending' && (

                                    <p className="status color-pending">
                                        <i className="fas fa-circle"></i>
                                        {propertyDetails.status}</p>
                                )}
                                {propertyDetails.status === 'disapproved' && (

                                    <p className="status color-disapproved">
                                        <i className="fas fa-circle"></i>
                                        {propertyDetails.status}</p>
                                )}
                                {propertyDetails.status === 'active' && (

                                    <p className="status color-active">
                                        <i className="fas fa-circle"></i>
                                        {propertyDetails.status}</p>
                                )}
                                {propertyDetails.status === 'disabled' && (

                                    <p className="status color-disapproved">
                                        <i className="fas fa-circle"></i>
                                        {propertyDetails.status}</p>
                                )}
                                <h1>
                                    {propertyDetails.propertySubCategory}
                                </h1>
                                <ul>
                                    <li>
                                        {propertyDetails.propertyAddress}
                                    </li>
                                    <li>
                                        GHS{propertyDetails.rent}
                                    </li>
                                </ul>

                            </div>

                            <div className="more-action details-top-header-right">

                                <DropdownButton
                                    alignRight
                                    title={<MoreHorizRounded />}
                                    id="dropdown-menu-align-right"
                                >
                                    <Dropdown.Item
                                        onClick={() => openPropertyDetailsPage(propertyDetails.id)}
                                        eventKey="1">

                                        <LaunchOutlined /> View
                                </Dropdown.Item>
                                    <Dropdown.Item eventKey="2">
                                        <AccountCircleOutlined /> Leads
                                    </Dropdown.Item>

                                    <Dropdown.Item
                                        onClick={() => openEditPropertyPage(propertyDetails.id)}
                                        eventKey="3">

                                        <i className="fa fa-edit"></i> Edit

                                </Dropdown.Item>

                                    <Dropdown.Item
                                        onClick={() => openDeletePropertyDialog(propertyDetails.id)}
                                        eventKey="4" >

                                        <DeleteOutlinedIcon /> Delete

                                </Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>
                    </>
                )}

                <div className={`plans-card-container mb-12 ${selectedPlan !== '' ? 'plans-card-container--has-selection' : ''}`}>
                    <h2>
                        Choose Plan
                    </h2>
                    <p>
                        Featured listings get up to <strong>10x more views</strong> and <strong>5x more leads</strong>
                    </p>

                    <div className="switcher">



                        <ToggleButtonGroup
                            exclusive
                            onChange={handleSwitchDays}
                            // value={selectedValue ? selectedValue : ''}
                            value={days}
                            className={`addon-toggle-days ${days === '15days' ? "addon-toggle-days--active-left" : "addon-toggle-days--active-right"}`}
                        >
                            <ToggleButton

                                value="15days"
                                className='active-left'
                            >
                                15 DAYS
                        </ToggleButton>
                            <ToggleButton
                                value="30days"
                                className='active-right'
                            >
                                30 DAYS
                        </ToggleButton>
                        </ToggleButtonGroup>

                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-6">

                            <div className={`plan-details ${(selectedPlan === 'featured-15' || selectedPlan === 'featured-30') ? 'plan-details--selected' : ''}`}>
                                {propertyDetails !== undefined &&
                                    <>
                                        {propertyDetails.planAddons === 'featured' && <span className="current-plan-badge">current plan</span>}

                                    </>
                                }
                                <div className="plan-details-header">


                                    <h3>Featured</h3>

                                    <ul>
                                        <li>
                                            {days === '15days' ? '15 DAYS' : '30 DAYS'}

                                        </li>
                                        <li>
                                            Max Visibility
                                        </li>
                                    </ul>
                                </div>
                                <div className="below-header-price">
                                    <sup>
                                        GHS
                                    </sup>
                                    {days === '15days' ? '520' : '850'}
                                </div>
                                <div className="plan-details-content">
                                    <ul>
                                        <li>
                                            Top listing position
                                        </li>
                                        <li>
                                            Top priority on map/list
                                        </li>
                                        <li>
                                            "Featured" tag
                                        </li>
                                        <li>
                                            Highlighted map marker
                                        </li>
                                        <li>
                                            Facebook Marketplace sync
                                        </li>
                                        <li>
                                            Mobile app notifications
                                        </li>
                                        <li>
                                            Up to <strong>10X</strong> more views
                                        </li>
                                        <li>
                                            Up to <strong>5X</strong> more leads
                                        </li>
                                    </ul>

                                </div>
                                <div className="plan-details-footer">
                                    {propertyDetails !== undefined &&
                                        <>
                                            {propertyDetails.planAddons !== 'featured' && (
                                                <>
                                                    {days === '15days' ?
                                                        <div>
                                                            {selectedPlan === 'featured-15'
                                                                ?
                                                                <a
                                                                    // href="#"
                                                                    onClick={() => handleSelectedPlan('')}
                                                                    className="btn btn-primary change-plan"
                                                                >Change Plan</a>
                                                                :
                                                                <a
                                                                    // href="#"
                                                                    onClick={() => handleSelectedPlan('featured-15')}
                                                                    className="btn btn-primary">
                                                                    Select
                                                        </a>
                                                            }
                                                        </div>
                                                        :
                                                        <div>
                                                            {selectedPlan === 'featured-30'
                                                                ?
                                                                <a
                                                                    // href="#"
                                                                    onClick={() => handleSelectedPlan('')}
                                                                    className="btn btn-primary change-plan"
                                                                >Change Plan</a>
                                                                :
                                                                <a
                                                                    // href="#"
                                                                    onClick={() => handleSelectedPlan('featured-30')}
                                                                    className="btn btn-primary">
                                                                    Select
                                                        </a>
                                                            }
                                                        </div>
                                                    }


                                                </>
                                            )}

                                        </>
                                    }
                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-lg-6">

                            <div className={`plan-details ${(selectedPlan === 'promoted-15' || selectedPlan === 'promoted-30') ? 'plan-details--selected' : ''}`}>
                                {propertyDetails !== undefined &&
                                    <>
                                        {propertyDetails.planAddons == 'promoted' && <span className="current-plan-badge">current plan</span>}

                                    </>
                                }
                                <div className="plan-details-header">


                                    <h3>Promoted</h3>

                                    <ul>
                                        <li>
                                            {days == '15days' ? '15 DAYS' : '30 DAYS'}

                                        </li>
                                        <li>
                                            More Visibility
                                        </li>
                                    </ul>
                                </div>
                                <div className="below-header-price">
                                    <sup>
                                        GHS
                                    </sup>
                                    {days == '15days' ? '170' : '300'}
                                </div>
                                <div className="plan-details-content">
                                    <ul>
                                        <li>
                                            Increased priority on map/list
                                        </li>
                                        <li>
                                            Facebook Marketplace sync
                                        </li>
                                        <li>
                                            Mobile app notifications
                                        </li>
                                        <li>
                                            Up to <strong>5X</strong> more views
                                        </li>
                                        <li>
                                            Up to <strong>3X</strong> more leads
                                        </li>
                                    </ul>

                                </div>
                                <div className="plan-details-footer">
                                    {propertyDetails !== undefined &&
                                        <>
                                            {propertyDetails.planAddons !== 'promoted' && (
                                                <>
                                                    {days == '15days' ?
                                                        <div>
                                                            {selectedPlan === 'promoted-15'
                                                                ?
                                                                <a
                                                                    // href="#"
                                                                    onClick={() => handleSelectedPlan('')}
                                                                    className="btn btn-primary change-plan"
                                                                >Change Plan</a>
                                                                :
                                                                <a
                                                                    // href="#"
                                                                    onClick={() => handleSelectedPlan('promoted-15')}
                                                                    className="btn btn-primary">
                                                                    Select
                                                        </a>
                                                            }
                                                        </div>
                                                        :
                                                        <div>
                                                            {selectedPlan === 'promoted-30'
                                                                ?
                                                                <a
                                                                    // href="#"
                                                                    onClick={() => handleSelectedPlan('')}
                                                                    className="btn btn-primary change-plan"
                                                                >Change Plan</a>
                                                                :
                                                                <a
                                                                    // href="#"
                                                                    onClick={() => handleSelectedPlan('promoted-30')}
                                                                    className="btn btn-primary">
                                                                    Select
                                                        </a>
                                                            }
                                                        </div>
                                                    }


                                                </>
                                            )}

                                        </>
                                    }
                                </div>
                            </div>

                        </div>

                        <div className="col-12 col-lg-6">

                            <div className={`plan-details ${selectedPlan === 'free' ? 'plan-details--selected' : ''}`}>
                                {propertyDetails !== undefined &&
                                    <>
                                        {(propertyDetails.planAddons == '' || propertyDetails.planAddons == 'free') && <span className="current-plan-badge">current plan</span>}

                                    </>
                                }
                                <div className="plan-details-header">


                                    <h3>Free</h3>

                                    <ul>
                                        <li>
                                            Standard Visibility
                                        </li>
                                    </ul>
                                </div>
                                <div className="below-header-price">
                                    <sup>
                                        GHS
                                    </sup>
                                    0
                                </div>
                                <div className="plan-details-content">
                                    <ul>
                                        <li>
                                            Standard priority on map/list
                                        </li>
                                        <li>
                                            No credit card required
                                        </li>

                                    </ul>

                                </div>
                                <div className="plan-details-footer">
                                    {propertyDetails !== undefined &&
                                        <>
                                            {(propertyDetails.planAddons !== '' && propertyDetails.planAddons !== 'free') && (
                                                <>
                                                    {selectedPlan === 'free'
                                                        ?
                                                        <a
                                                            // href="#"
                                                            onClick={() => handleSelectedPlan('')}
                                                            className="btn btn-primary change-plan"
                                                        >Change Plan</a>
                                                        :
                                                        <a
                                                            // href="#"
                                                            onClick={() => handleSelectedPlan('free')}
                                                            className="btn btn-primary">
                                                            Select
                                                        </a>
                                                    }
                                                </>
                                            )}

                                        </>
                                    }

                                </div>
                            </div>

                        </div>

                    </div>
                </div>


                <>
                    {selectedPlan !== '' && (
                        <div className="cart-next-container mt-12">

                            <button
                                type='button'
                                className='cart-next-btn'
                            >

                                <div className='proceed-payment-container'>
                                    <p className='proceed-payment-title'>
                                        Proceed to Payment
                            </p>
                                </div>
                                <ArrowRight className="proceed-payment-icon" />
                            </button>
                        </div>
                    )}
                    <div ref={goToEnd}></div>
                </>

            </CardBody>
        </Card>
    )

}