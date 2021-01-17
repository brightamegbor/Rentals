import React from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import { FormHelperText, FormControl } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ApartmentIcon from '@material-ui/icons/ApartmentOutlined';
import RoomIcon from '@material-ui/icons/HotelOutlined';
import HouseIcon from '@material-ui/icons/HouseOutlined';

function ToggleButtonField(props) {
    const { label, data, exclusive, ...rest } = props;
    const [field, meta, helper] = useField(props);

    const { value: selectedValue } = field;

    const [touched, error] = at(meta, 'touched', 'error');
    const isError = touched && error;

    const [propertyType, setPropertyType] = React.useState('');

    const { setValue } = helper;

    React.useEffect(() => {
        localStorage.setItem('propertyCatt', '');
        if (selectedValue) {
            setPropertyType(selectedValue);
            localStorage.setItem('propertyCatt', selectedValue);
        }
    }, [selectedValue]);

    function _renderHelperText() {
        if (isError) {
            return <FormHelperText>{error}</FormHelperText>;
        }
    }

    function _onChange(event, newPropertyType) {
        if (newPropertyType) {
            setPropertyType(newPropertyType);
            try {
                setValue(newPropertyType);
            } catch (error) {
                setValue(newPropertyType);
            }
        } else {
            setValue(newPropertyType);
        }
    }

    return (
        <FormControl {...rest} error={isError}>
            <ToggleButtonGroup
                {...field}
                exclusive={exclusive}
                onChange={_onChange}
                value={selectedValue ? selectedValue : ''}
            >
                {data.map((item, index) => (
                    <ToggleButton
                        key={index}
                        value={item.value}
                        className='border-left'
                        title={item.label}
                    >
                        <span className='pr-4 property-icon'>
                            {item.label === 'Apartment' && <ApartmentIcon />}
                            {item.label === 'Room' && <RoomIcon />}
                            {item.label === 'House' && <HouseIcon />}
                        </span>

                        {item.label}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            <p className='error-card'>{_renderHelperText()}</p>
        </FormControl>
    );
}

ToggleButtonField.defaultProps = {
    data: []
};

ToggleButtonField.propTypes = {
    data: PropTypes.array.isRequired
};

export default ToggleButtonField;
