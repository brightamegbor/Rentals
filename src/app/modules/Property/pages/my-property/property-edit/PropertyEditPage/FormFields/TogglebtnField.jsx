import React from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import { FormHelperText, FormControl } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

function TogglebtnField(props) {
    const { label, data, exclusive, ...rest } = props;
    const [field, meta, helper] = useField(props);

    const { value: selectedValue } = field;

    const [touched, error] = at(meta, 'touched', 'error');
    const isError = touched && error && true;

    const [propertySubType, setPropertySubType] = React.useState([]);

    const { setValue } = helper;

    React.useEffect(() => {
        if (selectedValue) {
            setPropertySubType(selectedValue);
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

TogglebtnField.defaultProps = {
    data: []
};

TogglebtnField.propTypes = {
    data: PropTypes.array.isRequired
};

export default TogglebtnField;
