'use strict';

const headerTime = document.querySelector('.header-time');
const heroYear = document.querySelector('.hero_header-year');
const months = document.querySelector('.months');
const weeks = document.querySelector('.weeks');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const mins = document.querySelector('.mins');


// set current year
const currentYear = (new Date).getFullYear();

// set year start time
const startYear = new Date(currentYear, 0, 1);

// set year in hero header text to current year
heroYear.textContent = currentYear;

// calculate months
const calcMonthsPassed = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return (d1.getFullYear() - d2.getFullYear()) * 12 + (d1.getMonth() - d2.getMonth());
}

// calculate days
const calcDaysPassed = (date1, date2) => Math.trunc(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24)));

// calculate weeks
const calcWeeksPassed = (date1, date2) => Math.trunc(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24 * 7)));

// calculate hours
const calcHrsPassed = (date1, date2) => Math.trunc(Math.abs((date1 - date2) / (1000 * 60 * 60)));

// calculate minutes
const calcMinsPassed = (date1, date2) => Math.trunc(Math.abs((date1 - date2) / (1000 * 60)));




// current time, hour & minute functionality ====================================================================================

updateCounters();

// display current time
function displayTime(){
    const now = new Date();

    // display current time & date
    headerTime.innerHTML = 
    `${now.toDateString()} \u00A0 - \u00A0 
    ${(now.getHours()<10?'0':'') + now.getHours()} : 
    ${(now.getMinutes()<10?'0':'') + now.getMinutes()} : 
    ${(now.getSeconds()<10?'0':'') + now.getSeconds()}`;

    // refresh time
    setTimeout(displayTime, 1000);
}
displayTime();


// update all counters function
function updateCounters() {
    const day = calcDaysPassed(new Date(), startYear);
    const week = calcWeeksPassed(new Date(), startYear);
    const month = calcMonthsPassed(new Date(), startYear);
    const hour = calcHrsPassed(new Date(), startYear);
    const min = calcMinsPassed(new Date(), startYear);

    // display month
    months.innerHTML = month.toLocaleString();
    weeks.innerHTML = week.toLocaleString();
    days.innerHTML = day.toLocaleString();
    hours.innerHTML = hour.toLocaleString();
    mins.innerHTML = min.toLocaleString();

    setTimeout(updateCounters, 60000);
}


