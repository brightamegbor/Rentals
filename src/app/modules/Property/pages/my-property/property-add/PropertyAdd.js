import React, { useEffect } from "react";

import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../../../../_metronic/_partials/controls";
import { Link } from "react-router-dom";
import PropertyAddPage from './PropertyAddPage';
import { useSubheader } from "../../../../../../_metronic/layout";


export function PropertyAdd({ history }) {

    const _handleBack = () => {
        history.push(`/property/my`);
    }


    const suhbeader = useSubheader();

    useEffect(() => {

        suhbeader.setTitle('New Property');
    }, [useSubheader]);

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