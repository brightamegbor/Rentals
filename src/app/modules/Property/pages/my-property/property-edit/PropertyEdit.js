import React, { useEffect, useState } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";

import { shallowEqual, useSelector } from 'react-redux';
import PropertyEditPage from "./PropertyEditPage";
import { useDispatch } from "react-redux";
import * as actions from '../../../_redux/property/propertyActions';
import formInitialValues from './PropertyEditPage/FormModel/formInitialValues';
import { useSubheader } from "../../../../../../_metronic/layout";

export function PropertyEdit({
  history,
  match: {
    params: { id },
  }
}) {

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

  const [title, setTitle] = useState("");

  const suhbeader = useSubheader();

  useEffect(() => {
    dispatch(actions.fetchProperty(id));
  }, [id, dispatch]);

  useEffect(() => {
    let _title = 'Edit Property';
    if (propertyDetails && id) {
      _title = `Edit Property '${propertyDetails.propertySubCategory} - ${propertyDetails.propertyAddress}'`;

    }
    suhbeader.setTitle(_title);

    setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyDetails, id]);



  return (
    <Card>
      <CardHeader title={title}>
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


        <PropertyEditPage
          property={propertyDetails}
        />
      </CardBody>
    </Card>
  )

}