import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation () {
    const navStyle = {
        height: '80px',
        padding: '10px 0',
        fontSize: '24px',
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent" style={navStyle}>
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                    <a className="nav-link" href="/page1">Page1</a>
                    <a className="nav-link" href="/page2">Page2</a>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;