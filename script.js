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

// set 2023 start time
const startYear = new Date(`${currentYear}`, 0, 1);


// TODO: remove this line of code 
console.log(startYear)


// set year in hero header text to current year
heroYear.textContent = currentYear;

// calculate months
const calcMonthsPassed = (date1, date2) => Math.trunc(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24 * 24)));

// calculate days
const calcDaysPassed = (date1, date2) => Math.trunc(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24)));

// calculate weeks
const calcWeeksPassed = (date1, date2) => Math.trunc(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24 * 7)));

// calculate hours
const calcHrsPassed = (date1, date2) => Math.trunc(Math.abs((date1 - date2) / (1000 * 60 * 60)) - 24);

// calculate minutes
const calcMinsPassed = (date1, date2) => Math.trunc(Math.abs((date1 - date2) / (1000 * 60)));


const day = calcDaysPassed(new Date(), startYear);
const week = calcWeeksPassed(new Date(), startYear);
const month = calcMonthsPassed(new Date(), startYear);
const hour = calcHrsPassed(new Date(), startYear);
const min = calcMinsPassed(new Date(), startYear);

// display month
months.innerHTML = month;

// display weeks
weeks.innerHTML = week;

// display days
days.innerHTML = day;


console.log(day)
console.log(week)
console.log(month)
console.log(hour)
console.log(min)




// current time, hour & minute functionality ====================================================================================

// refresh header time function
function refreshTime(){
    setTimeout(displayTime, 1000);
}

// refresh min function
function refreshMin(){
    setTimeout(displayMin, 60000);
}

// refresh hour function
function refreshHour(){
    setTimeout(displayHour, 1000 * 60 * 60);
}

// display current time
function displayTime(){
    const now = new Date();

    // display current time & date
    headerTime.innerHTML = 
    `${now.toDateString()} \u00A0 - \u00A0 
    ${(now.getHours()<10?'0':'') + now.getHours()} : 
    ${(now.getMinutes()<10?'0':'') + now.getMinutes()} : 
    ${(now.getSeconds()<10?'0':'') + now.getSeconds()}`;

    // display hours
    // hours.innerHTML = hour;

    // display mins
    // mins.innerHTML = min;

    // refresh time
    refreshTime();
}
displayTime();


// display current hour
function displayHour(){
    // display hours
    hours.innerHTML = hour.toLocaleString();
    refreshHour();
}
displayHour();


// display current minute
function displayMin(){
    // display mins
    mins.innerHTML = min.toLocaleString();
    refreshMin();
}
displayMin();


