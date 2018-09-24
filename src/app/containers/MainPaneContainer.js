/* eslint-disable no-alert */
/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import React from 'react';
import Header from '../components/Header';

class PaneContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            applicationKey: '',
            isApplicationKey: false,
            username: '',
            isUsername: false,
        };
    }

    render() {
        return (
            <div className="cux-form-box" style={{'background-color': '#292a31'}}>
                <Header/>
                <div>
                    <div className="cux-form-field-wrapper cux-required" style={{'margin-top': '2px', 'margin-bottom': '5px', 'margin-right': '10px'}}>
                        <label className="cux-field-item-label" htmlFor="userName">Generate application key </label>
                        <div className="cux-form-input-default-width">
                            <input type="text" className="cux-form-input-text" id="key" disabled="true"
                                value={this.state.applicationKey}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cux-form-field-wrapper cux-required" style={{'margin-right': '10px'}}>
                        <label className="cux-field-item-label" htmlFor="userName">Set username </label>
                        <div className="cux-form-input-default-width">
                            <input type="text" className="cux-form-input-text" id="userName"
                                onInput={this.readUsername.bind()}/>
                        </div>
                    </div>
                </div>
                <div className="cux-form-button-container">
                    <input type="button" className="cux-button-size-small cux-button-type-default"
                        style={{width: '85px', height: '25px', 'margin-right': '10px'}} value="Generate key"
                        onClick={this.generateRandomKey.bind()}/>
                    <input type="button" className="cux-button-size-small cux-button-type-default"
                        style={{width: '95px', height: '25px'}} value="Create Account" onClick={this.createAccount.bind()}/>
                </div>
                <br/>
            </div>
        );
    }

    generateRandomKey = () => {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let text = '';
        for (let i = 0; i < 25; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        this.setState({applicationKey: text, isApplicationKey: true});
    };

    readUsername = (event) => {
        this.setState({username: event.target.value, isUsername: true});
    };

    createAccount = () => {
        const username = this.state.username;
        const applicationKey = this.state.applicationKey;
        if (!this.state.isUsername || this.state.username.length < 1) {
            alert('Set username');
        }
        if (!this.state.isApplicationKey) {
            alert('Please generate application Key');
        }
        if (this.state.isApplicationKey && this.state.isUsername && this.state.username.length > 1) {
            alert('Generated user ' + username+ ', with key: ' + applicationKey);
        }
    }
}

export default PaneContainer;
