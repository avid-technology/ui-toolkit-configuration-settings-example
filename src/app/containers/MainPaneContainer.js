/* eslint-disable no-alert */
/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import React from 'react';
import Header from '../components/Header';
import Warning from '../components/Warning';
import Approved from '../components/Approved';

class PaneContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            applicationKey: '',
            username: '',
            isApplicationKey: false,
            isUsername: false,
            isWarning: false,
            isApproved: false,
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
                            <input type="text" className="cux-form-input-text" style={{width:'70%'}} id="key" disabled="true" value={this.state.applicationKey}/>
                            <input type="button" className="cux-button-size-small cux-button-type-default" style={{width: '85px', height: '25px', 'margin-right': '5px', 'margin-left': '5px'}} value="Generate key" onClick={this.generateRandomKey.bind()}/>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="cux-form-field-wrapper cux-required" style={{'margin-right': '10px'}}>
                        <label className="cux-field-item-label" htmlFor="userName">Set username </label>
                        <div className="cux-form-input-default-width">
                            <input type="text" className="cux-form-input-text" style={{width:'70%'}} id="userName" onInput={this.readUsername.bind()}/>
                        </div>
                    </div>
                </div>
                <div className="cux-form-button-container">
                    <input type="button" className="cux-button-size-small cux-button-type-default" style={{width: '85px', height: '25px'}} value="    Confirm" onClick={this.confirm.bind()}/>
                </div>
                <br/>
                {this.state.isWarning && <Warning closeWindow={this.closeWindows}/>}
                {this.state.isApproved && <Approved closeWindow={this.closeWindows} username={this.state.username} applicationKey={this.state.applicationKey}/>}
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

    confirm = () => {
        if (!this.state.isUsername || this.state.username.length < 1) {
            this.setState({isWarning: true});
        }
        if (!this.state.isApplicationKey) {
            this.setState({isWarning: true});
        }
        if (this.state.isApplicationKey && this.state.isUsername && this.state.username.length > 1) {
            this.setState({isApproved: true});
        }
    };

    closeWindows = () => {
        this.setState({isWarning: false, isApproved: false});
    };
}

export default PaneContainer;
