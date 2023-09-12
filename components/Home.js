import React from 'react';
import Navbar from './Navbar.js';
import Calendar from './Calendar.js';

const Page1 = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome User!</h1>
      <Calendar />
    </div>
  );
};

export default Page1;