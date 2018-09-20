/**
 * Copyright 2017 by Avid Technology, Inc.
 */
/* eslint-disable */

import ReactDOM from 'react-dom';

import ApplicationContainer from '../../app/index';

// Need to be bcs it is used in main App :
export default class ViewWrapper {
    render({domElement}) {
        this.el = domElement;
        ReactDOM.render(
                <PaneContainer/>,
            domElement,
        );
    }

    destroy() {
        ReactDOM.unmountComponentAtNode(this.el);
    }
}
