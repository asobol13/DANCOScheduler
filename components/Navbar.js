import React from 'react';

const Navbar = () => {
    return(
        <div className="sideNav" style={{ height: '100%', 
        width: '25%', position: 'fixed', zIndex: '1', top: '0',
        left: '0', backgroundColor: '#232323', transition: '.5 ease',
        overflowX: 'hidden', paddingTop: '20px', paddingBottom: '20px', 
        display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="sectionOne" style={{ padding: '20px'}}>
                <a href="#section">Home</a>
            </div>
            <div className="sectionTwo" style={{ padding: '20px'}}>
                <a href="#section" onclick="">Requests</a>
            </div>
            <div className="sectionThree" style={{ padding: '20px'}}>
                <a href="#section">Maintenance</a>
            </div>
            <div className="sectionFour" style={{ padding: '20px'}}>
                <a href="#section">Logout</a>
            </div>
        </div>
    );
};

export default Navbar;