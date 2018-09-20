/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import appConfig from '../../package.json';
import icon from '../../images/icon.json';
import EntryWrapper from './EntryWrapper';

export default {
    factory: (config) => {
        return new EntryWrapper(config);
    },
    config: {
        index: 200,
        displayName: 'test',
    },
};
