import moment from 'moment';
// const moment = require('moment');


function getPreviousMonday() {
  return moment().startOf('isoWeek');
}

function getCurrentWeekNumbers() {
  const monday = getPreviousMonday();
  return [moment(monday).format('W'), moment(monday).add(1, 'w').format('W')];
}

function getCurrentTenDays() {
  const monday = getPreviousMonday();
  return {
    1: monday,
    2: moment(monday).add(1, 'd'),
    3: moment(monday).add(2, 'd'),
    4: moment(monday).add(3, 'd'),
    5: moment(monday).add(4, 'd'),
    6: moment(monday).add(7, 'd'),
    7: moment(monday).add(8, 'd'),
    8: moment(monday).add(9, 'd'),
    9: moment(monday).add(10, 'd'),
    10: moment(monday).add(11, 'd'),
  };
}

/**
 * Get offset for when to issue blocks start and end in the 2 week grid
 * @param {string} datestring yyyy-mm-dd
 */

/* eslint-disable */
function getColumnOffsetFromLastMonday(datestring) {
  
  const monday = getPreviousMonday();
  return monday - moment(datestring);

  /*
  const offsetDate = moment(datestring);

  const diff = offsetDate.diff(monday);

  const duration = moment.duration(diff);
  const hours = Math.round(duration.asDays());
  // return diff;
  return hours;
  */
}

export default {
  getPreviousMonday,
  getCurrentTenDays,
  getCurrentWeekNumbers,
  getColumnOffsetFromLastMonday,
};
