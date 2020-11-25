import React, { useEffect } from "react";

import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { Link } from "react-router-dom";
import PropertyAddPage from './PropertyAddPage';


export function PropertyAdd({ history }) {

    const _handleBack = () => {
        history.push(`/property/my`);
    }



    return (
        <Card>
            <CardHeader title="New Property">
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

                <PropertyAddPage />
            </CardBody>
        </Card>
    )

}