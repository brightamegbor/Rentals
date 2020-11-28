import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import PhotoIcon from '@material-ui/icons/Photo';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { InputField, ToggleButtonField, TogglebtnField } from '../FormFields';
import RoomIcon from '@material-ui/icons/HotelOutlined';
import HouseIcon from '@material-ui/icons/HouseOutlined';
import Divider from '@material-ui/core/Divider';

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center'
    },
    active: {
        color: '#784af4'
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor'
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18
    }
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active
            })}
        >
            {completed ? (
                <Check className={classes.completed} />
            ) : (
                <div className={classes.circle} />
            )}
        </div>
    );
}

QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool
};

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
    }
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <ApartmentIcon />,
        2: <SettingsIcon />,
        3: <PhotoIcon />
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node
};

const useStyles = makeStyles((theme) => ({
    toggleContainer: {
        margin: theme.spacing(2, 2)
    },

    root: {
        width: '100%'
    },
    button: {
        marginRight: theme.spacing(1)
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}));

const propertyItems = {
    category: [
        {
            value: 'apartment',
            label: 'Apartment'
        },
        {
            value: 'house',
            label: 'House'
        },
        {
            value: 'room',
            label: 'Room'
        }
    ],

    apartSubCategory: [
        {
            value: 'apartment',
            label: 'Apartment'
        },
        {
            value: 'studio',
            label: 'Studio'
        },
        {
            value: 'bachelor',
            label: 'Bachelor'
        },
        {
            value: 'basement',
            label: 'Basement'
        },
        {
            value: 'duplex',
            label: 'Duplex'
        },
        {
            value: 'loft',
            label: 'Loft'
        }
    ],

    houseSubCat: [
        {
            value: 'house',
            label: 'House'
        },
        {
            value: 'cottage',
            label: 'Cottage'
        },
        {
            value: 'multi-unit',
            label: 'Multi-Unit'
        }
    ],

    roomSubCategory: [
        {
            value: 'single-room',
            label: 'Single Room'
        },
        {
            value: 'single-room-self-contain',
            label: 'Single Room Self Contain'
        },
        {
            value: 'single-room-porch',
            label: 'Single Room (Porch)'
        },
        {
            value: 'chamber-hall',
            label: 'Chamber & Hall'
        }
    ]
};

function PropertyTypeForm(props) {
    const {
        formField: {
            propertyCategory,
            propertySubCategory,
            propertyAddress,
            propertyUnit,
            propertyLandmark
        }
    } = props;

    const classes = useStyles();

    const [propertyType, setPropertyType] = useState('');

    useEffect(() => {
        setPropertyType(localStorage.getItem('propertyCatt'));
    });

    return (
        <React.Fragment>
            <p className='color-gray'>
                Select your property category that best match
            </p>
            <Grid className=''>
                <div className={classes.toggleContainer}>
                    <ToggleButtonField
                        aria-label='text propertType'
                        name={propertyCategory.name}
                        data={propertyItems.category}
                        exclusive={true}
                        className='propTypebtn'
                    />
                </div>
            </Grid>

            {propertyType === 'apartment' && (
                <Grid className='margib-b-2'>
                    <Divider variant='middle' light />
                    <div className='row margin-t-2 '>
                        <div className='subtype-label col-4'>
                            <p className='mt-4'>
                                <span className='pr-4 property-icon'>
                                    <ApartmentIcon />
                                </span>
                                Apartment Type
                            </p>
                        </div>

                        <div className='col-8'>
                            <TogglebtnField
                                aria-label='text propertType'
                                name={propertySubCategory.name}
                                data={propertyItems.apartSubCategory}
                                exclusive={true}
                                className='propSubTypebtn'
                            />
                        </div>
                    </div>
                </Grid>
            )}
            {propertyType === 'house' && (
                <Grid className='margib-b-2'>
                    <Divider variant='middle' light />
                    <div className='row margin-t-2 '>
                        <div className='subtype-label col-4'>
                            <p className='mt-4'>
                                <span className='pr-4 property-icon'>
                                    <HouseIcon />
                                </span>
                                House Type
                            </p>
                        </div>

                        <div className={classes.toggleContainer && 'col-8'}>
                            <TogglebtnField
                                aria-label='text propertType'
                                name={propertySubCategory.name}
                                data={propertyItems.houseSubCat}
                                exclusive={true}
                                className='propSubTypebtn'
                            />
                        </div>
                    </div>
                </Grid>
            )}
            {propertyType === 'room' && (
                <Grid className='margib-b-2'>
                    <Divider variant='middle' light />
                    <div className='row margin-t-2 '>
                        <div className='subtype-label col-4'>
                            <p className='mt-4'>
                                <span className='pr-4 property-icon'>
                                    <RoomIcon />
                                </span>
                                Room Type
                            </p>
                        </div>
                        <div className={classes.toggleContainer && 'col-8'}>
                            <TogglebtnField
                                aria-label='text propertType'
                                name={propertySubCategory.name}
                                data={propertyItems.roomSubCategory}
                                exclusive={true}
                                className='propSubTypebtn'
                            />
                        </div>
                    </div>
                </Grid>
            )}

            <Divider variant='middle' light />
            <Grid className='pt-4 margin-top-3'>
                <p className='mt-3 font-weight-bold prop-loc-text'>
                    Property Location
                </p>
                <p className='color-gray'>
                    Select your property address below then confirm it's correct
                    location on the map
                </p>

                <div className='row mt-3'>
                    <div className='col-8 pb-4 input-text-big'>
                        <InputField
                            fullWidth
                            label={propertyAddress.label}
                            id='input-with-icon-textfield'
                            name={propertyAddress.name}
                            variant='filled'
                        />
                    </div>

                    <div className='col-4 input-text-big'>
                        <InputField
                            fullWidth
                            label={propertyUnit.label}
                            name={propertyUnit.name}
                            id='input-with-icon-textfield'
                            variant='filled'
                        />
                    </div>

                    <div className='col-12 input-text-big'>
                        <InputField
                            fullWidth
                            label={propertyLandmark.label}
                            name={propertyLandmark.name}
                            id='input-with-icon-textfield'
                            variant='filled'
                        />
                    </div>
                </div>
            </Grid>
        </React.Fragment>
    );
}

export default PropertyTypeForm;
