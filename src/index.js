/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import appConfig from './package.json';

import ViewConfig from './avid_api/view/ViewConfig';

export const avid = [
    {
        name: `${appConfig.identity.appName}-default-theme`,
        provides: ['theme'],
        create: () => ({
            key: 'dark', css: './style.css',
        }),
    },
    {
        name: `${appConfig.identity.appName}`,
        provides: ['configuration-settings'],
        create: () => ViewConfig,
    },
];


