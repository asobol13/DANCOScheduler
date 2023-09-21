import React, { useState } from 'react';

const Calendar = () => {
  // Get the current date
  const currentDate = new Date();

  // Get the current year and month
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

  // Get the number of days in the current month
  const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();

  // Create an array of day numbers for the current month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calendar-box"style={{ width: '75%',
        border: '1px solid black', padding: '10px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)', backgroundColor: '#fff'}}>
      <header>
        <p className="currentMonth">{currentMonth} {currentYear}</p>
        <div className="icons">
          <p>Add icons here</p>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <div className="days">
          {daysArray.map((day) => (
            <div key={day} className="day">
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;