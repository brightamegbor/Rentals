import React, { useEffect, useMemo, useState, useRef } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { usePropertyUIContext } from "../PropertyUIContext";
import * as actions from "../../../_redux/property/propertyActions";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import PetsOutlined from '@material-ui/icons/PetsOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import Alert from 'react-bootstrap/Alert';
import MailOutlined from '@material-ui/icons/MailOutlined';
import PhotoCameraOutlined from '@material-ui/icons/PhotoCameraOutlined';
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import AddAlertOutlined from '@material-ui/icons/AddAlertOutlined';
import MapOutlined from '@material-ui/icons/MapOutlined';
import { Carousel } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 500,
    },
});


export function PropertyDetails({
    history,
    match: {
        params: { id },
    },
}) {

    // const propertyUIContext = usePropertyUIContext();
    // const propertyUIProps = useMemo(() => {
    //     return ids: propertyUIContext.ids,
    //     setIds:
    // })

    const dispatch = useDispatch();

    const { actionsLoading, propertyDetails } = useSelector(
        (state) => ({
            actionsLoading: state.properties.actionsLoading,
            propertyDetails: state.properties.propertyDetails,
        }),
        shallowEqual
    );
    const [showAlert, setShowAlert] = useState(true);


    useEffect(() => {
        dispatch(actions.fetchProperty(id));

        handleShow();
    }, [id, dispatch]);

    const _handleBack = () => {
        history.push(`/property/my`);
    }

    const _handleShare = () => {
        console.log(propertyDetails);
    }

    const handleDismiss = () => {
        setShowAlert(false);
    };

    const handleShow = () => {
        setShowAlert(true);
    };

    let _title = <button type="button" onClick={_handleBack} className="btn btn-light" >
        <i className="fa fa-arrow-left"></i>
                            Back
                        </button>;


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Card>
            {/* {actionsLoading && <ModalProgressBar />} */}
            <CardHeader title={_title}>
                <CardHeaderToolbar className="preview-toolbar">
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={_handleShare}
                    >
                        <i className="fa fa-share"></i>
                        Share
                    </button>
                    {`  `}
                    <button className="btn btn-light ml-2">
                        <FavouriteBorderIcon />
                        Favourite
                    </button>
                    {`  `}
                    <button
                        type="submit"
                        className="btn btn-primary ml-2"
                    // onClick={saveProductClick}
                    >
                        <NotificationsNoneOutlinedIcon />
                        Alert
          </button>
                </CardHeaderToolbar>
            </CardHeader>
            <CardBody>
                {propertyDetails !== undefined && (
                    <>
                        <div className="details-top-header">
                            <div className="details-top-header-left">
                                <ul>
                                    <li>
                                        GHS{propertyDetails.rent}
                                    </li>
                                    <li>
                                        {propertyDetails.propertyCategory}
                                    </li>
                                    <li>
                                        <WatchLaterOutlinedIcon />
                                        {propertyDetails.timestamp}
                                    </li>
                                </ul>
                                <h1 className="details-address-name">
                                    {propertyDetails.propertyAddress}
                                </h1>

                            </div>

                            <div className="details-top-header-right">
                                {propertyDetails.petFriendly !== "" && (
                                    <div>
                                        <PetsOutlined /> Pets
                                    </div>
                                )}
                            </div>
                        </div>

                        {propertyDetails.status === "disapproved" && (
                            <div className="not-approved-alert">
                                {showAlert && (
                                    <Alert variant="danger" onClose={handleDismiss} dismissible >
                                        <Alert.Heading>
                                            Property not approved.
                                        <button className="btn btn-contact-us">
                                                <MailOutlined />
                                            Contact us
                                            </button>
                                        </Alert.Heading>
                                    </Alert>
                                )}
                            </div>

                        )}

                        <div className="edit-link mt-5">
                            <button className="btn btn-details-edit"><i className="fa fa-edit"></i>Edit</button>
                        </div>


                        <div className="mt-16">
                            {value === 0 && (<Carousel
                                slide={true}
                                activeIndex={index}
                                onSelect={handleSelect}
                                interval={null}
                                indicators={false}
                                touch={true}
                            >
                                <Carousel.Item class-name="carousel-photo">
                                    <img
                                        className="d-block w-100"
                                        src={propertyDetails.photos[0]}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item class-name="carousel-photo">
                                    <img
                                        className="d-block w-100 h-75"
                                        src={propertyDetails.photos[1]}
                                        alt="second slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            )}


                            <AppBar position="static" color="transparent">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    variant="fullWidth"
                                    indicatorColor="white"
                                    textColor="primary"
                                >
                                    <Tab icon={<PhotoCameraOutlined />} aria-label="Photos" label="Photos" />
                                    <Tab icon={<LocationOnOutlined />} aria-label="Nearby" label="Nearby Properties" />
                                    <Tab icon={<i className="fa fa-street-view"></i>} aria-label="Street" label="Street" />
                                </Tabs>
                            </AppBar>

                        </div>

                        <div className="mt-16 row">
                            <div className="col-6">
                                <Card className="save-alert-card">
                                    <div className="save-alert-header">
                                        <AddAlertOutlined />
                                    </div>
                                    <div className="save-alert-body">
                                        <h2>Save Alert</h2>
                                        <p>Similar properties in {propertyDetails.propertyAddress}</p>
                                    </div>
                                </Card>

                            </div>

                            <div className="col-6">
                                <Card className="view-map-card">
                                    <div className="save-alert-header">
                                        <MapOutlined />
                                    </div>
                                    <div className="save-alert-body">
                                        <h2>{propertyDetails.propertyAddress} {propertyDetails.propertyCategory}s</h2>
                                        <p>View on map</p>
                                    </div>
                                </Card>

                            </div>

                        </div>

                        <div className="mt-16 property-about">
                            <h3 className="">
                                About {propertyDetails.propertyCategory}
                            </h3>

                            <ul className="about-info-highlighted">
                                <li className="about-info-highlighted-item">
                                    <h4>Property Type
                                        </h4>
                                    <p className="">{propertyDetails.propertyCategory}</p>

                                </li>
                                <li className="about-info-highlighted-item">
                                    <h4>Property Sub-type
                                        </h4>
                                    <p className="">{propertyDetails.propertySubCategory}</p>
                                </li>

                                <li className="about-info-highlighted-item">
                                    <h4>Parking Type
                                        </h4>
                                    {propertyDetails.parkingType === "" ?
                                        <p>No Info</p> :
                                        <p className="">{propertyDetails.parkingType}</p>
                                    }
                                </li>

                                <li className="about-info-highlighted-item">
                                    <h4>Parking Spots
                                        </h4>
                                    {propertyDetails.parkingSpots === 0 ?
                                        <p>No Info</p> :
                                        <p className="">{propertyDetails.parkingSpots}</p>
                                    }
                                </li>

                                <li className="about-info-highlighted-item">
                                    <h4>Lease Term
                                        </h4>
                                    {propertyDetails.leaseTerms === "one-year" ?
                                        <p>1 Year</p> :
                                        <p className="">{propertyDetails.leaseTerms}</p>
                                    }
                                </li>

                                <li className="about-info-highlighted-item">
                                    <h4>
                                        Furnished
                                    </h4>
                                    <p className="">{propertyDetails.furnished}</p>
                                </li>

                                <li className="about-info-highlighted-item">
                                    <h4>
                                        Bathroom Type
                                    </h4>
                                    <p className="">{propertyDetails.bathroomType}</p>
                                </li>

                                <li className="about-info-highlighted-item">
                                    <h4>Year Built
                                        </h4>
                                    {propertyDetails.yearBuilt === "" ?
                                        <p>No Info</p> :
                                        <p className="">{propertyDetails.yearBuilt}</p>
                                    }
                                </li>
                            </ul>
                        </div>

                        {propertyDetails.description === ""
                            ? <div>No description provided</div>
                            : (
                                <div className="property-description">
                                    <h3>Description</h3>
                                    <p>{propertyDetails.description}</p>
                                </div>
                            )}

                        <Divider variant='middle' light />

                        <div className="mt-14">
                            <button className="btn btn-report">
                                <i className="fa fa-flag"></i>
                                Report Property
                            </button>
                        </div>

                    </>
                )}
            </CardBody>
        </Card>
    )

}
