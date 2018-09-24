import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="cux-triggerContentWrapper cux-trigger-collapsible cux-profileAccordion-trigger " style={{'padding': '18px', 'justify-content': 'center', 'background-color': '#33353d'}}>
                <p style={{'font-size': '14px'}}>Example Configuration Settings</p>
            </div>
        );
    }
}

export default Header;
