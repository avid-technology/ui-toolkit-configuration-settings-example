/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import appConfig from './package.json';

import ViewConfig from './avid_api/view/ViewConfig';
import AppEntry from './avid_api/entry/EntryConfig';
import ApplicationContainer from './app';

const isAdminApp = appConfig.avid.hasOwnProperty('mode') && appConfig.avid.mode[0] === 'admin';
const providing = isAdminApp ? 'adminApps' : 'apps';
export const avid = [
    {
        name: `${appConfig.identity.appName}`,
        provides: ['configuration-settings'],
        create: () => {
            return {
                config: {
                    index: 200,
                    displayName: 'test',
                },
                factory: () => {
                    return new ApplicationContainer();
                },
            };
        },
    },
];


