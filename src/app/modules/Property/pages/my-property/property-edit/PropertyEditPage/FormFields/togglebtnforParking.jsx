import React from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import { FormHelperText, FormControl } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

function TogglebtnforParking(props) {
    const { label, data, exclusive, ...rest } = props;
    const [field, meta, helper] = useField(props);

    const { value: selectedValue } = field;

    const [touched, error] = at(meta, 'touched', 'error');
    const isError = touched && error && true;

    const [propertySubType, setPropertySubType] = React.useState([]);

    const { setValue } = helper;

    React.useEffect(() => {
        localStorage.setItem('propertyParkingSpots', '');
        if (selectedValue) {
            setPropertySubType(selectedValue);
            if (selectedValue === 'no-parking') {
                localStorage.setItem('propertyParkingSpots', 'no');
            }
            if (selectedValue === 'garage') {
                localStorage.setItem('propertyParkingSpots', 'yes');
            }
            if (selectedValue === 'drive-way') {
                localStorage.setItem('propertyParkingSpots', 'yes');
            }
            if (selectedValue === 'under-g') {
                localStorage.setItem('propertyParkingSpots', 'yes');
            }
            if (selectedValue === 'street') {
                localStorage.setItem('propertyParkingSpots', 'no');
            }
        }
    }, [selectedValue]);

    function _renderHelperText() {
        if (isError) {
            return <FormHelperText>{error}</FormHelperText>;
        }
    }

    function _onChange(event, newPropertySubType) {
        if (newPropertySubType) {
            setPropertySubType(newPropertySubType);
            try {
                setValue(newPropertySubType);
            } catch (error) {
                setValue(newPropertySubType);
            }
        } else {
            setValue(newPropertySubType);
        }
    }

    return (
        <FormControl {...rest} error={isError}>
            <ToggleButtonGroup
                {...field}
                exclusive={exclusive}
                onChange={_onChange}
                value={selectedValue ? selectedValue : ''}
                className='row'
            >
                {data.map((item, index) => (
                    <ToggleButton
                        key={index}
                        value={item.value}
                        className='border-left'
                        title={item.label}
                    >
                        {item.label}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            {_renderHelperText()}
        </FormControl>
    );
}

TogglebtnforParking.defaultProps = {
    data: []
};

TogglebtnforParking.propTypes = {
    data: PropTypes.array.isRequired
};

export default TogglebtnforParking;
