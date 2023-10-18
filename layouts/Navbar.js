import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation () {
    const navStyle = {
        height: '80px',
        padding: '10px 0',
        fontSize: '24px',
    };
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar" style={navStyle}>
            <div className="position-sticky">
                <div className="nav flex-column">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                    <a className="nav-link" href="/requests">Requests</a>
                    <a className="nav-link" href="/maintenance">Maintenance</a>
                    <a className="nav-link" href="/logout">Logout</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;