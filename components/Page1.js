import React from 'react';
import Navbar from './Navbar.js';
import Calendar from './Calendar.js';

const Page1 = () => {
  return (
    <div>
      <Navbar />
      <h2>Welcome User!</h2>
      <p>Page 1 of the application</p>
      <p>Calendar goes here</p>
      <Calendar/>
    </div>
  );
};

export default Page1;