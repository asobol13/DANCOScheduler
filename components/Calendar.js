import React from 'react';

const Calendar = () => {
    return(
        <div className="wrapper">
            <header>
                <p className="currentMonth">September 2023</p>
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
                <ul className="days">
                    <li>#</li>
                </ul>
            </div>
        </div>
    );
};

export default Calendar;
