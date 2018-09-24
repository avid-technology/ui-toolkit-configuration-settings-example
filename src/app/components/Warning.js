import React from 'react';
import PropTypes from 'prop-types';

const Warning = ({closeWindow}) => {
    return (
        <div className="cux-shadow-box" style={{display: 'flex', 'justify-content': 'center', 'align-items': 'center', 'background-color': 'rgba(41,42,49,.6)', 'opacity': '1'}}>
            <div className="cux-notification">
                <div className="warning"/>
                <div>Not enough data</div>
                <div className="message">Fill all fields</div>
                <div className="message">
                    <div>
                        <input type="button" className="cux-button-size-small cux-button-type-default" style={{width: '50px', height: '25px'}} value="Close" onClick={closeWindow}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

Warning.propTypes = {
    closeWindow: PropTypes.func.isRequired,
};

export default Warning;
