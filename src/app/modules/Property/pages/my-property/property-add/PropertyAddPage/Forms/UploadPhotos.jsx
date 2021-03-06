import React from 'react';

import Button from '@material-ui/core/Button';

import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import PhotoIcon from '@material-ui/icons/Photo';
import ApartmentIcon from '@material-ui/icons/Apartment';
import MeetingRoomOutlined from '@material-ui/icons/MeetingRoomOutlined';
import ExploreOutlined from '@material-ui/icons/ExploreOutlined';
import ImageIcon from '@material-ui/icons/Image';
import MailOutlined from '@material-ui/icons/MailOutlined';
import { Input, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { InputField, CheckTextField } from '../FormFields';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

const propertyItems = {
    buildingFeatures: [
        {
            value: '24h-security',
            label: '24h Security'
        },
        {
            value: 'Bbq-Area-Courtyard',
            label: 'Bbq Area/Courtyard'
        },
        {
            value: 'bike-racks',
            label: 'Bike Racks'
        },
        {
            value: 'bike-room',
            label: 'Bike Room'
        },
        {
            value: 'buzzer -entry',
            label: 'Buzzer Entry'
        },
        {
            value: 'central-air-conditioning',
            label: 'Central Air Conditioning'
        },
        {
            value: 'electric-vehicl-charger',
            label: 'Electric Vehicle Charger'
        },
        {
            value: 'elevator',
            label: 'Elevator'
        },
        {
            value: 'exercise-room',
            label: 'Exercise Room'
        },
        {
            value: 'fitnes-area',
            label: 'Fitness Area'
        },
        {
            value: 'garage',
            label: 'Garage'
        },
        {
            value: 'guest-suite',
            label: 'Guest Suite'
        },
        {
            value: 'intercom',
            label: 'Intercom'
        },
        {
            value: 'jacuzzi',
            label: 'Jacuzzi'
        },
        {
            value: 'laundry-facilities',
            label: 'Laundry Facilities'
        },
        {
            value: 'movie-room',
            label: 'Movie Room'
        },
        {
            value: 'on-site-management',
            label: 'On-Site Management'
        },
        {
            value: 'on-Site-staff',
            label: 'On-Site Staff'
        },
        {
            value: 'parking-underground',
            label: 'Parking - Underground'
        },
        {
            value: 'parking-visitor',
            label: 'Parking - Visitor'
        },
        {
            value: 'party-room',
            label: 'Party Room'
        },
        {
            value: 'pet-friendly',
            label: 'Pet Friendly'
        },
        {
            value: 'pool-heated',
            label: 'Pool - Heated'
        },
        {
            value: 'pool-rooftop',
            label: 'Pool - Rooftop'
        },
        {
            value: 'professionally-managed',
            label: 'Professionally Managed'
        },
        {
            value: 'recreation-room',
            label: 'Recreation Room'
        },
        {
            value: 'recycling',
            label: 'Recycling'
        },
        {
            value: 'resident-managers',
            label: 'Resident Managers'
        },
        {
            value: 'rooftop-deck',
            label: 'Rooftop Deck'
        },
        {
            value: 'rooftop-garden',
            label: 'Rooftop Garden'
        },
        {
            value: 'rooftop-lounge',
            label: 'Rooftop Lounge'
        },
        {
            value: 'sauna',
            label: 'Sauna'
        },
        {
            value: 'secured-access',
            label: 'Secured Access'
        },
        {
            value: 'security-on-site',
            label: 'Security On-Site'
        },
        {
            value: 'storage-lockers',
            label: 'Storage Lockers'
        },
        {
            value: 'swimming-pool',
            label: 'Swimming Pool'
        },
        {
            value: 'tennis-court',
            label: 'Tennis Court'
        },
        {
            value: 'theatre-room',
            label: 'Theatre Room'
        },
        {
            value: 'video-surveillance',
            label: 'Video Surveillance'
        }
    ],

    unitFeatures: [
        {
            value: 'air-conditioning',
            label: 'Air Conditioning'
        },
        {
            value: 'alarm-system',
            label: 'Alarm System'
        },
        {
            value: 'backyard',
            label: 'Backyard'
        },
        {
            value: 'balcony',
            label: 'Balcony'
        },
        {
            value: 'cable-ready',
            label: 'Cable Ready'
        },
        {
            value: 'ensuite-laundry',
            label: 'Ensuite Laundry'
        },
        {
            value: 'flooring-ceramic',
            label: 'Flooring - Ceramic'
        },
        {
            value: 'flooring-laminate-hardwood',
            label: 'Flooring - Laminate Hardwood'
        },
        {
            value: 'flooring-wood',
            label: 'Flooring - Wood'
        },
        {
            value: 'garburator',
            label: 'Garburator'
        },
        {
            value: 'granite-countertops',
            label: 'Granite Countertops'
        },
        {
            value: 'newly-renovated',
            label: 'Newly Renovated'
        },
        {
            value: 'island',
            label: 'Island'
        },
        {
            value: 'pool-private',
            label: 'Pool - Private'
        },
        {
            value: 'radiant-heat',
            label: 'Radiant Heat'
        },
        {
            value: 'storage',
            label: 'Storage'
        },
        {
            value: 'washer',
            label: 'Washer'
        },

        {
            value: 'bbq-grill',
            label: 'Bbq Grill'
        },
        {
            value: 'dishwasher',
            label: 'Dishwasher'
        },
        {
            value: 'fireplace',
            label: 'Fireplace'
        },
        {
            value: 'flooring-hardwood',
            label: 'Flooring - Hardwood'
        },
        {
            value: 'flooring-tile',
            label: 'Flooring - Tile'
        },
        {
            value: 'freshly-painted',
            label: 'Freshly Painted'
        },
        {
            value: 'garden',
            label: 'Garden'
        },
        {
            value: 'hot-tub',
            label: 'Hot Tub'
        },
        {
            value: 'microwave',
            label: 'Microwave'
        },
        {
            value: 'parking',
            label: 'Parking'
        },
        {
            value: 'private-entry',
            label: 'Private Entry'
        },
        {
            value: 'security-cameras',
            label: 'Security Cameras'
        },
        {
            value: 'terrace',
            label: 'Terrace'
        },
        {
            value: 'wheelchair-access',
            label: 'Wheelchair Access'
        },

        {
            value: 'blinds',
            label: 'Blinds'
        },
        {
            value: 'dryer',
            label: 'Dryer'
        },
        {
            value: 'flooring-carpeted',
            label: 'Flooring - Carpeted'
        },
        {
            value: 'flooring-laminate',
            label: 'Flooring - Laminate'
        },
        {
            value: 'flooring-vinyl',
            label: 'Flooring - Vinyl'
        },
        {
            value: 'furnished',
            label: 'Furnished'
        },
        {
            value: 'gas-heating',
            label: 'Gas Heating'
        },
        {
            value: 'individual thermostats',
            label: 'Individual Thermostats'
        },
        {
            value: 'new-appliances',
            label: 'New Appliances'
        },
        {
            value: 'patio',
            label: 'Patio'
        },
        {
            value: 'private yard',
            label: 'Private Yard'
        },
        {
            value: 'shared yard',
            label: 'Shared Yard'
        },
        {
            value: 'walk-in closet',
            label: 'Walk-In Closet'
        },
        {
            value: 'window coverings',
            label: 'Window Coverings'
        }
    ],

    nearbyFeatures: [
        {
            value: '24h-emergency',
            label: '24h Emergency'
        },
        {
            value: 'atm',
            label: 'Atm'
        },
        {
            value: 'bank',
            label: 'Bank'
        },
        {
            value: 'bars',
            label: 'Bars'
        },
        {
            value: 'bike trails',
            label: 'Bike Trails'
        },
        {
            value: 'bus stop',
            label: 'Bus Stop'
        },
        {
            value: 'cafe',
            label: 'Cafe'
        },
        {
            value: 'convenience store',
            label: 'Convenience Store'
        },
        {
            value: 'daycare',
            label: 'Daycare'
        },
        {
            value: 'dog park',
            label: 'Dog Park'
        },
        {
            value: 'gas station',
            label: 'Gas Station'
        },
        {
            value: 'grocery store',
            label: 'Grocery Store'
        },
        {
            value: 'gym',
            label: 'Gym'
        },
        {
            value: 'highway',
            label: 'Highway'
        },
        {
            value: 'hospital',
            label: 'Hospital'
        },
        {
            value: 'movie theater',
            label: 'Movie Theater'
        },
        {
            value: 'parks',
            label: 'Parks'
        },
        {
            value: 'playground',
            label: 'Playground'
        },
        {
            value: 'pool',
            label: 'Pool'
        },
        {
            value: 'public library',
            label: 'Public Library'
        },
        {
            value: 'public transit',
            label: 'Public Transit'
        },
        {
            value: 'recreation',
            label: 'Recreation'
        },
        {
            value: 'restaurants',
            label: 'Restaurants'
        },
        {
            value: 'running path',
            label: 'Running Path'
        },
        {
            value: 'school',
            label: 'School'
        },
        {
            value: 'schools',
            label: 'Schools'
        },
        {
            value: 'shopping',
            label: 'Shopping'
        },
        {
            value: 'shopping centre',
            label: 'Shopping Centre'
        }
    ]
};

function UploadPhotos(props) {
    const {
        formField: {
            rent,
            photos,
            description,
            buildingFeatures,
            unitFeatures,
            nearbyFeat,
            leadEmail,
            leadPhone
        }
    } = props;

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // const handlecapture = ({ target }) => {
    //     const fileReader = new FileReader();
    //     const name = target.accept.includes('image') ? 'images' : '';

    //     fileReader.readAsDataURL(target.files[0]);
    //     fileReader.onload = (e) => {
    //         this.setState((prevState) => ({
    //             [name]: [...prevState[name], e.target.result]
    //         }));
    //     };
    // };

    return (
        <React.Fragment>
            <Grid className='pt-2 margin-top-2 margib-b-2'>
                <p className='mt-3 font-weight-bold prop-loc-text'>
                    Floor Plans
                </p>
                <p className='color-gray margib-b-2'>
                    Your rental requires at least one floor plan
                </p>

                <div className='row mt-3 margin-t-3'>
                    <div className='col-8 pb-4 input-text-big'>
                        <InputField
                            fullWidth
                            label={rent.label}
                            id='input-with-icon-textfield'
                            name={rent.name}
                            variant='filled'
                            type='number'
                        />
                        <small>per month</small>
                    </div>
                </div>
            </Grid>

            <Grid className='pt-2 margin-top-2 margib-b-2'>
                <p className='font-weight-bold prop-loc-text'>Photos</p>
                <p className='color-gray pt-4 margin-t-3'>
                    At least <strong>2 high resolution</strong> images in{' '}
                    <strong>JPG</strong> or <strong>PNG</strong> format
                </p>

                <div>
                    <div className='upload-area'>
                        <React.Fragment>
                            <Button
                                variant='contained'
                                className='custom-upload-btn'
                                size='large'
                            >
                                <label>
                                    <Input
                                        color='primary'
                                        accept='image/*'
                                        type='file'
                                        id='icon-button-file'
                                        name={photos.name}
                                        style={{ display: 'none' }}
                                    />
                                    <ImageIcon className='mr-2 custom-upload-icon' />
                                    Add Photos
                                </label>
                            </Button>
                        </React.Fragment>
                    </div>
                </div>
            </Grid>

            <Grid className='pt-3 margin-top-3 margib-b-2'>
                <p className='font-weight-bold prop-loc-text'>Description</p>
                <p className='color-gray pt-4 margin-t-3'>
                    Describe your property
                </p>

                <div>
                    <InputField
                        fullWidth
                        label={description.label}
                        id='outlined-multiple-static'
                        multiline
                        rows='6'
                        name={description.name}
                        variant='outlined'
                    />
                </div>
            </Grid>

            <Grid className='pt-3 margin-top-2 margib-b-2'>
                <p className='font-weight-bold prop-loc-text'>
                    Additional Features
                </p>
                <p className='color-gray pt-4 margin-t-3'>
                    Select the items that apply to your rental
                </p>

                <div className='custom-expansion-panel'>
                    <ExpansionPanel
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                    >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel1bh-content'
                            id='panel1bh-header'
                        >
                            <p className='color-gray mt-4'>
                                <span className='pr-4 property-icon'>
                                    <ApartmentIcon />
                                </span>
                                Building Features
                            </p>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <CheckTextField
                                aria-label='text petFriendly'
                                name={buildingFeatures.name}
                                data={propertyItems.buildingFeatures}
                                exclusive={false}
                                className='propSubTypebtn additional-feat'
                            />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel
                        expanded={expanded === 'panel2'}
                        onChange={handleChange('panel2')}
                    >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel2bh-content'
                            id='panel2bh-header'
                        >
                            <p className='color-gray'>
                                <span className='pr-4 property-icon'>
                                    <MeetingRoomOutlined />
                                </span>
                                Unit Features
                            </p>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <CheckTextField
                                aria-label='text unitFeatures'
                                name={unitFeatures.name}
                                data={propertyItems.unitFeatures}
                                exclusive={false}
                                className='propSubTypebtn additional-feat'
                            />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel
                        expanded={expanded === 'panel3'}
                        onChange={handleChange('panel3')}
                    >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel3bh-content'
                            id='panel3bh-header'
                        >
                            <p className='color-gray'>
                                <span className='pr-4 property-icon'>
                                    <ExploreOutlined />
                                </span>
                                Nearby
                            </p>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <CheckTextField
                                aria-label='text nearbyFeat'
                                name={nearbyFeat.name}
                                data={propertyItems.nearbyFeatures}
                                exclusive={false}
                                className='propSubTypebtn additional-feat'
                            />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </Grid>

            <Grid className='pt-4 margin-top-3'>
                <div className='row mt-3'>
                    <div className='subtype-label col-sm-12 col-md-12 col-lg-4'>
                        <p className='mt-4'>
                            <span className='pr-4 property-icon'>
                                <MailOutlined />
                            </span>
                            Lead Contact
                        </p>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 input-text-big pt-4'>
                        <InputField
                            fullWidth
                            label={leadEmail.label}
                            name={leadEmail.name}
                            id='input-with-icon-textfield'
                            variant='filled'
                        />
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 input-text-big pt-4'>
                        <InputField
                            fullWidth
                            label={leadPhone.label}
                            name={leadPhone.name}
                            id='input-with-icon-textfield'
                            inputProps={{
                                maxlength: 10
                            }}
                            variant='filled'
                        />
                    </div>
                </div>
            </Grid>
        </React.Fragment>
    );
}

export default UploadPhotos;
