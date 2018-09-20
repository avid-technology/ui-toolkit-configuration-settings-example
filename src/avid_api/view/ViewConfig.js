/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import appConfig from '../../package.json';
import icon from '../../images/icon.json';
import ViewWrapper from './ViewWrapper';
import ApplicationContainer from '../../app/index'

const ViewConfig = {
    config: {
        index: 200,
        displayName: 'test',
    },
    factory: () => {
        return new ApplicationContainer();
    }
};

export default ViewConfig;
