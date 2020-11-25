import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";

import {
    Link
} from 'react-router-dom';

export function PropertyCard() {


    return (
        <Card>
            <CardHeader title="Property list">
                <CardHeaderToolbar>
                    <Link to="/property/new">

                        <button
                            type="button"
                            className="btn btn-primary"
                        >
                            New Property
          </button>
                    </Link>
                </CardHeaderToolbar>
            </CardHeader>
            <CardBody>
            </CardBody>
        </Card>
    );
}
