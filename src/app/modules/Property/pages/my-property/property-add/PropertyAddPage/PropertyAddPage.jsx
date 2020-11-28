import React from 'react';
import { Formik, Form } from 'formik';

import PropertyTypeForm from './Forms/PropertyTypeForm';
import UploadPhotos from './Forms/UploadPhotos';
import PropertyDetailsForm from './Forms/PropertyDetailsForm';
// import PlanAddons from './Forms/PlanAddons';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowRight from '@material-ui/icons/ArrowForward';
import ArrowLeft from '@material-ui/icons/ArrowBackIosRounded';
import PhotoIcon from '@material-ui/icons/Photo';
import StepConnector from '@material-ui/core/StepConnector';
import ApartmentIcon from '@material-ui/icons/Apartment';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import validationSchema from './FormModel/validationSchema';
import propertyAddFormModel from './FormModel/propertyAddFormModel';
import formInitialValues from './FormModel/formInitialValues';
import { CircularProgress } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import { useDispatch } from 'react-redux';
import * as crudActions from '../../../../_redux/property/propertyActions';
import { useHistory } from 'react-router-dom';

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

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
        }
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
        }
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1
    }
})(StepConnector);

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
        marginRight: theme.spacing(1),
        padding: theme.spacing(0.2, 2.25, 0.1, 1.5),
        fontSize: 20,
        fontWeight: 500,
        textTransform: 'capitalize',
        fontFamily: 'proxima-nova, sans-serif',
        borderRadius: 9,
        boxShadow: 'none',
        float: 'left',
        color: '#0180b6',
        marginTop: theme.spacing(1)
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}));

const { formId, formField } = propertyAddFormModel;

function getSteps() {
    return ['Property Type', 'Property Details', 'Upload Photos'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <PropertyTypeForm formField={formField} />;
        case 1:
            return <PropertyDetailsForm formField={formField} />;
        case 2:
            return <UploadPhotos formField={formField} />;
        default:
            return <div>Not Found</div>;
    }
}

export default function PropertyAddPage() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const currentValidationSchema = validationSchema[activeStep];
    const steps = getSteps();
    const isLastStep = activeStep === steps.length - 1;

    const dispatch = useDispatch();

    const history = useHistory();
    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    function handleBack() {
        setActiveStep(activeStep - 1);
    }

    const handleReset = () => {
        setActiveStep(0);
    };

    function _sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function _submitForm(values, actions) {
        await _sleep(1000);
        alert(JSON.stringify(values, null, 2));

        dispatch(crudActions.createProperty(values)).then(() =>
            backToPropertyPage()
        );
        actions.setSubmitting(false);

        setActiveStep(activeStep + 1);
    }

    function _handleSubmit(values, actions) {
        if (isLastStep) {
            _submitForm(values, actions);
        } else {
            setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    }

    const backToPropertyPage = () => {
        history.push(`/property/my`);
    };

    return (
        <div>
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel
                            StepIconComponent={ColorlibStepIcon}
                            className='step-label'
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>

            <div>
                <div className='container'>
                    {activeStep === steps.length ? (
                        //replace with page to show success after form submitted
                        <div>
                            Property saved successfully!
                            <Button
                                onClick={handleReset}
                                className={classes.button}
                            >
                                Reset
                            </Button>
                        </div>
                    ) : (
                        <Formik
                            initialValues={formInitialValues}
                            validationSchema={currentValidationSchema}
                            onSubmit={_handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form id={formId}>
                                    <div className={classes.instructions}>
                                        {getStepContent(activeStep)}
                                    </div>
                                    <div className='margin-t-2'>
                                        <Divider variant='fullWidth' light />
                                    </div>
                                    <div className='pt-5 mt-5'>
                                        {activeStep !== 0 && (
                                            <Button
                                                onClick={handleBack}
                                                className={classes.button}
                                            >
                                                <span className='back-icon'>
                                                    <ArrowLeft />
                                                </span>
                                                Back
                                            </Button>
                                        )}

                                        <div className=''>
                                            <Button
                                                disabled={isSubmitting}
                                                type='submit'
                                                variant='contained'
                                                color='primary'
                                                className='next-btn'
                                            >
                                                {isLastStep ? (
                                                    <div className='row next-btn-text'>
                                                        <div className='col-9'>
                                                            Last Step
                                                            <p className='text-small p-r-2'>
                                                                Plan & Addons
                                                            </p>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className='row next-btn-text'>
                                                        <div className='col-9'>
                                                            Next
                                                            {activeStep ===
                                                                0 && (
                                                                <p className='text-small p-r-2'>
                                                                    Property
                                                                    Details
                                                                </p>
                                                            )}
                                                            {activeStep ===
                                                                1 && (
                                                                <p className='text-small p-r-2'>
                                                                    Others &
                                                                    Photos
                                                                </p>
                                                            )}
                                                        </div>
                                                        <span className='col-3 pl-4 btn-next-icon'>
                                                            <ArrowRight />
                                                        </span>
                                                    </div>
                                                )}
                                            </Button>
                                        </div>
                                        {isSubmitting && (
                                            <CircularProgress
                                                size={24}
                                                className={
                                                    classes.buttonProgress
                                                }
                                            />
                                        )}
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    )}
                </div>
            </div>
        </div>
    );
}
