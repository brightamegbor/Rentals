import React, { useEffect, useState, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../../_redux/property/propertyActions';
import { usePropertyUIContext } from '../../../PropertyUIContext';
import { useHistory } from 'react-router-dom';

function PlanAddonsRedirect() {
    const { currentState } = useSelector(
        (state) => ({ currentState: state.properties }),
        shallowEqual
    );

    const history = useHistory();

    const { totalCount, entities } = currentState;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.fetchProperties());

        const ids = entities.map((el) => el.id);
        const maxId = Math.max(...ids);

        history.push(`/property/${maxId}/addons`);
        // <Redirect to={`/property/${maxId}/addons`} />;
    }, [dispatch]);

    return <div>Saved Successfully!</div>;
}

export default PlanAddonsRedirect;
