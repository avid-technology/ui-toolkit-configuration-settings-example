import React from 'react';
import PropTypes from 'prop-types';

const Approved = ({closeWindow, username, applicationKey}) => {
    return (
        <div className="cux-shadow-box" style={{display: 'flex', 'justify-content': 'center', 'align-items': 'center', 'background-color': 'rgba(41,42,49,.6)', 'opacity': '1'}}>
            <div className="cux-notification">
                <div className="info"/>
                <div>Your username: {username}</div>
                <div className="message">Your application key: {applicationKey}</div>
                <div className="message">
                    <div>
                        <input type="button" className="cux-button-size-small cux-button-type-default" style={{width: '50px', height: '25px'}} value="Close" onClick={closeWindow}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

Approved.propTypes = {
    closeWindow: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    applicationKey: PropTypes.string.isRequired,
};

export default Approved;
