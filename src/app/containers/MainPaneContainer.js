/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MainPane from '../components/MainPane';
import actionTypes from '../redux/actions/actionTypes';
import {makeAction} from '../redux/actions/makeAction';

class PaneContainer extends React.Component {
    render() {
        return (
            <p>tomek</p>);
    }
}

PaneContainer.propTypes = {
    token: PropTypes.bool.isRequired,
    exampleAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    token: state.example.token,
});

const mapDispatchToProps = {
    exampleAction: makeAction(actionTypes.EXAMPLE_ACTION),
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PaneContainer);
