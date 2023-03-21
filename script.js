'use strict';

const headerTime = document.querySelector('.header-time');
const months = document.querySelector('.months');
const weeks = document.querySelector('.weeks');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const mins = document.querySelector('.mins');



// set 2023 start time
const start2023 = new Date(2023, 0, 1);



// calculate months
const calcMonthsPassed = (date1, date2) => Math.trunc(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24 * 24))  - 1);

// calculate days
const calcDaysPassed = (date1, date2) => Math.trunc(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24))  - 1);

// calculate weeks
const calcWeeksPassed = (date1, date2) => Math.trunc(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24 * 7)));

// calculate hours
const calcHrsPassed = (date1, date2) => Math.trunc(Math.abs((date1 - date2) / (1000 * 60 * 60)) - 24);

// calculate minutes
const calcMinsPassed = (date1, date2) => Math.trunc(Math.abs((date1 - date2) / (1000 * 60)) - 1);


const day = calcDaysPassed(new Date(), start2023);
const week = calcWeeksPassed(new Date(), start2023);
const month = calcMonthsPassed(new Date(), start2023);
const hour = calcHrsPassed(new Date(), start2023);
const min = calcMinsPassed(new Date(), start2023);

// display month
months.innerHTML = month;

// display weeks
weeks.innerHTML = week;

// display days
days.innerHTML = day;




// current time, hour & minute functionality ===============================================

// refresh time
function refreshTime(){
    setTimeout(displayTime, 1000);
}

// refresh min
function refreshMin(){
    setTimeout(displayMin, 60000);
}

// refresh hour
function refreshHour(){
    setTimeout(displayHour, 1000 * 60 * 60);
}

// display current time
function displayTime(){
    const now = new Date();

    // display current time & date
    headerTime.innerHTML = `${now.toDateString()} \u00A0 - \u00A0 ${now.getHours()} : ${(now.getMinutes()<10?'0':'') + now.getMinutes()} : ${(now.getSeconds()<10?'0':'') + now.getSeconds()}`;

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


