import React, { Fragment } from 'react';
import Resources from '../../../Constants/Resources';
import DisplayHeading from '@tds/core-display-heading';
import { Attention } from '@tds/core-decorative-icon';

const NotFound = () => {
    return (
        <Fragment>
            <div className="paddingSmall align-center">
            <Attention size="48" /> <DisplayHeading>{Resources.ERROR_RESOURCE_NOT_FOUND}</DisplayHeading>
            </div>
        </Fragment>
    );
};

export default NotFound;
