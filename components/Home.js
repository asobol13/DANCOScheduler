import React from 'react';
import Navbar from '../layouts/Navbar.js';
import Calendar from './Calendar.js';

const Page1 = () => {
  return (
    <div className="container-fluid">
    <div className="row">
        <Navbar />
        <div className="col-md-10 ms-sm-auto">
          <div className="container">
            <h1>Welcome User!</h1>
          </div>
          <div className="container">
            <Calendar />
          </div>
        </div>
    </div>
</div>
  );
};

export default Page1;