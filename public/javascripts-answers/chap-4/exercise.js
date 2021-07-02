/* eslint-disable */

// Write a function that calculate number of seconds in a week.
function numOfSecInAWeek() {
  return 7 * 24 * 60 * 60;
}

// Write a function that accepts number of days and returns the number of seconds in those days.
function numOfSecondForDay(day) {
  return day * 24 * 60 * 60;
}

// Write a function that accepts number of period and the period unit and returns the number of seconds in the period.
// The period unit can be ‘day’ or ‘week’. When period unit is not provided, default it to ‘day’.
function getNumOfSeconds(numOfPeriod, periodUnit = 'day') {
  if (periodUnit === 'day') {
    return numOfPeriod * 24 * 60 * 60;
  }
  return getNumOfSeconds(numOfPeriod * 7, 'day');
}

const getRandomInt = function (min, max) {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
};

const getRandomIntArrow = (min, max) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
};
