import React from 'react';

const Navbar = () => {
    return(
        <div className="sideNav" style={{ height: '100%', 
        width: '25%', position: 'fixed', zIndex: '1', top: '0',
        left: '0', backgroundColor: '#232323', transition: '.5 ease',
        overflowX: 'hidden', paddingTop: '20px', display: 'flex', 
        flexDirection: 'column', alignItems: 'center'}}>
            <a href="#section">Home</a>
            <a href="#section">Requests</a>
            <a href="#section">Maintenance</a>
            <a href="#section">Logout</a>
        </div>
    );
};

export default Navbar;