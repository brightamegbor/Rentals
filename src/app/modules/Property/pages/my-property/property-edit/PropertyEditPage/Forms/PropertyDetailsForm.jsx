import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import PhotoIcon from '@material-ui/icons/Photo';
import ApartmentIcon from '@material-ui/icons/Apartment';
import PowerIcon from '@material-ui/icons/PowerOutlined';
import CheckBoxOutlined from '@material-ui/icons/CheckBoxOutlined';
import BuildOutlined from '@material-ui/icons/BuildOutlined';
import WeekendOutlined from '@material-ui/icons/WeekendOutlined';
import DescriptionOutlined from '@material-ui/icons/DescriptionOutlined';
import BusinessCenterOutlined from '@material-ui/icons/BusinessCenterOutlined';
import BathtubOutlined from '@material-ui/icons/BathtubOutlined';
import LocalParkingOutlined from '@material-ui/icons/LocalParkingOutlined';
import PetsOutlined from '@material-ui/icons/PetsOutlined';
import DirectionsCarOutlined from '@material-ui/icons/DirectionsCarOutlined';
import {
    TogglebtnField,
    SelectField,
    TogglebtnforParking
} from '../FormFields';
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
    utilities: [
        {
            value: 'water',
            label: 'Water'
        },
        {
            value: 'electricity',
            label: 'Electricity'
        },
        {
            value: 'cable',
            label: 'Cable'
        },
        {
            value: 'internet',
            label: 'Internet/WiFi'
        },
        {
            value: 'heating',
            label: 'Heating'
        },
        {
            value: 'satelite-tv',
            label: 'Satelite TV'
        }
    ],

    categories: [
        {
            value: 'corporate-housing',
            label: 'Corporate Housing'
        },
        {
            value: 'student-housing',
            label: 'Student Housing'
        },
        {
            value: 'senior-housing',
            label: 'Senior Housing'
        },
        {
            value: 'sublet',
            label: 'Sublet'
        },
        {
            value: 'vacation',
            label: 'Vacation'
        },
        {
            value: 'co-op-housing',
            label: 'Co-op Housing'
        }
    ],

    yearBuilt: [
        {
            value: 'undefined',
            label: 'Select Year'
        },
        {
            value: '2020',
            label: '2020'
        },
        {
            value: '2019',
            label: '2019'
        },
        {
            value: '2018',
            label: '2018'
        },
        {
            value: '2017',
            label: '2017'
        },
        {
            value: '2016',
            label: '2016'
        },
        {
            value: '2015',
            label: '2015'
        },
        {
            value: '2014',
            label: '2014'
        },
        {
            value: '2013',
            label: '2013'
        },
        {
            value: '2012',
            label: '2012'
        },
        {
            value: '2011',
            label: '2011'
        },
        {
            value: '2010',
            label: '2010'
        },
        {
            value: '2009',
            label: '2009'
        },
        {
            value: '2008',
            label: '2008'
        },
        {
            value: '2007',
            label: '2007'
        },
        {
            value: '2006',
            label: '2006'
        },
        {
            value: '2005',
            label: '2005'
        },
        {
            value: '2004',
            label: '2004'
        },
        {
            value: '2003',
            label: '2003'
        },
        {
            value: '2002',
            label: '2002'
        },
        {
            value: '2001',
            label: '2001'
        },
        {
            value: '2000',
            label: '2000'
        },
        {
            value: '1999',
            label: '1999'
        },
        {
            value: '1998',
            label: '1998'
        },
        {
            value: '1997',
            label: '1997'
        },
        {
            value: '1996',
            label: '1996'
        },
        {
            value: '1995',
            label: '1995'
        }
    ],

    petFriendly: [
        {
            value: 'yes',
            label: 'Yes'
        },
        {
            value: 'no',
            label: 'No'
        }
    ],
    furnished: [
        {
            value: 'yes',
            label: 'Yes'
        },
        {
            value: 'no',
            label: 'No'
        }
    ],

    leaseTerm: [
        {
            value: 'one-year',
            label: '1 year'
        },
        {
            value: 'monthly',
            label: 'Monthly'
        },
        {
            value: 'negotiable',
            label: 'Negotiable'
        }
    ],

    otherDetails: [
        {
            value: 'bathroom',
            label: 'Bathroom'
        },
        {
            value: 'kitchen',
            label: 'Kitchen'
        },
        {
            value: 'toilet',
            label: 'Toilet'
        }
    ],

    bathroomType: [
        {
            value: 'in-built',
            label: 'In Built'
        },
        {
            value: 'outside',
            label: 'Outside'
        }
    ],

    parkingType: [
        {
            value: 'no-parking',
            label: 'No Parking'
        },
        {
            value: 'garage',
            label: 'Garage'
        },
        {
            value: 'drive-way',
            label: 'Driveway'
        },
        {
            value: 'under-g',
            label: 'Underg'
        },
        {
            value: 'street',
            label: 'Street'
        }
    ],

    parkingSpots: [
        {
            value: 1,
            label: '1'
        },
        {
            value: 2,
            label: '2'
        },
        {
            value: 3,
            label: '3'
        },
        {
            value: 4,
            label: '4'
        },
        {
            value: '5-plus',
            label: '5+'
        }
    ]
};

function PropertyDetailsForm(props) {
    const {
        formField: {
            utilities,
            categories,
            yearBuilt,
            petFriendly,
            furnished,
            leaseTerms,
            otherDetails,
            bathroomType,
            parkingType,
            parkingSpots
        }
    } = props;

    const classes = useStyles();

    const [isParking, setIsParking] = useState('');

    useEffect(() => {
        setIsParking(localStorage.getItem('propertyParkingSpots'));
    });

    return (
        <React.Fragment>
            <p className='color-gray'>
                Provide important information about your rental. Tip: detailed
                listings tend to get more leads
            </p>

            <Grid className='margib-b-2'>
                <div className='row margin-t-2'>
                    <div className='subtype-label col-4'>
                        <p className='pt-5'>
                            <span className='pr-4 property-icon'>
                                <PowerIcon />
                            </span>
                            Utilities Available
                        </p>
                    </div>
                    <div className='col-8'>
                        <TogglebtnField
                            aria-label='text utilities'
                            name={utilities.name}
                            data={propertyItems.utilities}
                            exclusive={false}
                            className='propSubTypebtn'
                        />
                    </div>
                </div>
            </Grid>

            <Grid className='margib-b-2'>
                <Divider variant='middle' light />
                <div className='row margin-t-2'>
                    <div className='subtype-label col-4'>
                        <p className='pt-5'>
                            <span className='pr-4 property-icon'>
                                <CheckBoxOutlined />
                            </span>
                            Categories
                        </p>
                    </div>
                    <div className='col-8'>
                        <TogglebtnField
                            aria-label='text categories'
                            name={categories.name}
                            data={propertyItems.categories}
                            exclusive={false}
                            className='propSubTypebtn'
                        />
                    </div>
                </div>
            </Grid>

            <Grid className='margib-b-2'>
                <Divider variant='middle' light />
                <div className='row margin-t-2 '>
                    <div className='subtype-label col-4'>
                        <p className='mt-4'>
                            <span className='pr-4 property-icon'>
                                <BuildOutlined />
                            </span>
                            Year Built
                        </p>
                    </div>

                    <div className='col-8'>
                        <SelectField
                            name={yearBuilt.name}
                            label={yearBuilt.label}
                            data={propertyItems.yearBuilt}
                            variant='filled'
                        />
                    </div>
                </div>
            </Grid>

            <Grid className='margib-b-2'>
                <Divider variant='middle' light />
                <div className='row margin-t-2 '>
                    <div className='subtype-label col-4'>
                        <p className='mt-4'>
                            <span className='pr-4 property-icon'>
                                <PetsOutlined />
                            </span>
                            Pet Friendly?
                        </p>
                    </div>

                    <div className='col-8'>
                        <TogglebtnField
                            aria-label='text petFriendly'
                            name={petFriendly.name}
                            data={propertyItems.petFriendly}
                            exclusive={true}
                            className='propSubTypebtn'
                        />
                    </div>
                </div>
            </Grid>

            <Grid className='margib-b-2'>
                <div className='row margin-t-2 '>
                    <div className='subtype-label col-4'>
                        <p className='mt-4'>
                            <span className='pr-4 property-icon'>
                                <WeekendOutlined />
                            </span>
                            Furnished?
                        </p>
                    </div>

                    <div className='col-8'>
                        <TogglebtnField
                            aria-label='text furnishedType'
                            name={furnished.name}
                            data={propertyItems.furnished}
                            exclusive={true}
                            className='propSubTypebtn'
                        />
                    </div>
                </div>
            </Grid>

            <Grid className='margib-b-2'>
                <div className='row margin-t-2 '>
                    <div className='subtype-label col-4'>
                        <p className='mt-4'>
                            <span className='pr-4 property-icon'>
                                <DescriptionOutlined />
                            </span>
                            Lease Term
                        </p>
                    </div>

                    <div className='col-8'>
                        <TogglebtnField
                            aria-label='text leaseTerm'
                            name={leaseTerms.name}
                            data={propertyItems.leaseTerm}
                            exclusive={true}
                            className='propSubTypebtn'
                        />
                    </div>
                </div>
            </Grid>

            <Grid className='margib-b-2'>
                <div className='row margin-t-2 '>
                    <div className='subtype-label col-4'>
                        <p className='mt-4'>
                            <span className='pr-4 property-icon'>
                                <BusinessCenterOutlined />
                            </span>
                            Other Details
                        </p>
                    </div>

                    <div className='col-8'>
                        <TogglebtnField
                            aria-label='text otherDetails'
                            name={otherDetails.name}
                            data={propertyItems.otherDetails}
                            exclusive={false}
                            className='propSubTypebtn'
                        />
                    </div>
                </div>
            </Grid>

            <Grid className='margib-b-2'>
                <div className='row margin-t-2 '>
                    <div className='subtype-label col-4'>
                        <p className='mt-4'>
                            <span className='pr-4 property-icon'>
                                <BathtubOutlined />
                            </span>
                            Bathroom Type
                        </p>
                    </div>

                    <div className='col-8'>
                        <TogglebtnField
                            aria-label='text bathroomType'
                            name={bathroomType.name}
                            data={propertyItems.bathroomType}
                            exclusive={true}
                            className='propSubTypebtn'
                        />
                    </div>
                </div>
            </Grid>

            <Grid className='margib-b-2'>
                <div className='row margin-t-2 '>
                    <div className='subtype-label col-4'>
                        <p className='mt-4'>
                            <span className='pr-4 property-icon'>
                                <LocalParkingOutlined />
                            </span>
                            Parking Type
                        </p>
                    </div>

                    <div className='col-8'>
                        <TogglebtnforParking
                            aria-label='text bathroomType'
                            name={parkingType.name}
                            data={propertyItems.parkingType}
                            exclusive={true}
                            className='propSubTypebtn'
                        />
                    </div>
                </div>
            </Grid>

            {isParking === 'yes' && (
                <Grid className='margib-b-2'>
                    <div className='row margin-t-2 '>
                        <div className='subtype-label col-4'>
                            <p className='mt-4'>
                                <span className='pr-4 property-icon'>
                                    <DirectionsCarOutlined />
                                </span>
                                Parking Spots
                            </p>
                        </div>

                        <div className='col-8'>
                            <TogglebtnField
                                aria-label='text bathroomType'
                                name={parkingSpots.name}
                                data={propertyItems.parkingSpots}
                                exclusive={true}
                                className='propSubTypebtn'
                            />
                        </div>
                    </div>
                </Grid>
            )}
        </React.Fragment>
    );
}

export default PropertyDetailsForm;
