import moment from 'moment';

import momentBusinessDiff from './momentjs-business';

momentBusinessDiff(moment);

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
function getIssueTimeRange(datestring) {

  const monday = getPreviousMonday();
  const offsetDate = moment(datestring);

  const diff = offsetDate.diff(monday);

  const duration = moment.duration(diff);

  const days = duration.asDays();

  let businessDays = moment().businessDiff(moment().subtract(days, 'd'));
  if (businessDays < 0) businessDays = 0;

  const columnOffset = businessDays + 2;
  console.log(columnOffset);
  return columnOffset;

}

export default {
  getPreviousMonday,
  getCurrentTenDays,
  getCurrentWeekNumbers,
  getIssueTimeRange,
};
